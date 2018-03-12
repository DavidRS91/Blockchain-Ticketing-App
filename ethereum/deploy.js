const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledGenerator = require("./build/EventGenerator.json");
const { INFURA_KEY, TWELVE_WORD_KEY } = require("../config");

const provider = new HDWalletProvider(TWELVE_WORD_KEY, INFURA_KEY);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledGenerator.interface)
  )
    .deploy({ data: compiledGenerator.bytecode })
    .send({ gas: "1000000", from: accounts[0] });
  console.log("Contract deployed to", result.options.address);
};
deploy();
