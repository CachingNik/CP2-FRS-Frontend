import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    toast.error("An unexpected error occured.");
  }

  return Promise.reject(error);
});

function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

const services = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
  setJwt,
};

export default services;
