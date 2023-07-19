import React from "react";

import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";

const gridStyle = { minHeight: 550 };
const defaultSortInfo = [
  { name: "model", dir: 1 },
  { name: "price", dir: -1 },
];

const columns = [
  { name: "id", header: "Id", defaultVisible: false, defaultWidth: 70, sortable: false },
  { name: "model", header: "Model", defaultFlex: 1 },
  { name: "price", header: "Price", defaultFlex: 1, type: "currency" },
];

const dataSource = [
  { model: "BMW", price: 100000, id: 0 },
  { model: "Audi", price: 20000, id: 1 },
  { model: "Ford", price: 10500, id: 2 },
  { model: "Audi", price: 15000, id: 3 },
  { model: "Audi", price: 30000, id: 4 },
  { model: "Ford", price: 24500, id: 5 },
];

export default function GridEx2() {
  return (
    <ReactDataGrid
      idProperty="id"
      style={gridStyle}
      defaultSortInfo={defaultSortInfo}
      columns={columns}
      dataSource={dataSource}
    />
  );
}
