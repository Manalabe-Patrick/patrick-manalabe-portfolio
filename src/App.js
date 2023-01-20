import "./App.css";

//images
import TogaPic from "./Assets/images/TOGA_PIC.jpg";
import facebook from "./Assets/images/icon_facebook.svg";
import link from "./Assets/images/icon_link.svg";
import insta from "./Assets/images/icon_insta.svg";
import github from "./Assets/images/icon_github.svg";
import htmlIcon from "./Assets/images/icon_html.svg";
import cssIcon from "./Assets/images/icon_css.svg";
import tailwind from "./Assets/images/icon_tailwind.svg";
import bootstrap from "./Assets/images/icon_bootstrap.svg";
import javascript from "./Assets/images/icon_javascript.svg";
import typescript from "./Assets/images/icon_typescript.svg";
import reactIcon from "./Assets/images/icon_react.svg";
import angularIcon from "./Assets/images/icon_angular.svg";
import githubIcon from "./Assets/images/icon_github.svg";
import figma from "./Assets/images/icon_figma.svg";
import cSharp from "./Assets/images/icon_csharp.svg";
import phpIcon from "./Assets/images/icon_php.svg";
import sqlserver from "./Assets/images/icon_sqlserver.svg";
import mongodb from "./Assets/images/icon_mongo.svg";
import mysql from "./Assets/images/icon_mysql.svg";
import arrow from "./Assets/images/icon_arrow.svg";
import nodeIcon from "./Assets/images/icon_node.svg";

//components
import Navbar from "./Components/Navbar";
import Tools from "./Components/Tools";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="App">
      <div className="w-100 h-100 bg-slate-800">
        <Navbar />
        <section className="pt-30 pt-1/2 p-8 content md:px-24 xl:w-3/5 xl:m-auto">
          <p className="text-slate-400 text-sm">Hi, my name is</p>
          <h1 className="text-3xl py-5 text-rose-600 font-bold md:text-4xl lg:text-6xl">
            PATRICK MANALABE
          </h1>
          <p className="text-slate-300 pb-4 lg:text-3xl">
            I am a full-stack Web developer with a passion for coding and design
          </p>
          <div>
            <button className="my-5 mr-5 py-4 px-12 text-slate-100 text-xs bg-rose-700 rounded-full glow-resume header_btn">
              RESUME
            </button>
            <button className="py-4 px-12 text-slate-100 text-xs bg-rose-700 rounded-full glow-resume ">
              CONTACT ME
            </button>
          </div>
        </section>
        <section className="pt-30 pt-1/2 p-8 md:px-24 pt-60 xl:w-3/5 xl:m-auto lg:w-full">
          <div className="lg:flex">
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

            <div className="p-10">
              <img
                src={TogaPic}
                className="toga-pic rounded-md"
                alt="toga pic"
              />
            </div>
          </div>
        </section>
        <section className="pt-30 pt-1/2 p-8 md:px-24 pt-60 xl:w-3/5 xl:m-auto lg:w-full">
          <h1 className="text-bmd py-3 text-rose-600 font-bold md:text-base">
            MY SKILLS
          </h1>
          <hr className="border-rose-600 py-2" />
          <p className="text-slate-300 text-sm  py-2 md:text-base pb-10">
            Porgamming Languages, tools, and frameworks:
          </p>

          <div className="flex justify-between flex-wrap">
            <Tools icon={htmlIcon} text={"HTML"} />
            <Tools icon={cssIcon} text={"CSS"} />
            <Tools icon={tailwind} text={"TAILWIND"} />
            <Tools icon={bootstrap} text={"BOOTSTRAP"} />
            <Tools icon={javascript} text={"JAVASCRIPT"} />
            <Tools icon={typescript} text={"TYPESCRIPT"} />
            <Tools icon={nodeIcon} text={"NODE JS"} />
            <Tools icon={reactIcon} text={"REACT JS"} />
            <Tools icon={angularIcon} text={"ANGULAR JS"} />
            <Tools icon={githubIcon} text={"GITHUB"} />
            <Tools icon={figma} text={"FIGMA"} />
            <Tools icon={cSharp} text={"C#"} />
            <Tools icon={phpIcon} text={"PHP"} />
            <Tools icon={mysql} text={"MYSQL"} />
            <Tools icon={mongodb} text={"MONGO DB"} />
            <Tools icon={sqlserver} text={"SQL SERVER"} />
          </div>

          <p className="text-slate-300 text-sm  py-2 md:text-base py-10">
            Development:
          </p>

          <Skills
            icon={arrow}
            text="Proficiency on different programming languages."
          />
          <Skills
            icon={arrow}
            text="Knowledge of web development frameworks and libraries. Proficiency on different programming languages."
          />
          <Skills icon={arrow} text="Familiarity with web development tools." />
          <Skills icon={arrow} text="REST api, MERN stack and MEAN stack" />
          <Skills
            icon={arrow}
            text="Can write clean, well-organized, and maintainable code."
          />
          <Skills
            icon={arrow}
            text="Familiarity with Agile development methodologies and practices."
          />
          <Skills
            icon={arrow}
            text="Strong problem-solving and debugging skills."
          />
          <Skills
            icon={arrow}
            text="Experience with database management, SQL and No-SQL."
          />
        </section>
      </div>
    </div>
  );
}

export default App;
