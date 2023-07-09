import React from "react";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";

export default function TextViewer() {
  const tempHTML = "<p>임시 텍스트 파일</p>";
  return (
    <div>
      {/* <Viewer initialValue={markdown} /> */}
      <Viewer initialValue={tempHTML} />
    </div>
  );
}
