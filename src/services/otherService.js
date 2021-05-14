import http from "./httpService";

export function getAirports() {
  return http.get("http://192.168.1.3:3000/api/airports");
}

export function getServiceClasses() {
  return http.get("http://192.168.1.3:3000/api/serviceClasses");
}
