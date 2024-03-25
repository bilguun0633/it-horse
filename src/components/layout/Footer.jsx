import React from "react";
import Image from "next/image";

export default function Footer() {
  const list = [
    {
      name: "Company",
      url: "",
    },
    {
      name: "Portfolio",
      url: "",
    },
    {
      name: "Staff",
      url: "",
    },
    {
      name: "Customer Service",
      url: "",
    },
    {
      name: "About US",
      url: "",
    },
  ];
  return (
    <div className="bg-gray  ">
      <div className="top-0   z-50 h-fit   p-6  md:p-4 ">
        <div className="container   lg:flex  items-center justify-between border-b border-brown md:p-2 py-8">
          <div className="flex items-center  text-3xl md:justify-center py-4 justify-center font-medium sm:py-2 md:py-2">
            <Image
              src="/icons/it-horse-blue.png"
              alt="logo"
              width={40}
              height={40}
              // layout="fixed"
            />
            <h2 className="px-4">IT HORSE</h2>
          </div>

          <div className="flex items-center gap-6 justify-center 2xl:justify-content-end md:justify-center sm:justify-center ">
            <Image alt="" src="/image/hover_btn.png" width={48} height={48} />
            <Image alt="" src="/icons/hover_btn.png" width={50} height={50} />
            <Image alt="" src="/icons/ig.png" width={48} height={48} />
          </div>
        </div>
        <br />

        <div className="container xl:flex lg:flex justify-between  ">
          <div className=" flex items-center md:justify-center justify-between gap-4">
            {list.map(({ name }, index) => (
              <div
                key={index}
                className="flex items-center h-24 text  text-[#586772]  "
              >
                {name}
              </div>
            ))}
          </div>
          <div className="flex 2xl:justify-content-end text-[#586772] lg:justify-content-end items-center md:justify-center sm:justify-center">
            <p> Copyright © IT Horse | Design by IO  | Powered by JINE</p>
          </div>
        </div>
      </div>
    </div>
  );
}
