'use client';

import { useSlippage } from '@/features';
import { isSlippageDialogOpen } from '@/features/slippage/model';
import { Button } from '@/shared';
import { SlippageControlForm } from '@/widgets/slippage-control/ui/SlippageControlForm';
import { useAtom } from 'jotai';
import { PencilIcon } from 'lucide-react';
import { useState } from 'react';
import { css } from '~/styled-system/css';
import { hstack, vstack } from '~/styled-system/patterns';

type SlippageControlProps = {
  inline?: boolean;
};

export const SlippageControl = ({ inline }: SlippageControlProps) => {
  const [slippage] = useSlippage();
  const [, setDialogOpen] = useAtom(isSlippageDialogOpen);
  const [isInlineOpen, setInlineOpen] = useState(false);

  if (isInlineOpen) {
    return (
      <div className={vstack({ gap: 4, alignItems: 'stretch' })}>
        <span
          className={css({
            textStyle: 'body',
          })}
        >
          Max. Slippage
        </span>
        <SlippageControlForm onClose={() => setInlineOpen(false)} autoCommit />
      </div>
    );
  }

  return (
    <div
      className={hstack({
        justifyContent: 'space-between',
      })}
    >
      <div>
        Max. slippage
        <Button
          onClick={() => {
            if (inline) {
              setInlineOpen(true);
            } else {
              setDialogOpen(true);
            }
          }}
          appearance="ghost"
          aria-label="Edit slippage"
        >
          <PencilIcon width={12} height={12} />
        </Button>
      </div>
      <span>{parseFloat((slippage * 100).toFixed(2))}%</span>
    </div>
  );
};
