const hre = require("hardhat");

async function main() {
  const Wallet = await hre.ethers.getContractFactory("Wallet");
  const wallet = await Wallet.deploy();

  await wallet.waitForDeployment();
  console.log(`Contrato desplegado en: ${wallet.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

