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
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setThreeSecondsPassed(true);
    }, 3000);

    return () => clearTimeout(timer); 
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
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [loading]);

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
