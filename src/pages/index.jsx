import React from "react";

import HomeAbout from "@/components/Home/HomeAbout";
import HomeHero from "@/components/Home/HomeHero";
import HomeSkills from "@/components/Home/HomeSkills";
import HomeSolutions from "@/components/Home/HomeSolutions";
import HomeStatistics from "@/components/Home/HomeStatistics";
import HomeTechnologies from "@/components/Home/HomeTechnologies";
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
