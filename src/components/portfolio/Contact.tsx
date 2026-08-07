import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Reveal, Section } from "./primitives";

const EMAILJS_SERVICE_ID = "service_ymma2ax";
const EMAILJS_TEMPLATE_ID = "template_inf2n04";
const EMAILJS_PUBLIC_KEY = "WQ2jqR9UAszznyKCK";


const details = [
  {
    Icon: Mail,
    label: "Email",
    value: "mkrafiul13453@gmail.com",
    href: "mailto:mkrafiul13453@gmail.com",
  },
  { Icon: Phone, label: "Phone", value: "01709882718", href: "tel:+8801709882718" },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/mk-rafiul",
    href: "https://www.linkedin.com/in/mk-rafiul",
  },
  {
    Icon: Github,
    label: "GitHub",
    value: "github.com/mkrafiul13453",
    href: "https://github.com/mkrafiul13453",
  },
  {
    Icon: MapPin,
    label: "Location",
    value: "Daffodil Smart City (DSC), Birulia, Savar, Dhaka - 1216",
  },
];

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setSending(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: String(data.get("name") ?? ""),
          from_name: String(data.get("name") ?? ""),
          email: String(data.get("email") ?? ""),
          reply_to: String(data.get("email") ?? ""),
          subject: String(data.get("subject") ?? "Portfolio enquiry"),
          message: String(data.get("message") ?? ""),
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      toast.success("Message sent! I'll get back to you soon.");
      form.reset();
    } catch {
      toast.error("Couldn't send the message. Please email me directly.");
    } finally {
      setSending(false);
    }
  };


  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={
        <>
          Let&apos;s build something <span className="text-gradient">amazing together</span>
        </>
      }
      subtitle="Open to frontend roles, internships, and freelance projects."
    >
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <div className="glass h-full rounded-3xl p-7 sm:p-8">
            <h3 className="text-lg font-semibold">Contact details</h3>
            <ul className="mt-6 space-y-5">
              {details.map(({ Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                    <Icon className="size-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="break-words text-sm transition-colors hover:text-primary"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} className="glass rounded-3xl p-7 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-muted-foreground">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-muted-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="subject" className="mb-2 block text-sm text-muted-foreground">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                required
                className="w-full rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                placeholder="Project enquiry"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="mb-2 block text-sm text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full resize-none rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                placeholder="Tell me about your project…"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-accent px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-60"
            >
              <Send className="size-4" /> Send Message
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
