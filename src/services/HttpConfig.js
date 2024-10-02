const axios = require('axios');

const httpConfig = axios.create({
  baseURL: 'https://localhost:8080',
  timeout: 5000, 
  headers: {
    'Content-Type': 'application/json', 
  },
});

module.exports = httpConfig;
