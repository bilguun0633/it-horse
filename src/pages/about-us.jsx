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
      children1: [{ icon: "" }, { text: "" }],
    },
    {
      name: "about-us korea",
      flag: "KR",
      children: [t("about-us.text2")],
      children1: [{ icon: ["ri-smartphone-line"] }, { text: "010-4588-2794" }],
    },
    {
      name: "",
      flag: "",
      children: [t("about-us.text3")],
      children1: [{ icon: ["ri-message-2-line"] }, { text: "incom2794@naver.com" }],
    },
    {
      name: "",
      flag: "",
      children: [t("about-us.text4")],
      children1: [{ icon: ["ri-phone-line"] }, { text: "051-331-0110" }],
    },
    {
      name: "",
      flag: "",
      children: [],
      children1: [{ icon: ["ri-global-fill"] }, { text: "http://jcodeedu.com" }],
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
          <div className="w-[500px] py-4 lg:py-24">
            <div className="mb-8 lg:mb-16">
              <h2 className="mb-4 text-3xl font-semibold uppercase">
                {t("about-us.international")}
              </h2>
              <p className="text-[#586772]">{t("about-us.mission_text")}</p>
            </div>
            <div className="flex flex-col gap-4 lg:gap-8">
              {internationalList.map(({ name, flag, children, children1 }, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <Flag country={flag} size={40} />
                    <h2 className="text-xl font-semibold uppercase">{name}</h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center flex-1 gap-2">
                      {children1.map(({ icon, text }, index) => (
                        <div key={index} className="flex items-center gap-1">
                          <i className={icon}></i>
                          <div>{text}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex-1">
                      {children.map((child, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <i className="text-xl ri-map-pin-line"></i>
                          <p className="text-[#586772] text-sm">{child}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* <div className="grid grid-cols-2">
                    <div className="flex gap-2">
                      {children1.map(({ icon, text }, index) => (
                        <div className="flex gap-2" key={index}>
                          <div className="">
                            {" "}
                            <i class={icon}></i>
                          </div>
                          {text}
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col gap-3">
                      {children.map((child, index) => (
                        <div key={index} className="flex gap-2">
                          <i className="text-xl ri-map-pin-line"></i>
                          <p className="text-[#586772] text-sm">{child}</p>
                        </div>
                      ))}
                    </div>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
