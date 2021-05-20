import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getAirports, getServiceClasses } from "../services/otherService";
import Gender from "../components/common/Gender"


class FlightBookingForm extends Form {
    constructor() {
    super();
    this.state = {
      name: "",
      passengers: [{ name: "" }],
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
  }
 

  schema = {
    departure: Joi.date().required().label("Departure"),
    from: Joi.string().required(),
    to: Joi.string().disallow(Joi.ref("from")).required(),
    serviceClass: Joi.string().required(),
  };

  
    handleAddPassenger = () => {
    this.setState({
      passengers: this.state.passengers.concat([{ name: "" }])
    });
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

  
  addButton=()=>{
    return (
      <div className="text-center mt-3">
        <button
               className="btn btn-primary"
          type="button"
          onClick={this.handleAddPassenger}
                
        >
          Add Passenger
        </button>
      </div>
    );
  
  }
   handleChange=(event)=>{
    const {value,name} = event.target;

    // setPassenger(prevVal => {
    //     return {
    //         ...prevVal,
    //         [name]: value
    //       };
    // })
}

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
               {this.state.passengers.map((passenger, idx) => (
              <div className="row" >
                <input onChange={this.handleChange} className="col-4" type="text" name="firstName" placeholder="First Name" />
                <input onChange={this.handleChange} className="col-4" type="text" name="lastName" placeholder="Last Name"/>
                <input onChange={this.handleChange} className="col-4" type="text" name="age" placeholder="Age"/>
                <Gender onChange={this.handleChange} className="col-4" />
                <input onChange={this.handleChange} className="col-4" type="text" name="phoneNumber" placeholder="Phone Number" />
                <input onChange={this.handleChange} className="col-4" type="text" name="email" placeholder="Email Address" />
              </div>
          ))}
              {this.addButton()}
               {this.renderSubmitButton("Submit")}

            </form>
          </div>
        </div>
     
    );
  }
}

export default FlightBookingForm;
