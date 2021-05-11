import React from "react";
import Frs1 from "./custom/frs1";

function timeExtractor(value) {
  const date = new Date(value);
  return date.toString().split(" ").slice(1, 5).join(" ");
}

const TableBody = ({ flights, serviceClass }) => {
  return (
    <tbody>
      {flights.map((flight) => (
        <tr key={flight._id}>
          <td>
            <Frs1 text={flight.airplane.name} color="info">
              {flight.airplane.number}
            </Frs1>
          </td>
          <td>
            <div className="row justify-content-around">
              <Frs1 text={timeExtractor(flight.departure)} color="dark">
                <i className="icon-map-marker mr-1"></i>
                {flight.from.abbrevation}
              </Frs1>
              <i className="icon-time m-3 icon-large"></i>
              <Frs1 text={timeExtractor(flight.arrival)} color="dark">
                <i className="icon-map-marker mr-1"></i>
                {flight.to.abbrevation}
              </Frs1>
            </div>
          </td>
          <td className="frs-1">&#8377;{flight.price.adult[serviceClass]}</td>
          <td className="frs-1">
            <button className="btn btn-warning">Book</button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
