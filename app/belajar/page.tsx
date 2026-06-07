import { BelajarSection } from "@/components/sections/BelajarSection";
import { RoadmapSection } from "@/components/sections/RemainingSections";

export default function BelajarPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Pusat Belajar Bahasa Korea</h1>
        <p className="text-xl text-gray-600 max-w-2xl">Mulai perjalananmu menguasai bahasa Korea dari nol hingga mahir dengan kurikulum terstruktur.</p>
      </div>
      <BelajarSection />
      <div className="mt-16">
        <RoadmapSection />
      </div>
    </main>
  );
}
