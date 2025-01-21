import { motion } from 'framer-motion';
import { Code2, GitBranch, Terminal, Smartphone, Database, Cloud } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const skills = [
  { icon: Code2, title: 'C/C++', description: 'Strong foundation in programming fundamentals' },
  { icon: Smartphone, title: 'Flutter', description: 'Cross-platform mobile app development' },
  { icon: GitBranch, title: 'Git', description: 'Version control and collaboration' },
  { icon: Terminal, title: 'Linux', description: 'Command line and system administration' },
  { icon: Database, title: 'SQL', description: 'Database management and queries' },
  { icon: Cloud, title: 'Cloud', description: 'Cloud computing and deployment' },
];

export const Goals = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="goals" ref={ref} className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-16 text-gradient"
        >
          Skills & Goals
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="skill-card glass-card p-6 rounded-xl relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <skill.icon className="w-12 h-12 mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};