import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import memoraImg from "@/assets/memora-orbs.png";

const projects = [
  {
    title: "CoreBridge",
    role: "Full-Stack Developer",
    description: "Game aggregator platform consolidating multiple providers into a unified API system. Built standardized integration layers, session handling, wallet/transaction flows, and provider callback processing for seamless onboarding.",
    tech: ["Python", "Node.js", "TypeScript", "REST APIs", "PostgreSQL", "WebSocket"],
    image: null,
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "MemoraOrbs",
    role: "Founder & Full-Stack Developer",
    description: "NFC-based digital memory platform integrating physical NFC-enabled orbs with a web-based media platform. Built the website and backend enabling users to upload and manage personalized video memories with device-triggered video redirection.",
    tech: ["React", "Node.js", "NFC", "Media Hosting", "Cloud Infrastructure"],
    image: memoraImg,
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "WeFund.live",
    role: "Developer",
    description: "Web-based fundraising platform connecting projects with supporters through transparent campaign listings and reward structures. Implemented campaign browsing, contribution flows, and frontend optimization across devices.",
    tech: ["Next.js", "Node.js", "Stripe", "MongoDB", "Socket.IO"],
    image: null,
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Remitify",
    role: "Full-Stack Developer",
    description: "Web-based remittance system supporting money transfer processing, transaction tracking, and account management. Built secure backend services for handling transactions, balances, and transfer records with data integrity.",
    tech: ["Node.js", "TypeScript", "PostgreSQL", "React.js", "REST APIs"],
    image: null,
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "EKYC Verification System",
    role: "Full-Stack Developer",
    description: "Electronic Know Your Customer system for automated identity verification. Integrated Amazon Rekognition for facial recognition and face-matching between ID documents and live selfies with secure onboarding workflows.",
    tech: ["React.js", "Node.js", "AWS Rekognition", "TypeScript"],
    image: null,
    color: "from-red-500/20 to-yellow-500/20",
  },
  {
    title: "Clinic Appointment System",
    role: "Full-Stack Developer & Deployment Lead",
    description: "Web-based clinic appointment system with Node.js (TypeScript) backend and React.js frontend. Features appointment scheduling, patient management, notifications, and deployment on BytePlus cloud infrastructure.",
    tech: ["React.js", "Node.js", "TypeScript", "BytePlus", "CI/CD"],
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
