import { Input, InputProps, mergeRefs } from '@/shared';
import { maskitoNumberOptionsGenerator } from '@maskito/kit';
import { useMaskito } from '@maskito/react';
import { forwardRef, useRef } from 'react';

export const NumberInput = forwardRef<
  HTMLInputElement,
  InputProps & {
    precision?: number;
    postfix?: string;
  }
>(({ precision, postfix, ...props }, ref) => {
  let inputRef = useRef<HTMLInputElement | null>(null);
  const maskRef = useMaskito({
    options: maskitoNumberOptionsGenerator({
      precision: precision ?? Infinity,
      min: 0,
      max: props.max ? parseFloat(props.max.toString()) : Infinity,
      postfix,
    }),
  });

  const refs = mergeRefs<HTMLInputElement>(inputRef, maskRef, ref);

  return (
    <Input
      {...props}
      ref={refs}
      inputMode="decimal"
      type="text"
      onInput={props.onChange}
    />
  );
});

NumberInput.displayName = 'NumberInput';
