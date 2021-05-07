import React from "react";
import Frs1 from "./custom/frs1";

const TableBody = ({ flights }) => {
  return (
    <tbody>
      {flights.map((flight) => (
        <tr key={flight._id}>
          <td>
            <Frs1 text={flight.airline.name} color="info">
              {flight.airline.id}
            </Frs1>
          </td>
          <td>
            <div className="row justify-content-around">
              <Frs1 text={flight.time.departure} color="dark">
                <i className="icon-map-marker mr-1"></i>
                {flight.location.from}
              </Frs1>
              <i className="icon-time m-3 icon-large"></i>
              <Frs1 text={flight.time.arrival} color="dark">
                <i className="icon-map-marker mr-1"></i>
                {flight.location.to}
              </Frs1>
            </div>
          </td>
          <td className="frs-1">&#8377;{flight.price}</td>
          <td className="frs-1">
            <button className="btn btn-warning">Book</button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
