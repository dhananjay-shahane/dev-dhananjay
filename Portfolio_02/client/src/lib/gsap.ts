import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const gsapInit = () => {
  // Register plugins
  gsap.registerPlugin(ScrollTrigger);
  
  // Global GSAP settings
  gsap.config({
    nullTargetWarn: false,
  });
  
  // Reset scroll position on page load
  window.scrollTo(0, 0);
};
