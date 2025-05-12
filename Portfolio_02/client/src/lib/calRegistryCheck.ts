// lib/calRegistryCheck.ts
// This function checks if Cal elements are already registered
// and prevents duplicate registration errors

/**
 * Checks if Cal.com custom elements are already registered in the DOM
 * @returns boolean - true if elements are already registered, false otherwise
 */
export function checkCalRegistry(): boolean {
  if (typeof window === 'undefined') return false;
  
  // Check if custom elements are already defined
  const calElements = ['cal-modal-box', 'cal-button-container', 'cal-iframe'];
  
  for (const elementName of calElements) {
    if (window.customElements && window.customElements.get(elementName)) {
      console.log(`Cal element ${elementName} already registered`);
      return true; // Elements are already registered
    }
  }
  
  return false; // Elements are not registered yet
}

/**
 * TypeScript declarations for Cal.com global objects
 */
declare global {
  interface Window {
    Cal?: {
      (action: string, ...args: any[]): void;
      q?: any[];
      loaded?: boolean;
      ns?: Record<string, any>;
    };
  }
}