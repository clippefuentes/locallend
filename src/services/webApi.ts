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
  console.log('apiUrl:', apiUrl)
  console.log('reqUrl', reqUrl)
  const user = {
    email, password, username
  };
  return axios.post(reqUrl, { ...user });
}
