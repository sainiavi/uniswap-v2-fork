const {ethers} = require("hardhat");
const { Exit, ExitCode } = require("hardhat/internal/hardhat-network/provider/vm/exit");

const main = async() => {

const [owner] = await ethers.getSigners();
console.log(owner.address);


const weth = await ethers.getContractFactory("WETH9")

const wethInstance = await weth.deploy()

await wethInstance.waitForDeployment()

const wethAddress = await wethInstance.getAddress();

console.log("weth smartcoontract address : ", wethAddress)

}

main().catch((e) => {

    console.log(e);
    process.exit(1)

})