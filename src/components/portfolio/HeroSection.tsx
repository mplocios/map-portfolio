import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/mark-profile.jpg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-16"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Text */}
        <div className="order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-6 animate-pulse-glow"
          >
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-primary">
              Available for Hire
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4"
          >
            Hi, I'm <span className="text-gradient-gold">Mark Angelo</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-xl text-muted-foreground mb-2 font-mono"
          >
            Full Stack Web Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-muted-foreground mb-6 max-w-md leading-relaxed"
          >
            Full-Stack Developer with 5+ years of experience in building and
            maintaining web and mobile applications. Skilled in backend and
            frontend development, API integration, real-time systems, and
            database design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-8"
          >
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-primary" /> Mamatid, Cabuyao,
              Laguna
            </span>
            <span className="flex items-center gap-1.5">
              <Mail size={14} className="text-primary" /> mar.plocios@gmail.com
            </span>
            <span className="flex items-center gap-1.5">
              <Phone size={14} className="text-primary" /> 0915 291 4854
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="flex flex-wrap gap-3"
          >
            <Button asChild className="gap-2">
              <a href="/resume.pdf" download>
                <Download size={16} /> Download CV
              </a>
            </Button>
            {/* <Button variant="outline" asChild className="gap-2 border-primary/30 hover:bg-primary/10">
              <a href="https://github.com/Sessional" target="_blank" rel="noopener noreferrer">
                <Github size={16} /> GitHub
              </a>
            </Button>
            <Button variant="outline" asChild className="gap-2 border-primary/30 hover:bg-primary/10">
              <a href="https://www.linkedin.com/in/mark-angelo-plocios-3a8284231/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={16} /> LinkedIn
              </a>
            </Button> */}
          </motion.div>
        </div>

        {/* Right - Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-primary/30 border-glow">
              <img
                src={profileImg}
                alt="Mark Angelo Plocios"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full border border-dashed border-primary/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 rounded-full border border-dashed border-primary/10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
