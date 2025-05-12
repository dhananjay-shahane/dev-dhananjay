import React from "react";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import { BentoGrid } from "@/components/bento-grid";
import { CardDemo } from "./ui/aiAutomationUi";
import { AITechShowcase } from "./SkillsSection";
import { Spotlight } from "./ui/spotlight";
import TimeLine from "./TimeLine";

export function FeaturesSectionDemo() {
  const features = [
    {
      skeleton: <AITechShowcase />,
      className: "col-span-1 lg:col-span-8 bg-gray-100/20 rounded-xl",
    },
    {
      skeleton: <TimeLine/>,
      className: "col-span-1 lg:col-span-4 bg-gray-100/20 rounded-xl",
    },
  ];
  return (
    <div className="relative z-20 max-w-7xl mx-auto px-4 py-3" id="about">
      <div className="relative h-57 py-10 flex w-full overflow-hidden rounded-md antialiased md:items-center md:justify-center">
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60 opacity-100"
          fill="white"
        />

        {/* Header */}
        <div className="text-center mb-10 relative z-10">
          <h2 className="text-3xl md:text-6xl font-bold mb-8 tracking-tight text-white">
            <span className="inline-block relative">
              About
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></span>
            </span>
          </h2>
          <p className="max-w-5xl mx-auto text-lg text-white/60">
            My name is Dhananjay Shahane, and I'm passionate about building
            digital products, from websites to applications and everything in
            between. My fascination with computers ignited at a young age, and
            I've been refining my technical expertise ever since, with the goal
            of creating my own innovations. Thus, I embarked on my journey as a
            front end developer
          </p>
        </div>
      </div>

      <div className="relative px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {features.map((feature) => (
            <FeatureCard className={feature.className}>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};
