import React, { forwardRef, useState } from "react";
import { Trash2, Upload } from "lucide-react";

export type InputFileProps = React.InputHTMLAttributes<HTMLInputElement>;

export const InputFile = forwardRef<HTMLInputElement, InputFileProps>(
  ({ ...props }, ref) => {
    const [fileName, setFileName] = useState<string | null>(null);
    const [isDragActive, setIsDragActive] = useState(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = event.target.files?.[0] || null;
      console.log("Selected file:", selectedFile);
      setFileName(selectedFile?.name || null);
    };

    const handleRemoveFile = () => {
      setFileName(null);
      if (ref && typeof ref === "object" && ref.current) {
        ref.current.value = "";
      }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      setIsDragActive(true);
    };

    const handleDragLeave = () => {
      setIsDragActive(false);
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      setIsDragActive(false);
      const droppedFile = event.dataTransfer.files?.[0] || null;

      if (droppedFile && ref && typeof ref === "object" && ref.current) {
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(droppedFile);
        ref.current.files = dataTransfer.files;
        setFileName(droppedFile.name);
      }
    };

    return (
      <div
        className={`flex flex-col items-center w-full p-4 border rounded-lg ${
          isDragActive
            ? "border-blue-500 bg-blue-100"
            : "border-dashed border-blue-700"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {!fileName ? (
          <label className="flex flex-col items-center gap-2 cursor-pointer">
            <Upload className="text-blue-700 w-4 h-4" />
            <span className="text-blue-700 text-sm">
              {isDragActive
                ? "Solte o arquivo aqui"
                : "Escolher ou arrastar arquivo"}
            </span>
            <input
              type="file"
              className="hidden"
              onChange={handleFileChange}
              ref={ref}
              {...props}
            />
          </label>
        ) : (
          <div className="w-full flex items-center justify-between bg-white p-2 rounded-lg shadow-md">
            <span className="text-blue-900 truncate">{fileName}</span>
            <button
              type="button"
              onClick={handleRemoveFile}
              className="flex items-center justify-center text-blue-900 rounded-full w-8 h-8 hover:bg-blue-100"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    );
  }
);

InputFile.displayName = "InputFile";
