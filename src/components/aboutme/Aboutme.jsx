import './aboutme.scss';
import React from 'react';
import ReactRoundedImage from "react-rounded-image";
import profilepic from "../images/profilepicture.png";

const img = <ReactRoundedImage 
className="profile-pic"
image={profilepic}
imageWidth="300"
imageHeight="300"
roundedSize="7"
roundedColor="#FFCD33"
/>

// test commit
function Aboutme() {
    var email = <a href="mailto:n39lin@uwaterloo.ca" target="_blank" rel="noreferrer">email</a>
    return (
        <div className="aboutme" id = "aboutme">
            <div className="max-width">
                <div className="about-content">
                    <div className="column left">
                        <a href="mailto:n39lin@uwaterloo.ca" target="_blank" rel="noreferrer">
                            {img}
                        </a>
                    </div>
                    <div className="column right">
                        <h2>Hey there,</h2>
                        <p style={{fontSize: '20px'}}>
                
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos distinctio aperiam laborum delectus mollitia quos, labore quisquam pariatur voluptates cupiditate, harum inventore iste architecto quibusdam dicta, saepe odit. Iste. <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni laborum soluta ex incidunt molestias delectus sunt, tempora quas molestiae voluptas?  
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutme
