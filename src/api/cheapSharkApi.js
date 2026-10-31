import axios from 'axios';

const cheapSharkApi = axios.create({
  baseURL: 'https://www.cheapshark.com/api/1.0',
  timeout: 10000,
});

export default cheapSharkApi;