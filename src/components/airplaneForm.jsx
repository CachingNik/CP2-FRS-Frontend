import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import Form from "./common/form";
import otherService from "../services/otherService";

class AirplaneForm extends Form {
  state = {
    data: {
      name: "",
      number: "",
    },
    errors: {},
  };

  schema = {
    name: Joi.string().min(5).max(15).required().label("Name"),
    number: Joi.string().required().label("Number"),
  };

  doSubmit = async () => {
    try {
      await otherService.saveAirplane(this.state.data);

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
          <span className="badge bg-dark">Add Airline</span>
        </h3>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("number", "Number")}
          {this.renderSubmitButton("Save")}
        </form>
      </React.Fragment>
    );
  }
}

export default AirplaneForm;
