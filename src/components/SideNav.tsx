import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, GraduationCap, Mail, Code2 } from 'lucide-react';

export default function SideNav() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'hero', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'projects', icon: Code2, label: 'Projects' },
    { id: 'education', icon: GraduationCap, label: 'Education' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  return (
    <>
      {/* Navigation Dots */}
      <motion.nav
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4"
      >
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="group relative"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Dot */}
            <div
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${activeSection === item.id
                  ? 'bg-foreground border-foreground scale-125'
                  : 'bg-transparent border-foreground/30 hover:border-foreground/60'
                }`}
            />

            {/* Tooltip */}
            <motion.div
              className="absolute right-full mr-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <div className="bg-card border border-border px-3 py-1.5 rounded-lg shadow-lg backdrop-blur-sm whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <item.icon className="w-3 h-3 text-foreground/70" />
                  <span className="text-xs font-medium text-foreground">{item.label}</span>
                </div>
              </div>
            </motion.div>
          </motion.button>
        ))}
      </motion.nav>

      {/* Mobile Bottom Nav - Icons Only */}
      <motion.nav
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-card/95 backdrop-blur-md border-t border-border shadow-lg pb-[env(safe-area-inset-bottom)]"
      >
        <div className="flex justify-around items-center px-2 sm:px-4 py-2.5 sm:py-3">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`p-2 sm:p-2.5 rounded-lg transition-all ${activeSection === item.id
                  ? 'text-foreground bg-muted'
                  : 'text-muted-foreground hover:text-foreground'
                }`}
              whileTap={{ scale: 0.9 }}
              aria-label={item.label}
            >
              <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>
          ))}
        </div>
      </motion.nav>
    </>
  );
}
