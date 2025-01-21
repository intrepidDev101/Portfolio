import { motion } from 'framer-motion';
import { Home, User, Target, Mail } from 'lucide-react';

export const Navbar = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-auto mx-auto"
    >
      <div className="nav-blur px-6 py-3 rounded-full flex gap-8 items-center justify-center">
        {[
          { icon: Home, id: 'hero', label: 'Home' },
          { icon: User, id: 'about', label: 'About' },
          { icon: Target, id: 'goals', label: 'Goals' },
          { icon: Mail, id: 'contact', label: 'Contact' }
        ].map(({ icon: Icon, id, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className="group relative flex items-center justify-center transition-transform hover:scale-110"
          >
            <div className="relative">
              <Icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
              <div className="absolute inset-0 bg-blue-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900/90 text-white text-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap">
              {label}
            </span>
          </button>
        ))}
      </div>
    </motion.nav>
  );
};