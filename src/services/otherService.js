import http from "./httpService";
import { apiUrl } from "../config.json";

function getAirports() {
  return http.get(`${apiUrl}/airports`);
}

function getServiceClasses() {
  return http.get(`${apiUrl}/serviceClasses`);
}

function getAirplanes() {
  return http.get(`${apiUrl}/airplanes`);
}

const otherService = {
  getAirports,
  getServiceClasses,
  getAirplanes,
};

export default otherService;
