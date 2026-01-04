import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import GlassCard from './GlassCard';
import { GraduationCap, Code, Sparkles, Rocket } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'BTech in Information Technology at Bhagwan Parshuram Institute of Technology (2024-2028)',
  },
  {
    icon: Code,
    title: 'Full-Stack',
    description: 'Proficient in React, Node.js, MongoDB, Python, TypeScript, and modern web technologies',
  },
  {
    icon: Sparkles,
    title: 'AI/ML Focus',
    description: 'Hands-on experience building multimodal AI learning platforms and intelligent systems',
  },
  {
    icon: Rocket,
    title: 'Open Source',
    description: 'Active contributor to organizations like KubeStellar, enhancing web applications',
  },
   {
    icon: Design,
    title: 'UI/UX',
    description: 'Active contributor to organizations like KubeStellar, enhancing web UI/UX',
  },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="about" ref={sectionRef} className="py-32 px-4 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div
        style={{ y }}
        className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 150]) }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
      />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span 
            className="text-primary text-sm font-medium tracking-widest uppercase inline-block"
            whileInView={{ scale: [0.8, 1.1, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 text-gradient">
            Crafting Digital Experiences
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <GlassCard delay={0.1} className="md:col-span-2">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <motion.div 
                className="w-full md:w-1/3"
                whileInView={{ rotate: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
              >
                <div className="w-48 h-48 mx-auto rounded-2xl bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center relative overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <span className="text-6xl font-heading font-bold text-gradient relative z-10">VS</span>
                </div>
              </motion.div>
              <div className="w-full md:w-2/3">
                <h3 className="font-heading text-2xl font-bold mb-4 text-foreground">
                  Professional Summary
                </h3>
                <motion.p 
                  className="text-muted-foreground leading-relaxed mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  I'm a BTech student in Information Technology with hands-on experience in full-stack web development 
                  and AI-powered applications. My passion lies in building scalable, innovative solutions that 
                  make a real impact.
                </motion.p>
                <motion.p 
                  className="text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  With a strong foundation in algorithms, data structures, and software engineering, I thrive on 
                  collaborative problem-solving and pushing the boundaries of what's possible with technology.
                </motion.p>
              </div>
            </div>
          </GlassCard>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (index + 1), type: 'spring', stiffness: 100 }}
            >
              <GlassCard delay={0} hover={true}>
                <div className="text-center">
                  <motion.div 
                    className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <h4 className="font-heading text-lg font-semibold mb-2 text-foreground">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
