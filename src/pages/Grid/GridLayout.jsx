import React from "react";
import { Link } from "react-router-dom";

export default function GridLayout() {
  return (
    <div>
      <Link to="./default">defaults</Link>
      <Link to="./reactdatagrid">reactdatagrid</Link>
    </div>
  );
}
