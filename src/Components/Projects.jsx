import React from "react";

import Project from "./Project";

import giolostsImg from "../Assets/images/giolosts_1.png";
import myPort from "../Assets/images/my_portfolio.png";
import expenseTracker from "../Assets/images/expence_tracker.png";
import gcap from "../Assets/images/gcap.png";
import acemcb from "../Assets/images/acemcb.png";

const Projects = () => {
  return (
    <div>
      <section className="pt-25 pt-1/2 p-8 md:px-24 pt-60 xl:w-3/5 xl:m-auto lg:w-full">
        <h1 className="text-bmd py-3 text-rose-600 font-bold md:text-base">
          Sample Projects
        </h1>
        <hr className="border-rose-600 py-2" />

        <div className="block md:flex justify-between">
          <Project img={giolostsImg} title={"GIOLOSTS WEBSITE"} />
          <Project img={myPort} title={"THIS PORTFOLIO"} />
        </div>

        <div className="block md:flex justify-between">
          <Project img={expenseTracker} title={"EXPENSE TRACKER"} />
          <Project img={gcap} title={"GORDON COLLEGE ALUMNI PORTAL"} />
        </div>

        <div className="block md:flex justify-between">
          <Project img={acemcb} title={"ADDED FEATURES FOR ACEMCB WEBSITE "} />
        </div>
      </section>
    </div>
  );
};

export default Projects;
