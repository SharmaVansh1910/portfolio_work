import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ParticleField from '@/components/ParticleField';
import AIChatBot from '@/components/AIChatBot';

const Index = () => {
  return (
    <div className="relative min-h-screen neural-grid">
      <ParticleField />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
      <AIChatBot />
    </div>
  );
};

export default Index;
