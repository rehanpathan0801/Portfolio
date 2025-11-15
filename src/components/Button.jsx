import { forwardRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const variants = {
  primary:
    "bg-gradient-to-r from-light-accent via-indigo-500 to-violet-500 text-white shadow-lg shadow-light-accent/30 hover:shadow-light-accent/50 dark:from-dark-accent dark:via-purple-500 dark:to-indigo-500",
  secondary:
    "border border-light-foreground/10 bg-light-surface/70 text-light-foreground hover:border-light-accent hover:text-light-accent dark:border-dark-foreground/10 dark:bg-dark-surface/70 dark:text-dark-foreground dark:hover:border-dark-accent dark:hover:text-dark-accent",
  ghost:
    "bg-transparent text-light-foreground hover:bg-light-foreground/5 hover:text-light-accent dark:text-dark-foreground dark:hover:bg-dark-foreground/5 dark:hover:text-dark-accent",
};

const sharedClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-light-background dark:focus:ring-offset-dark-background";

const ButtonWithHash = ({ to, children, className, ...props }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHashClick = (event) => {
    if (to.includes("#")) {
      event.preventDefault();
      const [path, hash] = to.split("#");
      const scrollToSection = () => {
        const section = document.getElementById(hash);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };

      if (path && location.pathname !== path) {
        navigate(path);
        setTimeout(scrollToSection, 200);
      } else {
        scrollToSection();
        window.history.replaceState(null, "", `/#${hash}`);
      }
    }
  };

  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
      <Link to={to} className={className} onClick={handleHashClick} {...props}>
        {children}
      </Link>
    </motion.div>
  );
};

const Button = forwardRef(
  ({ children, variant = "primary", to, href, className = "", ...props }, ref) => {
    const combinedClassName = `${sharedClasses} ${variants[variant] || variants.primary} ${className}`;

    if (to) {
      if (to.includes("#")) {
        return (
          <ButtonWithHash to={to} className={combinedClassName} {...props}>
            {children}
          </ButtonWithHash>
        );
      }

      return (
        <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
          <Link to={to} className={combinedClassName} ref={ref} {...props}>
            {children}
          </Link>
        </motion.div>
      );
    }

    if (href) {
      return (
        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          href={href}
          target={props.target || "_blank"}
          rel={props.rel || "noreferrer"}
          className={combinedClassName}
          ref={ref}
          {...props}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.button
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        ref={ref}
        className={combinedClassName}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;


