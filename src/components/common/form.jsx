import { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Counter from "./counter";
import Dropdown from "./dropdown";

class Form extends Component {
  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    error.details.map((e) => (errors[e.path[0]] = e.message));
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const field = { [name]: value }; // Computed properties in ES6
    const subschema = { [name]: this.schema[name] };
    const { error } = Joi.validate(field, subschema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    // Bracket notation instead of dot notation for
    // dynamiclly accessing object property names
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  handleIncrement = (e) => {
    e.preventDefault();

    const { name, attributes } = e.currentTarget;
    const maxValue = parseInt(attributes["max"].value);
    const counter = { ...this.state.counter };

    if (counter[name] === maxValue) return;

    counter[name] += 1;
    this.setState({ counter });
  };

  handleDecrement = (e) => {
    e.preventDefault();

    const { name, attributes } = e.currentTarget;
    const minValue = parseInt(attributes["min"].value);
    const counter = { ...this.state.counter };

    if (counter[name] === minValue) return;

    counter[name] -= 1;
    this.setState({ counter });
  };

  renderSubmitButton(label) {
    return (
      <div className="text-center mt-3">
        <button disabled={this.validate()} className="btn btn-primary">
          {label}
        </button>
      </div>
    );
  }

  renderInput = (name, label, type = "text") => {
    const { data, errors } = this.state;

    return (
      <Input
        name={name}
        label={label}
        type={type}
        onChange={this.handleChange}
        value={data[name]}
        error={errors[name]}
      />
    );
  };

  renderCounter = (name, label, min = 0, max = 4) => {
    const { counter } = this.state;

    return (
      <Counter
        label={label}
        value={counter[name]}
        name={name}
        min={min}
        max={max}
        onDecrement={this.handleDecrement}
        onIncrement={this.handleIncrement}
      />
    );
  };

  renderDropdown = (name, label, items) => {
    const { data } = this.state;

    return (
      <Dropdown
        label={label}
        items={items}
        name={name}
        value={data[name]}
        onChange={this.handleChange}
      />
    );
  };
}

export default Form;
