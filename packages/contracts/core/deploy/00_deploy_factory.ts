import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();

  await hre.deployments.deploy("UniswapV2Factory", {
    from: deployer,
    args: [deployer, "0x677ebf28ab1Ca164F5d86313359EEcbEe54fF22b"],
    log: true,
  });
};

deploy.tags = ["core"];

export default deploy;
