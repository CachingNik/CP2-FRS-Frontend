import React from "react";

const Frs1 = ({ text, color, children }) => {
  return (
    <div className="frs-1">
      {text}
      <div>
        <span className={`badge badge-${color}`}>{children}</span>
      </div>
    </div>
  );
};

export default Frs1;
