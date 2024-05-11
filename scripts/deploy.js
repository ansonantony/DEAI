const hre = require("hardhat");

const tokens = (nToken) => {
    return ethers.utils.parseUnits(nToken.toString(), "ether");

};

async function main() {
    //Dupe Token 
    const _initialSupply = tokens(500000000000);
    const Dupe = await hre.ethers.getContractFactory("Dupe");
    const dupe = await Dupe.deploy(_initialSupply);

    await dupe.deployed();
    console.log(` Dupe: ${dupe.address}`);

    //ICO Dupe
    const _tokenPrice = tokens(0.0001);
    const ICOWoox = await hre.ethers.getContractFactory("ICOWoox");
    const icoWoox = await ICOWoox.deploy(dupe.address, _tokenPrice);

    await icoWoox.deployed();
    console.log(` ICOWoox: ${icoWoox.address}`);

    //LIQUIDITY
    const Liqudity = await hre.ethers.getContractFactory("Liqudity");
    const liqudity = await Liqudity.deploy();

    await liqudity.deployed();
    console.log(` Liqdity: ${liqudity.address}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});