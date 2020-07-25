import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://192.168.0.107:3000/api/',
  timeout: 1000,
  withCredentials: false,
  headers: {
    'X-Custom-Header': 'foobar',
    'Content-Type': 'application/json;charset=utf-8'
  }
});

export default instance
