import "./App.css";

//images
import TogaPic from "./Assets/images/TOGA_PIC.jpg";
import facebook from "./Assets/images/icon_facebook.svg";
import link from "./Assets/images/icon_link.svg";
import insta from "./Assets/images/icon_insta.svg";
import github from "./Assets/images/icon_github.svg";

//components
import Navbar from "./Components/Navbar";
import AboutMe from "./Components/AboutMe";
import MySkills from "./Components/MySkills";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import ContactMe from "./Components/ContactMe";

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
        <Experience />
        <Projects />
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
