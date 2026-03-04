import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Code2, Briefcase, Rocket, Users } from "lucide-react";

const stats = [
  { icon: Briefcase, value: 5, suffix: "+", label: "Years Experience" },
  { icon: Rocket, value: 10, suffix: "+", label: "Projects Delivered" },
  { icon: Code2, value: 15, suffix: "+", label: "Technologies" },
  { icon: Users, value: 3, suffix: "", label: "Companies" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const dur = 1500;
    const step = dur / target;
    const interval = setInterval(() => {
      start++;
      setCount(start);
      if (start >= target) clearInterval(interval);
    }, step);
    return () => clearInterval(interval);
  }, [inView, target]);

  return (
    <span
      ref={ref}
      className="text-3xl sm:text-4xl font-bold text-gradient-gold"
    >
      {count}
      {suffix}
    </span>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Passionate Developer & Problem Solver
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-muted-foreground text-center max-w-3xl mx-auto mb-16 text-lg leading-relaxed"
        >
          I'm a full-stack developer from Laguna, Philippines, with a strong
          focus on building high-performance web and mobile applications. I
          specialize in JavaScript/TypeScript ecosystems and have extensive
          experience with real-time systems, payment integrations, and scalable
          architecture.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 text-center card-hover"
            >
              <s.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <Counter target={s.value} suffix={s.suffix} />
              <p className="text-muted-foreground text-sm mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
