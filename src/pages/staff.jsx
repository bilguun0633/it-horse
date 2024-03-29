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
      name: "Seongwoong Lee",
      role: "CEO",
      position: "Head of corporate research institute",
      proffesion: "Industrial engineer",
      education: "Office Information Equipment Application Technician Level 2",
      phone: "010-4588-2794 ",
      email: "incom2794@naver.com",
    },
    {
      image: "/image/staff-profile.png",
      name: "Jinmoon Lee",
      role: "Director",
      position: "Dedicated agent",
      proffesion: " Department of information and Communication Engineering",
      education: "Widuk University",
      phone: "051-331-0110 ",
      email: "incom8280@naver.com",
    },
    {
      image: "/image/staff-profile.png",
      name: "Da-ye Kang",
      role: "Design Department head",
      position: "Dedicated agent",
      proffesion: "Clothing (Ph.D.)",
      education: "Silla Graduate School",

      phone: "051-331-0110 ",
      email: "incom2794@naver.com",
    },
    {
      image: "/image/staff-profile.png",
      name: "San-gnam Lim ",
      role: "Director",
      position: "Research assistant",
      proffesion: "Department of Chemical Engineering",
      education: "Dongeui Technical University",
      phone: "010-3054-1144",
      email: "incom1144@naver.com",
    },
    {
      image: "/image/koo-beom.png",
      name: " Koo Beom-geun",
      role: "Deputy",
      position: "Dedicted agent",
      proffesion: "Department of Genetic Engineering",
      education: "Dong-A University",
      phone: "010-3524-4281",
      email: "incom4281@naver.com",
    },
    {
      image: "/image/noh-joo-won.png",
      name: " Noh Joo-won",
      role: "Researcher",
      position: "Research assistant",
      proffesion: "Department of Visual design",
      education: "Busan Gyeongsang National University",
      phone: "010-9689-9395",
      email: "incom9395@naver.com",
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
        <div className=" py-10">
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
