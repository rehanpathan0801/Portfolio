import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Button from "../components/Button.jsx";
import Container from "../components/Container.jsx";
import heroPortrait from "../assets/profile.jpg";

const socials = [
  { icon: Github, href: "https://github.com/rehanpathan0801", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/rehanpathan08", label: "LinkedIn" },
  
];

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden pb-12 pt-16 sm:pb-16 sm:pt-24">
      <Container className="relative grid items-center gap-16 lg:grid-cols-[1.1fr,0.9fr]">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-8"
        >
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl font-bold leading-tight tracking-tight text-light-foreground sm:text-6xl lg:text-7xl dark:text-dark-foreground"
            >
              Hi, I'm{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-light-accent via-indigo-400 to-violet-500 bg-clip-text text-transparent dark:from-dark-accent dark:via-purple-400 dark:to-indigo-500">
                  Rehan Pathan
                </span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-light-accent/30 via-indigo-400/30 to-violet-500/30 blur-2xl dark:from-dark-accent/30 dark:via-purple-400/30 dark:to-indigo-500/30"
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl font-medium leading-relaxed text-light-subtle sm:text-2xl lg:text-3xl dark:text-dark-subtle"
            >
              Building Immersive Web Experiences with{" "}
              <span className="bg-gradient-to-r from-light-accent via-sky-400 to-violet-500 bg-clip-text text-transparent font-semibold dark:from-dark-accent dark:via-indigo-400 dark:to-purple-500">
                React & Full-Stack Skills.
              </span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-xl text-base leading-relaxed text-light-subtle sm:text-lg dark:text-dark-subtle"
            >
              I craft modern web applications with delightful interactions, polished interfaces, and
              high-performance architecture. Let's bring ideas to life with code, design, and motion.
            </motion.p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button to="/projects" variant="primary">
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button to="/#contact" variant="secondary">
              Contact Me
            </Button>
          </div>
          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-light-foreground/10 bg-light-surface/60 text-light-foreground shadow-lg shadow-light-foreground/10 transition-all duration-300 hover:-translate-y-1 hover:border-light-accent hover:text-light-accent focus:outline-none focus:ring-2 focus:ring-light-accent/30 dark:border-dark-foreground/10 dark:bg-dark-surface/60 dark:text-dark-foreground dark:shadow-black/30 dark:hover:border-dark-accent dark:hover:text-dark-accent dark:focus:ring-dark-accent/30"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.96 }}
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center lg:justify-end"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative overflow-hidden rounded-full border border-light-foreground/10 bg-light-surface/60 p-6 shadow-2xl shadow-light-foreground/20 backdrop-blur-2xl dark:border-dark-foreground/10 dark:bg-dark-surface/60 dark:shadow-black/40"
          >
            <div className="absolute -inset-10 bg-gradient-radial from-light-accent/20 via-transparent to-transparent blur-2xl dark:from-dark-accent/20" />
            <img
              src={heroPortrait}
              alt="Hero portrait"
              className="relative z-10 h-full w-full max-w-sm object-cover rounded-full"
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;


