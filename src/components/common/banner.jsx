import ImageContainer from "./ImageContainer";

export default function Banner({ title, description }) {
  return (
    <div className="relative w-full h-64   ">
      <ImageContainer src="/background/bg.png" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container text-center text-white">
          <h1 className="text-3xl uppercase lg:text-5xl font-semibold">
            {title}
          </h1>
          <br />
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
