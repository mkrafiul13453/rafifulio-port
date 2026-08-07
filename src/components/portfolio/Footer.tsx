import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border px-5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-sm font-bold tracking-[0.22em]">M.K RAFIUL AKTER RAFI</p>
          <p className="mt-1 text-sm text-muted-foreground">Frontend Developer</p>
        </div>

        <div className="flex items-center gap-3">
          {[
            { href: "https://github.com/mkrafiul13453", label: "GitHub", Icon: Github },
            { href: "https://www.linkedin.com/in/mk-rafiul", label: "LinkedIn", Icon: Linkedin },
            { href: "mailto:mkrafiul13453@gmail.com", label: "Email", Icon: Mail },
          ].map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer"
              className="glass grid size-10 place-items-center rounded-xl text-muted-foreground transition-colors hover:text-primary"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-6xl text-center text-xs text-muted-foreground sm:text-left">
        © {new Date().getFullYear()} M.K Rafiul Akter Rafi. All rights reserved.
      </p>
    </footer>
  );
}
