import { TokenLogo } from '@/features';
import { useRuneDialog } from '@/features/runes/api';
import { Button, Dialog, DialogContent, DialogOverlay } from '@/shared';
import {
  calculateTransactionsCost,
  multisigAddress,
} from '@midl-xyz/midl-js-executor';
import {
  useConfig,
  useEdictRune,
  useRune,
  useWaitForTransaction,
} from '@midl-xyz/midl-js-react';
import { type DialogProps, DialogTitle } from '@radix-ui/react-dialog';
import { useQuery } from '@tanstack/react-query';
import { Loader2Icon } from 'lucide-react';
import toast from 'react-hot-toast';
import { formatUnits } from 'viem';
import { css } from '~/styled-system/css';
import { vstack } from '~/styled-system/patterns';

type AddRuneDialogProps = DialogProps & {
  onClose: () => void;
};

export const AddRuneDialog = ({ onClose, ...rest }: AddRuneDialogProps) => {
  const { state } = useRuneDialog();
  const { rune } = useRune({
    runeId: state.value.runeId,
    query: {
      enabled: Boolean(state.value.runeId),
    },
  });

  const {
    edictRune,
    data,
    isPending: isTransactionBeingFormed,
    reset,
  } = useEdictRune({
    mutation: {
      onError(error) {
        console.error(error);
        toast.error(error.message);
      },
      onSuccess(data) {
        waitForTransaction({
          txId: data.tx.id,
        });
      },
    },
  });
  const {
    waitForTransaction,
    isSuccess,
    isPending,
    reset: resetWait,
  } = useWaitForTransaction();
  const config = useConfig();
  const { network } = config;

  const { data: edictFee } = useQuery({
    queryKey: ['edictFee'],
    queryFn: async () => {
      const fee = await calculateTransactionsCost(
        [
          {
            gas: 0n,
          },
        ],
        config,
        { hasRunesDeposit: true },
      );

      return fee > 546n ? fee : 546n;
    },
  });

  const onConfirm = async () => {
    edictRune({
      transfers: [
        {
          receiver: multisigAddress[network!.id],
          amount: Number(edictFee),
        },
        {
          runeId: rune!.id,
          amount: 1n,
          receiver: multisigAddress[network!.id],
        },
      ],
      publish: true,
    });
  };

  const handleClose = () => {
    onClose();
    reset();
    resetWait();
  };

  return (
    <Dialog {...rest}>
      <DialogOverlay onClick={handleClose} />
      <DialogContent
        onEscapeKeyDown={handleClose}
        className={css({
          maxW: '460px',
          width: '100%',
        })}
      >
        {isSuccess && (
          <div
            className={vstack({
              gap: 8,
              justifyContent: 'stretch',
            })}
          >
            <DialogTitle asChild>
              <h1
                className={css({
                  textStyle: 'h3',
                })}
              >
                Transaction confirmed
              </h1>
            </DialogTitle>

            <p>
              The transaction has been confirmed. The rune has been added to the
              MIDL ecosystem.
            </p>

            <Button onClick={handleClose}>Close</Button>
          </div>
        )}

        {isPending && (
          <div
            className={vstack({
              gap: 8,
              justifyContent: 'stretch',
            })}
          >
            <DialogTitle asChild>
              <h1
                className={css({
                  textStyle: 'h3',
                })}
              >
                Confirming transaction
              </h1>
            </DialogTitle>

            <Loader2Icon
              className={css({
                animation: 'spin 1s linear infinite',
                display: 'inline-block',
              })}
            />

            <p>Waiting for the transaction to be confirmed...</p>

            <a
              href={`${network?.explorerUrl}/tx/${data?.tx.id}`}
              target="_blank"
              className={css({
                color: 'blue.500',
                textDecoration: 'underline',
                fontSize: 14,
              })}
            >
              View transaction
            </a>
          </div>
        )}

        {!data?.tx.id && (
          <div
            className={vstack({
              gap: 8,
              justifyContent: 'stretch',
            })}
          >
            <DialogTitle asChild>
              <h1
                className={css({
                  textStyle: 'h3',
                })}
              >
                Add rune to the MIDL ecosystem
              </h1>
            </DialogTitle>

            <TokenLogo runeId={rune?.id} size={12} />

            <p>
              To add the rune, please transfer the minimum amount (e.g 1{' '}
              {rune?.symbol}) of <b>{rune?.spaced_name}</b> and validator's fee
              ({formatUnits(edictFee ?? 0n, 8)} BTC) to the following address:
              <br />
              <i>{multisigAddress[network!.id]}</i>
            </p>

            <Button
              width="full"
              disabled={isTransactionBeingFormed}
              onClick={onConfirm}
            >
              {isTransactionBeingFormed ? 'Confirming...' : 'Add rune'}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
