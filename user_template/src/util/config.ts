import axios from 'axios';
import { history } from '../index';

const TOKEN_CYBERSOFT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udGVuZCA3MyIsIkhldEhhblN0cmluZyI6IjE5LzA1LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4NDQ1NDQwMDAwMCIsIm5iZiI6MTY1OTg5MTYwMCwiZXhwIjoxNjg0NjAyMDAwfQ.49m9-EoDr6zr7UOk_79hfcvJWKI_s0Wy_g40ossfl9c";

const ACCESS_TOKEN = "accessToken";


export const { saveStore, saveStoreJson, getStore, getStoreJson, removeStore } = {
  // save data as string
  saveStore: (name: string, stringValue: any): void => {
    localStorage.setItem(name, stringValue)
  },
  // save data as object
  saveStoreJson: (name: string, value: any): void => {
    const convertValue = JSON.stringify(value)
    localStorage.setItem(name, convertValue)
    return value
  },
  getStore: (name: string): any => {
    if (localStorage.getItem(name)) {
      return localStorage.getItem(name)
    }
    return null
  },
  getStoreJson: (name: string): any => {
    if (localStorage.getItem(name)) {
      return JSON.parse(localStorage.getItem(name) || "")
    }
    return null
  },
  removeStore: (name: string): void => {
    if (localStorage.getItem(name)) {
      localStorage.removeItem(name);
    }
  },

}

// Config Interceptor

export const http = axios.create({
  baseURL: 'https://airbnbnew.cybersoft.edu.vn',
  timeout: 30000
})

// Request
http.interceptors.request.use((config: any) => {
  config.headers = {
    ...config.headers,
    // Authorization: `Bearer ${getStore(ACCESS_TOKEN)}`,
    TokenCybersoft: TOKEN_CYBERSOFT
  };
  return config;
}, (err) => {
  return Promise.reject(err);
})

// Response

http.interceptors.response.use((response) => {
  return response
}, (error) => {
  if (error?.response.status === 404 || error?.response.status === 400) {
    // Chuyen huong trang ve trang chu
    history.push('/')
  }
  return Promise.reject(error)
})
