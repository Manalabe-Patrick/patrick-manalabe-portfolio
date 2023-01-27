import React from "react";

import facebook from "../Assets/images/icon_facebook.svg";
import link from "../Assets/images/icon_link.svg";
import FadeInOnScroll from "../Utils/FadeInOnScroll";

import TypingText from "../Utils/TypingText";

const Dailog = ({ close }) => {
  return (
    <div>
      <div className="w-full h-full fixed top-0 left-0 bg-black z-20 opacity-50 "></div>
      <div className="flex justify-center">
        <div className=" md:w-2/5 h-2/5 bg-white fixed z-30 mt-48 rounded-xl w-full ">
          <button
            className="block float-right mr-5 mt-2 font-bold text-gray-600"
            onClick={close}
          >
            X
          </button>

          <TypingText
            text="Reach me at"
            className={
              "text-3xl py-10 text-rose-600 font-bold md:text-3xl lg:text-4xl text-center"
            }
          />

          <FadeInOnScroll>
            <div className="w-2/3 h-28 bg-gray-600 m-auto rounded-xl flex justify-around">
              <img
                src={facebook}
                alt="facebook icon"
                className="w-full py-5 cursor-pointer"
                onClick={() => {
                  window.open(
                    "https://www.facebook.com/patrick.manalabe.775",
                    "_blank"
                  );
                }}
              />
              <img
                src={link}
                alt="facebook icon"
                className="w-full py-5 cursor-pointer"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/patrick-manalabe-8130b6244/",
                    "_blank"
                  );
                }}
              />
            </div>
          </FadeInOnScroll>
          <p className="text-center font-bold text-slate-500 my-5">or at</p>

          <p className="text-center  text-slate-100 bg-gray-600 py-10">
            manalabepatrick@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dailog;
