const EventCreator = artifacts.require("EventCreator");

module.exports = function(deployer) {
  deployer.deploy(EventCreator);
};
