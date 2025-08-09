import React, { useState, useEffect } from 'react';
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
    const [isMobile, setIsMobile] = useState(false);
    const navLinks = ['Inicio', 'Servicios', 'TestVelocidad', 'Contacto', 'PQR'];

    // Hook para detectar el tamaño de pantalla
    useEffect(() => {
        const checkScreenSize = () => {
            const screenWidth = window.innerWidth;
            const isMobileScreen = screenWidth < 768; // 768px es el breakpoint md de Tailwind
            
            setIsMobile(isMobileScreen);
            
            // Si cambia a desktop, cerrar el menú móvil automáticamente
            if (!isMobileScreen && isMobileOpen) {
                setIsMobileOpen(false);
            }
        };

        // Verificar al montar el componente
        checkScreenSize();

        // Agregar listener para cambios de tamaño
        window.addEventListener('resize', checkScreenSize);

        // Limpiar el listener al desmontar
        return () => window.removeEventListener('resize', checkScreenSize);
    }, [isMobileOpen]);

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
                    <div className={`${isMobile ? 'hidden' : 'flex'} items-center gap-6`}>
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
                    {isMobile && (
                        <div>
                            <button
                                className="text-black dark:text-white"
                                onClick={() => setIsMobileOpen(!isMobileOpen)}>
                                {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    )}

                </div>

            </nav>

            {/* Menú móvil - Posicionado fuera del nav para evitar superposiciones */}
            {isMobile && isMobileOpen && (
                <>
                    {/* Overlay para cerrar el menú al hacer clic fuera */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={() => setIsMobileOpen(false)}
                    />
                    
                    {/* Menú móvil */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="fixed top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg z-50 border-t border-gray-200 dark:border-gray-700"
                    >
                        <div className="container mx-auto px-6 py-4">
                            <div className="flex flex-col space-y-3">
                                {navLinks.map((section) => (
                                    <button
                                        key={section}
                                        onClick={() => {
                                            scrollToSection(section);
                                            setIsMobileOpen(false);
                                        }}
                                        className="text-black dark:text-white hover:text-blue-600 transition-colors duration-300 text-left py-2"
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
                                    className="text-black dark:text-white hover:text-blue-600 transition-colors duration-300 text-left py-2"
                                    onClick={() => setIsMobileOpen(false)}
                                >
                                    Webmail
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}

        </motion.header>
    );
};

export default Header;