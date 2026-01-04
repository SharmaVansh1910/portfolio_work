import { motion } from 'framer-motion';
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
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">
            About Me
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 text-gradient">
            Crafting Digital Experiences
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <GlassCard delay={0.1} className="md:col-span-2">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3">
                <div className="w-48 h-48 mx-auto rounded-2xl bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 animate-pulse" />
                  <span className="text-6xl font-heading font-bold text-gradient relative z-10">VS</span>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="font-heading text-2xl font-bold mb-4 text-foreground">
                  Professional Summary
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm a BTech student in Information Technology with hands-on experience in full-stack web development 
                  and AI-powered applications. My passion lies in building scalable, innovative solutions that 
                  make a real impact.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With a strong foundation in algorithms, data structures, and software engineering, I thrive on 
                  collaborative problem-solving and pushing the boundaries of what's possible with technology.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <GlassCard key={item.title} delay={0.1 * (index + 1)}>
              <div className="text-center">
                <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-heading text-lg font-semibold mb-2 text-foreground">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
