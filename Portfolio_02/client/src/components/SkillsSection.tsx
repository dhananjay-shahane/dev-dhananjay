"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaWordpress, FaRobot 
} from 'react-icons/fa';
import { 
  SiOpenai, SiReplit, SiN8N, 
  SiMake, SiBootstrap, SiTailwindcss, SiNextdotjs 
} from 'react-icons/si';
import { MdOutlineDevices } from 'react-icons/md';
import { TbBrowserCheck } from 'react-icons/tb'
import { PulseBeams } from "@/components/ui/pulse-beams";

// Define types for our data structures
interface TechIcon {
  icon: React.ReactNode;
  name: string;
}

interface TechCategory {
  name: string;
  color: string;
  textColor: string;
  borderColor: string;
  icons: TechIcon[];
}

// Categories with icons
const techCategories: TechCategory[] = [
  {
    name: "Frontend",
    color: "from-blue-600 to-cyan-600",
    textColor: "text-blue-300",
    borderColor: "border-blue-600/30",
    icons: [
      { icon: <FaHtml5 size={25} className="text-orange-500" />, name: "HTML5" },
      { icon: <FaCss3Alt size={25} className="text-blue-400" />, name: "CSS3" },
      { icon: <FaJs size={25} className="text-yellow-400" />, name: "JavaScript" },
      { icon: <SiBootstrap size={25} className="text-purple-500" />, name: "Bootstrap 5" },
      { icon: <SiTailwindcss size={25} className="text-sky-400" />, name: "Tailwind CSS" },
      { icon: <FaReact size={25} className="text-cyan-400" />, name: "React" },
      { icon: <SiNextdotjs size={25} className="text-white" />, name: "Next.js" },
      { icon: <FaWordpress size={25} className="text-blue-600" />, name: "WordPress" },
      { icon: <MdOutlineDevices size={25} className="text-gray-300" />, name: "Responsive Design" },
      { icon: <TbBrowserCheck size={25} className="text-green-400" />, name: "Cross-Browser" },
    ]
  },
  {
    name: "AI & Automation",
    color: "from-purple-600 to-indigo-600",
    textColor: "text-purple-300",
    borderColor: "border-purple-600/30",
    icons: [
      { icon: <SiOpenai size={28} className="text-green-400" />, name: "OpenAI" },
      { icon: <FaRobot size={28} className="text-emerald-500" />, name: "ChatGPT" },
      { icon: <SiReplit size={28} className="text-blue-500" />, name: "Replit AI" },
      { icon: <SiOpenai size={28} className="text-purple-500" />, name: "Claude.ai" },
      { icon: <SiN8N size={28} className="text-orange-500" />, name: "n8n" },
      { icon: <SiMake size={28} className="text-red-500" />, name: "Make.com" },
    ]
  },
  
];

interface PlatformIconProps {
  icon: React.ReactNode;
  name: string;
  active?: boolean;
}

const PlatformIcon: React.FC<PlatformIconProps> = ({ icon, name, active = false }) => {
  return (
    <motion.div 
      whileHover={{ y: -5, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        group rounded-xl bg-zinc-900/80 border flex flex-col items-center justify-center 
        sm:w-20 sm:h-24 w-16 h-20 px-2
        backdrop-blur-sm transition-all duration-300
        ${active ? 'border-purple-500/50 shadow-lg shadow-purple-500/20' : 'border-zinc-800/50'}
      `}
    >
      <div className="mb-1 sm:mb-2">{icon}</div>
      <span className="text-xs text-zinc-400 group-hover:text-white transition-colors text-center line-clamp-2">{name}</span>
    </motion.div>
  );
};

// Updated futuristic network beams
const beams = [
  {
    path: "M269 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5",
    gradientConfig: {
      initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
      animate: {
        x1: ["0%", "0%", "200%"],
        x2: ["0%", "0%", "180%"],
        y1: ["80%", "0%", "0%"],
        y2: ["100%", "20%", "20%"],
      },
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        delay: Math.random() * 2,
      },
    },
    connectionPoints: [
      { cx: 6.5, cy: 398.5, r: 6 },
      { cx: 269, cy: 220.5, r: 6 }
    ]
  },
  {
    path: "M568 200H841C846.523 200 851 195.523 851 190V40",
    gradientConfig: {
      initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
      animate: {
        x1: ["20%", "100%", "100%"],
        x2: ["0%", "90%", "90%"],
        y1: ["80%", "80%", "-20%"],
        y2: ["100%", "100%", "0%"],
      },
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        delay: Math.random() * 2,
      },
    },
    connectionPoints: [
      { cx: 851, cy: 34, r: 6.5 },
      { cx: 568, cy: 200, r: 6 }
    ]
  },
  {
    path: "M425.5 274V333C425.5 338.523 421.023 343 415.5 343H152C146.477 343 142 347.477 142 353V426.5",
    gradientConfig: {
      initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
      animate: {
        x1: ["20%", "100%", "100%"],
        x2: ["0%", "90%", "90%"],
        y1: ["80%", "80%", "-20%"],
        y2: ["100%", "100%", "0%"],
      },
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        delay: Math.random() * 2,
      },
    },
    connectionPoints: [
      { cx: 142, cy: 427, r: 6.5 },
      { cx: 425.5, cy: 274, r: 6 }
    ]
  }
];

// Updated AI-themed gradient colors
const gradientColors = {
  start: "#6600FF", // Deep Purple
  middle: "#9900FF", // Violet
  end: "#CC00FF"    // Magenta
};

// Responsive hook for window size
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

// Animated particles background component
const ParticlesBackground: React.FC = () => {
  const { width, height } = useWindowSize();
  const particleCount = width < 768 ? 25 : 50; // Fewer particles on mobile
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: particleCount }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-purple-500/30"
          animate={{
            x: [
              Math.random() * width,
              Math.random() * width,
            ],
            y: [
              Math.random() * height,
              Math.random() * height,
            ],
            opacity: [0.2, 0.8, 0.2],
            scale: [Math.random() * 0.5 + 0.5, Math.random() * 1 + 1, Math.random() * 0.5 + 0.5],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

export const AITechShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [showAllIcons, setShowAllIcons] = useState<boolean>(false);
  const { width } = useWindowSize();
  const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1024;
  
  // Auto rotate through categories
  useEffect(() => {
    if (!autoRotate) return;
    
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % techCategories.length);
      setShowAllIcons(false); // Reset show all when rotating
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoRotate]);

  // Reset showAllIcons when category changes
  useEffect(() => {
    setShowAllIcons(false);
  }, [activeCategory]);

  // Function to show appropriate number of icons based on screen size and showAllIcons state
  const getResponsiveIcons = (icons: TechIcon[]) => {
    if (showAllIcons) {
      return icons; // Show all icons when view all is clicked
    } else if (isMobile) {
      return icons.slice(0, 4); // Show fewer icons on mobile
    } else if (isTablet) {
      return icons.slice(0, 6); // Show more icons on tablet
    }
    return icons; // Show all icons on desktop
  };

  return (
    <div className="relative overflow-hidden rounded-2xl w-full h-full min-h-[250px] sm:min-h-[300px] bg-gradient-to-br from-black via-gray-900 to-black border border-zinc-800">
      {/* Neural network background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black"></div>
        
        {/* Grid pattern - hidden on smallest screens */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_#333_1px,_transparent_1px),linear-gradient(to_bottom,_#333_1px,_transparent_1px)] bg-[size:20px_20px] opacity-20 hidden sm:block"></div>
        
        {/* Glowing orbs - sized appropriately for different screens */}
        <div className="absolute -top-20 -right-20 w-40 h-40 sm:w-64 sm:h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 sm:w-64 sm:h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
      </div>

      {/* Responsive particles */}
      <ParticlesBackground />

      {/* Content container */}
      <div className="relative z-10 w-full h-full">
        <PulseBeams
          beams={beams}
          gradientColors={gradientColors}
          className="w-full h-full flex justify-center items-center"
        >
          <div className="w-full p-4 sm:p-6 md:p-8">
            {/* Category Tabs - Uncomment if needed */}
            {/* <div className="flex justify-center gap-2 sm:gap-4 mb-6 sm:mb-10 overflow-x-auto pb-2 scrollbar-hide">
              {techCategories.map((category, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => {
                    setActiveCategory(idx);
                    setAutoRotate(false);
                  }}
                  className={`
                    px-3 sm:px-5 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap
                    ${idx === activeCategory 
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg` 
                      : 'bg-zinc-900/70 text-zinc-400 hover:text-white'}
                  `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </div> */}
            
            {/* Category Content */}
            <div className="relative w-full min-h-[100px]">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  {/* Category Header */}
                  <div className={`mb-4 sm:mb-8 border-l-4 ${techCategories[activeCategory].borderColor} pl-3 sm:pl-4`}>
                    <h3 className={`text-xl sm:text-2xl font-bold ${techCategories[activeCategory].textColor}`}>
                      {techCategories[activeCategory].name}
                    </h3>
                    <p className="text-zinc-400 mt-1 text-sm sm:text-base">
                      {activeCategory === 0 && "Intelligence frameworks powering the next generation of applications"}
                      {activeCategory === 1 && "Modern web technologies for responsive and dynamic interfaces"}
                    </p>
                  </div>
                  
                  {/* Icons Grid - Responsive grid with different column counts */}
                  <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4 justify-items-center ${showAllIcons && (isMobile || isTablet) ? 'max-h-96 overflow-y-auto pr-1' : ''}`}>
                    {getResponsiveIcons(techCategories[activeCategory].icons).map((tech, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          delay: showAllIcons ? Math.min(idx * 0.05, 0.5) : idx * 0.1, 
                          duration: 0.3 
                        }}
                      >
                        <PlatformIcon icon={tech.icon} name={tech.name} active={true} />
                      </motion.div>
                    ))}
                  </div>

                  {/* View More/Less button for mobile/tablet */}
                  {(isMobile || isTablet) && techCategories[activeCategory].icons.length > (showAllIcons ? 0 : getResponsiveIcons(techCategories[activeCategory].icons).length) && (
                    <div className="mt-4 text-center">
                      <motion.button 
                        onClick={() => setShowAllIcons(!showAllIcons)}
                        className="px-4 py-2 text-xs sm:text-sm rounded-full bg-zinc-800/70 text-zinc-300 hover:bg-zinc-700/70"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {showAllIcons 
                          ? "Show Less" 
                          : `View All ${techCategories[activeCategory].icons.length} Technologies`}
                      </motion.button>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Progress bar for auto-rotation */}
            {autoRotate && (
              <div className="w-full h-1 bg-zinc-800 rounded-full mt-6 sm:mt-12 overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                />
              </div>
            )}
          </div>
        </PulseBeams>
      </div>
    </div>
  );
};