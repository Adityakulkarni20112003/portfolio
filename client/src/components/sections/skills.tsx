import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code2, 
  Database, 
  Globe, 
  Brain, 
  Eye, 
  MessageSquare,
  GitBranch,
  Monitor,
  Smartphone,
  Server,
  Cpu,
  Zap
} from "lucide-react";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: Code2, color: "bg-yellow-100 text-yellow-600", description: "AI/ML Development" },
        { name: "Java", icon: Cpu, color: "bg-orange-100 text-orange-600", description: "Backend Development" },
        { name: "TypeScript", icon: Code2, color: "bg-blue-100 text-blue-600", description: "Type-safe Development" }
      ]
    },
    {
      title: "Frontend Technologies", 
      skills: [
        { name: "React", icon: Globe, color: "bg-cyan-100 text-cyan-600", description: "UI Library" },
        { name: "HTML5", icon: Monitor, color: "bg-orange-100 text-orange-600", description: "Markup" },
        { name: "CSS3", icon: Smartphone, color: "bg-blue-100 text-blue-600", description: "Styling" },
        { name: "JavaScript", icon: Zap, color: "bg-yellow-100 text-yellow-600", description: "Programming" }
      ]
    },
    {
      title: "Backend & Databases",
      skills: [
        { name: "Flask", icon: Server, color: "bg-gray-100 text-gray-700", description: "Python Framework" },
        { name: "Node.js", icon: Server, color: "bg-green-100 text-green-600", description: "Runtime Environment" },
        { name: "PostgreSQL", icon: Database, color: "bg-blue-100 text-blue-600", description: "Relational DB" },
        { name: "MongoDB", icon: Database, color: "bg-green-100 text-green-600", description: "NoSQL Database" }
      ]
    },
    {
      title: "AI/ML & Tools",
      skills: [
        { name: "Machine Learning", icon: Brain, color: "bg-purple-100 text-purple-600", description: "ML Models" },
        { name: "Deep Learning", icon: Brain, color: "bg-red-100 text-red-600", description: "Neural Networks" },
        { name: "NLP", icon: MessageSquare, color: "bg-blue-100 text-blue-600", description: "Language Processing" },
        { name: "Computer Vision", icon: Eye, color: "bg-green-100 text-green-600", description: "Image Processing" },
        { name: "GitHub", icon: GitBranch, color: "bg-gray-100 text-gray-700", description: "Version Control" },
        { name: "Streamlit", icon: Monitor, color: "bg-red-100 text-red-600", description: "ML Apps" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Skills & Tech Stack</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit combining modern web technologies with cutting-edge AI and machine learning frameworks.
          </p>
        </motion.div>
        
        {skillCategories.map((category, categoryIndex) => (
          <motion.div 
            key={category.title}
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">{category.title}</h3>
            <div className={`grid grid-cols-2 md:grid-cols-${Math.min(category.skills.length, 4)} lg:grid-cols-${Math.min(category.skills.length, 6)} gap-6`}>
              {category.skills.map((skill, skillIndex) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    className="group bg-white p-6 rounded-xl shadow-sm text-center transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-gradient-to-br hover:from-primary hover:to-primary/80 hover:text-white cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`w-12 h-12 mx-auto mb-4 ${skill.color} rounded-lg flex items-center justify-center group-hover:bg-white/20 group-hover:text-white transition-all duration-300`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2 group-hover:text-white">{skill.name}</h4>
                    <p className="text-muted-foreground text-sm group-hover:text-white/80">{skill.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
