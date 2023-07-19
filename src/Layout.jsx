import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="w-[90vw] m-auto flex h-10">
      <Link to="/" className="flex-1">
        Home
      </Link>
      <Link to="/post/list" className="flex-1">
        Post
      </Link>
      <Link to="/chart/list" className="flex-1">
        Chart
      </Link>
      <Link to="/grid" className="flex-1">
        Grid
      </Link>
      <Outlet />
    </div>
  );
}
