import React from "react";

import FadeInOnScroll from "../Utils/FadeInOnScroll";

const Project = ({ img, title }) => {
  return (
    <>
      <FadeInOnScroll>
        <div className="h-64 cursor-pointer mt-20 ">
          <img
            src={img}
            alt="background"
            className="w-full h-full object-cover "
          />
          <p className="text-slate-200 text-md mt-4 py-2 md:text-base text-center">
            {title}
          </p>
        </div>
      </FadeInOnScroll>
    </>
  );
};

export default Project;
