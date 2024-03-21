import React from "react";
import ImageContainer from "@/components/common/ImageContainer";
import Image from "next/image";
import Banner from "@/components/common/banner";
import { useState } from "react";
import parse from "html-react-parser";

export default function Announcement() {
  const [tabIndex, setTabIndex] = useState(0);

  const test = [
    {
      name: "New Releases",
      subtitle: "Welcome to the era of zero!",
      content:
        "<p>Since 2008, IT Horse has been helping companies in the FinTech, healthcare, real estate, supply chain management, and other industries succeed with custom software solutions. Driven by our clients’ business-specific needs and time and budget constraints, our software development company builds and augments secure, stable, scalable, and highly functional digital products to deliver maximum value and ensure business sustainability.<br/> Since 2008, IT Horse has been helping companies in the FinTech, healthcare, real estate, supply chain management, and other industries succeed with custom software solutions. Driven by our clients’ business-specific needs and time and budget constraints, our software development company builds and augments secure, stable, scalable, and highly functional digital products to deliver maximum value and ensure business sustainability.<br/>Since 2008, IT Horse has been helping companies in the FinTech, healthcare, real estate, supply chain management, and other industries succeed with custom software solutions. Driven by our clients’ business-specific needs and time and budget constraints, our software development company builds and augments secure, stable, scalable, and highly functional digital products to deliver maximum value and ensure business sustainability.<br/>Since 2008, IT Horse has been helping companies in the FinTech, healthcare, real estate, supply chain management, and other industries succeed with custom software solutions. Driven by our clients’ business-specific needs and time and budget constraints, our software development company builds and augments secure, stable, scalable, and highly functional digital products to deliver maximum value and ensure business sustainability.</p>",
    },
    {
      name: "New Releases 2",
      subtitle: "Welcome to the era of zero! 2",
      content:
        "<p>Since 2008, IT Horse has been helping companies in the FinTech, healthcare, real estate, supply chain management, and other industries succeed with custom software solutions. Driven by our clients’ business-specific needs and time and budget constraints, our software development company builds and augments secure, stable, scalable, and highly functional digital products to deliver maximum value and ensure business sustainability.<br/> Since 2008, IT Horse has been helping companies in the FinTech, healthcare, real estate, supply chain management, and other industries succeed with custom software solutions. Driven by our clients’ business-specific needs and time and budget constraints, our software development company builds and augments secure, stable, scalable, and highly functional digital products to deliver maximum value and ensure business sustainability.<br/>Since 2008, IT Horse has been helping companies in the FinTech, healthcare, real estate, supply chain management, and other industries succeed with custom software solutions. Driven by our clients’ business-specific needs and time and budget constraints, our software development company builds and augments secure, stable, scalable, and highly functional digital products to deliver maximum value and ensure business sustainability.<br/>Since 2008, IT Horse has been helping companies in the FinTech, healthcare, real estate, supply chain management, and other industries succeed with custom software solutions. Driven by our clients’ business-specific needs and time and budget constraints, our software development company builds and augments secure, stable, scalable, and highly functional digital products to deliver maximum value and ensure business sustainability.</p>",
    },
    {
      name: "New Releases ",
      subtitle: "Welcome to the era of zero! 3",
      content:
        "<p>Since 2008, IT Horse has been helping companies in the FinTech, healthcare, real estate, supply chain management, and other industries succeed with custom software solutions. Driven by our clients’ business-specific needs and time and budget constraints, our software development company builds and augments secure, stable, scalable, and highly functional digital products to deliver maximum value and ensure business sustainability.<br/> Since 2008, IT Horse has been helping companies in the FinTech, healthcare, real estate, supply chain management, and other industries succeed with custom software solutions. Driven by our clients’ business-specific needs and time and budget constraints, our software development company builds and augments secure, stable, scalable, and highly functional digital products to deliver maximum value and ensure business sustainability.<br/>Since 2008, IT Horse has been helping companies in the FinTech, healthcare, real estate, supply chain management, and other industries succeed with custom software solutions. Driven by our clients’ business-specific needs and time and budget constraints, our software development company builds and augments secure, stable, scalable, and highly functional digital products to deliver maximum value and ensure business sustainability.<br/>Since 2008, IT Horse has been helping companies in the FinTech, healthcare, real estate, supply chain management, and other industries succeed with custom software solutions. Driven by our clients’ business-specific needs and time and budget constraints, our software development company builds and augments secure, stable, scalable, and highly functional digital products to deliver maximum value and ensure business sustainability.</p>",
    },
  ];
  return (
    <>
      <div className="relative lg:justify-center">
        <Banner
          title="announcement"
          description="Is mission has always been to organize the world's information and make it universally accessible and useful."
        />
      </div>
      <div className="grid grid-cols-3 ">
        <div className="bg-[#EDF3FE] h-screen lg:px-12 py-20 ">
          <div className="">
            <h1 className="px-4  text-2xl font-semibold uppercase">
              announcement
            </h1>
            <div className="grid grid-cols-3 py-4 gap-2 px-4">
              <button className="h-8 px-8  text-black bg-white border rounded text-lg hover:bg-blue hover:text-white border-brown ">
                All
              </button>
              <button className="h-8 px-8 text-black bg-white border rounded text-lg hover:bg-blue hover:text-white border-brown">
                Notice
              </button>
              <button className="h-8 text-black bg-white border rounded text--lg hover:bg-blue hover:text-white border-brown">
                New releases
              </button>
            </div>
          </div>
          <div className="p-4 ">
            <div className="flex items-center pl-4 overflow-hidden bg-white border rounded h-9 border-brown hover:border-blue ">
              <i className="flex-shrink-0 ri-search-line text-brown"></i>
              <input
                type="text"
                placeholder="Search"
                className="flex-1 px-4 outline-none placeholder:text-base-200"
              />
              <button className="h-full rounded w-20 text-white bg-blue ">
                Search
              </button>
            </div>
          </div>
          {test.map(({ name, subtitle }, index) => (
            <div
              className="px-4 py-2"
              key={index}
              onClick={() => setTabIndex(index)}
            >
              <div className="h-32 overflow-hidden bg-white border rounded-lg border-brown hover:border-blue">
                <div className="p-4">
                  <div className="bg-[#EDF3FE] rounded w-32 h-6 ">
                    <div
                      key={index}
                      className="flex justify-center text-sm text-blue"
                    >
                      {name}
                    </div>
                  </div>
                  <br />
                  <h1 className="text-sm font-semibold">{subtitle}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="col-span-2">
          <div className=" container p-32">
            <h1 className="text-3xl font-semibold">
              {test[tabIndex].subtitle}
            </h1>
            <br />
            <div className="text-[#586772]">
              {parse(test[tabIndex].content)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
