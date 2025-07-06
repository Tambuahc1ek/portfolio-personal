import AboutPage from "./about/page";
import HeroPage from "./hero/page";
import SkillsPage from "./skills/page";
import PortfolioPage from "./portofolio/page";
import ExperiencePage from "./experience/page";
import TestimonialsPage from "./testimonials/page";
import ContactPage from "./contact/page"

export default function HomePage() {
  return (
    <main>
      <HeroPage />
      <AboutPage />
      <SkillsPage />
      <PortfolioPage />
      <ExperiencePage />
      <TestimonialsPage />
      <ContactPage />
    </main>
  );
}
