import React from 'react';
import { dataSISTELCOServicios } from '../data/dataSISTELCO.ts';
import { motion } from 'framer-motion';

const Servicios: React.FC = () => {
    const { title, subtitle, description, servicesList } = dataSISTELCOServicios.servicios

    return ( 
        <section className="py-16 bg-white px-6 sm:px-10 lg:px20">
            <div className="text-center mb-10">
                <h2 className='text-3xl font-bold text-[#171c27]'>{title}</h2>
                <p className="text-xl text-[#171c27] mt-2">{subtitle}</p>
                <p className="text-[#4b5563] mt-4 max-w-xl mx-auto">{description}</p>
            </div>
        </section>  
              
    )
};

export default Servicios;