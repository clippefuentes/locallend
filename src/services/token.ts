export function manageAuthToken(authToken: string | null) {
  if (authToken !== null) {
    localStorage.setItem('authToken', authToken);
  } else {
    localStorage.removeItem('authToken');
  }
}