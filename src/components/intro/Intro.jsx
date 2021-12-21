import React from 'react';
import "./intro.scss";
import backgroundvid from "./nightsky.mp4";
import Typist from "react-typist";
import Typical from 'react-typical'

export default function Intro() {
    return (
        <div className="intro" id="intro">

            <video autoPlay loop muted alt=""
                style={
                    {
                        position: "absolute",
                        width:"100%",
                        left: "50%",
                        top:"50%",
                        height: "100%",
                        objectFit: 'cover',
                        transform: "translate(-50%, -50%)",
                        zIndex: "-1"

                    }
                }
            >
                <source src={backgroundvid} type = "video/mp4"/>
            </video>
            {/* <section>
                <div className = "home-icon-div">
                    <h1>hi</h1>
                    <i className="fab fa-github" id = "home-icons"/>
                    <i className="fab fa-linkedin-in" id = "home-icons"/>
                    <i className="fas fa-file" id = "home-icons"/>
                </div>
            </section> */}
            <section className="home" id="home">
                <div className="max-width">
                    <div className="home-content">
                        <Typist cursor={{show: false}}>
                            <div className="text-1" style={{fontFamily: 'Helvetica'}}>Hello, my name is</div>
                            <Typist.Delay ms={800} />
                            <div className="text-2" style={{fontFamily: 'Copperplate'}}>Nicholas Lin</div>
                            <Typist.Delay ms={1200} />
                            <div className="text-3" style={{fontFamily: 'Helvetica'}}>I am a Software Engineering student
                                {/* <span className = "text-3" style={{fontFamily: 'Helvetica'}}> Programmer</span>                        
                                <Typist.Backspace count={10} delay={1300} ms={1300} />
                                <span className="text-3" style={{fontFamily: 'Helvetica'}}>Badminton Player</span>
                                <Typist.Backspace count={16} delay={1300} ms={1300}/>
                                <span className="text-3" style={{fontFamily: 'Helvetica'}}>Hobbyist</span>
                                <Typist.Backspace count={8} delay={1300} ms={1300}/> */}
                                <span className="text-3" style={{fontFamily: 'Helvetica'}}>
                                <br></br>
                                from the University of Waterloo
                                </span>
                            </div>
                        </Typist>
                        <div>                  
                            <ul className = "home-icon-div">
                                <li><a href="#about-me">Learn more</a></li>
                                <li><i className="fab fa-github" id = "home-icons"/></li>
                                <li><i className="fab fa-linkedin-in" id = "home-icons"/></li>
                                <li><i className="fas fa-file" id = "home-icons"/></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
