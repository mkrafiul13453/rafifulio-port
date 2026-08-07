import { GraduationCap, Briefcase, Palette, Layers } from "lucide-react";
import { Reveal, Section } from "./primitives";

const highlights = [
  {
    Icon: GraduationCap,
    title: "Software Engineering Student",
    text: "Undergraduate at Daffodil International University, building a strong CS and engineering foundation.",
  },
  {
    Icon: Briefcase,
    title: "Frontend Developer",
    text: "Around 7 months of hands-on web development, shipping responsive real-world applications.",
  },
  {
    Icon: Palette,
    title: "UI/UX Minded",
    text: "Passionate about clean interfaces, accessibility, and modern web experiences.",
  },
  {
    Icon: Layers,
    title: "Full-Stack Curious",
    text: "Exploring Node.js, Express.js and MongoDB to deliver complete product solutions.",
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title={
        <>
          Building the web with <span className="text-gradient">purpose</span>
        </>
      }
      subtitle="A Software Engineering student turning ideas into polished, production-minded web applications."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <Reveal className="glass rounded-3xl p-7 sm:p-9">
          <p className="text-base leading-relaxed text-muted-foreground">
            M.K Rafiul Akter Rafi is a Software Engineering student at{" "}
            <span className="text-foreground">Daffodil International University</span> with
            hands-on experience in modern web development. With around{" "}
            <span className="text-foreground">7 months of web development experience</span>, he
            focuses on building professional, responsive, and real-world applications.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            His work centers on React.js and Next.js frontends backed by REST APIs, with a strong
            interest in UI/UX detail, component architecture, and full-stack development.
          </p>

          <div className="mt-8 space-y-5 border-l border-border pl-6">
            {[
              {
                label: "Education",
                title: "Undergraduate — Software Engineering",
                sub: "Daffodil International University",
              },
              {
                label: "Experience",
                title: "Self-directed Web Development",
                sub: "7 months of practical development experience",
              },
            ].map((item) => (
              <div key={item.label} className="relative">
                <span className="absolute -left-[31px] top-1.5 size-3 rounded-full bg-gradient-accent" />
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  {item.label}
                </p>
                <p className="mt-1 font-semibold">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.sub}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.08}>
              <div className="glass glass-hover h-full rounded-3xl p-6">
                <div className="mb-4 grid size-11 place-items-center rounded-xl bg-secondary text-primary">
                  <h.Icon className="size-5" />
                </div>
                <h3 className="text-base font-semibold">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
