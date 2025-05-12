import { useRef, useEffect } from "react";
import { FeaturesSectionDemo } from "./SkillCard";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    // Animation is handled by the main setupScrollTriggers function in animations.ts
  }, []);

  return (
    <section 
      id="about" 
      // ref={sectionRef} 
      className="py-20 relative overflow-hidden gsap-reveal"
    >
    </section>
  );
};

export default AboutSection;
