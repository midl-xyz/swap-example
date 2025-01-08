import { createConfig, regtest, leather } from '@midl-xyz/midl-js-core';

export const midlConfig = createConfig({
  networks: [regtest],
  connectors: [leather()],
  persist: true,
});
