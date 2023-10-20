import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_LINK || ''
interface Register {
  email: string,
  username: string,
  password: string
}

export function register({ 
  email, password, username
}: Register) {
  const reqUrl = apiUrl + 'register';
  const user = {
    email, password, username
  };
  return axios.post(reqUrl, { ...user });
}

interface Login {
  username: string,
  password: string
}

export function login({ 
  password, username
}: Login) {
  const reqUrl = apiUrl + 'login';
  const user = {
    password, username
  };
  return axios.post(reqUrl, { ...user });
}
