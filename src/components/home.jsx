import React, { Component } from "react";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>
          <span className="badge bg-dark">Home</span>
        </h1>
        <p className="alert alert-primary mb-4">
          Today everyone is busy with their schedule and no one have time to
          make a trip for holidays with their family. Also , Flight Reservation
          Process is very difficult to understand for everyone. But we are
          providing a Solution for that Problem. This system provides a facility
          to easy access towards customers and real time users. There is no
          requirement for any type of Agent. One can easily book the ticket for
          the destination of his choice by using the application.
          <br />
          We are giving all the facilities in one project
          <strong> Flight Reservation System</strong>.
        </p>
      </React.Fragment>
    );
  }
}

export default Home;
