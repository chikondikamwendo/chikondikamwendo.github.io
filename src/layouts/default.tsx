import Github from "@/components/icons/github";
import Linkedin from "@/components/icons/linkedin";
import Moon from "@/components/icons/moon";
import Twitter from "@/components/icons/twitter";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="container mx-auto border-l min-h-screen">
      <header className="px-4 py-6 flex justify-between items-center">
        <ul className="flex items-center gap-2">
          <li>
            <Button
              variant="ghost"
              className="w-12 h-12 text-secondary-foreground/80 hover:text-primary hover:bg-primary/10"
              asChild
            >
              <a href="https://github.com/chikondikamwendo" target="__blank">
                <Github className="size-7" />
              </a>
            </Button>
          </li>
          <li>
            <Button
              variant="ghost"
              className="w-12 h-12 text-secondary-foreground/80 hover:text-primary hover:bg-primary/10"
              asChild
            >
              <a
                href="https://linkedin.com/in/chikondikamwendo"
                target="__blank"
              >
                <Linkedin className="size-7" />
              </a>
            </Button>
          </li>
          <li>
            <Button
              variant="ghost"
              className="w-12 h-12 text-secondary-foreground/80 hover:text-primary hover:bg-primary/10"
              asChild
            >
              <a href="https://x.com/chikondkamwendo" target="__blank">
                <Twitter className="size-7" />
              </a>
            </Button>
          </li>
        </ul>

        <ul className="flex items-center gap-2">
          <li>
            <Button
              variant="ghost"
              size="lg"
              className="text-lg text-secondary-foreground/80 hover:text-primary hover:bg-primary/10"
              asChild
            >
              <a href="#projects">Projects</a>
            </Button>
          </li>
          <li>
            <Button
              variant="ghost"
              size="lg"
              className="text-lg text-secondary-foreground/80 hover:text-primary hover:bg-primary/10"
              asChild
            >
              <a href="#contact-me">Contact Me</a>
            </Button>
          </li>
          <li className="h-8 px-4">
            <Separator orientation="vertical" />
          </li>
          <li>
            <Button variant="ghost" className="w-12 h-12 text-secondary-foreground/80 hover:text-primary hover:bg-primary/10">
              <Moon className="size-7" />
            </Button>
          </li>
        </ul>
      </header>
      {children}
    </main>
  );
}
