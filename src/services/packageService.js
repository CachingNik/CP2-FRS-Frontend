import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/packages";

export function getFlights({ fromId, toId, serviceClassId, departure }) {
  return http.get(
    `${apiEndpoint}/${fromId}/${toId}/${serviceClassId}/${departure}`
  );
}

export function getAirplanes({ fromId, toId, serviceClassId, departure }) {
  return http.get(
    `${apiEndpoint}/airplanes-name/${fromId}/${toId}/${serviceClassId}/${departure}`
  );
}
