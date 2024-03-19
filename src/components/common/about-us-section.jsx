import React from "react";
import ImageContainer from "./ImageContainer";

export default function AboutUsSection() {
  return (
    <div>
      {" "}
      <div className=" relative flex justify-center">
        <div className="w-full fill h-screen  relative">
          <ImageContainer src="/background/422251511.png" />
        </div>
        <div className="container  absolute p-16 ">
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-2 lg:gap-4   ">
            <div className="   text-black">
              <h1 className="uppercase bold fw-bold">who we are</h1>
              <br />
              <p>
                Since 2008, IT Horse has been helping companies in the FinTech,
                healthcare, real estate, supply chain management, and other
                industries succeed with custom software solutions. Driven by our
                clients’ business-specific needs and time and budget
                constraints, our software development company builds and
                augments secure, stable, scalable, and highly functional digital
                products to deliver maximum value and ensure business
                sustainability.
              </p>
              <br />
              <p>
                Since 2008, IT Horse has been helping companies in the FinTech,
                healthcare, real estate, supply chain management, and other
                industries succeed with custom software solutions. Driven by our
                clients’ business-specific needs and time and budget
                constraints, our software development company builds and
                augments secure, stable, scalable, and highly functional digital
                products to deliver maximum value and ensure business
                sustainability.
              </p>
              <br />
              <div className="flex gap-4 ">
                <button className="text-blue border rounded border-blue h-12 px-4 ">
                  A business prospectus
                </button>
                <button className="bg-blue rounded text-white  px-4">
                  Company introduction
                </button>
              </div>
            </div>
            <div className="relative ">
              <ImageContainer src="/background/Shape.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
