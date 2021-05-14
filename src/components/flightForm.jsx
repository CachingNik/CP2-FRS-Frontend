import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getAirports, getServiceClasses } from "../services/otherService";

class FlightForm extends Form {
  state = {
    data: {
      from: "",
      to: "",
      serviceClass: "",
      departure: "",
    },
    counter: {
      adult: 1,
      child: 0,
      infant: 0,
    },
    errors: {},
    airports: [],
    serviceClasses: [],
  };

  schema = {
    departure: Joi.date().required().label("Departure"),
    from: Joi.string().required(),
    to: Joi.string().disallow(Joi.ref("from")).required(),
    serviceClass: Joi.string().required(),
  };

  async componentDidMount() {
    const { data: airports } = await getAirports();
    const { data: serviceClasses } = await getServiceClasses();

    this.setState({ airports, serviceClasses });
  }

  doSubmit = () => {
    const { from, to, serviceClass, departure } = this.state.data;

    this.props.doSearch(from, to, serviceClass, departure);
  };

  render() {
    const { airports, serviceClasses } = this.state;

    return (
      <div className="card">
        <h5 className="card-header">Book your seats now!</h5>
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <div className="input-group mb-3">
              {this.renderDropdown("from", "From", airports)}
              {this.renderDropdown("to", "To", airports)}
              {this.renderDropdown("serviceClass", "Class", serviceClasses)}
            </div>
            {this.renderInput("departure", "Departure", "date")}
            <div className="row justify-content-center">
              {this.renderCounter("adult", "Adults", 1)}
              {this.renderCounter("child", "Children", 0, 3)}
              {this.renderCounter("infant", "Infants", 0, 2)}
            </div>
            {this.renderSubmitButton("Search")}
          </form>
        </div>
      </div>
    );
  }
}

export default FlightForm;
