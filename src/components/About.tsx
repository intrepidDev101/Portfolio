import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" ref={ref} className="min-h-screen flex items-center py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg blur-2xl" />
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800"
            alt="Developer workspace"
            className="relative rounded-lg shadow-2xl glass-card p-2"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-bold text-gradient">About Me</h2>
          <div className="space-y-6 text-gray-300">
            <p className="text-lg leading-relaxed">
              I'm a Computer Science & Engineering student with a passion for building
              innovative solutions. My journey in tech started with curiosity and has
              evolved into a deep love for coding and problem-solving.
            </p>
            <p className="text-lg leading-relaxed">
              Currently focusing on web development, mobile applications, and exploring
              the fascinating world of AI/ML. I believe in continuous learning and
              staying updated with the latest technologies.
            </p>
          </div>
          <div className="glass-card p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {['React', 'TypeScript', 'Node.js', 'Python', 'Flutter', 'Git'].map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-full text-sm bg-white/5 border border-white/10">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};