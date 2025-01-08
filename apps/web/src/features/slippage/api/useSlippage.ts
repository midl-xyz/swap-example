import { slippage } from '@/features/slippage/model';
import { useAtom } from 'jotai';

export const useSlippage = () => {
  const [value, updateValue] = useAtom(slippage);

  if (value < 0 || value > 1) {
    updateValue(0.005);
  }

  return [value, updateValue] as const;
};
