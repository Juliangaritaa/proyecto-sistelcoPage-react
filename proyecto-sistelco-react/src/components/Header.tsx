import React, { useState } from 'react';
import { slideInFromTop, fadeIn, buttonHover } from '../animations/animations.tsx';
import { motion } from 'framer-motion';
import { dataSISTELCO } from '../data/dataSISTELCO.ts';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
    isScrolled: boolean;
    scrollToSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ isScrolled, scrollToSection }) => {

    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const navLinks = ['Inicio', 'Servicios', 'TestVelocidad', 'Contacto', 'PQR'];

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 mb-5 ${isScrolled ? 'bg-white dark:bg-gray-900 shadow-lg' : 'bg-transparent'
                }`}
            initial="hidden"
            animate="visible"
            variants={slideInFromTop}>

            <nav className='container mx-auto px-6 py-4'>
                <div className='flex justify-between items-center'>

                    {/* Logo */}
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

                    {/* Menú Desktop - Solo visible en pantallas medianas y grandes */}
                    <div className='hidden md:flex items-center gap-6'>
                        {navLinks.map((section, index) => (
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
                                animationDelay: `${navLinks.length * 0.1}s`
                            }}
                        >
                            Webmail
                        </motion.a>
                    </div>

                    {/* Botón hamburguesa - Solo visible en móvil */}
                    <div className="md:hidden">
                        <button
                            className="text-black dark:text-white"
                            onClick={() => setIsMobileOpen(!isMobileOpen)}>
                            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                </div>

                {/* Menú móvil - Solo se muestra cuando isMobileOpen es true */}
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700"
                    >
                        <div className="flex flex-col space-y-3 pt-4">
                            {navLinks.map((section) => (
                                <button
                                    key={section}
                                    onClick={() => {
                                        scrollToSection(section);
                                        setIsMobileOpen(false);
                                    }}
                                    className="text-black dark:text-white hover:text-blue-600 transition-colors duration-300 text-left"
                                >
                                    {section === 'Inicio' ? 'Inicio' :
                                        section === 'Servicios' ? 'Servicios' :
                                            section === 'TestVelocidad' ? 'Test de Velocidad' :
                                                section === 'PQR' ? 'PQR' :
                                                    'Contacto'}
                                </button>
                            ))}
                            <a
                                href="https://kanela.distriserver.net:2096/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black dark:text-white hover:text-blue-600 transition-colors duration-300 text-left"
                                onClick={() => setIsMobileOpen(false)}
                            >
                                Webmail
                            </a>
                        </div>
                    </motion.div>
                )}

            </nav>

        </motion.header>
    );
};

export default Header;