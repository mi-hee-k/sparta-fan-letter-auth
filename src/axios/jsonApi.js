import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_JSON_SERVER_URL,
});

export default instance;
