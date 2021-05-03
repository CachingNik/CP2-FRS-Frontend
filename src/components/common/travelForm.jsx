import { Component } from "react";
import ToggleButton from "./toggleButton";
import PassengerCounter from "./passengerCounter";
import InputDate from "./inputDate";

class TravelForm extends Component {
  handleMode = ({ currentTarget: button }) => {
    const activeMode = { ...this.state.activeMode };
    Object.keys(activeMode).forEach((key) => {
      activeMode[key] = key === button.name;
    });

    this.setState({ activeMode });
  };

  handleDateChange = ({ currentTarget: datePicker }) => {
    const travelDate = { ...this.state.travelDate };
    travelDate[datePicker.name] = datePicker.value;

    this.setState({ travelDate });
  };

  handleIncrement = (e) => {
    e.preventDefault();

    const counterName = e.currentTarget.name;
    const counter = { ...this.state.counter };

    if (counter[counterName] === 4) return;

    counter[counterName] += 1;
    this.setState({ counter });
  };

  handleDecrement = (e) => {
    e.preventDefault();

    const counterName = e.currentTarget.name;
    const counter = { ...this.state.counter };

    if (counter[counterName] === 0) return;

    counter[counterName] -= 1;
    this.setState({ counter });
  };

  handleSearch = (e) => {
    e.preventDefault();

    this.doSearch();
  };

  renderToggleButton = (name, label) => {
    const { activeMode } = this.state;

    return (
      <ToggleButton
        mode={activeMode[name]}
        label={label}
        name={name}
        onClick={this.handleMode}
      />
    );
  };

  renderInputDate = (name) => {
    const { travelDate } = this.state;

    return (
      <InputDate
        value={travelDate[name]}
        name={name}
        onChange={this.handleDateChange}
      />
    );
  };

  renderPassengerCounter = (name, label) => {
    const { counter } = this.state;

    return (
      <PassengerCounter
        label={label}
        value={counter[name]}
        name={name}
        onDecrement={this.handleDecrement}
        onIncrement={this.handleIncrement}
      />
    );
  };

  renderSearchButton = (label) => {
    return (
      <div className="text-center my-2">
        <button className="btn btn-primary">{label}</button>
      </div>
    );
  };
}

export default TravelForm;
