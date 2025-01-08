import { runeDialogAtom } from '@/features/runes/model';
import { useAtom } from 'jotai';

export const useRuneDialog = () => {
  const [state, setState] = useAtom(runeDialogAtom);

  const open = (runeId: string) => {
    setState({ open: true, value: { runeId } });
  };

  const close = () => {
    setState({ open: false, value: { runeId: '' } });
  };

  return { state, open, close };
};
