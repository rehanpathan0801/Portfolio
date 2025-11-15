import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import { useTheme } from "./hooks/useTheme.js";

const pageVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -24 },
};

const pageTransition = {
  duration: 0.45,
  ease: [0.22, 0.68, 0, 1],
};

const App = () => {
  const location = useLocation();
  const { theme } = useTheme();

  return (
    <div
      data-theme={theme}
      className="min-h-screen bg-light-background text-light-foreground transition-colors duration-300 dark:bg-dark-background dark:text-dark-foreground"
    >
      <div className="fixed inset-0 -z-10 bg-gradient-glow opacity-80 blur-3xl dark:opacity-60" />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={pageTransition}
          className="pt-24 sm:pt-28"
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default App;


