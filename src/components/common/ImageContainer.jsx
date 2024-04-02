import Image from "next/legacy/image";

export default function ImageContainer({ src, className }) {
  return (
    <Image
      layout="fill"
      fill
      alt=""
      quality={100}
      src={src}
      className={`object-center object-cover ${className ? className : ""}`}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN89uJVPQAIrQM5vOTeyQAAAABJRU5ErkJggg=="
    />
  );
}
