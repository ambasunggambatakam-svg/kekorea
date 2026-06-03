import Link from "next/link";
import { CheckCircle2, PlayCircle, BarChart3 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 to-white py-20 lg:py-32">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -mr-40 -mt-40" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-50/50 rounded-full blur-3xl -ml-20 -mb-20" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT - Content */}
          <div className="space-y-8 animate-fade-in text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
              Lulus Ujian EPS-TOPIK Lebih Mudah dengan Simulasi CBT Mirip Asli 🇰🇷
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Persiapkan dirimu bekerja di Korea Selatan dengan ribuan latihan soal, simulasi Ujian EPS-TOPIK sistem UBT/CBT, dan pembahasan komprehensif.
            </p>

            {/* Micro trust */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm text-gray-600 font-medium">
              <span className="flex items-center gap-1.5 bg-green-50 text-green-700 px-3 py-1 rounded-full">
                <CheckCircle2 className="h-4 w-4" /> 100% Gratis & tanpa login
              </span>
              <span className="flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                <CheckCircle2 className="h-4 w-4" /> 100+ latihan interaktif
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Link 
                href="#simulasi-cbt" 
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-1 text-lg"
              >
                <PlayCircle className="h-5 w-5" /> Simulasi CBT Gratis
              </Link>
              <Link 
                href="#tryout-premium" 
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-800 font-bold py-4 px-8 rounded-xl transition-all text-lg"
              >
                <BarChart3 className="h-5 w-5 text-blue-600" /> Daftar Tryout Premium
              </Link>
            </div>
          </div>

          {/* RIGHT - Mockup Quiz Card */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none lg:w-auto animate-slide-in-right">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-red-400/20 rounded-3xl blur-2xl scale-95" />
            
            <div className="relative bg-white rounded-2xl border border-gray-100 shadow-2xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b pb-4">
                <span className="text-xs font-bold px-3 py-1 bg-blue-100 text-blue-700 rounded-full uppercase tracking-wider">
                  Mini Test TOPIK
                </span>
                <span className="text-sm font-semibold text-gray-500">Soal 1 / 10</span>
              </div>

              <div>
                <h4 className="font-bold text-lg sm:text-xl text-gray-900 mb-6 leading-relaxed">
                  빈칸에 알맞은 것을 고르십시오:<br/>
                  저는 한국___ 가고 싶습니다.
                </h4>

                <div className="space-y-3">
                  {["을", "에서", "에", "는"].map((opt, i) => (
                    <div
                      key={i}
                      className={`p-4 rounded-xl border-2 text-sm sm:text-base font-medium cursor-default transition-all flex items-center gap-4 ${
                        i === 2
                          ? "border-blue-600 bg-blue-50 ring-2 ring-blue-600/20"
                          : "border-gray-100 bg-gray-50 text-gray-400"
                      }`}
                    >
                      <span
                        className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center font-bold ${
                          i === 2 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-500"
                        }`}
                      >
                        {String.fromCharCode(65 + i)}
                      </span>
                      {opt}
                      {i === 2 && <CheckCircle2 className="h-5 w-5 text-blue-600 ml-auto" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
