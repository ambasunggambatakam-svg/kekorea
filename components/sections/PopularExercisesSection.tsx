import Link from "next/link";
import { ChevronRight, Layers } from "lucide-react";

export function PopularExercisesSection() {
  const exercises = [
    "Latihan Mini TOPIK (Gratis)",
    "Latihan Soal EPS-TOPIK (Gratis)",
    "Tes Bahasa Korea Dasar (Gratis)",
    "Cek Level Bahasa Korea (Gratis)",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Latihan Populer */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                Latihan Gratis yang Banyak Digunakan
              </h2>
            </div>
            
            <div className="space-y-3">
              {exercises.map((ex, i) => (
                <Link
                  key={i}
                  href="#"
                  className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all group"
                >
                  <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                    {ex}
                  </span>
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* Kategori Tools */}
          <div className="bg-blue-600 rounded-3xl p-8 text-white shadow-xl shadow-blue-600/20 flex flex-col justify-center">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
              <Layers className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-extrabold mb-4">
              Semua Latihan dalam Satu Platform
            </h2>
            <p className="text-blue-100 leading-relaxed mb-8">
              Tidak perlu berpindah-pindah platform. Semua kebutuhan belajar bahasa Korea dan persiapan ke Korea tersedia di sini secara terstruktur dan mudah diakses.
            </p>
            <Link 
              href="#explore"
              className="inline-flex items-center justify-center bg-white text-blue-600 font-bold py-3 px-6 rounded-xl hover:bg-gray-50 transition-colors"
            >
              Jelajahi Semua Tools
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
