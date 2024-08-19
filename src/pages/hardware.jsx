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
    },
    {
      image: "/portfolio/image20.png",
      title: t("hardware.title2"),
    },
    {
      image: "/portfolio/image21.png",
      title: t("hardware.title3"),
    },
    {
      image: "/portfolio/image22.png",
      title: t("hardware.title4"),
    },
    {
      image: "/portfolio/image23.png",
      title: t("hardware.title5"),
    },
    {
      image: "/portfolio/image24.png",
      title: t("hardware.title6"),
    },
    {
      image: "/portfolio/image25.png",
      title: t("hardware.title7"),
      description: t("hardware.text"),
    },
  ];
  return (
    <>
      <div className="relative lg:justify-center">
        <Banner title={t("header.hardware")} description={t("header.subtitle")} />
      </div>
      <div className="py-5 bg-gray">
        <div className="container flex justify-center">
          <div className="grid w-full grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-4 ">
            {news.map(({ image, title }, index) => (
              <div
                key={index}
                className="overflow-hidden bg-white border rounded-lg cursor-pointer border-brown "
              >
                <div className="relative flex aspect-video ">
                  <ImageContainer src={image} />
                </div>
                <br />
                <div className="p-4 ">
                  <h2 className="text-2xl font-medium uppercase">{title}</h2>
                  <br />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
