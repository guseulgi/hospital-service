import React from "react";

import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";

const columns = [
  { name: "firstName", defaultFlex: 1, header: "First Name" },
  { name: "lastName", defaultFlex: 1, header: "Last Name" },
  {
    name: "country",
    header: "Country",
    defaultWidth: 100,
    render: ({ value }) => {
      return value;
    },
  },
  {
    id: "fullName",
    header: "Full Name",
    minWidth: 50,
    defaultFlex: 1,
    render: ({ data }) => data.firstName + " " + data.lastName,
  },
  {
    name: "age",
    header: "Age",
    defaultWidth: 80,
    render: ({ value }) => <span style={{ color: value < 30 ? "lightgreen" : "inherit" }}>{value}</span>,
  },
];

const dataSource = [
  { firstName: "John", lastName: "Grayner", country: "usa", age: 35, id: 0 },
  { firstName: "Mary", lastName: "Stones", country: "ca", age: 25, id: 1 },
  { firstName: "Robert", lastName: "Fil", country: "uk", age: 27, id: 2 },
  { firstName: "Bob", lastName: "Fisher", country: "usa", age: 72, id: 3 },
  { firstName: "Michael", lastName: "Rogers", country: "usa", age: 45, id: 4 },
  { firstName: "Hilly", lastName: "Bobson", country: "uk", age: 5, id: 5 },
  { firstName: "Mike", lastName: "Brind", country: "ca", age: 15, id: 6 },
  { firstName: "Carl", lastName: "Phancer", country: "ca", age: 56, id: 7 },
  { firstName: "Victory", lastName: "Hope", country: "uk", age: 52, id: 8 },
];

const gridStyle = { minHeight: 550 };

export default () => <ReactDataGrid idProperty="id" columns={columns} style={gridStyle} dataSource={dataSource} />;
