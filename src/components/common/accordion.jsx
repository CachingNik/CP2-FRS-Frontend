import React from "react";
import PropTypes from "prop-types";

const Accordion = ({ items }) => {
  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-heading">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#panelsStayOpen-collapse${index}`}
              aria-expanded="false"
              aria-controls={`panelsStayOpen-collapse${index}`}
            >
              {item.header}
            </button>
          </h2>
          <div
            id={`panelsStayOpen-collapse${index}`}
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-heading"
          >
            <div className="accordion-body">{item.body}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;

Accordion.propTypes = {
  items: PropTypes.array.isRequired,
};
