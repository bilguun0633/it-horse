import React from "react";

import Accordion from "@/components/common/Accordion";
import Banner from "@/components/common/banner";

export default function FaqPage() {
  const list = [
    {
      title: "What services does ITHorse offer?",
      description:
        "ITHorse specializes in custom software development, including enterprise and personal systems, mobile applications across sectors like medical, finance, retail-chain, industry, and advertisement, along with hardware procurement, infrastructure consulting, and system hosting.",
    },
    {
      title: "How does ITHorse ensure the quality of its software products?",
      description:
        "We adhere to rigorous testing protocols, leveraging automated and manual testing techniques, and maintain high coding standards to ensure our software products are reliable, scalable, and meet industry-quality benchmarks.",
    },
    {
      title: "Can ITHorse develop applications for both iOS and Android?",
      description:
        "Yes, our expertise in technologies like Flutter allows us to create applications that run seamlessly on both iOS and Android platforms from a single codebase, ensuring a consistent and high-quality user experience across devices.",
    },
    {
      title: "What makes ITHorse different from other development companies?",
      description:
        "Our unique blend of expertise across diverse technologies, commitment to innovation, and personalized approach to client collaboration sets us apart, ensuring tailored solutions that drive success and transformation.",
    },
    {
      title: "How does ITHorse approach project management and communication?",
      description:
        "We employ agile project management methodologies to ensure flexibility and efficiency, maintaining open and transparent communication with clients through regular updates and feedback sessions.",
    },
    {
      title: "What is the typical timeline for a software development project at ITHorse?",
      description:
        "Project timelines vary based on complexity and scope, but we prioritize efficient development without compromising on quality, providing estimated timelines and regular progress updates throughout the project lifecycle.",
    },
    {
      title: "Does ITHorse provide support and maintenance after project completion?",
      description:
        "Yes, we offer comprehensive post-launch support and maintenance services to ensure your software continues to operate smoothly, addressing any emerging needs or updates.",
    },
    {
      title: "How does ITHorse handle data security and privacy?",
      description:
        "Data security and privacy are paramount in our development process, incorporating robust security measures, compliance with data protection regulations, and best practices to safeguard your information.",
    },
    {
      title: "Can ITHorse integrate new software with existing systems?",
      description:
        "Absolutely, our development team is skilled in creating solutions that seamlessly integrate with your existing infrastructure, ensuring compatibility and enhancing system functionality.",
    },
    {
      title: "How can I start a project with ITHorse?",
      description:
        "Initiating a project is simple: reach out to us through our website, fill out the 'Become Our Partner' form, or contact us directly to discuss your needs, and we'll guide you through our comprehensive consultation and project scoping process.",
    },
  ];

  return (
    <>
      <Banner
        title="frequently asked questions"
        description="Got Questions? We've Got Answers: Explore our Frequently Asked Questions to find insights and information about partnering with ITHorse. From our services and project management approach to technical capabilities and support, this section is designed to address your queries and clarify how we work to bring your digital aspirations to life. If you don't find what you're looking for, don't hesitate to reach out directly—we're here to help."
      />
      <div className="container flex flex-col gap-4 px-4 py-4 lg:py-12 lg:px-24 lg:gap-6 xl:px-64">
        {list.map((item, index) => (
          <Accordion key={index} {...item} />
        ))}
      </div>
    </>
  );
}
