import { useState } from "react";
import "./AboutMeSlider.scss";
import ReactRoundedImage from "react-rounded-image";
import profilepic from "../images/profilepicture.png";

export default function AboutMeSlider() {
    const [currentSlide,setCurrentSlide] = useState(0);
const mainAbout =                         
<div className="about-content">
    <div className="column left">
        <a href="mailto:n39lin@uwaterloo.ca" target="_blank" rel="noreferrer">
        <ReactRoundedImage 
            className="profile-pic"
            image={profilepic}
            imageWidth="300"
            imageHeight="300"
            roundedSize="7"
            roundedColor="#FFCD33"
            />
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

const interestsAbout =                         
<div className="about-content">
    <div className="column left">
        <a href="mailto:n39lin@uwaterloo.ca" target="_blank" rel="noreferrer">
        <ReactRoundedImage 
            className="profile-pic"
            image={profilepic}
            imageWidth="300"
            imageHeight="300"
            roundedSize="7"
            roundedColor="#FFCD33"
            />
        </a>
    </div>
    <div className="column right">
        <h2>Hi there,</h2>
        <p style={{fontSize: '20px'}}>

        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos distinctio aperiam laborum delectus mollitia quos, labore quisquam pariatur voluptates cupiditate, harum inventore iste architecto quibusdam dicta, saepe odit. Iste. <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni laborum soluta ex incidunt molestias delectus sunt, tempora quas molestiae voluptas?  
        </p>
    </div>
</div>

const whyAbout =                         
<div className="about-content">
    <div className="column left">
        <a href="mailto:n39lin@uwaterloo.ca" target="_blank" rel="noreferrer">
        <ReactRoundedImage 
            className="profile-pic"
            image={profilepic}
            imageWidth="300"
            imageHeight="300"
            roundedSize="7"
            roundedColor="#FFCD33"
            />
        </a>
    </div>
    <div className="column right">
        <h2>Howdy there,</h2>
        <p style={{fontSize: '20px'}}>

        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos distinctio aperiam laborum delectus mollitia quos, labore quisquam pariatur voluptates cupiditate, harum inventore iste architecto quibusdam dicta, saepe odit. Iste. <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni laborum soluta ex incidunt molestias delectus sunt, tempora quas molestiae voluptas?  
        </p>
    </div>
</div>

const data = [
    {
        id: "1",
        div: mainAbout
    },
    {
        id: "2",
        div: interestsAbout
    },

    {
        id: "3",
        div: whyAbout
    }
]

const handleClick = (way) =>{
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1:2) :
    setCurrentSlide(currentSlide<data.length-1 ? currentSlide + 1 : 0)
}

var leftArrowDisplay = {display: "none"}
var rightArrowDisplay = {display: "flex"}
if(currentSlide === 0){
    leftArrowDisplay = {display: "none"}
    rightArrowDisplay = {display: "flex"}

}
else if (currentSlide === 1){
    leftArrowDisplay = {display: "flex"}
    rightArrowDisplay = {display: "flex"}
}
else{
    leftArrowDisplay = {display: "flex"}
    rightArrowDisplay = {display: "none"}
}

const moveDot = index => {
    setCurrentSlide(index)
}

return (
    <div className="about-me" id="about-me">
      <div className="slider" style={{transform: `translateX(-${currentSlide*100}vw)`}}>
          {data.map((d) => (
              <div className="container">
                  <div className="max-width">{d.div}</div>
              </div>
          ))}
      </div>
      <i className="fas fa-arrow-circle-left" id = "arrow-left" style = {leftArrowDisplay} onClick={()=>handleClick("left")}></i>
      <i className="fas fa-arrow-circle-right" id = "arrow-right" style = {rightArrowDisplay} onClick={()=>handleClick("right")}></i>
      <div className="container-dots">
          {Array.from({length: 3}).map((item, index) => (
<div 
                    onClick={() => moveDot(index + 1)}
                    className={currentSlide === index ? "dot active" : "dot"}
                    ></div>
          ))}
      </div>
    </div>
  );
}