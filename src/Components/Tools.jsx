import React from "react";

import FadeInOnScroll from "../Utils/FadeInOnScroll";

export const Tools = ({ icon, text }) => {
  return (
    <div className="w-1/4 py-3 lg:w-1/4 ">
      <FadeInOnScroll>
        <img src={icon} alt="icon" className="w-12 m-auto" />
        {/* <p className="text-slate-400 text-xs  py-2 md:text-base text-center">
          {text}
        </p> */}
      </FadeInOnScroll>
    </div>
  );
};

export default Tools;
