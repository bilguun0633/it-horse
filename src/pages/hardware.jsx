import React from "react";

import Image from "next/legacy/image";

import useTranslation from "next-translate/useTranslation";

import ImageContainer from "@/components/common/ImageContainer";
import Banner from "@/components/common/banner";

export default function Hardware() {
  const { t } = useTranslation("main");
  const news = [
    {
      image: "/software/hardware.png",
      title: t("hardware.title1"),
      description: t("hardware.text"),
    },
    {
      image: "/portfolio/image20.png",
      title: t("hardware.title2"),
      description: t("hardware.text"),
    },
    {
      image: "/portfolio/image21.png",
      title: t("hardware.title3"),
      description: t("hardware.text"),
    },
    {
      image: "/portfolio/image22.png",
      title: t("hardware.title4"),
      description: t("hardware.text"),
    },
    {
      image: "/portfolio/image23.png",
      title: t("hardware.title5"),
      description: t("hardware.text"),
    },
    {
      image: "/portfolio/image24.png",
      title: t("hardware.title6"),
      description: t("hardware.text"),
    },
    {
      image: "/portfolio/image25.png",
      title: t("hardware.title7"),
      description: t("hardware.text"),
    },
  ];
  return (
    <>
      <div className="relative  lg:justify-center">
        <Banner title={t("header.hardware")} description={t("header.subtitle")} />
      </div>
      <div className=" py-5 bg-gray">
        <div className="container flex justify-center">
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-4 ">
            {news.map(({ image, title, description }, index) => (
              <div
                key={index}
                className="w-full overflow-hidden bg-white border rounded-lg border-brown "
              >
                <div className="relative flex aspect-[3/2] ">
                  <ImageContainer src={image} />
                </div>
                <br />
                <div className="p-4 ">
                  <h2 className="text-2xl font-medium uppercase">{title}</h2>
                  <br />
                  <p className="text-[#586772]">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
