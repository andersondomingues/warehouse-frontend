import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.backend_url || 'http://localhost:8080',
  headers: { },
});
