import { QuickActionsSection, PlatformStatsSection } from "@/components/sections/CoreSections";

export default function ToolsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Tools & Mini Quiz</h1>
        <p className="text-xl text-gray-600 max-w-2xl">Gunakan berbagai alat bantu gratis dari kami untuk mempercepat proses belajarmu.</p>
      </div>
      <QuickActionsSection />
      <div className="mt-16">
        <PlatformStatsSection />
      </div>
    </main>
  );
}
