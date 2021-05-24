import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import Form from "./common/form";
import otherService from "../services/otherService";

class AirportForm extends Form {
  state = {
    data: {
      name: "",
      abbreviation: "",
    },
    errors: {},
  };

  schema = {
    name: Joi.string().required().label("Name"),
    abbreviation: Joi.string()
      .uppercase()
      .min(2)
      .max(4)
      .required()
      .label("Abbreviation"),
  };

  doSubmit = async () => {
    try {
      await otherService.saveAirport(this.state.data);

      this.props.history.replace("/flights");
    } catch (ex) {
      if (ex.response && ex.response.status === 400)
        toast.error(ex.response.data);
    }
  };

  render() {
    return (
      <React.Fragment>
        <h3>
          <span className="badge bg-dark">Add Airport</span>
        </h3>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("abbreviation", "Abbreviation")}
          {this.renderSubmitButton("Save")}
        </form>
      </React.Fragment>
    );
  }
}

export default AirportForm;
