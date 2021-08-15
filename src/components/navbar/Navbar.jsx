import './navbar.scss';
// import {Phone, Mail} from "@material-ui/icons";

export default function Navbar({menuOpen, setMenuOpen}) {
    return (
        <nav className= {"navbar " + (menuOpen && "active")}>
            <div className="max-width">
                <div className="logo"><a href="#home">[NL]</a></div>
                <ul className="menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#aboutme">About</a></li>
                    <li><a href="#experience">Experiences</a></li>
                    <li><a href="#projects">Project Portfolio</a></li>
                </ul>
                <div className={"hamburger " + (menuOpen && "active")} onClick={()=>setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
        </nav>
    )
}

// export default function Navbar({menuOpen, setMenuOpen}) {
//     return (
//         <div className = {"navbar " + (menuOpen && "active")}>
//             <div className="wrapper">
//                 <div className="left">
//                     <a href="#intro" className="logo">[NL]</a>
//                     {/* <div className="itemContainer">
//                         <Phone className="icon"/>
//                         <span>(647)-878-6886</span>
//                     </div>
//                     <div className="itemContainer">
//                         <Mail className="icon"/>
//                         <span>nlin311@gmail.com</span>
//                     </div> */}
//                 </div>
//                 <div className="right">
//                     <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
//                         <span className="line1"></span>
//                         <span className="line2"></span>
//                         <span className="line3"></span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }