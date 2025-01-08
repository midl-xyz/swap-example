import { useToken } from '@/entities';
import { TokenButton, useTokenBalance } from '@/features';
import { Button, InputGroup, NumberInput } from '@/shared/ui';
import millify from 'millify';
import type { ChangeEventHandler, InputHTMLAttributes } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useDebouncedCallback } from 'use-debounce';
import { formatUnits } from 'viem';
import { useChainId } from 'wagmi';
import { css, cx } from '~/styled-system/css';
import { hstack, vstack } from '~/styled-system/patterns';

type SwapInputProps = {
  amountName: string;
  tokenName: string;
  label?: React.ReactNode;
  onMax?: (e: ChangeEventHandler<HTMLInputElement>) => void;
} & InputHTMLAttributes<HTMLInputElement>;

/**
 * SwapInput component.
 * Works only with the `useForm` hook from `react-hook-form`.
 */
export const SwapInput = ({
  amountName,
  tokenName,
  label,
  onMax,
  ...rest
}: SwapInputProps) => {
  const { control, watch, setValue, trigger } = useFormContext();
  const chainId = useChainId();
  const token = watch(tokenName);
  const tokenInfo = useToken(token, chainId);
  const balance = useTokenBalance(token);

  const triggerValidation = useDebouncedCallback(trigger, 0);

  const applyMax = () => {
    setValue(
      amountName,
      formatUnits(balance.data?.balance ?? BigInt(0), tokenInfo.decimals),
      {
        shouldValidate: true,
        shouldTouch: true,
        shouldDirty: true,
      },
    );

    if (onMax) {
      onMax({
        target: {
          value: formatUnits(
            balance.data?.balance ?? BigInt(0),
            tokenInfo.decimals,
          ),
        },
      } as unknown as ChangeEventHandler);
    }
    triggerValidation();
  };

  const { error } = control.getFieldState(amountName);
  const hasError = !!error;

  return (
    <InputGroup
      className={hstack({
        borderColor: hasError ? 'red.500' : 'transparent',
        borderWidth: 1,
        borderStyle: 'solid',
      })}
    >
      <label
        className={vstack({
          alignItems: 'stretch',
          width: '100%',
          gap: 2,
        })}
      >
        {label && <span>{label}</span>}
        <div className={hstack()}>
          <Controller
            control={control}
            name={amountName}
            render={({ field }) => (
              <>
                <NumberInput
                  {...rest}
                  {...field}
                  autoComplete="off"
                  precision={tokenInfo.decimals}
                  min={tokenInfo.decimals === 0 ? 5000 : 0}
                  className={cx(
                    rest.className,
                    css({
                      textStyle: 'h4',
                      flexGrow: 1,
                      pl: 1,
                      caretColor: 'orange.500',
                      _focus: {
                        boxShadow: 'none',
                      },
                    }),
                  )}
                  value={field.value ?? ''}
                  onChange={(e) => {
                    field.onChange(e);
                    rest.onChange?.(e);
                  }}
                />
              </>
            )}
          />
          <Controller
            control={control}
            name={tokenName}
            render={({ field }) => {
              return <TokenButton {...field} chainId={chainId} />;
            }}
          />

          {balance.data?.balance !== undefined ? (
            <>
              <Button
                className={css({
                  position: 'absolute',
                  right: 4,
                  top: 1,
                  textStyle: 'caption',
                  color: 'neutral.700',
                  fontSize: 12,
                  px: 1,
                  py: 1,
                  height: 'auto',
                  borderRadius: 'sm',
                })}
                onClick={applyMax}
                appearance="ghost"
              >
                Use max
              </Button>
              <div
                className={css({
                  textStyle: 'caption',
                  position: 'absolute',
                  right: 4,
                  bottom: 1,
                  color: 'neutral.500',
                })}
              >
                {balance.data?.balance
                  ? millify(parseFloat(balance.data.formattedBalance!), {
                      precision: 4,
                    })
                  : '0'}
              </div>
            </>
          ) : null}
        </div>
        {hasError && (
          <div
            className={css({
              position: 'absolute',
              bottom: -5,
              left: 4,
              color: 'red.500',
              fontSize: 12,
            })}
          >
            {error.message}
          </div>
        )}
      </label>
    </InputGroup>
  );
};
