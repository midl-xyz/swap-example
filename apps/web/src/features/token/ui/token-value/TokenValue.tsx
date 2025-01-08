import { useToken } from '@/entities';
import { TokenLogo } from '@/features';
import { HTMLAttributes } from 'react';
import { Address, formatUnits } from 'viem';
import { css, cx } from '~/styled-system/css';

type TokenValueProps = {
  value: bigint;
  address: Address;
  chainId: number;
  hideSymbol?: boolean;
  hideLogo?: boolean;
} & HTMLAttributes<HTMLSpanElement>;

export const TokenValue = ({
  value,
  address,
  chainId,
  hideSymbol,
  hideLogo,
  className,
  ...rest
}: TokenValueProps) => {
  const tokenInfo = useToken(address, chainId);
  return (
    <span
      {...rest}
      className={cx(
        css({
          display: 'flex',
          alignItems: 'center',
          gap: '0.5',
        }),
        className,
      )}
    >
      {!hideLogo && <TokenLogo address={address} chainId={chainId} />}
      {formatUnits(value, tokenInfo.decimals)}{' '}
      {hideSymbol ? '' : tokenInfo.symbol}
    </span>
  );
};
