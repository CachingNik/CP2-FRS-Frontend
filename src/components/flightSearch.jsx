import React from "react";
import Form from "./common/form";
import Dropdown from "./common/dropdown";

class FlightSearch extends Form {
  state = {
    counter: {
      adult: 0,
      child: 0,
      infant: 0,
    },
    departureDate: "",
  };

  componentDidMount() {
    let date = new Date();
    const departureDate = date.toISOString().substr(0, 10);

    this.setState({ departureDate });
  }

  doSearch = () => {
    // Call the Server
    console.log("Searching...");
  };

  render() {
    return (
      <form className="my-2" onSubmit={this.handleSearch}>
        <div className="card bg-light">
          <div className="card-header">Book your Seats Now!</div>
          <div className="card-body">
            <div className="form-row my-3">
              <div className="input-group col-12 col-lg-6 my-1">
                <Dropdown label="From" />
                <Dropdown label="To" />
                <Dropdown label="Class" />
              </div>
              <div className="input-group col-12 col-lg-6 my-1">
                <div className="input-group-prepend">
                  <span className="input-group-text">Departure</span>
                </div>
                {this.renderInputDate("departureDate")}
              </div>
            </div>
            <div className="form-row justify-content-around">
              {this.renderPassengerCounter("adult", "Adults")}
              {this.renderPassengerCounter("child", "Children")}
              {this.renderPassengerCounter("infant", "Infants")}
            </div>
          </div>
        </div>
        {this.renderSearchButton("Search")}
      </form>
    );
  }
}

export default FlightSearch;
