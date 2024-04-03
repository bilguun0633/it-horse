import React from "react";

import useTranslation from "next-translate/useTranslation";

export default function AboutUsList() {
  const { t } = useTranslation("main");
  const list = [
    {
      name: t("about-us.name"),
      description: [
        {
          title: t("about-us.name-text"),
        },
      ],
    },
    {
      name: t("about-us.ceo"),
      description: [
        {
          title: t("about-us.ceo-text"),
        },
      ],
    },
    {
      name: t("about-us.business_type"),
      description: [
        {
          title: t("about-us.business-text"),
        },
      ],
    },
    {
      name: t("about-us.head-office"),
      description: [
        {
          title: t("about-us.head-text"),
        },
      ],
    },
    {
      name: t("about-us.mongolian-branch"),
      description: [
        {
          title: t("about-us.mongolian-branch-text"),
        },
      ],
    },
  ];
  return (
    <div className="container bg-warming rounded  ">
      <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-2 px-5 py-10">
        <div className=" ">
          {list.map(({ name, description }, index) => (
            <div className="" key={index}>
              <ul
                key={index}
                className={`text-bold  border-[#4E4B6633] flex gap-2 py-2 ${
                  index !== 0 ? "border-t" : ""
                }`}
              >
                <li className="font-semibold w-32 flex-shrink-0">{name}</li>

                <div className="  ">
                  {description?.map(({ title }, index) => (
                    <ul key={index}>
                      <li className="text-[#586772]">{title}</li>
                    </ul>
                  ))}
                </div>
              </ul>
            </div>
          ))}
        </div>
        <div className=" ">
          {list.map(({ name, description }, index) => (
            <div className="" key={index}>
              <ul
                key={index}
                className={`text-bold  border-[#4E4B6633] flex gap-2 py-2 ${
                  index !== 0 ? "border-t" : ""
                }`}
              >
                <li className="font-semibold w-32 flex-shrink-0">{name}</li>

                <div className="  ">
                  {description?.map(({ title }, index) => (
                    <ul key={index} className="text-[#586772]">
                      <li>{title}</li>
                    </ul>
                  ))}
                </div>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
