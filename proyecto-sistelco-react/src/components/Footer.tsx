import React from 'react';
import { motion } from 'framer-motion';
import { dataSISTELCO } from '../data/dataSISTELCO';
import {
  fadeIn,
  staggerContainer
} from '../animations/animations';

const Footer: React.FC = () => {

  return (
    <footer className="bg-gray-900 py-12 mt-12 mb-8 text-black">
      <div className="container mx-auto px-6 text-center">
        <motion.p
          className="mb-4"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
        >
          © 2025 {dataSISTELCO.company.name}. 
          <p> Boyacá - Colombia. </p>
        </motion.p>

        <motion.div
          className="flex justify-center gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
