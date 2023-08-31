import axios from "axios";

let instanceAxios = axios.create({
  baseURL: 'http://localhost:9000/',
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
});

export default instanceAxios;