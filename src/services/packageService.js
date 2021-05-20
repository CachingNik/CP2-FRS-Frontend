import http from "./httpService";

export function getFlights(fromId, toId, serviceClassId, departure) {
  return http.get(
    `http://localhost:3000/api/packages/${fromId}/${toId}/${serviceClassId}/${departure}`
  );
}

export function getAirplanes(fromId, toId, serviceClassId, departure) {
  return http.get(
    `http://localhost:3000/api/packages/airplanes-name/${fromId}/${toId}/${serviceClassId}/${departure}`
  );
}
