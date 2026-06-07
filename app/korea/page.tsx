import { TestimonialsSection, MengapaSection } from "@/components/sections/RemainingSections";
import { PositioningSection } from "@/components/sections/CoreSections";

export default function KoreaPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Kerja & Kuliah di Korea</h1>
        <p className="text-xl text-gray-600 max-w-2xl">Panduan lengkap persiapan karier, studi, dan kehidupan di Korea Selatan.</p>
      </div>
      <PositioningSection />
      <div className="mt-16">
        <TestimonialsSection />
      </div>
      <div className="mt-16">
        <MengapaSection />
      </div>
    </main>
  );
}
