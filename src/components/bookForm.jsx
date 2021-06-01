import React from "react";
import Joi from "joi-browser";
import moment from "moment";
import { toast } from "react-toastify";
import Form from "./common/form";
import AboutFlight from "./AboutFlight";
import Accordion from "./common/accordion";
import auth from "../services/authService";
import packageService from "../services/packageService";
import openPaymentPortal from "../services/paymentService";

class BookForm extends Form {
  state = {
    data: {
      name: "",
      email: "",
      mobileNumber: "",
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
    name: Joi.string().required(),
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
        dateOfBirth: Joi.date()
          .min(moment().subtract(11, "years").format("YYYY-MM-DD"))
          .required(),
      })
      .min(this.state.count.child)
      .max(3),
  };

  async componentDidMount() {
    const { adult, child } = this.state.count;
    if (adult === 0 || adult > 4 || child > 3)
      this.props.history.replace("/not-found");

    await this.populateFlight();
    await this.populateUser();
  }

  async populateFlight() {
    const flightId = this.props.match.params.id;
    const { data: flight } = await packageService.getFlight(flightId);

    this.setState({ flight });
  }

  async populateUser() {
    const data = { ...this.state.data };
    const user = auth.getCurrentUser();

    data.name = user.name;
    data.email = user.email;
    data.mobileNumber = user.mobileNumber ? user.mobileNumber : "";

    this.setState({ data });
  }

  getTicketFare() {
    const { flight, count } = this.state;

    return flight.price.adult * count.adult + flight.price.child * count.child;
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

  doSubmit = async () => {
    try {
      const { data, flight } = this.state;

      await openPaymentPortal(
        { ...data, flightId: flight._id },
        this.getTicketFare(),
        this.props.history
      );
    } catch (ex) {
      toast.error("Please try again later.");
    }
  };

  render() {
    const { flight, count } = this.state;

    return (
      <React.Fragment>
        <h3>
          <span className="badge bg-dark">Book!</span>
        </h3>
        {flight && (
          <AboutFlight
            flight={flight}
            adultCount={count.adult}
            childCount={count.child}
            ticketFare={this.getTicketFare()}
          />
        )}
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
