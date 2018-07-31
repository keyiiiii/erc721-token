const NonFungibleToken = artifacts.require("./NonFungibleToken");

module.exports = (deployer) => {
  deployer.deploy(NonFungibleToken, "NonFungibleToken", "NFT");
};
