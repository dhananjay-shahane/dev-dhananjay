"use client"

import { useEffect, useState } from "react"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

export default function TestimonialsShowcase() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  
  const testimonials = [
    {
      id: 2,
      name: "Rahul Sharma",
      role: "Founder",
      company: "Eqaaya",
      testimonial:
        "Working with Dhananjay was a seamless experience. He brought life to our handcrafted product store with an aesthetic and intuitive design. Our customers love the clean layout and the overall feel of the website!",
      bgColor: "bg-yellow-100",
    },
    {
      id: 1,
      name: "Sarang Adalja",
      role: "Founder",
      company: "Anantaecom Growth",
      testimonial: "He is really understood our brand vision. The new design has boosted engagement on our landing pages, and the mobile responsiveness is spot on!",
      bgColor: "bg-pink-100",
    },
    
    {
      id: 3,
      name: "Samar Joshi",
      role: "Product Manager",
      company: "Anthunt",
      testimonial:
        "Dhananjay nailed our vision for Anthunt. The platform now feels modern, responsive, and creator-friendly. His attention to detail and smooth UI interactions have truly elevated the user experience.",
      bgColor: "bg-blue-100",
    },
    // {
    //   id: 4,
    //   name: "Aman Singh",
    //   role: "Founder",
    //   company: "UrbanEdge Services",
    //   testimonial: "Working with Dhananjay was a fantastic experience. He brought creative ideas to the table and delivered a polished website on time. Highly recommended!",
    //   bgColor: "bg-purple-100",
    //   image: "/api/placeholder/64/64"
    // },
    // {
    //   id: 5,
    //   name: "Priya Menon",
    //   role: "Operations Head",
    //   company: "EduQuest Learning",
    //   testimonial: "The website redesign was smooth and stress-free. The team appreciated how Dhananjay kept us updated every step of the way.",
    //   bgColor: "bg-blue-100",
    //   image: "/api/placeholder/64/64"
    // },
    // {
    //   id: 6,
    //   name: "Karan Malhotra",
    //   role: "Digital Marketing Specialist",
    //   company: "QuickServe Foods",
    //   testimonial: "The site updates helped improve our SEO rankings and conversion rates. Dhananjay's technical knowledge and creative input were invaluable.",
    //   bgColor: "bg-red-100",
    //   image: "/api/placeholder/64/64"
    // },
    // {
    //   id: 7,
    //   name: "Meera Iyer",
    //   role: "Creative Director",
    //   company: "GoldenLeaf Designs",
    //   testimonial: "The visual design captured our brand perfectly. Dhananjay delivered a high-quality site that impressed both our team and our clients.",
    //   bgColor: "bg-indigo-100",
    //   image: "/api/placeholder/64/64"
    // },
    // {
    //   id: 8,
    //   name: "Arjun Patel",
    //   role: "Business Consultant",
    //   company: "NovaTech Consulting",
    //   testimonial: "Exceptional work from start to finish. Dhananjay was responsive, professional, and delivered beyond our expectations. Will definitely work together again.",
    //   bgColor: "bg-teal-100",
    //   image: "/api/placeholder/64/64"
    // }
  ]

  const pulseStyles = `
    @keyframes pulse {
      0% {
        transform: scale(0.95);
        opacity: 0.7;
      }
      50% {
        transform: scale(1.05);
        opacity: 1;
      }
      100% {
        transform: scale(0.95);
        opacity: 0.7;
      }
    }
    .animate-pulse-slow {
      animation: pulse 2s infinite;
    }
  `;
  
  // Auto-scroll functionality
  useEffect(() => {
    if (!api) {
      return
    }

    const interval = setInterval(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0)
        api.scrollTo(0)
      } else {
        api.scrollNext()
        setCurrent(current + 1)
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [api, current])

  return (
    
    <div className="relative w-full py-20 overflow-hidden mx-auto px-4 max-w-7xl">
       <style>{pulseStyles}</style>
      <div className="relative w-full">
        <div className="flex justify-between flex-col lg:flex-row">
          <div className="w-full lg:w-3/4 mb-5">
            <Carousel setApi={setApi} className="w-full h-full" opts={{ loop: true }}>
              <CarouselContent className="-ml-2 md:-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem 
                    key={testimonial.id} 
                    className="pl-2 md:pl-4 md:basis-2/4 lg:basis-1/3"
                  >
                    <div 
                      className={`${testimonial.bgColor} p-6 rounded-3xl shadow-lg h-full`}
                      style={{ transform: index % 2 === 0 ? 'rotate(-2deg)' : 'rotate(2deg)' }}
                    >
                      <div className="flex flex-col items-center">
                        <p className="text-gray-800 text-sm mb-4 text-center italic">
                          "{testimonial.testimonial}"
                        </p>
                        <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                        <p className="text-xs text-gray-700">{testimonial.role}</p>
                        {testimonial.company && (
                          <p className="text-xs text-gray-700">{testimonial.company}</p>
                        )}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Navigation dots */}
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    api?.scrollTo(index)
                    setCurrent(index)
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === current ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* AI Employees Card - Right side */}
          <div className="w-full lg:w-1/4 lg:max-w-[280px]">
            <div className="bg-blue-200 rounded-3xl p-6 shadow-lg h-full">
              {/* <div className="bg-blue-400 text-blue-900 px-4 py-1 rounded-full text-lg font-bold inline-block mb-2">
                #AIEmployees
              </div> */}
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full max-w-fit mb-4 ">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse-slow"></div>
                <span className="text-black text-sm">I'm currently available</span>
              </div>
              <p className="text-blue-800 text-sm mb-4">
                You’ve got an idea ? <br /> You want to start a project ? <br /> You need to talk with me ?
              </p>

              <h5 className="text-xl font-bold text-blue-900 mb-4">Contact me and let’s <br /> make some magic together !</h5>
              <a 
               
                className="bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-medium w-full flex items-center justify-center gap-2 hover:bg-blue-800 transition-colors ScheduleCallBtn"
                // data-cal-link="dhananjayshahane/30min"
                // data-cal-config='{"layout":"month_view","theme":"light"}' 
                href="https://cal.com/dhananjayshahane/30min?overlayCalendar=true"
              >
                <span>Schedule a call</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}