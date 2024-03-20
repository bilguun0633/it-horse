import React from "react";
import ImageContainer from "@/components/common/ImageContainer";
import Image from "next/image";
export default function PricePage() {
  return (
    <>
      <div className="relative  lg:justify-center">
        <div className="relative w-full h-64 ">
          <ImageContainer src="/background/bg.png" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container text-center text-white">
              <h1 className="text-3xl lg:text-5xl">PRICE</h1>
              <br />
              <p>
                Is mission has always been to organize the world's information
                and make it universally accessible and useful.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray">
          <div></div>
        </div>
      </div>
    </>
  );
}
