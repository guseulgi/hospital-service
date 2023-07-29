import React, { useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

export default function HospitalInfoGrid({ data }) {
  const agGridReactRef = useRef(null);
  const renderer = (params) => {
    return (
      <span>
        <img src="/code.png" height="30px" />
        {params.value}
      </span>
    );
  };

  const rowDataset = data.map((el) => {
    return {
      // 년도: el.year,
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
  const column = [
    // { field: "년도" },
    { field: "위치", checkboxSelection: true, pinned: "left" },
    { field: "종합병원" },
    { field: "일반병원" },
    { field: "한의원" },
    { field: "조산원" },
    { field: "특수병원 한센" },
    { field: "치과의원" },
    { field: "치과병원" },
    { field: "의원" },
    { field: "요양병원" },
    { field: "부속의원" },
    { field: "한방병원" },
    { field: "특수병원 결핵" },
  ];

  const defaultColDef = React.useMemo(() => {
    return {
      width: 150,
      sortable: true,
      filter: true,
    };
  }, []);

  const clickTable = () => {
    if (agGridReactRef.current) {
      const selectedNodes = agGridReactRef.current.api.getSelectedNodes();
      const selectedData = selectedNodes.map((node) => node.data);
      console.log(selectedData);
    }
  };

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact
        ref={agGridReactRef}
        rowData={rowDataset}
        columnDefs={column}
        defaultColDef={defaultColDef}
        rowSelection="multiple"
        animateRows="ture"
      ></AgGridReact>
      <div>
        <button onClick={clickTable}>클릭</button>
      </div>
    </div>
  );
}
