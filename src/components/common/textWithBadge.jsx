import React from "react";

const TextWithBadge = ({ text, color, children }) => {
  return (
    <div className="center-element">
      {text}
      <div>
        <span className={`badge bg-${color}`}>{children}</span>
      </div>
    </div>
  );
};

export default TextWithBadge;
