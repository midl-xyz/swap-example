'use client';

import { Button, Dialog, DialogContent, DialogOverlay } from '@/shared';
import { AddressPurpose } from '@midl-xyz/midl-js-core';
import { useConnect } from '@midl-xyz/midl-js-react';
import { DialogProps, DialogTitle } from '@radix-ui/react-dialog';
import { XIcon } from 'lucide-react';
import { css } from '~/styled-system/css';
import { HStack } from '~/styled-system/jsx';
import { vstack } from '~/styled-system/patterns';

type ConnectWalletDialogProps = DialogProps & {
  onClose: () => void;
};

export const ConnectWalletDialog = ({
  onClose,
  ...rest
}: ConnectWalletDialogProps) => {
  const { connectors, connect, isPending, variables } = useConnect({
    purposes: [AddressPurpose.Ordinals],
    mutation: {
      onSuccess: () => {
        onClose();
      },
    },
  });

  return (
    <Dialog {...rest}>
      <DialogOverlay onClick={onClose} />
      <DialogContent
        onEscapeKeyDown={onClose}
        className={css({
          maxW: 450,
          width: '100%',
          backgroundColor: 'neutral.100',
        })}
      >
        <div
          className={vstack({
            gap: 2,
            justifyContent: 'stretch',
          })}
        >
          <HStack
            justifyContent="space-between"
            alignItems="center"
            width="full"
          >
            <DialogTitle asChild>
              <h1
                className={css({
                  textStyle: 'h3',
                })}
              >
                Connect wallet
              </h1>
            </DialogTitle>
            <Button onClick={onClose} appearance="ghost">
              <XIcon width={16} height={16} />
            </Button>
          </HStack>

          <p>Select a wallet to connect</p>

          {connectors.map((connector) => (
            <Button
              key={connector.id}
              width="full"
              onClick={() => {
                connect({ id: connector.id });
              }}
              appearance="primary"
            >
              {isPending && 'Connecting...' && variables?.id === connector.id}
              {!isPending && connector.name}
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
