import React from "react";
import ImageContainer from "@/components/common/ImageContainer";
import Image from "next/image";
import Banner from "@/components/common/banner";

import { useState } from "react";
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
      <div className="relative lg:justify-center">
        <Banner
          title="Staff"
          description="Is mission has always been to organize the world's information and make it universally accessible and useful."
        />
        <div className="h-screen py-10">
          <div className="container flex justify-center">
            <div className="grid w-full grid-cols-2 gap-12 lg:grid-cols-4 ">
              {roleList.map(({ image, name, role }, index) => (
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
    </>
  );
}
