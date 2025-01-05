import Hero from "@/components/Hero";
import NewItemSection from "@/components/NewItemSection";
import RecommenSection from "@/components/RecommenSection";
import TrendingSection from "@/components/TrendingSection";

export default function Home() {
  return (
    <main className="rounded-xl bg-white w-full">
      <section className="mb-10 md:mb-32">
        <Hero />
        {/* <div>
          <Slider />
        </div> */}
      </section>
      <div className="flex flex-col gap-10 md:gap-20">
        <NewItemSection />
        <RecommenSection />
        <TrendingSection />
      </div>
    </main>
  );
}
