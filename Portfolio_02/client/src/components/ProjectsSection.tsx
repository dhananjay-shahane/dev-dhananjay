"use client";
import React, { useState } from "react";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TabletMockup } from "@/components/ui/tablet-mockup";
import { ExternalLink, ArrowUpRight, Code, Layers, Globe } from "lucide-react";

import eqaayaWebsite from "../assets/img/eqaaya-website.png";
import project1 from "../assets/img/project-1.png"
import project2 from "../assets/img/project-2.png"
import project3 from "../assets/img/project-3.png"
import project4 from "../assets/img/project-4.png"

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Ananta Ecomgrowth",
    description:
    "Ananta Ecomgrowth is a global social media marketing agency specializing in scaling B2B and B2C brands through high-converting video ads and advanced sales funnels. ",
    image: project3,
    tech: ["Wordpress"],
    url: "https://anantaecomgrowth.com/",
    color: "#EC4899",
  },
  {
      id: 5,
      title: "Anthunt",
      description:
        "Anthunt is a comprehensive influencer marketing platform that bridges the gap between brands and content creators. By focusing on authentic storytelling and strategic partnerships, Anthunt helps brands connect with audiences through meaningful campaigns that drive engagement and conversions.",
      image:project1,
      tech: ["Next.js", "TailwindCSS", "Gsap", "Framer Motion"],
      url: "https://anthunt.vercel.app/",
      color: "#EC4899",
  },
  {
     id: 4,
    title: "Eqaaya",
    description:
      "Eqaaya is a curated online marketplace offering eco-friendly, handcrafted home decor items. Their collection includes jute rugs, artisanal baskets, stylish eco-conscious bags, and natural fiber mats, all crafted with sustainability in mind. .",
    image:eqaayaWebsite,
    tech: ["Wordpress", "Woocommerce"],
    url: "https://eqaaya.com/",
    color: "#EC4899",
  },
  {
    id: 2,
     title: "SkylineCall",
    description:
      "SkylineCall empowers businesses with reliable, scalable, and cost-effective cloud calling systems for seamless global communication.",
    image:project4,
    tech: ["Bootstrap 5", "Html", "CSS", "Php"],
    url: "https://skylinecall.com/",
    color: "#EC4899",
  },
  
];

export default function ProjectsSection() {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      if (section) {
        const content = section.querySelector(".project-content");
        const image = section.querySelector(".project-image");
        const techBadges = section.querySelectorAll(".tech-badge");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        });

        tl.fromTo(
          content,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          }
        )
          .fromTo(
            techBadges,
            { y: 20, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.1,
              duration: 0.5,
              ease: "power2.out",
            },
            "-=0.5"
          )
          .fromTo(
            image,
            { y: 40, opacity: 0, scale: 0.95 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.9,
              ease: "power2.out",
            },
            "-=0.7"
          );
      }
    });

    // Set up a parallax effect for the backgrounds
    sectionsRef.current.forEach((section) => {
      if (section) {
        const bg = section.querySelector(".project-bg");

        ScrollTrigger.create({
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          onUpdate: (self) => {
            if (bg) {
              gsap.to(bg, {
                y: self.progress * 100,
                duration: 0.1,
              });
            }
          },
        });
      }
    });
  }, []);

  return (
    <div className="bg-black min-h-screen w-full overflow-hidden" id="projects">
      <div className="max-w-screen-xl mx-auto px-4 py-24 relative">
        {/* Header */}
        <div className="text-center mb-10 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight text-white">
            <span className="inline-block relative">
              Featured
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></span>
            </span>{" "}
            Works
          </h2>
          <p className="max-w-5xl mx-auto text-lg text-white/60 mb-5">
            I approach your project as a distinct opportunity rather than just
            another task on my list. My expertise spans design, management,
            creative direction, and development. Throughout my projects, I’ve
            learned that effective workflows, transparent communication, and
            self-discipline are vital for success.
          </p>

          <p className="max-w-5xl mx-auto text-lg text-white/60">
            Unlike conventional IT service agencies, I won’t charge you hefty
            fees for slow work that is often outsourced. I manage all the work
            personally and am ready to get involved in every detail. I strive to
            be a genuine partner, dedicating my full focus to our project
            together.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-40">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (sectionsRef.current[index] = el)}
              className="relative"
            >
              {/* Background Elements */}
              <div
                className="project-bg absolute inset-0 -z-10 opacity-10"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${project.color}40 0%, transparent 70%)`,
                  transform: "translateY(0)",
                }}
              ></div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Content Side */}
                <div className={`lg:col-span-5`}>
                  <div className="project-content space-y-8">
                    {/* Project Number */}
                    <div className="flex items-center mb-6">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center"
                        style={{ background: `${project.color}22` }}
                      >
                        <span
                          className="text-xl font-bold"
                          style={{ color: project.color }}
                        >
                          {(index + 1).toString().padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-4xl md:text-5xl font-bold text-white">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/70 text-lg">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="py-4">
                      <div className="text-sm uppercase tracking-wider text-white/50 mb-3 flex items-center">
                        <Code className="w-4 h-4 mr-2" />
                        Tech Stack
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="tech-badge px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md"
                            style={{
                              backgroundColor: `${project.color}15`,
                              color: `${project.color}`,
                              border: `1px solid ${project.color}30`,
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Button */}
                    <div className="pt-4">
                      <a
                        href={project.url}
                        className="group relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                        style={{
                          background: `linear-gradient(to right, ${project.color}, ${project.color}99)`,
                        }}
                      >
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFB_0%,${project.color}_50%,#E2CBFB_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-6 py-1 text-sm font-medium backdrop-blur-3xl">
                          <span className="mr-2">View Website</span>
                          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Image Side */}
                <div className={`lg:col-span-7 project-image lg:col-start-1}`}>
                  <div className="relative">
                    {/* Decorative elements */}
                    <div
                      className="absolute -top-10 -left-10 w-20 h-20 rounded-full opacity-20"
                      style={{ background: project.color }}
                    ></div>
                    <div
                      className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full opacity-10"
                      style={{ background: project.color }}
                    ></div>

                    {/* Image container with glass effect */}
                    <div
                      className="rounded-xl overflow-hidden relative p-1"
                      style={{
                        backgroundColor: `${project.color}10`,
                        backdropFilter: "blur(12px)",
                      }}
                    >
                      <div className="overflow-hidden rounded-lg border border-white/10">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-auto object-cover rounded-lg transform transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                    </div>

                    {/* Stats card */}
                    <div className="absolute -bottom-6 -right-6 md:bottom-6 md:right-6 bg-black/80 backdrop-blur-xl rounded-xl p-4 border border-white/10 shadow-xl">
                      <div className="flex items-center gap-3">
                        <Globe className="text-white/70 w-4 h-4" />
                        <div>
                          <div className="text-xs text-white/50">
                            Project Status
                          </div>
                          <div className="text-sm font-medium text-white">
                            Live & Running
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative grid background */}
      <div className="fixed inset-0 -z-20 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
    </div>
  );
}
