import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    "AI & Machine Learning Expert",
    "Full-Stack Web Developer", 
    "Deep Learning & Computer Vision",
    "Natural Language Processing"
  ];

  const stats = [
    { value: "6+", label: "Projects Completed" },
    { value: "94%", label: "ML Model Accuracy" },
    { value: "2+", label: "Years Experience" },
    { value: "1", label: "Company Co-Founded" }
  ];

  return (
    <section id="about" className="py-20 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              As a B.Tech Computer Science student and Co-Founder at Giganxt Solutions, I combine academic excellence with entrepreneurial drive. 
              My expertise spans from building responsive web applications to developing sophisticated AI models that solve real-world problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I'm passionate about the intersection of technology and innovation, constantly exploring new ways to leverage AI and machine learning 
              to create meaningful impact in various industries.
            </p>
            
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div 
                  key={highlight}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                  <span className="text-foreground font-medium">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-2xl"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">Quick Stats</h3>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
