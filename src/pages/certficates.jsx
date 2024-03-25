import React from "react";
import Banner from "@/components/common/banner";
import ImageContainer from "@/components/common/ImageContainer";

export default function Certficates() {
  const cert = [
    {
      image: "/certficate/cert1.png",
      title: "Ministry of SMEs and Startups	",
      subtitle: "2021 Busan Innovative Businessman Award	",
    },
    {
      image: "/certficate/certy1.png",
      title: "KOREA ALACTRONIC INDUSTRIES COOPERATIVE		",
      subtitle: "Union membership card		",
    },
    {
      image: "/certficate/cert2.png",
      title: "KITA	",
      subtitle: "Certificate of granting a trade identification number	",
    },
    {
      image: "/certficate/cert3.png",
      title: "KITECH",
      subtitle: "Saengsaengwon-Partner company designation",
    },
    {
      image: "/certficate/cert4.png",
      title: "ICR	",
      subtitle: "ISO9001	",
    },
    {
      image: "/certficate/cert4.png",
      title: "ICR	",
      subtitle: "ISO14001	",
    },
    {
      image: "/certficate/cert5.png",
      title: "BUSAN METROPOLITAN CITY	",
      subtitle: "Busan's representative technology start-up company	",
    },
    {
      image: "/certficate/cert6.png",
      title: "KITA",
      subtitle: "Trade Association Membership Card	",
    },
    {
      image: "/certficate/cert7.png",
      title: "K-BIZ Korea Federation of SMEs",
      subtitle:
        "Direct production confirmation Software maintenance and support jigjeobsaengsanhwa ",
    },
    {
      image: "/certficate/cert7.png",
      title: "K-BIZ Korea Federation of SMEs ",
      subtitle:
        "Direct production confirmation certificate Internet support development service ",
    },
    {
      image: "/certficate/cert7.png",
      title: "K-BIZ Korea Federation of SMEs ",
      subtitle:
        "Direct production confirmation certificate software engineering industry",
    },
    {
      image: "/certficate/cert8.png",
      title: "Ministry of SMEs and Startups",
      subtitle: "CERTIFIC OF Inno-Biz",
    },
    {
      image: "/certficate/cert9.png",
      title: "BEPA Busan Economic Promotion Agency ",
      subtitle: "Busan Waterloo-type co-op program certificate",
    },
    {
      image: "/certficate/cert10.png",
      title: "IIF Innopolis Institute Enterprise Association",
      subtitle: "Research Institute Company of the Year 2023",
    },
    {
      image: "/certficate/cert11.png",
      title: "KIPO",
      subtitle: "Waste plastic material supply device for 3D printer",
    },
    {
      image: "/certficate/cert12.png",
      title: "BUSAN METROPOLITAN CITY	",
      subtitle: "Busan's representative technology start-up company	",
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
          <div className="grid xl:grid-cols-4 md:grid-cols-2  gap-4">
            {cert.map(({ image, title, subtitle }, index) => (
              <div
                key={index}
                className="w-full overflow-hidden bg-white border rounded-lg  border-brown"
              >
                <div className="relative aspect-[338/380] ">
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
