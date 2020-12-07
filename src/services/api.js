import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/diazevedo/jobs-api/results',
});

export default api;
