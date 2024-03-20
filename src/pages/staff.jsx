import React from "react";
import Banner from "@/components/layout/Banner";
import ImageContainer from "@/components/common/ImageContainer";
import Image from "next/image";
export default function StaffPage() {
  const roleList = [
    {
      image: "/image/staff-profile.png",
      name: "lee song woong",
      role: "CEO",
    },
    {
      image: "/image/staff-profile.png",
      name: "lee song woong",
      role: "CEO",
    },
    {
      image: "/image/staff-profile.png",
      name: "lee song woong",
      role: "CEO",
    },
    {
      image: "/image/staff-profile.png",
      name: "lee song woong",
      role: "CEO",
    },
    {
      image: "/image/staff-profile.png",
      name: "lee song woong",
      role: "CEO",
    },
  ];
  return (
    <>
      <div className="py-4 ">
        <div className=" relative lg:justify-center   ">
          <div className=" h-64 w-full relative ">
            <ImageContainer src="/background/bg.png" />
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="container text-white text-center">
                <h1 className="text-3xl lg:text-5xl font-semibold">
                  LEAD YOUR
                </h1>
                <br />
                <p>Building a better business with superior software</p>
              </div>
            </div>
          </div>
          <div className="py-10 h-screen">
            <div className="container flex justify-center">
              <div className="grid w-full grid-cols-2 gap-12 lg:grid-cols-4  ">
                {roleList.map(({ url, image, name, role }, index) => (
                  <div key={index} className="w-full">
                    <div className="flex  border border-gray relative justify-center overflow-hidden items-center aspect-square rounded-full bg-gray-300">
                      <ImageContainer src={image} />
                    </div>
                    <br />
                    <div>
                      <h2 className="flex justify-center text-xl font-medium uppercase">
                        {name}
                      </h2>
                      <p className="flex justify-center uppercase font-medium text-blue">
                        {role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
