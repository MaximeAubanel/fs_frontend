export const ROOT_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080'
    : process.env.BACK_ENV === 'development'
    ? 'https://skibble-backend-dev.herokuapp.com'
    : 'https://skibble-backend-prod.herokuapp.com';

export const API_ROOT = `${ROOT_URL}/api`;

export const WS_ROOT = `${ROOT_URL}/lobby`;
