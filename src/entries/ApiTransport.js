import axios from "axios";

//axios.defaults.baseURL = "http://localhost:5000/admin";
axios.defaults.baseURL =
  "https://api-zb1-4dot0-trendevice-test.herokuapp.com/admin";
export const setAuthHeaders = () =>
  (axios.defaults.headers.common = {
    Authorization: `${localStorage.getItem("jwtToken")}`,
  });

export const removeAuthHeader = () =>
  delete axios.defaults.headers.common["Authorization"];

export class Api {
  static getInstance() {
    return new Api();
  }

  get(url, options) {
    setAuthHeaders();
    return axios.get(`${url}`, options);
  }

  put(url, data) {
    setAuthHeaders();
    return axios.put(`${url}`, data);
  }

  post(url, data, options) {
    options && options.isPublic ? removeAuthHeader() : setAuthHeaders();

    return axios.post(`${url}`, data);
  }

  patch(url, data) {
    setAuthHeaders();
    return axios.patch(`${url}`, data);
  }

  delete(url) {
    setAuthHeaders();
    return axios.delete(`${url}`);
  }
}
