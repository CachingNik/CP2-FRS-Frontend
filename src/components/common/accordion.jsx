import React from "react";
import PropTypes from "prop-types";

const Accordion = ({ items }) => {
  return (
    <div className="accordion" id="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <h2 className="accordion-header" id={`heading${index}`}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index}`}
              aria-expanded="false"
              aria-controls={`collapse${index}`}
            >
              {item.header}
            </button>
          </h2>
          <div
            id={`collapse${index}`}
            className="accordion-collapse collapse"
            aria-labelledby={`heading${index}`}
            data-bs-parent="#accordion"
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
