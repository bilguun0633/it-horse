import ImageContainer from "../common/ImageContainer";

export default function HomeSkills() {
  const list = [
    {
      logo: "/icons/react.png",
      title: "react js",
      description:
        "Our table editor makes Postgres easy to use, even for non-techies. You can do everything right in our dashboard.",
    },
    {
      logo: "/icons/flutter.png",
      title: "flutter",
      description:
        "Our table editor makes Postgres easy to use, even for non-techies. You can do everything right in our dashboard.",
    },
    {
      logo: "/icons/python.png",
      title: "python",
      description:
        "Our table editor makes Postgres easy to use, even for non-techies. You can do everything right in our dashboard.",
    },
    {
      logo: "/icons/vue.png",
      title: "vue js",
      description:
        "Our table editor makes Postgres easy to use, even for non-techies. You can do everything right in our dashboard.",
    },
    {
      logo: "/icons/figma.png",
      title: "figma",
      description:
        "Our table editor makes Postgres easy to use, even for non-techies. You can do everything right in our dashboard.",
    },
    {
      logo: "/icons/postman.png",
      title: "postman",
      description:
        "Our table editor makes Postgres easy to use, even for non-techies. You can do everything right in our dashboard.",
    },
  ];

  return (
    <div className="container py-4 lg:py-24">
      <div className="flex flex-col items-center mb-4 text-center lg:mb-8">
        <h2 className="mb-4 text-3xl font-semibold uppercase">skills</h2>
        <p className="max-w-[720px] text-[#586772]">
          Is mission has always been to organize the world&apos;s information and make it
          universally accessible and useful.
        </p>
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
