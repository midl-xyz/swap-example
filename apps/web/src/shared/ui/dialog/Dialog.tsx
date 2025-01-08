import * as RadixDialog from '@radix-ui/react-dialog';
import { styled } from '~/styled-system/jsx';

export const DialogContent = styled(RadixDialog.Content, {
  base: {
    backgroundColor: 'white',
    borderRadius: 'md',
    padding: 8,
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 200,
  },
});

export const DialogOverlay = styled(RadixDialog.Overlay, {
  base: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 100,
  },
});

export { Dialog, DialogClose, DialogTrigger } from '@radix-ui/react-dialog';
