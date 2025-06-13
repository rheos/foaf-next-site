'use client';

import { motion, easeIn, easeOut } from 'framer-motion';
import { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

const containerVariants = {
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      stiffness: 30,
      damping: 30,
      mass: 1.5,
    },
  },
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.92,
    transition: { duration: 0.8, ease: easeIn },
  },
};

export default function AnimatedSection({ children }: { children: ReactNode }) {
  const { ref, inView } = useInView({ threshold: 0.6 });

  return (
    <div ref={ref} className="w-full max-w-3xl mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {children}
      </motion.div>
    </div>
  );
}
