import http from "./httpService";

export function getFlights(fromId, toId, departure) {
  return http.get(
    `http://192.168.1.3:3000/api/packages/${fromId}/${toId}/${departure}`
  );
}

export function getAirplanes(fromId, toId, departure) {
  return http.get(
    `http://192.168.1.3:3000/api/packages/airplanes-name/${fromId}/${toId}/${departure}`
  );
}
