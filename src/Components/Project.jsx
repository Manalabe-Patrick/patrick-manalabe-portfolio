import React from "react";

import FadeInOnScroll from "../Utils/FadeInOnScroll";

const Project = ({ img, title }) => {
  return (
    <>
      <FadeInOnScroll>
        <section className="md:w-96 bg-slate-400 h-64 rounded-md mt-20">
          <img
            src={img}
            className="w-full h-full object-cover rounded-md"
            alt={"bg img"}
          />
          <h1 className="text-bmd py-3 text-rose-600 font-bold md:text-base text-center">
            {title}
          </h1>
        </section>

        {/* <div className="h-64 cursor-pointer mt-20">
          <img
            src={img}
            alt="background"
            className="w-full h-full object-cover "
          />
          <p className="text-slate-200 text-md mt-4 py-2 md:text-base text-center">
            {title}
          </p>
        </div> */}
      </FadeInOnScroll>
    </>
  );
};

export default Project;
