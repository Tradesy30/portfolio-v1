'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({ children, className = '', delay = 0 }: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, controls] = useScrollAnimation(ref, {
    once: true,
    amount: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        ...fadeInUp,
        visible: {
          ...fadeInUp.visible,
          transition: {
            ...fadeInUp.visible.transition,
            delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}