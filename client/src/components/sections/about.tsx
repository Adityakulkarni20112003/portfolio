import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    "Driven by curiosity and creativity",
    "Dedicated AI & ML Enthusiast",
    "Full-Stack Developer with strong problem-solving skills",
    "Committed to continuous learning"
  ];

  const stats = [
    { value: "6+", label: "Innovative Projects" },
    { value: "94%", label: "ML Model Accuracy" },
    { value: "1+", label: "Years of Experience" },
    { value: "1", label: "Startup Co-Founded" }
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
              I am currently pursuing a B.Tech in Artificial Intelligence & Machine Learning, a field that constantly challenges and motivates me to think differently and innovate. My academic journey has deepened my understanding of cutting-edge AI concepts, fostering a fascination for their potential in transforming real-world applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              In addition to my studies, I am a co-founder at Giganxt Solutions. This entrepreneurial experience has taught me that effective technology solutions emerge from dedication, collaboration, and a commitment to excellence. Whether developing user-centric web applications or designing robust AI models, I strive to make a positive impact through both technical skill and thoughtful problem-solving.
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
