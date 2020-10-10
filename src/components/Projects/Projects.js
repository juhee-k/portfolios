import React from 'react';
import { Row, Col } from "react-flexbox-grid";
import Title from '../Title/Title';
// import Fade from 'react-reveal/Fade';

import Masonry from "react-masonry-css";

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
      ]
    };
  };
  render () {
    let projectsRender = null;
    const portfolioBreakpoints = {
      default: 3,
      1100: 3,
      700: 2,
      500: 1,
    };
    return (
      <div id="portfolio">
      <div className="wrapper">
        <Title title="Portfolio" />
        <Masonry breakpointCols={portfolioBreakpoints} className="my-masonry-grid" columnClassName="mint__gallery">
            {projectsRender}
        </Masonry>
      </div>
      </div>

    ) 
  }
};

export default Portfolio;






// const Portfolio = () => {

//     const [isDesktop, setIsDesktop] = useState(false);
//     const [isMobile, setIsMobile] = useState(false);
  
//     useEffect(() => {
//       if (window.innerWidth > 769) {
//         setIsDesktop(true);
//         setIsMobile(false);
//       } else {
//         setIsMobile(true);
//         setIsDesktop(false);
//       }
//     }, []);

//     return (
//     <section id="portfolio">
//     <Container>
//     <Title title="Projects" />

//     <div className="project-wrapper">

//     <GridList cols={3}>
//     <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
//     <GridListTile cols={1}>
//         <img src={project1} alt="Project1" width="50%" height="50%" />
//     </GridListTile>

//     <GridListTile>
//         <img src={project2} alt="Project2" />
//     </GridListTile>

//     <GridListTile>
//         <img src={project3} alt="Project3" />
//     </GridListTile>
//     <div className="project-wrapper__text">
//     <h3 className="project-wrapper__text-title">Babble Chat</h3>
//     <p>
//     The application is a real-time chat app with a minimal interface that allows bi-directional communication, as well as larger groups.
//     </p>
//     </div>
//     <a
//     target="_blank"
//     rel="noopener noreferrer"
//     className="cta-btn cta-btn--hero"
//     href={"https://young-caverns-90463.herokuapp.com/"}
//     >
//     See Live
//     </a>
//     <a
//     target="_blank"
//     rel="noopener noreferrer"
//     className="cta-btn text-color-main"
//     href={"https://github.com/scrunchyblue/Project-2"}
//     >
//     Source Code
//     </a>

//     </Fade>
//     </GridList>
               

          
//         </div>
//       </Container>
//     </section>
//     )
// };

// export default Portfolio;