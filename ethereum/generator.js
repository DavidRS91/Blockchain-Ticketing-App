import web3 from "./web3";
import EventGenerator from "./build/EventGenerator.json";
const { DEPLOYED_GENERATOR_ADDRESS } = require("../config");

const instance = new web3.eth.Contract(
  JSON.parse(EventGenerator.interface), //bytecode
  DEPLOYED_GENERATOR_ADDRESS //contract address
);

export default instance;
