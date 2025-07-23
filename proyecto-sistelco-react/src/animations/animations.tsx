import type { Variants } from "framer-motion";

export const slideInFromTop: Variants = {
    hidden: { opacity: 0, y: -60 },
    visible: { opacity: 1, 
        y: 0, 
        transition: { 
            duration: 0.5,
            ease: 'easeOut'
        } 
    },
}

export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, 
        transition: { 
            duration: 0.6,
            ease: 'easeInOut'
        } 
    },
};

// Animaciones para los botones

export const buttonHover: Variants = {
    initial: { scale: 1 },
    hover: { 
        scale: 1.05, 
        transition: { 
            duration: 0.3, 
            ease: 'easeInOut' 
        } 
    },
    tap: { scale: 0.95 }
};

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export const fadeInUpDelayed = (delay: number): Variants => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, delay } }
});

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

export const slideInFromLeft: Variants = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0, transition: { duration: 1 } }
};

export const slideInFromRight: Variants = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0, transition: { duration: 1 } }
};

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
};

export const scaleInDelayed = (delay: number): Variants => ({
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.6, delay } }
});

export const bounceIn: Variants = {
  initial: { opacity: 0, scale: 0.3 },
  animate: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.8,
      type: "spring",
      stiffness: 100,
      damping: 10
    } 
  }
};

export const rotateIn: Variants = {
  initial: { opacity: 0, rotate: -180 },
  animate: { opacity: 1, rotate: 0, transition: { duration: 0.8 } }
};

// Animaciones específicas para el componente Inicio
export const heroTitleAnimation: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }
};

export const heroLineAnimation: Variants = {
  initial: { width: 0, opacity: 0 },
  animate: { width: 80, opacity: 1, transition: { duration: 0.8, delay: 0.5 } }
};

export const heroDescriptionAnimation: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.7 } }
};

export const heroButtonsAnimation: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.9 } }
};

export const scrollIndicatorAnimation: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1, delay: 1.2 } }
};

export const scrollIndicatorBounce: Variants = {
  animate: { 
    y: [0, 10, 0],
    transition: { 
      duration: 2, 
      repeat: Infinity,
      ease: "easeInOut"
    } 
  }
};

export const scrollIndicatorDot: Variants = {
  animate: { 
    y: [0, 12, 0],
    transition: { 
      duration: 2, 
      repeat: Infinity,
      ease: "easeInOut"
    } 
  }
};

export const decorativeCircleAnimation = (delay: number = 0): Variants => ({
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 0.1, scale: 1, transition: { duration: 2, delay } }
});

export const decorativeCircleSmallAnimation: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 0.05, scale: 1, transition: { duration: 3, delay: 0.5 } }
};

// Animaciones de hover para botones
export const buttonHoverAnimation = {
  whileHover: { 
    scale: 1.05,
    transition: { duration: 0.3 }
  },
  whileTap: { 
    scale: 0.98,
    transition: { duration: 0.1 }
  }
};

export const buttonSecondaryHoverAnimation = {
  whileHover: { 
    backgroundColor: "rgba(255, 255, 255, 1)",
    color: "rgba(17, 24, 39, 1)",
    transition: { duration: 0.3 }
  }
};

// Animaciones para elementos de entrada staggered
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

// Animaciones para overlay y fondo
export const overlayAnimation: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1.5 } }
};

export const backgroundImageAnimation: Variants = {
  initial: { scale: 1.1 },
  animate: { scale: 1, transition: { duration: 10 } }
};