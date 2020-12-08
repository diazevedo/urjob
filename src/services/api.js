import axios from 'axios';
import { APP_ID, APP_KEY } from '@env';

const api = axios.create({
  baseURL: `https://api.adzuna.com/v1/api/jobs/au/search/1?app_id=${APP_ID}&app_key=${APP_KEY}&results_per_page=5&content-type=application/json`,
});

export default api;
