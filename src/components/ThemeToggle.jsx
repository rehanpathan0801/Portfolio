import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme.js";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      className="relative flex h-11 w-11 items-center justify-center rounded-full border border-light-foreground/10 bg-light-background/70 text-light-foreground shadow-md shadow-light-foreground/5 transition-all duration-300 hover:-translate-y-0.5 hover:border-light-accent hover:text-light-accent focus:outline-none focus:ring-2 focus:ring-light-accent/30 dark:border-dark-foreground/10 dark:bg-dark-background/70 dark:text-dark-foreground dark:shadow-black/30 dark:hover:border-dark-accent dark:hover:text-dark-accent dark:focus:ring-dark-accent/30"
      aria-label="Toggle theme"
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        key={theme}
        initial={{ opacity: 0, rotate: -20, y: -10 }}
        animate={{ opacity: 1, rotate: 0, y: 0 }}
        exit={{ opacity: 0, rotate: 20, y: 10 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </motion.span>
    </motion.button>
  );
};

export default ThemeToggle;


