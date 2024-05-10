//Woox: 0x0d712a4A5dD5Cb2FF9D9e89089cf6A4DEFaDF4b4
// ICOWoox: 0x5728a5c4A729cAb2112902F6402389914547EA43
 //Liqdity: 0x8FD002B8cFc3C9aa9AE97B503055B4eA34869606

 import { ethers } from "ethers";
 import Web3Modal from "web3modal";

 //internal import
 import factoryAbi from "./factoryAbi.json";
 import ERC20ABI from "./abi.json";

 import Woox from "./Woox.json";
 import ICOWoox from "./ICOWoox.json";
 import Liqudity from "./Liqudity.json";

 //Token
 export const Woox_ADDRESS = "0x0d712a4A5dD5Cb2FF9D9e89089cf6A4DEFaDF4b4";
 export const Woox_ABI = Woox.abi;

 //token Sale
 export const ICOWoox_ADDRESS = "0x5728a5c4A729cAb2112902F6402389914547EA43";
 export const ICOWoox_ABI = ICOWoox.abi;
 //Liqudity
 export const Liqudity_address = "0x8FD002B8cFc3C9aa9AE97B503055B4eA34869606";
 export const Liqudity_abi = Liqudity.abi;

 export const FACTORY_ABI = factoryAbi;
 export const FACTORY_ADDRESS = "0x1F98431c8aD98523631AE4a59f267346ea31F984";
 export const positionManagerAddress = "0xC36442b4a4522E871399CD717aBDD847Ab11FE88";

 const fetchContract = (signer, ABI, ADDRESS) => 
    new ethers.Contract(ADDRESS,ABI, signer);

 export const web3Provider = async () => {
    try {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);

        return provider;
    } catch (error) {
        console.log(error);
    }
 };

 export const CONNECTING_CONTRACT = async (ADDRESS) => {
    try {
        const web3modal =  new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);

        const network = await provider.getNetwork();

        const signer = provider.getSigner();
        const contract = fetchContract(signer, ERC20ABI, ADDRESS);

        //user address
        const userAddress = signer.getAddress();
        const balance = await contract.balanceOf(userAddress);

        const name = await contract.name();
        const symbol = await contract.symbol();
        const supply = await contract.totalSupply();
        const decimals =  await contract.decimals();
        const address = await contract.address;

        const token = {
            address: address,
            name: name,
            symbol: symbol,
            decimals: decimals,
            supply: ethers.utils.formatEther(supply.toString()),
            balance: ethers.utils.formatEther(balance.toString()),
            chainId: network.chainId,
        };

        return token;
    } catch (error) {
        console.log(error);
    }
 };
 export const internalWooxContract = async() => {
    try {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);

        const contract = fetchContract(provider, Woox_ABI, Woox_ADDRESS);
        return contract;
    } catch (error) {
        console.log(error);
    }
 };

 export const internalICOWooxContract = async() => {
    try {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);

        const contract = fetchContract(provider, ICOWoox_ABI, ICOWoox_ADDRESS);
        return contract;
    } catch (error) {
        console.log(error);
    }
 };
 export const internalAddLiqudity = async () => {
    try {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);

        const contract = fetchContract(provider, Liqudity_abi, Liqudity_address);
        return contract;
    } catch (error) {
        console.log(error);
    }
 };

 export const getBalance = async() => {
    try {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();

        return await signer.getBalance();
    } catch (error) {
        console.log(error);
    }
 };

