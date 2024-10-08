import React from "react";
import { useState } from "react";

import Image from "next/legacy/image";

import useTranslation from "next-translate/useTranslation";

import ImageContainer from "@/components/common/ImageContainer";
import MemberPopup from "@/components/common/MemberPopup";
import Banner from "@/components/common/banner";

export default function StaffPage() {
  const [currentMember, setCurrentMember] = useState(null);
  const [ioCurrentMember, setIoCurrentMember] = useState(null);
  const { t } = useTranslation("main");
  const roleList = [
    {
      image: "/image/staff-profile.png",
      name: "Seongwoong Lee",
      role: t("staff.role1"),
      position: t("staff.position1"),
      proffesion: t("staff.pro1"),
      education: t("staff.education1"),
      phone: "010-4588-2794 ",
      email: "incom2794@naver.com",
    },
    {
      image: "/io/image1.png",
      name: "Enkh-amgalan",
      role: t("staff.role2"),
      position: t("staff.position2"),
      proffesion: t("staff.pro2"),
      education: t("staff.education2"),
      phone: "",
      email: "",
    },
    {
      image: "/io/image2.png",
      name: "Tulga",
      role: t("staff.role3"),
      position: t("staff.position3"),
      proffesion: t("staff.pro3"),
      education: t("staff.education3"),
      phone: "",
      email: "",
    },
    {
      image: "/image/lee-jin.png",
      name: "Jinmoon Lee",
      role: t("staff.role4"),
      position: t("staff.position4"),
      proffesion: t("staff.pro4"),
      education: t("staff.education4"),
      phone: "051-331-0110 ",
      email: "incom8280@naver.com",
    },
    {
      image: "/image/kang.png",
      name: "Da-ye Kang",
      role: t("staff.role5"),
      position: t("staff.position5"),
      proffesion: t("staff.pro5"),
      education: t("staff.education5"),
      phone: "051-331-0110 ",
      email: "incom2794@naver.com",
    },
    {
      image: "/image/cto.png",
      name: "Lee Jong-seop",
      role: t("staff.role20"),
      position: "",
      proffesion: "Clothing (Ph.D.)",
      education: "Silla Graduate School",
      phone: "051-331-0110 ",
      email: "incom2794@naver.com",
    },
  ];
  const IoList = [
    {
      image: "/io/image13.png",
      name: "Enkhtuvshin",
      role: t("staff.role6"),
      proffesion: t("staff.pro7"),
      education: t("staff.education7"),
      phone: "",
      email: "",
    },
    {
      image: "/io/image8.png",
      name: "Garidmagnai",
      role: t("staff.role7"),
      proffesion: t("staff.pro7"),
      education: t("staff.education7"),
      phone: "",
      email: "",
    },
    {
      image: "/image/default-avatar.png",
      name: "San-gnam Lim ",
      role: t("staff.role8"),
      position: t("staff.position8"),
      proffesion: t("staff.pro8"),
      education: t("staff.education8"),
      phone: "010-3054-1144",
      email: "incom1144@naver.com",
    },
    {
      image: "/image/koo-beom.png",
      name: " Koo Beom-geun",
      role: t("staff.role9"),
      position: t("staff.position9"),
      proffesion: t("staff.pro9"),
      education: t("staff.education9"),
      phone: "010-3524-4281",
      email: "incom4281@naver.com",
    },
    {
      image: "/image/noh-joo-won.png",
      name: " Noh Joo-won",
      role: t("staff.role10"),
      position: t("staff.position10"),
      proffesion: t("staff.pro10"),
      education: t("staff.education10"),
      phone: "010-9689-9395",
      email: "incom9395@naver.com",
    },

    {
      image: "/io/image4.png",
      name: "Orgil",
      role: t("staff.role11"),
      proffesion: t("staff.pro7"),
      education: t("staff.education7"),
      phone: "",
      email: "",
    },
    {
      image: "/io/image5.png",
      name: "Murun",
      role: t("staff.role12"),
      proffesion: t("staff.pro7"),
      education: t("staff.education7"),
      phone: "",
      email: "",
    },
    {
      image: "/io/image6.png",
      name: "naranbaatar",
      role: t("staff.role13"),
      proffesion: t("staff.pro7"),
      education: t("staff.education7"),
      phone: "",
      email: "",
    },
    {
      image: "/io/image7.png",
      name: "Enkhamarbaysgalan",
      role: t("staff.role14"),
      proffesion: t("staff.pro7"),
      education: t("staff.education7"),
      phone: "",
      email: "",
    },
    {
      image: "/io/image9.png",
      name: "Tuguldur",
      role: t("staff.role15"),
      proffesion: t("staff.pro7"),
      education: t("staff.education7"),
      phone: "",
      email: "",
    },
    {
      image: "/io/image10.png",
      name: "Burenkhuu",
      role: t("staff.role16"),
      proffesion: t("staff.pro7"),
      education: t("staff.education7"),
      phone: "",
      email: "",
    },
    {
      image: "/io/image11.png",
      name: "Naranbaatar",
      role: t("staff.role17"),
      proffesion: t("staff.pro7"),
      education: t("staff.education7"),
      phone: "",
      email: "",
    },
    {
      image: "/io/image12.png",
      name: "Enkhzul",
      role: t("staff.role18"),
      proffesion: t("staff.pro7"),
      education: t("staff.education7"),
      phone: "",
      email: "",
    },
  ];

  const selectedMember = currentMember !== null ? roleList[currentMember] : null;
  const iOselectedMember = ioCurrentMember !== null ? IoList[ioCurrentMember] : null;

  return (
    <>
      <div className="relative lg:justify-center">
        <Banner title={t("header.staff")} description={t("staff.subtitle")} />
        <div className="container py-10">
          <h1 className="py-10 text-4xl text-black uppercase">{t("staff.managment")}</h1>
          <div className="container flex justify-center">
            <div className="grid w-full grid-cols-2 gap-12 lg:grid-cols-4 ">
              {roleList.map(({ image, name, role }, index) => (
                <div key={index} className="w-full">
                  <div
                    className="relative z-0 flex items-center justify-center overflow-hidden bg-gray-300 border rounded-full cursor-pointer border-gray aspect-square"
                    onClick={() => setCurrentMember(index)}
                  >
                    <ImageContainer className="grayscale" src={image} />
                    <div className="absolute inset-0 z-10 flex items-center justify-center transition opacity-0 backdrop-brightness-50 hover:opacity-100">
                      <p className="font-light text-white uppercase">{t("staff.see-more")}</p>
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
          <h1 className="py-10 text-4xl text-black uppercase">{t("staff.research")}</h1>
          <div className="container flex justify-center">
            <div className="grid w-full grid-cols-2 gap-12 lg:grid-cols-4 ">
              {IoList.map(({ image, name, role }, index) => (
                <div key={index} className="w-full">
                  <div
                    className="relative z-0 flex items-center justify-center overflow-hidden bg-gray-300 border rounded-full cursor-pointer border-gray aspect-square"
                    onClick={() => setIoCurrentMember(index)}
                  >
                    <ImageContainer className="grayscale" src={image} />
                    <div className="absolute inset-0 z-10 flex items-center justify-center transition opacity-0 backdrop-brightness-50 hover:opacity-100">
                      <p className="font-light text-white uppercase">{t("staff.see-more")}</p>
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
