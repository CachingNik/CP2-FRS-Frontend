import React from "react";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import http from "../services/httpService";
import Form from "./common/form";

class FlightSearch extends Form {
  state = {
    counter: {
      adult: 0,
      child: 0,
      infant: 0,
    },
    dropdown: {
      from: "",
      to: "",
      serviceClass: "",
    },
    departure: "",
    airports: [],
    classesofService: [
      { _id: "economy", name: "Economy" },
      { _id: "business", name: "Business" },
      { _id: "first", name: "First" },
    ],
  };

  async componentDidMount() {
    let date = new Date();
    const departure = date.toISOString().substr(0, 10);

    const { data: airports } = await http.get(
      "http://192.168.1.3:3000/api/airports"
    );

    this.setState({ departure, airports });
  }

  handleSearch = (e) => {
    e.preventDefault();

    const { departure } = this.state;
    const { from, to, serviceClass } = this.state.dropdown;

    if (from === "" || serviceClass === "") {
      toast.error("From or Class field cannot be left empty.");
      return;
    }

    this.props.history.push(
      `/flights/${from}/${to}/${serviceClass}/${departure}`
    );
  };

  render() {
    const { airports, classesofService } = this.state;

    return (
      <React.Fragment>
        <ToastContainer />
        <form className="my-2" onSubmit={this.handleSearch}>
          <div className="card bg-light">
            <div className="card-header">Book your Seats Now!</div>
            <div className="card-body">
              <div className="form-row my-3">
                <div className="input-group">
                  {this.renderDropdown("from", "From", airports)}
                  {this.renderDropdown("to", "To", airports)}
                  {this.renderDropdown(
                    "serviceClass",
                    "Class",
                    classesofService
                  )}
                </div>
              </div>
              <div className="form-row my-3">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Departure</span>
                  </div>
                  {this.renderInputDate("departure")}
                </div>
              </div>
              <div className="form-row justify-content-around">
                {this.renderCounter("adult", "Adults")}
                {this.renderCounter("child", "Children")}
                {this.renderCounter("infant", "Infants")}
              </div>
            </div>
          </div>
          <div className="text-center my-2">
            <button className="btn btn-primary">Seach</button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default FlightSearch;
