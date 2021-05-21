import React from "react";

const AboutFlight = ({ flight }) => {
  return (
    <text>
      Write your Code here... <br />
      Access flight properties like this <br />
      <code>{"flight._id"}</code> = {flight._id} OR <br />
      <code>{"flight.airplane.name"}</code> = {flight.airplane.name}
    </text>
  );
};

export default AboutFlight;
