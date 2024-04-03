import React from "react";

import useTranslation from "next-translate/useTranslation";

import ImageContainer from "@/components/common/ImageContainer";
import Banner from "@/components/common/banner";

export default function Certficates() {
  const { t } = useTranslation("main");
  const cert = [
    {
      image: "/certficate/cert1.png",
      title: t("cert.title1"),
      subtitle: t("cert.subtitle1"),
    },
    {
      image: "/certficate/certy1.png",
      title: t("cert.title2"),
      subtitle: t("cert.subtitle2"),
    },
    {
      image: "/certficate/cert2.png",
      title: t("cert.title3"),
      subtitle: t("cert.subtitle3"),
    },
    {
      image: "/certficate/cert3.png",
      title: t("cert.title4"),
      subtitle: t("cert.subtitle4"),
    },
    {
      image: "/certficate/cert4.png",
      title: t("cert.title5"),
      subtitle: "ISO9001	",
    },
    {
      image: "/certficate/cert4.png",
      title: t("cert.title5"),
      subtitle: "ISO14001	",
    },
    {
      image: "/certficate/cert5.png",
      title: t("cert.title7"),
      subtitle: t("cert.subtitle7"),
    },
    {
      image: "/certficate/cert6.png",
      title: t("cert.title8"),
      subtitle: t("cert.subtitle8"),
    },
    {
      image: "/certficate/cert7.png",
      title: t("cert.title9"),
      subtitle: t("cert.subtitle9"),
    },
    {
      image: "/certficate/cert7.png",
      title: t("cert.title9"),
      subtitle: t("cert.subtitle10"),
    },
    {
      image: "/certficate/cert7.png",
      title: t("cert.title9"),
      subtitle: t("cert.subtitle11"),
    },
    {
      image: "/certficate/cert8.png",
      title: t("cert.title12"),
      subtitle: t("cert.subtitle12"),
    },
    {
      image: "/certficate/cert9.png",
      title: t("cert.title13"),
      subtitle: t("cert.subtitle13"),
    },
    {
      image: "/certficate/cert10.png",
      title: t("cert.title14"),
      subtitle: t("cert.subtitle14"),
    },
    {
      image: "/certficate/cert11.png",
      title: t("cert.title15"),
      subtitle: t("cert.subtitle15"),
    },
    {
      image: "/certficate/cert12.png",
      title: t("cert.title16"),
      subtitle: t("cert.subtitle16"),
    },
  ];
  return (
    <div>
      <Banner
        title={t("cert.title")}
        description="Is mission has always been to organize the world's information and make it universally accessible and useful."
      />
      <div className="bg-[#F8F8F8] py-20">
        <div className="container relative">
          <div className="grid xl:grid-cols-4 md:grid-cols-2  gap-4">
            {cert.map(({ image, title, subtitle }, index) => (
              <div
                key={index}
                className="w-full overflow-hidden bg-white border rounded-lg  border-brown"
              >
                <div className="relative aspect-[338/380] ">
                  <ImageContainer src={image} />
                </div>
                <div className="p-4 ">
                  <h2 className="font-medium uppercase text-blue">{title}</h2>
                  <br />
                  <p className="uppercase">{subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
