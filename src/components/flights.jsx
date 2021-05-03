import React from "react";
import TravelForm from "./common/travelForm";
import Dropdown from "./common/dropdown";

class Flights extends TravelForm {
  state = {
    activeMode: {
      oneWay: true,
      roundTrip: false,
    },
    counter: {
      adult: 0,
      child: 0,
      infant: 0,
    },
    travelDate: {
      dep: "",
      ret: "",
    },
  };

  componentDidMount() {
    const travelDate = { ...this.state.travelDate };

    let date = new Date();
    travelDate.dep = this.getDatePickerFormat(date);
    date.setDate(date.getDate() + 1);
    travelDate.ret = this.getDatePickerFormat(date);

    this.setState({ travelDate });
  }

  getDatePickerFormat(date) {
    return date.toISOString().substr(0, 10);
  }

  doSearch = () => {
    // Call the Server
    console.log("Searching...");
  };

  render() {
    const { roundTrip } = this.state.activeMode;

    return (
      <div>
        <h1>Flights</h1>
        <div className="btn-group btn-group-toggle">
          {this.renderToggleButton("oneWay", "One Way")}
          {this.renderToggleButton("roundTrip", "Round Trip")}
        </div>
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
                    <span className="input-group-text">
                      {roundTrip ? "Departure / Return" : "Departure"}
                    </span>
                  </div>
                  {this.renderInputDate("dep")}
                  {roundTrip && this.renderInputDate("ret")}
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
      </div>
    );
  }
}

export default Flights;
