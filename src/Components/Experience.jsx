import React from "react";
import { useState } from "react";
import arrow from "../Assets/images/icon_check.svg";
import Skills from "./Skills";

const Experience = () => {
  const baypointe = [
    "Manage hospital website hosting.",
    "Manage and add aditional feature to the hospital website.",
    "Create custom sql quiries for report purposes.",
    "Manage Database and Information System.",
  ];

  const giolosts = [
    "Learned and imrpoved my skills on ReactJS",
    "Created a website for the company.",
    "Familiarize Agile methodology.",
    "Worked with a team along with our Company presidents as our project manager",
  ];

  const [data, setData] = useState(giolosts);
  const [btn, SetBtn] = useState("giolosts");
  const [ojtName, setOjtName] = useState("Giolosts Technologies");
  const [ojtDate, setoOjtDate] = useState("March 2022 - June 2022");
  const [title, setTitle] = useState("WEB DEVELOPER (INTERN)");

  return (
    <section
      className="pt-25 pt-1/2 p-8 md:px-24 pt-60 xl:w-3/5 xl:m-auto lg:w-full"
      id="my_exp"
    >
      <h1 className="text-bmd py-3 text-gray-500 font-bold md:text-base">
        EXPERIENCE
      </h1>
      <hr className="border-gray-500 py-2" />

      <div className="flex">
        <button
          className={
            btn === "giolosts"
              ? "text-slate-300 px-10 border-b-4 border-gray-500"
              : "text-slate-500 px-10 "
          }
          onClick={() => {
            SetBtn("giolosts");
            setTitle("WEB DEVELOPER (INTERN)");
            setOjtName("Giolosts Technologies");
            setoOjtDate("March 2022 - June 2022");
            setData(giolosts);
          }}
        >
          GIOLOSTS TECH
        </button>
        <button
          onClick={() => {
            SetBtn("acemcb");
            setTitle("MIS PROGRAMMER");
            setOjtName("Allied Care Experts Medical Center - Baypointe");
            setoOjtDate("August 2022 - January 2023");
            setData(baypointe);
          }}
          className={
            btn === "acemcb"
              ? "text-slate-300 py-3 mr-4 border-b-4 border-gray-500"
              : "text-slate-500 py-3 mr-4 "
          }
        >
          ACEMCB
        </button>
      </div>

      <div>
        <p className="text-slate-200 text-md mt-4 py-2 md:text-base">{title}</p>
        <p className="text-slate-400 text-xs md:text-base">{ojtName}</p>
        <p className="text-slate-400 text-xs md:text-base pb-10">{ojtDate}</p>

        {data.map((skill, i) => {
          return (
            <div key={i}>
              <Skills icon={arrow} text={skill} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
