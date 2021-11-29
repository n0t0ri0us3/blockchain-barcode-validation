const productValidation = artifacts.require("productValidation");

module.exports = function(deployer){
    deployer.deploy(productValidation);
};