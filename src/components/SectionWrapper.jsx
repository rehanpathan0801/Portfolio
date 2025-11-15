import { motion } from "framer-motion";
import Container from "./Container.jsx";

const SectionWrapper = ({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}) => {
  return (
    <section id={id} className={`py-12 sm:py-16 ${className}`}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-3xl text-center"
        >
          {eyebrow && (
            <span className="inline-flex items-center justify-center rounded-full border border-light-foreground/10 bg-light-background/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-light-subtle dark:border-dark-foreground/10 dark:bg-dark-background/60 dark:text-dark-subtle">
              {eyebrow}
            </span>
          )}
          {title && (
            <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-light-foreground sm:text-4xl dark:text-dark-foreground">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-4 text-base text-light-subtle sm:text-lg dark:text-dark-subtle">
              {description}
            </p>
          )}
        </motion.div>
        <div className="mt-16">{children}</div>
      </Container>
    </section>
  );
};

export default SectionWrapper;


