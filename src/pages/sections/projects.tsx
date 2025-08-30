import { ArrowRight } from "lucide-react";
import larakits from "@/assets/screenshots/larakits.png";
import tidziwitsane from "@/assets/screenshots/tidziwitsane.png";
import tidziwitsaneMobile from "@/assets/screenshots/tidziwitsane_mobile.jpg";
import { cn } from "@/lib/utils";

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
  {
    title: "Tidziwitsane App",
    description:
      "Tidziwitsane App enables the youth in malawi to easily and freely access SRHR information.",
    stack: ["Laravel", "Vue.js", "Flutter", "Inertia.js", "Tailwind CSS"],
    action: {
      label: "Visit Tidziwitsane Website",
      href: "https://tidziwitsane.fammalawi.org",
    },
    attachments: [
      {
        src: tidziwitsane,
        size: "desktop",
      },
      {
        src: tidziwitsaneMobile,
        size: "mobile",
      },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mt-20 w-full h-full py-20 sm:py-40">
      <h2 className="text-4xl sm:text-7xl font-semibold font-display text-muted-foreground/60 px-6 text-center sm:text-left">
        Featured
        <p className="text-6xl sm:text-8xl font-display">Projects</p>
      </h2>

      <div className="mt-10 sm:mt-20 py-10 sm:py-20 space-y-32">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="h-auto sm:h-[60vh] flex flex-col sm:flex-row justify-between items-start gap-8"
            >
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-semibold text-4xl text-secondary-foreground/90 border-l-0 sm:border-l-6 border-primary px-4 py-2">
                  {project.title}
                </h3>
                <p className="mt-4 text-base sm:text-2xl text-secondary-foreground/75 px-6">
                  {project.description}
                </p>
                <div className="mt-4 px-6 flex justify-center sm:justify-start items-center gap-4 flex-wrap">
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
                    className="flex justify-center sm:justify-start items-center gap-2 text-lg text-primary/80 hover:text-primary transition-colors"
                  >
                    <span>{project.action.label}</span>
                    <ArrowRight className="size-5" />
                  </a>
                </div>
              </div>
              <div className="flex-1 relative order-first sm:order-2 px-4 sm:px-0">
                {project.attachments.map((attachment, index) => {
                  return (
                    <div
                      key={index}
                      className={cn(
                        "relative sm:absolute top-0 left-0 w-full sm:w-[50vw] h-[55vh] border-16 overflow-clip rounded-xl",
                        {
                          "hidden sm:block w-auto! top-[20%] translate-y-[20%] left-[10%] shadow-md":
                            attachment.size === "mobile",
                        }
                      )}
                    >
                      <img
                        src={attachment.src}
                        alt="A screenshot of Larakits"
                        className={cn("w-full h-full object-cover", {
                          "object-contain": attachment.size === "mobile",
                        })}
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
