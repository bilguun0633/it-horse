import React from "react";
import ImageContainer from "./ImageContainer";

export default function Partner() {
  return (
    <div className="relative z-0 ">
      <ImageContainer src="/software/partnerbg.png" className="-z-10" />
      <div className="flex items-center justify-center py-4 lg:py-24 ">
        <div>
          <div className="w-[632px] text-white text-center">
            <h1 className="text-3xl font-semibold uppercase">
              become a ithorse partner
            </h1>
            <br />
            <p>
              Is mission has always been to organize the world&apos;s
              information and make it universally accessible and useful.
            </p>
          </div>
          <br />
          <div className="bg-white rounded-lg ">
            <div className="px-20 py-5">
              <label className="mb-4 text-lg font-semibold  ">First name</label>
              <div className="flex mt-2 items-center  w-[100%] h-12   overflow-hidden border rounded-lg border-brown">
                <input
                  type="text"
                  className="flex-1 px-4 outline-none placeholder:text-base-200"
                  placeholder="Scarlett"
                />
              </div>
            </div>
            <div className="px-20 py-5">
              <label className="mb-4 text-lg font-semibold">Last name</label>
              <div className="flex mt-2 items-center w-[100%] h-12  overflow-hidden border rounded-lg border-brown">
                <input
                  type="text"
                  className="flex-1 px-4 outline-none placeholder:text-base-200"
                  placeholder="Johansson"
                />
              </div>
            </div>
            <div className="px-20 py-5">
              <label className="mb-4 text-lg font-semibold">Email</label>
              <div className="flex mt-2 items-center w-[100%] h-12 overflow-hidden border rounded-lg border-brown">
                <input
                  type="text"
                  className="flex-1 px-4 outline-none placeholder:text-base-200"
                  placeholder="blackwidow@ithorse.com"
                />
              </div>
            </div>
            <div className="justify-content-center">
              <div className="px-20 py-5">
                <label className="mb-4 text-lg font-semibold">Message</label>
                <div className=" mt-2 w-[100%]  h-fit  overflow-hidden border rounded-lg border-brown">
                  <textarea
                    type="text"
                    className="flex p-2 justify-center w-full min-h-[24px] h-32 px-4 outline-none placeholder:text-base-200"
                    placeholder="How can we help you?"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center py-5">
              <button className="py-2 text-white rounded bg-blue px-14">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
