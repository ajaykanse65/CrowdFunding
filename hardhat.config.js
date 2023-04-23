require("@nomiclabs/hardhat-waffle");
require('dotenv').config({ path: './.env.local' });

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
})

module.exports = {
  solidity: "0.8.10",
  defaultNetwork: "polygon",
  networks: {
    hardhat: {},
    polygon: {
      url: "https://polygon-mumbai.infura.io/v3/97080d3316b44bff8fab9d4321837e8a",
      accounts: [`21ac9dce49121dc4a5d05f429e7b59f05fd96bdbae3171b130d7600f9e1ae18b`]
    }
  }
};
