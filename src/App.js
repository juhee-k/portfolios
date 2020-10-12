import React from 'react';
import './style/App.scss';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Portfolio from './components/Projects/Projects';
// import Projects from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import { PortfolioProvider } from './context/context';


const App = () => {

  return (
    <PortfolioProvider>
      <Hero />
      <About />
      <Portfolio />
      {/* <Projects /> */}
      <Contact />
      <Footer />
     
    </PortfolioProvider>
  );
}

export default App;
