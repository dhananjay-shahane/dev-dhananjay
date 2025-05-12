"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { GoCopilot } from "react-icons/go";
import { SiMake, SiN8N } from "react-icons/si";
import { FaRobot, FaBrain } from "react-icons/fa";
import { TbCircuitDiode } from "react-icons/tb";

export function CardDemo() {
  return (
    <Card>
      <CardSkeletonContainer>
        <Skeleton />
      </CardSkeletonContainer>
    </Card>
  );
}

const Skeleton = () => {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    // Set to visible after a short delay for initial animation
    const timer = setTimeout(() => setIsInView(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Icons with their properties
  const icons = [
    { 
      Icon: TbCircuitDiode, 
      color: "text-emerald-400", 
      size: 24, 
      containerClass: "h-10 w-10 from-emerald-900 to-emerald-700" 
    },
    { 
      Icon: FaBrain, 
      color: "text-blue-400", 
      size: 24, 
      containerClass: "h-12 w-12 from-blue-900 to-blue-700" 
    },
    { 
      Icon: SiN8N, 
      color: "text-violet-300", 
      size: 32, 
      containerClass: "h-14 w-14 from-violet-900 to-violet-700" 
    },
    { 
      Icon: GoCopilot, 
      color: "text-purple-300", 
      size: 38, 
      containerClass: "h-16 w-16 from-purple-900 to-purple-700" 
    },
    { 
      Icon: FaRobot, 
      color: "text-blue-300", 
      size: 32, 
      containerClass: "h-14 w-14 from-cyan-900 to-cyan-700" 
    },
    { 
      Icon: SiMake, 
      color: "text-pink-300", 
      size: 24, 
      containerClass: "h-12 w-12 from-pink-900 to-pink-700" 
    },
  ];
  
  return (
    <div className="p-4 overflow-hidden h-full relative flex flex-col items-center justify-center">
      {/* Neural Network Background Effect */}
      <div className="absolute inset-0 opacity-20">
        <NeuralNetworkBackground />
      </div>
    
      
      {/* Scrolling icons row */}
      <div 
        ref={containerRef}
        className="flex flex-row shrink-0 justify-center items-center gap-x-6 z-10 overflow-visible"
      >
        {icons.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            initial={{ opacity: 0, x: 100, scale: 0.8, filter: "blur(8px)" }}
            animate={isInView ? {
              opacity: 1,
              x: 0,
              scale: 1,
              filter: "blur(0px)"
            } : {}}
            transition={{
              delay: index * 0.15,
              duration: 0.7,
              ease: "easeOut"
            }}
          >
            <Container 
              className={`${item.containerClass} bg-gradient-to-br`}
            >
              <motion.div
                animate={{
                  y: ["0px", "-8px", "0px"],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2 + (index * 0.3),
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: index * 0.2
                }}
              >
                <item.Icon className={item.color} size={item.size} />
              </motion.div>
            </Container>
          </motion.div>
        ))}
      </div>
      
      {/* Data stream effect */}
      <div className="relative w-full h-1 my-6 z-20">
        <DataStream />
      </div>
    </div>
  );
};

const DataStream = () => {
  return (
    <div className="w-full h-px bg-gradient-to-r from-blue-500 to-purple-500 relative">
      {/* Data packets moving along the stream */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`packet-${i}`}
          className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_10px_2px_rgba(6,182,212,0.7)]"
          initial={{ left: "100%", opacity: 0.8 }}
          animate={{ 
            left: "-5%", 
            opacity: [0.2, 0.8, 0.2] 
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.7,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

const NeuralNetworkBackground = () => {
  return (
    <div className="w-full relative">
      {/* Nodes */}
      {[...Array(12)].map((_, i) => {
        const randTop = Math.random() * 100;
        const randLeft = Math.random() * 100;
        const randTop2 = Math.random() * 100;
        const randLeft2 = Math.random() * 100;
        
        return (
          <motion.div
            key={`node-${i}`}
            className="absolute w-2 h-2 rounded-full bg-blue-500"
            style={{ 
              top: `${randTop}%`, 
              left: `${randLeft}%`,
              boxShadow: "0 0 4px 1px rgba(59, 130, 246, 0.3)"
            }}
            animate={{ 
              top: [`${randTop}%`, `${randTop2}%`],
              left: [`${randLeft}%`, `${randLeft2}%`],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          />
        );
      })}
      
      {/* Connection lines */}
      {[...Array(18)].map((_, i) => {
        const width = Math.random() * 50 + 20;
        const rotate = Math.random() * 360;
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        
        return (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-blue-400 to-purple-500"
            style={{
              width: `${width}%`,
              transform: `rotate(${rotate}deg)`,
              top: `${top}%`,
              left: `${left}%`,
              transformOrigin: "0 0"
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        );
      })}
    </div>
  );
};

const Sparkles = () => {
  return (
    <div className="absolute inset-0">
      {[...Array(20)].map((_, i) => {
        const size = Math.random() * 2 + 1;
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const delay = Math.random() * 2;
        
        return (
          <motion.span
            key={`star-${i}`}
            className="absolute inline-block bg-cyan-300"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              borderRadius: "50%",
              top: `${top}%`,
              left: `${left}%`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 1 + Math.random() * 2,
              repeat: Infinity,
              delay: delay,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-w-md w-full mx-auto p-4 rounded-xl border border-indigo-900/40 bg-gradient-to-br from-gray-950 to-indigo-950 shadow-[0_0_20px_rgba(79,70,229,0.15)] group relative overflow-hidden",
        className
      )}
    >
      {/* Animated gradient border */}
      <motion.div 
        className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 rounded-xl blur opacity-10 group-hover:opacity-20 transition duration-1000"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Inner content */}
      <div className="relative">
        {children}
      </div>
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-lg font-semibold text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 py-2",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-sm font-normal text-blue-100/70 max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "h-80 md:h-96 rounded-xl z-40",
        className,
        showGradient &&
          "bg-gradient-to-br from-indigo-950 to-black [mask-image:radial-gradient(70%_70%_at_50%_50%,white_30%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center 
        bg-gradient-to-br from-indigo-950 to-black
        shadow-[0px_0px_12px_3px_rgba(99,102,241,0.25),0px_0px_8px_0px_rgba(129,140,248,0.1)_inset]
        hover:shadow-[0px_0px_15px_5px_rgba(99,102,241,0.3),0px_0px_10px_0px_rgba(129,140,248,0.15)_inset]
        transition-all duration-300
        `,
        className
      )}
    >
      {children}
    </div>
  );
};