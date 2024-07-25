const {ethers} = require("hardhat");
const { Exit, ExitCode } = require("hardhat/internal/hardhat-network/provider/vm/exit");

const main = async() => {

const [owner] = await ethers.getSigners();
console.log(owner.address);


const pair = await ethers.getContractFactory("UniswapV2Factory")

const pairInstance = await pair.deploy("0x789b848DaD12F11937926bd4EaDf11Fc25353834")

await pairInstance.waitForDeployment()

const pairAddress = await pairInstance.getAddress();

console.log("pair smartcoontract address : ", pairAddress)

}

main().catch((e) => {

    console.log(e);
    process.exit(1)

})