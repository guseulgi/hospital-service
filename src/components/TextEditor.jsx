import React, { useRef } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

export default function TextEditor() {
  const editRef = useRef();
  function submitPost() {
    console.log(editRef.current?.getInstance().getHTML());
    editRef.current?.getInstance().reset(""); // 텍스트 에디터를 리셋시킴
    editRef.current.getInstance().hide();
  }
  return (
    <>
      <Editor
        ref={editRef}
        placeholder="내용을 입력해주세요."
        previewStyle="vertical"
        height="400px"
        initialEditType="wysiwyg"
        autofocus={true}
        toolbarItems={[
          // 툴바 옵션 설정
          ["heading", "bold", "italic", "strike"],
          ["hr", "quote"],
          ["ul", "ol", "task", "indent", "outdent"],
          ["table", "image", "link"],
          ["code", "codeblock"],
        ]}
        // useCommandShortcut={false} // 키보드 입력 컨트롤 방지
      />
      <button onClick={submitPost}>등록하기</button>
    </>
  );
}
