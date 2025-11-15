import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper.jsx";
import Card from "../components/Card.jsx";
import projects from "../data/projects.js";

const Projects = () => {
  return (
    <SectionWrapper
      id="projects-page"
      eyebrow="Projects"
      title="Product journeys shaped through code and collaboration."
      description="Exploring interfaces, systems, and storytelling across the web. Each project is a chapter in building human-centered experiences."
    >
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card {...project} />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;


