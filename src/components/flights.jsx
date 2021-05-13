import React, { Component } from "react";
import { getAirplanes, getFlights } from "../services/packageService";
import { paginate } from "../utils/paginate";
import FlightForm from "./flightForm";
import FlightTable from "./flightTable";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";

class Flights extends Component {
  state = {
    search: false,
    flights: [],
    airplanes: [],
    serviceClass: "",
    pageSize: 1,
    currentPage: 1,
    selectedAirplane: "All Airplanes",
  };

  handleSearch = async (fromId, toId, serviceClass, departureDate) => {
    const { data: flights } = await getFlights(fromId, toId, departureDate);
    const { data } = await getAirplanes(fromId, toId, departureDate);
    const airplanes = ["All Airplanes", ...data];

    this.setState({ flights, airplanes, serviceClass, search: true });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleAirplaneSelect = (airplane) => {
    this.setState({ selectedAirplane: airplane, currentPage: 1 });
  };

  render() {
    const {
      search,
      flights: allFlights,
      airplanes,
      serviceClass,
      currentPage,
      pageSize,
      selectedAirplane,
    } = this.state;

    const filteredFlights =
      selectedAirplane !== "All Airplanes"
        ? allFlights.filter((f) => f.airplane.name === selectedAirplane)
        : allFlights;

    const flights = paginate(filteredFlights, currentPage, pageSize);

    return (
      <React.Fragment>
        <h1>Flights</h1>
        <FlightForm doSearch={this.handleSearch} />
        {search && (
          <div className="row my-3">
            <h3>
              <span className="badge bg-dark">Search Results:</span>
            </h3>
            <div className="col col-md-3 col-xl-2">
              <ListGroup
                items={airplanes}
                selectedItem={selectedAirplane}
                onItemSelect={this.handleAirplaneSelect}
              />
            </div>
            <div className="col">
              <FlightTable
                flightsCount={filteredFlights.length}
                flights={flights}
                serviceClass={serviceClass}
              />
              <Pagination
                itemsCount={filteredFlights.length}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={this.handlePageChange}
              />
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Flights;
