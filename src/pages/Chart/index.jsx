import React from "react";
import { Outlet } from "react-router-dom";
import Layout from "./Layout";

export default function index() {
  return (
    <div>
      <h2>Chart 메인</h2>
      <Layout />
      <Outlet />
    </div>
  );
}
