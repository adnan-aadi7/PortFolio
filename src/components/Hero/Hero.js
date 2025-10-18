import React, { useEffect, useRef } from "react";

import "../../styles/Hero/Hero.scss";

// import Myself from "../../assets/images/1.png";
import GlobeVideo from "../../assets/videos/globe.mp4";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const alphbets = document.getElementsByClassName("hero__alphabet");
    for (let i = 0; i <= alphbets.length; i++) {
      alphbets[i]?.addEventListener("animationend", function () {
        alphbets[i].classList.remove("alphabet-animated");
      });

      alphbets[i]?.addEventListener("mouseover", function () {
        alphbets[i].classList.add("alphabet-animated");
      });
    }
  }, []);

  // Handle video autoplay for mobile
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Set video properties for mobile
      video.setAttribute('playsinline', '');
      video.setAttribute('webkit-playsinline', '');
      
      // Try to play the video
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log('Video autoplay failed:', error);
          // If autoplay fails, try to play on user interaction
          const handleUserInteraction = () => {
            video.play().catch(e => console.log('Video play failed:', e));
            document.removeEventListener('touchstart', handleUserInteraction);
            document.removeEventListener('click', handleUserInteraction);
          };
          
          document.addEventListener('touchstart', handleUserInteraction);
          document.addEventListener('click', handleUserInteraction);
        });
      }
      
      // Handle video load error
      video.addEventListener('error', (e) => {
        console.log('Video failed to load:', e);
        // You could add a fallback image here
      });
      
      // Handle video can play
      video.addEventListener('canplay', () => {
        console.log('Video can play');
      });
    }
  }, []);

  return (
    <>
      <div className="hero">
        <video 
          ref={videoRef}
          className="hero__video-bg" 
          autoPlay 
          muted 
          loop 
          playsInline
          preload="auto"
          webkit-playsinline="true"
        >
          <source src={GlobeVideo} type="video/mp4" />
        </video>
        
        {/* Floating particles */}
        <div className="hero__particles">
          <div className="hero__particle hero__particle--1"></div>
          <div className="hero__particle hero__particle--2"></div>
          <div className="hero__particle hero__particle--3"></div>
          <div className="hero__particle hero__particle--4"></div>
          <div className="hero__particle hero__particle--5"></div>
        </div>

        {/* Gradient overlay */}
        <div className="hero__gradient-overlay"></div>
        
        <div className="hero__container">
          <div className="hero__intro-box">
            <div className="hero__greeting" data-aos="fade-down" data-aos-delay="100">
              <span className="hero__wave">👋</span>
              <p className="hero__intro-title">
                <span className="hero__intro-line"></span>
                Hello, I am Adnan Haider
              </p>
            </div>
            
            <div className="hero__title-section">
              <p className="hero__animated-alphabet-box">
                <span
                  className="hero__alphabet"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  M
                </span>
                <span
                  className="hero__alphabet"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  E
                </span>
                <span
                  className="hero__alphabet"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  R
                </span>
                <span
                  className="hero__alphabet"
                  data-aos="fade-up"
                  data-aos-delay="800"
                >
                  N
                </span>
                <span
                  className="hero__alphabet"
                  data-aos="fade-up"
                  data-aos-delay="1000"
                >
                  S
                </span>
                <span
                  className="hero__alphabet"
                  data-aos="fade-up"
                  data-aos-delay="1200"
                >
                  T
                </span>
                <span
                  className="hero__alphabet"
                  data-aos="fade-up"
                  data-aos-delay="1400"
                >
                  A
                </span>
                <span
                  className="hero__alphabet"
                  data-aos="fade-up"
                  data-aos-delay="1600"
                >
                  C
                </span>
                <span
                  className="hero__alphabet hero__alphabet--last"
                  data-aos="fade-up"
                  data-aos-delay="1800"
                >
                  K
                </span>
                <span
                  className="hero__developer-text"
                  data-aos="zoom-out-down"
                  data-aos-delay="2000"
                >
                  <span className="hero__dev-text">Developer</span>
                </span>
              </p>
            </div>

            <div
              className="hero__description"
              data-aos="fade"
              data-aos-delay="1800"
            >
              <p>
                I'm a passionate and responsible{" "}
                <span className="hero__highlight">MERN STACK developer</span>, 
                skilled in developing highly responsive websites with elegant and efficient code.
                Creating digital experiences that make a difference.
              </p>
            </div>

            <div className="hero__buttons" data-aos="fade-up" data-aos-delay="2000">
              <a
                className="hero__know-btn"
                href="#about"
              >
                <span>Know more</span>
                <div className="hero__btn-bg"></div>
              </a>
              <a
                className="hero__contact-btn"
                href="#contact"
              >
                <span>Contact me</span>
                <div className="hero__btn-bg"></div>
              </a>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
