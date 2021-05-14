import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };

    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }

    this.props.onSort(sortColumn);
  };

  renderSortIcon = (column) => {
    const { path, order } = this.props.sortColumn;

    if (column.path !== path) return null;

    if (order === "asc")
      return (
        <i className="fa fa-sort-asc ms-1 icon-white" aria-hidden="true"></i>
      );

    return (
      <i className="fa fa-sort-desc ms-1 icon-white" aria-hidden="true"></i>
    );
  };

  render() {
    return (
      <thead className="table-dark">
        <tr>
          {this.props.columns.map((column, index) => (
            <th
              key={index}
              className="text-center clickable"
              onClick={() => column.path && this.raiseSort(column.path)}
            >
              {column.label}
              {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
