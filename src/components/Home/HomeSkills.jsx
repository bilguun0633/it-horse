import useTranslation from "next-translate/useTranslation";

import ImageContainer from "../common/ImageContainer";

export default function HomeSkills() {
  const { t } = useTranslation("main");
  const list = [
    {
      logo: "/icons/java.png",
      title: "java",
      description: t("home_page.java1"),
    },
    {
      logo: "/icons/dotnet.png",
      title: ".NET",
      description: t("home_page.net1"),
    },
    {
      logo: "/icons/python.png",
      title: "python",
      description: t("home_page.python1"),
    },
    {
      logo: "/icons/react.png",
      title: "react js",
      description: t("home_page.react1"),
    },
    {
      logo: "/icons/flutter.png",
      title: "flutter",
      description: t("home_page.flutter1"),
    },
    {
      logo: "/icons/figma.png",
      title: "figma",
      description: t("home_page.figma1"),
    },
  ];

  return (
    <div className="container py-4 lg:py-24">
      <div className="flex flex-col items-center mb-4 text-center lg:mb-8">
        <h2 className="mb-4 text-3xl font-semibold uppercase">{t("home_page.main-tech")}</h2>
        <p className="max-w-[720px] text-[#586772]">{t("home_page.main-tech1")}</p>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {list.map(({ logo, title, description }, index) => (
          <div key={index} className="rounded-lg border border-[#4E4B6633] overflow-hidden">
            <div className="aspect-[16/8] relative w-full z-0 flex justify-center items-center">
              <ImageContainer src="/background/card-pattern.png" className="-z-10" />
              <div className="relative w-20 h-20">
                <ImageContainer src={logo} />
              </div>
            </div>
            <div className="p-4 lg:p-8">
              <h4 className="mb-4 text-lg font-semibold uppercase">{title}</h4>
              <p className="text-sm font-light text-[#586772]">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
