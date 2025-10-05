import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
     <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    {/*theme toogle*/}
    <ThemeToggle/>
    {/*background effects*/}
    <StarBackground />

    {/*navbar*/}
   <Navbar/>
    {/*main Content*/}
    <main>
      <HeroSection />
      <AboutSection/>
      <SkillsSection/>
      <ProjectSection/>
      <ContactSection/>
    </main>
    {/*Footer*/}
    <Footer/>
  </div>
  );
};
