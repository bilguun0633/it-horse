import React from "react";
import Banner from "@/components/layout/Banner";
import ImageContainer from "@/components/common/ImageContainer";
import Image from "next/image";
export default function ThreeD() {
  const news = [
    {
      image: "/software/image1.png",

      title: "nft marketplace",
      description:
        "This is NFT Marketplace product. Traditional works of art such as paintings are valuable because they are one of a kind. with NFTs, artwork can be tokenised to create a digital certificate of ownership that can be bought and sold.",
    },
    {
      image: "/software/image1.png",

      title: "nft marketplace",
      description:
        "This is NFT Marketplace product. Traditional works of art such as paintings are valuable because they are one of a kind. with NFTs, artwork can be tokenised to create a digital certificate of ownership that can be bought and sold.",
    },
    {
      image: "/software/image1.png",

      title: "nft marketplace",
      description:
        "This is NFT Marketplace product. Traditional works of art such as paintings are valuable because they are one of a kind. with NFTs, artwork can be tokenised to create a digital certificate of ownership that can be bought and sold.",
    },
  ];
  return (
    <>
      <div className=" relative lg:justify-center    ">
        <div className=" h-64 w-full relative ">
          <ImageContainer src="/background/bg.png" />
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="container text-white text-center">
              <h1 className="text-3xl lg:text-5xl font-semibold">3D</h1>
              <br />
              <p>Building a better business with superior software</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" lg:py-10 bg-gray ">
        <div className="container flex justify-center">
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-2 lg:gap-4   ">
            {news.map(({ image, title, description }, index) => (
              <div
                key={index}
                className="w-full bg-white border-2 border-brown rounded-lg overflow-hidden "
              >
                <div className="relative flex   aspect-video   ">
                  <ImageContainer src={image} />
                </div>
                <br />
                <div className="  p-4">
                  <h2 className="uppercase font-medium">{title}</h2>
                  <br />
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
