import React from 'react';
import "./intro.scss";
import backgroundvid from "./nightskyshort1.mp4";
import backgroundImage from "./backgroundWebsite.png";
import Typist from "react-typist";

export default function Intro({ onVideoLoad }) {
    return (
        <div className="intro" id="intro">
            {/* <img src={backgroundImage} alt=""
                style={
                    {
                        // position: "fixed",
                        position: "absolute",
                        width:"100%",
                        left: "50%",
                        top:"50%",
                        height: "100%",
                        objectFit: 'cover',
                        transform: "translate(-50%, -50%)",
                        zIndex: "0"
                    }
                }
            /> */}
            <video onCanPlayThrough={onVideoLoad} autoPlay loop muted alt={backgroundImage}
                style={
                    {
                        // position: "fixed",
                        position: "absolute",
                        width:"100%",
                        left: "50%",
                        top:"50%",
                        height: "100%",
                        objectFit: 'cover',
                        transform: "translate(-50%, -50%)",
                        zIndex: "0"
                    }
                }
            >
                <source src={backgroundvid} type = "video/mp4"/>
            </video>
            <section className="home" id="home" style = {{zIndex: "2"}}>
                <div className="max-width" style = {{zIndex: "2"}}>
                    <div className="home-content" style = {{zIndex: "2"}}>
                        <Typist cursor={{show: false}}>
                            <div className="text-1">Hello, my name is</div>
                            <Typist.Delay ms={800} />
                            <div className="text-2" >Nicholas Lin</div>
                            <Typist.Delay ms={1200} />
                            <div className="text-3">Software Engineer from the University of Waterloo
                            </div>
                        </Typist>
                        <div>                  
                            <ul className = "home-icon-div">
                                <li><a className= "learn" href="#about-me">Who am I?</a></li>
                                <li><a href = "https://github.com/NicholasLin718" target="_blank" rel="noreferrer"><i className="fab fa-github" id = "home-icons"/></a></li>
                                <li><a href = "https://www.linkedin.com/in/nicholas-lin-87368a20b/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in" id = "home-icons"/></a></li>
                                {/* <li><a href={resume} target="_blank"><i className="fas fa-file" id = "home-icons"/></a></li>s */}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
