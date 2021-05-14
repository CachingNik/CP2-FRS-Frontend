import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  };

  render() {
    const { data, columns, keyProperty } = this.props;

    return (
      <tbody>
        {data.map((item) => (
          <tr key={item[keyProperty]}>
            {columns.map((column, index) => (
              <td key={index} className="center-element">
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

TableBody.defaultProps = {
  keyProperty: "_id",
};

export default TableBody;
