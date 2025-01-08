'use client';

import { wagmiConfig } from '@/global';
import { usePathname } from 'next/navigation';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Address } from 'viem';

export interface LastUsedToken {
  chain: number;
  token: Address;
  inputName: string;
}
//TODO: rework to store
export const LastUsedTokensProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const pathname = usePathname();
  const localTokens =
    typeof window !== 'undefined' && localStorage.getItem('tokens');

  let initialTokens = [];

  try {
    initialTokens = localTokens
      ? JSON.parse(localTokens).filter(([chainId]: [number, any]) => {
          return wagmiConfig.chains.some((chain) => chain.id === chainId);
        })
      : [];
  } catch {}

  const [tokens, setTokens] = useState<Map<number, Address[]>>(
    new Map(initialTokens),
  );

  const [selectedTokens, setSelectedTokens] = useState<LastUsedToken[]>([]);

  const addToken = (chain: number, token: Address) => {
    const chainTokens = tokens.get(chain) || [];
    const newChainTokens = new Set([token, ...chainTokens]);
    setTokens(tokens.set(chain, Array.from(newChainTokens).slice(0, 5)));

    localStorage.setItem(
      'tokens',
      JSON.stringify(Array.from(tokens.entries())),
    );
  };

  const selectTokens = (tokens: LastUsedToken[]) => {
    setSelectedTokens(tokens);
  };

  useEffect(() => {
    setSelectedTokens([]);
  }, [pathname]);

  return (
    <LastUsedTokensContext.Provider
      value={{
        tokens,
        selectedTokens,
        addToken,
        selectTokens,
      }}
    >
      {children}
    </LastUsedTokensContext.Provider>
  );
};

const LastUsedTokensContext = createContext<
  | {
      tokens: Map<number, Address[]>;
      selectedTokens: LastUsedToken[];
      addToken: (chain: number, token: Address) => void;
      selectTokens: (token: LastUsedToken[]) => void;
    }
  | undefined
>(undefined);

export const useLastUsedTokens = () => {
  const context = useContext(LastUsedTokensContext);

  if (!context) {
    throw new Error(
      'useLastUsedTokens must be used within a LastUsedTokensProvider',
    );
  }

  return context;
};
