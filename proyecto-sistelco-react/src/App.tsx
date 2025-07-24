import React from 'react';
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Inicio from './components/Inicio';
import Servicios from './components/Servicios';
import Planes from './components/Planes';
import BotonesFlotantes from './components/BotonesFlotantes';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

const SISTELCO: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth'});
    }
  };

  return (
    <>
    <div className='bg-white-100 min-h-screen'>
        <Header isScrolled={isScrolled} scrollToSection={scrollToSection} />  
          <main>
            <Inicio scrollToSection={scrollToSection} />
            <Servicios />
            <Planes />
            <Contacto />
            <Footer />
        </main>
        <BotonesFlotantes />
      </div>
    </>
  );
};

const App: React.FC = () => {
  return (
    <div className="App">
      <SISTELCO />
    </div>
  );
};

export default App
