import React, { Component } from "react";
import moment from "moment";
import Table from "./common/table";
import TextWithBadge from "./common/textWithBadge";
import auth from "../services/authService";

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
      path: "departure",
      label: "Departure",
      content: (flight) => (
        <TextWithBadge
          text={moment(flight.departure).format("lll")}
          color="dark"
        >
          <i className="fa fa-map-marker me-1" aria-hidden="true"></i>
          {flight.from.abbreviation}
        </TextWithBadge>
      ),
    },
    {
      path: "arrival",
      label: "Arrival",
      content: (flight) => (
        <TextWithBadge text={moment(flight.arrival).format("lll")} color="dark">
          <i className="fa fa-map-marker me-1" aria-hidden="true"></i>
          {flight.to.abbreviation}
        </TextWithBadge>
      ),
    },
    { path: "seatsLeft", label: "Seats Left" },
    {
      content: (flight) => (
        <button
          className="btn btn-warning"
          onClick={() => this.props.viewBookPage(flight)}
        >
          Book
        </button>
      ),
    },
  ];

  editColumn = {
    content: (flight) => (
      <button
        className="btn btn-info"
        onClick={() => this.props.onEdit(flight)}
      >
        <i className="fa fa-pencil" aria-hidden="true"></i>
      </button>
    ),
  };

  deleteColumn = {
    content: (flight) => (
      <button
        className="btn btn-danger"
        onClick={() => this.props.onDelete(flight)}
      >
        <i className="fa fa-trash" aria-hidden="true"></i>
      </button>
    ),
  };

  constructor() {
    super();
    const user = auth.getCurrentUser();
    if (user && user.isAdmin)
      this.columns.unshift(this.editColumn, this.deleteColumn);
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
