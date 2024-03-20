import React from "react";
import ImageContainer from "@/components/common/ImageContainer";
import Image from "next/image";
import Banner from "@/components/common/banner";
export default function SoftwareIo() {
  return (
    <>
      <div className="relative  lg:justify-center">
        <Banner
          title="software"
          description="Is mission has always been to organize the world's information and make it universally accessible and useful."
        />
      </div>
    </>
  );
}
