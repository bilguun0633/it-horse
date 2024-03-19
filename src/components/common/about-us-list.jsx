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
      ceo: "CEO",
      description: [
        {
          title: "Lee Song Woong",
        },
      ],
    },
    {
      type: "Business type",
      description: [
        {
          title: "Service Industry, Retail Business",
        },
      ],
    },
    {
      Office: "Head office",
      description: [
        {
          title:
            "Room 1507, Building 110, Eden Apartment, 46 Heungan-ro, Gumi-si, Gyeongsangbuk-do",
        },
      ],
    },
    {
      branch: "Mongolian branch",
      description: [
        {
          title:
            "Room 1507, Building 110, Eden Apartment, 46 Heungan-ro, Gumi-si, Gyeongsangbuk-do",
        },
      ],
    },
  ];
  return (
    <div className="container bg-warming rounded w-full h-[26rem] ">
      <div className="grid w-full grid-cols-2 gap-12 lg:grid-cols-3 p-5">
        <div className=" ">
          {list.map(
            ({ name, ceo, type, office, branch, description }, index) => (
              <div className="">
                <ul key={index} className="text-bold">
                  <li className="border-b-2">{name}</li>

                  <li>{ceo}</li>

                  <li>{type}</li>

                  <li>{office}</li>
                  <li>{branch}</li>
                  <div className="  ">
                    {description?.map(({ title }, index) => (
                      <ul key={index}>
                        <li>{title}</li>
                      </ul>
                    ))}
                  </div>
                </ul>
              </div>
            )
          )}
        </div>
        <div className=" ">
          {list.map(
            ({ name, ceo, type, office, branch, description }, index) => (
              <div className=" ">
                <ul key={index} className="">
                  <li className="border-b-2 ">{name}</li>

                  <li>{ceo}</li>

                  <li>{type}</li>

                  <li>{office}</li>
                  <li>{branch}</li>
                  <div className="  ">
                    {description?.map(({ title }, index) => (
                      <ul key={index}>
                        <li>{title}</li>
                      </ul>
                    ))}
                  </div>
                </ul>
              </div>
            )
          )}
        </div>
        <div className=" ">
          {list.map(
            ({ name, ceo, type, office, branch, description }, index) => (
              <div className="">
                <ul key={index} className="   text-bold">
                  <li className="border-b-2">{name}</li>

                  <li>{ceo}</li>

                  <li>{type}</li>

                  <li>{office}</li>
                  <li>{branch}</li>
                  <div className="  ">
                    {description?.map(({ title }, index) => (
                      <ul key={index}>
                        <li>{title}</li>
                      </ul>
                    ))}
                  </div>
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
