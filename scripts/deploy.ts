import { ethers, upgrades } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account :", deployer.address);

  const initialOwner = process.env.BSC_OWNER;

  const XrToken = await ethers.getContractFactory("XrToken");

  const xrToken = await upgrades.deployProxy(XrToken, [initialOwner], {
    initializer: "initialize",
  });

  console.log("Deployed token contracts address:", await xrToken.getAddress());
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
