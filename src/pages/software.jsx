import React from "react";

import useTranslation from "next-translate/useTranslation";

import ImageContainer from "@/components/common/ImageContainer";
import Banner from "@/components/common/banner";

export default function Software() {
  const { t } = useTranslation("main");

  const news = [
    {
      image: "/portfolio/image1.png",
      name: t("software.website"),
      title: t("software.web_job1"),
      description: t("software.web_job1_text"),
    },
    {
      image: "/portfolio/image2.png",
      name: t("software.mobile"),
      title: "G-chain technology",
      description: t("software.mobile_text"),
    },
    {
      image: "/portfolio/image3.png",
      name: t("software.website"),
      title: t("software.web_job2"),
      description: t("software.web_job2_text"),
    },
    {
      image: "/portfolio/image4.png",
      name: t("software.mobile"),
      title: "toki",
      description: t("software.mobile_job2_text"),
    },
    {
      image: "/portfolio/image5.png",
      name: t("software.website"),
      title: "cnetrals",
      description: t("software.web_job3_text"),
    },
    {
      image: "/portfolio/image6.png",
      name: t("software.mobile"),
      title: "mse",
      description: t("software.mobile_job3_text"),
    },
    {
      image: "/portfolio/image7.png",
      name: t("software.website"),
      title: "khan bank",
      description: t("software.web_job4_text"),
    },
    {
      image: "/portfolio/image8.png",
      name: t("software.mobile"),
      title: "central",
      description: t("software.mobile_job4_text"),
    },
    {
      image: "/portfolio/image9.png",
      name: t("software.website"),
      title: "emonos",
      description: t("software.web_job5_text"),
    },
    {
      image: "/portfolio/image11.png",
      name: t("software.mobile"),
      title: "mtrip",
      description: t("software.mobile_job5_text"),
    },
    {
      image: "/portfolio/image12.png",
      name: t("software.mobile"),
      title: "blindcare",
      description: t("software.mobile_job6_text"),
    },
    {
      image: "/portfolio/image13.png",
      name: t("software.website"),
      title: "millennium plaza",
      description: t("software.web_job6_text"),
    },
    {
      image: "/portfolio/image14.png",
      name: t("software.mobile"),
      title: "super 92",
      description: t("software.mobile_job7_text"),
    },
    {
      image: "/portfolio/image15.png",
      name: t("software.website"),
      title: "xac bank ipo",
      description: t("software.web_job7_text"),
    },
    {
      image: "/portfolio/image16.png",
      name: t("software.mobile"),
      title: "upoint",
      description: t("software.mobile_job8_text"),
    },
    {
      image: "/portfolio/image17.png",
      name: t("software.website"),
      title: "Khan bank ipo",
      description: t("software.web_job8_text"),
    },
    {
      image: "/portfolio/image18.png",
      name: t("software.mobile"),
      title: "tdb capital",
      description: t("software.mobile_job9_text"),
    },
    {
      image: "/portfolio/image19.png",
      name: t("software.website"),
      title: "Metagro",
      description: t("software.web_job9_text"),
    },
  ];
  return (
    <>
      <div className="relative lg:justify-center">
        <Banner title={t("header.software")} description={t("header.subtitle")} />
      </div>
      <div className=" lg:py-10 bg-gray">
        <div className="container flex justify-center">
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-4 ">
            {news.map(({ image, name, title, description }, index) => (
              <div
                key={index}
                className="w-full overflow-hidden bg-white border rounded-lg border-brown "
              >
                <div className="relative flex aspect-[3/2] ">
                  <ImageContainer src={image} />
                </div>
                <br />
                <div className="p-4 ">
                  <h2 className="text-2xl font-medium text-blue ">{name}</h2>
                  <br />
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
