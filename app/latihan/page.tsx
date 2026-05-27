"use client";

import Link from "next/link";
import { useState } from "react";

export default function LatihanPage() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>("B");

  return (
    <div className="bg-[#f8f9fc] min-h-screen text-[#111c2d] font-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-[1280px] mx-auto px-8 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-extrabold text-[#004ac6] tracking-tighter">
            KEKOREA
          </Link>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-500">
            <Link href="#" className="hover:text-[#004ac6] transition-colors">Belajar</Link>
            <Link href="#" className="hover:text-[#004ac6] transition-colors">TOPIK</Link>
            <Link href="/latihan" className="text-[#004ac6] border-b-2 border-[#004ac6] pb-1">Latihan</Link>
            <Link href="#" className="hover:text-[#004ac6] transition-colors">Karir</Link>
            <Link href="/blog" className="hover:text-[#004ac6] transition-colors">Blog</Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <button className="text-sm font-bold text-[#004ac6] hover:bg-blue-50 px-4 py-2 rounded-full transition-colors">
              Cek Level
            </button>
            <button className="bg-[#004ac6] text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-blue-700 transition-colors shadow-md">
              Mulai Latihan
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[1000px] mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-gray-900">Latihan Mini TOPIK</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-8">
            Uji kemampuan bahasa Korea kamu dengan simulasi ujian mini. Dirancang khusus untuk mengukur kesiapan menghadapi ujian EPS-TOPIK asli.
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="flex items-center gap-1.5 px-4 py-1.5 bg-[#eef2ff] text-[#004ac6] rounded-full text-sm font-bold">
              <span className="material-symbols-outlined text-[18px]">school</span>
              Beginner
            </div>
            <div className="flex items-center gap-1.5 px-4 py-1.5 bg-[#eef2ff] text-[#004ac6] rounded-full text-sm font-bold">
              <span className="material-symbols-outlined text-[18px]">quiz</span>
              10 Soal
            </div>
            <div className="flex items-center gap-1.5 px-4 py-1.5 bg-[#eef2ff] text-[#004ac6] rounded-full text-sm font-bold">
              <span className="material-symbols-outlined text-[18px]">timer</span>
              3 Menit
            </div>
          </div>
        </div>

        {/* Banner CTA */}
        <div className="bg-[#ee3e3e] rounded-xl p-4 flex items-center justify-between text-white shadow-lg shadow-red-500/20 mb-12 cursor-pointer hover:bg-[#d63434] transition-colors group">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-white">rocket_launch</span>
            <span className="font-bold text-sm md:text-base">Mau tryout full dengan durasi dan soal asli? Kunjungi epstopik.id</span>
          </div>
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </div>

        {/* Quiz Card */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-200 mb-16">
          {/* Progress */}
          <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider text-[#004ac6] mb-3">
            <span>PERTANYAAN 3 / 10</span>
            <span>30% Selesai</span>
          </div>
          <div className="w-full h-2 bg-gray-100 rounded-full mb-10 overflow-hidden">
            <div className="h-full bg-[#004ac6] w-[30%] rounded-full"></div>
          </div>

          <h2 className="text-2xl font-bold mb-8 text-gray-900">Apa arti dari kata berikut?</h2>

          {/* Question Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-gray-100 border border-gray-200">
              <img src="https://images.unsplash.com/photo-1560806887-1e4cd0b6fac6?auto=format&fit=crop&q=80&w=800" alt="Apple" className="w-full h-full object-cover" />
              <button className="absolute bottom-4 right-4 w-10 h-10 bg-[#004ac6] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[20px]">volume_up</span>
              </button>
            </div>
            <div className="bg-[#eef2ff] border border-[#d6e0ff] rounded-2xl flex flex-col items-center justify-center p-8">
              <div className="text-6xl font-black text-[#004ac6] mb-3 tracking-widest">사과</div>
              <div className="text-lg font-medium text-blue-800 italic">(Sagwa)</div>
            </div>
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {["Pisang", "Apel", "Jeruk", "Anggur"].map((option, index) => {
              const letter = String.fromCharCode(65 + index);
              const isSelected = selectedAnswer === letter;
              return (
                <button
                  key={letter}
                  onClick={() => setSelectedAnswer(letter)}
                  className={`p-5 rounded-2xl border-2 text-left flex items-center gap-4 transition-all ${
                    isSelected
                      ? "border-[#004ac6] bg-[#f5f8ff]"
                      : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    isSelected ? "bg-[#004ac6] text-white" : "bg-gray-100 text-gray-600"
                  }`}>
                    {letter}
                  </div>
                  <span className={`font-semibold ${isSelected ? "text-[#004ac6]" : "text-gray-700"}`}>
                    {option}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Next Button */}
          <div className="flex justify-end">
            <button className="bg-[#004ac6] text-white font-bold px-8 py-3 rounded-xl flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
              Selanjutnya <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* SEO / Content Section */}
        <div className="bg-[#f0f2f5] rounded-3xl p-8 md:p-12 mb-20 border border-gray-200">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Latihan TOPIK Level 1 untuk Pemula</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600 text-sm leading-relaxed">
            <div>
              <p className="mb-4">
                Mempersiapkan diri untuk ujian <strong className="text-gray-800">TOPIK</strong> (Test of Proficiency in Korean) atau EPS-TOPIK memerlukan konsistensi dan latihan yang terarah. Halaman "Latihan Mini TOPIK" ini dirancang khusus untuk membantu para pembelajar pemula (Level 1) melakukan pemanasan sebelum menghadapi ujian yang sesungguhnya. Dengan format yang ringkas sebanyak 10 soal, Anda dapat melatih fokus dan kecepatan berpikir tanpa merasa tertekan oleh durasi ujian yang panjang.
              </p>
              <p>
                Materi yang diujikan dalam simulasi mini ini mencakup kosakata dasar sehari-hari, pengenalan objek melalui gambar, serta tata bahasa fundamental yang sering muncul dalam ujian resmi. <strong className="text-gray-800">Mengapa latihan ini penting?</strong> Karena seringkali peserta ujian gagal bukan karena tidak tahu jawabannya, melainkan karena manajemen waktu yang buruk atau panik saat melihat teks Hangul yang padat.
              </p>
            </div>
            <div>
              <p className="mb-4">
                Melalui fitur umpan balik instan kami, Anda tidak hanya mendapatkan nilai akhir, tetapi juga wawasan tentang aspek mana yang perlu ditingkatkan—apakah itu penguasaan kosakata (vocab) atau pemahaman struktur kalimat (grammar). Kami menyarankan pengguna untuk mencoba latihan ini berkali-kali hingga mencapai skor sempurna sebelum beralih ke simulasi full-length di <a href="#" className="font-bold text-[#004ac6] hover:underline">epstopik.id</a>.
              </p>
              <p>
                KEKOREA berkomitmen untuk menyediakan alat edukasi yang inklusif bagi seluruh calon pekerja migran dan mahasiswa di Indonesia. Dengan teknologi modern dan kurikulum yang diperbarui secara berkala, kami berharap setiap pengguna dapat meraih <strong className="text-gray-800">mimpi</strong> mereka untuk berkarir atau menempuh studi di Korea Selatan dengan bekal kemampuan bahasa yang mumpuni.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Latihan Lainnya Section */}
      <section className="max-w-[1280px] mx-auto px-8 pb-24">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-gray-900">Latihan Lainnya</h2>
            <p className="text-gray-500">Tingkatkan skill Korea-mu dengan tools gratis kami.</p>
          </div>
          <div className="flex gap-2">
            <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors">
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-lg transition-all group cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#004ac6] flex items-center justify-center mb-6">
              <span className="material-symbols-outlined">translate</span>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Flashcard Hangul</h4>
            <p className="text-sm text-gray-500 mb-6">Hafalkan alfabet Korea dengan cara yang interaktif dan menyenangkan.</p>
            <div className="text-[#004ac6] text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
              Coba Sekarang <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-lg transition-all group cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined">record_voice_over</span>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Latihan Listening</h4>
            <p className="text-sm text-gray-500 mb-6">Pertajam pendengaranmu dengan rekaman audio native speaker.</p>
            <div className="text-[#004ac6] text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
              Coba Sekarang <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-lg transition-all group cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-yellow-50 text-yellow-600 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined">text_format</span>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Kuis Partikel</h4>
            <p className="text-sm text-gray-500 mb-6">Kuasai penggunaan partikel Eun/Neun dan I/Ga dengan mudah.</p>
            <div className="text-[#004ac6] text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
              Coba Sekarang <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-lg transition-all group cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined">timer</span>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Speed Reading</h4>
            <p className="text-sm text-gray-500 mb-6">Latih kecepatan membaca teks Hangul dalam waktu terbatas.</p>
            <div className="text-[#004ac6] text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
              Coba Sekarang <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111c2d] text-white pt-16 pb-8 px-8 border-t border-white/10">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          <div className="md:col-span-6">
            <div className="text-2xl font-black text-white tracking-tighter mb-4">KEKOREA</div>
            <p className="text-sm text-gray-400 max-w-sm">
              © 2024 KEKOREA. Platform Edukasi Bahasa Korea Terpercaya. Part of EPS-TOPIK.ID Network.
            </p>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-4 text-gray-400">Tautan Penting</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Tentang Kami</Link></li>
              <li><Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Program Beasiswa</Link></li>
              <li><Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Informasi EPS-TOPIK</Link></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-4 text-gray-400">Dukungan</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Kebijakan Privasi</Link></li>
              <li><Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Hubungi Kami</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
