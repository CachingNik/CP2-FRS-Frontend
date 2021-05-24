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

function saveAirport(airport) {
  return http.post(`${apiUrl}/airports`, airport);
}

function saveAirplane(airplane) {
  return http.post(`${apiUrl}/airplanes`, airplane);
}

const otherService = {
  getAirports,
  getServiceClasses,
  getAirplanes,
  saveAirport,
  saveAirplane,
};

export default otherService;
