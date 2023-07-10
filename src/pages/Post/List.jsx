import React from "react";
import TextViewer from "../../components/Post/TextViewer";
import { Link } from "react-router-dom";

export default function List() {
  return (
    <div>
      <h2 className="text-6xl">게시글 목록</h2>
      <Link to="/post/write">글작성</Link>
      <TextViewer />
    </div>
  );
}
