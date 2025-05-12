import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize parallax effect for elements with parallax class
export const setupParallaxEffects = () => {
  // Find all elements with parallax class
  const parallaxElements = document.querySelectorAll('.parallax');
  
  parallaxElements.forEach(element => {
    const depth = (element as HTMLElement).dataset.depth || "0.2";
    const direction = (element as HTMLElement).dataset.direction || "y";
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
    
    // Apply parallax based on direction
    if (direction === "y") {
      tl.fromTo(element, 
        { y: 0 }, 
        { y: `${-parseFloat(depth) * 100}px` }
      );
    } else if (direction === "x") {
      tl.fromTo(element, 
        { x: 0 }, 
        { x: `${-parseFloat(depth) * 100}px` }
      );
    } else if (direction === "rotate") {
      tl.fromTo(element, 
        { rotation: 0 }, 
        { rotation: parseFloat(depth) * 20 }
      );
    } else if (direction === "scale") {
      tl.fromTo(element, 
        { scale: 1 }, 
        { scale: 1 + parseFloat(depth) * 0.2 }
      );
    }
  });
};

// Advanced scroll-triggered animations
export const setupScrollAnimations = () => {
  // Hero section parallax
  const heroSection = document.querySelector('.hero-section');
  const heroImage = document.querySelector('.hero-image');
  const heroBackground = document.querySelector('.hero-background');
  
  if (heroSection && heroImage) {
    ScrollTrigger.create({
      trigger: heroSection,
      start: "top top",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        // Parallax effect for hero image
        if (heroImage) {
          gsap.to(heroImage, {
            y: self.progress * 150,
            ease: "none",
            overwrite: "auto"
          });
        }
        
        // Parallax effect for background
        if (heroBackground) {
          gsap.to(heroBackground, {
            y: self.progress * -100,
            ease: "none",
            overwrite: "auto"
          });
        }
      }
    });
  }
  
  // Text reveal animations for headings
  const headings = document.querySelectorAll('.heading-reveal');
  headings.forEach(heading => {
    ScrollTrigger.create({
      trigger: heading,
      start: "top 85%",
      onEnter: () => {
        gsap.fromTo(heading,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
        );
      },
      once: true
    });
  });
  
  // Section background color transitions
  const colorSections = document.querySelectorAll('.color-transition');
  colorSections.forEach((section) => {
    const bgColor = (section as HTMLElement).dataset.bgcolor || "#111111";
    const textColor = (section as HTMLElement).dataset.textcolor || "#ffffff";
    
    ScrollTrigger.create({
      trigger: section,
      start: "top 60%",
      end: "bottom 60%",
      onEnter: () => {
        gsap.to('body', { backgroundColor: bgColor, color: textColor, duration: 0.5 });
      },
      onLeaveBack: () => {
        gsap.to('body', { backgroundColor: '#111111', color: '#ffffff', duration: 0.5 });
      }
    });
  });
};

export const setupScrollTriggers = () => {
  // Find all elements with gsap-reveal class
  const revealElements = document.querySelectorAll('.gsap-reveal');
  
  // Set up animations for each reveal element
  revealElements.forEach(element => {
    gsap.fromTo(element, 
      { opacity: 0, y: 30, visibility: "hidden" }, 
      { 
        opacity: 1, 
        y: 0, 
        visibility: "visible",
        duration: 0.8, 
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );
  });
  
  // Enhance project cards with staggered animations
  const projectCards = document.querySelectorAll('.project-card');
  if (projectCards.length) {
    gsap.fromTo(
      projectCards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectCards[0].parentElement,
          start: "top 75%",
        }
      }
    );
  }
  
  // Enhance skill pills with staggered animations
  const skillPills = document.querySelectorAll('.skill-pill');
  if (skillPills.length) {
    gsap.fromTo(
      skillPills,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        stagger: 0.05,
        duration: 0.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: skillPills[0].parentElement,
          start: "top 80%",
        }
      }
    );
  }
  
  // Set up scroll and parallax animations
  setupParallaxEffects();
  setupScrollAnimations();

  // Text scramble effect for skill headings
  const skillHeadings = document.querySelectorAll('.skill-heading');
  skillHeadings.forEach(heading => {
    ScrollTrigger.create({
      trigger: heading,
      start: "top 80%",
      onEnter: () => {
        // Simple text reveal animation
        gsap.fromTo(heading,
          { opacity: 0, letterSpacing: "-5px" },
          { 
            opacity: 1, 
            letterSpacing: "normal", 
            duration: 1, 
            ease: "back.out(1.7)"
          }
        );
      },
      once: true
    });
  });
};

// Enhanced smooth scrolling effect with GSAP
export const setupCustomSmoothScroll = () => {
  // Use standard scroll behavior for smooth scrolling
  document.documentElement.style.scrollBehavior = 'smooth';
  
  // Create a wrapper function for smooth scrolling
  const smoothScrollTo = (target: HTMLElement, duration = 1) => {
    const startPosition = window.scrollY;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const distance = targetPosition - startPosition;
    
    gsap.to(window, {
      scrollTo: {
        y: targetPosition,
        autoKill: false
      },
      duration: duration,
      ease: "power3.out",
      onComplete: () => {
        // Callback when scroll completes
      }
    });
  };
  
  // Set up smooth scroll for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = (link as HTMLAnchorElement).getAttribute('href')?.substring(1);
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          smoothScrollTo(targetElement);
        }
      }
    });
  });
  
  // Setup advanced parallax effect for project cards
  const setupProjectCardsParallax = () => {
    const projectsSection = document.getElementById('projects');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (!projectsSection || !projectCards.length) return;
    
    // Track mouse position for hover effect
    let mouseX = 0;
    let mouseY = 0;
    
    // Update mouse position
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Apply subtle mouse-based parallax to cards if they're visible
      projectCards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        
        // Check if card is in viewport
        if (
          rect.bottom > 0 &&
          rect.top < window.innerHeight &&
          rect.right > 0 &&
          rect.left < window.innerWidth
        ) {
          // Calculate distance from mouse to center of card
          const cardCenterX = rect.left + rect.width / 2;
          const cardCenterY = rect.top + rect.height / 2;
          
          // Calculate movement based on distance (max 15px movement)
          const moveX = (mouseX - cardCenterX) / 50;
          const moveY = (mouseY - cardCenterY) / 50;
          
          // Apply subtle movement
          gsap.to(card, {
            x: moveX * 0.5,
            y: moveY * 0.5,
            duration: 1,
            ease: "power2.out",
            overwrite: "auto"
          });
        }
      });
    });
  };
  
  // Add scroll listener for parallax effects
  const parallaxScroll = () => {
    const scrollTop = window.scrollY;
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    parallaxElements.forEach(el => {
      const speed = parseFloat((el as HTMLElement).dataset.speed || "0.5");
      const direction = (el as HTMLElement).dataset.direction || "down";
      const offset = scrollTop * speed;
      
      if (direction === "down") {
        gsap.to(el, { 
          y: offset, 
          duration: 0.5, 
          ease: "none", 
          overwrite: "auto" 
        });
      } else if (direction === "up") {
        gsap.to(el, { 
          y: -offset, 
          duration: 0.5, 
          ease: "none", 
          overwrite: "auto" 
        });
      } else if (direction === "left") {
        gsap.to(el, { 
          x: -offset, 
          duration: 0.5, 
          ease: "none", 
          overwrite: "auto" 
        });
      } else if (direction === "right") {
        gsap.to(el, { 
          x: offset, 
          duration: 0.5, 
          ease: "none", 
          overwrite: "auto" 
        });
      }
    });
  };
  
  // Initialize parallax effects
  parallaxScroll();
  setupProjectCardsParallax();
  
  // Add scroll event listener
  window.addEventListener('scroll', parallaxScroll);
  
  // Return cleanup function
  return () => {
    window.removeEventListener('scroll', parallaxScroll);
    window.removeEventListener('mousemove', () => {});
    document.documentElement.style.scrollBehavior = '';
    
    // Remove click event listeners from anchor links
    anchorLinks.forEach(link => {
      link.removeEventListener('click', () => {});
    });
  };
};

// Off-canvas menu animations
export const setupOffcanvasMenu = (isOpen: boolean, menuItems: HTMLElement[], socialIcons: HTMLElement[]) => {
  if (isOpen) {
    // Animate menu items when opened
    gsap.fromTo(
      menuItems,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.2
      }
    );

    // Animate social icons with delay
    gsap.fromTo(
      socialIcons,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.7
      }
    );
  } else {
    // Optional: animate items out when closing
    gsap.to([...menuItems, ...socialIcons], {
      opacity: 0,
      y: -20,
      duration: 0.3,
      stagger: 0.05,
      ease: "power2.in"
    });
  }
};

// Header entrance animation
export const animateHeader = (header: HTMLElement) => {
  gsap.from(header, {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });
};

// Setup smooth scroll for navigation links
export const setupSmoothScroll = () => {
  // Just enable smooth scrolling behavior, actual event listeners are in the setupCustomSmoothScroll function
  document.documentElement.style.scrollBehavior = 'smooth';
};
