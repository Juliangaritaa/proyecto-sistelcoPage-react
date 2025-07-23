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
            className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-300 min-h-[120px] flex flex-col items-center justify-center text-center group hover:-translate-y-1"
            variants={staggerItem}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
        >
            {/* Icono con degradado */}
            <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                style={{
                    background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #fbbf24 100%)'
                }}
            >
                <IconComponent className="w-8 h-8 rounded-xl text-white" style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))' }} />
            </div>
            
            {/* Título del servicio */}
            <h3 className="text-sm font-medium text-gray-600 leading-tight group-hover:text-blue-700 transition-colors duration-300">
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
                    {/* Badge */}
                    <div className="flex flex-row flex-wrap justify-center items-center gap-x-6 gap-y-4 py-4">
                        <div
                            className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                            style={{
                                backgroundColor: '#1e3a8a'
                            }}
                        >
                            Servicios de Alta Calidad
                        </div>

                        <div
                            className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                            style={{
                                backgroundColor: '#3b82f6'
                            }}
                        >
                            <Zap className="w-4 h-4 mr-2" />
                            Desde 50Mbps HASTA 1000Mbps
                        </div>

                        <div
                            className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                            style={{
                                backgroundColor: '#fbbf24'
                            }}
                        >
                            <Zap className="w-4 h-4 mr-2" />
                            Internet desde $40.000
                        </div>
                    </div>


                    {/* Título principal */}
                    <h1 className="text-4xl md:text-4xl font-bold text-gray-900 mb-3">
                        {title}
                    </h1>

                    {/* Subtítulo */}
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-600 mb-4">
                        {subtitle}
                    </h3>

                    {/* Descripción */}
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                        {description}
                    </p>

                    <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
                </motion.div>

                {/* Grid de servicios */}
                <motion.div 
                className="flex flex-wrap justify-center gap-4 mb-16"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
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
            </div>
        </section>
    );
};

export default Servicios;