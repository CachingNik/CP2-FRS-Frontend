import React from "react";
import { ToastContainer } from "react-toastify";
import http from "../services/httpService";
import Form from "./common/form";

class FlightSearch extends Form {
  state = {
    counter: {
      adult: 0,
      child: 0,
      infant: 0,
    },
    dropdown: {
      from: "",
      to: "",
      class: "",
    },
    departureDate: "",
    airports: [],
    classes: [],
  };

  async componentDidMount() {
    let date = new Date();
    const departureDate = date.toISOString().substr(0, 10);

    const { data: airports } = await http.get(
      "http://localhost:3000/api/airports"
    );

    this.setState({ departureDate, airports });
  }

  doSearch = () => {
    // Call the Server
    console.log("Searching...");
  };

  render() {
    const { airports, classes } = this.state;

    return (
      <React.Fragment>
        <ToastContainer />
        <form className="my-2" onSubmit={this.handleSearch}>
          <div className="card bg-light">
            <div className="card-header">Book your Seats Now!</div>
            <div className="card-body">
              <div className="form-row my-3">
                <div className="input-group">
                  {this.renderDropdown("from", "From", airports)}
                  {this.renderDropdown("to", "To", airports)}
                  {this.renderDropdown("class", "Class", classes)}
                </div>
              </div>
              <div className="form-row my-3">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Departure</span>
                  </div>
                  {this.renderInputDate("departureDate")}
                </div>
              </div>
              <div className="form-row justify-content-around">
                {this.renderCounter("adult", "Adults")}
                {this.renderCounter("child", "Children")}
                {this.renderCounter("infant", "Infants")}
              </div>
            </div>
          </div>
          {this.renderSearchButton("Search")}
        </form>
      </React.Fragment>
    );
  }
}

export default FlightSearch;
