import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const coreSkills = [
  { name: "Node.js (Fastify, Express)", level: 95 },
  { name: "React.js / Next.js", level: 90 },
  { name: "TypeScript / JavaScript", level: 90 },
  { name: "PHP (Laravel)", level: 80 },
  { name: "MongoDB / SQL / RDBMS", level: 85 },
  { name: "AWS / Docker / DevOps", level: 80 },
];

const techTags = [
  "JavaScript", "TypeScript", "Node.js", "Fastify", "Express.js", "React.js", "Next.js",
  "PHP", "Laravel", "Phaser 3", "MongoDB", "PostgreSQL", "MySQL",
  "Redis", "Socket.IO", "WebSocket", "GraphQL", "REST APIs",
  "Docker", "AWS (S3, RDS)", "BytePlus (ECS)", "Git/GitHub", "CI/CD",
  "Tailwind CSS", "Material UI", "Framer Motion",
  "Payment Gateways", "eKYC", "AI/ML APIs",
  "Game Development", "Canvas API", "Real-Time Systems",
  "Agile (Jira)", "TDD", "MVC", "Performance Optimization",
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase">Skills</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">Tech Stack & Expertise</h2>
        </motion.div>

        {/* Progress bars */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-5 mb-16 max-w-4xl mx-auto">
          {coreSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            >
              <div className="flex justify-between mb-1.5">
                <span className="text-sm font-medium">{skill.name}</span>
                <span className="text-sm text-primary font-mono">{skill.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1.2, delay: 0.4 + i * 0.1, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{ background: "linear-gradient(90deg, hsl(38 92% 50%), hsl(45 100% 65%))" }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2">
          {techTags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.5 + i * 0.03 }}
              whileHover={{ scale: 1.1, backgroundColor: "hsl(38 92% 50% / 0.15)" }}
              className="px-3 py-1.5 text-sm rounded-lg border border-border bg-secondary/50 text-secondary-foreground cursor-default transition-colors"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
