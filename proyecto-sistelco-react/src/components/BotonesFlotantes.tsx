import { Phone, MessageCircle } from "lucide-react";
import { dataSISTELCO } from '../data/dataSISTELCO.ts';
import React from 'react';
import { motion } from 'framer-motion';

const BotonesFlotantes: React.FC = () => {
    return (
        <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
            {/* Whatsapp */}
            <a
                href={`https://wa.me/${dataSISTELCO.company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg transition duration-300"
                aria-label="WhatsApp"
            >
                <MessageCircle className="w-6 h-6" />
            </a>

            {/* Llamar */}
            <a
                href={`tel:${dataSISTELCO.company.contactPhone}`}
                className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition duration-300"
                aria-label="Llamar"
            >
                <Phone className="w-6 h-6" />
            </a>
        </div>
    );
};

export default BotonesFlotantes;