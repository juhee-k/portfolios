import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Title from '../Title/Title';
import { Container, Grid } from '@material-ui/core';
import "./about.scss";
import Profile from "../../assets/profile.jpg";

const About = () => {
  
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
      <section id="about">
        <Container>
          <Title title="About Me" />
          
          <Grid container direction="row">
            <Grid xs={12} sm={6} style={{ height: "100%" }}>
              <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <img src={Profile} alt="Juhee" width="50%" height="50%" />
              </div>
              </Fade>
            </Grid>
            <Grid xs={12} sm={6}>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
                <div className="about-wrapper__info">
                  <p className="about-wrapper__info-text">
                  I am a full stack software engineer with a background in Digital Media and Graphic Design.    
                  </p>
                  <p className="about-wrapper__info-text">
                  I am proficient in Illustrator, Photoshop and Microsoft office Suite. I enjoy creating an organized environment and creating ways to increase efficiency and productivity in the workplace. 
                  </p>
                  <p className="about-wrapper__info-text">
                  I will always go one step further to ensure all necessary steps are followed accurately and tasks are completed on time with as few setbacks as possible.
                  </p>
                    <br />
                    <span className="d-flex mt-3">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--resume"
                        href={'https://docs.google.com/document/d/1PGA6nosRAbwzt0IYHUB0sGbDocud4Yw0cFM_dmqZ6fQ/edit?usp=sharing'}
                      >
                        Resume
                      </a>
                    </span>
                  
                </div>
              </Fade>
            </Grid>
            </Grid>
          
        </Container>
      </section>
    );
  };
  
  export default About;
  