"use client";

import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="bg-[#fafafa] min-h-screen text-[#111c2d] font-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-[1280px] mx-auto px-8 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-extrabold text-[#004ac6] tracking-tighter">
            KEKOREA
          </Link>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-500">
            <Link href="#" className="hover:text-[#004ac6] transition-colors">Belajar</Link>
            <Link href="#" className="hover:text-[#004ac6] transition-colors">TOPIK</Link>
            <Link href="#" className="hover:text-[#004ac6] transition-colors">Latihan</Link>
            <Link href="#" className="hover:text-[#004ac6] transition-colors">Karir</Link>
            <Link href="#" className="text-[#004ac6] border-b-2 border-[#004ac6] pb-1">Blog</Link>
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

      <main className="max-w-[1280px] mx-auto px-8 py-12">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-3 tracking-tight text-gray-900">Blog Edukasi</h1>
            <p className="text-gray-500 text-lg">Panduan terlengkap untuk sukses di Korea Selatan.</p>
          </div>
          <div className="relative w-full md:w-96">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">search</span>
            <input 
              type="text" 
              placeholder="Cari artikel edukasi..." 
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#004ac6] focus:ring-1 focus:ring-[#004ac6] transition-all bg-white"
            />
          </div>
        </div>

        {/* Featured Post */}
        <div className="bg-white rounded-[32px] overflow-hidden border border-gray-200 shadow-sm mb-16 flex flex-col md:flex-row group cursor-pointer hover:shadow-lg transition-all">
          <div className="w-full md:w-[55%] relative h-[300px] md:h-[450px] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1600" 
              alt="Featured post" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="w-full md:w-[45%] p-8 md:p-14 flex flex-col justify-center">
            <div className="inline-block px-4 py-1.5 bg-[#bb0112] text-white text-xs font-black uppercase tracking-wider rounded-full self-start mb-6">
              PENTING
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight group-hover:text-[#004ac6] transition-colors">
              Syarat Terbaru Pendaftaran EPS-TOPIK 2024 untuk Pekerja Migran
            </h2>
            <p className="text-gray-600 text-lg mb-8 line-clamp-3 leading-relaxed">
              Pemerintah telah memperbarui regulasi sistem poin dan syarat kesehatan untuk pendaftaran sektor manufaktur dan perikanan tahun ini. Simak panduan langkah demi langkah agar berkas Anda lolos...
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <span className="material-symbols-outlined">person</span>
              </div>
              <div>
                <div className="text-sm font-bold text-gray-900">Tim Akademik KEKOREA</div>
                <div className="text-xs text-gray-500 mt-1">Mei 24, 2024 • 8 Menit Membaca</div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content - Articles */}
          <div className="lg:col-span-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-extrabold text-gray-900">Artikel Terbaru</h3>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-lg bg-blue-50 text-[#004ac6] flex items-center justify-center">
                  <span className="material-symbols-outlined">grid_view</span>
                </button>
                <button className="w-10 h-10 rounded-lg text-gray-400 hover:bg-gray-100 flex items-center justify-center transition-colors">
                  <span className="material-symbols-outlined">view_list</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Card 1 */}
              <article className="bg-white rounded-[24px] border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all group cursor-pointer flex flex-col">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800" alt="Kosakata" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <span className="text-[10px] font-black uppercase tracking-[0.15em] text-[#004ac6] mb-3">BELAJAR BAHASA KOREA</span>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#004ac6] transition-colors line-clamp-2">
                    Cara Cepat Hafal 500 Kosakata EPS-TOPIK dalam 30 Hari
                  </h4>
                  <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                    Gunakan metode Spaced Repetition System (SRS) untuk memperkuat memori jangka panjang Anda...
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-sm font-bold text-[#004ac6]">
                    Baca Selengkapnya <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </div>
                </div>
              </article>

              {/* Card 2 */}
              <article className="bg-white rounded-[24px] border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all group cursor-pointer flex flex-col">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&q=80&w=800" alt="GKS" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <span className="text-[10px] font-black uppercase tracking-[0.15em] text-[#004ac6] mb-3">KULIAH DI KOREA</span>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#004ac6] transition-colors line-clamp-2">
                    Daftar Universitas dengan Beasiswa GKS Jalur Kedutaan
                  </h4>
                  <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                    Daftar universitas terbaik di Seoul dan Busan yang menerima mahasiswa Indonesia lewat beasiswa...
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-sm font-bold text-[#004ac6]">
                    Baca Selengkapnya <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </div>
                </div>
              </article>

              {/* Card 3 */}
              <article className="bg-white rounded-[24px] border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all group cursor-pointer flex flex-col">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1565514020179-026b92b2d707?auto=format&fit=crop&q=80&w=800" alt="Kerja" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <span className="text-[10px] font-black uppercase tracking-[0.15em] text-[#004ac6] mb-3">KERJA DI KOREA</span>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#004ac6] transition-colors line-clamp-2">
                    Budaya Kerja 'Palli-Palli' dan Cara Beradaptasi bagi PMI
                  </h4>
                  <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                    Tips mental dan fisik menghadapi ritme kerja cepat di pabrik-pabrik manufaktur Korea Selatan.
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-sm font-bold text-[#004ac6]">
                    Baca Selengkapnya <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </div>
                </div>
              </article>

              {/* Card 4 */}
              <article className="bg-white rounded-[24px] border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all group cursor-pointer flex flex-col">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1580651315530-69c8e0026377?auto=format&fit=crop&q=80&w=800" alt="Kisah" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <span className="text-[10px] font-black uppercase tracking-[0.15em] text-[#004ac6] mb-3">KISAH PENGALAMAN</span>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#004ac6] transition-colors line-clamp-2">
                    10 Hal yang Paling Mengejutkan Saat Pertama Tiba di Incheon
                  </h4>
                  <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                    Cerita inspiratif dari alumni EPS-TOPIK tentang transisi hidup dari desa ke kota metropolis Seoul.
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-sm font-bold text-[#004ac6]">
                    Baca Selengkapnya <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </div>
                </div>
              </article>
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2">
              <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors">
                <span className="material-symbols-outlined text-sm">chevron_left</span>
              </button>
              <button className="w-10 h-10 rounded-xl bg-[#004ac6] text-white font-bold flex items-center justify-center shadow-md">
                1
              </button>
              <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                2
              </button>
              <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                3
              </button>
              <span className="w-10 h-10 flex items-center justify-center text-gray-400">...</span>
              <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                12
              </button>
              <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors">
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-10">
            
            {/* CTA Box */}
            <div className="bg-[#004ac6] rounded-[24px] p-8 text-center text-white relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="material-symbols-outlined text-[100px]">help_outline</span>
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Siap Tes EPS-TOPIK?</h3>
                <p className="text-blue-100 text-sm mb-8 leading-relaxed">
                  Uji kemampuanmu dengan bank soal terbaru yang disesuaikan dengan standar HRD Korea.
                </p>
                <button className="w-full bg-white text-[#004ac6] font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors shadow-md">
                  Halaman Latihan <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-900 border-b border-gray-200 pb-3 mb-6">
                KATEGORI
              </h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm text-gray-600 hover:border-[#004ac6] hover:text-[#004ac6] cursor-pointer transition-colors">Belajar Bahasa Korea</span>
                <span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm text-gray-600 hover:border-[#004ac6] hover:text-[#004ac6] cursor-pointer transition-colors">TOPIK & EPS-TOPIK</span>
                <span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm text-gray-600 hover:border-[#004ac6] hover:text-[#004ac6] cursor-pointer transition-colors">Kerja di Korea</span>
                <span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm text-gray-600 hover:border-[#004ac6] hover:text-[#004ac6] cursor-pointer transition-colors">Kuliah di Korea</span>
                <span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm text-gray-600 hover:border-[#004ac6] hover:text-[#004ac6] cursor-pointer transition-colors">Kisah Pengalaman</span>
              </div>
            </div>

            {/* Popular Articles */}
            <div>
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-900 border-b border-gray-200 pb-3 mb-6">
                ARTIKEL POPULER
              </h4>
              <div className="space-y-6">
                <div className="flex gap-4 group cursor-pointer">
                  <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400" alt="Stats" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h5 className="text-sm font-bold text-gray-900 mb-1 leading-tight group-hover:text-[#004ac6] transition-colors line-clamp-2">Data Statistik Peluang Kelulusan EPS-TOPIK 2023</h5>
                    <div className="text-[10px] text-gray-500 font-medium">12.5k Views • 15 Komentar</div>
                  </div>
                </div>
                <div className="flex gap-4 group cursor-pointer">
                  <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400" alt="Community" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h5 className="text-sm font-bold text-gray-900 mb-1 leading-tight group-hover:text-[#004ac6] transition-colors line-clamp-2">5 Komunitas Belajar Bahasa Korea Gratis di Telegram</h5>
                    <div className="text-[10px] text-gray-500 font-medium">8.2k Views • 42 Komentar</div>
                  </div>
                </div>
                <div className="flex gap-4 group cursor-pointer">
                  <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                    <img src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=400" alt="Passport" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h5 className="text-sm font-bold text-gray-900 mb-1 leading-tight group-hover:text-[#004ac6] transition-colors line-clamp-2">Alur Pengurusan Paspor Khusus untuk CPMI Korea</h5>
                    <div className="text-[10px] text-gray-500 font-medium">6.8k Views • 8 Komentar</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-[#eef2ff] rounded-[24px] p-8">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#004ac6] mb-6 shadow-sm">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-2">Update Info ke Email</h3>
              <p className="text-gray-600 text-sm mb-6">Jangan ketinggalan info jadwal ujian dan lowongan kerja Korea terbaru.</p>
              <form className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="Email Anda" 
                  className="w-full px-4 py-3 rounded-xl border border-white focus:outline-none focus:border-[#004ac6] focus:ring-1 focus:ring-[#004ac6] transition-all bg-white"
                  required
                />
                <button type="submit" className="w-full bg-[#004ac6] text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-md">
                  Langganan Sekarang
                </button>
              </form>
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#111c2d] text-white pt-20 pb-10 px-8 border-t border-white/10">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-5">
              <div className="text-2xl font-black text-white tracking-tighter mb-6">KEKOREA</div>
              <p className="text-sm text-gray-400 max-w-sm mb-8 leading-relaxed">
                Platform edukasi terlengkap yang berdedikasi membantu talenta Indonesia meraih karir dan pendidikan impian di Korea Selatan melalui pelatihan bahasa yang presisi.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <span className="material-symbols-outlined text-white text-sm">public</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <span className="material-symbols-outlined text-white text-sm">share</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <span className="material-symbols-outlined text-white text-sm">mail</span>
                </a>
              </div>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-gray-400">Program</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">EPS-TOPIK</Link></li>
                <li><Link href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">TOPIK I & II</Link></li>
                <li><Link href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Bahasa Bisnis</Link></li>
              </ul>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-gray-400">Informasi</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Informasi EPS-TOPIK</Link></li>
                <li><Link href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Program Beasiswa</Link></li>
                <li><Link href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Tentang Kami</Link></li>
              </ul>
            </div>
            <div className="md:col-span-3">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-gray-400">Dukungan</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Kebijakan Privasi</Link></li>
                <li><Link href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Hubungi Kami</Link></li>
                <li><Link href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4">
            <p className="text-xs text-gray-500 font-medium">© 2024 KEKOREA. Platform Edukasi Bahasa Korea Terpercaya. Part of EPS-TOPIK.ID Network.</p>
            <p className="text-[10px] text-gray-600 font-medium uppercase tracking-wider">Edu-Precision System v2.4</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

