import { motion } from 'framer-motion';
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

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">
            Technical Arsenal
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 text-gradient">
            Skills & Technologies
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <GlassCard key={category.title} delay={0.1 * catIndex}>
              <h3 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`} />
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
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 rounded-lg bg-muted text-foreground text-sm font-medium cursor-default hover:bg-muted/80 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Animated skill orbs */}
        <div className="mt-16 relative h-40 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            {['React', 'Node.js', 'MongoDB', 'Python', 'AI/ML'].map((skill, index) => (
              <motion.div
                key={skill}
                className="absolute"
                animate={{
                  x: [0, Math.sin(index) * 100, 0],
                  y: [0, Math.cos(index) * 30, 0],
                }}
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="px-6 py-3 rounded-full glass-card text-primary font-heading font-medium text-glow">
                  {skill}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
