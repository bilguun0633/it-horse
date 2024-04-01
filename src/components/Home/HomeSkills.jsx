import ImageContainer from "../common/ImageContainer";

export default function HomeSkills() {
  const list = [
    {
      logo: "/icons/java.png",
      title: "java",
      description:
        "Java is a versatile and robust programming language, ideal for building secure, high-performance applications across platforms.",
    },
    {
      logo: "/icons/dotnet.png",
      title: ".NET",
      description:
        ".NET is a comprehensive framework from Microsoft, enabling the development of dynamic web, mobile, and desktop applications.",
    },
    {
      logo: "/icons/python.png",
      title: "python",
      description:
        "Python is a highly readable and flexible programming language, renowned for its simplicity and scalability, making it ideal for web development, data analysis, artificial intelligence, and more.",
    },
    {
      logo: "/icons/react.png",
      title: "react js",
      description:
        "React is a powerful JavaScript library for building user interfaces, especially single-page applications with interactive UIs.",
    },
    {
      logo: "/icons/flutter.png",
      title: "flutter",
      description:
        "Flutter is an open-source UI software development kit from Google, used for crafting natively compiled applications for mobile, web, and desktop from a single codebase.",
    },
    {
      logo: "/icons/figma.png",
      title: "figma",
      description:
        "Figma is a cloud-based design tool that enables collaborative interface design, prototyping, and code generation, streamlining the design-to-development workflow.",
    },
    
  ];

  return (
    <div className="container py-4 lg:py-24">
      <div className="flex flex-col items-center mb-4 text-center lg:mb-8">
        <h2 className="mb-4 text-3xl font-semibold uppercase">Main Technologies</h2>
        <p className="max-w-[720px] text-[#586772]">
        Empowering Innovation with Cutting-Edge Technologies.
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
