import React from "react";
import Image from "next/image";
import ImageContainer from "../common/ImageContainer";
export default function HomeHero() {
  return (
    <div className=" relative lg:justify-center">
      <div className="  lg:mr-[34px]  xl:mr-[82px] w-full h-[64] ">
        <div className="relative w-full h-[18] overflow-hidden  ">
          <ImageContainer src="/image/background.png" alt="" />

          <div className="container min-h-[calc(100svh-64px)] text-white relative lg:min-h-[calc(100svh-96px)] flex flex-col justify-center text-center lg:text-left  gap-2 lg:gap-4  ">
            <h1 className="text-3xl font-semibold lg:text-5xl">
              LEAD YOUR
              <br />
              FUTURE
            </h1>
            <p className="text-white lg:text-lg lg:max-w-[25%] lg:leading-tight">
              Building a better business with superior software <br /> CUSTOM
              SOFTWARE DEVELOPMENT COMPANY
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
