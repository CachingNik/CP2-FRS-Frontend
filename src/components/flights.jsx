import React, { Component } from "react";
import _ from "lodash";
import { toast } from "react-toastify";
import FlightTable from "./flightTable";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import packageService from "../services/packageService";
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

  componentDidMount() {
    this.handleSearch(this.props.match.params);
  }

  handleSearch = async (flightQuery) => {
    const { data: flights } = await packageService.getFlights(flightQuery);
    const { data } = await packageService.getAirplanes(flightQuery);
    const airplanes = ["All Airplanes", ...data];

    this.setState({ flights, airplanes });
  };

  handleDelete = async (flight) => {
    const originalFlights = this.state.flights;
    const flights = originalFlights.filter((f) => f._id !== flight._id);
    this.setState({ flights });

    try {
      await packageService.deleteFlight(flight._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error(ex.response.data);

      this.setState({ flights: originalFlights });
    }
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleAirplaneSelect = (airplane) => {
    this.setState({ selectedAirplane: airplane, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handleViewBookPage = (flight) => {
    const { adult, child } = this.props.match.params;

    this.props.history.push(`/flights/${flight._id}/${adult}-${child}/book`);
  };

  handleEdit = (flight) => {
    this.props.history.push(`/flights/${flight._id}`);
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
          <div className="col col-md-2">
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
              viewBookPage={this.handleViewBookPage}
              onDelete={this.handleDelete}
              onEdit={this.handleEdit}
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
