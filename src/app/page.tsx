import Hero from "@/components/sections/Hero";
import Highlights from "@/components/sections/Highlights";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Highlights />
      <FeaturedProjects />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}
