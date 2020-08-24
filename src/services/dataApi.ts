import axios from 'axios';

const dataApi = axios.create({
  baseURL: 'https://www.mercadobitcoin.net/api',
});

export default dataApi;
