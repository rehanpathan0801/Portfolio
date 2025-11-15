import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import SectionWrapper from "../components/SectionWrapper.jsx";

import { ReactComponent as ReactIcon } from "../assets/icons/react.svg";
import { ReactComponent as JavaScriptIcon } from "../assets/icons/javascript.svg";
import { ReactComponent as NodeIcon } from "../assets/icons/nodejs.svg";
import { ReactComponent as TailwindIcon } from "../assets/icons/tailwindcss.svg";
import { ReactComponent as MySQLIcon } from "../assets/icons/mysql.svg";
import { ReactComponent as MongoDBIcon } from "../assets/icons/mongodb.svg";
import { ReactComponent as HTMLIcon } from "../assets/icons/html5.svg";
import { ReactComponent as CSSIcon } from "../assets/icons/css3.svg";
import { ReactComponent as GitIcon } from "../assets/icons/git.svg";
import { ReactComponent as ExpressIcon } from "../assets/icons/express.svg";

const skills = [
  { id: "react", label: "React", icon: ReactIcon },
  { id: "javascript", label: "JavaScript", icon: JavaScriptIcon },
  { id: "node", label: "Node.js", icon: NodeIcon },
  { id: "mysql", label: "MySQL", icon: MySQLIcon },
  { id: "mongodb", label: "MongoDB", icon: MongoDBIcon },
  { id: "tailwind", label: "Tailwind CSS", icon: TailwindIcon },
  { id: "html", label: "HTML", icon: HTMLIcon },
  { id: "css", label: "CSS", icon: CSSIcon },
  { id: "git", label: "Git", icon: GitIcon },
  { id: "express", label: "Express", icon: ExpressIcon },
];

const duplicatedSkills = [...skills, ...skills, ...skills];

// ⭐ NEW CARD USING SAME UI AS YOUR Demo.jsx
const SkillCard = ({ label, icon: Icon }) => {
  return (
    <figure
      className={cn(
        "relative h-10 cursor-pointer overflow-hidden rounded-3xl border p-2 opacity-70",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2 whitespace-nowrap">
        <Icon className="h-5 w-5" />
        <figcaption className="text-sm font-medium dark:text-white">
          {label}
        </figcaption>
      </div>
    </figure>
  );
};

const Skills = () => {
  return (
    <SectionWrapper
      id="skills"
      eyebrow="Capabilities"
      title="A versatile toolkit for modern product delivery."
      description="I combine engineering rigor with creative discovery to ship resilient, scalable, and delightful experiences."
    >
      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-light-background via-light-background/80 to-transparent dark:from-dark-background dark:via-dark-background/80" />
        <div className="absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-light-background via-light-background/80 to-transparent dark:from-dark-background dark:via-dark-background/80" />

        <div className="marquee-container relative">
          <motion.div
            className="marquee-track flex gap-6"
            animate={{ x: [0, "-33.333%"] }}
            transition={{
              x: { repeat: Infinity, repeatType: "loop", duration: 25, ease: "linear" },
            }}
          >
            {duplicatedSkills.map(({ id, label, icon: Icon }, index) => (
              <SkillCard key={`${id}-${index}`} label={label} icon={Icon} />
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
