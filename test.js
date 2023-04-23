const CampaignFactory = require("./artifacts/contracts/Campaign.sol/CampaignFactory.json");
const Campaign = require("./artifacts/contracts/Campaign.sol/Campaign.json");
const { ethers } = require("ethers");
require("dotenv").config({ path: "./.env.local" });

const main = async () => {
  //   const provider = new ethers.providers.JsonRpcProvider(
  //     process.env.NEXT_PUBLIC_RPC_URL
  //   );

  //   const contract = new ethers.Contract(
  //     process.env.NEXT_PUBLIC_ADDRESS,
  //     CampaignFactory.abi,
  //     provider
  //   );

  //   const getDeployedCampaign = contract.filters.campaignCreated(null,null,null,null,null,null,'Health');
  //   let events = await contract.queryFilter(getDeployedCampaign);
  //   let event = events.reverse();
  //   console.log(event);

  const provider = new ethers.providers.JsonRpcProvider(
    "https://polygon-mumbai.infura.io/v3/97080d3316b44bff8fab9d4321837e8a"
  );

  const contract = new ethers.Contract(
    '0xc9019176829d26013538ce7a3C70908e0d5F7793',
    Campaign.abi,
    provider
  );

  const Donations = contract.filters.donated('0x257B198a761155ae9375eD59FFe42A64414A6539');
  const AllDonations = await contract.queryFilter(Donations);

  const DonationsData =  AllDonations.map((e) => {
    return {
      donar: e.args.donar,
      amount: parseInt(e.args.amount),
      timestamp : parseInt(e.args.timestamp)
  }});

  console.log(DonationsData);

};

main();