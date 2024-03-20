import React from "react";
import ImageContainer from "@/components/common/ImageContainer";
import Image from "next/image";
import Banner from "@/components/common/banner";
export default function Hardware() {
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
      <div className="relative  lg:justify-center">
        <Banner
          title="hardware"
          description="Is mission has always been to organize the world's information and make it universally accessible and useful."
        />
      </div>
      <div className=" lg:py-10 bg-gray">
        <div className="container flex justify-center">
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-2 lg:gap-4 ">
            {news.map(({ image, title, description }, index) => (
              <div
                key={index}
                className="w-full overflow-hidden bg-white border rounded-lg border-brown "
              >
                <div className="relative flex aspect-video ">
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
