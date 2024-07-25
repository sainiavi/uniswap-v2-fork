const {ethers} = require("hardhat");
const { Exit, ExitCode } = require("hardhat/internal/hardhat-network/provider/vm/exit");

const main = async() => {

// const [owner] = await ethers.getSigners();
// console.log(owner.address);


// const router = await ethers.getContractFactory("UniswapV2Router02")

// const routerInstance = await router.deploy("0x1B113E6EDA9C30078A23e155465c3a14E0baC028","0xeeE2e950c53bdf43C9d67A653551b19c263C4407")

// await routerInstance.waitForDeployment()

// const routerAddress = await routerInstance.getAddress();

// console.log("router smartcoontract address : ", routerAddress)

await hre.run("verify:verify", {
    address: "0x53635EfdEA37Ee0C723c587311e633b5FD2a04Fc",
    constructorArguments: [
    
      "0x1B113E6EDA9C30078A23e155465c3a14E0baC028",
      "0xeeE2e950c53bdf43C9d67A653551b19c263C4407"
    ],
  });

}

main().catch((e) => {

    console.log(e);
    process.exit(1)

})