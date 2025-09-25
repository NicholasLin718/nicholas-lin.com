import { useState, useCallback } from "react";
import "./AboutMeSlider.scss";
import ReactRoundedImage from "react-rounded-image";
import duckDudeImage from "../images/duckdude.png";
import badmintonImage from "../images/jump.jpg";
import profilepic from "../images/forestPortrait.JPG";
import { useEffect } from "react";

export default function AboutMeSlider() {
    const standoutColour = "#FFCD33";
    const [currentSlide, setCurrentSlide] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    }

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    }

    const onTouchEnd = () => {
        if (touchStart !== null && touchEnd !== null) {
            const distance = touchStart - touchEnd;
            const isSwipe = Math.abs(distance) > 50;
            const isLeftSwipe = distance > 0;
            const isRightSwipe = distance < 0;

            if (isSwipe) {
                if (isLeftSwipe) {
                    handleClick('right');
                } else if (isRightSwipe) {
                    handleClick('left');
                }
            }
        }
        setTouchStart(null);
        setTouchEnd(null);
    }

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
                <h2 style={{ color: standoutColour, overflow: 'hidden', paddingBottom: "15px", fontFamily: 'Open Sans, sans-serif' }}>Hey there!</h2>
                <p style={{ fontSize: '16px', fontFamily: 'Open Sans, sans-serif', overflow: 'hidden' }}>

                    My name is Nicholas, and I am a third-year Software Engineering student at the University of Waterloo. My interest in strategy games growing up has developed my analytical thinking and problem solving skills which inspired me to pursue a career in technology. My obsession with coding can really be explained by my innate curiosity that drives my desire to fully understand why and how things around me work, and my ability to devote my full focus and energy when I engage myself in a problem. Continue reading if you want to learn more about me :)  <br />
                    <br />
                    If you need to get in touch, please email:
                    <a href="mailto:n39lin@uwaterloo.ca" target="_blank" rel="noreferrer" style={{ color: 'white', fontWeight: 'bold' }}> n39lin@uwaterloo.ca </a>
                </p>

            </div>
        </div>

    const interestsAbout =
        <div className="about-content">
            <div id="threeText">
                <h2 style={{ color: standoutColour, overflow: 'hidden', paddingBottom: "15px" }}>What do I do in my free time?</h2>
                <ul>
                    <li><strong>» </strong> I used to play badminton competitively, but now I mostly play recreationally with friends or at my school's club</li>
                    <li><strong>» </strong> I've recently started running more often again, and am training for the Waterfront half marathon in downtown Toronto!</li>
                    <li><strong>» </strong> I'm an NBA stats nerd, you can usually find me watching analysis videos on Youtube</li>
                    <li><strong>» </strong> I also enjoy playing Minecraft with my buddies and recently started playing Valorant, but I'm definitely not very good at aiming 😅</li>
                    <li><strong>» </strong> I finally started binging anime again during university after being too stubborn to watch during high school</li>
                    <li><strong>» </strong> Late night walks with friends around campus is also a top tier pastime!</li>
                </ul>
            </div>
            <div className="column left"><img src={badmintonImage} className="badminton" alt=""></img></div>
        </div>

    const whyAbout =
        <div className="about-content">
            <div id="twoText">
                <h2 style={{ color: standoutColour, overflow: 'hidden', paddingBottom: "15px" }}>My Goals</h2>
                <p style={{ fontSize: '16px', overflow: 'hidden' }}>
                    As a software engineer, I am actively exploring different programming areas to discover my key interests. My journey so far has been enriched by my experiences with Full Stack, but I am also eager to delve into other areas like AI, DevOps, mobile development, and cloud computing. Understanding the dynamic nature of the tech industry, I place high priority on adaptability and continuous learning, which is why I'm so keen on seeking out diverse opportunities to expand my skillsets.
                    <br />
                    <br />
                    But, there's a lot more to me than just programming! Swipe to learn more about my hobbies 😊
                </p>
            </div>
            <div className="column left">
                <img src={duckDudeImage} className="tree" alt=""></img>
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

    const handleClick = useCallback((way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : currentSlide) :
            setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : currentSlide)
    }, [currentSlide, data.length])

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowLeft') {
                handleClick('left');
            } else if (event.key === 'ArrowRight') {
                handleClick('right');
            }
        };

        // Add event listener
        window.addEventListener('keydown', handleKeyDown);

        // Remove event listener on cleanup
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleClick]);

    return (
        <div className="about-me" id="about-me">
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                {data.map((d) => (
                    <div className="container">
                        <div className="max-width">{d.div}</div>
                    </div>
                ))}
            </div>

            <div className="container-dots">
                {currentSlide !== 0 ? <i className="fas fa-arrow-circle-left" id="arrows" onClick={() => handleClick("left")}></i>
                    : <div id="arrows-off"></div>}
                {Array.from({ length: 3 }).map((item, index) => (
                    <div onClick={() => setCurrentSlide(index)} className={currentSlide === index ? "dot active" : "dot"}></div>
                ))}
                {
                    currentSlide !== 2 ? <i className="fas fa-arrow-circle-right" id="arrows" onClick={() => handleClick("right")}></i>
                        : <div id="arrows-off"></div>
                }
            </div>
        </div>
    );
}