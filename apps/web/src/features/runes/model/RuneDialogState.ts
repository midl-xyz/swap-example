import { atom } from 'jotai';

export const runeDialogAtom = atom<{
  open: boolean;
  value: {
    runeId: string;
  };
}>({
  open: false,
  value: {
    runeId: '',
  },
});
