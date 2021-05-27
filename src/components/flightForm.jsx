import React from "react";
import Joi from "joi-browser";
import moment from "moment";
import { toast } from "react-toastify";
import Form from "./common/form";
import otherService from "../services/otherService";
import packageService from "../services/packageService";

class FlightForm extends Form {
  state = {
    data: {
      airplaneId: "",
      fromId: "",
      toId: "",
      serviceClassId: "",
      departure: "",
      arrival: "",
      price: {
        adult: 0,
        child: 0,
      },
      seatsLeft: 50,
    },
    errors: {},
    airplanes: [],
    airports: [],
    serviceClasses: [],
  };

  schema = {
    _id: Joi.string(),
    airplaneId: Joi.string().required().label("Airline"),
    fromId: Joi.string().required().label("From"),
    toId: Joi.string().disallow(Joi.ref("fromId")).required().label("To"),
    serviceClassId: Joi.string().required().label("Class"),
    departure: Joi.date().required().label("Departure"),
    arrival: Joi.date().required().label("Arrival"),
    price: {
      adult: Joi.number().min(0).required().label("Adult Price"),
      child: Joi.number().min(0).required().label("Child Price"),
    },
    seatsLeft: Joi.number().min(0).max(1000).required().label("Seats"),
  };

  async componentDidMount() {
    await this.populateDropdowns();
    await this.populateFlight();
  }

  async populateDropdowns() {
    const { data: airplanes } = await otherService.getAirplanes();
    const { data: airports } = await otherService.getAirports();
    const { data: serviceClasses } = await otherService.getServiceClasses();

    this.setState({ airplanes, airports, serviceClasses });
  }

  async populateFlight() {
    try {
      const flightId = this.props.match.params.id;
      if (flightId === "new") return;

      const { data: flight } = await packageService.getFlight(flightId);

      this.setState({ data: this.mapToViewModel(flight) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }

  mapToViewModel(flight) {
    return {
      _id: flight._id,
      airplaneId: flight.airplane._id,
      fromId: flight.from._id,
      toId: flight.to._id,
      serviceClassId: flight.serviceClass._id,
      departure: moment(flight.departure).format("YYYY-MM-DDTHH:mm"),
      arrival: moment(flight.arrival).format("YYYY-MM-DDTHH:mm"),
      price: {
        adult: flight.price.adult,
        child: flight.price.child,
      },
      seatsLeft: flight.seatsLeft,
    };
  }

  doSubmit = async () => {
    try {
      await packageService.saveFlight(this.state.data);

      this.props.history.goBack();
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        toast.error(ex.response.data);
      }
    }
  };

  render() {
    const { airplanes, airports, serviceClasses } = this.state;

    return (
      <React.Fragment>
        <h3>
          <span className="badge bg-dark">Flight Form</span>
        </h3>
        <form className="mb-3" onSubmit={this.handleSubmit}>
          <div className="mb-3">
            {this.renderDropdown("airplaneId", "Airline", airplanes)}
          </div>
          <div className="input-group mb-3">
            {this.renderDropdown("fromId", "From", airports)}
            {this.renderDropdown("toId", "To", airports)}
            {this.renderDropdown("serviceClassId", "Class", serviceClasses)}
          </div>
          {this.renderInput(
            "seatsLeft",
            "No of Seats currently available",
            "number"
          )}
          {this.renderInput("departure", "Departure", "datetime-local")}
          {this.renderInput("arrival", "Arrival", "datetime-local")}
          <label className="form-label">
            <span className="badge bg-secondary">Ticket Price</span>
          </label>
          {this.renderInput("price.adult", "Adult", "number", "₹")}
          {this.renderInput("price.child", "Child", "number", "₹")}
          {this.renderSubmitButton("Save")}
        </form>
      </React.Fragment>
    );
  }
}

export default FlightForm;
