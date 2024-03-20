import React from "react";

import Accordion from "@/components/common/Accordion";
import Banner from "@/components/common/banner";

export default function FaqPage() {
  const list = [
    {
      title:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, reiciendis.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quod corrupti aut libero porro soluta, voluptatibus numquam optio harum facilis. Accusamus natus ipsa officiis recusandae vitae nisi vel, omnis ullam nulla obcaecati nobis enim fuga repellat, temporibus consectetur in beatae perspiciatis mollitia aut, quia esse. Illo nostrum facilis voluptate dolor.",
    },
    {
      title:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, reiciendis.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quod corrupti aut libero porro soluta, voluptatibus numquam optio harum facilis. Accusamus natus ipsa officiis recusandae vitae nisi vel, omnis ullam nulla obcaecati nobis enim fuga repellat, temporibus consectetur in beatae perspiciatis mollitia aut, quia esse. Illo nostrum facilis voluptate dolor.",
    },
    {
      title:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, reiciendis.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quod corrupti aut libero porro soluta, voluptatibus numquam optio harum facilis. Accusamus natus ipsa officiis recusandae vitae nisi vel, omnis ullam nulla obcaecati nobis enim fuga repellat, temporibus consectetur in beatae perspiciatis mollitia aut, quia esse. Illo nostrum facilis voluptate dolor.",
    },
    {
      title:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, reiciendis.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quod corrupti aut libero porro soluta, voluptatibus numquam optio harum facilis. Accusamus natus ipsa officiis recusandae vitae nisi vel, omnis ullam nulla obcaecati nobis enim fuga repellat, temporibus consectetur in beatae perspiciatis mollitia aut, quia esse. Illo nostrum facilis voluptate dolor.",
    },
    {
      title:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, reiciendis.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quod corrupti aut libero porro soluta, voluptatibus numquam optio harum facilis. Accusamus natus ipsa officiis recusandae vitae nisi vel, omnis ullam nulla obcaecati nobis enim fuga repellat, temporibus consectetur in beatae perspiciatis mollitia aut, quia esse. Illo nostrum facilis voluptate dolor.",
    },
    {
      title:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, reiciendis.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quod corrupti aut libero porro soluta, voluptatibus numquam optio harum facilis. Accusamus natus ipsa officiis recusandae vitae nisi vel, omnis ullam nulla obcaecati nobis enim fuga repellat, temporibus consectetur in beatae perspiciatis mollitia aut, quia esse. Illo nostrum facilis voluptate dolor.",
    },
    {
      title:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, reiciendis.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quod corrupti aut libero porro soluta, voluptatibus numquam optio harum facilis. Accusamus natus ipsa officiis recusandae vitae nisi vel, omnis ullam nulla obcaecati nobis enim fuga repellat, temporibus consectetur in beatae perspiciatis mollitia aut, quia esse. Illo nostrum facilis voluptate dolor.",
    },
  ];

  return (
    <>
      <Banner
        title="frequently asked questions"
        description="Is mission has always been to organize the world's information and make it universally accessible and useful."
      />
      <div className="container flex flex-col gap-4 px-4 py-4 lg:py-12 lg:px-24 lg:gap-6 xl:px-64">
        {list.map((item, index) => (
          <Accordion key={index} {...item} />
        ))}
      </div>
    </>
  );
}
