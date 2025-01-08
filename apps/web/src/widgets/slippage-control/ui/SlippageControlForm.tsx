'use client';

import { useSlippage } from '@/features';
import { Button, NumberInput } from '@/shared';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { css } from '~/styled-system/css';
import { hstack, vstack } from '~/styled-system/patterns';

type FormData = {
  slippage: string;
};

type SlippageControlFormProps = {
  onClose: () => void;
  autoCommit?: boolean;
};

export const SlippageControlForm = ({
  onClose,
  autoCommit,
}: SlippageControlFormProps) => {
  const [slippage, setSlippage] = useSlippage();

  const { handleSubmit, register, setValue, watch } = useForm<FormData>({
    defaultValues: {
      slippage: parseFloat((slippage * 100).toFixed(2)).toString(),
    },
  });

  const updateSlippage = (slippage: number) => {
    setValue('slippage', parseFloat((slippage * 100).toFixed(2)).toString());
  };

  const onSubmit = (value: FormData) => {
    setSlippage(parseFloat(value.slippage) / 100);
    onClose();
  };

  const slippageValue = watch('slippage');

  useEffect(() => {
    if (autoCommit) {
      setSlippage(parseFloat(slippageValue) / 100);
    }
  }, [autoCommit, slippageValue, setSlippage]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={vstack({
        gap: 8,
        justifyContent: 'stretch',
      })}
    >
      <div className={hstack({ gap: 4 })}>
        <Button onClick={() => updateSlippage(0.001)} appearance="secondary">
          0.1%
        </Button>
        <Button onClick={() => updateSlippage(0.005)} appearance="secondary">
          0.5%
        </Button>
        <Button onClick={() => updateSlippage(0.01)} appearance="secondary">
          1%
        </Button>
        <div
          className={css({
            position: 'relative',
          })}
        >
          <NumberInput
            max={100}
            precision={2}
            appearance="tertiary"
            {...register('slippage')}
            className={css({
              paddingEnd: 2,
            })}
          />
          <span
            className={css({
              position: 'absolute',
              right: 2,
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'neutral.400',
            })}
          >
            %
          </span>
        </div>
      </div>
      {!autoCommit && (
        <Button
          type="submit"
          appearance="tertiary"
          className={css({
            alignSelf: 'flex-end',
          })}
        >
          Save
        </Button>
      )}
    </form>
  );
};
