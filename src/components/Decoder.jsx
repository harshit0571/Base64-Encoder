import React from "react";
import { comment } from "postcss";
import { useState } from "react";
import { decode } from "base64-arraybuffer";

function Decoder() {
  const [File, setFile] = useState(null);
  const [Base64, setBase64] = useState("");

  const Decode = async () => {
    const file = await decode(Base64);
    setFile(file);
    console.log(File);
  };
  return (
    <div className="flex-col justify-center items-center flex bg-slate-300 absolute h-[100%] w-[100%]">
      <div className="mt-4 flex items-center flex-col">
        <h1 className="lg:text-7xl sm:text-4xl md:text-5xl text-slate-700">
          FILE DECODER
        </h1>
        <h1 className="text-xl text-slate-500 font-semibold mt-10 mb-5 sm:m-2">
          enter base64 string
        </h1>
      </div>

      <div className=" flex items-center flex-col">
        <h1 className="text-xl text-slate-950 mt-10 mb-5">encoded text: </h1>
        <textarea
          rows={10}
          cols={30}
          className="mt-7 text-lg"
          onChange={(e) => {
            setBase64(e.target.value);
          }}
        ></textarea>
        <button
          className="bg-white rounded-lg shadow-md text-2xl sm:text-lg text-red-500 p-2 mt-10"
          onClick={Decode}
        >
          DOWNLOAD
        </button>
      </div>
    </div>
  );
}

export default Decoder;
