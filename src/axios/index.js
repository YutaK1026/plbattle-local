import axios from "axios";

// baseURLの設定
const http = axios.create({
  baseURL:
    process.env.NODE_ENV !== "production"
      ? "https://plbattle-local.herokuapp.com/api"
      : "/api",
});

export default http;
