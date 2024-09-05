import axios from "axios";
const request = axios.create({
  baseURL: "https://back-end-mern-9wjc.onrender.com",
});

export default request;
