import React from "react";
import { Link } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Link to="./pie">Pie 차트</Link>
      <Link to="./line">Line 차트</Link>
    </div>
  );
}
