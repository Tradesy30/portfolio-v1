'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import type { ReactElement } from "react";

type FloatingIcon = {
  icon: ReactElement | string;
  color: string;
  isImage?: boolean;
}

const techIcons: FloatingIcon[] = [
  {
    icon: "/icons/nextjs.svg",
    color: "text-white",
    isImage: true
  },
  {
    icon: "/icons/typescript.svg",
    color: "text-blue-400",
    isImage: true
  },
  {
    icon: "/icons/react.svg",
    color: "text-sky-400",
    isImage: true
  },
  {
    icon: "/icons/nodejs.svg",
    color: "text-green-500",
    isImage: true
  },
  {
    icon: "/icons/tailwind.svg",
    color: "text-cyan-400",
    isImage: true
  },
  {
    icon: "/icons/javascript.svg",
    color: "text-yellow-400",
    isImage: true
  },
  {
    icon: "/icons/mongodb.svg",
    color: "text-green-500",
    isImage: true
  },
  {
    icon: "/icons/framer-motion.svg",
    color: "text-purple-400",
    isImage: true
  },
  {
    icon: "/icons/git.svg",
    color: "text-orange-500",
    isImage: true
  }
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
                {icon.isImage ? (
                  <Image
                    src={icon.icon as string}
                    alt="Tech stack icon"
                    width={size * 0.7}
                    height={size * 0.7}
                    className="object-contain"
                  />
                ) : (
                  icon.icon
                )}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}