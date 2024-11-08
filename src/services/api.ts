import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/todos/',
  headers: {
    // ...(tokens.accessToken && {
    //   Authorization: `Bearer ${tokens.accessToken}`,
    // }),
  },
});

// api.interceptors.request.use(
//   (config) => {
//     const tokens = loadTokens();
//     if (tokens.accessToken) {
//       config.headers["Authorization"] = `Bearer ${tokens.accessToken}`; // обновляем заголовок Authorization
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

export default api;
