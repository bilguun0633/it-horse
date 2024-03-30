export default function HomeSolutions() {
  const list = [
    {
      icon: "puzzle-2",
      title: "Low Code",
      description:
        "Low-code solutions streamline software development by enabling users to create applications through graphical user interfaces and configuration instead of traditional hand-coded programming. This approach significantly reduces development time, enhances agility, and allows users with varying technical expertise to build, deploy, and manage applications efficiently.",
      reverse: false,
      contrast: false,
    },
    {
      icon: "bnb",
      title: "Blockchain",
      description:
        "Blockchain technology is a decentralized and distributed ledger system that ensures secure, transparent, and tamper-proof record-keeping of transactions across a network of computers. It underpins cryptocurrencies and enables trustless, peer-to-peer transactions without the need for a central authority, opening avenues for innovations in finance, supply chain management, and beyond.",
      reverse: false,
      contrast: true,
    },
    {
      icon: "box-3",
      title: "3D Object",
      description:
        "3D object technology involves the creation, manipulation, and visualization of three-dimensional models in digital environments. This technology is pivotal in various fields such as gaming, animation, industrial design, and virtual reality, allowing for the detailed representation of objects that can be examined and interacted with from all angles, enhancing realism and user experience.",
      reverse: true,
      contrast: true,
    },
    {
      icon: "cloud",
      title: "IOT",
      description:
        "In the realm of IoT, focusing on GPS and RFID-based systems represents a strategic approach to harnessing location intelligence and asset tracking capabilities. GPS technology allows for precise, real-time geolocation tracking. RFID technology, on the other hand, provides a means for identifying and tracking assets or individuals through radio frequency signals, enabling efficient inventory management, access control, and supply chain visibility.",
      reverse: true,
      contrast: false,
    },
    {
      icon: "pencil-ruler-2",
      title: "Enterprise software",
      description:
        "Our expertise spans custom software development for both enterprise and personal systems, including mobile applications across diverse sectors such as medical, finance, retail-chain, industry, and advertisement. We tailor solutions to meet the unique needs of each field, ensuring innovative, efficient, and scalable outcomes that drive success and transformation.",
      reverse: false,
      contrast: true,
    },
    {
      icon: "server",
      title: "Hardware, Infrastructure",
      description:
        "Alongside our software development, we offer comprehensive services in hardware procurement, infrastructure consulting, and system hosting. Our approach ensures not only the delivery of top-tier software solutions but also the optimization of the underlying hardware and infrastructure, providing a seamless, integrated experience for businesses looking to enhance efficiency and scalability across their operations.",
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
          Tailored Solutions to Navigate the Digital Frontier: Explore How We Can Transform Your World.
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
