import React from "react";
import Banner from "@/components/layout/Banner";
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
      <div className=" relative lg:justify-center    ">
        <div className=" h-64 w-full relative ">
          <ImageContainer src="/background/bg.png" />
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="container text-white text-center">
              <h1 className="text-3xl lg:text-5xl uppercase">announcement</h1>
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
            <h1 className="uppercase text-2xl font-semibold p-4">
              announcement
            </h1>
            <div className="grid grid-cols-3 gap-2 px-4">
              <button className="hover:bg-blue border hover:text-white h-8  border-brown text-xs  bg-white rounded text-black  px-8  ">
                All
              </button>
              <button className="hover:bg-blue border hover:text-white h-8  border-brown text-xs bg-white rounded text-black  px-8">
                Notice
              </button>
              <button className=" hover:bg-blue border hover:text-white h-8 border-brown text-xs bg-white rounded text-black  ">
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
              <button className="flex-shrink-0 h-full  text-white  bg-blue ">
                Search
              </button>
            </div>
          </div>
          {test.map(({ name, subtitle }, index) => (
            <div className="px-4 py-2">
              <div className=" bg-white  h-32  overflow-hidden border-2 rounded-lg border-brown hover:border-blue ">
                <div className="p-4">
                  <div className="bg-[#EDF3FE] rounded w-32 h-6 ">
                    <div
                      key={index}
                      className=" text-blue text-sm flex justify-center"
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
