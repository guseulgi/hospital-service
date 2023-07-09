import React from "react";
import TextEditor from "../../components/Post/TextEditor";
import { useParams } from "react-router-dom";

export default function Write() {
  // const key = useParams();
  // console.log("글번호 : " + key.id);

  return (
    <div>
      <h2>글쓰기</h2>
      <TextEditor />
    </div>
  );
}
