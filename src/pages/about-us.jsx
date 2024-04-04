import React from "react";

import useTranslation from "next-translate/useTranslation";
import Flag from "react-flagkit";

import HomeAbout from "@/components/Home/HomeAbout";
import HomeStatistics from "@/components/Home/HomeStatistics";
import ImageContainer from "@/components/common/ImageContainer";
import AboutUsList from "@/components/common/about-us-list";
import AboutUsSection from "@/components/common/about-us-section";
import Banner from "@/components/common/banner";

export default function AboutUs() {
  const { t } = useTranslation("main");
  const internationalList = [
    {
      name: t("about-us.mongolia"),
      flag: "MN",
      children: [t("about-us.text1")],
    },
    {
      name: "about-us korea",
      flag: "KR",
      children: [t("about-us.text2")],
    },
  ];

  return (
    <>
      <div className="relative lg:justify-center">
        <Banner title={t("header.about-us")} description={t("header.subtitle")} />
      </div>
      <div className="">
        <AboutUsSection />
        <HomeStatistics />
      </div>
      <div className="flex justify-center text-white font-medium bg-[#00000066] ">
        <div className="w-[632px] p-10">
          <p>{t("3d_products.product_text1")}</p>
          <br />
          <p>{t("3d_products.product_text2")}</p>
          <br />
          <p>{t("3d_products.product_text3")}</p>
          <p>{t("3d_products.product_text4")} </p>
          <p>{t("3d_products.product_text5")}</p>
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
              <h2 className="mb-4 text-3xl font-semibold uppercase">
                {t("about-us.international")}
              </h2>
              <p className="text-[#586772]">{t("about-us.mission_text")}</p>
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
