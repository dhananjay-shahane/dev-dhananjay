import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { queryClient } from "./lib/queryClient";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import {
  setupScrollTriggers,
  setupSmoothScroll,
  setupCustomSmoothScroll,
  setupParallaxEffects,
  animateHeader,
} from "./lib/animations";
import { gsapInit } from "./lib/gsap";

// Import ScrollTrigger to access it directly
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { FeaturesSectionDemo } from "./components/SkillCard";
import ProjectsSection from "./components/ProjectsSection";
import TestimonialsShowcase from "./components/Testomonial";
import CalendarSetup from "./components/CalendarSetup";

// Register plugins globally
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

function App() {
  const appRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize GSAP and animations
  useEffect(() => {
    // Initialize GSAP libraries
    gsapInit();

    // Setup scroll triggers and animations once the app is mounted
    if (appRef.current) {
      // Small timeout to ensure DOM is fully rendered
      let cleanupFunction: (() => void) | undefined;

      // Show content with fade-in
      gsap.to(appRef.current, {
        opacity: 1,
        duration: 0.5,
        onComplete: () => setIsLoaded(true),
      });

      const timeoutId = setTimeout(() => {
        // Animate header entrance
        if (headerRef.current) {
          animateHeader(headerRef.current);
        }

        // Initialize all scroll and parallax animations
        setupScrollTriggers();
        setupSmoothScroll();
        setupParallaxEffects();
        cleanupFunction = setupCustomSmoothScroll();

        // Add scroll-based animations for section transitions
        const sections = document.querySelectorAll("section");
        sections.forEach((section, index) => {
          const nextSection = sections[index + 1];
          if (nextSection) {
            ScrollTrigger.create({
              trigger: section,
              once: true,
            });
          }
        });

        // Add a progress indicator for scroll position
        const progressBar = document.createElement("div");
        progressBar.className = "fixed top-0 left-0 h-1 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 z-50";
        document.body.appendChild(progressBar);

        gsap.to(progressBar, {
          width: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: document.documentElement,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.3,
          },
        });
      }, 100);

      return () => {
        clearTimeout(timeoutId);
        // Call cleanup if it exists
        if (cleanupFunction) {
          cleanupFunction();
        }

        // Clean up ScrollTrigger instances
        // ScrollTrigger.getAll().forEach(trigger => trigger.kill());

        // Remove progress bar
        const progressBar = document.querySelector(".progress-bar");
        if (progressBar) {
          progressBar.remove();
        }

        // Reset scroll position
        // window.scrollTo(0, 0);
      };
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div
        ref={appRef}
        className="min-h-screen bg-black text-white overflow-x-hidden opacity-0 transition-opacity"
      >
        <Header />
        <main className="relative">
          <div
            className={cn(
              "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
              "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
            )}
          />
          <HeroSection />
          <FeaturesSectionDemo />
          <ProjectsSection />
          <TestimonialsShowcase />
          <CalendarSetup />
          <ContactSection />
        </main>
        <Footer />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;