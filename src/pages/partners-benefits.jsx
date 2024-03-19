import React from "react";
import Banner from "@/components/layout/Banner";
import ImageContainer from "@/components/common/ImageContainer";
import Image from "next/image";
import Partner from "@/components/common/partner";
export default function PartnersBenefits() {
  const imageList = [
    {
      image: "/about/image1.svg",
      width: 169,
    },
    {
      image: "/about/image2.svg",
      width: 173,
    },
    {
      image: "/about/image3.svg",
      width: 98,
    },
    {
      image: "/about/image4.svg",
      width: 209,
    },
    {
      image: "/about/image5.svg",
      width: 116,
    },
    {
      image: "/about/image12.svg",
      width: 106,
    },
    {
      image: "/about/image6.svg",
      width: 125,
    },
    {
      image: "/about/image7.svg",
      width: 172,
    },
    {
      image: "/about/image8.svg",
      width: 145,
    },
    {
      image: "/about/image9.svg",
      width: 164,
    },
    {
      image: "/about/image10.svg",
      width: 145,
    },
    {
      image: "/about/image11.svg",
      width: 164,
    },
  ];
  return (
    <>
      <div className=" relative lg:justify-center    ">
        <div className=" h-64 w-full relative ">
          <ImageContainer src="/background/bg.png" />
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="container text-white text-center">
              <h1 className="text-3xl lg:text-5xl uppercase">
                partners & benefits
              </h1>
              <br />
              <p>
                Is mission has always been to organize the world's information
                and make it universally accessible and useful.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-10">
        <h4 className="mb-4 text-xl font-medium uppercase lg:text-2xl text-black lg:mb-8">
          PARTNERS
        </h4>
        <div className="grid grid-cols-2 divide-x divide-y divide-brown lg:grid-cols-4 outline -outline-offset-1 outline-1 outline-brown">
          {imageList.map(({ image, width }, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center px-4 aspect-video group"
            >
              <Image width={width} alt="" height={0} src={image} />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 transitioned "></div>
            </div>
          ))}
        </div>
      </div>
      <div className="container py-10">
        <h4 className="mb-4 text-xl py-4 font-medium uppercase lg:text-2xl text-BLblackCK lg:mb-8">
          BENEFITS
        </h4>

        <div className="grid grid-cols-2 gap-2 lg:grid-cols-2  ">
          <div className="border border-brown rounded">
            <div className="grid grid-cols-2  w-full lg:grid-cols-2">
              <div className="p-10 ">
                <Image src="/software/partner.png" width={52} height={52} />
                <br />
                <h1 className="text-black">COST REDUCTION</h1>
                <br />
                <p className="">
                  Our table editor makes Postgres easy to use, even for
                  non-techies. You can do everything right in our dashboard.
                </p>
                <br />
                <ul>
                  <li>100% portable</li>
                  <li>Built-in Auth RLS</li>
                  <li>Easy to extend</li>
                </ul>
              </div>
              <div className="relative bg-repeact">
                <ImageContainer src="/software/back.svg" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2  lg:grid-cols-2 gap-2">
            <div className="border border-brown rounded ">
              <div className="p-10">
                <div className="flex justify-center">
                  <Image src="/software/partner2.png" width={52} height={52} />
                </div>
                <br />
                <div className="text-center">
                  <h1>EXPERTISE ACQUISITION</h1>
                  <br />
                  <p>
                    Our table editor makes Postgres easy to use, even for
                    non-techies. You can do everything right in our dashboard.
                  </p>
                </div>
              </div>
            </div>
            <div className="border border-brown rounded ">
              <div className="p-10">
                <div className="flex justify-center">
                  <Image src="/software/partner3.png" width={52} height={52} />
                </div>
                <br />
                <div className="text-center">
                  <h1>RESOURCE EFFICIENCY</h1>
                  <br />
                  <p>
                    Our table editor makes Postgres easy to use, even for
                    non-techies. You can do everything right in our dashboard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-2 py-2 ">
          <div className="grid grid-cols-2  lg:grid-cols-2 gap-2">
            <div className="border border-brown rounded ">
              <div className="p-10">
                <div className="flex justify-center">
                  <Image src="/software/partner4.png" width={52} height={52} />
                </div>
                <br />
                <div className="text-center">
                  <h1>EXPERTISE ACQUISITION</h1>
                  <br />
                  <p>
                    Our table editor makes Postgres easy to use, even for
                    non-techies. You can do everything right in our dashboard.
                  </p>
                </div>
              </div>
            </div>
            <div className="border border-brown rounded ">
              <div className="p-10">
                <div className="flex justify-center">
                  <Image src="/software/partner5.png" width={52} height={52} />
                </div>
                <br />
                <div className="text-center">
                  <h1>EXPERTISE ACQUISITION</h1>
                  <br />
                  <p>
                    Our table editor makes Postgres easy to use, even for
                    non-techies. You can do everything right in our dashboard.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-brown rounded">
            <div className="grid grid-cols-2  w-full lg:grid-cols-2">
              <div className="p-10 ">
                <Image src="/software/partner6.png" width={52} height={52} />
                <br />
                <h1 className="text-black">COST REDUCTION</h1>
                <br />
                <p className="">
                  Our table editor makes Postgres easy to use, even for
                  non-techies. You can do everything right in our dashboard.
                </p>
                <br />
                <ul>
                  <li>100% portable</li>
                  <li>Built-in Auth RLS</li>
                  <li>Easy to extend</li>
                </ul>
              </div>
              <div className="relative bg-repeact">
                <ImageContainer src="/software/back.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Partner />
      </div>
    </>
  );
}
