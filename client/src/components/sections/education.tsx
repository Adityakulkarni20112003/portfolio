import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Lightbulb, Users, Zap } from "lucide-react";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    {
      title: "SunHacks Runner-Up",
      subtitle: "Hackathon Competition 2023",
      description: "Secured runner-up position in a competitive hackathon with an innovative AI solution addressing real-world challenges.",
      icon: Award,
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      title: "Academic Excellence",
      subtitle: "High Performance in Core Subjects", 
      description: "Consistently maintained high academic standards with focus on computer science fundamentals and AI/ML coursework.",
      icon: Lightbulb,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Community Impact",
      subtitle: "Voice For Speechless NGO Volunteer",
      description: "Contributed technical expertise to social causes, developing technology solutions for community benefit.",
      icon: Users,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Entrepreneurship",
      subtitle: "Co-Founded Giganxt Solutions",
      description: "Successfully launched and scaled a technology startup focusing on AI-driven solutions and web development services.",
      icon: Zap,
      color: "bg-purple-100 text-purple-600"
    }
  ];

  const educationHighlights = [
    "Specialization in Artificial Intelligence and Machine Learning",
    "Relevant Coursework: Data Structures, Algorithms, Database Systems",
    "Active member of Computer Science Society"
  ];

  return (
    <section id="education" className="py-20 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Education & Achievements</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Education</h3>
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mr-6">
                  <GraduationCap className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Bachelor of Technology</h4>
                  <p className="text-primary font-semibold mb-1">Computer Science & Engineering</p>
                  <p className="text-muted-foreground mb-1">Deogiri Institute of Engineering and Management Studies (DIEMS)</p>
                  <p className="text-muted-foreground text-sm">Expected Graduation: 2025</p>
                </div>
              </div>
              
              <div className="space-y-3 text-muted-foreground">
                {educationHighlights.map((highlight, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Achievements & Recognition</h3>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <motion.div 
                    key={achievement.title}
                    className="bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="flex items-start">
                      <div className={`w-12 h-12 ${achievement.color} rounded-lg flex items-center justify-center mr-4`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-card-foreground mb-1">{achievement.title}</h4>
                        <p className="text-primary font-medium text-sm mb-2">{achievement.subtitle}</p>
                        <p className="text-muted-foreground text-sm">{achievement.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
