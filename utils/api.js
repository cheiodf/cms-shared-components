// import 'whatwg-fetch';
import { parseCookies } from 'nookies';

const parseJSON = response => {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
};

const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) return response;

  const error = {
    message: `Bad response from server at ${response.url} => ${response.status}, ${response.statusText}`,
    url: response.url,
    status: response.status,
    statusText: response.statusText
  };

  return new Promise((resolve, reject) => {
    response
      .json()
      .then(err => {
        error.message = err.error;
        reject(error);
      })
      .catch(() => {
        reject(error);
      });
  });
};

export const defaultHeaders = () => {
  const cookies = parseCookies();

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${cookies.token}`
  };

  if (!cookies.token) delete headers.token_auth;

  return headers;
};

const api = async (
  urlRequest,
  method = 'GET',
  body = {},
  token = '',
  abroute = false
) => {
  const options = {
    method: method,
    headers: defaultHeaders(),
    body: JSON.stringify(body)
  };

  if (token)
    options.headers = { ...options.headers, Authorization: `Bearer ${token}` };

  if (method === 'GET') delete options.body;

  if (!abroute) urlRequest = `${process.env.NEXT_PUBLIC_API_URL}${urlRequest}`;

  return fetch(urlRequest, options).then(checkStatus).then(parseJSON);
};

export const requestData = (urlRequest, method = 'POST', body = {}) => {
  const cookies = parseCookies();

  const formData = new FormData();

  for (const name in body) {
    if (Array.isArray(body[name])) {
      formData.append(name, JSON.stringify(body[name]));
    } else {
      formData.append(name, body[name]);
    }
  }

  const options = {
    method,
    headers: {
      Authorization: `Bearer ${cookies.token}`
    },
    body: formData
  };

  return fetch(`${process.env.NEXT_PUBLIC_API_URL}${urlRequest}`, options)
    .then(checkStatus)
    .then(parseJSON);
};

export default api;
