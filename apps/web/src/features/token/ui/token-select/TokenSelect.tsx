import { Token, useToken } from '@/entities';
import {
  LastUsedToken,
  TokenLogo,
  TokenName,
  useLastUsedTokens,
} from '@/features';
import { useRuneDialog } from '@/features/runes';
import { tokenList } from '@/global';
import { Button, Input } from '@/shared';
import { useERC20Rune } from '@midl-xyz/midl-js-executor';
import { SearchIcon } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { Address, getAddress, zeroAddress } from 'viem';
import { useChainId } from 'wagmi';
import { css } from '~/styled-system/css';
import { hstack, vstack } from '~/styled-system/patterns';

type TokenSelectProps = {
  onSelect: (address: string, chainId: number) => void;
};

export const TokenSelect = ({ onSelect }: TokenSelectProps) => {
  const {
    tokens: lastUsedTokens,
    addToken,
    selectedTokens,
  } = useLastUsedTokens();

  const chainId = useChainId();

  const onSubmit = (address: Address, chainId: number) => {
    addToken(chainId, address);
    onSelect(address, chainId);
  };

  const [filteredTokens, setFilteredTokens] = useState<Token[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const { open } = useRuneDialog();

  const { rune, erc20Address, erc20State, state } = useERC20Rune(searchQuery, {
    query: { retry: false, enabled: !!searchQuery },
  });

  const onSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.trim());
  };

  const onSearch = useCallback(() => {
    if (!searchQuery) {
      setFilteredTokens([]);
      return;
    }

    setFilteredTokens(
      tokenList.filter((it) => {
        const symbol = it.symbol.toLowerCase();
        const name = it.name.toLowerCase();
        const address = it.address.toLowerCase();

        const query = searchQuery.toLowerCase();

        return (
          symbol.includes(query) ||
          name.includes(query) ||
          address.includes(query)
        );
      }),
    );
  }, [searchQuery]);

  let customTokenAddress;
  try {
    customTokenAddress = getAddress(searchQuery);
  } catch {}

  const customToken = useToken(
    erc20Address
      ? erc20Address !== zeroAddress
        ? erc20Address
        : (customTokenAddress as Address)
      : (customTokenAddress as Address),
    chainId,
  );

  useEffect(() => {
    onSearch();
  }, [searchQuery, onSearch]);

  const popularTokens =
    tokenList.filter((it: Token) => it.chainId === chainId) || [];

  const tokens = (searchQuery ? filteredTokens : popularTokens).filter(
    (it: Token) => {
      if (!selectedTokens?.length) {
        return true;
      }
      return !selectedTokens.find(
        (selectedToken: LastUsedToken) =>
          selectedToken.token && selectedToken.token === it.address,
      );
    },
  );

  const popularTokenList = Array.from(lastUsedTokens.get(chainId) || []).filter(
    (tokenAddress) => {
      if (!selectedTokens?.length) {
        return true;
      }
      return !selectedTokens.find(
        (selectedToken: LastUsedToken) =>
          selectedToken.token && selectedToken.token === tokenAddress,
      );
    },
  );

  return (
    <div className={vstack({ gap: 4, alignItems: 'stretch', width: 'full' })}>
      <div
        className={css({
          position: 'relative',
        })}
      >
        <SearchIcon
          className={css({
            position: 'absolute',
            top: '50%',
            left: 3,
            transform: 'translateY(-50%)',
            color: 'neutral.400',
          })}
        />
        <Input
          placeholder="Search name or paste address"
          appearance="secondary"
          onChange={onSearchInput}
          maxLength={42}
          css={{ ps: 11 }}
        />
      </div>

      {!searchQuery && (
        <div className={hstack({ gap: 1, flexWrap: 'wrap' })}>
          {popularTokenList.map((address) => (
            <Button
              key={address}
              appearance="secondary"
              onClick={() => {
                onSubmit(address, chainId);
              }}
            >
              <TokenName address={address} chainId={chainId} />
            </Button>
          ))}
        </div>
      )}

      {tokens.length > 0 && (
        <>
          {!searchQuery && <h3>Popular tokens</h3>}
          <div
            className={vstack({
              gap: 1,
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            })}
          >
            {tokens.slice(0, 5).map(({ address, chainId, symbol }) => (
              <Button
                key={`${address}_${symbol}_${chainId}`}
                onClick={() => onSubmit(address, chainId)}
                appearance="ghost"
                className={css({
                  width: '100%',
                  justifyContent: 'flex-start',
                  textAlign: 'left',
                })}
              >
                <TokenName address={address} chainId={chainId} showName />
              </Button>
            ))}
          </div>
        </>
      )}

      {searchQuery && customToken.symbol !== 'N/A' && <h3>Search results</h3>}

      {searchQuery && filteredTokens.length === 0 && (
        <div>
          {customToken.symbol !== 'N/A' && (
            <Button
              onClick={() => {
                onSubmit(customToken.address, chainId);
              }}
              appearance="ghost"
              className={css({
                width: '100%',
                justifyContent: 'flex-start',
                textAlign: 'left',
              })}
            >
              <TokenName
                address={customToken.address}
                chainId={chainId}
                showName
              />
            </Button>
          )}

          {rune?.id && customToken.symbol === 'N/A' && (
            <div className={vstack({ gap: 2, alignItems: 'start' })}>
              <div>Not added to the MIDL ecosystem yet. </div>
              <div className={hstack()}>
                <TokenLogo runeId={rune.id} size={12} />
                <div className={vstack({ gap: 0, alignItems: 'start' })}>
                  <div>{rune.spaced_name}</div>
                  <div>{rune.symbol}</div>
                </div>

                <Button
                  onClick={() => {
                    open(rune.id);
                  }}
                >
                  Add rune
                </Button>
              </div>
            </div>
          )}

          {!rune?.id && customToken.symbol === 'N/A' && (
            <div
              className={css({
                color: 'neutral.400',
              })}
            >
              No results
            </div>
          )}
        </div>
      )}
    </div>
  );
};
