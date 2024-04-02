import useTranslation from "next-translate/useTranslation";

export default function HomeStatistics() {
  const { t } = useTranslation("main");
  const list = [
    {
      value: "5+",
      text: t("home_page.sum_text1"),
    },
    {
      value: "30+",
      text: t("home_page.sum_text2"),
    },
    {
      value: "45+",
      text: t("home_page.sum_text3"),
    },
    {
      value: "80+",
      text: t("home_page.sum_text4"),
    },
  ];

  return (
    <div className="bg-[#EDF3FE]">
      <div className="container grid py-4 lg:py-12 lg:grid-cols-4 lg:divide-x lg:divide-[#4E4B6633]">
        {list.map(({ value, text }, index) => (
          <div key={index} className="flex flex-col items-center gap-4 text-center lg:px-4">
            <h4 className="text-3xl font-semibold text-blue">{value}</h4>
            <p className="font-light text-[#586772]">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
