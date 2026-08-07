import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:py-28">
      <Reveal className="mb-12 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </span>
        <h2 className="mt-5 text-3xl font-bold sm:text-4xl md:text-5xl">{title}</h2>
        {subtitle ? (
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">{subtitle}</p>
        ) : null}
      </Reveal>
      {children}
    </section>
  );
}
