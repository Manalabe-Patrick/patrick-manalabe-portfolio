import React from "react";

import FadeInOnScroll from "../Utils/FadeInOnScroll";
import TypingText from "../Utils/TypingText";

const ContactMe = () => {
  return (
    <div>
      <section className="pt-25 pt-1/2 p-8 md:px-24 pt-60 xl:w-3/5 xl:m-auto lg:w-full">
        <FadeInOnScroll>
          <TypingText
            text="GET IN TOUCH"
            className={"text-4xl py-10 text-rose-600 font-bold text-center"}
          />
          <div>
            <button
              className="py-4 px-10 text-slate-100 text-xs  rounded-full glow-resume block m-auto"
              onClick={() =>
                document.getElementById("about_me").scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              CLICK HERE
            </button>
          </div>
        </FadeInOnScroll>
      </section>
    </div>
  );
};

export default ContactMe;
