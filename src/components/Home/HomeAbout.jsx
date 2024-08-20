import useTranslation from "next-translate/useTranslation";

import ImageContainer from "../common/ImageContainer";

export default function HomeAbout() {
  const { t } = useTranslation("main");
  return (
    <div className="container relative z-0 py-4 lg:flex lg:items-center lg:py-24">
      <ImageContainer src="/software/frame1.png" className="-z-10" />
      <div className="lg:w-[50%] lg:pr-8">
        <h2 className="mb-4 text-3xl font-semibold">{t("home_page.about_us")}</h2>
        <p className="mb-4 text-[#586772]">{t("home_page.about_us1")}</p>
        <p className="mb-4 text-[#586772]">{t("home_page.about_us1")}</p>
        <br />
      </div>
      <div className="relative lg:flex-1 aspect-square">
        <ImageContainer src="/background/shape1.png" />
      </div>
    </div>
  );
}
