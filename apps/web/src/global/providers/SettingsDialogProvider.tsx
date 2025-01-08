'use client';

import { isSlippageDialogOpen } from '@/features/slippage/model';
import { SlippageControlDialog } from '@/widgets';
import { useAtom } from 'jotai';

export const SettingsDialogProvider = () => {
  const [dialogState, setDialogState] = useAtom(isSlippageDialogOpen);

  if (!dialogState) {
    return null;
  }

  return (
    <SlippageControlDialog
      open={dialogState}
      onClose={() => setDialogState(false)}
    />
  );
};
