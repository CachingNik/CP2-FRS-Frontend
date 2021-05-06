import React, { Component } from "react";
import Table from "./common/table";

class Flights extends Component {
  flights = [
    {
      _id: 1,
      airline: { name: "Indigo", id: "SG 589" },
      time: { departure: "13:00", arrival: "17:00" },
      location: { from: "DEL", to: "BLR" },
      price: 5899,
    },
    {
      _id: 2,
      airline: { name: "Air India", id: "FG 589" },
      time: { departure: "8:00", arrival: "12:00" },
      location: { from: "DEL", to: "BLR" },
      price: 6099,
    },
    {
      _id: 3,
      airline: { name: "Indigo", id: "SG 289" },
      time: { departure: "9:00", arrival: "13:00" },
      location: { from: "DEL", to: "BLR" },
      price: 5899,
    },
    {
      _id: 4,
      airline: { name: "Air Asia", id: "EY 589" },
      time: { departure: "14:00", arrival: "17:30" },
      location: { from: "DEL", to: "BLR" },
      price: 6599,
    },
  ];

  state = {
    flights: this.flights,
  };

  render() {
    const { flights } = this.state;

    return (
      <React.Fragment>
        <h1>Flights</h1>
        <Table flights={flights} />
        <span className="badge badge-primary">
          <span className="badge badge-light">{flights.length}</span> matching
          packages were found
        </span>
      </React.Fragment>
    );
  }
}

export default Flights;
