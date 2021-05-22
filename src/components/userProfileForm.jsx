import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import auth from "../services/authService";

class UserProfileForm extends Form {
  state = {
    data: {
      name: "",
      username: "",
      mobileNumber: "",
    },
    errors: {},
  };

  schema = {
    name: Joi.string().required().label("Name"),
    username: Joi.string().email().required().label("Username"),
    mobileNumber: Joi.number().allow("").label("Mobile Number"),
  };

  componentDidMount() {
    const user = auth.getCurrentUser();
    const data = { ...this.state.data };

    data.name = user.name;
    data.username = user.email;
    data.mobileNumber = user.mobileNumber ? user.mobileNumber : "";

    this.setState({ data });
  }

  doSubmit = () => {
    // Call to Server
    console.log("Submitted");
  };

  render() {
    return (
      <React.Fragment>
        <h1>
          <span className="badge bg-dark">ME</span>
        </h1>
        <div className="text-center p-3">
          <i className="fa fa-user-circle fa-5x" aria-hidden="true"></i>
        </div>
        <form className="mb-3" onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("username", "Username")}
          {this.renderInput("mobileNumber", "Mobile", "text", "+91")}
          {this.renderSubmitButton("Update")}
        </form>
      </React.Fragment>
    );
  }
}

export default UserProfileForm;
