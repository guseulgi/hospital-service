import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

export default function HospitalInfoGrid({ data }) {
  const rowDataset = [
    {
      종합병원: data.hsptlGrhsp,
      일반병원: data.hsptlGnrhsp,
      한의원: data.ormclOrmdc,
      조산원: data.mdwf,
      "특수병원 한센": data.sphspLpr,
      치과의원: data.dtlhplDntcl,
    },
  ];
  const column = [
    { field: "종합병원" },
    { field: "일반병원" },
    { field: "한의원" },
    { field: "조산원" },
    { field: "특수병원 한센" },
    { field: "치과의원" },
  ];
  return (
    <div>
      <h2>{/* {data.year}년 {data.dvsd} 지역 병원 테이블 */}</h2>
      <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
        <AgGridReact rowData={rowDataset} columnDefs={column}></AgGridReact>
      </div>
    </div>
  );
}
