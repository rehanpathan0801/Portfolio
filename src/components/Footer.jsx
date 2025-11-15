import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import Container from "./Container.jsx";

const socialLinks = [
  { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-light-surface/60 py-12 backdrop-blur-xl transition-colors dark:bg-dark-surface/60">
      <Container className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-sm text-light-subtle dark:text-dark-subtle"
        >
          © {currentYear} Crafted with passion. 
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center gap-4"
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-light-foreground/10 bg-light-background/70 text-light-foreground shadow-lg shadow-light-foreground/5 transition-all duration-300 hover:-translate-y-1 hover:border-light-accent hover:text-light-accent focus:outline-none focus:ring-2 focus:ring-light-accent/40 dark:border-dark-foreground/10 dark:bg-dark-background/70 dark:text-dark-foreground dark:shadow-black/20 dark:hover:border-dark-accent dark:hover:text-dark-accent dark:focus:ring-dark-accent/40"
              aria-label={label}
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </motion.div>
      </Container>
    </footer>
  );
};

export default Footer;


