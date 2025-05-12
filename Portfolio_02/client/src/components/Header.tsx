import { useState, useEffect, useRef, forwardRef, ForwardedRef } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileMenu from "./MobileMenu";
import { animateHeader } from "@/lib/animations";

const Header = forwardRef<HTMLElement, {}>((props, ref) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuAnimating, setIsMenuAnimating] = useState(false);
  const innerHeaderRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  
  // Combine refs (external and internal)
  const headerRef = (node: HTMLElement) => {
    if (typeof ref === 'function') {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
    
    // @ts-ignore - This is safe because we're just assigning the node
    innerHeaderRef.current = node;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle menu button toggle
  const toggleMenu = () => {
    console.log("Toggle menu clicked, current state:", isMenuOpen);
    setIsMenuOpen(prev => !prev);
  };

  // Handle menu close from mobile menu component
  const handleMenuClose = () => {
    console.log("Closing menu");
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    const headerHeight = document.querySelector("header")?.offsetHeight || 0;
    
    if (section) {
      // Close the menu first
      handleMenuClose();
      
      // Small delay to allow menu animation to start
      setTimeout(() => {
        const targetPosition = section.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }, 100);
    }
  };

  return (
    <>
      <header 
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-30 py-5 transition-all duration-300 ${
          isScrolled ? "bg-gray-950/90 backdrop-blur-sm border-b border-gray-800" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 max-w-6xl flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 z-40 relative" onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}>
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-xl font-bold text-white">DS</span>
            </div>
            <span className="font-semibold text-white text-lg">Dhananjay Shahane</span>
          </a>

          {/* Menu Button - Made with pure HTML for better reliability */}
          <button 
            type="button"
            className="z-40 relative p-2 hover:bg-gray-800/50 rounded-full focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`}>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>
      </header>

      {/* Offcanvas Navigation Menu */}
      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={handleMenuClose} 
        onNavItemClick={scrollToSection}
      />
    </>
  );
});

Header.displayName = 'Header';

export default Header;