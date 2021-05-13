import React from "react";
import TextWithBadge from "./common/textWithBadge";

function timeExtractor(value) {
  const date = new Date(value);
  return `${date.getHours()}:${("0" + date.getMinutes()).substr(-2)}`;
}

function dateExtractor(value) {
  const date = new Date(value);
  return date.toString().split(" ").slice(0, 4).join(" ");
}

const FlightTable = ({ flightsCount, flights, serviceClass }) => {
  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <caption>{flightsCount} matching packages were found</caption>
        <thead className="table-dark">
          <tr>
            <th className="text-center">Airline</th>
            <th className="text-center">Departure Date</th>
            <th className="text-center">Departure Time</th>
            <th className="text-center">Arrival Time</th>
            <th className="text-center">Price (per Adult)</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => (
            <tr key={flight._id}>
              <td>
                <TextWithBadge text={flight.airplane.name} color="info">
                  {flight.airplane.number}
                </TextWithBadge>
              </td>
              <td className="center-element">
                <i className="fa fa-calendar me-1" aria-hidden="true"></i>
                {dateExtractor(flight.departure)}
              </td>
              <td>
                <TextWithBadge
                  text={timeExtractor(flight.departure)}
                  color="dark"
                >
                  <i className="fa fa-map-marker me-1" aria-hidden="true"></i>
                  {flight.from.abbrevation}
                </TextWithBadge>
              </td>
              <td>
                <TextWithBadge
                  text={timeExtractor(flight.arrival)}
                  color="dark"
                >
                  <i className="fa fa-map-marker me-1" aria-hidden="true"></i>
                  {flight.to.abbrevation}
                </TextWithBadge>
              </td>
              <td className="center-element">
                &#8377;{flight.price.adult[serviceClass]}
              </td>
              <td className="center-element">
                <button className="btn btn-warning">Book</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FlightTable;
