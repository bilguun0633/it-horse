import React from "react";

import Image from "next/image";

import ImageContainer from "@/components/common/ImageContainer";
import Banner from "@/components/common/banner";

export default function SoftwareIo() {
  return (
    <div>
      <div className="relative lg:justify-center">
        <Banner
          title="software - io technology"
          description="Is mission has always been to organize the world's information and make it universally accessible and useful."
        />
        <div className="container py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 ">
            <div className=" flex items-center justify-center border rounded relative z-0  border-brown overflow-hidden h-[300px]">
              <ImageContainer src="/background/jine.png" className="-z-10" />

              <Image src="/icons/ioLogo.png" alt="" width={420} height={64} />
            </div>
            <div className="text-[#586772]">
              <h1 className="text-xl font-medium text-black uppercase">about us</h1>
              <br />
              <p className="">
                IOTECH is an software development company. We provide comprehensive services
                including development of mobile applications, web-oriented applications, business
                software solutions, as well as software integration and updating, support, and
                maintenance of software applications.
              </p>
              <br />
              <h1 className="text-xl text-black uppercase">our mission</h1>
              <br />
              <p className="">
                Our mission is to enhancing the business growth of our customers with creative
                Design and Development to deliver market-defining high-quality solutions that create
                value and reliable competitive advantage for our clients around the world. Our
                mission is to deliver optimal solutions with quality and services at reasonable
                prices. For us customer satisfaction is given top place. We are very friendly in our
                dealings to the customers and it helps us retain existing clients and expand
                customer circle. We always try to improve the quality of our products by exploring
                innovative ideas.
              </p>
            </div>
          </div>
        </div>
        <div className="relative z-0">
          <ImageContainer src="/background/jenibg.png" className="-z-10" />
          <div className="inset-0 flex items-center justify-center ">
            <div className="py-20 ">
              <div className="text-center text-white ">
                <h1 className="text-3xl font-medium uppercase lg:text-5xl">
                  We Provide Agile Software Development Services
                </h1>
                <br />
                <p className="mx-10 conatiner">
                  Based on years of experience, we know that every business has a different software
                  and hardware environment. That is why we provide a wide range of software
                  development services. Check out the key services below.
                </p>
              </div>
              <div className="container py-5">
                <div className="grid w-full grid-cols-1  lg:grid-cols-2 border-b-2 border-[#5FECFF] py-5  ">
                  <div className="flex items-center">
                    <h1 className="text-3xl font-bold text-white uppercase ">design sprint</h1>
                  </div>
                  <div>
                    <p className="text-white">
                      We convert your idea into solid, safe, and reliable custom software with our
                      full-cycle software development services, including: Web app solution Mobile
                      app solutions UI/UX
                    </p>
                  </div>
                </div>
                <br />
                <div className="grid w-full grid-cols-1 lg:grid-cols-2 border-b-2 border-[#5FECFF] py-5 ">
                  <div className="flex items-center">
                    <h1 className="text-3xl font-bold text-white uppercase">development</h1>
                  </div>
                  <div>
                    <p className="text-white">
                      Our team can provide support at any stage of custom mobile app development,
                      from creating a proof-of-concept app to an MVP: Web application development
                      Cross-platform apps for iOS and Android Hybrid and mobile web Native apps
                      development
                    </p>
                  </div>
                </div>
                <br />
                <div className="grid w-full grid-cols-1 lg:grid-cols-2 border-b-2 border-[#5FECFF] py-10">
                  <div className="flex items-center">
                    <h1 className="text-2xl font-bold text-white uppercase">it consulting</h1>
                  </div>
                  <div>
                    <p className="text-white">
                      Our team covers all IT strategies and provides IT consulting services that
                      help optimize your business and make it grow:
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-20 bg-white">
          <div>
            <div className="flex justify-center">
              <h1 className="pb-4 text-3xl font-medium uppercase">our process</h1>
            </div>
            <p className="text-[#586772] flex justify-center">
              We are a passionate software and design company that specializes in beautiful and
              easy-to-use digital design & web development services.
            </p>

            <br />
            <div className="flex justify-center py-8 ">
              <div className="grid w-full grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
                <div className="">
                  <h1 className="flex justify-center text-xl font-medium uppercase md:pt-2 sm:pt-2">
                    step01
                  </h1>
                  <div className="py-4">
                    <div className=" bg-[#D9D9D9]  w-full h-2"></div>

                    <div className="flex justify-center -mt-4 ">
                      <div className="  aspect-square w-6  border-blue border-[6px] bg-white rounded-full "></div>
                    </div>
                  </div>
                  <div>
                    <h2 className="flex justify-center font-bold md:pt-2 sm:pt-2">Ideas</h2>
                    <br />
                    <ul className="list-disc flex flex-col items-center text-[#586772]">
                      <li className="text-center">Definition</li>
                      <li className=""> Problem</li>
                      <li className="">Logic</li>
                      <li className="">Analysis</li>
                    </ul>
                  </div>
                </div>
                <div className="">
                  <h1 className="flex justify-center text-xl font-medium uppercase md:pt-2 sm:pt-2">
                    step02
                  </h1>
                  <div className="py-4">
                    <div className=" bg-[#D9D9D9]  w-full h-2"></div>

                    <div className="flex justify-center -mt-4 ">
                      <div className="  aspect-square w-6  border-blue border-[6px] bg-white rounded-full "></div>
                    </div>
                  </div>
                  <div>
                    <h2 className="flex justify-center font-bold md:pt-2 sm:pt-2">Planning</h2>
                    <br />
                    <ul className="list-disc flex flex-col justify-center items-center text-[#586772]">
                      <li className="text-center">Requirement</li>
                      <li className="text-center ">Google venture</li>
                      <li className="">Prototype</li>
                      <li className="">UX UI design</li>
                    </ul>
                  </div>
                </div>
                <div className="">
                  <h1 className="flex justify-center text-xl font-medium uppercase md:pt-2 sm:pt-2">
                    step03
                  </h1>
                  <div className="py-4">
                    <div className=" bg-[#D9D9D9]  w-full h-2"></div>

                    <div className="flex justify-center -mt-4 ">
                      <div className="  aspect-square w-6  border-blue border-[6px] bg-white rounded-full "></div>
                    </div>
                  </div>
                  <div>
                    <h2 className="flex justify-center font-bold md:pt-2 sm:pt-2">Development</h2>
                    <br />
                    <ul className="list-disc flex flex-col items-center text-[#586772]">
                      <li className="text-center">Back-End</li>
                      <li className=""> Front-End</li>
                      <li className="">Core system</li>
                      <li className="">Mobile</li>
                    </ul>
                  </div>
                </div>
                <div className="">
                  <h1 className="flex justify-center text-xl font-medium uppercase md:pt-2 sm:pt-2">
                    step04
                  </h1>
                  <div className="py-4">
                    <div className=" bg-[#D9D9D9]  w-full h-2"></div>

                    <div className="flex justify-center -mt-4 ">
                      <div className="  aspect-square w-6  border-blue border-[6px] bg-white rounded-full "></div>
                    </div>
                  </div>
                  <div>
                    {" "}
                    <h2 className="flex justify-center font-bold md:pt-2 sm:pt-2">Testing</h2>
                    <br />
                    <ul className="list-disc flex flex-col items-center text-[#586772]">
                      <li className="text-center">Debugging</li>
                      <li className=""> Maintenance </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
