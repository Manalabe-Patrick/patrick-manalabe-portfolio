import React from "react";

import resume from "../Assets/files/manalabe_resume.pdf";

export const Navbar = ({ jump }) => {
  const openResume = () => {
    // const pdfUrl = "path/to/your/pdf.pdf";
    window.open(resume, "_blank");
  };

  return (
    <>
      <nav className="fixed  top-0 left-0 bg-slate-800 w-full shadow-md z-10">
        <div className="container m-auto flex justify-between items-center">
          <h1 className="pl-8 py-5 text-xl text-rose-600 font-bold">PPORT</h1>
          <ul className="hidden md:flex items-center pr-10 text-base cursor-pointer">
            <li
              className="py-4 px-6 text-slate-300 text-xs"
              onClick={() =>
                document.getElementById("about_me").scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              ME
            </li>
            <li
              className="py-4 px-6 text-slate-300 text-xs"
              onClick={() =>
                document.getElementById("my_skills").scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              SKILLS
            </li>
            <li
              className="py-4 px-6 text-slate-300 text-xs"
              onClick={() =>
                document.getElementById("my_exp").scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              EXPERIENCE
            </li>
            <li
              className="py-4 px-6 text-slate-300 text-xs"
              onClick={() =>
                document.getElementById("projects").scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              PROJECTS
            </li>
            <li>
              <button
                className="py-2 px-12 text-slate-100 text-xs bg-rose-700 rounded-full glow-resume"
                onClick={openResume}
              >
                RESUME
              </button>
            </li>
          </ul>
          <button className="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none group">
            <div className="w-5 h-1 bg-slate-100 mb-1"></div>
            <div className="w-5 h-1 bg-slate-100 mb-1"></div>
            <div className="w-5 h-1 bg-slate-100 mb-1"></div>
            <div className="absolute top-1 -right-full h-screen w-8/12 bg-slate-700 opacity-0 group-focus:right-1 group-focus:opacity-100 transition-all duration-300">
              <ul className="flex flex-col items-center w-full text-base cursor-pointer pt-10">
                <li
                  className="py-8 px-6 w-full text-slate-300 text-xs"
                  onClick={() =>
                    document.getElementById("about_me").scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  ABOUT ME
                </li>
                <li
                  className="py-8 px-6 w-full text-slate-300 text-xs"
                  onClick={() =>
                    document.getElementById("my_skills").scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  SKILLS
                </li>
                <li
                  className="py-8 px-6 w-full text-slate-300 text-xs"
                  onClick={() =>
                    document.getElementById("my_exp").scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  EXPERIENCE
                </li>
                <li
                  className="py-8 px-6 w-full text-slate-300 text-xs"
                  onClick={() =>
                    document.getElementById("projects").scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  PROJECTS
                </li>
                <li>
                  <p
                    className="py-2 px-12 text-slate-700 text-xs rounded-full"
                    style={{ background: "#d1d5db" }}
                    onClick={openResume}
                  >
                    RESUME
                  </p>
                </li>
              </ul>
            </div>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
