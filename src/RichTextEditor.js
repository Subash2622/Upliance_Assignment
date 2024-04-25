import React, { useState } from "react";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const RichTextEditor = () => {
  // State for the editor
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  // Function to handle editor change
  const handleEditorChange = (state) => {
    setEditorState(state);
  };

  // Function to handle saving editor content
  const handleSaveContent = () => {
    const contentState = editorState.getCurrentContent();
    const contentRaw = convertToRaw(contentState);
    localStorage.setItem("editorContent", JSON.stringify(contentRaw));
    alert("Editor content saved successfully!");
  };

  // Function to handle loading editor content
  const handleLoadContent = () => {
    const savedContent = localStorage.getItem("editorContent");
    if (savedContent) {
      const contentRaw = JSON.parse(savedContent);
      const contentState = convertFromRaw(contentRaw);
      setEditorState(EditorState.createWithContent(contentState));
    }
  };

  return (
    <div>
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        toolbar={{
          options: ["inline", "blockType", "list", "textAlign", "link"],
        }}
      />
      <div>
        <button onClick={handleSaveContent}>Save Content</button>
        <button onClick={handleLoadContent}>Load Content</button>
      </div>
    </div>
  );
};

export default RichTextEditor;
