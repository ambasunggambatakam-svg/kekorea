export function PositioningSection() {
  return (
    <section className="py-20 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Platform Belajar Bahasa Korea & Persiapan ke Korea
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>
        
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          <span className="font-bold text-blue-600">kekorea.com</span> dibuat untuk membantu siapa saja yang ingin:
        </p>

        <div className="grid sm:grid-cols-3 gap-6 pt-8">
          <div className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto">
              📚
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Belajar dari Dasar</h3>
            <p className="text-sm text-gray-600">Belajar bahasa Korea dari awal hingga mahir dengan materi terstruktur.</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto">
              📝
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Persiapan Ujian</h3>
            <p className="text-sm text-gray-600">Mempersiapkan ujian TOPIK & EPS-TOPIK dengan soal interaktif.</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto">
              ✈️
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Meraih Peluang</h3>
            <p className="text-sm text-gray-600">Mendapatkan info peluang kerja atau studi ke Korea Selatan.</p>
          </div>
        </div>

        <p className="text-gray-500 font-medium pt-6">
          Semua disediakan dalam satu platform yang mudah diakses, interaktif, dan gratis.
        </p>
      </div>
    </section>
  );
}
