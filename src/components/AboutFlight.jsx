import React from "react";
import moment from "moment";

const AboutFlight = ({ flight, adultCount, childCount, ticketFare }) => {
  return (
    <div className="row justify-content-center mb-3">
      <div className="col-lg-8">
        <div className="card text-white bg-secondary">
          <div className="card-header">
            <div className="row justify-content-between">
              <div className="col-4">{flight.airplane.name}</div>
              <div className="col-4 text-center">
                {flight.serviceClass.name}
              </div>
              <div className="col-4 text-end">{flight.airplane.number}</div>
            </div>
          </div>
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-3">
                <div className="text-center">
                  <i className="fa fa-map-marker fa-2x" aria-hidden="true"></i>
                  <br />
                  {flight.from.name}
                  <br />
                  {moment(flight.departure).format("LL")}
                  <br />
                  {moment(flight.departure).format("LT")}
                </div>
              </div>
              <div className="col-2 p-0">
                <hr />
              </div>
              <div className="col-2 text-center p-0">
                <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
              </div>
              <div className="col-2 p-0">
                <hr />
              </div>
              <div className="col-3">
                <div className="text-center">
                  <i className="fa fa-map-marker fa-2x" aria-hidden="true"></i>
                  <br />
                  {flight.to.name}
                  <br />
                  {moment(flight.arrival).format("LL")}
                  <br />
                  {moment(flight.arrival).format("LT")}
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className="row">
              <div className="col-9 text-start">
                Ticket Fare:{" "}
                <i className="fa fa-male me-1" aria-hidden="true"></i>(
                {adultCount}) x {flight.price.adult} +{" "}
                <i className="fa fa-child me-1" aria-hidden="true"></i>(
                {childCount}) x {flight.price.child}
              </div>
              <div className="col-3 text-end">
                <strong>₹ {ticketFare}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFlight;
