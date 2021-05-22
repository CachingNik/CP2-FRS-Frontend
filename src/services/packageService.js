import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/packages";

function getFlight(flightId) {
  return http.get(`${apiEndpoint}/${flightId}`);
}

function getFlights({ fromId, toId, serviceClassId, departure }) {
  return http.get(
    `${apiEndpoint}/${fromId}/${toId}/${serviceClassId}/${departure}`
  );
}

function getAirplanes({ fromId, toId, serviceClassId, departure }) {
  return http.get(
    `${apiEndpoint}/airplanes-name/${fromId}/${toId}/${serviceClassId}/${departure}`
  );
}

function saveFlight(flight) {
  if (flight._id) {
    const body = { ...flight };
    delete body._id;
    return http.put(`${apiEndpoint}/${flight._id}`, body);
  }
  return http.post(apiEndpoint, flight);
}

function deleteFlight(flightId) {
  return http.delete(`${apiEndpoint}/${flightId}`);
}

const packageService = {
  getFlight,
  getFlights,
  getAirplanes,
  saveFlight,
  deleteFlight,
};

export default packageService;
