import React from "react";
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
        <div className="relative lg:justify-center">
          <div className="relative w-full h-64 ">
            <ImageContainer src="/background/bg.png" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="container text-center text-white">
                <h1 className="text-3xl font-semibold lg:text-5xl">
                  LEAD YOUR
                </h1>
                <br />
                <p>Building a better business with superior software</p>
              </div>
            </div>
          </div>
          <div className="h-screen py-10">
            <div className="container flex justify-center">
              <div className="grid w-full grid-cols-2 gap-12 lg:grid-cols-4 ">
                {roleList.map(({ url, image, name, role }, index) => (
                  <div key={index} className="w-full">
                    <div className="relative flex items-center justify-center overflow-hidden bg-gray-300 border rounded-full border-gray aspect-square">
                      <ImageContainer src={image} />
                    </div>
                    <br />
                    <div>
                      <h2 className="flex justify-center text-xl font-medium uppercase">
                        {name}
                      </h2>
                      <p className="flex justify-center font-medium uppercase text-blue">
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
