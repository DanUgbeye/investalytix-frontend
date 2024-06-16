import { FiPaperclip } from "react-icons/fi";
import { useRef, useEffect, useState, ChangeEvent } from "react";
import imageCompression from "browser-image-compression";
import { toast } from "react-toastify";
import Spinner from "./spinner";

export default function File({
  label,
  subLabel,
  id,
  onChange,
  required = false,
  file,
  capture = true,
  block = false,
  compress = true,
  maxSize = 10 * 1024 * 1024,
}: {
  label: string;
  subLabel?: string;
  id: string;
  onChange: (item: File) => void;
  required?: boolean;
  file?: File;
  capture?: boolean;
  block?: boolean;
  compress?: boolean;
  maxSize?: number;
}) {
  const [preview, setPreview] = useState<string | null>();
  const [compressing, setCompressing] = useState(false);

  const toggleCompressing = () => setCompressing((s) => !s);

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      toast.error(
        `maximum file size of ${(maxSize / (1024 * 1024)).toPrecision(
          2
        )}mb exceeded. You uploaded ${(file.size / (1024 * 1024)).toPrecision(
          2
        )}mb`
      );

      e.target.value = "";

      return;
    }

    let tempFile = file;

    if (compress && tempFile.size > maxSize) {
      toggleCompressing();
      tempFile = await imageCompression(tempFile, {
        maxSizeMB: 1,
        useWebWorker: true,
      });
    }

    onChange(tempFile);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(tempFile);

    compress && tempFile.size > maxSize && toggleCompressing();
  };

  useEffect(() => {
    if (!file) setPreview(null);
  }, [file]);
  
  return (
    <>
      <div>
        {/* <p className="block capitalize font-semibold">
          {label} {required && <span className="text-red-600 pl-1">*</span>}
        </p>
        <p className="mb-1">{subLabel}</p> */}

        <label
          htmlFor={id}
          className={`relative cursor-pointer overflow-hidden rounded-lg flex gap-3 text-gray-400 items-center justify-center border-gray-700 ${
            file
              ? "w-full max-w-[320px] h-80"
              : "w-full h-40 border border-dashed"
          }`}
        >
          {file && (
            <p className="z-10 absolute top-5 right-5 text-white text-xs bg-black/20 rounded-full py-1 px-2 backdrop-blur-md">
              {(file.size / (1024 * 1024)).toPrecision(2)} mb
            </p>
          )}
          <input
            type="file"
            name={id + "-file"}
            id={id}
            accept="image/*"
            capture={capture}
            className="hidden"
            onChange={handleFileChange}
          />
          {preview && (
            <img
              src={preview}
              className="w-full h-full object-cover absolute inset-0 hover:scale-125"
            />
          )}
          {compressing ? (
            <div className="flex flex-col items-center">
              <Spinner />
              <p>Compressing file</p>
            </div>
          ) : (
            <>
              <p>Attach file</p>
              <FiPaperclip />
            </>
          )}
        </label>
      </div>
    </>
  );
}