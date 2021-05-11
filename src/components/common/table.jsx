import React from "react";
import TableBody from "./tableBody";
import TableHead from "./tableHead";

const Table = ({ flights, serviceClass }) => {
  return (
    <table className="table table-responsive-xs table-hover">
      <TableHead />
      <TableBody flights={flights} serviceClass={serviceClass} />
    </table>
  );
};

export default Table;
