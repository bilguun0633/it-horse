import React from "react";
import ImageContainer from "@/components/common/ImageContainer";
import Image from "next/image";
export default function SoftwareIo() {
  return (
    <>
      <div className="relative  lg:justify-center">
        <div className="relative w-full h-64 ">
          <ImageContainer src="/background/bg.png" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container text-center text-white">
              <h1 className="text-3xl lg:text-5xl">SOFTWARE-IO</h1>
              <br />
              <p>Building a better business with superior software</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
