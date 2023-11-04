import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import AboutMeSlider from "./components/aboutme/AboutMeSlider";
import Intro from "./components/intro/Intro";
import Footer from "./components/footer/Footer";
import "./app.scss";
import React, { useState, useEffect } from 'react';
import LoadingScreen from "./components/loading/loading";

function App() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [threeSecondsPassed, setThreeSecondsPassed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);
  
  // Start loading process
  useEffect(() => {
    // Assume video is part of Intro component, and will notify when it can play through
    const timer = setTimeout(() => {
      setThreeSecondsPassed(true); // 3 seconds have passed
    }, 3000);

    return () => clearTimeout(timer); // Cleanup if component unmounts
  }, []);

  useEffect(() => {
    // If video is loaded and three seconds have passed, end loading state
    if (isVideoLoaded && threeSecondsPassed) {
      setLoading(false);
    }
  }, [isVideoLoaded, threeSecondsPassed]);

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        setShowLoadingScreen(false);
      }, 1000); // Adjust the timeout to your CSS animation duration

      return () => clearTimeout(timer);
    }
  }, [loading]);

  // Instead of setting loading to false immediately when the video can play,
  // we set the isVideoLoaded state to true and let the useEffect above take care of it
  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };


  return (
    <div className="app">
      {showLoadingScreen && <LoadingScreen isLoading={loading} onFadeComplete={() => setShowLoadingScreen(false)} />}
      <Navbar/>
      <div className="sections">
        <Intro onVideoLoad={handleVideoLoad} />
        {!loading && <>
          <AboutMeSlider/>
          <Experience/>
          <Projects/>
          <Footer/>
        </>
}
      </div>
    </div>
  );
}

export default App;
