import React from 'react';
import { dataSISTELCOServicios } from '../data/dataSISTELCO.ts';
import { motion } from 'framer-motion';
import {
    fadeInUp,
    fadeInUpDelayed,
    staggerContainer,
    staggerItem,
    scaleIn,
    buttonHoverAnimation
} from '../animations/animations.tsx';
import {
    Download,
    Activity,
    Wifi,
    Headphones,
    Ban,
    FileX,
    Signal,
    CreditCard,
    MonitorPlay,
    ShieldCheck,
    MapPin,
    TreePine,
    Sun,
    Home,
    CheckCircle,
    Zap
} from 'lucide-react';

// Mapeo de iconos
const iconMap = {
    Download,
    Activity,
    Wifi,
    Headset: Headphones,
    Ban,
    FileX,
    Signal,
    CreditCardX: CreditCard,
    MonitorPlay,
    ShieldCheck,
    MapPin,
    TreePine,
    Sun,
    HomeAutomation: Home
};

interface ServiceCardProps {
    service: {
        name: string;
        icon: string;
    };
    index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
    const IconComponent = iconMap[service.icon as keyof typeof iconMap] || CheckCircle;

    return (
        <motion.div
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-300 min-h-[130px] flex flex-col items-center justify-center text-center group hover:-translate-y-2"
            style={{
                borderRadius: '20px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            }}
            variants={staggerItem}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div
                className="w-18 h-18 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '15px',
                    background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #fbbf24 100%)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.15), 0 4px 6px rgba(0,0,0,0.1)'
                }}
            >
                <IconComponent 
                    className="text-white" 
                    size={32}
                    style={{ 
                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                        strokeWidth: 2
                    }} 
                />
            </div>

            {/* Título del servicio */}
            <h3 className="text-sm text-gray-600 leading-tight group-hover:text-blue-700 transition-colors duration-300">
                {service.name}
            </h3>
        </motion.div>
    );
};

const Servicios: React.FC = () => {
    const { title, subtitle, description, servicesList } = dataSISTELCOServicios.servicios;

    return (
        <section id="Servicios" style={{ paddingTop: '20px' }} className="pb-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header de la sección */}
                <motion.div
                    className="text-center mb-12"
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Badges con separación mejorada */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 py-6 mb-6">
                        <motion.div
                            className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium text-white shadow-lg hover:shadow-xl transition-all duration-300"
                            style={{
                                backgroundColor: '#1e3a8a'
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                        >
                            Servicios de Alta Calidad
                        </motion.div>

                        <motion.div
                            className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium text-white shadow-lg hover:shadow-xl transition-all duration-300"
                            style={{
                                backgroundColor: '#3b82f6'
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                        >
                            <Zap className="w-4 h-4 mr-2" />
                            Desde 50Mbps HASTA 1000Mbps
                        </motion.div>

                        <motion.div
                            className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium text-white shadow-lg hover:shadow-xl transition-all duration-300"
                            style={{
                                backgroundColor: '#fbbf24'
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                        >
                            <Zap className="w-4 h-4 mr-2" />
                            Internet desde $40.000
                        </motion.div>
                    </div>

                    {/* Título principal */}
                    <motion.h1 
                        className="text-4xl md:text-4xl font-bold text-gray-900 mb-3"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        {title}
                    </motion.h1>

                    {/* Subtítulo */}
                    <motion.h3 
                        className="text-xl md:text-2xl font-semibold text-gray-600 mb-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0, duration: 0.6 }}
                    >
                        {subtitle}
                    </motion.h3>

                    {/* Descripción */}
                    <motion.p 
                        className="text-gray-600 max-w-3xl mx-auto text-lg"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.6 }}
                    >
                        {description}
                    </motion.p>

                    <motion.div 
                        className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full"
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: 96, opacity: 1 }}
                        transition={{ delay: 1.4, duration: 0.8 }}
                    />
                </motion.div>

                <motion.div
                    className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
                    style={{
                        borderRadius: '32px',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                    }}
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div
                        className="flex flex-wrap justify-center gap-4"
                        variants={staggerContainer}
                    >
                        {servicesList.map((service, index) => (
                            <div key={index} className="w-32 sm:w-36 md:w-40">
                                <ServiceCard
                                    service={service}
                                    index={index}
                                />
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default Servicios;