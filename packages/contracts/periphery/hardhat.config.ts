import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";
import "hardhat-abi-exporter";
import "dotenv/config";

const packageJson = require("./package.json");

const accounts = process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [];

const config: HardhatUserConfig = {
  solidity: {
    version: "0.6.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 999999,
      },
    },
  },
  networks: {},
  etherscan: {
    enabled: true,
    apiKey: "TKNKBSY99DGWRUNV6TAZ7CEZ85R2SKAG5X",
  },
  namedAccounts: {
    deployer: 0,
  },
  abiExporter: {
    path: "./dist",
    runOnCompile: true,
    clear: true,
    flat: true,
    pretty: false,
  },
  paths: {
    deployments: `deployments/${packageJson.version}`,
  },
};

export default config;
