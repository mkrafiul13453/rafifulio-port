import { ExternalLink, Github } from "lucide-react";
import { Reveal, Section } from "./primitives";
import shot from "@/assets/sportnest.jpg";

const stack = {
  Frontend: [
    "Next.js",
    "React.js",
    "JavaScript",
    "Hero UI",
    "React Icons",
    "React Toastify",
    "Framer Motion",
  ],
  Backend: ["Node.js"],
  Database: ["MongoDB", "MongoDB Atlas"],
  Authentication: ["Email & Password", "Google Auth", "Better Auth", "JWT Security"],
};

const features = [
  "Online booking management",
  "Delete and manage bookings",
  "Full CRUD operations",
  "Secure authentication",
  "Protected routes",
  "Responsive interface",
  "Smooth animations",
  "Modern user experience",
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title={
        <>
          Work I&apos;m <span className="text-gradient">proud of</span>
        </>
      }
      subtitle="Real-world applications built end to end with a modern JavaScript stack."
    >
      <Reveal>
        <article className="glass glass-hover overflow-hidden rounded-3xl">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative overflow-hidden border-b border-border lg:border-b-0 lg:border-r">
              <img
                src={shot}
                alt="SportNest sports venue booking platform interface"
                width={1200}
                height={800}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="p-7 sm:p-9">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                Full Stack Platform
              </span>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                SportNest — Sports Venue Booking Platform
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                SportNest is a sports venue booking platform that allows users to book different
                sports facilities online based on hourly time slots — badminton courts, table
                tennis, football turf, and swimming pool.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="size-1.5 rounded-full bg-accent" />
                    {f}
                  </div>
                ))}
              </div>

              <div className="mt-7 space-y-3">
                {Object.entries(stack).map(([group, items]) => (
                  <div key={group} className="flex flex-wrap items-center gap-2">
                    <span className="w-28 shrink-0 font-mono text-[11px] uppercase tracking-wider text-primary">
                      {group}
                    </span>
                    {items.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://github.com/mkrafiul13453"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
                >
                  <ExternalLink className="size-4" /> Live Demo
                </a>
                <a
                  href="https://github.com/mkrafiul13453"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-primary/50"
                >
                  <Github className="size-4" /> GitHub Repository
                </a>
              </div>
            </div>
          </div>
        </article>
      </Reveal>
    </Section>
  );
}
