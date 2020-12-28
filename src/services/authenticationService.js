export const loginUserService = (request) => {
  const LOGIN_API_ENDPOINT = 'https://boapi.tlibom.com/core/auth/login';

  const parameters = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request.user)
  };

  return fetch(LOGIN_API_ENDPOINT, parameters);
};