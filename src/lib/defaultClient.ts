import axios from 'axios';

axios.defaults.withCredentials = true;

const baseURL = (() => {
  if (process.env.NODE_ENV === 'development') return '/';
})();

const defaultClient = axios.create({
  baseURL,
  withCredentials: true
});

export default defaultClient;
