'use client';

import { useToken } from '@/entities';
import { useLastUsedTokens, useSlippage, useTokenBalance } from '@/features';
import { useSwapMidl } from '@/features/swap/api/useSwapMidl';
import { useSwapRates } from '@/features/swap/api/useSwapRates';
import { SwapDialog } from '@/features/swap/ui/swap-dialog/SwapDialog';
import { tokenList } from '@/global';
import { Button, SwapInput, parseNumberInput } from '@/shared';
import { AiOutlineSwapVertical } from '@/shared/assets';
import { removePercentage } from '@/shared/lib/removePercentage';
import { AccountButton, SlippageControl } from '@/widgets';
import { SwapDetails } from '@/widgets/swap-form/ui/SwapDetails';
import { getCorrectToken } from '@/widgets/swap-form/ui/utils';
import { useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useDebouncedCallback } from 'use-debounce';
import { type Address, formatUnits, parseUnits } from 'viem';
import { useAccount, useChainId } from 'wagmi';
import { css } from '~/styled-system/css';
import { vstack } from '~/styled-system/patterns';

type FormData = {
  inputToken: Address;
  outputToken: Address;
  inputTokenAmount: string;
  outputTokenAmount: string;
};

export const SwapForm = () => {
  const { selectTokens } = useLastUsedTokens();
  const searchParams = useSearchParams();
  const form = useForm<FormData>({
    defaultValues: {
      inputToken: '' as Address,
      outputToken: '' as Address,
      inputTokenAmount: '',
      outputTokenAmount: '',
    },
  });

  const chainId = useChainId();

  const { watch, handleSubmit, setValue, getValues } = form;
  const { inputToken, outputToken, inputTokenAmount, outputTokenAmount } =
    watch();
  const inputTokenInfo = useToken(inputToken, chainId);
  const outputTokenInfo = useToken(outputToken, chainId);
  const queryClient = useQueryClient();

  const {
    read: readSwapRates,
    error: swapRatesError,
    isFetching: isSwapRatesFetching,
  } = useSwapRates();

  const onInputTokenAmountChange = useDebouncedCallback(async (e) => {
    if (!e.target) {
      return;
    }

    lastChangedInput.current = true;
    const value = parseUnits(
      parseNumberInput(e.target.value),
      inputTokenInfo.decimals,
    );

    const swapRates = await readSwapRates({
      value,
      pair: [
        getCorrectToken({ token: inputToken, chainId }) as Address,
        getCorrectToken({ token: outputToken, chainId }) as Address,
      ],
    });
    if (!swapRates) {
      return;
    }

    const [, outputAmount] = swapRates;

    setValue(
      'outputTokenAmount',
      formatUnits(outputAmount, outputTokenInfo.decimals),
    );
  }, 0);

  const onOutputTokenAmountChange = useDebouncedCallback(async (e) => {
    const value = parseUnits(
      parseNumberInput(e.target.value),
      outputTokenInfo.decimals,
    );

    lastChangedInput.current = false;

    const swapRates = await readSwapRates({
      value,
      pair: [
        getCorrectToken({ token: inputToken, chainId }) as Address,
        getCorrectToken({ token: outputToken, chainId }) as Address,
      ],
      reverse: true,
    });

    if (!swapRates) {
      return;
    }

    const [inputAmount] = swapRates;

    setValue(
      'inputTokenAmount',
      formatUnits(inputAmount, inputTokenInfo.decimals),
    );
  }, 0);

  const { address } = useAccount();

  const onSwapSuccess = () => {
    onInputTokenAmountChange({
      target: { value: inputTokenAmount },
    } as any);
    form.reset();
    toast.success('Swap successful');
  };

  const parsedInputTokenAmount = parseUnits(
    parseNumberInput(inputTokenAmount),
    inputTokenInfo.decimals,
  );

  const lastChangedInput = useRef(true);
  const [slippage] = useSlippage();

  const amountOutMin = removePercentage(
    parseUnits(parseNumberInput(outputTokenAmount), outputTokenInfo.decimals),
    slippage,
  );

  const [isDialogOpen, setDialogOpen] = useState(false);

  const { swapAsync } = useSwapMidl({
    tokenIn: inputToken,
    amountIn: parsedInputTokenAmount,
  });

  const onSubmit = async () => {
    await swapAsync({
      to: address!,
      tokenOut: outputToken,
      deadline: BigInt(Math.floor(Date.now() / 1000) + 60 * 20),
      amountOutMin,
    });
    setDialogOpen(true);
  };

  const onSwapInput = () => {
    const { outputTokenAmount, inputTokenAmount, inputToken, outputToken } =
      getValues();

    if (lastChangedInput.current) {
      setValue('outputTokenAmount', inputTokenAmount);

      setValue('inputTokenAmount', '');
      setValue('inputToken', outputToken);
      setValue('outputToken', inputToken);

      onOutputTokenAmountChange({
        target: { value: inputTokenAmount },
      } as any);
    } else {
      setValue('inputTokenAmount', outputTokenAmount);
      setValue('outputTokenAmount', '');
      setValue('inputToken', outputToken);
      setValue('outputToken', inputToken);

      onInputTokenAmountChange({
        target: { value: outputTokenAmount },
      } as any);
    }
  };

  useEffect(() => {
    if (inputToken && inputTokenAmount) {
      onInputTokenAmountChange({
        target: { value: inputTokenAmount },
      } as any);
    }

    if (outputToken && outputTokenAmount) {
      onOutputTokenAmountChange({
        target: { value: outputTokenAmount },
      } as any);
    }

    selectTokens([
      { chain: chainId, inputName: 'inputToken', token: inputToken },
      { chain: chainId, inputName: 'outputToken', token: outputToken },
    ]);

    form.trigger();
  }, [inputToken, outputToken]);

  useEffect(() => {
    const inputTokenSymbol = searchParams.get('inputToken');
    const outputTokenSymbol = searchParams.get('outputToken');
    if (inputTokenSymbol && outputTokenSymbol) {
      const inputTokenFound = tokenList.find(
        ({ symbol }) => symbol === inputTokenSymbol,
      );
      const outputTokenFound = tokenList.find(
        ({ symbol }) => outputTokenSymbol === symbol,
      );

      if (inputTokenFound && outputTokenFound) {
        form.reset({
          inputToken: inputTokenFound.address,
          outputToken: outputTokenFound.address,
        });
      }
    }
  }, []);

  const {
    data: { balance: inputTokenBalance },
  } = useTokenBalance(inputToken, { chainId, address });

  const isBalanceBigEnough =
    parsedInputTokenAmount <= (inputTokenBalance ?? Infinity);

  const isFormFilled =
    !!inputTokenAmount && !!outputTokenAmount && !!inputToken && !!outputToken;

  const getButtonText = () => {
    if (!address) {
      return <>Connect wallet</>;
    }
    if (isSwapRatesFetching) {
      return <>Getting the best rate...</>;
    }
    if (!isBalanceBigEnough) {
      return <>Insufficient Balance</>;
    }
    if (!isSwapRatesFetching && !swapRatesError && isBalanceBigEnough) {
      return 'Swap';
    }
    if (!isSwapRatesFetching && Boolean(swapRatesError) && isFormFilled) {
      return 'Insufficient liquidity';
    }

    return 'Swap';
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={vstack({
          gap: 8,
          alignItems: 'stretch',
          bg: 'neutral.100',
          borderRadius: '2xl',
          px: {
            base: 2,
            md: 16,
          },
          py: 8,
          width: 'full',
          maxWidth: 640,
        })}
      >
        <h2
          className={css({
            textStyle: 'h2',
            textAlign: 'center',
          })}
        >
          Swap
        </h2>

        <div
          className={vstack({
            alignItems: 'stretch',
            gap: 4,
            position: 'relative',
          })}
        >
          <SwapInput
            placeholder="0"
            label="You pay"
            tokenName="inputToken"
            amountName="inputTokenAmount"
            onChange={onInputTokenAmountChange}
            onMax={onInputTokenAmountChange}
          />

          <Button
            onClick={onSwapInput}
            aria-label="Swap input and output tokens"
            appearance="secondary"
            className={css({
              position: 'absolute',
              top: '50%',
              left: '50%',
              zIndex: 2,
              transform: 'translate(-50%, -50%)',
            })}
          >
            <AiOutlineSwapVertical width={24} height={24} />
          </Button>

          <SwapInput
            placeholder="0"
            label="You receive"
            tokenName="outputToken"
            amountName="outputTokenAmount"
            onChange={onOutputTokenAmountChange}
            onMax={onOutputTokenAmountChange}
          />
        </div>
        <SlippageControl />
        {!address ? (
          <AccountButton />
        ) : (
          <Button
            type="submit"
            appearance="primary"
            disabled={
              isSwapRatesFetching ||
              Boolean(swapRatesError) ||
              !isFormFilled ||
              !isBalanceBigEnough
            }
          >
            {getButtonText()}
          </Button>
        )}

        {inputToken && outputToken && inputTokenAmount && outputTokenAmount ? (
          <SwapDetails
            amountOutMin={Number.parseFloat(
              formatUnits(amountOutMin, outputTokenInfo.decimals),
            ).toFixed(2)}
            inputTokenInfo={inputTokenInfo}
            outputTokenInfo={outputTokenInfo}
            inputTokenAmount={inputTokenAmount}
            outputTokenAmount={outputTokenAmount}
          />
        ) : null}

        <SwapDialog
          onSuccessfulSwap={onSwapSuccess}
          open={isDialogOpen}
          tokenOut={outputToken}
          tokenIn={inputToken}
          amountIn={parsedInputTokenAmount}
          onClose={() => {
            setDialogOpen(false);
          }}
        />
      </form>
    </FormProvider>
  );
};
