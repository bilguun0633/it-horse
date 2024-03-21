import React from "react";
import { useState, useRef } from "react";
import ImageContainer from "../common/ImageContainer";
export default function HomeHero() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  return (
    <div className="relative z-0 w-full h-screen">
      {/* <ImageContainer src="/image/background.png" alt="" className="-z-10" /> */}
      <video
        autoPlay
        loop
        ref={videoRef}
        muted={isMuted}
        className="absolute inset-0 object-cover w-full h-full brightness-75"
      >
        <source
          src="/background/cover.mp4"
          className="object-cover "
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="container flex items-end w-full h-full py-4 lg:py-24">
        <div className="text-center lg:text-left">
          <h1 className="mb-4 text-6xl font-bold text-white uppercase drop-shadow-lg lg:mb-8">
            lead your <br /> future
          </h1>
          <p className="text-lg text-white drop-shadow-lg">
            Building a better business with superior software
            <br /> CUSTOM SOFTWARE DEVELOPMENT COMPANY
          </p>
        </div>
      </div>
    </div>
  );
}
