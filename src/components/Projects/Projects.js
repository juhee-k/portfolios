import React, { useEffect, useState } from 'react';
import { Container, GridList, GridListTile } from '@material-ui/core';
import Title from '../Title/Title';
import Fade from 'react-reveal/Fade';
import "./projects.scss";

import project1 from "../../assets/project001.png";
import project2 from "../../assets/project002.png";
import project3 from "../../assets/project003.png";
import image1 from "../../assets/image.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import image7 from "../../assets/image7.png";

const Portfolio = () => {

    const [isDesktop, setIsDesktop] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      if (window.innerWidth > 769) {
        setIsDesktop(true);
        setIsMobile(false);
      } else {
        setIsMobile(true);
        setIsDesktop(false);
      }
    }, []);

    return (
    <section id="portfolio">
    <Container>
    <Title title="Projects" />

    <div className="project-wrapper">

    <GridList cols={3}>
    <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
    <GridListTile cols={1}>
        <img src={project1} alt="Project1" width="50%" height="50%" />
    </GridListTile>

    <GridListTile>
        <img src={project2} alt="Project2" />
    </GridListTile>

    <GridListTile>
        <img src={project3} alt="Project3" />
    </GridListTile>
    <div className="project-wrapper__text">
    <h3 className="project-wrapper__text-title">Babble Chat</h3>
    <p>
    The application is a real-time chat app with a minimal interface that allows bi-directional communication, as well as larger groups.
    </p>
    </div>
    <a
    target="_blank"
    rel="noopener noreferrer"
    className="cta-btn cta-btn--hero"
    href={"https://young-caverns-90463.herokuapp.com/"}
    >
    See Live
    </a>
    <a
    target="_blank"
    rel="noopener noreferrer"
    className="cta-btn text-color-main"
    href={"https://github.com/scrunchyblue/Project-2"}
    >
    Source Code
    </a>

    </Fade>
    </GridList>
               

          
        </div>
      </Container>
    </section>
    )
};

export default Portfolio;