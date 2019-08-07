import React from "react";

const TableHeader = props => {
  const { title } = props;
  return (
    <React.Fragment>
      <thead>
        <tr>
          {
            <th scope="col" style={{ textAlign: "center" }}>
              Date
            </th>
          }
          <th scope="col" style={{ textAlign: "center" }}>
            Day
          </th>
          <th scope="col" className="text-right" style={{ width: "40%" }}>
            Verses
          </th>
        </tr>
      </thead>
    </React.Fragment>
  );
};

export default TableHeader;
