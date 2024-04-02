import ImageContainer from "../common/ImageContainer";

export default function AboutUsSection() {
  return (
    <div className="container relative z-0 py-4 lg:flex lg:items-center lg:py-24">
      {/* <ImageContainer src="/software/frame1.png" className="-z-10" /> */}
      <div className="lg:w-[50%] lg:pr-8">
        <h2 className="mb-4 text-3xl font-semibold">ABOUT US</h2>
        <p className="mb-4 text-[#586772]">
          Welcome to ITHORSE, a beacon of innovation in the realms of software development, 3D
          object creation, and cutting-edge hardware solutions. With a rich heritage spanning over
          five years, our journey is marked by relentless dedication to quality, precision, and
          transforming ideas into tangible realities. Based in the heart of the technology
          revolution, we have expanded our expertise across borders, now embracing the vibrant
          creativity and technological prowess of Korean software development through strategic
          outsourcing.
        </p>
        <p className="mb-4 text-[#586772]">
          At ITHORSE, we are not just about creating software and products; we are about crafting
          experiences that resonate with our clients and end-users. Our team, a blend of seasoned
          experts and dynamic innovators, works tirelessly to exceed expectations, pushing the
          boundaries of what is possible in the digital realm. Whether it's bespoke software
          solutions, mesmerizing 3D models, or groundbreaking hardware, our creations stand as
          testaments to our commitment to excellence and innovation.
        </p>

        <br />
        <div className="flex gap-4 ">
          <button className="h-12 px-4 border rounded text-blue border-blue ">
            A business prospectus
          </button>
          <button className="px-4 text-white rounded bg-blue">Company introduction</button>
        </div>
      </div>
      <div className="relative lg:flex-1 aspect-square">
        <ImageContainer src="/background/Shape.png" />
      </div>
    </div>
  );
}
