/* eslint-disable @next/next/no-img-element */
import { useToken } from '@/entities';
import { TokenLogo } from '@/features';
import { Address } from 'viem';
import { css } from '~/styled-system/css';
import { hstack, vstack } from '~/styled-system/patterns';
import { useToken as useMidlToken } from '@midl-xyz/midl-js-executor';

type TokenNameProps = {
  address: Address;
  chainId: number;
  showName?: boolean;
};

export const TokenName = ({ address, chainId, showName }: TokenNameProps) => {
  const { symbol, name } = useToken(address, chainId);
  const { rune } = useMidlToken(address);

  return (
    <span
      className={hstack({
        gap: 2,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: 'full',
      })}
    >
      <TokenLogo address={address} chainId={chainId} runeId={rune?.id} />
      <span
        className={vstack({
          gap: 0,
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        })}
      >
        {rune?.symbol ?? symbol}
        {showName && (
          <span
            className={css({
              textStyle: 'caption',
            })}
          >
            {rune?.spaced_name ?? name}
          </span>
        )}
      </span>
    </span>
  );
};
