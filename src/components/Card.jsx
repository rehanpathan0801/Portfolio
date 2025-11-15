import { motion } from "framer-motion";
import Button from "./Button.jsx";
import { Github } from "lucide-react";

const Card = ({ title, description, tech = [], image, links = [] }) => {
  return (
    <motion.article
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative overflow-hidden rounded-3xl border border-light-foreground/10 bg-light-surface/70 p-6 backdrop-blur-xl transition-colors duration-300 dark:border-dark-foreground/10 dark:bg-dark-surface/70"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="h-full w-full bg-gradient-to-br from-light-accent/20 via-transparent to-violet-500/10 dark:from-dark-accent/20 dark:to-indigo-500/10" />
        </div> 
      </div>
      {image && (
        <div className="relative mb-6 overflow-hidden rounded-1xl border border-light-foreground/5 bg-light-background/60 p-1 dark:border-dark-foreground/10 dark:bg-dark-background/60">
          <img
            src={image}
            alt={title}
            className="h-full w-full rounded-1xl object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      )}
      <div className="relative z-10 flex flex-col gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-light-foreground dark:text-dark-foreground">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-light-subtle dark:text-dark-subtle">
            {description}
          </p>
        </div>
        {tech.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-light-foreground/10 bg-light-background/70 px-3 py-1 text-xs font-medium uppercase tracking-wide text-light-subtle transition-colors duration-300 group-hover:border-light-accent/30 group-hover:text-light-accent dark:border-dark-foreground/10 dark:bg-dark-background/70 dark:text-dark-subtle dark:group-hover:border-dark-accent/30 dark:group-hover:text-dark-accent"
              >
                {item}
              </span>
            ))}
          </div>
        )}
        {links.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {links.map((link) => (
              <Button
                key={link.href}
                href={link.href}
                variant={link.variant || "secondary"}
                className="text-xs"
                
                
              >
               {link.label}
               {link.icon && <link.icon className="h-4 w-4" />}
              
              </Button>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
};

export default Card;


