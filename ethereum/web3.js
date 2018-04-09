import Web3 from "web3";
const { INFURA_KEY } = require("../config");

let web3;
let findWeb3;
let userAccount;

async function getAccount() {
  try {
    await web3.eth.getAccounts().then(accountList => {
      userAccount = accountList[0];
    });
  } catch (err) {
    console.log(err);
    userAccount = null;
  }
  return userAccount;
}

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  web3 = new Web3(window.web3.currentProvider);
  findWeb3 = true;
} else {
  const provider = new Web3.providers.HttpProvider(INFURA_KEY);
  web3 = new Web3(provider);
  findWeb3 = false;
}

export default web3;
export var web3Found = findWeb3;
export var web3Account = getAccount();
