import { motion } from "motion/react";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import profile from "@/assets/profile.jpg";

const stats = [
  { value: "7+", label: "Months Experience" },
  { value: "10+", label: "Technologies" },
  { value: "100%", label: "Responsive Builds" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="aurora" aria-hidden="true" />
      <div className="grid-lines absolute inset-0 opacity-60" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 font-mono text-[11px] tracking-wide text-primary sm:text-xs">
            <span className="size-1.5 animate-pulse rounded-full bg-primary" />
            Frontend Developer | React.js | Next.js | JavaScript
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] sm:text-5xl md:text-6xl">
            Hi, I&apos;m M.K Rafiul Akter Rafi
            <span className="mt-2 block text-gradient">Frontend Developer</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Frontend Developer specializing in React.js, Next.js, JavaScript, Tailwind CSS, and
            modern web technologies. Passionate about creating clean, responsive, and user-friendly
            web applications while continuously improving my skills as a Software Engineering
            student.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              View Projects <ArrowRight className="size-4" />
            </a>
            <a
              href="/resume-mk-rafiul-akter-rafi.txt"
              download
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-6 py-3 text-sm font-semibold transition-colors hover:border-primary/50"
            >
              <Download className="size-4" /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {[
              { href: "https://github.com/mkrafiul13453", label: "GitHub", Icon: Github },
              {
                href: "https://www.linkedin.com/in/mk-rafiul",
                label: "LinkedIn",
                Icon: Linkedin,
              },
              { href: "mailto:mkrafiul13453@gmail.com", label: "Email", Icon: Mail },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="glass glass-hover grid size-11 place-items-center rounded-xl text-muted-foreground hover:text-primary"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-sm"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div
            className="absolute -inset-6 rounded-[2.5rem] bg-gradient-accent opacity-25 blur-3xl"
            aria-hidden="true"
          />
          <div className="glass relative overflow-hidden rounded-[2rem] p-2">
            <img
              src={profile}
              alt="Portrait of M.K Rafiul Akter Rafi, frontend developer"
              width={912}
              height={1104}
              className="h-full w-full rounded-[1.6rem] object-cover"
            />
          </div>

          <motion.div
            className="glass absolute -bottom-6 -left-6 rounded-2xl px-4 py-3"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="font-mono text-xs text-primary">Software Engineering</p>
            <p className="text-sm font-semibold">Daffodil Int. University</p>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-4 px-5 sm:grid-cols-3">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            className="glass glass-hover rounded-2xl px-6 py-5 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
          >
            <p className="text-gradient text-3xl font-bold">{s.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
