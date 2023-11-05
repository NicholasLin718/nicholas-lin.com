import React, { useState, Fragment } from 'react';
import balloon from "../images/balloon.png";
import "./loading.scss";
import { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import Typist from 'react-typist';

const LoadingScreen = ({ isLoading, onFadeComplete }) => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        onFadeComplete(); 
      }, 500);
  
      return () => clearTimeout(timer);
    }
  }, [isLoading, onFadeComplete]);

  const typingDelay = 500;

  return (
    <div className={`loading-screen ${!isLoading ? 'fade-out' : ''}`}>
      <div className="loading-content">
        <Typography variant="h6" style={{ fontFamily: "Poppins, sans-serif", color: "#FFCD33", display: 'flex', alignItems: 'center' }}>
          <span>One Moment</span>
          <Typist key={key} onTypingDone={() => setKey(prevKey => prevKey + 1)} cursor={{ show: false }} avgTypingDelay={typingDelay}>
            <Typist.Delay ms={500} />
            <span>...</span>
          </Typist>
        </Typography>
      </div>
      <img src={balloon} alt="balloon" className="balloon-animation" />
    </div>
  );
};

export default LoadingScreen;
