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
      <div className="top-0   z-50 h-fit   p-6   ">
        <div className="container  hideen lg:flex  items-center justify-between border-b-2">
          <div className="flex items-center">
            <h2>IT HORSE</h2>
          </div>

          <div className="flex gap-6 justify-end 2xl:justify-content-end ">
            <Image alt="" src="/image/hover_btn.png" width={48} height={48} />
            <Image alt="" src="/image/button.png" width={50} height={50} />
            <Image alt="" src="/image/button1.png" width={48} height={48} />
          </div>
        </div>
        <br />

        <div className="container lg:flex justify-between">
          <div className="hideen lg:flex items-center   2xl:gap-4">
            {list.map(({ name }, index) => (
              <div
                key={index}
                className="flex items-center h-24 text-sm xl:text-base  text-base-600  "
              >
                {name}
              </div>
            ))}
          </div>
          <div className="flex 2xl:justify-content-end items-center">
            <p> Copyright © IT Horse | Design by IO | Powered by JINE </p>
          </div>
        </div>
      </div>
    </div>
  );
}
