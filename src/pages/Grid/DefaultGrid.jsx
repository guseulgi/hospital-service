import React from "react";
import "tui-grid/dist/tui-grid.css";
import Grid from "@toast-ui/react-grid";

const data = [
  { id: 1, name: "Editor" },
  { id: 2, name: "Grid" },
  { id: 3, name: "Chart" },
  { id: 3, name: "Chart" },
  { id: 3, name: "Chart" },
  { id: 3, name: "Chart" },
  { id: 3, name: "Chart" },
  { id: 3, name: "Chart" },
];

const columns = [
  { name: "id", header: "번호" },
  { name: "name", header: "이름" },
];

export default function DefaultGrid() {
  return (
    <div>
      <Grid
        data={data}
        columns={columns}
        rowHeight={25}
        bodyHeight={100}
        // heightResizable={true}
        // rowHeaders={["rowNum"]}
      />
    </div>
  );
}
