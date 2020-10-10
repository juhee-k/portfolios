import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import Title from '../Title/Title';
import Fade from 'react-reveal/Fade';

import Masonry from "react-masonry-css";
import ProjectBox from "./ui-components/projectBox/projectBox";

import project1 from "../../assets/project001.png";
import project2 from "../../assets/project002.png";
import project3 from "../../assets/project003.png";
import image4 from "../../assets/image4.png";
import image10 from "../../assets/image10.png";
import image13 from "../../assets/image13.png";

import './projects.scss'

class Portfolio extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // PORTFOLIO PROJECTS
      projects: [
        {
          id: "1",
          preview: project1,
          title: "COWABUNGA",
          tag: "surfing weather API",
        },
        {
          id: "2",
          preview: project2,
          title: "Babble Chat",
          tag: "socket.io",
        },
        {
          id: "3",
          preview: project3,
          title: "Music eXchange",
          tag: "Marketplace for Musicians",
        },
        {
          id: "4",
          preview: image4,
          title: "CDS Website",
          tag: "Wordpress",
        },
        {
          id: "5",
          preview: image13,
          title: "Restaurant Web Sites Portfolio",
          tag: "Online Ordering Integration",
        },
        {
          id: "6",
          preview: image10,
          title: "CDS Brochure",
          tag: "Brochure",
        }
      ],
      filterResult: null,
      pickedFilter: "all",
      filterMenuActive: false
    };
  };

  

  componentDidMount() {
    this.filterGallery("all");
  }

  //FILTER PORTFOLIO FUNCTION
  filterGallery = (target) => {
    let projectsArr = [...this.state.projects];
    let result;

    if (target !== "all") {
      result = projectsArr.filter((project) => project.tag === target);
    } else {
      result = projectsArr;
    }

    this.setState({ filterResult: result, pickedFilter: target });
  };

  // FILTER DROP DOWN HOVER MENU FUNCTION
  filterMenuHover = (event) => {
    if(event) {
      this.setState({ filterMenuActive: true });
    }else {
      this.setState({ filterMenuActive: false });
    }
  }

  // RENDER
  render() {
    // PORTFOLIO GALLERY RENDER
    let projectsRender = null;
    if (this.state.filterResult) {
      projectsRender = this.state.filterResult.map((project) => (
        <ProjectBox preview={project.preview} key={project.id} title={project.title} tag={project.tag} />
      ));
    }
    // PORTFOLIO GALLERY BREAKPOINTS
    const portfolioBreakpoints = {
      default: 3,
      1100: 3,
      700: 2,
      500: 1,
    };

    // const [isDesktop, setIsDesktop] = useState(false);
    // const [isMobile, setIsMobile] = useState(false);
  
    // useEffect(() => {
    //   if (window.innerWidth > 769) {
    //     setIsDesktop(true);
    //     setIsMobile(false);
    //   } else {
    //     setIsMobile(true);
    //     setIsDesktop(false);
    //   }
    // }, []);


    return (
      <div id="portfolio">
        <Container style={{ marginBottom: "10%" }}>
          <Title title="Portfolio" />
          <Fade bottom duration={1000} delay={600} distance="30px">
          <Masonry breakpointCols={portfolioBreakpoints} className="my-masonry-grid" columnClassName="mint__gallery">
            {projectsRender}
          </Masonry>
          </Fade>
        </Container>
      </div>
    );
  }


}

export default Portfolio;