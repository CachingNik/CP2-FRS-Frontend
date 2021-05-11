import React from "react";
import FlightSearch from "./flightSearch";

const Home = ({ history }) => {
  return (
    <React.Fragment>
      <h1>Home</h1>
      <FlightSearch history={history} />
    </React.Fragment>
  );
};

export default Home;
