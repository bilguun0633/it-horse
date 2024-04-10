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
      description:
        "This is an NFT Marketplace product. Traditional works of art such as paintings are valuable because they are one of a kind. with NFTs, artwork can be tokenized to create a digital certificate of ownership that can be bought and sold.",
    },
    {
      image: "/software/threed.png",

      title: t("threeD.text2"),
      description:
        "This is an NFT Marketplace product. Traditional works of art such as paintings are valuable because they are one of a kind. with NFTs, artwork can be tokenized to create a digital certificate of ownership that can be bought and sold.",
    },
    {
      image: "/software/threed.png",

      title: t("threeD.text3"),
      description:
        "This is an NFT Marketplace product. Traditional works of art such as paintings are valuable because they are one of a kind. with NFTs, artwork can be tokenized to create a digital certificate of ownership that can be bought and sold.",
    },
    {
      image: "/software/threed.png",

      title: t("threeD.text4"),
      description:
        "This is an NFT Marketplace product. Traditional works of art such as paintings are valuable because they are one of a kind. with NFTs, artwork can be tokenized to create a digital certificate of ownership that can be bought and sold.",
    },
    {
      image: "/software/threed.png",

      title: t("threeD.text5"),
      description:
        "This is an NFT Marketplace product. Traditional works of art such as paintings are valuable because they are one of a kind. with NFTs, artwork can be tokenized to create a digital certificate of ownership that can be bought and sold.",
    },
    {
      image: "/software/threed.png",

      title: t("threeD.text6"),
      description:
        "This is an NFT Marketplace product. Traditional works of art such as paintings are valuable because they are one of a kind. with NFTs, artwork can be tokenized to create a digital certificate of ownership that can be bought and sold.",
    },
  ];
  return (
    <>
      <div className="relative lg:justify-center">
        <Banner title="3D" description={t("header.subtitle")} />
      </div>
      <div className=" lg:py-10 bg-gray">
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
