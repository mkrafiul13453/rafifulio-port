import { Code2, Sparkles, Server } from "lucide-react";
import { Reveal, Section } from "./primitives";

const services = [
  {
    Icon: Code2,
    title: "Frontend Web Development",
    text: "Modern, responsive, and interactive websites built with a component-driven workflow.",
    points: ["React.js", "Next.js", "JavaScript (ES6+)", "Tailwind CSS"],
  },
  {
    Icon: Sparkles,
    title: "UI/UX Focused Development",
    text: "Focused on creating clean, user-friendly, visually appealing interfaces by applying modern UI/UX design principles.",
    points: [
      "Responsive website design",
      "Modern interface development",
      "User experience improvements",
      "Component-based architecture",
    ],
  },
  {
    Icon: Server,
    title: "Full Stack Web Solutions",
    text: "End-to-end features from database to interface, wired together with secure APIs.",
    points: [
      "REST API integration",
      "Node.js & Express.js backends",
      "MongoDB database integration",
    ],
  },
];

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title={
        <>
          What I can <span className="text-gradient">build for you</span>
        </>
      }
      subtitle="From polished interfaces to complete full-stack features."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.1}>
            <div className="glass glass-hover relative h-full overflow-hidden rounded-3xl p-7">
              <div
                className="absolute -right-10 -top-10 size-32 rounded-full bg-gradient-accent opacity-15 blur-2xl"
                aria-hidden="true"
              />
              <div className="mb-5 grid size-12 place-items-center rounded-2xl bg-secondary text-primary">
                <s.Icon className="size-6" />
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              <ul className="mt-5 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="size-1.5 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
