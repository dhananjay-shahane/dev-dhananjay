import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

// Create an array of roles with different colors - MORE TEXT FOR FULLSCREEN
const roles = [
  { text: "GENERALIST", color: "text-blue-400" },
  { text: "WEB", color: "text-gray-500" },
  { text: "DEVELOPER", color: "text-orange-500" },
  { text: "FREELANCE", color: "text-gray-500" },
  { text: "DESIGNER", color: "text-yellow-400" },
  { text: "PROBLEM", color: "text-gray-500" },
  { text: "SOLVER", color: "text-pink-400" },
  { text: "TECH", color: "text-gray-500" },
  { text: "GENERALIST", color: "text-blue-500" },
  { text: "WEB", color: "text-gray-500" },
  { text: "DEVELOPER", color: "text-red-500" },
  { text: "FREELANCE", color: "text-gray-500" },
  { text: "DESIGNER", color: "text-amber-500" },
  { text: "PROBLEM", color: "text-gray-500" },
  { text: "SOLVER", color: "text-violet-400" },
  { text: "TECH", color: "text-gray-500" },
  { text: "GENERALIST", color: "text-blue-400" },
  { text: "WEB", color: "text-gray-500" },
  { text: "DEVELOPER", color: "text-orange-500" },
  { text: "FREELANCE", color: "text-gray-500" },
  { text: "DESIGNER", color: "text-yellow-400" },
  { text: "PROBLEM", color: "text-gray-500" },
  { text: "SOLVER", color: "text-purple-400" },
  { text: "TECH", color: "text-gray-500" },
  { text: "GENERALIST", color: "text-blue-400" },
  { text: "WEB", color: "text-gray-500" },
  { text: "DEVELOPER", color: "text-orange-500" },
  { text: "FREELANCE", color: "text-gray-500" },
  { text: "DESIGNER", color: "text-amber-400" },
  { text: "PROBLEM", color: "text-gray-500" },
  { text: "SOLVER", color: "text-pink-400" },
  { text: "TECH", color: "text-gray-500" },
  { text: "GENERALIST", color: "text-blue-500" },
  { text: "WEB", color: "text-gray-500" },
  { text: "DEVELOPER", color: "text-red-500" },
  { text: "FREELANCE", color: "text-gray-500" },
  { text: "DESIGNER", color: "text-amber-500" },
  { text: "PROBLEM", color: "text-gray-500" },
  { text: "SOLVER", color: "text-violet-400" },
  { text: "TECH", color: "text-gray-500" },
];

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textLayerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const overlayTextRef = useRef<HTMLDivElement>(null);
  const centralTextRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Main animation timeline
    const tl = gsap.timeline();
    
    // Animate the background text
    if (overlayTextRef.current) {
      tl.from(overlayTextRef.current.children, {
        opacity: 0,
        stagger: 0.01,
        duration: 0.6,
        ease: "power2.out"
      }, 0);
    }
    
    // Animate the central elements
    if (centralTextRef.current) {
      tl.from(centralTextRef.current.children, {
        y: 20,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out"
      }, 0.4);
    }
    
    // Animate the character image with a slight bounce
    if (imageRef.current) {
      tl.from(imageRef.current, {
        y: '300',
        duration: 3,
        ease: "back.out(1.2)"
      }, 0.5);
    }
    
    // Create a subtle floating animation for the character
    gsap.to(imageRef.current, {
      y: "-10px",
      duration: 3,
    });
    
    // Create a subtle scale animation for the text layer
    if (textLayerRef.current) {
      gsap.to(textLayerRef.current, {
        scale: 1.01,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
    
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="h-screen relative overflow-hidden flex items-center justify-center text-center"
      style={{
        background: "linear-gradient(to bottom, #12141d 0%, #1a1d2d 100%)"
      }}
    >
      {/* Dark overlay with transparency */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      
      {/* Background text overlay - fullscreen */}
      <div 
        ref={textLayerRef}
        className="absolute inset-0 flex flex-wrap opacity-100 overflow-hidden z-0"
        data-parallax="true"
        data-direction="up"
        data-speed="0.2"
      >
        <div 
          ref={overlayTextRef}
          className="flex flex-wrap text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold opacity-70 p-4 w-full h-full"
          style={{ 
            lineHeight: '1.1', 
            userSelect: 'none',
            justifyContent: 'space-evenly',
            alignContent: 'space-around'
          }}
        >
          {roles.map((role, index) => (
            <span key={index} className={`${role.color} mx-1 my-1 whitespace-nowrap`}>
              {role.text}.
            </span>
          ))}
        </div>
      </div>
      
      {/* Central content */}
      <div className="container z-20 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col items-center">
          
          {/* Central text */}
          <div className="flex items-center gap-2 bg-black  px-8 py-3 rounded-full max-w-fit mb-4">
              <div className="w-5 h-5 rounded-full bg-green-400 animate-pulse-slow"></div>
              <span className="text-gray-400 text-md">I'm currently available</span>
            </div>
          <div className="text-center">
            <h1 className="font-extrabold text-white text-3xl md:text-5xl lg:text-6xl mb-3">
              <span className="text-white">WEB</span>
              <span className="text-orange-500"> DEVELOPER.</span>
            </h1>
            <h2 className="font-extrabold text-white text-3xl md:text-5xl lg:text-6xl mb-4">
              <span className="text-yellow-400">FREELANCE</span>
              <span className="text-white"> DEVELOPER.</span>
            </h2>
            <h3 className="font-extrabold text-white text-2xl md:text-4xl lg:text-5xl mb-2">
              <span className="text-purple-500">PROBLEM</span>
              <span className="text-white"> SOLVER.</span>
            </h3>
            <h4 className="font-extrabold text-white text-2xl md:text-4xl lg:text-5xl">
              <span className="text-blue-500">TECH</span>
              <span className="text-white"> GENERALIST.</span>
            </h4>
          </div>

          {/* Central text */}
          <motion.div 
            className="absolute bottom-0"
          >
            <picture>
              <source srcSet="https://cdn.prod.website-files.com/63957415c9d3c7c02d068332/67e59106600b2658f5ba6de5_Chris.avif" type="image/avif" />
              <source srcSet="https://cdn.prod.website-files.com/63957415c9d3c7c02d068332/67e59106600b2658f5ba6de5_Chris.avif" type="image/webp" />
              <img 
                ref={imageRef}
                src="https://cdn.prod.website-files.com/63957415c9d3c7c02d068332/67e59106600b2658f5ba6de5_Chris.avif"
                alt="Chris Abra" 
                className="w-90 h-100 max-h-[460px]"
              />
            </picture>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom rainbow border */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-500 via-purple-500 via-pink-500 via-red-500 via-yellow-500 to-green-500 z-20"></div>
    </section>
  );
};

export default HeroSection;
