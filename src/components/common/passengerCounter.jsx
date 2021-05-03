import React from "react";

const PassengerCounter = ({ label, value, name, onIncrement, onDecrement }) => {
  return (
    <div className="input-group col-sm-6 col-lg-3 my-1 justify-content-center">
      <div className="input-group-prepend">
        <span className="input-group-text">
          {label}&nbsp;<span className="badge badge-secondary">{value}</span>
        </span>
      </div>
      <div className="input-group-append">
        <button className="btn btn-danger" name={name} onClick={onDecrement}>
          <i className="icon-minus"></i>
        </button>
      </div>
      <div className="input-group-append">
        <button className="btn btn-success" name={name} onClick={onIncrement}>
          <i className="icon-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default PassengerCounter;
