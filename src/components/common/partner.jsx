import React from "react";

import useTranslation from "next-translate/useTranslation";

import ImageContainer from "./ImageContainer";

export default function Partner() {
  const { t } = useTranslation("main");
  return (
    <div className="relative z-0 ">
      <ImageContainer src="/software/partnerbg.png" className="-z-10" />
      <div className="container flex justify-center py-4 xl:items-center ">
        <div>
          <div className="w-full text-center text-white">
            <h1 className="text-3xl font-semibold uppercase">{t("home_page.become")}</h1>
            <br />
            <p>{t("home_page.become1")}</p>
          </div>
          <br />
          <div className="bg-white rounded-lg ">
            <div className="px-20 py-5">
              <label className="mb-4 text-lg font-semibold ">{t("home_page.register")}</label>
              <div className="flex mt-2 items-center  w-[100%] h-12   overflow-hidden border rounded-lg border-brown">
                <input
                  type="text"
                  className="flex-1 px-4 outline-none placeholder:text-base-200"
                  placeholder="Min-jun"
                />
              </div>
            </div>
            <div className="px-20 py-5">
              <label className="mb-4 text-lg font-semibold">{t("home_page.register1")}</label>
              <div className="flex items-center w-full h-12 mt-2 overflow-hidden border rounded-lg border-brown">
                <input
                  type="text"
                  className="flex-1 px-4 outline-none placeholder:text-base-200"
                  placeholder="Kim"
                />
              </div>
            </div>
            <div className="px-20 py-5">
              <label className="mb-4 text-lg font-semibold">{t("home_page.register2")}</label>
              <div className="flex mt-2 items-center w-[100%] h-12 overflow-hidden border rounded-lg border-brown">
                <input
                  type="text"
                  className="flex-1 px-4 outline-none placeholder:text-base-200"
                  placeholder="contact@ithorse.com"
                />
              </div>
            </div>
            <div className="justify-content-center">
              <div className="px-20 py-5">
                <label className="mb-4 text-lg font-semibold">{t("home_page.register3")}</label>
                <div className=" mt-2 w-[100%]  h-fit  overflow-hidden border rounded-lg border-brown">
                  <textarea
                    type="text"
                    className="flex p-2 justify-center w-full min-h-[24px] h-32 px-4 outline-none placeholder:text-base-200"
                    placeholder={t("price.inquiry_inside")}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center py-5">
              <button className="py-2 text-white rounded bg-blue px-14">
                {t("home_page.register4")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
