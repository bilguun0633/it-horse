import React from "react";

import ImageContainer from "../common/ImageContainer";

export default function HomeTechnologies() {
  const list = [
    {
      title: "Custom software development",
      children: [
        "Solutions tailored to specific business needs",
        "Domain experience",
        "Technical excellence",
        "Process visibility",
        "Constraint management framework",
        "Compliance with non-functional requirements",
      ],
    },
    {
      title: "Development team augmentation",
      children: [
        "Off-site and on-site team staffing and ramp-up",
        "Extensive talent base",
        "Talent nurturing and retention policy",
        "Management of distributed teams",
        "Performance managemant",
      ],
    },
    {
      title: "IT consulting and digital advisory",
      children: [
        "Architecture assessment",
        "Technical feasibility audit",
        "Development process audit",
        "Solution design",
        "Proof of concept development",
        "Development strategy",
      ],
    },
    {
      title: "Digital transformation",
      children: [
        "Solutions tailored to specific business needs",
        "Domain experience",
        "Technical excellence",
        "Process visibility",
        "Constraint management framework",
        "Compliance with non-functional requirements",
      ],
    },
  ];

  return (
    <div className="bg-[#2E4C8C]">
      <div className="container relative z-0 py-4 lg:py-24">
        <ImageContainer src="/background/blue-pattern.jpg" className="-z-10" />
        <div className="flex flex-col items-center mb-4 text-center lg:mb-8">
          <h2 className="mb-4 text-3xl font-semibold text-white uppercase">Why ITHORSE?</h2>
          <p className="max-w-[720px] text-[#B2B9BE]">
          Choosing ITHorse means partnering with a leader in innovative software and hardware solutions. Our diverse expertise spans custom software development for various sectors, including medical, finance, and retail, along with cutting-edge IoT systems using GPS and RFID technologies. Beyond software, we excel in hardware procurement, infrastructure consulting, and system hosting, ensuring a comprehensive tech ecosystem for your business. At ITHorse, we're dedicated to tailoring our solutions to meet your unique needs, driving efficiency, scalability, and transformation across your operations. Why ITHorse? Because we're committed to your success every step of the way.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-4">
          {list.map(({ title, children }, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-4 bg-white rounded-lg lg:p-8"
            >
              <div>
                <h4 className="mb-4 text-lg font-semibold uppercase lg:mb-8">{title}</h4>
                <ul className="flex flex-col gap-2 pl-3 list-disc marker:text-2xl marker:text-blue marker:leading-none">
                  {children.map((child, childIndex) => (
                    <li className="text-sm text-[#586772]" key={childIndex}>
                      {child}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center gap-2 mt-4 cursor-pointer select-none group lg:mt-8 text-blue">
                <p className="group-hover:underline">Read more</p>
                <i className="text-xl transition ri-arrow-right-line group-hover:translate-x-2"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
