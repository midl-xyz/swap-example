'use client';

import { queryClient } from '@/global';
import { useEffect } from 'react';
import { useBlockNumber } from 'wagmi';
import { css } from '~/styled-system/css';

export const RPCStatus = () => {
  const { isError } = useBlockNumber({ watch: true });

  useEffect(() => {
    if (!isError) {
      queryClient.invalidateQueries();
    }
  }, [isError]);

  if (!isError) {
    return null;
  }

  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        padding: 3,
        bg: 'red.50',
        color: 'red.500',
        textAlign: 'center',
      })}
    >
      We are having trouble connecting to the blockchain. Please check your RPC
      settings or try again later.
    </div>
  );
};
