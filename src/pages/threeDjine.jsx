import React from "react";
import ImageContainer from "@/components/common/ImageContainer";
import Image from "next/image";
import Banner from "@/components/common/banner";

export default function ThreeDjine() {
  return (
    <div>
      <div className=" relative lg:justify-center    ">
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
                Jinie Coding Edu started out with information from the Inc. in
                1998 with unique content and educational know-how. It&s an armed
                educational technology company.
              </p>
              <br />
              <p>
                3D printers, 3D pens, Aduino, and artificial intelligence
                (software) are essential to the knowledge industry. Schools and
                public institutions are required to directly research, develop,
                and manufacture school districts and connect various educational
                contents In addition, I will show you various possibilities of
                Jinie-Coding Edu (state) from the national academy membership
                business A lot of people worked together for this.
              </p>
              <br />
              <p>
                What we need to do now is to be able to move quickly to change.
                jinie Coding edu, with his unstoppable passion, is a constant
                effort in your faith and in your support. I&ll reciprocate and
                move on.{" "}
              </p>
              <br />
              <p>Thank you.</p>
              <br />
              <p>Jinie-Code-Edu Executives and Employees</p>
            </div>
          </div>
        </div>
        <div className="relative aspect-video">
          <ImageContainer src="/background/jenibg.png" />
          <div className="absolute flex justify-center items-center inset-0  ">
            <div className=" ">
              <div className=" text-white text-center">
                <h1 className="text-3xl lg:text-5xl uppercase font-medium">
                  business domain
                </h1>
                <br />
                <p>
                  Is mission has always been to organize the world&apos;s
                  information and make it universally accessible and useful.
                </p>
              </div>
              <div className="py-5 container">
                <div className="grid w-full grid-cols-1  lg:grid-cols-2 border-b-2 border-[#5FECFF] py-5  ">
                  <div className="flex items-center">
                    <h1 className="uppercase text-white font-bold text-3xl ">
                      training content development
                    </h1>
                  </div>
                  <div>
                    <p className="text-white">
                      Launching the jinieCoding Classroom in schools, adults,
                      and the public sector. We offer 3D creative convergence
                      training. 3D printers, drones, coding. We offer a variety
                      of curricula.
                    </p>
                  </div>
                </div>
                <br />
                <div className="grid w-full grid-cols-1 border-b-2 border-[#5FECFF] py-5 ">
                  <div className="flex items-center">
                    <h1 className="text-white font-bold text-3xl uppercase">
                      101 coding lab instituti
                    </h1>
                  </div>
                  <div>
                    <p className="text-white">
                      Core 3D Creative Convergence Maker Coding Academy of the
                      Fourth Industrial Revolution &apos;101 Coding Labs Comic
                      Academy,&apos; focusing on the National Center Diversify
                      training content delivery and product diversification We
                      are trying to increase our sales.
                    </p>
                  </div>
                </div>
                <br />
                <div className="grid w-full grid-cols-1 border-b-2 border-[#5FECFF] py-10">
                  <div className="flex items-center">
                    <h1 className="text-white font-bold text-3xl uppercase">
                      educational service business
                    </h1>
                  </div>
                  <div>
                    <p className="text-white">
                      Maker coding education, jiniecoding, du Training content
                      development and 3D pen, 3D coding drones In addition to
                      parish creation, there is a need for each educational
                      content. We are producing and training our own textbooks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container bg-white py-20">
          <div>
            <div className="flex justify-center">
              <h1 className="uppercase text-3xl font-medium pb-4">
                how it work
              </h1>
            </div>
            <p className="text-[#586772] flex justify-center">
              Jinie&apos;s step-by-step learning and teaching from the basics
              step by step
            </p>

            <br />
            <div className="flex justify-center py-8 ">
              <div className="grid w-full grid-cols-1  lg:grid-cols-4">
                <div className="flex justify-center font-medium text-xl uppercase">
                  step1
                </div>
                <div className="flex justify-center font-medium text-xl uppercase">
                  step2
                </div>
                <div className="flex justify-center font-medium text-xl uppercase">
                  step3
                </div>
                <div className="flex justify-center font-medium text-xl uppercase">
                  step4
                </div>
              </div>
            </div>
            <div className="">
              <div className=" bg-[#D9D9D9]  w-full h-2"></div>
              <div className="-mt-8 grid  grid-cols-1  lg:grid-cols-4 py-4">
                <div className="flex justify-center">
                  <div className="  aspect-square w-6 border-blue border-[6px] bg-white rounded-full "></div>
                </div>
                <div className="flex justify-center">
                  <div className="flex justify-center aspect-square w-6 border-blue border-[6px] bg-white rounded-full"></div>
                </div>
                <div className=" flex justify-center">
                  <div className="flex justify-center aspect-square w-6 border-blue border-[6px] bg-white rounded-full"></div>
                </div>
                <div className="flex justify-center">
                  <div className="flex justify-center aspect-square w-6 border-blue border-[6px] bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="grid w-full grid-cols-4  lg:grid-cols-4 py-12">
              <div>
                {" "}
                <h2 className="flex justify-center font-bold ">
                  3D Printer 3D Pen
                </h2>
                <br />
                <ul className="list-disc flex flex-col items-center text-[#586772]">
                  <li className="text-center">My own design product</li>
                  <li className=""> 3D modeling training / output</li>
                  <li className="">Making drones and robots yorself</li>
                </ul>
              </div>
              <div>
                {" "}
                <h2 className="flex justify-center  font-bold ">
                  Scratch Found
                </h2>
                <br />
                <ul className="list-disc flex flex-col items-center text-[#586772]">
                  <li className="text-center">
                    Education in a software-driven society
                  </li>
                  <li className=" ">Advanced use of Aduino and C</li>
                  <li className="">Advanced use of Aduino and C</li>
                </ul>
              </div>
              <div>
                {" "}
                <h2 className="flex justify-center font-bold ">Coding</h2>
                <br />
                <ul className="list-disc flex flex-col items-center text-[#586772]">
                  <li className="text-center">Software - IoT production</li>
                  <li className=""> Various contents training curricula</li>
                  <li className="">Capstone Project</li>
                </ul>
              </div>
              <div>
                {" "}
                <h2 className="flex justify-center font-bold ">
                  Coding Drones
                </h2>
                <br />
                <ul className="list-disc flex flex-col items-center text-[#586772]">
                  <li className="text-center">Two-dimensional coding robot</li>
                  <li className=""> 3D coding theory</li>
                  <li className="">Development of flight control software</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
