import { GraphQLClient } from 'graphql-request';

export const graphqlClient = new GraphQLClient(
  'https://squid.regtest.midl.xyz/graphql',
);
