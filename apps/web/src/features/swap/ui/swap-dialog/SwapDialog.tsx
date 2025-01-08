import { IntentionSigner } from '@/features/btc/ui/IntentionSigner';
import { Dialog, DialogContent, DialogOverlay } from '@/shared';
import type { DialogProps } from '@radix-ui/react-dialog';
import {
  type Address,
  encodeAbiParameters,
  keccak256,
  parseUnits,
  toHex,
  zeroAddress,
} from 'viem';
import { useAccount } from 'wagmi';
import { css } from '~/styled-system/css';
import { vstack } from '~/styled-system/patterns';

type SwapDialogProps = DialogProps & {
  onSuccessfulSwap?: () => void;
  onClose: () => void;
  tokenIn: Address;
  amountIn: bigint;
  tokenOut: Address;
};

export const SwapDialog = ({
  onClose,
  onSuccessfulSwap,
  tokenIn,
  tokenOut,
  amountIn,
  ...rest
}: SwapDialogProps) => {
  const { address } = useAccount();

  const slot = keccak256(
    encodeAbiParameters(
      [
        {
          type: 'address',
        },
        { type: 'uint256' },
      ],
      [address ?? zeroAddress, 0n],
    ),
  );

  const stateOverride = [
    {
      address: address!,
      balance: parseUnits('100000000000000000000000000', 18), // TODO: very large balance for testing
    },
    ...(tokenIn !== zeroAddress
      ? [
          {
            address: tokenIn,
            stateDiff: [
              {
                slot: slot,
                value: toHex(amountIn, { size: 32 }),
              },
            ],
          },
        ]
      : []),
  ];

  return (
    <Dialog {...rest}>
      <DialogOverlay onClick={onClose} />

      <DialogContent>
        <div className={vstack({ gap: 4, alignItems: 'center' })}>
          <h3
            className={css({
              textStyle: 'h3',
            })}
          >
            Sign intentions to swap
          </h3>

          <IntentionSigner
            stateOverride={stateOverride}
            assetsToWithdraw={[tokenOut]}
            shouldComplete={true}
            onClose={() => {
              onClose();
              onSuccessfulSwap?.();
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
