import { useState } from "react";
import "./AboutMeSlider.scss";
import ReactRoundedImage from "react-rounded-image";
import treeImage from "../images/tree.jpg";
import badmintonImage from "../images/badminton.jpg";
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
        <h2 style={{color: standoutColour, overflow: 'hidden', paddingBottom:"15px", fontFamily: 'Open Sans, sans-serif'}}>Hey there!</h2>
        <p style={{fontSize: '16px', fontFamily: 'Open Sans, sans-serif', overflow: 'hidden'}}>

        My name is Nicholas, and I am a first-year Software Engineering student at the University of Waterloo. My interest in strategy games growing up has developed my analytical thinking and problem solving skills which inspired me to pursue a career in technology. My obsession with coding can really be explained by my innate curiosity that drives my desire to fully understand why and how things around me work, and my ability to to devote my full focus and energy when I engage myself in a problem. Continue reading if you want to learn more about me :)  <br />
        <br />
        If you need to get in touch, please email: 
        <a href="mailto:n39lin@uwaterloo.ca" target="_blank" rel="noreferrer" style={{color: 'white'}}> n39lin@uwaterloo.ca </a>
        </p>
        
    </div>
</div>

const interestsAbout =                         
<div className="about-content">
    <div id = "threeText">
    <h2 style={{color: standoutColour, overflow: 'hidden', paddingBottom:"15px"}}>What do I do in my free time?</h2>
    <ul>
        <li><strong>?? </strong> I used to play badminton competitively, but now I mostly play recreationally with friends</li>
        <li><strong>?? </strong> I'm a basketball stats nerd, you can usually find me watching analysis videos on Youtube</li>
        <li><strong>?? </strong> My Youtube phases range from binging short comedy skits to storytime animations, and more recently I've watched a lot of movie recaps</li>
        <li><strong>?? </strong> I also enjoy playing Minecraft with my buddies and recently started watching anime</li>
        <li><strong>?? </strong> Late night walks with friends around campus is also a top tier pastime!</li>
    </ul>
    </div>
    <div className="column left"><img src = {badmintonImage} className = "badminton" alt = ""></img></div>
</div>

const whyAbout =                         
<div className="about-content">
    <div id = "twoText">
        <h2 style={{color: standoutColour, overflow: 'hidden', paddingBottom:"15px"}}>My Goals</h2>
        <p style={{fontSize: '16px', overflow: 'hidden'}}>
        My goal as a software engineer is still a undetermined, so I'm looking forward to exploring various aspects of programming to figure out what I'm truly interested in. I've recently found an interest in web and full stack development, and I'm eager to try new frameworks and learn what's available for me to use. I believe that the most important skill to have is to be flexible and integrate as many opportunities to learn as possible, especially in this rapidly evolving field.
        <br />
        <br />
        But, there's a lot more to me than just programming! Swipe to learn more about my hobbies :D
        </p>
    </div>
    <div className="column left">
        <img src = {treeImage} className = "tree" alt = ""></img>
    </div>
</div>

const data = [
    {
        id: "1",
        div: mainAbout
    },
    
    {
        id: "2",
        div: whyAbout
    },
    {
        id: "3",
        div: interestsAbout
    },

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