import React from "react";

export default function AboutUsList() {
  const list = [
    {
      name: "NAME",
      description: [
        {
          title: "ItHorse CO.,LTD",
        },
      ],
    },
    {
      name: "CEO",
      description: [
        {
          title: "Lee Song Woong",
        },
      ],
    },
    {
      name: "Business type",
      description: [
        {
          title: "Service Industry, Retail Business",
        },
      ],
    },
    {
      name: "Head office",
      description: [
        {
          title:
            "Room 1507, Building 110, Eden Apartment, 46 Heungan-ro, Gumi-si, Gyeongsangbuk-do",
        },
      ],
    },
    {
      name: "Mongolian branch",
      description: [
        {
          title:
            "Room 1507, Building 110, Eden Apartment, 46 Heungan-ro, Gumi-si, Gyeongsangbuk-do",
        },
      ],
    },
  ];
  return (
    <div className="container bg-warming rounded  ">
      <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-3 px-5 py-10">
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
