import React from "react";
import { Link } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/post/list">Post</Link>
    </div>
  );
}
