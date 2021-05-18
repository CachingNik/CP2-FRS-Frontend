import React, { Component } from "react";
import _ from "lodash";
import FlightTable from "./flightTable";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import { getAirplanes, getFlights } from "../services/packageService";
import { paginate } from "../utils/paginate";

class Flights extends Component {
  state = {
    flights: [],
    airplanes: [],
    pageSize: 5,
    currentPage: 1,
    selectedAirplane: "All Airplanes",
    sortColumn: {
      path: "airplane.name",
      order: "asc",
    },
  };

  async componentDidMount() {
    const { params: flightQuery } = this.props.match;

    const { data: flights } = await getFlights(flightQuery);
    const { data } = await getAirplanes(flightQuery);
    const airplanes = ["All Airplanes", ...data];

    this.setState({ flights, airplanes });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleAirplaneSelect = (airplane) => {
    this.setState({ selectedAirplane: airplane, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      flights: allFlights,
      currentPage,
      pageSize,
      selectedAirplane,
      sortColumn,
    } = this.state;

    const filteredFlights =
      selectedAirplane !== "All Airplanes"
        ? allFlights.filter((f) => f.airplane.name === selectedAirplane)
        : allFlights;

    const sortedFlights = _.orderBy(
      filteredFlights,
      [sortColumn.path],
      [sortColumn.order]
    );

    const flights = paginate(sortedFlights, currentPage, pageSize);

    return { flightsCount: sortedFlights.length, flights };
  };

  render() {
    const { airplanes, currentPage, pageSize, selectedAirplane, sortColumn } =
      this.state;

    const { flightsCount, flights } = this.getPagedData();

    return (
      <React.Fragment>
        <h3>
          <span className="badge bg-dark">Search Results:</span>
        </h3>
        <div className="row">
          <div className="col col-md-3 col-xl-2">
            <ListGroup
              items={airplanes}
              selectedItem={selectedAirplane}
              onItemSelect={this.handleAirplaneSelect}
            />
          </div>
          <div className="col">
            <FlightTable
              flightsCount={flightsCount}
              flights={flights}
              sortColumn={sortColumn}
              onSort={this.handleSort}
            />
            <Pagination
              itemsCount={flightsCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Flights;
