import React from "react";
import { useState } from "react";

//utils
import FadeInOnScroll from "../Utils/FadeInOnScroll";
import TypingText from "../Utils/TypingText";
import Dailog from "./Dialog";

const AboutMe = ({ facebook, link, insta, github, TogaPic }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {isOpen && <Dailog close={() => setIsOpen(false)} />}

      <section
        className="pt-30 pt-1/2 p-8 content md:px-24 xl:w-3/5 xl:m-auto"
        id="about_me"
      >
        <FadeInOnScroll>
          <p className="text-slate-400 text-sm text-center">Hi, my name is</p>

          <TypingText
            text="PATRICK MANALABE"
            className={
              "text-3xl py-10 text-rose-600 font-bold md:text-4xl lg:text-6xl text-center"
            }
          />
          <p className="text-slate-300 pb-4 lg:text-3xl text-center">
            I am a full-stack web developer with a passion for coding and design
          </p>
          <div>
            <button
              className="py-4 px-10 text-slate-100 text-xs  rounded-full glow-resume block m-auto mt-10"
              onClick={() => setIsOpen(true)}
            >
              CONTACT ME
            </button>
          </div>
        </FadeInOnScroll>
      </section>

      <section className="pt-30 pt-1/2 p-8 md:px-24 pt-60 xl:w-3/5 xl:m-auto lg:w-full">
        <div className="lg:flex">
          <FadeInOnScroll>
            <div className="lg:pr-20">
              <h1 className="text-bmd py-3 text-gray-500 font-bold md:text-base">
                ABOUT ME
              </h1>
              <hr className="border-gray-500 py-2" />
              <p className="text-slate-400 text-sm  py-2 md:text-base">
                Hello! My name is
                <span className="text-slate-100"> Patrick Manalabe</span> , I
                graduated
                <span className="text-slate-100 ml-1">
                  Bachelor of Science in Computer Science at Gordon College.
                </span>
                .
              </p>
              <p className="text-slate-400 text-sm  py-2 md:text-base">
                I develop user-friendly websites and web applications that
                engage and delight users. I am well-versed in a variety of
                programming languages and frameworks such as
                <span className="text-slate-100 ml-1">
                  HTML, CSS, JavaScript, NodeJS, ReactJS, AngularJS, C#,
                  Bootstrap, Tailwind.
                </span>
              </p>
              <p className="text-slate-400 text-sm  py-2 md:text-base">
                I also developed
                <span className="text-slate-100 ml-1">REST API</span>
                <span className="text-slate-100 ml-1">MVC model. </span>I am
                very familiar on developing websites or web application using
                <span className="text-slate-100 ml-1">
                  MEAN and MERN stack.
                </span>
              </p>
              <p className="text-slate-400 text-sm  py-1 md:text-base">
                I am looking forward to working with others and use my skills in
                programming to the next level.
              </p>
              <div className="flex gap-5">
                <img
                  src={facebook}
                  alt="facebook icon"
                  className="w-7 py-5 cursor-pointer"
                  onClick={() => {
                    window.open(
                      "https://www.facebook.com/patrick.manalabe.775",
                      "_blank"
                    );
                  }}
                />

                <img
                  src={link}
                  alt="linkedin icon"
                  className="w-7 py-5 cursor-pointer"
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/in/patrick-manalabe-8130b6244/",
                      "_blank"
                    );
                  }}
                />
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
