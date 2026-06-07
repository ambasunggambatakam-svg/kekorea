import { BridgeEpsSection, BridgeHangukoSection } from "@/components/sections/RemainingSections";

export default function UjianPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Persiapan Ujian & Simulasi</h1>
        <p className="text-xl text-gray-600 max-w-2xl">Latih kemampuanmu dan bersiaplah menghadapi ujian TOPIK maupun EPS-TOPIK sesungguhnya.</p>
      </div>
      <BridgeEpsSection />
      <div className="mt-16">
        <BridgeHangukoSection />
      </div>
    </main>
  );
}
