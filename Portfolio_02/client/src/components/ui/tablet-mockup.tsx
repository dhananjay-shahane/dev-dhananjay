import React from "react";

export const TabletMockup = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="relative mx-auto"
    >
      {/* SVG Tablet Frame */}
      <div className="relative aspect-[4/3]">
        <svg viewBox="0 0 800 600" className="w-full h-full">
          <rect x="0" y="0" width="800" height="600" rx="40" ry="40" fill="#000" />
          {/* Camera dot */}
          <circle cx="400" cy="20" r="6" fill="#555" />
          {/* Screen area (clip-path is handled via absolute overlay) */}
        </svg>

        {/* Children overlay inside the screen */}
        <div className="absolute top-[40px] left-[20px] right-[20px] bottom-[20px] bg-white rounded-[24px] overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};
