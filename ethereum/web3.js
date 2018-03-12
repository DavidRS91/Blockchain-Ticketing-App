import Web3 from "web3";
const { INFURA_KEY } = require("../config");

let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  // we are in the browser and metamask is running
  web3 = new Web3(window.web3.currentProvider);
} else {
  // we are on the server, or the user is not using metamask
  const provider = new Web3.providers.HttpProvider(INFURA_KEY);
  web3 = new Web3(provider);
}

export default web3;
