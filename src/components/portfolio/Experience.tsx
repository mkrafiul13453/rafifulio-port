import { GraduationCap, Terminal } from "lucide-react";
import { Reveal, Section } from "./primitives";

const timeline = [
  {
    Icon: Terminal,
    tag: "Experience · 7 Months",
    title: "Web Development Experience",
    sub: "Self-directed",
    text: "Self-directed web development experience with hands-on practice in building professional, responsive, and real-world web applications using modern technologies.",
    points: [
      "Building complete web projects",
      "Debugging and problem solving",
      "Frontend architecture",
      "API integration",
      "Database handling",
      "Authentication implementation",
    ],
  },
  {
    Icon: GraduationCap,
    tag: "Education · Ongoing",
    title: "Undergraduate — Software Engineering",
    sub: "Daffodil International University",
    text: "Studying software engineering with a focus on modern web application development, software design, and problem solving.",
    points: [
      "Software engineering focus",
      "Daffodil Smart City, Savar, Dhaka",
      "Ongoing academic timeline",
    ],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience & Education"
      title={
        <>
          The path so <span className="text-gradient">far</span>
        </>
      }
      subtitle="Practical development experience alongside formal software engineering study."
    >
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-2 h-[calc(100%-1rem)] w-px bg-border sm:left-6" />
        <div className="space-y-8">
          {timeline.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="relative pl-14 sm:pl-20">
                <span className="glass absolute left-0 top-1 grid size-9 place-items-center rounded-xl text-primary sm:size-12">
                  <item.Icon className="size-4 sm:size-5" />
                </span>
                <div className="glass glass-hover rounded-3xl p-6 sm:p-7">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
                    {item.tag}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold sm:text-xl">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.sub}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.points.map((p) => (
                      <span
                        key={p}
                        className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
