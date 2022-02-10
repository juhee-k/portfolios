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
                  I am contents creator with a background in Digital Media, Graphic Design, Video, and Full Stack Development.    
                  </p>
                  <p className="about-wrapper__info-text">
                  
                    I re-organized the internal website for Apple Procurement team using CMS(Content Management Systems) and created a lot of graphics, presentation files or videos by using Adobe Creative Suites(Photoshop, Illustrator) and Apple Products such as Keynote, Page and Numbers. 
                  </p>
                  <p className="about-wrapper__info-text">
                  I’ve also learned about Adobe Captivate and since I have the knowledge and skill set of JavaScript, I was able to use my skill set and create the interactive courses for SGL(Self Guided Learning) and updated them to LMS(Learning Management Systems).
                  </p>
                    <p className="about-wrapper__info-text">
                    I like learning new skills or programs and I also like creating. I’ve created more than 300 websites by using Wordpress, Dreamweaver, AEM and other CMS tools.
                    </p>
                <p className="about-wrapper__info-text">
                    I also wanted to study more about full stack development and took the classes though UCLA Bootcamp. So, I have the knowledge and skills of HTML, CSS, JavaScript and so forth.
                    </p>
<p className="about-wrapper__info-text">
                    I will always go one step further to ensure all necessary steps are followed accurately and tasks are completed on time with as few setbacks as possible.
                  </p>
                  <p className="about-wrapper__info-text">
                  If you want to know more about me, please email me at <a href={`mailto:${'juheekim26@icloud.com'}`}>juheekim26@icloud.com!</a>
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
  
