import React from "react";
import ImageContainer from "@/components/common/ImageContainer";
import Image from "next/image";
import Banner from "@/components/common/banner";
export default function Software() {
  const news = [
    {
      image: "/portfolio/image1.png",
      name: "Websit ",
      title: "majestic marketplace",
      description:
        "The Majestic project has created a blockchain-based web system for buying, minting, and auctioning NFTs.",
    },
    {
      image: "/portfolio/image2.png",
      name: "Mobile application",
      title: "G-chain technology",
      description:
        "G-chain is a crypto wallet app based on the blockchain. It is an advanced mobile application that allows you to buy and transfer tokens, as well as trade with other coins.",
    },
    {
      image: "/portfolio/image3.png",
      name: "Website",
      title: "Agrigold.io",
      description:
        "ICO presentation website of Agrigold project was made. In addition, the project's marketing promotion work was completed twice.",
    },
    {
      image: "/portfolio/image4.png",
      name: "Mobile application",
      title: "toki",
      description:
        "The coffee delivery mini-app module within the Toki app is completed with design and development.",
    },
    {
      image: "/portfolio/image5.png",
      name: "Website",
      title: "cnetrals",
      description:
        "Premium Building Materials LLC was founded in 2011 under the name Premium Concrete to operate in the field of construction materials production and supply",
    },
    {
      image: "/portfolio/image6.png",
      name: "Mobile application",
      title: "mse",
      description:
        "This mobile app displays stock prices and other information traded on the Mongolian Stock Exchange. You can create your own list of stocks you are interested in.",
    },
    {
      image: "/portfolio/image7.png",
      name: "Website",
      title: "khan bank",
      description:
        "KAAN Bank is a national leading commercial bank with a total of 545 branches across the country, providing comprehensive banking and financial services to more than 82 percent of Mongolia's population, or 2.8 million customers.",
    },
    {
      image: "/portfolio/image8.png",
      name: "Mobile application",
      title: "central",
      description:
        "Using the Central platform, you can receive real-time information on the progress of orders and deliveries. Also, an application that solves the problems faced by the project site, office, and suppliers.",
    },
    {
      image: "/portfolio/image9.png",
      name: "Website",
      title: "emonos",
      description:
        "Online sales and delivery services for medicines and health products are continuously delivered to our customers 24 hours a day.",
    },
    {
      image: "/portfolio/image11.png",
      name: "Mobile application",
      title: "mtrip",
      description:
        "The Mtrip application is designed to provide the cheapest and fastest way to book flight tickets online.",
    },
    {
      image: "/portfolio/image12.png",
      name: "Mobile application",
      title: "blindcare",
      description:
        "Get professional psychological advice, take psychological tests, self-assess and anonymously share your psychological problems with others.",
    },
    {
      image: "/portfolio/image13.png",
      name: "Website",
      title: "millennium plaza",
      description:
        "Ideally set in the centre of Ulaanbaatar, MIllennium Plaza Hotel & Mall Ulaanbaatar features air-conditioned rooms, a terrace, free WiFi and a restaurant. This 4-star hotel offers a bar.",
    },
    {
      image: "/portfolio/image14.png",
      name: "Mobile application",
      title: "super 92",
      description:
        "A mobile application that allows you to collect, use and gift bonus points based on fuel purchases and loyalty programs. With the mini-merchant app, you can purchase car-related product incentives such as vouchers and coupons.",
    },
    {
      image: "/portfolio/image15.png",
      name: "Website",
      title: "xac bank ipo",
      description:
        "A project with the purpose of purchasing securities offered to the public by Khas Bank, monitoring the progress of shares, and disseminating detailed information.",
    },
    {
      image: "/portfolio/image16.png",
      name: "Mobile application",
      title: "upoint",
      description:
        "Loyalty program integrated platform for obtaining information about products and discounts of organizations, collecting and spending points, viewing status, participating in contests, creating groups and adding members",
    },
    {
      image: "/portfolio/image17.png",
      name: "Website",
      title: "Khan bank ipo",
      description:
        "A project with the purpose of purchasing securities offered by Khan Bank to the public, monitoring the progress of shares, and disseminating detailed information",
    },
    {
      image: "/portfolio/image18.png",
      name: "Mobile application",
      title: "tdb capital",
      description:
        "You can get all services related to securities, such as opening an account, managing your account, trading, viewing detailed information about the price of securities, and trading between users.",
    },
    {
      image: "/portfolio/image19.png",
      name: "Website",
      title: "Metagro",
      description:
        "Metagro Company was established in 2021 with the goal of developing high-quality agricultural food products that meet international standards through a combination of intensive animal husbandry and smart agriculture.",
    },
  ];
  return (
    <>
      <div className="relative  lg:justify-center">
        <Banner
          title="software"
          description="Is mission has always been to organize the world's information and make it universally accessible and useful."
        />
      </div>
      <div className=" lg:py-10 bg-gray">
        <div className="container flex justify-center">
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-4 ">
            {news.map(({ image, name, title, description }, index) => (
              <div
                key={index}
                className="w-full overflow-hidden bg-white border rounded-lg border-brown "
              >
                <div className="relative flex aspect-[3/2] ">
                  <ImageContainer src={image} />
                </div>
                <br />
                <div className="p-4 ">
                  <h2 className="font-medium text-blue text-2xl ">{name}</h2>
                  <br />
                  <h2 className="text-2xl font-medium uppercase">{title}</h2>
                  <br />
                  <p className="text-[#586772]">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
