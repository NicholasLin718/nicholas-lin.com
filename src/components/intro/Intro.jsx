import React from 'react';
import "./intro.scss";
import backgroundvid from "./nightsky.mp4"
export default function Intro() {
    return (
        <div className="intro" id="intro">

            <video width="1920" height="1080" autoPlay loop muted
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
            {/* <div className="left">
                <div className="imgContainer">
                    <img src = "images/face.png" alt = ""/>
                </div>
            </div>
            <div className="right">
                
            </div> */}

            <section class="home" id="home">
                <div class="max-width">
                    <div class="home-content">
                        <div class="text-1">Hello, my name is</div>
                        <div class="text-2">Nicholas Lin</div>
                        <div class="text-3">and I am a <span>tall person</span></div>
                        <a href="#">Learn more</a>
                    </div>
                </div>
            </section>
        </div>
    )
}
