import React, { useState } from 'react';

// Used 'react-collapsible' package for creating collapsible bars
import Collapsible from 'react-collapsible';

import '../styles/ProjectCard.scss';

const ProjectCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        className="project-card"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-delay={props.cardContent.animationDelay}
      >
        <div className="project-card__container">
          <Collapsible 
            trigger={props.cardContent.heading}
            onOpening={handleOpen}
            onClosing={handleClose}
          >
            {props.cardContent.image && (
              <div className="project-card__image">
                <img src={props.cardContent.image} alt={props.cardContent.heading} />
              </div>
            )}
            <div className="project-card__description-content">
              <p>{props.cardContent.description}</p>
              <a
                href={props.cardContent.buttonLink}
                target="_blank"
                rel="noreferrer"
              >
                {props.cardContent.buttonText}
              </a>
            </div>
          </Collapsible>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
