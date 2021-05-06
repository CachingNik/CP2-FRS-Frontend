import React from "react";
import TableBody from "./tableBody";
import TableHead from "./tableHead";

const Table = ({ flights }) => {
  return (
    <table className="table table-responsive-xs table-hover">
      <TableHead />
      <TableBody flights={flights} />
    </table>
  );
};

export default Table;
