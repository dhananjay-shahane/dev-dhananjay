import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UseScrollTriggerProps {
  el: React.RefObject<HTMLElement>;
  animate?: gsap.TweenVars;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  toggleActions?: string;
  markers?: boolean;
  once?: boolean;
}

/**
 * A custom hook to create GSAP ScrollTrigger animations
 */
export const useScrollTrigger = ({
  el,
  animate = {},
  start = "top 80%",
  end = "bottom 20%",
  scrub = false,
  toggleActions = "play none none none",
  markers = false,
  once = false,
}: UseScrollTriggerProps) => {
  const triggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    // Create animation only if element is available
    if (!el.current) return;

    // Create animation with ScrollTrigger
    const tween = gsap.fromTo(
      el.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        ...animate,
        scrollTrigger: {
          trigger: el.current,
          start,
          end: end || (once ? "bottom 80%" : "bottom 20%"),
          scrub,
          toggleActions,
          markers,
          onEnter: () => {
            if (once) {
              // If animation should only run once, kill the ScrollTrigger after it completes
              setTimeout(() => {
                triggerRef.current?.kill();
              }, 1000);
            }
          },
        },
      }
    );

    // Store the ScrollTrigger reference
    triggerRef.current = tween.scrollTrigger as ScrollTrigger;

    // Clean up animation on component unmount
    return () => {
      if (triggerRef.current) {
        triggerRef.current.kill();
      }
      tween.kill();
    };
  }, [el, animate, start, end, scrub, toggleActions, markers, once]);

  return triggerRef;
};
