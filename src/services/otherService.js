import http from "./httpService";
import { apiUrl } from "../config.json";

export function getAirports() {
  return http.get(apiUrl + "/airports");
}

export function getServiceClasses() {
  return http.get(apiUrl + "/serviceClasses");
}
