import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import GlassCard from './GlassCard';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'C/C++', 'JavaScript', 'TypeScript', 'SQL', 'HTML/CSS'],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Frameworks',
    skills: ['React', 'Node.js', 'Express', 'Tailwind', 'Bootstrap', 'EJS'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Developer Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'REST API', 'Jupyter'],
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Libraries',
    skills: ['pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    color: 'from-yellow-500 to-orange-500',
  },
];

const floatingSkills = ['React', 'Node.js', 'MongoDB', 'Python', 'AI/ML'];

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section id="skills" ref={sectionRef} className="py-32 px-4 relative overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        style={{ rotate }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-5"
      >
        <div className="absolute inset-0 border-2 border-primary rounded-full" />
        <div className="absolute inset-10 border-2 border-secondary rounded-full" />
        <div className="absolute inset-20 border-2 border-primary rounded-full" />
      </motion.div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span 
            className="text-primary text-sm font-medium tracking-widest uppercase"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Technical Arsenal
          </motion.span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 text-gradient">
            Skills & Technologies
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * catIndex, type: 'spring' }}
            >
              <GlassCard delay={0}>
                <h3 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <motion.span 
                    className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: catIndex * 0.2 }}
                  />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * skillIndex }}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -3,
                        boxShadow: '0 10px 20px rgba(0, 212, 255, 0.2)',
                      }}
                      className="px-4 py-2 rounded-lg bg-muted text-foreground text-sm font-medium cursor-default hover:bg-muted/80 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Floating skill orbs with parallax */}
        <div className="mt-16 relative h-40 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            {floatingSkills.map((skill, index) => (
              <motion.div
                key={skill}
                className="absolute"
                animate={{
                  x: [0, Math.sin(index * 1.5) * 120, 0],
                  y: [0, Math.cos(index * 1.5) * 40, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 5 + index,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                whileHover={{ scale: 1.2 }}
              >
                <motion.div 
                  className="px-6 py-3 rounded-full glass-card text-primary font-heading font-medium text-glow cursor-pointer"
                  animate={{ 
                    boxShadow: [
                      '0 0 20px rgba(0, 212, 255, 0.2)',
                      '0 0 40px rgba(0, 212, 255, 0.4)',
                      '0 0 20px rgba(0, 212, 255, 0.2)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                >
                  {skill}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
