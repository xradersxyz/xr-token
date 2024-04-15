import { ethers, upgrades } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Upgrade contracts with the account :", deployer.address);

  const existingContractAddress = process.env
    .XR_CONTRACT_ADDRESS_MAINNET as string;
  console.log("Upgrade contracts address :", existingContractAddress);

  const initialOwner = process.env.BSC_OWNER;

  const XrToken = await ethers.getContractFactory("XrToken");
  const xrToken = await upgrades.upgradeProxy(existingContractAddress, XrToken);

  console.log("Upgraded token contracts address:", await xrToken.getAddress());
  console.log(
    `npx hardhat verify --network ${(await deployer.provider.getNetwork()).name} ${await xrToken.getAddress()}`
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
