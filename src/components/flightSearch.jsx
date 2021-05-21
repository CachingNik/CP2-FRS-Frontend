import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import otherService from "../services/otherService";

class FlightSearch extends Form {
  state = {
    data: {
      fromId: "",
      toId: "",
      serviceClassId: "",
      departure: "",
    },
    counter: {
      adult: 1,
      child: 0,
    },
    errors: {},
    airports: [],
    serviceClasses: [],
  };

  schema = {
    fromId: Joi.string().required(),
    toId: Joi.string().disallow(Joi.ref("fromId")).required(),
    serviceClassId: Joi.string().required(),
    departure: Joi.date().required().label("Departure"),
  };

  async componentDidMount() {
    const { data: airports } = await otherService.getAirports();
    const { data: serviceClasses } = await otherService.getServiceClasses();

    this.setState({ airports, serviceClasses });
  }

  doSubmit = () => {
    const { fromId, toId, serviceClassId, departure } = this.state.data;
    const { adult, child } = this.state.counter;

    this.props.history.push(
      `/flights/${fromId}/${toId}/${serviceClassId}/${departure}/${adult}-${child}`
    );
  };

  render() {
    const { airports, serviceClasses } = this.state;

    return (
      <React.Fragment>
        <h1>
          <span className="badge bg-dark">Flights</span>
        </h1>
        <div className="card">
          <h5 className="card-header">Book your seats now!</h5>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="input-group mb-3">
                {this.renderDropdown("fromId", "From", airports)}
                {this.renderDropdown("toId", "To", airports)}
                {this.renderDropdown("serviceClassId", "Class", serviceClasses)}
              </div>
              {this.renderInput("departure", "Departure", "date")}
              <div className="row justify-content-center">
                {this.renderCounter("adult", "Adults", 1)}
                {this.renderCounter("child", "Children", 0, 3)}
              </div>
              {this.renderSubmitButton("Search")}
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FlightSearch;
