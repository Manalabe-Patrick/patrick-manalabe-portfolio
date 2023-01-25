import React from "react";

import FadeInOnScroll from "../Utils/FadeInOnScroll";

export const Skills = ({ icon, text }) => {
  return (
    <div className="flex">
      <FadeInOnScroll>
        <img src={icon} alt="arrow icon" className="w-5" />
        <p className="text-slate-400 text-sm  py-2 md:text-base ml-10">
          {text}
        </p>
      </FadeInOnScroll>
    </div>
  );
};

export default Skills;
