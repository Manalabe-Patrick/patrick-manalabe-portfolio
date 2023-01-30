import React from "react";

import Project from "./Project";

import giolostsImg from "../Assets/images/giolosts_1.png";
import myPort from "../Assets/images/my_portfolio.png";
import expenseTracker from "../Assets/images/expence_tracker.png";
import gcap from "../Assets/images/gcap.png";
import acemcb from "../Assets/images/acemcb.png";

const Projects = () => {
  return (
    <section
      className="pt-30 pt-1/2 p-8 content md:px-24 xl:w-3/5 xl:m-auto"
      id="projects"
    >
      <h1 className="text-bmd py-3 text-rose-600 font-bold md:text-base">
        Sample Projects
      </h1>
      <hr className="text-slate-100  py-2" />
      <div className=" md:flex md:justify-around ">
        <Project img={expenseTracker} title={"Expense Tracker"} />
        <Project img={myPort} title={"This Portfolio"} />
      </div>
      <div className=" md:flex md:justify-around mt-20">
        <Project img={giolostsImg} title={"Giolosts Website"} />
        <Project img={acemcb} title={"ACEMCB website features update"} />
      </div>
      <div className=" md:flex md:justify-around mt-20">
        <Project img={gcap} title={"Gordon college Alumni Portal"} />
      </div>

      {/* <section className="pt-25 pt-1/2 p-8 md:px-24 pt-60 xl:w-3/5 xl:m-auto lg:w-1/2">
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
      </section> */}
    </section>
  );
};

export default Projects;
