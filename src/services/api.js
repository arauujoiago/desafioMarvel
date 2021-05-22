import axios from "axios";
import CryptoJS from "crypto-js";

const ts = Math.floor(Date.now() / 1000);
  const apikey = "d06c2cbee8ef14e74aa4561e1f135090";
  const hash = CryptoJS.MD5(
    ts +
      "0da6efb140fbb420811af22f041b8c98681eecbad06c2cbee8ef14e74aa4561e1f135090"
  ).toString();

const Api = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public/",
  params: {
    apikey: apikey,
    hash: hash,
    ts: ts
  }
});

export default Api;