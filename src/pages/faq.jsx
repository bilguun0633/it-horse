import React from "react";

import useTranslation from "next-translate/useTranslation";

import Accordion from "@/components/common/Accordion";
import Banner from "@/components/common/banner";

export default function FaqPage() {
  const { t } = useTranslation("main");
  const list = [
    {
      title: t("faq.q1"),
      description: t("faq.a1"),
    },
    {
      title: t("faq.q2"),
      description: t("faq.a2"),
    },
    {
      title: t("faq.q3"),
      description: t("faq.a3"),
    },
    {
      title: t("faq.q4"),
      description: t("faq.a4"),
    },
    {
      title: t("faq.q5"),
      description: t("faq.a5"),
    },
    {
      title: t("faq.q6"),
      description: t("faq.a6"),
    },
    {
      title: t("faq.q7"),
      description: t("faq.a7"),
    },
    {
      title: t("faq.q8"),
      description: t("faq.a8"),
    },
    {
      title: t("faq.q9"),
      description: t("faq.a9"),
    },
    {
      title: t("faq.q10"),
      description: t("faq.a10"),
    },
  ];

  return (
    <>
      <Banner title={t("faq.title")} description={t("faq.mission")} />
      <div className="container flex flex-col gap-4 px-4 py-4 lg:py-12 lg:px-24 lg:gap-6 xl:px-64">
        {list.map((item, index) => (
          <Accordion key={index} {...item} />
        ))}
      </div>
    </>
  );
}
