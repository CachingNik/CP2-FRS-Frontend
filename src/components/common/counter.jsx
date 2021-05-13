import React from "react";

const Counter = ({
  label,
  value,
  name,
  min,
  max,
  onDecrement,
  onIncrement,
}) => {
  return (
    <div className="col-sm-6 col-lg-4 mb-1">
      <div className="input-group justify-content-center">
        <span className="input-group-text">
          {label}&nbsp;
          <span className="badge rounded-pill bg-secondary">{value}</span>
        </span>
        <button
          className="btn btn-danger"
          min={min}
          name={name}
          onClick={onDecrement}
        >
          <i className="fa fa-minus" aria-hidden="true"></i>
        </button>
        <button
          className="btn btn-success"
          max={max}
          name={name}
          onClick={onIncrement}
        >
          <i className="fa fa-plus" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default Counter;
