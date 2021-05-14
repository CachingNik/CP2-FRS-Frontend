import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ count, columns, sortColumn, onSort, data }) => {
  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <caption>{count} matching packages were found</caption>
        <TableHeader
          columns={columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBody columns={columns} data={data} />
      </table>
    </div>
  );
};

export default Table;
