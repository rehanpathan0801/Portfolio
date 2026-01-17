import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper.jsx";
import Button from "../components/Button.jsx";

const About = () => {
  return (
    <SectionWrapper
      id="about"
      eyebrow="About"
      title="Designing delightful, performant interfaces."
      description="I'm a multidisciplinary engineer blending design thinking with code craftsmanship to create experiences users love."
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto max-w-4xl"
      >
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <p className="text-base leading-relaxed text-light-subtle dark:text-dark-subtle">
            I’m a AI-ML and Full Stack enthusiast who enjoys building productive applications.
             I love transforming ideas into responsive interfaces and models.
            </p>
            <p className="text-base leading-relaxed text-light-subtle dark:text-dark-subtle">
            Currently, I am learning how AI can improve development 
            workflows and experimenting with ways to bring smarter, more interactive experiences to the web.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-light-foreground dark:text-dark-foreground">
                What I Do
              </h3>
              <ul className="space-y-3 text-sm text-light-subtle dark:text-dark-subtle">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-light-accent dark:bg-dark-accent" />
                  <span>Build GenAI Models</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-light-accent dark:bg-dark-accent" />
                  <span>Build ML & DL Models</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-light-accent dark:bg-dark-accent" />
                  <span>Web Development</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-light-accent dark:bg-dark-accent" />
                  <span>Responsive UI/UX</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button href="/Rehan_Resume_Updated.pdf" variant="secondary" target="_blank">
                View Resume
              </Button>
              <Button to="/#contact" variant="ghost">
                Let's Collaborate
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default About;


