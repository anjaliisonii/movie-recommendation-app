import axios from 'axios';

const API_KEY = '3ebdf49f85fcdb5ba36a80df5759cc80';
const BASE_URL = 'https://api.themoviedb.org/3';

const tmdb = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export default tmdb;
