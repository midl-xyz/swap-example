export const executorAbi = [
  {
    type: 'constructor',
    inputs: [
      {
        name: 'validatorsWallet_',
        internalType: 'address payable',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'AlreadyAcknowleged' },
  { type: 'error', inputs: [], name: 'AlreadyCommitted' },
  { type: 'error', inputs: [], name: 'AlreadyKnown' },
  { type: 'error', inputs: [], name: 'ExceedsMaxAssets' },
  { type: 'error', inputs: [], name: 'FailedTransfer' },
  { type: 'error', inputs: [], name: 'HasTransaction' },
  { type: 'error', inputs: [], name: 'InvalidAcknowledgement' },
  { type: 'error', inputs: [], name: 'InvalidBlockNumber' },
  { type: 'error', inputs: [], name: 'InvalidInput' },
  { type: 'error', inputs: [], name: 'InvalidTx' },
  { type: 'error', inputs: [], name: 'InvalidTxsNumber' },
  { type: 'error', inputs: [], name: 'NoBlock' },
  { type: 'error', inputs: [], name: 'NotPending' },
  { type: 'error', inputs: [], name: 'TooEarly' },
  { type: 'error', inputs: [], name: 'UnsupportedAsset' },
  { type: 'error', inputs: [], name: 'WrongAccess' },
  { type: 'error', inputs: [], name: 'WrongLength' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'txHash',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'from',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'btcAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Acknowledged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'validator',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AddedValidator',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'blockNum',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'lastCommittedBlock',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'CommitedBlocksToBTC',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'blockNum',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'txHash',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'sentTxsBatchHash',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'receiver',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
    ],
    name: 'CommittedSentTx',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'blockNum',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'txHash',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'receiver',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'btcAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'assets',
        internalType: 'bytes32[]',
        type: 'bytes32[]',
        indexed: false,
      },
      {
        name: 'amounts',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'Completed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'receiver',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'EmergencyBTCWithdrawal',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'blockNum',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Finalized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'blockNum',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'blockHash',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'txsNum',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'txsMerkleRoot',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'receivedBTC',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'NewBlock',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'validator',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'RemovedValidator',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'blockNum',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'blockHash',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
    ],
    name: 'ResetBlock',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MAX_ASSETS',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MAX_MIDL_TXS',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'txHash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'midlTxs', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'btcAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'assets', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'amounts', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'proof', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'acknowledgeTx',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'cMidlAddress',
        internalType: 'contract IERC20Extended',
        type: 'address',
      },
      { name: 'btcAddress', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'addAsset',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'validator_', internalType: 'address', type: 'address' }],
    name: 'addValidator',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'blockReceivedBTC',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'blockTxsNum',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'btcBlocksHashes',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    name: 'btcCMidlAddresses',
    outputs: [
      { name: '', internalType: 'contract IERC20Extended', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    name: 'btcMidlTxs',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    name: 'btcTxSentHash',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'contract IERC20Extended', type: 'address' },
    ],
    name: 'cMidlBtcAddresses',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'lastCommittedBlock', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'commitBlocksToBTC',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'blockNum', internalType: 'uint256', type: 'uint256' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'txsNum', internalType: 'uint256', type: 'uint256' },
      { name: 'txsMerkleRoot', internalType: 'bytes32', type: 'bytes32' },
      { name: 'receivedBTC', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'commitNewBlock',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'txHash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'btcTxSent', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'commitSentTx',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'txHash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'receiver', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'assets',
        internalType: 'contract IERC20Extended[]',
        type: 'address[]',
      },
      { name: 'amounts', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'completeTx',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'emergencyBTCWithdrawal',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lastBlockNum',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'lastCommittedMidlBlock',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    name: 'pendingBTCTxReceiver',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'valueForQuorum', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'reachedQuorum',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'cMidlAddress',
        internalType: 'contract IERC20Extended',
        type: 'address',
      },
      { name: 'btcAddress', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'removeAsset',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'validator_', internalType: 'address', type: 'address' }],
    name: 'removeValidator',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'blockNum', internalType: 'uint256', type: 'uint256' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'resetBlock',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'sentTxsBatches',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'txsMerkleRoots',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    name: 'txsOrigins',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'validators',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'validatorsNum',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'validatorsWallet',
    outputs: [{ name: '', internalType: 'address payable', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    name: 'valueQuorum',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'bytes32', type: 'bytes32' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'valueQuorumVoted',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const;