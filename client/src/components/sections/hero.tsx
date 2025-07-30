import { motion, useAnimationControls } from "framer-motion";
import { Download, Mail, Code, Cpu, Database, Braces } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Hero() {
  const handleDownloadResume = () => {
    // Direct link to the resume file
    window.open("/resume/Aditya_D_Kulkarni_Resume.pdf", "_blank");
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Animation controls for the SVG elements
  const iconControls = useAnimationControls();

  // Effect to cycle through colors
  useEffect(() => {
    const colorSequence = async () => {
      while (true) {
        await iconControls.start({
          color: ["#3b82f6", "#8b5cf6", "#ec4899", "#3b82f6"],
          transition: { duration: 8, ease: "easeInOut", repeat: 0 },
        });
      }
    };

    colorSequence();
  }, [iconControls]);

  return (
    <section id="home" className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Hi, I'm <span className="bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">Aditya</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              AI Enthusiast | Full-Stack Developer | ML & Deep Learning Innovator
            </motion.p>

            <motion.p
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Passionate about creating intelligent solutions that bridge the gap between cutting-edge AI research and real-world applications.{" "}
              I specialize in building scalable web applications with integrated machine learning capabilities.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button
                onClick={handleDownloadResume}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 border-0 flex items-center"
              >
                <motion.div animate={iconControls} className="mr-2 flex items-center">
                  <Download className="w-5 h-5" />
                </motion.div>
                Download Resume
              </Button>
              <Button
                variant="outline"
                onClick={handleContactClick}
                className="border-2 border-blue-300 hover:border-blue-500 text-blue-700 hover:text-blue-800 hover:bg-blue-50 font-semibold transition-all duration-300 rounded-lg flex items-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              {/* Main circle with gradient background */}
              <motion.div
                className="w-80 h-80 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl overflow-hidden relative"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Animated background patterns */}
                <motion.div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.3) 0%, transparent 40%), radial-gradient(circle at 70% 60%, rgba(255,255,255,0.3) 0%, transparent 40%)",
                  }}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 60,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Central icon grid */}
                <div className="relative grid grid-cols-2 gap-6 z-10">
                  <motion.div
                    className="flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg"
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.1,
                    }}
                  >
                    <motion.div animate={iconControls}>
                      <Code className="w-8 h-8 text-white" />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg"
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.3,
                    }}
                  >
                    <motion.div animate={iconControls}>
                      <Cpu className="w-8 h-8 text-white" />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg"
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  >
                    <motion.div animate={iconControls}>
                      <Database className="w-8 h-8 text-white" />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg"
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.7,
                    }}
                  >
                    <motion.div animate={iconControls}>
                      <Braces className="w-8 h-8 text-white" />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full shadow-lg"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg rotate-12 shadow-lg"
                animate={{
                  rotate: [12, 22, 12],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute top-1/4 -right-8 w-6 h-6 bg-gradient-to-br from-pink-500 to-rose-600 rounded-md shadow-lg"
                animate={{
                  rotate: [0, 20, 0],
                  scale: [1, 1.15, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
