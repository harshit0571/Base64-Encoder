import React from "react";
import { comment } from "postcss";
import { useState } from "react";

function Encoder() {
  const [File, setFile] = useState(null);
  const [Base64File, setBase64File] = useState("");
  const Base64 = () => {
    const reader = new FileReader();
    const url = reader.readAsDataURL(File);
    reader.onload = function () {
      setBase64File(reader.result);
      const y = reader.result;

      setBase64File(y);
    };
  };
  return (
    <div className="flex-col justify-center items-center flex bg-slate-300 absolute h-[100%] w-[100%]">
      <div className="mt-4 flex items-center flex-col">
        <h1 className="lg:text-7xl sm:text-4xl md:text-5xl text-slate-700">
          FILE ENCODER
        </h1>
        <h1 className="text-xl text-slate-500 font-semibold mt-10 mb-5 sm:m-2">
          enter file
        </h1>
      </div>

      <div className=" flex items-center flex-col">
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button
          className="bg-red-600 rounded-lg shadow-md text-2xl sm:text-lg text-white p-2 mt-10 sm:m-2"
          onClick={Base64}
        >
          ENCODE
        </button>
        <h1 className="text-xl text-slate-950 mt-10 mb-5">encoded text: </h1>
        <textarea
          rows={10}
          cols={30}
          readOnly
          value={Base64File}
          className="mt-7 text-lg "
        ></textarea>
        <button
          className="bg-white rounded-lg shadow-md text-2xl sm:text-lg text-red-500 p-2 mt-10"
          onClick={() => {
            navigator.clipboard.writeText(Base64File);
            alert("copied");
          }}
        >
          COPY
        </button>
      </div>
    </div>
  );
}

export default Encoder;
