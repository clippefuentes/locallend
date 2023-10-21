import axios from 'axios';

export function setAuthToken(token: string | null) {
  if (token) {
    axios.defaults.headers.common['authorization'] = 'Bearer ' + token;
  } else {
    axios.defaults.headers.common['authorization'] = null;
  }
}

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

export function getUserData(authToken: string) {
  const reqUrl = apiUrl + 'user';
  return axios.get(reqUrl, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
}

export function getUser(authToken: string) {
  return getUserData(authToken)
    .then((response) => {
      if (response && response.data) {
        console.log('response:', response)
        return response.data;
      }
      throw new Error('User data not found.');
    })
    .catch((error) => {
      throw new Error('Failed to fetch user data: ' + error.message);
    });
}