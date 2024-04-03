import React from "react";

import Image from "next/legacy/image";

import useTranslation from "next-translate/useTranslation";

import ImageContainer from "@/components/common/ImageContainer";
import Banner from "@/components/common/banner";
import Partner from "@/components/common/partner";

export default function PartnersBenefits() {
  const { t } = useTranslation("main");
  const imageList = [
    {
      image: "/partners/image1.png",
      width: 143,
      height: 40,
    },
    {
      image: "/partners/image2.png",
      width: 58,
      height: 40,
    },
    {
      image: "/partners/image3.png",
      width: 155,
      height: 45,
    },
    {
      image: "/partners/image4.png",
      width: 100,
      height: 64,
    },
    {
      image: "/partners/image5.png",
      width: 80,
      height: 64,
    },
    {
      image: "/partners/image6.png",
      width: 171,
      height: 40,
    },
    {
      image: "",
      width: 0,
      height: 0,
    },
    {
      image: "",
      width: 0,
      height: 0,
    },
  ];
  return (
    <>
      <div className="relative lg:justify-center">
        <Banner
          title={t("partnerBene.partner_title")}
          description={t("partnerBene.partner_mission")}
        />
      </div>
      <div className="container py-10">
        <h4 className="mb-4 text-xl font-medium text-black uppercase lg:text-2xl lg:mb-8">
          {t("partnerBene.partners")}
        </h4>
        <div className="grid grid-cols-2 divide-x divide-y divide-brown lg:grid-cols-4 outline -outline-offset-1 outline-1 outline-brown">
          {imageList.map(({ image, width, height }, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center px-4 aspect-video group"
            >
              <Image width={width} alt="" height={height} src={image} />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 transitioned "></div>
            </div>
          ))}
        </div>
      </div>
      <div className="container py-10">
        <h4 className="py-4 mb-4 text-xl font-medium uppercase lg:text-2xl text-BLblackCK lg:mb-8">
          {t("partnerBene.benefits")}
        </h4>

        <div className="grid gap-2 xl:grid-cols-2 lg:grid-cols-2 ">
          <div className="overflow-hidden border rounded-lg border-brown">
            <div className="grid w-full grid-cols-2 lg:grid-cols-2">
              <div className="p-10 ">
                <Image src="/software/partner.png" width={52} height={52} />
                <br />
                <h1 className="text-xl font-medium">{t("partnerBene.cost_title")}</h1>
                <br />
                <p className="text-[#586772] ">{t("partnerBene.cost_text1")}</p>
                <br />
                <ul className="list-disc text-[#586772]">
                  <li>{t("partnerBene.cost_bullet1")}</li>
                  <li>{t("partnerBene.cost_bullet2")}</li>
                  <li>{t("partnerBene.cost_bullet3")}</li>
                </ul>
              </div>
              <div className="relative bg-repeact ">
                <ImageContainer src="/software/back.svg" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-2">
            <div className="border rounded-lg border-brown ">
              <div className="p-10">
                <div className="flex justify-center">
                  <Image src="/software/partner2.png" width={52} height={52} />
                </div>
                <br />
                <div className="text-center">
                  <h1 className="text-xl font-medium">{t("partnerBene.expertise_title1")}</h1>
                  <br />
                  <p className="text-[#586772]">{t("partnerBene.expertise_text1")}</p>
                </div>
              </div>
            </div>
            <div className="border rounded-lg border-brown ">
              <div className="p-10">
                <div className="flex justify-center">
                  <Image src="/software/partner3.png" width={52} height={52} />
                </div>
                <br />
                <div className="text-center">
                  <h1 className="text-xl font-medium">{t("partnerBene.resource_title")}</h1>
                  <br />
                  <p className="text-[#586772]">{t("partnerBene.resource_text")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-2 py-2 xl:grid-cols-2 lg:grid-cols-2 ">
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-2">
            <div className="border rounded-lg border-brown ">
              <div className="p-10">
                <div className="flex justify-center">
                  <Image src="/software/partner4.png" width={52} height={52} />
                </div>
                <br />
                <div className="text-center">
                  <h1 className="text-xl font-medium uppercase">
                    {t("partnerBene.business_title")}
                  </h1>
                  <br />
                  <p className="text-[#586772]">{t("partnerBene.business_text")}</p>
                </div>
              </div>
            </div>
            <div className="border rounded-lg border-brown ">
              <div className="p-10">
                <div className="flex justify-center">
                  <Image src="/software/partner5.png" width={52} height={52} />
                </div>
                <br />
                <div className="text-center">
                  <h1 className="text-xl font-medium uppercase">
                    {t("partnerBene.expertise_title2")}
                  </h1>
                  <br />
                  <p className="text-[#586772]">{t("partnerBene.expertise_text2")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden border rounded-lg border-brown">
            <div className="grid w-full grid-cols-2 lg:grid-cols-2">
              <div className="p-10 ">
                <Image src="/software/partner6.png" width={52} height={52} />
                <br />
                <h1 className="text-xl font-medium uppercase">
                  {t("partnerBene.time_reduction_title")}
                </h1>
                <br />
                <p className="text-[#586772]">{t("partnerBene.time_reduction_text1")}</p>
                <br />
                <ul className="list-disc text-[#586772]">
                  <li>{t("partnerBene.time_reduction_bullet1")}</li>
                  <li>{t("partnerBene.time_reduction_bullet2")}</li>
                  <li>{t("partnerBene.time_reduction_bullet3")}</li>
                </ul>
              </div>
              <div className="relative bg-repeact">
                <ImageContainer src="/software/back.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Partner />
      </div>
    </>
  );
}
