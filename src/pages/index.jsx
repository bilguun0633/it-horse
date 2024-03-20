import React from "react";
import HomeHero from "@/components/Home/HomeHero";
import HomeAbout from "@/components/Home/HomeAbout";
import HomeStatistics from "@/components/Home/HomeStatistics";
import HomeSolutions from "@/components/Home/HomeSolutions";
import HomeTechnologies from "@/components/Home/HomeTechnologies";
import HomeSkills from "@/components/Home/HomeSkills";
import Partner from "@/components/common/partner";

export default function index() {
  return (
    <div>
      {/* index */}
      <HomeHero />
      <HomeAbout />
      <HomeStatistics />
      <HomeSolutions />
      <HomeTechnologies />
      <HomeSkills />
      <Partner />
    </div>
  );
}
