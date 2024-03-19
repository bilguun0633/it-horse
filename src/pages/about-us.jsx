import React from "react";
import Banner from "@/components/layout/Banner";
import ImageContainer from "@/components/common/ImageContainer";
import AboutUsSection from "@/components/common/about-us-section";
import AboutUsList from "@/components/common/about-us-list";

export default function AboutUs() {
  const list = [
    {
      number: "15+",
      subtitle: "years of experience in software engineering and IT consulting",
    },
    {
      number: "500+",
      subtitle: "software developers and other IT professionals on board",
    },
    {
      number: "35+",
      subtitle: "active clients building and augmenting software with us",
    },
    {
      number: "35+",
      subtitle: "active clients building and augmenting software with us",
    },
  ];
  return (
    <>
      <div className=" relative lg:justify-center    ">
        <div className=" h-64 w-full relative ">
          <ImageContainer src="/background/bg.png" />
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="container text-white text-center">
              <h1 className="text-3xl lg:text-5xl uppercase">about us</h1>
              <br />
              <p>
                Is mission has always been to organize the world's information
                and make it universally accessible and useful.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <AboutUsSection />

        <div className="bg-warming w-full h-[12rem] flex">
          <div className="container flex justify-center ">
            <div className="grid w-full grid-cols-2 gap-12 lg:grid-cols-4">
              {list.map(({ number, subtitle }, index) => (
                <div key={index} className=" flex items-center">
                  <div className="">
                    <h2 className="flex justify-center text-blue ">{number}</h2>
                    <p className="flex justify-center">{subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray ">
        <div className="container p-10">
          <p>
            Jinie Coding Edu started out with information from the Inc. in 1998
            with unique content and educational know-how. It's an armed
            educational technology company
          </p>
          <br />
          <p>
            3D printers, 3D pens, Aduino, and artificial intelligence (software)
            are essential to the knowledge industry. Schools and public
            institutions are required to directly research, develop, and
            manufacture school districts and connect various educational
            contents In addition, I will show you various possibilities of
            Jinie-Coding Edu (state) from the national academy membership
            business A lot of people worked together for this.
          </p>
          <br />
          <p>
            What we need to do now is to be able to move quickly to change.
            jinie Coding edu, with his unstoppable passion, is a constant effort
            in your faith and in your support. I'll reciprocate and move on.
          </p>
          <p>Thank you. </p>
          <p>Jinie-Code-Edu Executives and Employees</p>
        </div>
      </div>
      <div className="py-16">
        <AboutUsList />
      </div>
      <div className="relative w-full h-[800px]">
        <ImageContainer src="/image/main-map.png" />
      </div>
    </>
  );
}
