import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Services } from "@/components/portfolio/Services";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const title = "M.K Rafiul Akter Rafi — Frontend Developer";
const description =
  "Frontend Developer specializing in React.js, Next.js, JavaScript and Tailwind CSS. Software Engineering student building responsive, modern web applications.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "M.K Rafiul Akter Rafi",
          jobTitle: "Frontend Developer",
          email: "mailto:mkrafiul13453@gmail.com",
          alumniOf: "Daffodil International University",
          sameAs: [
            "https://github.com/mkrafiul13453",
            "https://www.linkedin.com/in/mk-rafiul",
          ],
          knowsAbout: ["React.js", "Next.js", "JavaScript", "Tailwind CSS", "Node.js", "MongoDB"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <Toaster theme="dark" position="top-center" />
    </div>
  );
}
