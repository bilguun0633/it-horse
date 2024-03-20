import React from "react";
import ImageContainer from "@/components/common/ImageContainer";
import Image from "next/image";
export default function Announcement() {
  const test = [
    {
      name: "New Releases",
      subtitle: "Welcome to the era of zero!",
    },
    {
      name: "New Releases",
      subtitle: "Welcome to the era of zero!",
    },
    {
      name: "New Releases",
      subtitle: "Welcome to the era of zero!",
    },
    {
      name: "New Releases",
      subtitle: "Welcome to the era of zero!",
    },
    {
      name: "New Releases",
      subtitle: "Welcome to the era of zero!",
    },
  ];
  return (
    <>
      <div className="relative  lg:justify-center">
        <div className="relative w-full h-64 ">
          <ImageContainer src="/background/bg.png" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container text-center text-white">
              <h1 className="text-3xl uppercase lg:text-5xl">announcement</h1>
              <br />
              <p>
                Is mission has always been to organize the world's information
                and make it universally accessible and useful.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 ">
        <div className="bg-[#EDF3FE] h-screen ">
          <div className="]">
            <h1 className="p-4 text-2xl font-semibold uppercase">
              announcement
            </h1>
            <div className="grid grid-cols-3 gap-2 px-4">
              <button className="h-8 px-8 text-xs text-black bg-white border rounded hover:bg-blue hover:text-white border-brown ">
                All
              </button>
              <button className="h-8 px-8 text-xs text-black bg-white border rounded hover:bg-blue hover:text-white border-brown">
                Notice
              </button>
              <button className="h-8 text-xs text-black bg-white border rounded  hover:bg-blue hover:text-white border-brown">
                New releases
              </button>
            </div>
          </div>
          <div className="p-4 ">
            <div className="flex  items-center bg-white w-[332px] h-9 pl-4 overflow-hidden border-2 rounded border-brown hover:border-blue ">
              <i className="flex-shrink-0 ri-search-line text-brown"></i>
              <input
                type="text"
                placeholder="Search"
                className="flex-1 px-4 outline-none placeholder:text-base-200"
              />
              <button className="flex-shrink-0 h-full text-white bg-blue ">
                Search
              </button>
            </div>
          </div>
          {test.map(({ name, subtitle }, index) => (
            <div className="px-4 py-2">
              <div className="h-32 overflow-hidden bg-white border-2 rounded-lg  border-brown hover:border-blue">
                <div className="p-4">
                  <div className="bg-[#EDF3FE] rounded w-32 h-6 ">
                    <div
                      key={index}
                      className="flex justify-center text-sm  text-blue"
                    >
                      {name}
                    </div>
                  </div>
                  <h1 className="text-sm font-semibold">{subtitle}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="col-span-2">
          <h1>text</h1>
        </div>
      </div>
    </>
  );
}
