import Hero from "@/components/Hero";
import LatestSection from "@/components/LatestSection";
import RecommendedSection from "@/components/RecommendedSection";
import TrendingSection from "@/components/TrendingSection";

export default function Home() {
  return (
    <div className="rounded-xl bg-white w-full min-h-80">
      <section className="mb-10 md:mb-32">
        <Hero />
      </section>
      <div className="flex flex-col gap-10 md:gap-20">
        <LatestSection />
        <TrendingSection />
        <RecommendedSection />
      </div>
    </div>
  );
}
