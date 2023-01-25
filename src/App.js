import "./App.css";

//images
import TogaPic from "./Assets/images/TOGA_PIC.jpg";
import facebook from "./Assets/images/icon_facebook.svg";
import link from "./Assets/images/icon_link.svg";
import insta from "./Assets/images/icon_insta.svg";
import github from "./Assets/images/icon_github.svg";
import arrow from "./Assets/images/icon_arrow.svg";

//components
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import AboutMe from "./Components/AboutMe";
import MySkills from "./Components/MySkills";

function App() {
  return (
    <div className="App">
      <div className="w-100 h-100 bg-slate-800">
        <Navbar />

        <AboutMe
          TogaPic={TogaPic}
          facebook={facebook}
          link={link}
          insta={insta}
          github={github}
        />

        <MySkills />

        <section className="pt-25 pt-1/2 p-8 md:px-24 pt-60 xl:w-3/5 xl:m-auto lg:w-full">
          <h1 className="text-bmd py-3 text-rose-600 font-bold md:text-base">
            EDUCATION
          </h1>
          <hr className="border-rose-600 py-2" />

          <div className="flex">
            <button className="text-slate-300 py-3 border-b-4 border-rose-600">
              ACEMCB
            </button>
            <button className="text-slate-500 px-10 ">GIOLOSTS TECH</button>
          </div>

          <div>
            <p className="text-slate-200 text-md  py-2 md:text-base">
              MIS Programmer / Web developer
            </p>
            <p className="text-slate-400 text-xs md:text-base pb-10">
              August 2022 - Present
            </p>
            <Skills icon={arrow} text="Manage hospital website hosting." />
            <Skills
              icon={arrow}
              text="Updated and improved their official website."
            />
            <Skills
              icon={arrow}
              text="Create custom sql quiries for report purposes."
            />
            <Skills
              icon={arrow}
              text="Manage Database and Information System."
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
