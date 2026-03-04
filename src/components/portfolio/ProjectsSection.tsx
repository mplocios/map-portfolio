import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import memoraImg from "@/assets/memora-orbs.png";
import megaperyaImg from "@/assets/megaperya-logo.png";

const projects = [
  {
    title: "MemoraOrbs",
    role: "Founder & Full-Stack Developer",
    description: "NFC-based digital memory platform integrating physical NFC-enabled orbs with a web-based media platform. Built the website and backend enabling users to upload and manage personalized video memories with device-triggered video redirection.",
    tech: ["React", "Node.js", "NFC", "Media Hosting", "Cloud Infrastructure"],
    image: memoraImg,
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "WeFund.live",
    role: "Developer",
    description: "Web-based fundraising platform connecting projects with supporters through transparent campaign listings and reward structures. Implemented campaign browsing, contribution flows, and frontend optimization across devices.",
    tech: ["Next.js", "Node.js", "Stripe", "MongoDB", "Socket.IO"],
    image: null,
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "FlexRide",
    role: "Deployment & Backend Support",
    description: "Ride-hailing platform where I managed deployment pipelines, maintained server infrastructure, reviewed code on Git/GitHub, and performed server monitoring to ensure reliability and uptime.",
    tech: ["Node.js", "Git/GitHub", "CI/CD", "Server Maintenance"],
    image: null,
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Clinic Appointment System",
    role: "Full-Stack Developer & Deployment Lead",
    description: "Web-based clinic appointment system with Node.js (TypeScript) backend and React.js frontend. Features appointment scheduling, patient management, notifications, and deployment on BytePlus cloud infrastructure.",
    tech: ["React.js", "Node.js", "TypeScript", "BytePlus", "CI/CD"],
    image: null,
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Megaperya",
    role: "Backend Developer & Integration Specialist",
    description: "Developed and maintained backend systems using Node.js and TypeScript for secure user management. Integrated third-party casino and betting games ensuring smooth API communication and real-time gameplay.",
    tech: ["Node.js", "TypeScript", "3rd Party APIs", "Real-time", "PostgreSQL"],
    image: megaperyaImg,
    color: "from-red-500/20 to-yellow-500/20",
  },
  {
    title: "SBOBET Casino & Betting Games",
    role: "Full-Stack Game Developer",
    description: "Developed full-stack casino-style and betting game applications with reusable game components. Designed engaging 2D game mechanics using Phaser with real-time gameplay and scalable backend systems.",
    tech: ["Phaser.js", "Canvas API", "Node.js", "WebSocket"],
    image: null,
    color: "from-indigo-500/20 to-violet-500/20",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase">Projects</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">Featured Work</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="group bg-card border border-border rounded-xl overflow-hidden card-hover"
            >
              {/* Image area */}
              <div className={`h-44 bg-gradient-to-br ${p.color} flex items-center justify-center relative overflow-hidden`}>
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-20 h-20 object-contain rounded-lg group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <span className="text-3xl font-bold text-foreground/20 group-hover:text-foreground/30 transition-colors">
                    {p.title.slice(0, 2).toUpperCase()}
                  </span>
                )}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-background/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <ExternalLink className="text-primary" size={28} />
                </motion.div>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-lg">{p.title}</h3>
                <p className="text-primary/80 text-xs font-mono mt-0.5">{p.role}</p>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed line-clamp-3">{p.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {p.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-xs rounded bg-secondary text-secondary-foreground">
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

export default ProjectsSection;
