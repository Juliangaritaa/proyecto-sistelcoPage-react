import React from 'react';
import { slideInFromTop, fadeIn, buttonHover } from '../animations/animations.tsx';
import { motion } from 'framer-motion';
import { dataSISTELCO } from '../data/dataSISTELCO.ts';

interface HeaderProps {
    isScrolled: boolean;
    scrollToSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ isScrolled, scrollToSection }) => {
    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 mb-5 ${isScrolled ? 'bg-white dark:bg-gray-900 shadow-lg' : 'bg-transparent'
                }`}

            initial="hidden"
            animate="visible"
            variants={slideInFromTop}>

            <nav className='container mx-auto px-6 py-4'>
                <div className='flex justify-between items-center'>

                    <motion.div
                        className="text-black dark:text-white text-lg font-bold flex items-center space-x-2"
                        variants={fadeIn}>
                        <img
                            src={dataSISTELCO.company.logo}
                            alt="Logo"
                            className="h-8 w-8 object-contain"
                        />

                        <span>{dataSISTELCO.company.name}</span>

                    </motion.div>

                    <div className='flex items-center gap-6'>
                        <div className='hidden md:flex gap-6'>
                            {['Inicio', 'Servicios', 'TestVelocidad', 'Contacto', 'PQR'].map((section, index) => (
                                <motion.button
                                    key={section}
                                    onClick={() => scrollToSection(section)}
                                    className="text-black dark:text-white hover:text-blue-600 transition-colors duration-300"
                                    variants={buttonHover}
                                    initial="initial"
                                    whileHover="hover"
                                    whileTap="tap"
                                    style={{
                                        animationDelay: `${index * 0.1}s`
                                    }}
                                >
                                    {
                                        section === 'Inicio' ? 'Inicio' :
                                            section === 'Servicios' ? 'Servicios' :
                                                section === 'TestVelocidad' ? 'Test de Velocidad' :
                                                section === 'PQR' ? 'PQR' :
                                                    'Contacto'
                                    }
                                </motion.button>
                            ))}
                            {/* Enlace externo */}
                            <motion.a
                                href="https://kanela.distriserver.net:2096/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black dark:text-white hover:text-blue-600 transition-colors duration-300"
                                variants={buttonHover}
                                initial="initial"
                                whileHover="hover"
                                whileTap="tap"
                                style={{
                                    animationDelay: `${0.4}s` // un pequeño delay extra
                                }}
                            >
                                Webmail
                            </motion.a>
                        </div>
                    </div>

                </div>
            </nav>

        </motion.header>
    );
};

export default Header