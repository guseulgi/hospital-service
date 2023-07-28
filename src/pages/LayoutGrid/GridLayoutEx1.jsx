import React from "react";
import GridLayout from "react-grid-layout";

export default function GridLayoutEx1() {
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 4, static: true },
    { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 3, y: 0, w: 1, h: 2 },
  ];

  const boxStyle = {
    backgroundColor: "black",
    color: "white",
  };

  const handleStyle = {
    backgroundColor: "yellow",
    width: "100%",
    height: "20px",
  };

  return (
    <GridLayout className="layout" layout={layout} cols={4} rowHeight={30} width={800}>
      <div key="a" style={boxStyle}></div>
      <div key="b" style={boxStyle}></div>
      <div key="c" style={boxStyle}></div>
    </GridLayout>
  );
}
