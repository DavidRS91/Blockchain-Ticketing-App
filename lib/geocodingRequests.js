const { GOOGLE_API_KEY } = require("../config");
const DOMAIN = "maps.googleapis.com";
const API_PREFIX = "/maps/api/geocode/json?address=";
const BASE_URL = `https://${DOMAIN}${API_PREFIX}`;
import fetch from "isomorphic-unfetch";

const Geocoder = {
  toLatLong(street, city, province) {
    let streetInput = street.split(" ").join("+");
    let provinceInput = province.split(" ").join("+");
    console.log(
      `${BASE_URL}${streetInput},${city},${province}&key=${GOOGLE_API_KEY}`
    );
    return fetch(
      `${BASE_URL}${streetInput},${city},${provinceInput}&key=${GOOGLE_API_KEY}`
    ).then(res => res.json());
  }
};

export { Geocoder };
