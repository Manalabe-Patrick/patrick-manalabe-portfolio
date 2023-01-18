import "./App.css";

//importimages
import TogaPic from "./Assets/images/TOGA_PIC.jpg";
import facebook from "./Assets/images/icon_facebook.svg";
import link from "./Assets/images/icon_link.svg";
import insta from "./Assets/images/icon_insta.svg";
import github from "./Assets/images/icon_github.svg";

//components
import Navbar from "./Components/Navbar";

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
            <button className="py-4 px-12 text-slate-100 text-xs bg-rose-700 rounded-full glow-resume header_btn">
              RESUME
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
                My attention to detail and commitment to quality ensure that my
                projects are not only visually pleasing but also
                <span className="text-slate-100 ml-1">
                  functional, responsive and accessible
                </span>
                . My role in my previours projects is the
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
      </div>
    </div>
  );
}

export default App;
