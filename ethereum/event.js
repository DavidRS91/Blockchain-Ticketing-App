import web3 from "./web3";
import Event from "./build/Event.json";

export default address => {
  return new web3.eth.Contract(JSON.parse(Event.interface), address);
};
