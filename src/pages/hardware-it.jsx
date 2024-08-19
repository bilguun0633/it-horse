import React from "react";

import useTranslation from "next-translate/useTranslation";

import ImageContainer from "@/components/common/ImageContainer";
import Banner from "@/components/common/banner";

export default function HardwareIt() {
  const { t } = useTranslation("main");
  return (
    <div className="">
      <div>
        <Banner title={t("header.hardware-ithorse")} description={t("header.subtitle")} />
      </div>
      <div className="container py-20">
        <div className="grid grid-cols-2 gap-4">
          <div className="relative aspect-video">
            <ImageContainer src="/software/printer.jpg" />
          </div>
          <div className="relative aspect-video">
            <ImageContainer src="/software/printer1.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}
