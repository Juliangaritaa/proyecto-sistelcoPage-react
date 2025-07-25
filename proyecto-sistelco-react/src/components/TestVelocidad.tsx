import React from 'react';
import { dataSISTELCO } from '../data/dataSISTELCO.ts';
import { motion } from 'framer-motion';
import {
    fadeInUp,
    slideInFromLeft,
    staggerContainer,
    staggerItem
} from '../animations/animations.tsx';

const TestVelocidad: React.FC = () => {
    return (
        <section id="TestVelocidad" style={{ paddingTop: '20px' }} className="pb-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                {/* Contenedor principal con el estilo unificado */}
                <motion.div
                    className="bg-white rounded-3xl p-8 md:p-12 flex flex-col items-center justify-center text-center group"
                    style={{
                        borderRadius: '32px',
                    }}
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                >

                    {/* Título principal */}
                    <motion.h1
                        className="text-4xl md:text-4xl font-bold text-gray-900 mb-3"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        Test de Velocidad
                    </motion.h1>

                    {/* Subtítulo */}
                    <motion.h3
                        className="text-xl md:text-2xl font-semibold text-gray-600 mb-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        Mide la velocidad de tu conexión a Internet
                    </motion.h3>

                    <motion.div 
                        className="w-full h-[600px]"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}>
                        
                        <iframe
                            src="https://fast.com"
                            title="Test de velocidad Suma Móvil"
                            width="100%"
                            height="100%"
                            style={{ border: 'none' }}
                            allow="fullscreen"
                        />
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default TestVelocidad;