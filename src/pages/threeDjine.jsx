import React from "react";

import Image from "next/legacy/image";

import useTranslation from "next-translate/useTranslation";

import ImageContainer from "@/components/common/ImageContainer";
import Banner from "@/components/common/banner";

export default function ThreeDjine() {
  const { t } = useTranslation("main");
  return (
    <div>
      <div className="relative lg:justify-center">
        <Banner title={t("3d_products.3d_products_title")} description={t("header.subtitle")} />
        <div className="container py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 ">
            <div className=" flex items-center justify-center border rounded relative z-0  border-brown overflow-hidden h-[300px]">
              <ImageContainer src="/background/jine.png" className="-z-10" />

              <Image src="/icons/logo.png" alt="" width={420} height={64} />
            </div>
            <div className="text-[#586772]">
              <p>{t("3d_products.products_text1")}</p>
              <br />
              <p>{t("3d_products.products_text2")}</p>
              <br />
              <p>{t("3d_products.products_text3")}</p>
              <br />
              <p>{t("3d_products.products_text4")}.</p>
              <br />
              <p>{t("3d_products.products_text5")}</p>
            </div>
          </div>
        </div>
        <div className="relative z-0">
          <ImageContainer src="/background/jenibg.png" className="-z-10" />
          <div className="inset-0 flex items-center justify-center ">
            <div className="py-20 ">
              <div className="text-center text-white ">
                <h1 className="text-3xl font-medium uppercase lg:text-5xl">
                  {t("3d_products.business_domain")}
                </h1>
                <br />
                <p className="px-10">{t("header.subtitle")}</p>
              </div>
              <div className="container py-5">
                <div className="grid w-full grid-cols-1  lg:grid-cols-2 border-b-2 border-[#5FECFF] py-5  ">
                  <div className="flex items-center">
                    <h1 className="text-3xl font-bold text-white uppercase ">
                      {t("3d_products.training_content")}
                    </h1>
                  </div>
                  <div>
                    <p className="text-white">{t("3d_products.training_text")}</p>
                  </div>
                </div>
                <br />
                <div className="grid w-full grid-cols-1 lg:grid-cols-2 border-b-2 border-[#5FECFF] py-5 ">
                  <div className="flex items-center">
                    <h1 className="text-3xl font-bold text-white uppercase">
                      {t("3d_products.coding_lab")}
                    </h1>
                  </div>
                  <div>
                    <p className="text-white">{t("3d_products.coding_lab_text")}</p>
                  </div>
                </div>
                <br />
                <div className="grid w-full grid-cols-1 lg:grid-cols-2 border-b-2 border-[#5FECFF] py-10">
                  <div className="flex items-center">
                    <h1 className="text-3xl font-bold text-white uppercase">
                      {t("3d_products.educational_service")}
                    </h1>
                  </div>
                  <div>
                    <p className="text-white">{t("3d_products.educational_text")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-20 bg-white">
          <div>
            <div className="flex justify-center">
              <h1 className="pb-4 text-3xl font-medium uppercase">{t("3d_products.how_works")}</h1>
            </div>
            <p className="text-[#586772] flex justify-center">{t("3d_products.how_works_text")}</p>

            <br />
            <div className="flex justify-center py-8 ">
              <div className="grid w-full grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
                <div className="">
                  <h1 className="flex justify-center text-xl font-medium uppercase md:pt-2 sm:pt-2">
                    {t("software_io.step01")}
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
                      {t("3d_products.step01_title")}
                    </h2>
                    <br />
                    <ul className="list-disc flex flex-col items-center text-[#586772]">
                      <li className="text-center">{t("3d_products.step01_text1")}</li>
                      <li className=""> {t("3d_products.step01_text2")}</li>
                      <li className="">{t("3d_products.step01_text3")}</li>
                    </ul>
                  </div>
                </div>
                <div className="">
                  <h1 className="flex justify-center text-xl font-medium uppercase md:pt-2 sm:pt-2">
                    {t("software_io.step02")}
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
                      {t("3d_products.step02_title")}
                    </h2>
                    <br />
                    <ul className="list-disc flex flex-col justify-center items-center text-[#586772]">
                      <li className="text-center">{t("3d_products.step02_text1")}</li>
                      <li className="text-center ">{t("3d_products.step02_text2")}</li>
                      <li className="">{t("3d_products.step02_text3")}</li>
                    </ul>
                  </div>
                </div>
                <div className="">
                  <h1 className="flex justify-center text-xl font-medium uppercase md:pt-2 sm:pt-2">
                    {t("software_io.step03")}
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
                      {t("3d_products.step03_title")}
                    </h2>
                    <br />
                    <ul className="list-disc flex flex-col items-center text-[#586772]">
                      <li className="text-center">{t("3d_products.step03_text1")} </li>
                      <li className=""> {t("3d_products.step03_text2")}</li>
                      <li className="">{t("3d_products.step03_text3")}</li>
                    </ul>
                  </div>
                </div>
                <div className="">
                  <h1 className="flex justify-center text-xl font-medium uppercase md:pt-2 sm:pt-2">
                    {t("software_io.step04")}
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
                      {t("3d_products.step04_title")}
                    </h2>
                    <br />
                    <ul className="list-disc flex flex-col items-center text-[#586772]">
                      <li className="text-center">{t("3d_products.step04_text1")}</li>
                      <li className=""> {t("3d_products.step03_text2")} </li>
                      <li className="">{t("3d_products.step03_text3")}</li>
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
