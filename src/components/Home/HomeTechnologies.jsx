import React from "react";

import useTranslation from "next-translate/useTranslation";

import ImageContainer from "../common/ImageContainer";

export default function HomeTechnologies() {
  const { t } = useTranslation("main");
  const list = [
    {
      title: t("home_page.custom"),
      children: [
        t("home_page.custom1"),
        t("home_page.custom2"),
        t("home_page.custom3"),
        t("home_page.custom4"),
        t("home_page.custom5"),
        t("home_page.custom6"),
      ],
    },
    {
      title: t("home_page.development"),
      children: [
        t("home_page.development1"),
        t("home_page.development2"),
        t("home_page.development3"),
        t("home_page.development4"),
        t("home_page.development5"),
        t("home_page.development6"),
      ],
    },
    {
      title: t("home_page.digital"),
      children: [
        t("home_page.digital1"),
        t("home_page.digital2"),
        t("home_page.digital3"),
        t("home_page.digital4"),
        t("home_page.digital5"),
        t("home_page.digital6"),
      ],
    },
    {
      title: t("home_page.cunsulting"),
      children: [
        t("home_page.cunsulting1"),
        t("home_page.cunsulting2"),
        t("home_page.cunsulting3"),
        t("home_page.cunsulting4"),
        t("home_page.cunsulting5"),
        t("home_page.cunsulting6"),
      ],
    },
  ];

  return (
    <div className="bg-[#2E4C8C]">
      <div className="container relative z-0 py-4 lg:py-24">
        <ImageContainer src="/background/blue-pattern.jpg" className="-z-10" />
        <div className="flex flex-col items-center mb-4 text-center lg:mb-8">
          <h2 className="mb-4 text-3xl font-semibold text-white uppercase">
            {t("home_page.why-ithorse")}
          </h2>
          <p className="max-w-[720px] text-[#B2B9BE]">{t("home_page.why-ithorse1")}</p>
        </div>
        <div className="grid gap-4 lg:grid-cols-4">
          {list.map(({ title, children }, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-4 bg-white rounded-lg lg:p-8"
            >
              <div>
                <h4 className="mb-4 text-lg font-semibold uppercase lg:mb-8">{title}</h4>
                <ul className="flex flex-col gap-2 pl-3 list-disc marker:text-2xl marker:text-blue marker:leading-none">
                  {children.map((child, childIndex) => (
                    <li className="text-sm text-[#586772]" key={childIndex}>
                      {child}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center gap-2 mt-4 cursor-pointer select-none group lg:mt-8 text-blue">
                <p className="group-hover:underline">Read more</p>
                <i className="text-xl transition ri-arrow-right-line group-hover:translate-x-2"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
