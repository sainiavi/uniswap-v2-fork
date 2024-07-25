const {ethers} = require("hardhat");
const { Exit, ExitCode } = require("hardhat/internal/hardhat-network/provider/vm/exit");

const main = async() => {

const [owner] = await ethers.getSigners();
console.log(owner.address);


const tokenA = await ethers.getContractFactory("ERC20")




const factoryInstance = await factory.deploy("0x789b848DaD12F11937926bd4EaDf11Fc25353834")

await factoryInstance.waitForDeployment()

const factoryAddress = await factoryInstance.getAddress();

console.log("factory smartcontract address : ", factoryAddress)

}

main().catch((e) => {

    console.log(e);
    process.exit(1)

})