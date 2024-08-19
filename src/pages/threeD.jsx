import React from "react";

import Image from "next/legacy/image";

import useTranslation from "next-translate/useTranslation";

import ImageContainer from "@/components/common/ImageContainer";
import Banner from "@/components/common/banner";

export default function ThreeD() {
  const { t } = useTranslation("main");
  const news = [
    {
      image: "/software/threed.png",

      title: t("threeD.text1"),
    },
    {
      image: "/threed/image6.jpg",

      title: t("threeD.text2"),
    },
    {
      image: "/threed/image5.jpg",

      title: t("threeD.text3"),
    },
    {
      image: "/threed/image3.jpg",

      title: t("threeD.text4"),
    },
    {
      image: "/threed/image2.jpg",

      title: t("threeD.text5"),
    },
    {
      image: "/threed/image1.jpg",

      title: t("threeD.text6"),
    },
  ];
  return (
    <>
      <div className="relative lg:justify-center">
        <Banner title={t("header.3D")} description={t("header.subtitle")} />
      </div>
      <div className=" lg:py-10 bg-gray">
        <div className="container flex justify-center">
          <div className="grid w-full grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-4 ">
            {news.map(({ image, title, description }, index) => (
              <div
                key={index}
                className="w-full overflow-hidden bg-white border rounded-lg border-brown "
              >
                <div className="relative flex aspect-[4/3] ">
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
