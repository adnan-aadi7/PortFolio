import React, { useEffect, useRef } from "react";
import "../../styles/Hero/Hero.scss";
import GlobeVideo from "../../assets/videos/globe.mp4";

const Hero = () => {
  const videoRef = useRef(null);

  // Handle video autoplay for mobile
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.setAttribute('playsinline', '');
      video.setAttribute('webkit-playsinline', '');
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log('Video autoplay failed:', error);
          // Fallback for user interaction if needed
        });
      }
    }
  }, []);

  return (
    <div className="hero" id="home">
      <div className="hero__overlay"></div>
      <video
        ref={videoRef}
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={GlobeVideo} type="video/mp4" />
      </video>

      <div className="hero__content container">
        <div className="hero__text-box" data-aos="fade-up">
          <p className="hero__subtitle">Hello, I'm</p>
          <h1 className="hero__title">
            Adnan <span className="hero__title--highlight">Haider</span>
          </h1>
          <h2 className="hero__position">
            Full Stack <span className="hero__position--highlight">MERN Developer</span>
          </h2>
          <p className="hero__description">
            Crafting robust and scalable digital solutions with modern web technologies.
            I build efficient, responsive, and user-friendly applications that drive success.
          </p>

          <div className="hero__actions">
            <a href="/Adnan_Haider_CV.pdf" download="Adnan_Haider_CV.pdf" className="btn btn--primary">
              Download CV
            </a>
            <a href="#contact" className="btn btn--secondary">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
