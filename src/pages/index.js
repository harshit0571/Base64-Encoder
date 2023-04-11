import Decoder from "@/components/Decoder";
import Encoder from "@/components/Encoder";
import { comment } from "postcss";
import { useState } from "react";

export default function Home() {
  const [Choice, setChoice] = useState(1);
  const Button = () => {
    return (
      <div className="flex items-center absolute top-0 left-0 z-10">
        <button
          className="p-5 rounded bg-blue-100 m-2"
          onClick={() => {
            setChoice(1);
          }}
        >
          Encoder
        </button>
        <button
          className="p-5 rounded bg-blue-100 m-2"
          onClick={() => {
            setChoice(0);
          }}
        >
          Decoder
        </button>
      </div>
    );
  };
  return (
    <>
      <Button />
      <div>{Choice ? <Encoder /> : <Decoder />}</div>
    </>
  );
}
