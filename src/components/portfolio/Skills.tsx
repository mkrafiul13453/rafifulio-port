import { motion } from "motion/react";
import { Reveal, Section } from "./primitives";

const frontend = [
  { name: "HTML5", level: 92 },
  { name: "CSS3", level: 90 },
  { name: "Tailwind CSS", level: 90 },
  { name: "JavaScript (ES6+)", level: 85 },
  { name: "React.js", level: 88 },
  { name: "Next.js", level: 82 },
];

const backend = [
  { name: "Node.js", level: 75 },
  { name: "Express.js", level: 72 },
  { name: "MongoDB", level: 74 },
  { name: "REST API Development", level: 78 },
];

const extras = [
  "Responsive Web Design",
  "UI/UX Design Principles",
  "API Integration",
  "Authentication Systems",
  "Modern Web Application Development",
];

function Bar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="font-mono text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-secondary">
        <motion.div
          className="h-full rounded-full bg-gradient-accent"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, delay, ease: [0.2, 0.8, 0.2, 1] }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={
        <>
          Tools I use to <span className="text-gradient">ship</span>
        </>
      }
      subtitle="A modern JavaScript stack across the frontend and backend."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="glass glass-hover h-full rounded-3xl p-7">
            <h3 className="mb-6 text-xl font-semibold">Frontend</h3>
            <div className="space-y-5">
              {frontend.map((s, i) => (
                <Bar key={s.name} {...s} delay={i * 0.08} />
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass glass-hover h-full rounded-3xl p-7">
            <h3 className="mb-6 text-xl font-semibold">Backend & Data</h3>
            <div className="space-y-5">
              {backend.map((s, i) => (
                <Bar key={s.name} {...s} delay={i * 0.08} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="mt-6">
        <div className="glass rounded-3xl p-7">
          <h3 className="mb-5 text-sm font-mono uppercase tracking-[0.2em] text-primary">
            Also strong at
          </h3>
          <div className="flex flex-wrap gap-3">
            {extras.map((e) => (
              <span
                key={e}
                className="rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              >
                {e}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
