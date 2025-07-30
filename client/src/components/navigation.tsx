import { useState, useEffect } from "react";
import { Menu, X, Code, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const sectionId = href.substring(1);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center py-3">
          {/* Logo and Title */}
          <motion.div
            className="flex items-center gap-3 cursor-default select-none"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 shadow">
              <Code className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 tracking-tight select-text">
                Aditya D. Kulkarni
              </h1>
              <p className="text-xs text-gray-500 mt-0.5">Developer & AI Enthusiast</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3">
            {navItems.map((item, idx) => (
              <motion.button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none",
                  activeSection === item.href.substring(1)
                    ? "text-blue-700 bg-blue-50 shadow-sm"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                )}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.09 }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                {item.label}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 bottom-1 w-1/3 h-[3px] bg-blue-300 rounded-full"
                    layoutId="activeSection"
                    transition={{ type: "tween", duration: 0.5 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-gray-200 transition-colors duration-150"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen
              ? <X className="w-6 h-6 text-blue-700" />
              : <Menu className="w-6 h-6 text-gray-700" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-lg shadow"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28 }}
            layout
          >
            <div className="px-6 py-4 space-y-1">
              {navItems.map((item, idx) => (
                <motion.button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "flex items-center w-full text-left px-4 py-3 rounded-md text-base font-medium transition-colors duration-200",
                    activeSection === item.href.substring(1)
                      ? "text-blue-700 bg-blue-50 shadow"
                      : "text-gray-800 hover:text-blue-600 hover:bg-gray-100"
                  )}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.06 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <ChevronRight
                    className={cn(
                      "mr-2 w-5 h-5",
                      activeSection === item.href.substring(1) ? "text-blue-600" : "text-gray-400"
                    )}
                  />
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
