import http from "./httpService";

export function getAirports() {
  return http.get("http://localhost:3000/api/airports");
}

export function getServiceClasses() {
  return http.get("http://localhost:3000/api/serviceClasses");
}
