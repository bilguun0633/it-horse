import React from "react";

import Flag from "react-flagkit";

import HomeAbout from "@/components/Home/HomeAbout";
import HomeStatistics from "@/components/Home/HomeStatistics";
import ImageContainer from "@/components/common/ImageContainer";
import AboutUsList from "@/components/common/about-us-list";
import AboutUsSection from "@/components/common/about-us-section";
import Banner from "@/components/common/banner";

export default function AboutUs() {
  const internationalList = [
    {
      name: "mongolia",
      flag: "MN",
      children: [
        "Room 1507, Building 110, Eden Apartment, 46 Heungan-ro, Gumi-si, Gyeongsangbuk-do",
      ],
    },
    {
      name: "korea",
      flag: "KR",
      children: [
        "Room 1507, Building 110, Eden Apartment, 46 Heungan-ro, Gumi-si, Gyeongsangbuk-do"
      ],
    },
  ];

  return (
    <>
      <div className="relative lg:justify-center">
        <Banner
          title="about us"
          description="Is mission has always been to organize the world's information and make it universally accessible and useful."
        />
      </div>
      <div className="">
        <AboutUsSection />
        <HomeStatistics />
      </div>
      <div className="flex justify-center text-white font-medium bg-[#00000066] ">
        <div className="w-[632px] p-10">
          <p>
            Jinie Coding Edu started out with information from the Inc. in 1998 with unique content
            and educational know-how. It&s an armed educational technology company
          </p>
          <br />
          <p>
            3D printers, 3D pens, Aduino, and artificial intelligence (software) are essential to
            the knowledge industry. Schools and public institutions are required to directly
            research, develop, and manufacture school districts and connect various educational
            contents In addition, I will show you various possibilities of Jinie-Coding Edu (state)
            from the national academy membership business A lot of people worked together for this.
          </p>
          <br />
          <p>
            What we need to do now is to be able to move quickly to change. jinie Coding edu, with
            his unstoppable passion, is a constant effort in your faith and in your support. I&ll
            reciprocate and move on.
          </p>
          <p>Thank you. </p>
          <p>Jinie-Code-Edu Executives and Employees</p>
        </div>
      </div>
      <div className="py-16">
        <AboutUsList />
      </div>
      <div className="relative w-full aspect-[16/8]  z-0">
        <ImageContainer src="/image/main-map.png" className="-z-10" />
        <div className="container flex justify-end">
          <div className="w-[364px] py-4 lg:py-24">
            <div className="mb-8 lg:mb-16">
              <h2 className="mb-4 text-3xl font-semibold uppercase">international presence</h2>
              <p className="text-[#586772]">
                Is mission has always been to organize the world&apos;s information and make it
                universally accessible and useful.
              </p>
            </div>
            <div className="flex flex-col gap-4 lg:gap-8">
              {internationalList.map(({ name, flag, children }, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <Flag country={flag} size={40} />
                    <h2 className="text-xl font-semibold uppercase">{name}</h2>
                  </div>
                  <div className="flex flex-col gap-3">
                    {children.map((child, index) => (
                      <div key={index} className="flex gap-2">
                        <i className="text-xl ri-map-pin-line"></i>
                        <p className="text-[#586772] text-sm">{child}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
