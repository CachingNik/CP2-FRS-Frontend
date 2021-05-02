import React from "react";
import Form from "./common/form";

class Flights extends Form {
  state = {
    activeMode: {
      oneWay: true,
      roundTrip: false,
    },
  };

  render() {
    return (
      <div>
        <h1>Flights</h1>
        <div className="btn-group btn-group-toggle">
          {this.renderToggleButton("oneWay", "One Way")}
          {this.renderToggleButton("roundTrip", "Round Trip")}
        </div>
        <form></form>
      </div>
    );
  }
}

export default Flights;
