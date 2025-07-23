import React from 'react';
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Inicio from './components/Inicio';

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
        </main>
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
