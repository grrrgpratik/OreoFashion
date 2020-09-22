export const API = process.env.NODE_ENV
  ? process.env.REACT_APP_BACKEND
  : "http://localhost:8000/api";
