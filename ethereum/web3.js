import Web3 from "web3";
const { INFURA_KEY } = require("../config");

let web3;
let findWeb3;
let accounts;
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
  // we are in the browser and metamask is running
  web3 = new Web3(window.web3.currentProvider);
  findWeb3 = true;
} else {
  // we are on the server, or the user is not using metamask
  const provider = new Web3.providers.HttpProvider(INFURA_KEY);
  web3 = new Web3(provider);
  findWeb3 = false;
}
console.log("web3.eth.accounts");
console.log(web3.eth.accounts);
console.log("web3.eth.accounts");

export default web3;
export var web3Found = findWeb3; // use to tell user if they should have web3 installed
export var web3Account = getAccount();
