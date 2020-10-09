import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Title from '../Title/Title';
import { Container, Row, Col } from 'react-bootstrap';
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
          <Row className="about-wrapper">
            <Col md={6} sm={12}>
              <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="flex-center">
                <img src={Profile} alt="Profile Picture" />
              </div>
              </Fade>
            </Col>
            <Col md={6} sm={12}>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
                <div className="about-wrapper__info">
                  <p className="about-wrapper__info-text">
                  I am very organized, responsible, detail oriented and great at communicating with others and working as part of a team. I am proficient in Illustrator, Photoshop and Microsoft office Suite. I enjoy creating an organized environment and creating ways to increase efficiency and productivity in the workplace. I will always go one step further to ensure all necessary steps are followed accurately and tasks are completed on time with as few setbacks as possible.
                  </p>
                
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
            </Col>
          </Row>
        </Container>
      </section>
    );
  };
  
  export default About;
  