import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.instantwebtools.net',
});

export default axiosInstance;
