'use client';

import { motion } from "framer-motion";
import { Code2, Blocks, Cpu } from "lucide-react";

const iconVariants = {
  rotate: {
    rotate: [0, 10, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const glowVariants = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const particleVariants = {
  animate: (i: number) => ({
    y: [0, -40, 0],
    x: [0, i % 2 === 0 ? 20 : -20, 0],
    opacity: [0, 1, 0],
    scale: [0.5, 1, 0.5],
    transition: {
      duration: 2 + Math.random(),
      repeat: Infinity,
      ease: "easeInOut",
      delay: Math.random() * 2,
    },
  }),
};

export function HeroIcon() {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] flex items-center justify-center">
      {/* Main Icon Animation */}
      <motion.div
        className="relative scale-75 sm:scale-100"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Glow Effects */}
        <motion.div
          className="absolute -inset-8 bg-sky-500/20 rounded-full blur-3xl"
          variants={glowVariants}
          animate="animate"
        />
        <motion.div
          className="absolute -inset-12 bg-indigo-500/10 rounded-full blur-2xl"
          variants={glowVariants}
          animate="animate"
        />

        {/* Icon Stack */}
        <div className="relative">
          <motion.div
            className="absolute inset-0 text-sky-400/80"
            variants={iconVariants}
            animate="rotate"
          >
            <Blocks className="w-24 h-24 sm:w-32 sm:h-32" />
          </motion.div>
          <motion.div
            className="absolute inset-0 text-indigo-400/80"
            variants={iconVariants}
            animate="pulse"
          >
            <Code2 className="w-24 h-24 sm:w-32 sm:h-32" />
          </motion.div>
          <Cpu className="w-24 h-24 sm:w-32 sm:h-32 text-purple-400/80" />
        </div>

        {/* Floating Particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${50 + (i % 2 === 0 ? 20 : -20)}%`,
              top: "50%",
            }}
            custom={i}
            variants={particleVariants}
            animate="animate"
          >
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-sky-400 to-indigo-400" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}