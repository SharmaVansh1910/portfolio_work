import { motion } from 'framer-motion';
import TypeWriter from './TypeWriter';
import Scene3D from './Scene3D';
import { Github, Linkedin, Mail, Phone, Download, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const roles = [
  'Full-Stack Developer',
  'AI Enthusiast',
  'Open Source Contributor',
  'Tech Innovator',
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Scene3D />
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-primary text-sm font-medium mb-6">
            ✨ Welcome to my Digital Universe
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
        >
          <span className="text-foreground">Hi, I'm </span>
          <span className="text-gradient text-glow">Vansh Sharma</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-4xl font-heading text-muted-foreground mb-8"
        >
          <TypeWriter words={roles} className="text-gradient" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          BTech student crafting the future with AI-powered applications, 
          scalable web solutions, and a passion for open-source innovation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">
              <Mail className="mr-2 h-5 w-5" />
              Get in Touch
            </a>
          </Button>
          <Button variant="heroOutline" size="lg" asChild>
            <a href="#projects">
              View Projects
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex items-center justify-center gap-6"
        >
          {[
            { icon: Github, href: 'https://github.com/Vansh', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com/in/Vansh', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:vansh1910sharma@gmail.com', label: 'Email' },
            { icon: Phone, href: 'tel:9711211838', label: 'Phone' },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
            >
              <social.icon size={22} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <ChevronDown size={32} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
