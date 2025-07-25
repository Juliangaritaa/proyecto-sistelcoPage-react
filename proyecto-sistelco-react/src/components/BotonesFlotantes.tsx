import { Phone, MessageCircle, Mail } from "lucide-react";
import { dataSISTELCO } from '../data/dataSISTELCO.ts';
import React from 'react';
import { motion } from 'framer-motion';

const BotonesFlotantes: React.FC = () => {
    return (
        <div 
            style={{
                position: 'fixed',
                bottom: '24px',
                right: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                zIndex: 9999,
                pointerEvents: 'auto'
            }}
        >
            {/* WhatsApp */}
            <motion.a
                href={`https://wa.me/${dataSISTELCO.company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: '#25D366',
                    color: 'white',
                    textDecoration: 'none',
                    boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                }}
                aria-label="Contactar por WhatsApp"
                initial={{ opacity: 0, scale: 0, x: 100 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ 
                    delay: 0.1, 
                    duration: 0.3, 
                    type: "spring", 
                    stiffness: 250,
                    damping: 10
                }}
                whileHover={{ 
                    scale: 1.15, 
                    backgroundColor: '#1da851',
                    boxShadow: '0 6px 30px rgba(37, 211, 102, 0.6)',
                    rotate: [0, -10, 10, -10, 0],
                    transition: { rotate: { duration: 0.5 } }
                }}
                whileTap={{ scale: 0.9 }}
            >
                <MessageCircle size={28} strokeWidth={2} />
            </motion.a>

            {/* Llamar */}
            <motion.a
                href={`tel:${dataSISTELCO.company.contactPhone}`}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: '#007bff',
                    color: 'white',
                    textDecoration: 'none',
                    boxShadow: '0 4px 20px rgba(0, 123, 255, 0.4)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                }}
                aria-label="Llamar por teléfono"
                initial={{ opacity: 0, scale: 0, x: 100 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ 
                    delay: 0.1, 
                    duration: 0.3, 
                    type: "spring", 
                    stiffness: 250,
                    damping: 10
                }}
                whileHover={{ 
                    scale: 1.15, 
                    backgroundColor: '#0056b3',
                    boxShadow: '0 6px 30px rgba(0, 123, 255, 0.6)',
                    rotate: [0, -10, 10, -10, 0],
                    transition: { rotate: { duration: 0.5 } }
                }}
                whileTap={{ scale: 0.9 }}
            >
                <Phone size={28} strokeWidth={2} />
            </motion.a>

            {/* CORREO ELECTRONICO */}
            <motion.a
                href={`mailto:${dataSISTELCO.company.contactEmail}`}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: '#F54927',
                    color: 'white',
                    textDecoration: 'none',
                    boxShadow: '0 4px 20px rgba(0, 123, 255, 0.4)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                }}
                aria-label="Contactar por Correo Electrónico"
                initial={{ opacity: 0, scale: 0, x: 100 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ 
                    delay: 0.1, 
                    duration: 0.3, 
                    type: "spring", 
                    stiffness: 250,
                    damping: 10
                }}
                whileHover={{ 
                    scale: 1.15, 
                    backgroundColor: '#F54927',
                    boxShadow: '0 6px 30px rgba(0, 123, 255, 0.6)',
                    rotate: [0, -10, 10, -10, 0],
                    transition: { rotate: { duration: 0.5 } }
                }}
                whileTap={{ scale: 0.9 }}
            >
                <Mail size={28} strokeWidth={2} />
            </motion.a>

        </div>
    );
};

export default BotonesFlotantes;