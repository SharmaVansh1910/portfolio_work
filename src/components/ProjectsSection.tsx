import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import GlassCard from './GlassCard';
import { ExternalLink, Github, Brain, HeartPulse, AlertTriangle, Gamepad2, Heart, ArrowRight } from 'lucide-react';

const projects = [
  {
    slug: 'edumorph',
    title: 'EduMorph',
    description: 'A multimodal AI-powered learning platform for students with personalized learning paths.',
    tech: ['React', 'MongoDB', 'Node.js', 'Tailwind'],
    icon: Brain,
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    slug: 'medguide',
    title: 'MedGuide',
    description: 'Smart medicine guide providing quick information and symptom analysis for healthcare.',
    tech: ['React', 'MongoDB', 'Node.js'],
    icon: HeartPulse,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    slug: 'lifeline-os',
    title: 'LifeLine OS',
    description: 'Emergency alert system with real-time location-based alerts and AI assistant for natural calamities.',
    tech: ['MERN Stack', 'AI Integration'],
    icon: AlertTriangle,
    gradient: 'from-red-500 to-orange-500',
  },
  {
    slug: 'gta6-website',
    title: 'GTA 6 Animated Website',
    description: 'Interactive animated website inspired by GTA 6 with engaging animations and responsive design.',
    tech: ['JavaScript', 'Tailwind CSS'],
    icon: Gamepad2,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    slug: 'donation-platform',
    title: 'Donation Platform',
    description: 'Platform to donate books, clothes, and stationery with payment gateway integration.',
    tech: ['React', 'Tailwind', 'Payment Gateway'],
    icon: Heart,
    gradient: 'from-rose-500 to-red-500',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">
            Portfolio
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 text-gradient">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A collection of innovative projects showcasing AI integration, full-stack development, and creative problem-solving
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link key={project.slug} to={`/project/${project.slug}`}>
              <GlassCard delay={0.1 * index} className="h-full cursor-pointer group">
                <div className="flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <project.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                    View Details
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
