import './navbar.scss';
// import {Phone, Mail} from "@material-ui/icons";

function Navbar() {
    return (
        <div className="navbar" id = "navbar">
            <div class="logo"><a href="#intro">[NL]</a></div>
            <ul class="menu">
                <li><a href="#intro">Home</a></li>
                <li><a href="#aboutme">About</a></li>
                <li><a href="#experience">Experiences</a></li>
                <li><a href="#projects">Project Portfolio</a></li>
            </ul>
        </div>
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
export default Navbar