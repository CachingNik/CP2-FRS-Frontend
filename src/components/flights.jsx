import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import http from "../services/httpService";
import Table from "./common/table";

class Flights extends Component {
  state = {
    flights: [],
  };

  async componentDidMount() {
    const { fromId, toId, departure } = this.props.match.params;

    try {
      const { data: flights } = await http.get(
        `http://192.168.1.3:3000/api/packages/${fromId}/${toId}/${departure}`
      );

      this.setState({ flights });
    } catch (ex) {
      console.error(ex);
    }
  }

  render() {
    const { flights } = this.state;
    const { serviceClass } = this.props.match.params;

    return (
      <React.Fragment>
        <ToastContainer />
        <h1>Flights</h1>
        <Table flights={flights} serviceClass={serviceClass} />
        <span className="badge badge-primary">
          <span className="badge badge-light">{flights.length}</span> matching
          packages were found
        </span>
      </React.Fragment>
    );
  }
}

export default Flights;
