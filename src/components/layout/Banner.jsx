import Image from "next/image";

export default function Banner({ title, subtitle, image, position }) {
  return (
    <div className="relative pt-[50%] sm:pt-[25%] bg-background">
      <Image
        alt=""
        fill
        src={`/images/banner${image ? `-${image}` : ""}.jpg`}
        className={`brightness-75 object-cover object-${position || "bottom"}`}
      />
      <div className="absolute inset-0 container flex flex-col gap-1.5 lg:gap-3 items-center lg:items-start lg:py-32 justify-center">
        <h2 className="relative w-full text-xs text-center text-white uppercase drop-shadow-xl lg:text-left lg:text-sm">
          {subtitle}
        </h2>
        <h1 className="text-2xl font-semibold uppercase lg:text-5xl text-center lg:text-left lg:max-w-[60%] relative text-white">
          {title}
        </h1>
      </div>
    </div>
  );
}