import axios from "axios";

const axiosConfig = {
  baseURL: 'https://api.github.com',
  timeout: 30000,
};

export const http = axios.create(axiosConfig);