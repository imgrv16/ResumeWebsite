import React, { useState } from "react";
import "./LiveEditorLayout.css";

const LiveEditorLayout = ({ title, defaultCode }) => {
  const [code, setCode] = useState(defaultCode);

  return (
    <div className="editor-layout">
      {/* <h3 className="mb-4">{title}</h3>
      <div className="editor-preview-wrapper">
        <textarea
          className="code-editor"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <iframe
          className="code-preview"
          title="Preview"
          srcDoc={`<html><body>${code}</body></html>`}
          sandbox="allow-scripts"
        />
      </div> */}
    </div>
  );
};

export default LiveEditorLayout;
