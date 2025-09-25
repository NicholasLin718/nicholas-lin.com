import React, { Component } from 'react';
import "./footer.scss";
class Footer extends Component {
  render() {
    return (
    <footer>
     <div style = {{marginTop: "-16px", color: "white", fontFamily: "Open Sans, sans-serif", fontSize: "11px", fontStyle: "italic"}}>Bring me back up!</div>
     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
               <li><a href="mailto:n39lin@uwaterloo.ca" target="_blank" rel="noreferrer"><i className ='fas fa-envelope' style = {{color: 'white'}}></i></a></li>
               <li><a href = "https://github.com/NicholasLin718" target="_blank" rel="noreferrer"><i className ="fab fa-github" style = {{color: 'white'}}></i></a></li>
               <li><a href = "https://www.linkedin.com/in/nicholas-lin-87368a20b/" target="_blank" rel="noreferrer"><i className ="fab fa-linkedin" style = {{color: 'white'}}></i></a></li>
               {/* <li><a href={resume} target="_blank"><i className="fas fa-file" id = "home-icons" style = {{color: 'white'}}/></a></li> */}
           </ul>
           <div style = {{color: "white", fontFamily: "Open Sans, sans-serif"}}>n39lin@uwaterloo.ca | Nicholas Lin © 2021</div>
        </div>
     </div>
    </footer>
    );
  }
}

export default Footer;