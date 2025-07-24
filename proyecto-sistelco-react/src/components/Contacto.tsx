import React from 'react';
import { dataSISTELCO } from '../data/dataSISTELCO.ts';
import { motion } from 'framer-motion';
import {
    fadeInUp,
    slideInFromLeft,
    staggerContainer,
    staggerItem
} from '../animations/animations.tsx';
import { MessageCircle, Phone, MapPin, Zap } from 'lucide-react';

const Contacto: React.FC = () => {
    return (
        <section id="Contacto" style={{ paddingTop: '20px' }} className="pb-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                {/* Header de la sección */}
                <motion.div
                    className="text-center mb-12"
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Badge de identificación */}
                    <motion.div
                        className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium text-white shadow-lg hover:shadow-xl transition-all duration-300 mb-6"
                        style={{ backgroundColor: '#34991f' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                    >
                        <Zap className="w-4 h-4 mr-2" />
                        Empresa 100% Boyacense
                    </motion.div>

                    {/* Título principal */}
                    <motion.h1 
                        className="text-4xl md:text-4xl font-bold text-gray-900 mb-3"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        {dataSISTELCO.company.name}
                    </motion.h1>

                    {/* Subtítulo */}
                    <motion.h3 
                        className="text-xl md:text-2xl font-semibold text-gray-600 mb-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        Tu Proveedor de Confianza en Telecomunicaciones
                    </motion.h3>

                    {/* Descripción */}
                    <motion.p 
                        className="text-gray-600 max-w-3xl mx-auto text-lg"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        Conectándote con el mundo a través de la mejor tecnología y un servicio excepcional. 
                        Nos especializamos en brindar servicios de telecomunicaciones de alta calidad.
                    </motion.p>

                    <motion.div 
                        className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full"
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: 96, opacity: 1 }}
                        transition={{ delay: 1.0, duration: 0.8 }}
                    />
                </motion.div>

                {/* Contenedor principal con el estilo unificado */}
                <motion.div
                    className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col items-center justify-center text-center group"
                    style={{
                        borderRadius: '32px',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                    }}
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Cards de contacto */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-4 mb-12"
                        variants={slideInFromLeft}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {/* WhatsApp Card */}
                        <motion.div
                            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-green-300 min-h-[160px] flex flex-col items-center justify-center text-center group hover:-translate-y-2"
                            style={{
                                borderRadius: '20px',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                            }}
                            variants={staggerItem}
                        >
                            <div
                                className="w-18 h-18 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                                style={{
                                    width: '72px',
                                    height: '72px',
                                    borderRadius: '15px',
                                    background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                                    boxShadow: '0 8px 16px rgba(37, 211, 102, 0.3), 0 4px 6px rgba(0,0,0,0.1)'
                                }}
                            >
                                <MessageCircle 
                                    className="text-white" 
                                    size={32}
                                    style={{ 
                                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                                        strokeWidth: 2
                                    }} 
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">WhatsApp</h3>
                            <p className="text-gray-600 font-medium mb-1">{dataSISTELCO.company.whatsapp}</p>
                            <p className="text-sm text-gray-500">Atención inmediata</p>
                        </motion.div>

                        {/* Teléfono Card */}
                        <motion.div
                            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-300 min-h-[160px] flex flex-col items-center justify-center text-center group hover:-translate-y-2"
                            style={{
                                borderRadius: '20px',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                            }}
                            variants={staggerItem}
                        >
                            <div
                                className="w-18 h-18 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                                style={{
                                    width: '72px',
                                    height: '72px',
                                    borderRadius: '15px',
                                    background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
                                    boxShadow: '0 8px 16px rgba(59, 130, 246, 0.3), 0 4px 6px rgba(0,0,0,0.1)'
                                }}
                            >
                                <Phone 
                                    className="text-white" 
                                    size={32}
                                    style={{ 
                                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                                        strokeWidth: 2
                                    }} 
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Teléfono</h3>
                            <p className="text-gray-600 font-medium mb-1">{dataSISTELCO.company.contactPhone}</p>
                            <p className="text-sm text-gray-500">Soporte técnico</p>
                        </motion.div>

                        {/* Dirección Card */}
                        <motion.div
                            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-red-300 min-h-[160px] flex flex-col items-center justify-center text-center group hover:-translate-y-2"
                            style={{
                                borderRadius: '20px',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                            }}
                            variants={staggerItem}
                        >
                            <div
                                className="w-18 h-18 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                                style={{
                                    width: '72px',
                                    height: '72px',
                                    borderRadius: '15px',
                                    background: 'linear-gradient(135deg, #dc2626 0%, #f59e0b 100%)',
                                    boxShadow: '0 8px 16px rgba(220, 38, 38, 0.3), 0 4px 6px rgba(0,0,0,0.1)'
                                }}
                            >
                                <MapPin 
                                    className="text-white" 
                                    size={32}
                                    style={{ 
                                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                                        strokeWidth: 2
                                    }} 
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Dirección</h3>
                            <p className="text-gray-600 font-medium mb-1 text-sm leading-tight">{dataSISTELCO.company.contactAddress}</p>
                            <p className="text-sm text-gray-500">Visítanos</p>
                        </motion.div>
                    </motion.div>

                    {/* Sección de características destacadas */}
                    <motion.div 
                        className="flex flex-wrap justify-center gap-4 mb-12"
                        variants={slideInFromLeft}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {[
                            { number: '500+', label: 'Clientes Satisfechos', color: '#1e3a8a' },
                            { number: '24/7', label: 'Soporte Disponible', color: '#3b82f6' },
                            { number: '99%', label: 'Tiempo de Actividad', color: '#fbbf24' }
                        ].map((stat, index) => (
                            <motion.div 
                                key={index}
                                className="text-center py-6"
                                variants={staggerItem}
                            >
                                <motion.div 
                                    className="text-4xl md:text-5xl font-bold mb-2"
                                    style={{ color: stat.color }}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: index * 0.1 + 0.5, duration: 0.5, type: "spring" }}
                                >
                                    {stat.number}
                                </motion.div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contacto;