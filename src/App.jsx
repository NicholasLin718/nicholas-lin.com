import Navbar from "./components/navbar/Navbar";
import Aboutme from "./components/aboutme/Aboutme";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import Intro from "./components/intro/Intro";
import "./app.scss";
import {useState} from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Navbar/>
      {/* <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> */}
      <div className="sections">
        <Intro/>
        <Aboutme/>
        <Experience/>
        <Projects/>
      </div>
    </div>
  );
}

export default App;
