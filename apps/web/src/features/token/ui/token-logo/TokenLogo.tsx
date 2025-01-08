/* eslint-disable @next/next/no-img-element */
import { useToken } from '@/entities';
import { useERC20Rune } from '@midl-xyz/midl-js-executor';
import { HTMLAttributes } from 'react';
import { Address, zeroAddress } from 'viem';
import { useChainId } from 'wagmi';
import { css, cx } from '~/styled-system/css';

type TokenLogoProps = {
  address?: Address;
  runeId?: string;
  chainId?: number;
  size?: number;
  className?: HTMLAttributes<HTMLDivElement>['className'];
  overridePic?: string | null | undefined;
};

export const TokenLogo = ({
  address,
  chainId,
  runeId,
  size = 6,
  className,
  overridePic,
}: TokenLogoProps) => {
  const appChainId = useChainId();

  let { logoURI, symbol } = useToken(address as Address, chainId ?? appChainId);
  const { rune } = useERC20Rune(runeId || '', { query: { enabled: !!runeId } });

  if (overridePic) {
    logoURI = overridePic;
  }

  if (!logoURI || rune?.id) {
    return (
      <div
        className={css({
          backgroundColor: 'neutral.800',
          borderRadius: 'full',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          aspectRatio: '1/1',
          overflow: 'hidden',
          flexShrink: 0,
        })}
        style={{
          width: `${size * 4}px`,
          height: `${size * 4}px`,
          padding: '2px',
        }}
      >
        <span
          className={css({
            color: 'white',
            fontWeight: 'bold',
            fontSize: '16px',
          })}
        >
          {rune?.symbol ?? symbol}
        </span>
      </div>
    );
  }

  return (
    <div
      className={cx(
        css({
          backgroundColor: 'white',
          borderRadius: 'full',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          aspectRatio: '1/1',
        }),
        className,
      )}
      style={{
        width: `${size * 4}px`,
        height: `${size * 4}px`,
        padding: '2px',
      }}
    >
      <img
        src={logoURI}
        alt={symbol}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '50%', // Ensures the image stays circular
        }}
      />
    </div>
  );
};
