import type { ContractFunctionName, ContractFunctionArgs, Abi } from 'viem';
import type { UseReadContractParameters } from 'wagmi';
import type { GetChainIdReturnType } from 'wagmi/actions';
import { wagmiConfig } from '@/global/config';

declare global {
  type SmartContractFunctionArgs<
    abi extends Abi,
    functionName extends ContractFunctionName<abi, 'payable' | 'nonpayable'>,
  > = ContractFunctionArgs<abi, 'payable' | 'nonpayable', functionName>;

  type SmartContractReadFunctionArgs<
    abi extends Abi,
    functionName extends ContractFunctionName<abi, 'view' | 'pure'>,
  > = ContractFunctionArgs<abi, 'view' | 'pure', functionName>;

  type ContractCallOverrides<T = any, F = any> = Omit<
    UseReadContractParameters<T, F>,
    'abi' | 'address' | 'functionName' | 'chainId' | 'args' | 'query'
  > & {
    chainId?: GetChainIdReturnType<typeof wagmiConfig>;
  };
}
