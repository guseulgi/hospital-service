import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

export default function HospitalInfoGrid({ data }) {
  const rowDataset = data.map((el) => {
    return {
      년도: el.year,
      위치: el.dvsd,
      종합병원: el.hsptlGrhsp,
      일반병원: el.hsptlGnrhsp,
      한의원: el.ormclOrmdc,
      조산원: el.mdwf,
      "특수병원 한센": el.sphspLpr,
      치과의원: el.dtlhplDntcl,
      치과병원: el.dtlhplDtlhp,
      의원: el.hsptlClhsp,
      요양병원: el.hsptlNrhsp,
      부속의원: el.afcln,
      한방병원: el.ormclOrmhs,
      "특수병원 결핵": el.sphspTbcs,
    };
  });
  // const rowDataset = [
  //   {
  //     년도: data.year,
  //     위치: data.dvsd,
  //     종합병원: data.hsptlGrhsp,
  //     일반병원: data.hsptlGnrhsp,
  //     한의원: data.ormclOrmdc,
  //     조산원: data.mdwf,
  //     "특수병원 한센": data.sphspLpr,
  //     치과의원: data.dtlhplDntcl,
  //     치과병원: data.dtlhplDtlhp,
  //     의원: data.hsptlClhsp,
  //     요양병원: data.hsptlNrhsp,
  //     부속의원: data.afcln,
  //     한방병원: data.ormclOrmhs,
  //     "특수병원 결핵": data.sphspTbcs,
  //   },
  // ];
  const column = [
    { field: "년도", width: 100 },
    { field: "위치", width: 100 },
    { field: "종합병원", width: 100 },
    { field: "일반병원", width: 100 },
    { field: "한의원", width: 100 },
    { field: "조산원", width: 100 },
    { field: "특수병원 한센", width: 100 },
    { field: "치과의원", width: 100 },
    { field: "치과병원", width: 100 },
    { field: "의원", width: 100 },
    { field: "요양병원", width: 100 },
    { field: "부속의원", width: 100 },
    { field: "한방병원", width: 100 },
    { field: "특수병원 결핵", width: 100 },
  ];
  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact rowData={rowDataset} columnDefs={column}></AgGridReact>
    </div>
  );
}
