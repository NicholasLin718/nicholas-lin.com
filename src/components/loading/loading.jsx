import React from 'react';
import balloon from "../images/balloon.png"
import "./loading.scss";
import { useEffect } from 'react';
import { Typography } from '@material-ui/core';

const LoadingScreen = ({ isLoading, onFadeComplete }) => {
    useEffect(() => {
      if (!isLoading) {
        const timer = setTimeout(() => {
          onFadeComplete(); 
        }, 500);
  
        return () => clearTimeout(timer);
      }
    }, [isLoading, onFadeComplete]);
  
    return (
      <div className={`loading-screen ${!isLoading ? 'fade-out' : ''}`}>
        <div className="loading-content">
            <Typography variant="h6" style = {{fontFamily: "Poppins, sans-serif", color: "#FFCD33"}}>One Moment...</Typography>
        </div>
        <img src={balloon} alt="balloon" className="balloon-animation" />
      </div>
    );
  };

export default LoadingScreen;