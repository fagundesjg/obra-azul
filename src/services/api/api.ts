import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.obrazul.com.br/api',
  timeout: 5000,
});

export { api };
