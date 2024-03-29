export default function HomeStatistics() {
  const list = [
    {
      value: "15+",
      text: "years of experience in software engineering and IT consulting",
    },
    {
      value: "500+",
      text: "software developers and other IT professionals on board",
    },
    {
      value: "35+",
      text: "active clients building and augmenting software with us",
    },
    {
      value: "35+",
      text: "active clients building and augmenting software with us",
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
