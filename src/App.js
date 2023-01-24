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
import AboutMe from "./Components/AboutMe";

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

        <section className="pt-25 pt-1/2 p-8 md:px-24 pt-60 xl:w-3/5 xl:m-auto lg:w-full">
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
