import { useEffect } from 'react';
import { useInView, useAnimation, type AnimationControls } from 'framer-motion';
import { type RefObject } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  once?: boolean;
  amount?: 'some' | 'all' | number;
}

export const useScrollAnimation = (
  ref: RefObject<HTMLElement | null>,
  options: ScrollAnimationOptions = {}
): [boolean, AnimationControls] => {
  const controls = useAnimation();
  const { once = true, amount = 0.5 } = options;

  const isInView = useInView(ref, {
    amount,
    once,
  });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [isInView, controls, once]);

  return [isInView, controls];
};

// Common animation variants
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};