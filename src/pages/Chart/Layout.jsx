import React from "react";
import { Link } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Link to="./list/pie">Pie 차트</Link>
      <Link to="./list/line">Line 차트</Link>
      <Link to="./list/line2">Line 차트2</Link>
    </div>
  );
}
