import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Linkedin, Github, Mail, X } from "lucide-react";
import { setupOffcanvasMenu } from "@/lib/animations";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavItemClick: (sectionId: string) => void;
}

const MobileMenu = ({ isOpen, onClose, onNavItemClick }: MobileMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // GSAP animation for menu items
  useEffect(() => {
    if (menuItemsRef.current) {
      const menuItems = Array.from(menuItemsRef.current.querySelectorAll(".menu-item")) as HTMLElement[];
      const socialIcons = Array.from(menuItemsRef.current.querySelectorAll(".social-icon")) as HTMLElement[];
      
      // Use the animation utility for consistent animations
      setupOffcanvasMenu(isOpen, menuItems, socialIcons);
    }
  }, [isOpen]);

  // Handler for menu item clicks
  const handleNavItemClick = (sectionId: string) => {
    onNavItemClick(sectionId);
  };

  // Handle close button click
  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Close button clicked");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
            onClick={handleClose}
          />
          
          {/* Offcanvas Menu */}
          <div 
            ref={menuRef}
            className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          >

            {/* Explicit Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 z-60 p-3 rounded-full bg-gray-800/70 hover:bg-gray-700 text-white focus:outline-none"
              aria-label="Close menu"
              type="button"
            >
              <X size={24} />
            </button>
            
            <div ref={menuItemsRef} className="container max-w-6xl mx-auto px-6 py-20 relative">
              {/* Menu items */}
              <div className="flex flex-col items-center md:items-start space-y-8 text-center md:text-left">
                <a 
                  href="#about" 
                  className="menu-item text-white hover:text-indigo-400 transition-colors text-4xl md:text-6xl font-bold"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavItemClick("about");
                  }}
                >
                  About
                </a>
                <a 
                  href="#projects" 
                  className="menu-item text-white hover:text-indigo-400 transition-colors text-4xl md:text-6xl font-bold"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavItemClick("projects");
                  }}
                >
                  Projects
                </a>
                <a 
                  href="#contact" 
                  className="menu-item text-white hover:text-indigo-400 transition-colors text-4xl md:text-6xl font-bold"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavItemClick("contact");
                  }}
                >
                  Contact
                </a>
                
                {/* Social links */}
                <div className="flex flex-wrap justify-center md:justify-start space-x-5 pt-10 mt-6 border-t border-gray-800 w-full">
                  <a href="#" className="social-icon text-gray-400 hover:text-white transition-colors p-2">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="social-icon text-gray-400 hover:text-white transition-colors p-2">
                    <Linkedin size={24} />
                  </a>
                  <a href="#" className="social-icon text-gray-400 hover:text-white transition-colors p-2">
                    <Github size={24} />
                  </a>
                  <a href="mailto:hello@chrisabra.co" className="social-icon text-gray-400 hover:text-white transition-colors p-2">
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;