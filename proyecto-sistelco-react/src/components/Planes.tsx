import React from "react";
import { motion } from "framer-motion";
import { streamingServices } from "../data/dataSISTELCO";
import {
    slideInFromLeft,
    slideInFromRight,
    staggerContainer,
    staggerItem,
} from "../animations/animations";

const Planes: React.FC = () => {
    return (
        <section className="pt-5 px-6 py-16 min-h-screen flex items-center bg-gray-50">
            <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 bg-gray-50">
                {/* Cards de logos a la izquierda */}
                <motion.div
                    className="w-full lg:w-1/2 flex flex-col justify-center text-center mt-12"
                    variants={slideInFromLeft}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    <motion.h1
                        className="text-4xl md:text-4xl font-bold text-gray-900 mb-3 mt-5"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        Servicios de Streaming
                    </motion.h1>

                    <motion.h3
                        className="text-xl md:text-2xl font-semibold text-gray-600 mb-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0, duration: 0.6 }}
                    >
                        Conoce nuestros servicios de STREAMING
                    </motion.h3>

                    <motion.div
                        className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-12"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {(streamingServices?.planes ?? []).map((service, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center justify-center min-h-[120px] border border-gray-100"
                                variants={staggerItem}
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.3 }
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <img
                                    src={service.logo}
                                    alt={`${service.name || 'Streaming service'} logo`}
                                    className="w-16 h-16 object-contain filter drop-shadow-sm"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Imagen de stock a la derecha */}
                <motion.div
                    className="w-full lg:w-1/2 flex justify-center lg:justify-end"
                    variants={slideInFromRight}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                </motion.div>
            </div>
        </section>
    );
};

export default Planes;