import { ArrowRight } from "lucide-react";
import larakits from "@/assets/screenshots/larakits.png";

type Attachment = {
  src: string;
  size: "desktop" | "mobile";
};

type Project = {
  title: string;
  description: string;
  stack: string[];
  action: {
    label: string;
    href: string;
  };
  attachments: Attachment[];
};

const projects: Project[] = [
  {
    title: "Larakits",
    description:
      "Larakits is an open source platform that auto-curates community-maintained Laravel starter kits from Packagist.",
    stack: ["Laravel", "React.js", "Inertia.js", "Tailwind CSS", "ShadCn UI"],
    action: {
      label: "Visit Larakits",
      href: "https://larakits.codelabmw.dev",
    },
    attachments: [
      {
        src: larakits,
        size: "desktop",
      },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mt-20 w-full h-full py-20 sm:py-40">
      <h2 className="text-2xl sm:text-7xl font-semibold font-display text-muted-foreground/60 px-6">
        Featured
        <p className="text-6xl sm:text-8xl font-display">Projects</p>
      </h2>

      <div className="mt-20 py-20">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="h-[60vh] flex justify-between items-start gap-8"
            >
              <div className="flex-1">
                <h3 className="font-semibold text-4xl text-secondary-foreground/90 border-l-6 border-primary px-4 py-2">
                  {project.title}
                </h3>
                <p className="mt-4 text-2xl text-secondary-foreground/75 px-6">
                  {project.description}
                </p>
                <div className="mt-4 px-6 flex items-center gap-4">
                  {project.stack.map((tech, index) => (
                    <span
                      key={index}
                      className="text-lg text-muted-foreground border-r-2 pr-4 last:border-r-0"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-12 px-6">
                  <a
                    href={project.action.href}
                    target="_blank"
                    className="flex items-center gap-2 text-lg text-primary/80 hover:text-primary transition-colors"
                  >
                    <span>{project.action.label}</span>
                    <ArrowRight className="size-5" />
                  </a>
                </div>
              </div>
              <div className="flex-1 relative">
                {project.attachments.map((attachment, index) => {
                  return (
                    <div key={index} className="absolute top-0 left-0 w-[50vw] h-[55vh] border-16 overflow-clip">
                      <img
                        src={attachment.src}
                        alt="A screenshot of Larakits"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
