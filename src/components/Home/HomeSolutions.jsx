import useTranslation from "next-translate/useTranslation";

export default function HomeSolutions() {
  const { t } = useTranslation("main");
  const list = [
    {
      icon: "puzzle-2",
      title: t("home_page.low_code"),
      description: t("home_page.low_code1"),
      reverse: false,
      contrast: false,
    },
    {
      icon: "bnb",
      title: t("home_page.blockchain"),
      description: t("home_page.blockchain1"),
      reverse: false,
      contrast: true,
    },
    {
      icon: "box-3",
      title: t("home_page.3d_object"),
      description: t("home_page.3d_object1"),
      reverse: true,
      contrast: true,
    },
    {
      icon: "cloud",
      title: t("home_page.IOT"),
      description: t("home_page.storage1"),
      reverse: true,
      contrast: false,
    },
    {
      icon: "pencil-ruler-2",
      title: t("home_page.enterprise-software"),
      description: t("home_page.enterprise-software1"),
      reverse: false,
      contrast: true,
    },
    {
      icon: "server",
      title: t("home_page.enterprise-software"),
      description: t("home_page.enterprise-software1"),

      reverse: false,
      contrast: false,
    },
  ];

  return (
    <div className="bg-[#F8F8F8]">
      <div className="container py-4 lg:py-24">
        <div className="flex flex-col items-center mb-4 text-center lg:mb-8">
          <h2 className="mb-4 text-3xl font-semibold uppercase">{t("home_page.solutions")}</h2>
          <p className="max-w-[720px] text-[#586772]">{t("home_page.solutions1")}</p>
        </div>
        <div className="grid bg-white lg:grid-cols-2">
          {list.map(({ icon, title, description, reverse, contrast }, index) => (
            <div key={index} className="grid lg:grid-cols-2">
              <div className="items-center justify-center hidden lg:flex">
                <div className="bg-[#1967D21A] w-14 h-14 rounded-lg flex items-center justify-center">
                  <i className={`ri-${icon}-line text-2xl text-blue`}></i>
                </div>
              </div>
              <div
                className={`p-6 lg:aspect-square flex flex-col justify-center ${
                  contrast ? "bg-blue" : "bg-[#EDF3FE]"
                } ${reverse ? "lg:order-first" : ""}`}
              >
                <h5
                  className={`text-xl uppercase font-semibold mb-2 ${
                    contrast ? "text-white" : "text-blue"
                  }`}
                >
                  {title}
                </h5>
                <p className={`${contrast ? "text-white" : "text-[#586772]"}`}>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
