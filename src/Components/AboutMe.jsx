import React from "react";

//utils
import FadeInOnScroll from "../Utils/FadeInOnScroll";
import TypingText from "../Utils/TypingText";

const AboutMe = ({ facebook, link, insta, github, TogaPic }) => {
  return (
    <div>
      <section className="pt-30 pt-1/2 p-8 content md:px-24 xl:w-3/5 xl:m-auto">
        <FadeInOnScroll>
          <p className="text-slate-400 text-sm">Hi, my name is</p>

          <TypingText
            text="PATRICK MANALABE"
            className={
              "text-3xl py-5 text-rose-600 font-bold md:text-4xl lg:text-6xl"
            }
          />
          <p className="text-slate-300 pb-4 lg:text-3xl">
            I am a full-stack Web developer with a passion for coding and design
          </p>
          <div>
            <button className="my-5 mr-5 py-4 px-12 text-slate-100 text-xs bg-rose-700 rounded-full glow-resume header_btn">
              RESUME
            </button>
            <button className="py-4 px-10 text-slate-100 text-xs bg-rose-700 rounded-full glow-resume ">
              CONTACT ME
            </button>
          </div>
        </FadeInOnScroll>
      </section>

      <section className="pt-25 pt-1/2 p-8 md:px-24 pt-60 xl:w-3/5 xl:m-auto lg:w-full">
        <div className="lg:flex">
          <FadeInOnScroll>
            <div className="lg:pr-20">
              <h1 className="text-bmd py-3 text-rose-600 font-bold md:text-base">
                ABOUT ME
              </h1>
              <hr className="border-rose-600 py-2" />
              <p className="text-slate-400 text-sm  py-2 md:text-base">
                Hello! My name is
                <span className="text-slate-100"> Patrick Manalabe</span> , I
                graduated
                <span className="text-slate-100 ml-1">
                  Bachelor of Science in Computer Science at Gordon College
                </span>
                .
              </p>
              <p className="text-slate-400 text-sm  py-2 md:text-base">
                I create user-friendly websites and web applicationse that
                engage and delight users. I am well-versed in a variety of
                programming languages and frameworks, including but not limited
                to
                <span className="text-slate-100 ml-1">
                  HTML, CSS, JavaScript, ReactJS, AngularJS, C#, Bootstrap,
                  Tailwind.
                </span>
              </p>
              <p className="text-slate-400 text-sm  py-2 md:text-base">
                I also exprienced creating
                <span className="text-slate-100 ml-1">REST API</span> using
                <span className="text-slate-100 ml-1">MVC model </span>
                on our projects using MEAN and MERN stack. My role in my
                previours projects is the
                <span className="text-slate-100 ml-1">developer</span> , I
                experienced creating responsive web designs and computer systems
                during my college that work seamlessly across different
                platforms and devices.
              </p>
              <p className="text-slate-400 text-sm  py-1 md:text-base">
                I am looking forward to working with others and use my skills in
                programming to the next level.
              </p>
              <div className="flex gap-5">
                <img src={facebook} alt="facebook icon" className="w-7 py-5" />
                <img src={link} alt="linkedin icon" className="w-7 py-5" />
                <img src={insta} alt="isntagram icon" className="w-7 py-5" />
                <img src={github} alt="github icon" className="w-7 py-5" />
              </div>
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <div className="p-10">
              <img
                src={TogaPic}
                className="toga-pic rounded-md"
                alt="toga pic"
              />
            </div>
          </FadeInOnScroll>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
