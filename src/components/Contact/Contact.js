import React from 'react';
import Fade from 'react-reveal/Fade';
import Title from '../Title/Title';
import { Container } from '@material-ui/core';
import "./contact.scss";

const Contact = () => {

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
        <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              Would you like to work with me? Awesome!
            </p>
        </div>
        <div className="contact-wrapper__text">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={`mailto:${'juheekim26@icloud.com'}`}
            >
              Let's Talk
            </a>
        </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
