'use client';

import { tokenDialogAtom } from '@/features';
import { AddRuneDialog, useRuneDialog } from '@/features/runes';
import { useAtom } from 'jotai';
import { useEffect } from 'react';

export const RuneDialogProvider = () => {
  const { state, close } = useRuneDialog();
  const [, setState] = useAtom(tokenDialogAtom);
  useEffect(() => {
    if (state.open) {
      setState({
        open: false,
        onSelected: () => {},
        value: { address: '', chainId: 0 },
      });
    }
  }, [state.open]);

  return <AddRuneDialog open={state.open} onClose={close} />;
};
