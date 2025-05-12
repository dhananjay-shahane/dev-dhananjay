import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function ExperienceShowcase() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  
  const experiences = [
    {
      logo: "https://media.licdn.com/dms/image/v2/C560BAQHIqV6wviQASQ/company-logo_200_200/company-logo_200_200/0/1630669693890?e=1752710400&v=beta&t=VZm6iSfU3dbzgLreaK9gzkqdWfOjGw7rT2DtMpVtQ1g",
      logoAlt: "TechFusion Logo",
      logoColor: "bg-purple-600",
      year: "2023-2024",
      role: "Html Developer",
      company: "BR Tech Solutions Pvt Ltd",
      skills: ["Tailwind CSS", "Html", "CSS", "AI", "React.js"]
    },
    {
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQFUeDU-PsXePg/company-logo_100_100/company-logo_100_100/0/1690960464200?e=1752710400&v=beta&t=yxNlF4FmMI43zUkzTS2VM2f2V6re7xH8apLtmfdS9Wg",
      logoAlt: "Digital Innovations Logo",
      logoColor: "bg-blue-500",
      year: "2022-2023",
      role: "Front End Developer",
      company: "Infraveo Pvt Ltd",
      skills: ["Html", "CSS", "Bootstrap", "Javascript","Php"]
    }
  ];

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Fade in container
      gsap.fromTo(
        containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 }
      );

      // Animate cards
      gsap.utils.toArray<HTMLElement>('.company-card').forEach((card, i) => {
        gsap.fromTo(
          card,
          { x: -20, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.4, delay: 0.1 * i, ease: "power2.out" }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="bg-gray-900 bg-opacity-80 rounded-lg p-4 shadow-lg h-full w-full"
    >
      <h3 className="text-lg font-medium mb-3 text-white flex items-center gap-2">
        Experience
      </h3>
      
      <div className="space-y-3">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="company-card flex items-center gap-3 bg-gray-800 bg-opacity-60 p-3 rounded-lg transition-all hover:bg-opacity-80"
          >
            {/* Company Logo */}
            <div className={`flex-shrink-0 w-10 h-10 rounded-md flex items-center justify-center`}>
              <img src={exp.logo} alt={exp.logoAlt} className="w-10 h-10 rounded-md" />
            </div>
            
            {/* Company Info */}
            <div className="flex-grow min-w-0">
              <div className="flex justify-between items-baseline flex-wrap">
                <h4 className="font-medium text-sm text-white truncate">{exp.role}</h4>
                <span className="text-xs text-gray-400">{exp.year}</span>
              </div>
              <p className="text-xs text-gray-400 truncate">{exp.company}</p>
              
              {/* Skills */}
              <div className="flex gap-1 mt-1 flex-wrap">
                {exp.skills.map((skill, i) => (
                  <span key={i} className="text-xs px-1.5 py-0.5 bg-gray-700 text-gray-300 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}