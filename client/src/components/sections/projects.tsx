import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Smart AC (AI-Driven System)",
      description: "Intelligent air conditioning system with 94% accuracy using machine learning algorithms. Features React.js frontend with real-time temperature optimization.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Python", "React.js", "ML", "94% Accuracy"],
      colors: ["bg-blue-100 text-blue-800", "bg-cyan-100 text-cyan-800", "bg-purple-100 text-purple-800", "bg-green-100 text-green-800"],
      demoUrl: "https://smart-ac-zeta.vercel.app/",
      githubUrl: "https://github.com/Adityakulkarni20112003/Smart-AC.git",
      showDemo: true,
      showGithub: true
    },
    {
      title: "Virtual Drag and Drop",
      description: "Computer vision system enabling gesture-based control for drag and drop operations. Built with Streamlit for interactive demonstrations.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Python", "Computer Vision", "Streamlit", "Gesture Control"],
      colors: ["bg-blue-100 text-blue-800", "bg-red-100 text-red-800", "bg-green-100 text-green-800", "bg-purple-100 text-purple-800"],
      demoUrl: "https://dragndrop.streamlit.app/",
      githubUrl: "https://github.com/Adityakulkarni20112003/D-D.git",
      showDemo: true,
      showGithub: true
    },
    {
      title: "Sweet Delights E-Commerce",
      description: "Full-stack e-commerce platform with AI-powered recipe generator. Complete shopping experience with payment integration and inventory management.",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["React", "Node.js", "AI Recipes", "Full-Stack"],
      colors: ["bg-cyan-200 text-cyan-900", "bg-green-100 text-green-800", "bg-purple-100 text-purple-800", "bg-blue-200 text-blue-900"],
      demoUrl: "https://bakery-yfdo.vercel.app/",
      githubUrl: "https://github.com/Adityakulkarni20112003/Bakery.git",
      showDemo: true,
      showGithub: true
    },
    {
      title: "NOVAEX Trading Platform",
      description: "High-performance commodity trading platform with real-time data processing achieving <100ms latency. Built for scalability and reliability.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Java", "Real-time", "<100ms", "Trading"],
      colors: ["bg-gray-100 text-gray-800", "bg-blue-100 text-blue-800", "bg-green-100 text-green-800", "bg-purple-100 text-purple-800"],
      demoUrl: "https://www.novaex.ai/",
      githubUrl: "",
      showDemo: true,
      showGithub: false
    },
    {
      title: "Elite Holidays Travel Portal",
      description: "Comprehensive travel booking system with integrated AI chatbot for customer support. Features booking management and payment processing.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["React", "Flask", "AI Chatbot", "Booking System"],
      colors: ["bg-cyan-100 text-cyan-800", "bg-green-100 text-green-800", "bg-purple-100 text-purple-800", "bg-blue-100 text-blue-800"],
      demoUrl: "https://www.eliteholidays.in/",
      githubUrl: "",
      showDemo: true,
      showGithub: false
    },
    {
      title: "AI Call Agent",
      description: "Advanced voice assistant with Text-to-Speech and Speech-to-Text capabilities achieving 85% accuracy in voice recognition and natural conversation.",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Python", "TTS/STT", "85% Accuracy", "Voice AI"],
      colors: ["bg-blue-200 text-blue-900", "bg-purple-100 text-purple-800", "bg-green-100 text-green-800", "bg-red-100 text-red-800"],
      demoUrl: "",
      githubUrl: "",
      showDemo: false,
      showGithub: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative projects combining cutting-edge AI technology with practical applications.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group bg-card rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col h-full"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              
              <div className="p-6 flex flex-col h-full">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-card-foreground">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tag}
                        variant="secondary"
                        className={`${project.colors[tagIndex]} font-medium`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex w-full gap-3 mt-auto">
                  {project.showDemo && (
                    <a 
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm transition-all duration-300 hover:shadow-lg"
                        size="sm"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
                  )}
                  {project.showGithub && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button 
                        variant="outline"
                        size="sm"
                        className="w-full border-border hover:border-primary text-muted-foreground hover:text-primary font-semibold text-sm transition-all duration-300"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
