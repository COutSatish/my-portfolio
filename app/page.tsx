import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import TechStackSection from "@/components/tech-stack-section"
import ExperienceSection from "@/components/experience-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import ThemeToggle from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <main className="container mx-auto px-4 py-8">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <TechStackSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
