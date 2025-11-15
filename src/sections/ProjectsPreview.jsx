import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import projects from "../data/projects.js";

const ProjectsPreview = () => {
  const featured = projects.slice(0, 3);

  return (
    <SectionWrapper
      id="projects"
      eyebrow="Highlights"
      title="Selected work that blends craft and impact."
      description="A snapshot of projects where I led end-to-end design, development, and motion systems."
    >
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {featured.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card {...project} />
          </motion.div>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Button to="/projects" variant="primary">
          View All Projects
        </Button>
      </div>
    </SectionWrapper>
  );
};

export default ProjectsPreview;


