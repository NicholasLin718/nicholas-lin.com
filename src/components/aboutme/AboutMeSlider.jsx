import { useState } from "react";
import "./AboutMeSlider.scss";
import ReactRoundedImage from "react-rounded-image";
import profilepic from "../images/lightsPortrait.png";
export default function AboutMeSlider() {
    const standoutColour = "#FFCD33";
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
            roundedColor={standoutColour}
            />
        </a>
    </div>
    <div className="column right">
        <h2 style={{color: standoutColour, overflow: 'hidden'}}>Hey there,</h2>
        <p style={{fontSize: '16px', overflow: 'hidden'}}>

        My name is Nicholas, and I am a first-year Software Engineering student at the University of Waterloo. My interest in analytical thinking and problem solving from strategy games growing up has inspired me to pursue the field of technology. My obsession with coding can really be explained by my innate curiosity that drives my desire to fully understand why and how things around me work, and my ability to to devote my full focus and energy when I engage myself in a problem. Continue reading if you want to learn more about me :)  <br />
        <br />
        If you need to get in touch, please email: 
        <a href="mailto:n39lin@uwaterloo.ca" target="_blank" rel="noreferrer" style={{color: 'white'}}> n39lin@uwaterloo.ca </a>
        </p>
        
    </div>
</div>

const interestsAbout =                         
<div className="about-content">
    <h2 style={{color: standoutColour}}>IKEA,</h2>
    <p style={{fontSize: '20px'}}>
    Outside of coding, in my freetime I enjoy participating in sports such as badminton and basketball, playing Minecraft, watching anime, and a few other random hobbies. You can also find me binging random youtube videos, which typically I have different phases for, as one moment I could be watching basketball analysis videos to binging short comedy skits.  <br />
    <br />
    Learn more about my past experiences and projects below, or swipe to see more pictures of me :)
    </p>
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
        <h2>Hey there!</h2>
        <p style={{fontSize: '20px'}}>

        My name is Nicholas Lin, and I am a first-year Software Engineering student at the University of Waterloo. My interest in logical thinking and problem solving from strategy games growing up has inspired me to pursue the field of technology. I'm fascinated by the growing development of technological advancements in the past decade, and I’d like to imagine that I would be able to make contributions to this rapidly growing field.  <br />
        <br />
        My obsession with coding can really be explained by my innate curiosity that drives my desire to fully understand how and why things around me work. I find myself putting 100% of my focus and energy when I engage myself in a problem, and when I do, it's almost as if I can time travel from the numerous hours that fly by.   
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
      <div className="arrows">
        <i className="fas fa-arrow-circle-left" id = "arrow-left" style = {leftArrowDisplay} onClick={()=>handleClick("left")}></i>
        <i className="fas fa-arrow-circle-right" id = "arrow-right" style = {rightArrowDisplay} onClick={()=>handleClick("right")}></i>
      </div>
        
      <div className="container-dots">
        {Array.from({length: 3}).map((item, index) => (
        <div onClick={() => moveDot(index + 1)} className={currentSlide === index ? "dot active" : "dot"}></div>
         ))}
      </div>
    </div>
  );
}