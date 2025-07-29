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
  Zap,
  Star,
  TrendingUp
} from "lucide-react";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillsWithProficiency = [
    { name: "Python", level: 95, icon: Code2, color: "#3776ab", category: "Programming" },
    { name: "Machine Learning", level: 90, icon: Brain, color: "#FF6B6B", category: "AI/ML" },
    { name: "React", level: 88, icon: Globe, color: "#61DAFB", category: "Frontend" },
    { name: "TypeScript", level: 85, icon: Code2, color: "#3178c6", category: "Programming" },
    { name: "Node.js", level: 82, icon: Server, color: "#339933", category: "Backend" },
    { name: "Deep Learning", level: 85, icon: Brain, color: "#FF4757", category: "AI/ML" },
    { name: "PostgreSQL", level: 80, icon: Database, color: "#336791", category: "Database" },
    { name: "Java", level: 78, icon: Cpu, color: "#f89820", category: "Programming" },
    { name: "Computer Vision", level: 82, icon: Eye, color: "#4ECDC4", category: "AI/ML" },
    { name: "Flask", level: 80, icon: Server, color: "#000000", category: "Backend" },
    { name: "NLP", level: 75, icon: MessageSquare, color: "#7B68EE", category: "AI/ML" },
    { name: "MongoDB", level: 75, icon: Database, color: "#47A248", category: "Database" }
  ];

  const techStacks = [
    {
      title: "AI/ML Stack",
      technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenCV"],
      icon: Brain,
      gradient: "from-purple-500 to-pink-500",
      description: "Advanced AI and Machine Learning development"
    },
    {
      title: "Frontend Stack", 
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
      icon: Globe,
      gradient: "from-blue-500 to-cyan-500",
      description: "Modern responsive web applications"
    },
    {
      title: "Backend Stack",
      technologies: ["Node.js", "Express", "Flask", "PostgreSQL", "MongoDB"],
      icon: Server,
      gradient: "from-green-500 to-emerald-500", 
      description: "Scalable server-side applications"
    },
    {
      title: "DevOps & Tools",
      technologies: ["Git", "GitHub", "Docker", "AWS", "Streamlit"],
      icon: GitBranch,
      gradient: "from-orange-500 to-red-500",
      description: "Development and deployment tools"
    }
  ];

  const categories = ["Programming", "AI/ML", "Frontend", "Backend", "Database"];
  const categoryColors = {
    "Programming": "#3776ab",
    "AI/ML": "#FF6B6B", 
    "Frontend": "#61DAFB",
    "Backend": "#339933",
    "Database": "#336791"
  };

  return (
    <section id="skills" className="py-20 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Skills Proficiency Chart */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Technical Proficiency</h3>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              {skillsWithProficiency.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div 
                    key={skill.name}
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white"
                      style={{ backgroundColor: skill.color }}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div 
                          className="h-2 rounded-full"
                          style={{ backgroundColor: skill.color }}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Tech Stacks Cards */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Technology Stacks</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStacks.map((stack, index) => {
              const IconComponent = stack.icon;
              return (
                <motion.div
                  key={stack.title}
                  className="group relative bg-white rounded-2xl p-6 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stack.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className={`w-12 h-12 bg-gradient-to-br ${stack.gradient} rounded-xl flex items-center justify-center mb-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  <h4 className="font-bold text-foreground mb-2">{stack.title}</h4>
                  <p className="text-muted-foreground text-sm mb-4">{stack.description}</p>
                  
                  <div className="space-y-2">
                    {stack.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        className="flex items-center text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ duration: 0.3, delay: 0.8 + index * 0.1 + techIndex * 0.05 }}
                      >
                        <Star className="w-3 h-3 text-primary mr-2" />
                        <span className="text-muted-foreground">{tech}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Skills Overview Chart */}
        <motion.div 
          className="bg-white rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center">
            <TrendingUp className="w-6 h-6 mr-2 text-primary" />
            Skills Distribution
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {categories.map((category, index) => {
              const categorySkills = skillsWithProficiency.filter(skill => skill.category === category);
              const avgLevel = categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length;
              
              return (
                <motion.div 
                  key={category}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <div className="relative w-20 h-20 mx-auto mb-3">
                    <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="2"
                      />
                      <motion.path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke={categoryColors[category]}
                        strokeWidth="2"
                        strokeDasharray={`${avgLevel}, 100`}
                        initial={{ strokeDasharray: "0, 100" }}
                        animate={isInView ? { strokeDasharray: `${avgLevel}, 100` } : { strokeDasharray: "0, 100" }}
                        transition={{ duration: 1.5, delay: 1 + index * 0.2 }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-bold" style={{ color: categoryColors[category] }}>
                        {Math.round(avgLevel)}%
                      </span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-foreground text-sm">{category}</h4>
                  <p className="text-xs text-muted-foreground">{categorySkills.length} skills</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
