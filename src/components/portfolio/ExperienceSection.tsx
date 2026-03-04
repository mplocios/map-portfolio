import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Sr. Full Stack Developer",
    company: "iAMTechSolutions",
    period: "Nov 2024 – Present",
    description: "Build responsive UIs with React.js and Material UI. Develop scalable server-side apps with Node.js, Fastify, and Express.js. Implement real-time features via WebSocket APIs. Integrate payment gateways and eKYC systems. Design and optimize database schemas using MySQL and PostgreSQL.",
    tech: ["Node.js", "Fastify", "Express.js", "React.js", "MySQL", "PostgreSQL", "WebSocket", "Payment Gateways", "eKYC"],
  },
  {
    role: "Software Developer",
    company: "Leekie Enterprises Inc.",
    period: "Aug 2022 – Nov 2024",
    description: "Built and maintained game backend systems including player data, progress tracking, and scoring. Developed 2D browser-based games using Phaser 3. Integrated third-party APIs for game features. Connected game frontend to backend APIs for real-time and async data.",
    tech: ["React", "Phaser.js", "Laravel", "Express.js", "MongoDB"],
  },
  {
    role: "IT Associate",
    company: "EMD Technologies Philippines Inc.",
    period: "Mar 2020 – Aug 2022",
    description: "Developed and maintained web and internal software solutions. Provided technical support by diagnosing and resolving system issues. Assisted in system setup, deployment, and maintenance for internal and client-facing platforms.",
    tech: ["Node.js", "React", "MySQL", "Docker", "REST APIs"],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase">Experience</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">Where I've Worked</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-6 md:left-1/2 top-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent"
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
              className={`relative mb-12 md:w-[45%] ${
                i % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
              } pl-14 md:pl-0`}
            >
              {/* Dot */}
              <div className={`absolute top-2 w-3 h-3 rounded-full bg-primary border-2 border-background
                left-[18px] md:left-auto ${i % 2 === 0 ? "md:right-[-6.5px]" : "md:left-[-6.5px]"}`}
              />

              <div className="bg-card border border-border rounded-xl p-6 card-hover group">
                <span className="text-primary font-mono text-xs">{exp.period}</span>
                <h3 className="text-lg font-bold mt-1">{exp.role}</h3>
                <p className="text-primary/80 text-sm font-medium">{exp.company}</p>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-xs rounded-md bg-primary/10 text-primary border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
