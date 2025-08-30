import { useEffect, useState } from "react";
import Github from "@/components/icons/github";
import Linkedin from "@/components/icons/linkedin";
import Moon from "@/components/icons/moon";
import Sun from "@/components/icons/sun";
import Twitter from "@/components/icons/twitter";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import X from "@/components/icons/x";
import Menu from "@/components/icons/menu";
import At from "@/components/icons/at";
import Phone from "@/components/icons/phone";

const navLinks = [
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/chikondikamwendo",
    icon: <Github className="size-6 sm:size-7" />,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/chikondikamwendo",
    icon: <Linkedin className="size-6 sm:size-7" />,
  },
  {
    name: "Twitter",
    href: "https://x.com/chikondkamwendo",
    icon: <Twitter className="size-6 sm:size-7" />,
  },
];

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check for dark mode preference
    if (typeof window !== "undefined") {
      const isDark =
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);
      setDarkMode(isDark);
      document.documentElement.classList.toggle("dark", isDark);
    }

    // Handle scroll effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.theme = newDarkMode ? "dark" : "light";
    document.documentElement.classList.toggle("dark", newDarkMode);
  };

  return (
    <div className="min-h-screen container mx-auto border-l bg-background transition-colors duration-200">
      <header
        className={cn(
          "sticky sm:relative top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-300",
          isScrolled ? "py-2 shadow-sm sm:shadow-none" : "py-4"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Social Links */}
            <nav
              aria-label="Social links"
              className="flex items-center space-x-1 sm:space-x-2"
            >
              {socialLinks.map((link) => (
                <Button
                  key={link.name}
                  asChild
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 sm:h-12 sm:w-12 text-secondary-foreground/80 hover:text-primary hover:bg-primary/10"
                  aria-label={link.name}
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.icon}
                  </a>
                </Button>
              ))}
            </nav>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center space-x-2"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <Button
                  key={link.name}
                  asChild
                  variant="ghost"
                  className="px-3 py-2 text-sm sm:text-base font-medium text-secondary-foreground/80 hover:text-primary hover:bg-primary/10"
                >
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </Button>
              ))}
              <div className="h-6 mx-2">
                <Separator orientation="vertical" />
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="h-10 w-10 sm:h-12 sm:w-12 text-secondary-foreground/80 hover:text-primary hover:bg-primary/10"
                aria-label={
                  darkMode ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                {darkMode ? (
                  <Sun className="size-5 sm:size-6" />
                ) : (
                  <Moon className="size-5 sm:size-6" />
                )}
              </Button>
            </nav>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="h-10 w-10 text-secondary-foreground/80 hover:text-primary hover:bg-primary/10"
                aria-label={
                  darkMode ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                {darkMode ? (
                  <Sun className="size-5" />
                ) : (
                  <Moon className="size-5" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="h-10 w-10 text-secondary-foreground/80 hover:text-primary hover:bg-primary/10 md:hidden"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? (
                  <X className="size-5" />
                ) : (
                  <Menu className="size-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={cn(
              "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
              isMobileMenuOpen ? "max-h-40 py-4" : "max-h-0 py-0"
            )}
          >
            <nav
              className="flex flex-col space-y-2"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => (
                <Button
                  key={link.name}
                  asChild
                  variant="ghost"
                  className="w-full justify-start px-4 py-3 text-base font-medium text-secondary-foreground/80 hover:text-primary hover:bg-primary/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <a href={link.href}>{link.name}</a>
                </Button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer id="contact" className="pb-8">
        <h2 className="text-2xl sm:text-7xl font-semibold font-display text-muted-foreground/60 px-6">
          Interested?
          <p className="text-6xl sm:text-8xl font-display">Let's chat</p>
        </h2>
        <div className="mt-8 px-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="mailto:chikondikamwendo@yahoo.com" className="flex items-center gap-2 text-lg text-secondary-foreground/80 hover:text-primary transition-colors">
              <At />
              <span>Send me an email</span>
            </a>

            <Separator orientation="vertical" />

            <a href="tel:+265997368932" className="flex items-center gap-2 text-lg text-secondary-foreground/80 hover:text-primary transition-colors">
              <Phone />
              <span>Give me a call</span>
            </a>

            <Separator orientation="vertical" />

            <a href="https://wa.me/265997368932" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg text-secondary-foreground/80 hover:text-primary transition-colors">
              <Phone />
              <span>Connect on WhatsApp</span>
            </a>
          </div>

          <div>
            <nav
              aria-label="Social links"
              className="flex items-center space-x-1 sm:space-x-2"
            >
              {socialLinks.map((link) => (
                <Button
                  key={link.name}
                  asChild
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 text-secondary-foreground/80 hover:text-primary hover:bg-primary/10"
                  aria-label={link.name}
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.icon}
                  </a>
                </Button>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-4 px-6">
          <p className="text-muted-foreground/60 text-sm">
            &copy; {new Date().getFullYear()} Chikondi Kamwendo. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
