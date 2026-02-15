import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { LeadershipStats } from "@/components/leadership-stats";
import { CareerTimeline } from "@/components/career-timeline";
import { ProjectsSection } from "@/components/projects-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <Header />
        <main>
          <Hero />
          <LeadershipStats />
          <CareerTimeline />
          <ProjectsSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
