export default function HomeSolutions() {
  const list = [
    {
      icon: "database-2",
      title: "Database",
      description:
        "Effective on the target floor after mid-thirties. Unlike other social networking sites, you need to prepare advertisements and landings that take advantage of IT unique sensibility.",
      reverse: false,
      contrast: false,
    },
    {
      icon: "lock",
      title: "authentication",
      description:
        "Effective on the target floor after mid-thirties. Unlike other social networking sites, you need to prepare advertisements and landings that take advantage of IT unique sensibility.",
      reverse: false,
      contrast: true,
    },
    {
      icon: "mail",
      title: "edge functions",
      description:
        "Effective on the target floor after mid-thirties. Unlike other social networking sites, you need to prepare advertisements and landings that take advantage of IT unique sensibility.",
      reverse: true,
      contrast: true,
    },
    {
      icon: "cloud",
      title: "storage",
      description:
        "Effective on the target floor after mid-thirties. Unlike other social networking sites, you need to prepare advertisements and landings that take advantage of IT unique sensibility.",
      reverse: true,
      contrast: false,
    },
    {
      icon: "cursor",
      title: "realtime",
      description:
        "Effective on the target floor after mid-thirties. Unlike other social networking sites, you need to prepare advertisements and landings that take advantage of IT unique sensibility.",
      reverse: false,
      contrast: true,
    },
    {
      icon: "brain",
      title: "artificial intelligence",
      description:
        "Effective on the target floor after mid-thirties. Unlike other social networking sites, you need to prepare advertisements and landings that take advantage of IT unique sensibility.",
      reverse: false,
      contrast: false,
    },
  ];

  return (
    <div className="bg-[#F8F8F8]">
      <div className="container py-4 lg:py-24">
        <div className="flex flex-col items-center mb-4 text-center lg:mb-8">
          <h2 className="mb-4 text-3xl font-semibold uppercase">Solutions</h2>
          <p className="max-w-[720px] text-[#586772]">
            Is mission has always been to organize the world&apos;s information and make it
            universally accessible and useful.
          </p>
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
