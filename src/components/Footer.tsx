import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>© 2025 Vansh Sharma. Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>and React</span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground px-3 py-1 rounded-full glass-card">
              ✨ Open to opportunities
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
