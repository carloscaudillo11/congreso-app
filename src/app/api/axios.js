import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.BACKEND_UR,
  withCredentials: true
});

export default instance;
