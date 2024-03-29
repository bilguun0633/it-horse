import React from "react";
import { useState } from "react";

import Image from "next/image";

import ImageContainer from "@/components/common/ImageContainer";
import MemberPopup from "@/components/common/MemberPopup";
import Banner from "@/components/common/banner";

export default function StaffPage() {
  const [currentMember, setCurrentMember] = useState(null);
  const [ioCurrentMember, setIoCurrentMember] = useState(null);

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
  const IoList = [
    {
      image: "/io/image1.png",
      name: "Enkh-amgalan",
      role: "CEO",
    },
    {
      image: "/io/image2.png",
      name: "Tulga",
      role: "CTO",
    },
    {
      image: "/io/image13.png",
      name: "Enkhtuvshin",
      role: "BACK-END DEVELOPER",
    },
    {
      image: "/io/image4.png",
      name: "Orgil",
      role: "SYSTEM ADMINSTRATOR",
    },
    {
      image: "/io/image5.png",
      name: "Murun",
      role: "BACK-END DEVELOPER",
    },
    {
      image: "/io/image6.png",
      name: "naranbaatar",
      role: "FRONT-END DEVELOPER",
    },
    {
      image: "/io/image7.png",
      name: "Enkhamarbaysgalan",
      role: "MOBILE DEVELOPER",
    },
    {
      image: "/io/image8.png",
      name: "Garidmagnai",
      role: "CEPROJECT MANAGERO",
    },
    {
      image: "/io/image9.png",
      name: "Tuguldur",
      role: "UX/UI DESIGNER",
    },
    {
      image: "/io/image10.png",
      name: "Burenkhuu",
      role: "BACK-END DEVELOPER",
    },
    {
      image: "/io/image11.png",
      name: "Naranbaatar",
      role: "front-end developer",
    },
    {
      image: "/io/image12.png",
      name: "Enkhzul",
      role: "mobile developer",
    },
  ];

  const selectedMember = currentMember !== null ? roleList[currentMember] : null;
  const iOselectedMember = ioCurrentMember !== null ? IoList[ioCurrentMember] : null;

  return (
    <>
      <div className="relative lg:justify-center">
        <Banner
          title="Staff"
          description="Is mission has always been to organize the world's information and make it universally accessible and useful."
        />
        <div className="container py-10">
          <h1 className="py-10 text-4xl text-black uppercase">jinie edu tech</h1>
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
                      <p className="font-light text-white uppercase">See more</p>
                    </div>
                  </div>
                  <br />
                  <div>
                    <h2 className="flex justify-center text-xl font-medium uppercase">{name}</h2>
                    <p className="flex justify-center font-medium uppercase text-blue">{role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="container py-10">
          <h1 className="py-10 text-4xl text-black uppercase">io technology</h1>
          <div className="container flex justify-center">
            <div className="grid w-full grid-cols-2 gap-12 lg:grid-cols-4 ">
              {IoList.map(({ image, name, role }, index) => (
                <div key={index} className="w-full">
                  <div
                    className="relative z-0 flex items-center justify-center overflow-hidden bg-gray-300 border rounded-full cursor-pointer border-gray aspect-square"
                    onClick={() => setIoCurrentMember(index)}
                  >
                    <ImageContainer src={image} />
                    <div className="absolute inset-0 z-10 flex items-center justify-center transition opacity-0 backdrop-brightness-50 hover:opacity-100">
                      <p className="font-light text-white uppercase">See more</p>
                    </div>
                  </div>
                  <br />
                  <div>
                    <h2 className="flex justify-center text-xl font-medium uppercase">{name}</h2>
                    <p className="flex justify-center font-medium uppercase text-blue">{role}</p>
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
      <MemberPopup
        member={iOselectedMember}
        onClose={() => setIoCurrentMember(null)}
        onClickPrev={() => {
          if (ioCurrentMember > 0) {
            setIoCurrentMember(ioCurrentMember - 1);
          }
        }}
        onClickNext={() => {
          if (ioCurrentMember < IoList.length - 1) {
            setIoCurrentMember(ioCurrentMember + 1);
          }
        }}
      />
    </>
  );
}
