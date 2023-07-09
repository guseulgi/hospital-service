import React from "react";
import TextViewer from "../../components/Post/TextViewer";
import { Link } from "react-router-dom";

export default function PostList() {
  return (
    <div>
      <Link to="/post/write">글작성</Link>
      <TextViewer />
    </div>
  );
}
