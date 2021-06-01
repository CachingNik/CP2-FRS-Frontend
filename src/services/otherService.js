import http from "./httpService";

function getAirports() {
  return http.get("/airports");
}

function getServiceClasses() {
  return http.get("/serviceClasses");
}

function getAirplanes() {
  return http.get("/airplanes");
}

function saveAirport(airport) {
  return http.post("/airports", airport);
}

function saveAirplane(airplane) {
  return http.post("/airplanes", airplane);
}

const otherService = {
  getAirports,
  getServiceClasses,
  getAirplanes,
  saveAirport,
  saveAirplane,
};

export default otherService;
