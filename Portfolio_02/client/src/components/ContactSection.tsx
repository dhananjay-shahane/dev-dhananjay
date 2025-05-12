import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Check, AlertCircle } from "lucide-react";

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  useEffect(() => {
    // Animation is handled by the main setupScrollTriggers function in animations.ts
  }, []);

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "name":
        return value.trim() === "" ? "Name is required" : 
               value.length < 2 ? "Name must be at least 2 characters" : "";
      case "email":
        return value.trim() === "" ? "Email is required" :
               !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value) ? "Invalid email address" : "";
      case "message":
        return value.trim() === "" ? "Message is required" :
               value.length < 10 ? "Message must be at least 10 characters" : "";
      default:
        return "";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      message: validateField("message", formData.message)
    };
    
    setErrors(newErrors);
    
    // Form is valid if there are no error messages
    return !Object.values(newErrors).some(error => error !== "");
  };

  const handleSubmit = async (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    
    // Validate all fields before submission
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // You would typically replace this with your actual API endpoint
      // This is a simulation of sending an email
      const emailData = {
        to: "dhananjayshahane24@gmail.com",
        from: formData.email,
        subject: `New contact from ${formData.name}`,
        message: formData.message,
      };
      
      // Simulate API call with a delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real implementation, you would replace the above with:
      // await fetch('/api/send-email', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(emailData)
      // });
      
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitted(true);
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      email: "",
      message: ""
    });
    setErrors({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 bg-black relative"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10">
          {/* Left side - Form */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Contact Me</h2>
            <p className="text-gray-300 mb-8">
              Interested in connecting? Shoot me a message via the contact form below.
            </p>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={() => setErrors(prev => ({ ...prev, name: validateField("name", formData.name) }))}
                  className={`w-full bg-white text-black border-0 ${errors.name ? "border-2 border-red-500" : ""}`}
                />
                {errors.name && (
                  <div className="flex items-center mt-1 text-red-400 text-sm">
                    <AlertCircle size={16} className="mr-1" />
                    <span>{errors.name}</span>
                  </div>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={() => setErrors(prev => ({ ...prev, email: validateField("email", formData.email) }))}
                  className={`w-full bg-white text-black border-0 ${errors.email ? "border-2 border-red-500" : ""}`}
                />
                {errors.email && (
                  <div className="flex items-center mt-1 text-red-400 text-sm">
                    <AlertCircle size={16} className="mr-1" />
                    <span>{errors.email}</span>
                  </div>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={() => setErrors(prev => ({ ...prev, message: validateField("message", formData.message) }))}
                  placeholder="Type your message..."
                  className={`w-full bg-white text-black border-0 min-h-[160px] ${errors.message ? "border-2 border-red-500" : ""}`}
                />
                {errors.message && (
                  <div className="flex items-center mt-1 text-red-400 text-sm">
                    <AlertCircle size={16} className="mr-1" />
                    <span>{errors.message}</span>
                  </div>
                )}
              </div>
              
              <Button 
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white font-medium px-8 py-3 rounded-md w-40"
              >
                {isSubmitting ? "Sending..." : "Send"}
              </Button>
            </div>
          </div>
          
          {/* Right side - Avatar Image or Thank You Message */}
          <div className="hidden lg:block">
            <div className="w-full h-full rounded-lg overflow-hidden relative">
              {isSubmitted ? (
                <div className="w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8 flex flex-col items-center justify-center text-white">
                  <div className="bg-white bg-opacity-20 p-8 rounded-xl backdrop-blur-sm flex flex-col items-center">
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6">
                      <Check size={40} className="text-white" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">Thank You!</h3>
                    <p className="text-xl text-center mb-6">Your message has been sent successfully.</p>
                    <p className="text-lg text-center mb-8">I'll get back to you as soon as possible.</p>
                    <Button 
                      onClick={resetForm}
                      className="bg-white text-purple-600 hover:bg-gray-100"
                    >
                      Send Another Message
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8 flex items-center justify-center">
                  <div className="w-full h-full flex items-end justify-center overflow-hidden absolute">
                  <img
                    src="https://cdn.prod.website-files.com/63957415c9d3c7c02d068332/67e59106600b2658f5ba6de5_Chris.avif"
                    alt="Avatar waving"
                    className="max-w-[680px] max-h-[450px] object-contain"
                  />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;