import React, { useState, useEffect } from 'react';
import './style/App.scss';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import { PortfolioProvider } from './context/context';


const App = () => {

  return (
    <PortfolioProvider>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
     
    </PortfolioProvider>
  );
}

export default App;
