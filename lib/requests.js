const DOMAIN = "min-api.cryptocompare.com";
const API_PREFIX = "/data/price?fsym=ETH&tsyms=BTC,USD,EUR,CAD";
const BASE_URL = `https://${DOMAIN}${API_PREFIX}`;
import fetch from "isomorphic-unfetch";

const Converter = {
  etherToCAD() {
    return fetch(`${BASE_URL}`).then(res => res.json());
    // .then(data => console.log(data));
  }
};

export { Converter };
