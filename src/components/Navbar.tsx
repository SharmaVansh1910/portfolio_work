import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/#about' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="glass-card rounded-full px-6 py-3 flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link to="/" className="font-heading text-2xl font-bold text-gradient">
              VS
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {link.href.startsWith('/') && !link.href.startsWith('/#') ? (
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 glass-card rounded-2xl p-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                link.href.startsWith('/') && !link.href.startsWith('/#') ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-muted-foreground hover:text-primary transition-colors text-lg font-medium"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors text-lg font-medium"
                  >
                    {link.name}
                  </a>
                )
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
