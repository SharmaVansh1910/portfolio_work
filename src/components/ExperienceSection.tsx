import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import { Briefcase, ExternalLink } from 'lucide-react';

const experience = {
  title: 'Open Source Contributor',
  organization: 'KubeStellar',
  period: 'June 2025 – Aug 2025',
  responsibilities: [
    'Development and optimization of web application features using React',
    'Enhanced user experience and interface responses for better engagement',
    'Maintained comprehensive documentation and contributed to UI/UX design',
  ],
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">
            Experience
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 text-gradient">
            My Journey
          </h2>
        </motion.div>

        <GlassCard delay={0.2} className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />
          
          <div className="pl-16 relative">
            {/* Timeline dot */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="absolute left-6 top-2 w-5 h-5 rounded-full bg-primary shadow-lg shadow-primary/50"
            />
            
            <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
              <div>
                <h3 className="font-heading text-2xl font-bold text-foreground flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-primary" />
                  {experience.title}
                </h3>
                <p className="text-primary font-medium mt-1">{experience.organization}</p>
              </div>
              <span className="text-muted-foreground text-sm px-4 py-2 rounded-full glass-card">
                {experience.period}
              </span>
            </div>
            
            <ul className="space-y-3 mt-6">
              {experience.responsibilities.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default ExperienceSection;
