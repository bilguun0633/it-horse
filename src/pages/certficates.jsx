import React from "react";
import Banner from "@/components/common/banner";
import ImageContainer from "@/components/common/ImageContainer";

export default function Certficates() {
  const cert = [
    {
      image: "/certficate/cert1.png",
      title: "KOREA ALACTRONIC INDUSTRIES COOPERATIVE",
      subtitle: "Union membership card",
    },
    {
      image: "/certficate/cert2.png",
      title: "KOREA ALACTRONIC INDUSTRIES COOPERATIVE",
      subtitle: "Union membership card",
    },
    {
      image: "/certficate/cert3.png",
      title: "KOREA ALACTRONIC INDUSTRIES COOPERATIVE",
      subtitle: "Union membership card",
    },
    {
      image: "/certficate/cert4.png",
      title: "KOREA ALACTRONIC INDUSTRIES COOPERATIVE",
      subtitle: "Union membership card",
    },
    {
      image: "/certficate/cert5.png",
      title: "KOREA ALACTRONIC INDUSTRIES COOPERATIVE",
      subtitle: "Union membership card",
    },
    {
      image: "/certficate/cert1.png",
      title: "KOREA ALACTRONIC INDUSTRIES COOPERATIVE",
      subtitle: "Union membership card",
    },
    {
      image: "/certficate/cert2.png",
      title: "KOREA ALACTRONIC INDUSTRIES COOPERATIVE",
      subtitle: "Union membership card",
    },
    {
      image: "/certficate/cert3.png",
      title: "KOREA ALACTRONIC INDUSTRIES COOPERATIVE",
      subtitle: "Union membership card",
    },
    {
      image: "/certficate/cert4.png",
      title: "KOREA ALACTRONIC INDUSTRIES COOPERATIVE",
      subtitle: "Union membership card",
    },
    {
      image: "/certficate/cert5.png",
      title: "KOREA ALACTRONIC INDUSTRIES COOPERATIVE",
      subtitle: "Union membership card",
    },
  ];
  return (
    <div>
      <Banner
        title="certificates and agreements"
        description="Is mission has always been to organize the world's information and make it universally accessible and useful."
      />
      <div className="bg-[#F8F8F8] py-20">
        <div className="container relative">
          <div className="grid grid-cols-4 gap-4">
            {cert.map(({ image, title, subtitle }, index) => (
              <div
                key={index}
                className="w-full overflow-hidden bg-white border rounded-lg  border-brown"
              >
                <div className="relative  aspect-square ">
                  <ImageContainer src={image} />
                </div>
                <div className="p-4 ">
                  <h2 className="font-medium uppercase text-blue">{title}</h2>
                  <br />
                  <p className="uppercase">{subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
