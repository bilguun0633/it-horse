import Image from "next/image";

export default function ImageContainer({ src, fit, className }) {
  return (
    <Image
      fill
      alt=""
      quality={100}
      src={src}
      className={`object-center object-${fit || "cover"} ${
        className ? className : ""
      }`}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN89uJVPQAIrQM5vOTeyQAAAABJRU5ErkJggg=="
    />
  );
}
