import React, {useState}  from 'react';
import './navbar.scss';

export default function Navbar(){
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick (false);
    const [navbar,setNavbar] = useState(false);
    const [navbarInvis,setNavbarInvis] = useState(false);
    const [home,setHome] = useState(false);
    const [about,setAbout] = useState(false);
    const [experience,setExperience] = useState(false);
    const [project,setProject] = useState(false);
    const changeNavBackground = () => {
        if(window.scrollY >= 80 && window.scrollY < 500 && click === false){
            setNavbar(false);
            setNavbarInvis(true);
        }
        else if(window.scrollY >= 500){
            setNavbar(true);
            setNavbarInvis(false);
        }
        else{
            setNavbar(false);
            setNavbarInvis(false);
        }
    };

    const changeListColour = () => {
        if(window.scrollY < 500){
            setHome(true);
            setAbout(false);
            setExperience(false);
            setProject(false);
        }
        else if(window.scrollY >= 500 && window.scrollY <= 950){
            setHome(false);
            setAbout(true);
            setExperience(false);
            setProject(false);
        }
        else if(window.scrollY > 950 && window.scrollY <= 3100){
            setHome(false);
            setAbout(false);
            setExperience(true);
            setProject(false);
        }
        else if(window.scrollY > 3100 && window.scrollY <= 5000){
            setHome(false);
            setAbout(false);
            setExperience(false);
            setProject(true);
        }
        else{
            setHome(false);
            setAbout(false);
            setExperience(false);
            setProject(false);
        }
    }

    window.addEventListener('scroll', changeNavBackground);
    window.addEventListener('scroll', changeListColour);

    var navbarStatus = '';
    if(navbar){
        navbarStatus = "navbar active";
    }
    else if(navbarInvis){
        navbarStatus = "navbar invis";
    }
    else{
        navbarStatus = "navbar"
    }

    return (
        <nav className= {navbarStatus}>
            <div className="max-width">
                <div className="logo"><a href="#home">[NL]</a></div>
                <ul className={click ? "mobile-menu" : "menu"} > 
                    <li className = {home ? "current" : "HOME"}><a href="#home" data-hover= "Home" onClick={closeMobileMenu}>Home</a></li>
                    <li className = {about ? "current" : "ABOUT"}><a href="#about-me" data-hover= "About" onClick={closeMobileMenu}>About</a></li>
                    <li className = {experience ? "current" : "EXP"}><a href="#experience" data-hover= "Experience" onClick={closeMobileMenu}>Experiences</a></li>
                    <li className= {project ? "current" : "PROJ"}><a href="#projects" data-hover= "Projects" onClick={closeMobileMenu}>Projects</a></li>
                </ul>
                <div className = "menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </div>
        </nav>

    )
}