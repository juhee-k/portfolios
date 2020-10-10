import React from 'react';
import { Container } from '@material-ui/core';
import { Link } from 'react-scroll';
import GitHubIcon from '@material-ui/icons/GitHub';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import "./footer.scss";

const Footer = () => {
    return (
        <footer className="footer navbar-static-bottom">
          <Container>
            <div className="back-to-top social-links">
              <Link to="hero" smooth duration={1000}>
                <ExpandLessIcon style={{ fontSize: 40 }} />
              </Link>
            </div>
            <div className="social-links">
            <a href="https://www.linkedin.com/in/juhee-k/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon style={{ fontSize: 30 }} />
            </a>
            <br />
            <a href="https://github.com/juhee-k" target="_blank" rel="noopener noreferrer">
            <GitHubIcon style={{ fontSize: 25 }} />
            </a>
            </div>
            <hr />
            <p className="footer__text">
              © 2020 This portfolio is developed by <span />
              <a href="http://iamjuhee.com/" target="_blank" rel="noopener noreferrer">
                Juhee Kim
              </a>
            </p>

          </Container>
        </footer>
      );
    };
    
    export default Footer;
    