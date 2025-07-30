import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Code, BookOpen, Heart } from "lucide-react";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const mainExperience = {
    title: "Co-Founder & Head of AI",
    company: "Giganxt Solutions",
    period: "2023 - Present",
    achievements: [
      "Led AI development initiatives, driving innovation in machine learning solutions",
      "Built and deployed multiple AI-powered applications with 90%+ accuracy rates",
      "Managed cross-functional teams to deliver scalable tech solutions", 
    ]
  };

  const additionalExperiences = [
    {
      title: "Full-Stack Developer",
      company: "Freelance Projects",
      period: "2023 - Present",
      description: "Developed custom web applications and AI solutions for various clients, focusing on React.js frontends and Python/Flask backends.",
      icon: Code,
      color: "bg-gray-100 text-gray-600"
    },
    {
      title: "Research & Development",
      company: "Academic Projects", 
      period: "2021 - Present",
      description: "Conducted research in AI/ML domains, publishing projects in computer vision, NLP, and deep learning applications.",
      icon: BookOpen,
      color: "bg-blue-100 text-blue-600"
    },
  
  ];

  return (
    <section id="experience" className="py-20 bg-blue-100" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Professional Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Main Experience */}
          <motion.div 
            className="bg-card rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary rounded-xl flex items-center justify-center mr-4">
                <Building2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-card-foreground mb-2">{mainExperience.title}</h3>
                <p className="text-primary font-semibold mb-1">{mainExperience.company}</p>
                <p className="text-muted-foreground text-sm">{mainExperience.period}</p>
              </div>
            </div>
            
            <ul className="space-y-3 text-muted-foreground">
              {mainExperience.achievements.map((achievement, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Additional Experiences */}
          <div className="space-y-6">
            {additionalExperiences.map((experience, index) => {
              const IconComponent = experience.icon;
              return (
                <motion.div 
                  key={experience.title}
                  className="bg-card rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex items-start mb-4">
                    <div className={`w-10 h-10 ${experience.color} rounded-lg flex items-center justify-center mr-4`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-card-foreground mb-1">{experience.title}</h4>
                      <p className="text-primary font-medium text-sm">{experience.company}</p>
                      <p className="text-muted-foreground text-xs">{experience.period}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">{experience.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
