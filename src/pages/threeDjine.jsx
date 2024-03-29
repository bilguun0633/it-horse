import React from "react";

import Image from "next/image";

import ImageContainer from "@/components/common/ImageContainer";
import Banner from "@/components/common/banner";

export default function ThreeDjine() {
  return (
    <div>
      <div className="relative lg:justify-center">
        <Banner
          title="3d products - jinie"
          description="Is mission has always been to organize the world's information and make it universally accessible and useful."
        />
        <div className="container py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 ">
            <div className=" flex items-center justify-center border rounded relative z-0  border-brown overflow-hidden h-[300px]">
              <ImageContainer src="/background/jine.png" className="-z-10" />

              <Image src="/icons/logo.png" alt="" width={420} height={64} />
            </div>
            <div className="text-[#586772]">
              <p>
                Jinie Coding Edu started out with information from the Inc. in 1998 with unique
                content and educational know-how. It&s an armed educational technology company.
              </p>
              <br />
              <p>
                3D printers, 3D pens, Aduino, and artificial intelligence (software) are essential
                to the knowledge industry. Schools and public institutions are required to directly
                research, develop, and manufacture school districts and connect various educational
                contents In addition, I will show you various possibilities of Jinie-Coding Edu
                (state) from the national academy membership business A lot of people worked
                together for this.
              </p>
              <br />
              <p>
                What we need to do now is to be able to move quickly to change. jinie Coding edu,
                with his unstoppable passion, is a constant effort in your faith and in your
                support. I&ll reciprocate and move on.{" "}
              </p>
              <br />
              <p>Thank you.</p>
              <br />
              <p>Jinie-Code-Edu Executives and Employees</p>
            </div>
          </div>
        </div>
        <div className="relative z-0">
          <ImageContainer src="/background/jenibg.png" className="-z-10" />
          <div className="inset-0 flex items-center justify-center ">
            <div className="py-20 ">
              <div className="text-center text-white ">
                <h1 className="text-3xl font-medium uppercase lg:text-5xl">business domain</h1>
                <br />
                <p className="px-10">
                  Is mission has always been to organize the world&apos;s information and make it
                  universally accessible and useful.
                </p>
              </div>
              <div className="container py-5">
                <div className="grid w-full grid-cols-1  lg:grid-cols-2 border-b-2 border-[#5FECFF] py-5  ">
                  <div className="flex items-center">
                    <h1 className="text-3xl font-bold text-white uppercase ">
                      training content development
                    </h1>
                  </div>
                  <div>
                    <p className="text-white">
                      Launching the jinieCoding Classroom in schools, adults, and the public sector.
                      We offer 3D creative convergence training. 3D printers, drones, coding. We
                      offer a variety of curricula.
                    </p>
                  </div>
                </div>
                <br />
                <div className="grid w-full grid-cols-1 lg:grid-cols-2 border-b-2 border-[#5FECFF] py-5 ">
                  <div className="flex items-center">
                    <h1 className="text-3xl font-bold text-white uppercase">
                      101 coding lab instituti
                    </h1>
                  </div>
                  <div>
                    <p className="text-white">
                      Core 3D Creative Convergence Maker Coding Academy of the Fourth Industrial
                      Revolution &apos;101 Coding Labs Comic Academy,&apos; focusing on the National
                      Center Diversify training content delivery and product diversification We are
                      trying to increase our sales.
                    </p>
                  </div>
                </div>
                <br />
                <div className="grid w-full grid-cols-1 lg:grid-cols-2 border-b-2 border-[#5FECFF] py-10">
                  <div className="flex items-center">
                    <h1 className="text-3xl font-bold text-white uppercase">
                      educational service business
                    </h1>
                  </div>
                  <div>
                    <p className="text-white">
                      Maker coding education, jiniecoding, du Training content development and 3D
                      pen, 3D coding drones In addition to parish creation, there is a need for each
                      educational content. We are producing and training our own textbooks.
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
              <h1 className="pb-4 text-3xl font-medium uppercase">how it work</h1>
            </div>
            <p className="text-[#586772] flex justify-center">
              Jinie&apos;s step-by-step learning and teaching from the basics step by step
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
                    {" "}
                    <h2 className="flex justify-center font-bold md:pt-2 sm:pt-2">
                      3D Printer 3D Pen
                    </h2>
                    <br />
                    <ul className="list-disc flex flex-col items-center text-[#586772]">
                      <li className="text-center">My own design product</li>
                      <li className=""> 3D modeling training / output</li>
                      <li className="">Making drones and robots yorself</li>
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
                    {" "}
                    <h2 className="flex justify-center font-bold md:pt-2 sm:pt-2">Scratch Found</h2>
                    <br />
                    <ul className="list-disc flex flex-col justify-center items-center text-[#586772]">
                      <li className="text-center">Education in a software-driven society</li>
                      <li className="text-center ">
                        {" "}
                        Various customized education for elemantary /middle/high schools
                      </li>
                      <li className="">Advanced use Aduino and C</li>
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
                    {" "}
                    <h2 className="flex justify-center font-bold md:pt-2 sm:pt-2">Coding</h2>
                    <br />
                    <ul className="list-disc flex flex-col items-center text-[#586772]">
                      <li className="text-center">Software - ioT production </li>
                      <li className=""> Various contents training curricula</li>
                      <li className="">Capstore Project</li>
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
                    <h2 className="flex justify-center font-bold md:pt-2 sm:pt-2">Coding Drones</h2>
                    <br />
                    <ul className="list-disc flex flex-col items-center text-[#586772]">
                      <li className="text-center">Two-dimensional coding rabot</li>
                      <li className=""> 3D coding theory </li>
                      <li className="">Development of flight control software</li>
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
