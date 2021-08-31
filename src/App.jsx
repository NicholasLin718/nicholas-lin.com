import Navbar from "./components/navbar/Navbar";
import Aboutme from "./components/aboutme/Aboutme";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import AboutMeSlider from "./components/aboutme/AboutMeSlider";
import Intro from "./components/intro/Intro";
import "./app.scss";
// import Menu from "./components/menu/Menu";

function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="sections">
        <Intro/>
        <AboutMeSlider/>
        <Aboutme/>
        <Experience/>
        <Projects/>
      </div>
    </div>
  );
}

export default App;
