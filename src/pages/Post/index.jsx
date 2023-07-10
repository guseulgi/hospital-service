import React from "react";
import { Outlet } from "react-router-dom";

export default function index() {
  return (
    <div>
      <h2>Post 메인</h2>
      <Outlet />
    </div>
  );
}
