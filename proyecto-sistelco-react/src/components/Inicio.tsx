import React from 'react';
import { motion } from 'framer-motion';
import { dataSISTELCOInicio } from '../data/dataSISTELCO.ts';
import {
    heroTitleAnimation,
    heroLineAnimation,
    heroDescriptionAnimation,
    scrollIndicatorAnimation,
    scrollIndicatorBounce,
    scrollIndicatorDot,
    decorativeCircleAnimation,
    decorativeCircleSmallAnimation,
    overlayAnimation,
    backgroundImageAnimation
} from '../animations/animations.tsx';

interface InicioProps {
    scrollToSection: (sectionId: string) => void;
}

const Inicio: React.FC<InicioProps> = ({ scrollToSection }) => {
    return (
        <section id="Inicio" className="min-h-screen flex items-center justify-center">
            {/* Imagen de fondo con animación */}
            <motion.div
                className="absolute inset-0 z-0"
            >
                <img
                    src={dataSISTELCOInicio.inicio.image}
                    alt="Oficina moderna"
                    className='w-full h-full object-cover'
                />
                
                {/* Superposición base más intensa para mejor contraste */}
                <div className="absolute inset-0 bg-black/50" />
                
                {/* Overlay con gradiente animado más intenso */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50"
                    {...overlayAnimation}
                />
                
                {/* Superposición adicional en el área del texto para máxima legibilidad */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
            </motion.div>

            {/* Contenido principal */}
            <div className="relative z-20 flex items-center h-full">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="max-w-3xl">
                        {/* Título principal con animación */}
                        <motion.h1
                            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)' }}
                            {...heroTitleAnimation}
                        >
                            {dataSISTELCOInicio.inicio.title}
                        </motion.h1>

                        {/* Línea decorativa */}
                        <motion.div
                            className="h-1 bg-blue-500 mb-8"
                            {...heroLineAnimation}
                        />

                        <motion.div
                            className="text-lg lg:text-4xl font-semibold text-white mb-6"
                            style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.8), 0 0 15px rgba(0,0,0,0.5)' }}
                            {...heroTitleAnimation}
                        >
                            {dataSISTELCOInicio.inicio.subtitle}
                        </motion.div>

                        {/* Descripción */}
                        <motion.div
                            className="max-w-2xl"
                            {...heroDescriptionAnimation}
                        >
                            <p 
                                className="text-lg md:text-xl text-white leading-relaxed mb-8"
                                style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.9), 0 0 10px rgba(0,0,0,0.6)' }}
                            >
                                {dataSISTELCOInicio.inicio.description}
                            </p>
                        </motion.div>

                        <motion.div
                            className="max-w-2xl"
                            {...heroDescriptionAnimation}
                        >
                            <p 
                                className="text-lg md:text-xl text-white leading-relaxed mb-8"
                                style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.9), 0 0 10px rgba(0,0,0,0.6)' }}
                            >
                                {dataSISTELCOInicio.inicio.contactoText}
                            </p>
                        </motion.div>

                    </div>
                </div>
            </div>

            {/* Elementos decorativos flotantes */}
            <motion.div
                className="absolute top-20 right-20 w-64 h-64 border border-white/30 rounded-full z-10 hidden lg:block"
                {...decorativeCircleAnimation()}
            />
            <motion.div
                className="absolute bottom-20 right-40 w-32 h-32 border border-white/30 rounded-full z-10 hidden lg:block"
                {...decorativeCircleSmallAnimation}
            />
        </section>
    );
};

export default Inicio;