import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const contacts = [
  { icon: Mail, label: "Email", value: "mar.plocios@gmail.com", href: "mailto:mar.plocios@gmail.com" },
  { icon: Phone, label: "Phone", value: "0915 291 4854", href: "tel:+639152914854" },
  { icon: MapPin, label: "Location", value: "#494 Purok 2, Mamatid, Cabuyao, Laguna", href: null },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-24 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase">Contact</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-12">
            I'm currently available for freelance work and full-time positions. Let's build something great together.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {contacts.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            >
              {c.href ? (
                <a href={c.href} className="block bg-card border border-border rounded-xl p-6 card-hover group">
                  <c.icon className="w-6 h-6 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-xs text-muted-foreground mb-1">{c.label}</p>
                  <p className="font-medium text-sm">{c.value}</p>
                </a>
              ) : (
                <div className="bg-card border border-border rounded-xl p-6 card-hover">
                  <c.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                  <p className="text-xs text-muted-foreground mb-1">{c.label}</p>
                  <p className="font-medium text-sm">{c.value}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button asChild size="lg" className="gap-2">
            <a href="/resume.pdf" download>
              <Download size={18} /> Download Full Resume
            </a>
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 text-muted-foreground text-sm"
        >
          © 2024 Mark Angelo Plocios. Built with passion.
        </motion.p>
      </div>
    </section>
  );
};

export default ContactSection;
