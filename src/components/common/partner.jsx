import React from "react";
import ImageContainer from "./ImageContainer";

export default function Partner() {
  return (
    <div className="relative aspect-video">
      <ImageContainer src="/software/partnerbg.png" />
      <div className="absolute inset-0 flex justify-center items-center">
        <div>
          <div className="w-[632px] text-white text-center">
            <h1 className="text-3xl  font-semibold uppercase">
              become a ithorse partner
            </h1>
            <br />
            <p>
              Is mission has always been to organize the world's information and
              make it universally accessible and useful.
            </p>
          </div>
          <br />
          <div className="bg-white  rounded-lg ">
            <div className="py-5 px-20">
              <label className="text-lg mb-4 font-semibold ">First name</label>
              <div className="flex items-center  w-[100%] h-12   overflow-hidden border rounded-lg border-brown">
                <input
                  type="text"
                  className="flex-1 px-4 outline-none placeholder:text-base-200"
                  placeholder="Scarlett"
                />
              </div>
            </div>
            <div className="py-5 px-20">
              <label className="text-lg mb-4 font-semibold">First name</label>
              <div className="flex items-center w-[100%] h-12  overflow-hidden border rounded-lg border-brown">
                <input
                  type="text"
                  className="flex-1 px-4 outline-none placeholder:text-base-200"
                  placeholder="Johansson"
                />
              </div>
            </div>
            <div className="py-5 px-20">
              <label className="text-lg mb-4 font-semibold">Email</label>
              <div className="flex items-center w-[100%] h-12 overflow-hidden border rounded-lg border-brown">
                <input
                  type="text"
                  className="flex-1 px-4 outline-none placeholder:text-base-200"
                  placeholder="blackwidow@ithorse.com"
                />
              </div>
            </div>
            <div className="justify-content-center">
              <div className="py-5 px-20">
                <label className="text-lg mb-4 font-semibold">Message</label>
                <div className=" w-[100%] h-32  overflow-hidden border rounded-lg border-brown">
                  <input
                    type="text"
                    className="flex justify-center px-4 outline-none placeholder:text-base-200"
                    placeholder="How can we help you?"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center py-5">
              <button className="bg-blue rounded text-white py-2 px-14">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
