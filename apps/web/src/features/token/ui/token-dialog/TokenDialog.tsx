import { TokenSelect } from '@/features';
import { Dialog, DialogContent, DialogOverlay } from '@/shared';
import { DialogProps } from '@radix-ui/react-dialog';
import { css } from '~/styled-system/css';
import { vstack } from '~/styled-system/patterns';

type TokenDialogProps = DialogProps & {
  onClose: () => void;
  onTokenSelect: (address: string, chainId: number) => void;
};

export const TokenDialog = ({
  onClose,
  onTokenSelect,
  ...rest
}: TokenDialogProps) => {
  return (
    <Dialog {...rest}>
      <DialogOverlay onClick={onClose} />
      <DialogContent
        onEscapeKeyDown={onClose}
        className={css({
          maxW: '460px',
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
            Select token
          </h1>
          <TokenSelect onSelect={onTokenSelect} />
        </div>
      </DialogContent>
    </Dialog>
  );
};
