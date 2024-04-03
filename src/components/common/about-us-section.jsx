import useTranslation from "next-translate/useTranslation";

import ImageContainer from "../common/ImageContainer";

export default function AboutUsSection() {
  const { t } = useTranslation("main");
  return (
    <div className="container relative z-0 py-4 lg:flex lg:items-center lg:py-24">
      {/* <ImageContainer src="/software/frame1.png" className="-z-10" /> */}
      <div className="lg:w-[50%] lg:pr-8">
        <h2 className="mb-4 text-3xl font-semibold uppercase">{t("header.about-us")}</h2>
        <p className="mb-4 text-[#586772]">{t("home_page.about_us1")}</p>
        <p className="mb-4 text-[#586772]">{t("home_page.about_us2")}</p>

        <br />
        <div className="flex gap-4 ">
          <button className="h-12 px-4 border rounded text-blue border-blue ">
            {t("button.business")}
          </button>
          <button className="px-4 text-white rounded bg-blue">{t("button.company")}</button>
        </div>
      </div>
      <div className="relative lg:flex-1 aspect-square">
        <ImageContainer src="/background/Shape.png" />
      </div>
    </div>
  );
}
