import React, {useState}  from 'react';
import './navbar.scss';

export default function Navbar(){
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick (false);
    const [navbar,setNavbar] = useState(false);

    const changeNavBackground = () => {
        if(window.scrollY >= 80){
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeNavBackground);
    return (
        <nav className= {navbar ? 'navbar active' : 'navbar'}>
        <div className="max-width">
            <div className="logo"><a href="#home">[NL]</a></div>
            <ul className={click ? "menu-active" : "menu"} >
                <li><a href="#home" onClick={closeMobileMenu}>Home</a></li>
                <li><a href="#aboutme" onClick={closeMobileMenu}>About</a></li>
                <li><a href="#experience" onClick={closeMobileMenu}>Experiences</a></li>
                <li><a href="#projects" onClick={closeMobileMenu}>Project Portfolio</a></li>
            </ul>
            <div className = "menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
        </div>
    </nav>
)
}