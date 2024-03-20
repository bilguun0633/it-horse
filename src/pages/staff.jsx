import React from "react";
import ImageContainer from "@/components/common/ImageContainer";
import Image from "next/image";
import Banner from "@/components/common/banner";
import { useState } from "react";
import MemberPopup from "@/components/common/MemberPopup";

export default function StaffPage() {
  const [currentMember, setCurrentMember] = useState(null);

  const roleList = [
    {
      image: "/image/staff-profile.png",
      name: "lee song woong 1",
      role: "CEO",
      position: "Head of corporate research institute",
      proffesion: "Industrial engineer",
      education: "Office Information Equipment Application Technician Level 2",
      phone: "010-4588-2794 ",
      email: "incom2794@naver.com",
    },
    {
      image: "/image/staff-profile.png",
      name: "lee song woong 2",
      role: "CEO",
      position: "Head of corporate research institute",
      proffesion: "Industrial engineer",
      education: "Office Information Equipment Application Technician Level 2",
      phone: "010-4588-2794 ",
      email: "incom2794@naver.com",
    },
    {
      image: "/image/staff-profile.png",
      name: "lee song woong 3",
      role: "CEO",
      position: "Head of corporate research institute",
      proffesion: "Industrial engineer",
      education: "Office Information Equipment Application Technician Level 2",
      phone: "010-4588-2794 ",
      email: "incom2794@naver.com",
    },
    {
      image: "/image/staff-profile.png",
      name: "lee song woong 4",
      role: "CEO",
      position: "Head of corporate research institute",
      proffesion: "Industrial engineer",
      education: "Office Information Equipment Application Technician Level 2",
      phone: "010-4588-2794 ",
      email: "incom2794@naver.com",
    },
  ];

  const selectedMember =
    currentMember !== null ? roleList[currentMember] : null;

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
                  <div
                    className="relative z-0 flex items-center justify-center overflow-hidden bg-gray-300 border rounded-full cursor-pointer border-gray aspect-square"
                    onClick={() => setCurrentMember(index)}
                  >
                    <ImageContainer src={image} />
                    <div className="absolute inset-0 z-10 flex items-center justify-center transition opacity-0 backdrop-brightness-50 hover:opacity-100">
                      <p className="font-light text-white uppercase">
                        See more
                      </p>
                    </div>
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
      <MemberPopup
        member={selectedMember}
        onClose={() => setCurrentMember(null)}
        onClickPrev={() => {
          if (currentMember > 0) {
            setCurrentMember(currentMember - 1);
          }
        }}
        onClickNext={() => {
          if (currentMember < roleList.length - 1) {
            setCurrentMember(currentMember + 1);
          }
        }}
      />
    </>
  );
}
