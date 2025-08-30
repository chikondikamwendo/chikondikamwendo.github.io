import DefaultLayout from "@/layouts/default";
import Hero from "./sections/hero";
import Projects from "./sections/projects";

export default function Home() {
  return (
    <DefaultLayout>
      <Hero />
      <Projects />
    </DefaultLayout>
  )
}