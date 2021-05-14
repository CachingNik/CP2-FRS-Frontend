import React, { Component } from "react";
import Table from "./common/table";
import TextWithBadge from "./common/textWithBadge";

class FlightTable extends Component {
  columns = [
    {
      path: "airplane.name",
      label: "Airline",
      content: (flight) => (
        <TextWithBadge text={flight.airplane.name} color="info">
          {flight.airplane.number}
        </TextWithBadge>
      ),
    },
    {
      label: "Departure Date",
      content: (flight) => (
        <React.Fragment>
          <i className="fa fa-calendar me-1" aria-hidden="true"></i>
          {this.dateExtractor(flight.departure)}
        </React.Fragment>
      ),
    },
    {
      path: "departure",
      label: "Departure Time",
      content: (flight) => (
        <TextWithBadge text={this.timeExtractor(flight.departure)} color="dark">
          <i className="fa fa-map-marker me-1" aria-hidden="true"></i>
          {flight.from.abbrevation}
        </TextWithBadge>
      ),
    },
    {
      path: "arrival",
      label: "Arrival Time",
      content: (flight) => (
        <TextWithBadge text={this.timeExtractor(flight.arrival)} color="dark">
          <i className="fa fa-map-marker me-1" aria-hidden="true"></i>
          {flight.to.abbrevation}
        </TextWithBadge>
      ),
    },
    { path: "seatsLeft", label: "Seats Left" },
    { content: () => <button className="btn btn-warning">Book</button> },
  ];

  timeExtractor(value) {
    const date = new Date(value);
    return `${date.getHours()}:${("0" + date.getMinutes()).substr(-2)}`;
  }

  dateExtractor(value) {
    const date = new Date(value);
    return date.toString().split(" ").slice(0, 4).join(" ");
  }

  render() {
    const { flightsCount, flights, sortColumn, onSort } = this.props;

    return (
      <Table
        count={flightsCount}
        columns={this.columns}
        data={flights}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default FlightTable;
