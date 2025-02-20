'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Cpu,
  Database,
  Layout,
  Server,
  Terminal,
} from "lucide-react";
import type { ReactElement } from "react";

type FloatingIcon = {
  icon: ReactElement;
  color: string;
}

const techIcons: FloatingIcon[] = [
  {
    icon: <Code2 className="w-full h-full" />,
    color: "text-sky-400/50"
  },
  {
    icon: <Layout className="w-full h-full" />,
    color: "text-indigo-400/50"
  },
  {
    icon: <Database className="w-full h-full" />,
    color: "text-emerald-400/50"
  },
  {
    icon: <Terminal className="w-full h-full" />,
    color: "text-purple-400/50"
  },
  {
    icon: <Server className="w-full h-full" />,
    color: "text-rose-400/50"
  },
  {
    icon: <Cpu className="w-full h-full" />,
    color: "text-amber-400/50"
  },
];

interface FloatingIconsProps {
  count?: number;
  speed?: number;
  minSize?: number;
  maxSize?: number;
}

export function FloatingIcons({
  count = 8,
  speed = 1,
  minSize = 40,
  maxSize = 60,
}: FloatingIconsProps) {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    setMounted(true);

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const getRandomPosition = () => ({
    x: Math.random() * (dimensions.width - maxSize),
    y: Math.random() * (dimensions.height - maxSize),
  });

  const getRandomSize = () => minSize + Math.random() * (maxSize - minSize);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: count }).map((_, i) => {
        const icon = techIcons[i % techIcons.length];
        const size = getRandomSize();
        const position = getRandomPosition();
        const duration = (15 + Math.random() * 15) / speed;

        return (
          <motion.div
            key={i}
            className="absolute"
            initial={position}
            animate={{
              x: [position.x, getRandomPosition().x, getRandomPosition().x],
              y: [position.y, getRandomPosition().y, getRandomPosition().y],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "linear",
              times: [0, 0.5, 1],
            }}
          >
            <div
              className={`relative backdrop-blur-sm rounded-xl border border-white/10 flex items-center justify-center transform hover:scale-110 transition-transform bg-gray-900/30 p-3`}
              style={{ width: size, height: size }}
            >
              <div className={`w-full h-full ${icon.color}`}>
                {icon.icon}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}