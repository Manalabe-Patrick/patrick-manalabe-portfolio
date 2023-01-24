import React from "react";

export const Skills = ({ icon, text }) => {
  return (
    <div className="flex">
      <img src={icon} alt="arrow icon" className="w-5" />
      <p className="text-slate-400 text-sm  py-2 md:text-base ml-10">{text}</p>
    </div>
  );
};

export default Skills;
