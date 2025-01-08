'use client';

import { Dialog, DialogContent, DialogOverlay } from '@/shared';
import { SlippageControlForm } from '@/widgets/slippage-control/ui/SlippageControlForm';
import { DialogPortal, DialogProps } from '@radix-ui/react-dialog';
import { css } from '~/styled-system/css';
import { vstack } from '~/styled-system/patterns';

type SlippageControlDialogProps = DialogProps & {
  onClose: () => void;
};

export const SlippageControlDialog = ({
  onClose,
  ...rest
}: SlippageControlDialogProps) => {
  return (
    <Dialog {...rest}>
      <DialogPortal>
        <DialogOverlay onClick={onClose} />
        <DialogContent
          onEscapeKeyDown={onClose}
          className={css({
            maxW: 400,
            width: '100%',
          })}
        >
          <div
            className={vstack({
              gap: 8,
              justifyContent: 'stretch',
            })}
          >
            <h1
              className={css({
                textStyle: 'h3',
              })}
            >
              Settings
            </h1>

            <SlippageControlForm onClose={onClose} />
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};
