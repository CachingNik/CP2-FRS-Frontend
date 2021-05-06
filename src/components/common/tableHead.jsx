import React from "react";

const TableHead = () => {
  return (
    <thead className="thead-dark">
      <tr>
        <th className="text-center">Airline</th>
        <th className="text-center">Timings</th>
        <th className="text-center">Price</th>
        <th></th>
      </tr>
    </thead>
  );
};

export default TableHead;
