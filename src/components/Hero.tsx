import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl" />
          <div className="w-32 h-32 mx-auto mb-8 rounded-full glass-card flex items-center justify-center animate-float relative">
            <Code className="w-12 h-12 text-blue-400 absolute animate-spin-slow" style={{ '--tw-spin-duration': '10s' } as any} />
            <Sparkles className="w-12 h-12 text-purple-400 absolute animate-pulse" />
            <span className="text-5xl relative">👨‍💻</span>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-gradient relative"
        >
          CSE Student & Developer
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl -z-10" />
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Building the future through code, one commit at a time. Passionate about
          creating innovative solutions and pushing technological boundaries.
        </motion.p>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex justify-center gap-8"
        >
          {[
            { icon: Github, href: 'https://github.com', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' }
          ].map(({ icon: Icon, href, label }, index) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <div className="glass-card p-4 rounded-lg transition-transform relative overflow-hidden">
                <Icon className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900/90 text-white text-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap">
                {label}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};