// import axios
import axios from "axios";

const Api = axios.create({
  //set default endpoint API
  baseURL: "https://ibnujarir.my.id/learn/be",
});

export default Api;
