import { Address, erc20Abi } from 'viem';
import { useReadContract, UseReadContractParameters } from 'wagmi';

export const useERC20Allowance = (
  {
    token,
    spender,
    user,
  }: {
    token: Address;
    spender: Address;
    user: Address;
  },
  wagmiOverrides?: ContractCallOverrides<typeof erc20Abi, 'allowance'>,
) => {
  return useReadContract({
    address: token,
    abi: erc20Abi,
    functionName: 'allowance',
    args: [user, spender],
    scopeKey: 'allowance',
    ...wagmiOverrides,
  });
};
