import React from "react";

interface IBlobProps {}

export default function Blob() {
  return (
    <div>
      <div className="absolute bottom-5 right-10 w-52 h-52 bg-lumiorange rounded-full mix-blend-multiply filter blur-xl opacity-0 md:opacity-70 animate-blob animation-delay-4000 "></div>
      <div className="absolute -bottom-20 right-40 w-52 h-52 bg-lumiblue rounded-full mix-blend-multiply filter blur-xl opacity-0 md:opacity-70 animate-blob animation-delay-4000 z-50"></div>
      <div className="flex flex-col sm:flex-row justify-center items-center w-full sm:w-3/4">
        <div className="relative w-full max-w-lg mr-8 sm:mr-0 z-50">
          <div className="absolute top-10 -left-80 w-72 h-72 bg-lumigray rounded-full mix-blend-multiply filter blur-xl opacity-0 md:opacity-70 animate-blob"></div>
          <div className="absolute -top-0 right-80 w-72 h-64 bg-lumiblue rounded-full mix-blend-multiply filter blur-xl opacity-0 md:opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -top-52 -left-72 w-72 h-72 bg-lumiorange rounded-full mix-blend-multiply filter blur-xl opacity-0 md:opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>
    </div>
  );
}
