// components/CalendarSetup.tsx
import { useEffect, useRef, useState } from "react";
import { checkCalRegistry } from "../lib/calRegistryCheck";

/**
 * A TypeScript component for Cal.com calendar integration
 * Uses dynamic script loading and checks for existing element registration
 */
export default function CalendarSetup(): JSX.Element {
  const [isScriptLoaded, setIsScriptLoaded] = useState<boolean>(false);
  const scriptRef = useRef<HTMLScriptElement | null>(null);
  
  useEffect(() => {
    // If we're not in a browser environment, don't proceed
    if (typeof window === 'undefined') return;

    // If the Cal elements are already registered, mark as loaded
    if (checkCalRegistry()) {
      console.log("Cal elements already registered - skipping script load");
      setIsScriptLoaded(true);
      return;
    }

    // Only load the script if not already present
    const existingScript = document.getElementById('cal-embed-script') as HTMLScriptElement | null;
    
    if (!existingScript) {
      console.log("Loading Cal.com script...");
      // Create and append the script to the document
      const script = document.createElement('script');
      script.id = 'cal-embed-script';
      // script.src = 'https://app.cal.com/embed/embed.js';
      script.async = true;
      
      // Store ref for cleanup
      scriptRef.current = script;
      
      // Set up onload handler before appending
      script.onload = () => {
        console.log("Cal.com script loaded successfully");
        setIsScriptLoaded(true);
      };
      
      // Set up error handler
      script.onerror = (error) => {
        console.error("Error loading Cal.com script:", error);
      };
      
      // Add to document
      document.head.appendChild(script);
    } else {
      console.log("Cal.com script already exists in document");
      setIsScriptLoaded(true);
    }

    // No cleanup for the script as it needs to stay loaded
    // Cal.com handles its own cleanup on page navigation
  }, []);

  return (
    <></>
  );
}