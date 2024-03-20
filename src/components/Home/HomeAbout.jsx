import ImageContainer from "../common/ImageContainer";

export default function HomeAbout() {
  return (
    <div className="container relative z-0 py-4 lg:flex lg:items-center lg:py-24">
      <ImageContainer src="/background/422251511.png" className="-z-10" />
      <div className="lg:w-[50%] lg:pr-8">
        <h2 className="mb-4 text-3xl font-semibold">ABOUT US</h2>
        <p className="mb-4 text-[#586772]">
          Since 2008, IT Horse has been helping companies in the FinTech,
          healthcare, real estate, supply chain management, and other industries
          succeed with custom software solutions. Driven by our clients’
          business-specific needs and time and budget constraints, our software
          development company builds and augments secure, stable, scalable, and
          highly functional digital products to deliver maximum value and ensure
          business sustainability.
        </p>
        <p className="mb-4 text-[#586772]">
          Since 2008, IT Horse has been helping companies in the FinTech,
          healthcare, real estate, supply chain management, and other industries
          succeed with custom software solutions. Driven by our clients’
          business-specific needs and time and budget constraints, our software
          development company builds and augments secure, stable, scalable, and
          highly functional digital products to deliver maximum value and ensure
          business sustainability.
        </p>
        <br />
        <div className="flex gap-4 ">
          <button className="text-blue border rounded border-blue h-12 px-4 ">
            A business prospectus
          </button>
          <button className="bg-blue rounded text-white  px-4">
            Company introduction
          </button>
        </div>
      </div>
      <div className="relative lg:flex-1 aspect-square">
        <ImageContainer src="/background/Shape.png" />
      </div>
    </div>
  );
}
