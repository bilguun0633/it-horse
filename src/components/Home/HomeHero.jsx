import React from "react";
import useTranslation from "next-translate/useTranslation";
import { useState, useRef } from "react";
import ImageContainer from "../common/ImageContainer";
export default function HomeHero() {
  const { t } = useTranslation("main");
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  function togglePlay() {
    if (videoRef.current.paused) {
      setIsPlaying(true);
      videoRef.current.play();
    } else {
      setIsPlaying(false);
      videoRef.current.pause();
    }
  }
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
            {t("homeHero.lead_your")} <br /> {t("homeHero.future")}
          </h1>
          <p className="text-lg text-white drop-shadow-lg">
            Building a better business with superior software
            <br /> CUSTOM SOFTWARE DEVELOPMENT COMPANY
          </p>
          <div className="absolute flex gap-3 right-20  bottom-20">
            <div
              className="flex items-center justify-center w-12 h-12 border border-white rounded-full cursor-pointer transitioned hover:bg-white/20 hover:scale-105 active:scale-100"
              onClick={() => setIsMuted((prev) => !prev)}
            >
              <i
                className={`ri-${
                  isMuted ? "volume-mute" : "volume-up"
                }-line text-white text-xl`}
              ></i>
            </div>
            <div
              className="flex items-center justify-center w-12 h-12 border border-white rounded-full cursor-pointer transitioned hover:bg-white/20 hover:scale-105 active:scale-100"
              onClick={() => togglePlay()}
            >
              <i
                className={`ri-${
                  isPlaying ? "pause" : "play"
                }-line text-white text-xl`}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
