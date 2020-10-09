import React, { useState, useEffect } from 'react';
import './style/App.scss';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
// import Projects from './Projects/Projects';
// import Contact from './Contact/Contact';
// import Footer from './Footer/Footer';

import { PortfolioProvider } from './context/context';


function App() {
  const [hero, setHero] = useState({});
  // const [about, setAbout] = useState({});
  // const [projects, setProjects] = useState([]);
  // const [contact, setContact] = useState({});
  // const [footer, setFooter] = useState({});

  // useEffect(() => {
  //   setHero({ ...heroData });
  //   // setAbout({ ...aboutData });
  //   // setProjects([...projectsData]);
  //   // setContact({ ...contactData });
  //   // setFooter({ ...footerData });
  // }, []);

  return (
    <PortfolioProvider value={{ hero }}>
      <Hero />
      <About />

      {/* <Projects />
      <Contact />
      <Footer /> */}
     
    </PortfolioProvider>
  );
}

export default App;
