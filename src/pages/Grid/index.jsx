import React from "react";
import { Outlet } from "react-router-dom";
import GridLayout from "./GridLayout";

export default function index() {
  return (
    <div>
      <h2>Grid 메인</h2>
      <GridLayout />
      <Outlet />
    </div>
  );
}
