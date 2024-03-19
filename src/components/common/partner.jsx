import React from "react";
import ImageContainer from "./ImageContainer";

export default function Partner() {
  return (
    <div className="relative w-full h-screen">
      <ImageContainer src="/software/partnerbg.png" />
      <div className="absolute inset-0 flex justify-center items-center">
        <div>
          <div className="container text-white text-center">
            <h1 className="text-3xl lg:text-5xl uppercase">
              become a ithorse partner
            </h1>
            <br />
            <p>
              Is mission has always been to organize the world's information and
              make it universally accessible and useful.
            </p>
          </div>
          <br />
          <div className="bg-white  rounded ">
            <div className="p-5">
              <label htmlFor="">First name</label>
              <div className="flex items-center  w-[70%] h-12 pl-4 overflow-hidden border rounded border-brown">
                <input
                  type="text"
                  className="flex-1 px-4 outline-none placeholder:text-base-200"
                  placeholder="Scarlett"
                />
              </div>
            </div>
            <div className="p-5">
              <label htmlFor="">First name</label>
              <div className="flex items-center w-[70%] h-12 pl-4 overflow-hidden border rounded border-brown">
                <input
                  type="text"
                  className="flex-1 px-4 outline-none placeholder:text-base-200"
                  placeholder="Scarlett"
                />
              </div>
            </div>
            <div className="p-5">
              <label htmlFor="">First name</label>
              <div className="flex items-center w-[70%] h-12 pl-4 overflow-hidden border rounded border-brown">
                <input
                  type="text"
                  className="flex-1 px-4 outline-none placeholder:text-base-200"
                  placeholder="Scarlett"
                />
              </div>
            </div>
            <div className="p-5">
              <label htmlFor="">First name</label>
              <div className="flex items-center w-[70%] h-12 pl-4 overflow-hidden border rounded border-brown">
                <input
                  type="text"
                  className="flex-1 px-4 outline-none placeholder:text-base-200"
                  placeholder="Scarlett"
                />
              </div>
            </div>
            <button className="bg-blue rounded text-white  px-4">submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
