import React from "react";

import Image from "next/legacy/image";

import useTranslation from "next-translate/useTranslation";

import ImageContainer from "@/components/common/ImageContainer";
import InputCheckbox from "@/components/common/InputCheckbox";
import InputRadio from "@/components/common/InputRadio";
import Banner from "@/components/common/banner";

export default function PricePage() {
  const { t } = useTranslation("main");
  return (
    <>
      <div className="relative lg:justify-center">
        <Banner title={t("header.price")} description={t("header.subtitle")} />
        <div className="flex justify-center  py-10 bg-gray">
          <div className="w-[848px] bg-white rounded-xl border border-brown  ">
            <div className="">
              <div className="px-20 py-5">
                <h2 className="font-semibold uppercase">{t("price.type")}</h2>
                <div className="flex gap-4">
                  <InputRadio name="type" label={t("price.front_end")} />
                  <InputRadio name="type" label={t("price.back_end")} />
                  <InputRadio name="type" label={t("price.mobile_dev")} />
                  <InputRadio name="type" label={t("price.outsourcing")} />
                </div>
              </div>
              <div className="px-20 py-5">
                <label className="mb-4 text-lg font-semibold ">{t("price.title1")}</label>
                <div className="flex items-center mt-4 w-[100%] h-12   overflow-hidden border rounded-lg border-brown">
                  <input
                    type="text"
                    className="flex-1 px-4 outline-none placeholder:text-base-200"
                    placeholder={t("price.title1_inside")}
                  />
                </div>
              </div>
              <div className="px-20 py-5">
                <label className="mb-4 text-lg font-semibold">{t("price.name")}</label>
                <div className="flex items-center mt-4  w-[100%] h-12   overflow-hidden border rounded-lg border-brown">
                  <input
                    type="text"
                    className="flex-1 px-4 outline-none placeholder:text-base-200"
                    placeholder={t("price.name_inside")}
                  />
                </div>
              </div>
              <div className="px-20 py-5">
                <label className="mb-4 text-lg font-semibold ">{t("price.email")}</label>
                <div className="flex items-center mt-4 w-[100%] h-12   overflow-hidden border rounded-lg border-brown">
                  <input
                    type="text"
                    className="flex-1 px-4 outline-none placeholder:text-base-200"
                    placeholder="blackwidow@ithorse.com"
                  />
                </div>
              </div>
              <div className="px-20 py-5">
                <label className="mb-4 text-lg font-semibold ">{t("price.phone")}</label>
                <div className="flex mt-4 items-center  w-[100%] h-12   overflow-hidden border rounded-lg border-brown">
                  <input
                    type="text"
                    className="flex-1 px-4 outline-none placeholder:text-base-200"
                    placeholder="+976 95398822"
                  />
                </div>
              </div>
              <div className="justify-content-center">
                <div className="px-20 py-5">
                  <label className=" text-lg font-semibold  ">{t("price.inquiry")}</label>
                  <div className=" mt-4 w-[100%]  h-fit  overflow-hidden border rounded-lg border-brown">
                    <textarea
                      type="text"
                      className="flex justify-center w-full min-h-[24px] h-32 px-4 py-2 outline-none placeholder:text-base-200"
                      placeholder={t("price.inquiry_inside")}
                    />
                  </div>
                </div>
                <div className="px-20">
                  <InputCheckbox label={t("price.agree_infor")} />
                </div>
              </div>
              <div className="flex justify-center py-5">
                <button className="py-2 text-white rounded bg-blue px-14">
                  {t("price.send_req")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
