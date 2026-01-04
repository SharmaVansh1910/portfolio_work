import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassCard from '@/components/GlassCard';
import Navbar from '@/components/Navbar';
import ParticleField from '@/components/ParticleField';
import Footer from '@/components/Footer';

const blogPosts = [
  {
    id: 1,
    title: 'Building Scalable AI-Powered Applications with React',
    excerpt: 'Exploring the integration of AI capabilities into modern React applications, from chatbots to intelligent recommendations.',
    date: 'Dec 28, 2025',
    readTime: '8 min read',
    category: 'AI/ML',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    id: 2,
    title: 'My Journey Contributing to Open Source at KubeStellar',
    excerpt: 'Lessons learned from my first major open source contribution and how it shaped my development skills.',
    date: 'Dec 15, 2025',
    readTime: '6 min read',
    category: 'Open Source',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    title: 'Creating Immersive Web Experiences with Three.js',
    excerpt: 'A deep dive into building interactive 3D web experiences using Three.js and React Three Fiber.',
    date: 'Dec 5, 2025',
    readTime: '10 min read',
    category: 'Web Development',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    id: 4,
    title: 'The MERN Stack: Building Full-Stack Applications',
    excerpt: 'A comprehensive guide to building modern web applications with MongoDB, Express, React, and Node.js.',
    date: 'Nov 20, 2025',
    readTime: '12 min read',
    category: 'Tutorial',
    gradient: 'from-orange-500 to-red-500',
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen neural-grid">
      <ParticleField />
      <Navbar />
      
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              Blog
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mt-4 text-gradient">
              Thoughts & Insights
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Sharing my learning journey, technical insights, and experiences in software development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <GlassCard key={post.id} delay={0.1 * index} className="group cursor-pointer">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${post.gradient} text-white`}>
                      {post.category}
                    </span>
                    <div className="flex items-center gap-4 text-muted-foreground text-sm">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                  
                  <h2 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-border">
                    <span className="text-primary text-sm font-medium flex items-center gap-2 group-hover:gap-4 transition-all">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground">
              More articles coming soon! Subscribe to get notified.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
