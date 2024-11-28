import Image from "next/image";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import ProjectsCard from "./components/ProjectsCard";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
 <main className="flex flex-col bg-[#121212] container mx-auto p-4 px-12 py">     
    <NavBar></NavBar>
    <HeroSection></HeroSection>
    <AboutSection></AboutSection>
    <ProjectsCard></ProjectsCard>
    <ContactSection></ContactSection>


 </main>


  );
}
