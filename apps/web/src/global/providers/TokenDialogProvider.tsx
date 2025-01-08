'use client';

import { tokenDialogAtom } from '@/features';
import { TokenDialog } from '@/features/token/ui/token-dialog';
import { useAtom } from 'jotai';

export const TokenDialogProvider = () => {
  const [dialogState, setDialogState] = useAtom(tokenDialogAtom);

  return (
    <TokenDialog
      open={dialogState.open}
      onTokenSelect={(address, chainId) => {
        dialogState.onSelected(address, chainId);
        setDialogState({ ...dialogState, open: false });
      }}
      onClose={() => {
        setDialogState({ ...dialogState, open: false });
      }}
    />
  );
};
