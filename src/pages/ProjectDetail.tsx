import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Brain, HeartPulse, AlertTriangle, Gamepad2, Heart } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import Navbar from '@/components/Navbar';
import ParticleField from '@/components/ParticleField';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const projectsData = {
  'edumorph': {
    title: 'EduMorph',
    subtitle: 'AI-Powered Learning Platform',
    description: 'A multimodal AI-powered learning platform designed to revolutionize how students learn and interact with educational content.',
    longDescription: `EduMorph represents a new paradigm in educational technology. By leveraging advanced AI capabilities, the platform creates personalized learning paths for each student, adapting to their learning style, pace, and preferences.

The platform features:
• Multimodal content delivery (text, video, interactive quizzes)
• AI-driven personalized recommendations
• Progress tracking and analytics
• Collaborative learning spaces
• Real-time feedback and assessment`,
    tech: ['React', 'MongoDB', 'Node.js', 'Tailwind CSS', 'AI/ML'],
    icon: Brain,
    gradient: 'from-cyan-500 to-blue-500',
    features: [
      'Personalized learning paths',
      'AI-powered content recommendations',
      'Interactive quizzes and assessments',
      'Progress analytics dashboard',
      'Collaborative study rooms',
    ],
  },
  'medguide': {
    title: 'MedGuide',
    subtitle: 'Smart Medicine Assistant',
    description: 'An intelligent medicine guide providing quick, reliable information about medications and symptom analysis.',
    longDescription: `MedGuide is a comprehensive healthcare companion that helps users understand their medications and symptoms better. The application provides evidence-based information in an accessible format.

Key features include:
• Comprehensive medicine database
• Symptom checker with AI analysis
• Drug interaction warnings
• Dosage reminders and tracking
• Emergency contact integration`,
    tech: ['React', 'MongoDB', 'Node.js', 'REST API'],
    icon: HeartPulse,
    gradient: 'from-green-500 to-emerald-500',
    features: [
      'Medicine information database',
      'Symptom analysis',
      'Drug interaction checker',
      'Dosage tracking',
      'Healthcare provider directory',
    ],
  },
  'lifeline-os': {
    title: 'LifeLine OS',
    subtitle: 'Emergency Response System',
    description: 'A real-time emergency alert system with location-based notifications and AI-powered guidance during natural calamities.',
    longDescription: `LifeLine OS is a life-saving emergency response platform designed to provide rapid assistance during critical situations. The system leverages real-time location data and AI to coordinate emergency responses effectively.

Core capabilities:
• Real-time location-based alerts
• AI assistant for emergency guidance
• Integration with local emergency services
• Crowd-sourced incident reporting
• Offline functionality for disaster scenarios`,
    tech: ['MERN Stack', 'WebSocket', 'Geolocation API', 'AI Integration'],
    icon: AlertTriangle,
    gradient: 'from-red-500 to-orange-500',
    features: [
      'Real-time emergency alerts',
      'AI-powered guidance',
      'Location tracking',
      'Emergency contacts',
      'Offline support',
    ],
  },
  'gta6-website': {
    title: 'GTA 6 Animated Website',
    subtitle: 'Interactive Gaming Experience',
    description: 'An interactive, animated website inspired by the GTA 6 aesthetic with engaging animations and responsive design.',
    longDescription: `This project showcases advanced front-end development skills through an immersive, game-inspired web experience. The website captures the essence of the GTA 6 aesthetic while demonstrating modern web animation techniques.

Technical highlights:
• Complex CSS animations and transitions
• JavaScript-powered interactive elements
• Responsive design for all devices
• Optimized performance
• Engaging user experience`,
    tech: ['JavaScript', 'Tailwind CSS', 'GSAP', 'HTML5'],
    icon: Gamepad2,
    gradient: 'from-purple-500 to-pink-500',
    features: [
      'Smooth animations',
      'Interactive elements',
      'Responsive design',
      'Game-inspired UI',
      'Performance optimized',
    ],
  },
  'donation-platform': {
    title: 'Donation Platform',
    subtitle: 'Connecting Donors with Those in Need',
    description: 'A platform enabling donations of books, clothes, and stationery with integrated payment processing.',
    longDescription: `The Donation Platform bridges the gap between generous donors and individuals in need. It streamlines the donation process from item listing to pickup coordination, making giving back easier than ever.

Platform features:
• Easy item listing and categorization
• Location-based pickup scheduling
• Request management for recipients
• Secure payment gateway integration
• Impact tracking and reporting`,
    tech: ['React', 'Tailwind CSS', 'Payment Gateway', 'Node.js'],
    icon: Heart,
    gradient: 'from-rose-500 to-red-500',
    features: [
      'Item donation listing',
      'Pickup coordination',
      'Request management',
      'Payment processing',
      'Impact tracking',
    ],
  },
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectsData[slug as keyof typeof projectsData] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <GlassCard>
          <h1 className="font-heading text-2xl mb-4">Project Not Found</h1>
          <Link to="/#projects" className="text-primary hover:underline">
            ← Back to Projects
          </Link>
        </GlassCard>
      </div>
    );
  }

  const Icon = project.icon;

  return (
    <div className="min-h-screen neural-grid">
      <ParticleField />
      <Navbar />
      
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link 
              to="/#projects" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </motion.div>

          <GlassCard delay={0.1} className="mb-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}>
                <Icon className="w-10 h-10 text-white" />
              </div>
              <div className="flex-1">
                <h1 className="font-heading text-4xl font-bold text-gradient mb-2">
                  {project.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-4">{project.subtitle}</p>
                <p className="text-foreground">{project.description}</p>
              </div>
            </div>
          </GlassCard>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <GlassCard delay={0.2} className="md:col-span-2">
              <h2 className="font-heading text-2xl font-bold mb-4 text-foreground">About the Project</h2>
              <div className="text-muted-foreground whitespace-pre-line leading-relaxed">
                {project.longDescription}
              </div>
            </GlassCard>

            <GlassCard delay={0.3}>
              <h3 className="font-heading text-xl font-bold mb-4 text-foreground">Key Features</h3>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </GlassCard>
          </div>

          <GlassCard delay={0.4}>
            <h3 className="font-heading text-xl font-bold mb-4 text-foreground">Technologies Used</h3>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 rounded-lg bg-muted text-foreground font-medium"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </GlassCard>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex gap-4 justify-center"
          >
            <Button variant="hero" size="lg" asChild>
              <a href="https://github.com/Vansh" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 w-5 h-5" />
                View on GitHub
              </a>
            </Button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
