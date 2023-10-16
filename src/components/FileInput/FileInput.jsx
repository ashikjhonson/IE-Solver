import React, { useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const FileInput = () => {
  const [file, setFile] = useState(null);

  const onFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  return (
    <div>
      <input type="file" onChange={onFileChange} />
      {file && (
        <div style={{ height: "500px", marginTop: "20px" }}>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <Viewer fileUrl={URL.createObjectURL(file)} />
          </Worker>
        </div>
      )}
    </div>
  );
};

export default FileInput;
