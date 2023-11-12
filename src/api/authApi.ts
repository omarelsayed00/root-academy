import axios from "axios";

const BASE_URL = "https://logist99.herokuapp.com/";

export const authApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

authApi.defaults.headers.common["Content-Type"] = "application/json";
