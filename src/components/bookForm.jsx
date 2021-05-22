import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import AboutFlight from "./AboutFlight";
import Accordion from "./common/accordion";
import packageService from "../services/packageService";
import auth from "../services/authService";

class BookForm extends Form {
  state = {
    data: {
      email: auth.getCurrentUser().email,
      mobileNumber: auth.getCurrentUser().mobileNumber,
      adultList: [],
      childList: [],
    },
    count: {
      adult: parseInt(this.props.match.params.adult),
      child: parseInt(this.props.match.params.child),
    },
    errors: {},
    gender: [
      { _id: "male", name: "Male" },
      { _id: "female", name: "Female" },
    ],
  };

  schema = {
    email: Joi.string().email().label("Email"),
    mobileNumber: Joi.number().required().label("Mobile Number"),
    adultList: Joi.array()
      .items({
        gender: Joi.string().valid("male", "female").required(),
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
      })
      .min(this.state.count.adult)
      .max(4),
    childList: Joi.array()
      .items({
        gender: Joi.string().valid("male", "female").required(),
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        dateOfBirth: Joi.date().required(),
      })
      .min(this.state.count.child)
      .max(3),
  };

  async componentDidMount() {
    const { adult, child } = this.state.count;
    if (adult > 4 || child > 3) this.props.history.replace("/not-found");

    const flightId = this.props.match.params.id;
    const { data: flight } = await packageService.getFlight(flightId);

    this.setState({ flight });
  }

  passengerForms = [
    ...Array.from({ length: this.state.count.adult }, (_, index) => ({
      header: `Adult ${index + 1}`,
      body: (
        <div className="row row-cols-md-auto g-3 justify-content-center">
          <div className="col-12 mb-3">
            {this.renderDropdown(
              `adultList[${index}].gender`,
              "Gender",
              this.state.gender
            )}
          </div>
          <div className="col-12">
            {this.renderInput(`adultList[${index}].firstName`, "First Name")}
          </div>
          <div className="col-12">
            {this.renderInput(`adultList[${index}].lastName`, "Last Name")}
          </div>
        </div>
      ),
    })),
    ...Array.from({ length: this.state.count.child }, (_, index) => ({
      header: `Child ${index + 1}`,
      body: (
        <div className="row row-cols-md-auto g-3 justify-content-center">
          <div className="col-12 mb-3">
            {this.renderDropdown(
              `childList[${index}].gender`,
              "Gender",
              this.state.gender
            )}
          </div>
          <div className="col-12">
            {this.renderInput(`childList[${index}].firstName`, "First Name")}
          </div>
          <div className="col-12">
            {this.renderInput(`childList[${index}].lastName`, "Last Name")}
          </div>
          <div className="col-12">
            {this.renderInput(
              `childList[${index}].dateOfBirth`,
              "Date of Birth",
              "date"
            )}
          </div>
        </div>
      ),
    })),
  ];

  doSubmit = () => {
    // Call to Server
    console.log("Submitted");
  };

  render() {
    const { flight } = this.state;

    return (
      <React.Fragment>
        <h1>
          <span className="badge bg-dark">Book!</span>
        </h1>
        {flight && <AboutFlight flight={flight} />}
        <form className="mb-3" onSubmit={this.handleSubmit}>
          <div className="row row-cols-md-auto g-3 mb-3 justify-content-center">
            <div className="col-12">{this.renderInput("email", "Email")}</div>
            <div className="col-12">
              {this.renderInput("mobileNumber", "Mobile", "text", "+91")}
            </div>
          </div>
          <Accordion items={this.passengerForms} />
          {this.renderSubmitButton("Proceed to Payment")}
        </form>
      </React.Fragment>
    );
  }
}

export default BookForm;
