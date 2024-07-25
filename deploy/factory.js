const {ethers} = require("hardhat");
const { Exit, ExitCode } = require("hardhat/internal/hardhat-network/provider/vm/exit");

const main = async() => {

// const [owner] = await ethers.getSigners();
// console.log(owner.address);


// const factory = await ethers.getContractFactory("UniswapV2Factory")

// const factoryInstance = await factory.deploy("0x789b848DaD12F11937926bd4EaDf11Fc25353834")

// await factoryInstance.waitForDeployment()

// const factoryAddress = await factoryInstance.getAddress();

// console.log("factory smartcoontract address : ", factoryAddress)



await hre.run("verify:verify", {
    address: "0x1B113E6EDA9C30078A23e155465c3a14E0baC028",
    constructorArguments: [
    
      "0x789b848DaD12F11937926bd4EaDf11Fc25353834"
    ],
  });



}

main().catch((e) => {

    console.log(e);
    process.exit(1)

})