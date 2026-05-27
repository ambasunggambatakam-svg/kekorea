"use client";

import Link from "next/link";
import { useState } from "react";

export default function BlogDetailPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-[#fcfcfd] min-h-screen text-[#111c2d] font-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-[1280px] mx-auto px-8 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-extrabold text-[#004ac6] tracking-tighter">
            KEKOREA
          </Link>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-500">
            <Link href="#" className="hover:text-[#004ac6] transition-colors">Belajar</Link>
            <Link href="#" className="hover:text-[#004ac6] transition-colors">TOPIK</Link>
            <Link href="/latihan" className="hover:text-[#004ac6] transition-colors">Latihan</Link>
            <Link href="#" className="hover:text-[#004ac6] transition-colors">Karir</Link>
            <Link href="/blog" className="text-[#004ac6] border-b-2 border-[#004ac6] pb-1">Blog</Link>
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

      {/* Main Content Area */}
      <main className="max-w-[1280px] mx-auto px-8 py-10">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-gray-500 font-medium mb-8">
          <Link href="/" className="hover:text-[#004ac6] transition-colors">Home</Link>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <Link href="/blog" className="hover:text-[#004ac6] transition-colors">Blog</Link>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-[#004ac6]">EPS-TOPIK</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Article Column (Left) */}
          <div className="lg:col-span-8">
            <article>
              <div className="inline-block px-3 py-1 bg-blue-50 text-[#004ac6] text-[10px] font-black uppercase tracking-wider rounded-md mb-5 border border-blue-100">
                EPS-TOPIK
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-gray-900 leading-[1.2] mb-6 tracking-tight">
                Syarat Terbaru Pendaftaran EPS-TOPIK: Panduan Lengkap Calon Pekerja Migran
              </h1>
              
              {/* Meta Data */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8 border-b border-gray-100 pb-8">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">person</span>
                  <span className="font-medium">Oleh Tim Akademik KEKOREA</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                  <span className="font-medium">24 Oktober 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">schedule</span>
                  <span className="font-medium">8 Menit Baca</span>
                </div>
              </div>

              {/* Featured Image */}
              <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden mb-10 shadow-sm border border-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=1600" 
                  alt="Ilustrasi EPS-TOPIK" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Article Body */}
              <div className="prose prose-lg max-w-none text-gray-600 prose-headings:text-gray-900 prose-headings:font-bold prose-a:text-[#004ac6] prose-a:no-underline hover:prose-a:underline prose-li:marker:text-blue-500">
                <p className="lead text-xl text-gray-700 leading-relaxed mb-8">
                  Memasuki periode pendaftaran terbaru, HRD Korea telah merilis beberapa penyesuaian syarat pendaftaran bagi calon pekerja migran Indonesia yang ingin berkarir di Korea Selatan. Memahami regulasi ini sangat krusial untuk memastikan kelancaran proses administrasi Anda.
                </p>

                <h2 className="text-2xl mt-12 mb-6">1. Kriteria Umum Peserta</h2>
                <p className="mb-4">
                  Berdasarkan pengumuman resmi, setiap pendaftar harus memenuhi standar kualifikasi dasar sebagai berikut:
                </p>
                <ul className="mb-8 space-y-2">
                  <li>Berusia minimal 18 tahun dan maksimal 39 tahun pada saat pendaftaran.</li>
                  <li>Pendidikan minimal lulusan SMP atau sederajat (beberapa sektor memerlukan SMK).</li>
                  <li>Tidak memiliki riwayat kriminalitas atau dideportasi dari Korea Selatan.</li>
                  <li>Tidak sedang dicekal bepergian ke luar negeri oleh Pemerintah RI.</li>
                </ul>

                {/* Callout Info */}
                <div className="bg-[#f5f8ff] border border-blue-100 rounded-2xl p-6 my-10 flex gap-4">
                  <span className="material-symbols-outlined text-yellow-500 text-2xl mt-1 shrink-0">lightbulb</span>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-2">Tips Penting:</h4>
                    <p className="text-sm text-gray-600 m-0">
                      Pastikan semua dokumen digital Anda dalam format PDF dengan ukuran file tidak melebihi 500KB. Kualitas scan yang buruk seringkali menjadi alasan penolakan berkas pendaftaran.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl mt-10 mb-6">2. Syarat Dokumen Digital</h2>
                <p className="mb-4">
                  Beberapa dokumen yang wajib disiapkan sebelum mengakses portal pendaftaran online antara lain:
                </p>
                <ul className="mb-8 space-y-2">
                  <li>Scan KTP asli yang masih berlaku.</li>
                  <li>Scan Ijazah terakhir (minimal SMP).</li>
                  <li>Pas foto terbaru latar belakang putih (bukan hasil edit ponsel).</li>
                  <li>Buku Tabungan atas nama sendiri untuk keperluan verifikasi.</li>
                </ul>
                <p className="mb-8">
                  Sangat disarankan bagi calon peserta untuk mulai melakukan <a href="#" className="font-bold">Latihan EPS-TOPIK</a> sedini mungkin. Tingkat kelulusan tahun lalu menunjukkan bahwa mereka yang berlatih minimal 3 bulan sebelumnya memiliki peluang 70% lebih tinggi untuk lulus ambang batas nilai.
                </p>

                <h2 className="text-2xl mt-10 mb-6">3. Proses Verifikasi Wajah (Face Recognition)</h2>
                <p className="mb-12">
                  Tahun ini, HRD Korea menerapkan sistem verifikasi biometrik yang lebih ketat. Pastikan foto paspor Anda sesuai dengan kondisi wajah saat ujian untuk menghindari kendala identifikasi di lokasi tes.
                </p>
              </div>

              {/* Share Section */}
              <div className="flex items-center justify-between border-t border-b border-gray-100 py-6 mb-12">
                <span className="text-sm font-bold text-gray-900">Bagikan artikel ini:</span>
                <div className="flex gap-2">
                  <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#004ac6] hover:bg-blue-50 transition-colors">
                    <span className="material-symbols-outlined text-[20px]">share</span>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#004ac6] hover:bg-blue-50 transition-colors">
                    <span className="material-symbols-outlined text-[20px]">content_copy</span>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#004ac6] hover:bg-blue-50 transition-colors font-serif italic text-lg font-bold">
                    f
                  </button>
                  <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#004ac6] hover:bg-blue-50 transition-colors font-sans text-lg font-bold">
                    𝕏
                  </button>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-[#004ac6] text-3xl">quiz</span>
                  <h3 className="text-2xl font-bold text-gray-900">Pertanyaan Umum (Q&A)</h3>
                </div>
                <div className="space-y-3">
                  {/* FAQ 1 */}
                  <div className="bg-[#f9fafb] rounded-xl border border-gray-100 overflow-hidden">
                    <button 
                      onClick={() => toggleFaq(0)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-800 text-sm">Apakah saya bisa daftar jika ijazah saya hilang?</span>
                      <span className={`material-symbols-outlined text-gray-400 transition-transform ${openFaq === 0 ? "rotate-180" : ""}`}>
                        expand_more
                      </span>
                    </button>
                    {openFaq === 0 && (
                      <div className="p-5 pt-0 text-sm text-gray-600 border-t border-gray-100">
                        Anda bisa menggunakan Surat Keterangan Pengganti Ijazah yang dikeluarkan secara resmi oleh pihak sekolah dan dilegalisir oleh Dinas Pendidikan setempat.
                      </div>
                    )}
                  </div>
                  {/* FAQ 2 */}
                  <div className="bg-[#f9fafb] rounded-xl border border-gray-100 overflow-hidden">
                    <button 
                      onClick={() => toggleFaq(1)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-800 text-sm">Berapa biaya pendaftaran EPS-TOPIK tahun ini?</span>
                      <span className={`material-symbols-outlined text-gray-400 transition-transform ${openFaq === 1 ? "rotate-180" : ""}`}>
                        expand_more
                      </span>
                    </button>
                    {openFaq === 1 && (
                      <div className="p-5 pt-0 text-sm text-gray-600 border-t border-gray-100">
                        Biaya pendaftaran resmi EPS-TOPIK biasanya setara dengan 24 USD (mengikuti kurs yang ditetapkan oleh BP2MI pada saat pendaftaran).
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-8">Komentar (3)</h3>
                
                <div className="space-y-8 mb-10">
                  {/* Comment Item 1 */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold shrink-0">
                      BS
                    </div>
                    <div>
                      <div className="flex items-baseline gap-3 mb-1">
                        <span className="font-bold text-sm text-gray-900">Budi Santoso</span>
                        <span className="text-xs text-gray-400">2 jam yang lalu</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2 leading-relaxed">
                        Sangat membantu penjelasannya. Untuk sektor manufaktur, apakah ada tes fisik tambahan?
                      </p>
                      <button className="text-xs font-bold text-[#004ac6] flex items-center gap-1 hover:underline">
                        <span className="material-symbols-outlined text-[14px]">reply</span> Balas
                      </button>

                      {/* Reply */}
                      <div className="flex gap-4 mt-6 bg-[#f9fafb] p-4 rounded-2xl border border-gray-100">
                        <div className="w-8 h-8 rounded-full bg-[#004ac6] text-white flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-[16px]">admin_panel_settings</span>
                        </div>
                        <div>
                          <div className="flex items-baseline gap-3 mb-1">
                            <span className="font-bold text-sm text-gray-900">Admin KEKOREA</span>
                            <span className="px-1.5 py-0.5 bg-blue-100 text-blue-700 text-[9px] font-black uppercase rounded">Admin</span>
                            <span className="text-xs text-gray-400">1 jam yang lalu</span>
                          </div>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            Halo Kak Budi, untuk sektor Manufaktur biasanya ada Skill Test yang meliputi tes kekuatan fisik dasar dan tes kompetensi dasar. Semangat!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comment Form */}
                <div className="border-t border-gray-100 pt-8">
                  <h4 className="text-sm font-bold text-gray-900 mb-4">Tinggalkan Komentar</h4>
                  <textarea 
                    rows={4}
                    placeholder="Apa yang ingin Anda tanyakan?"
                    className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#004ac6] focus:ring-1 focus:ring-[#004ac6] transition-all bg-[#fcfcfd] text-sm resize-none mb-4"
                  ></textarea>
                  <div className="flex justify-end">
                    <button className="bg-[#004ac6] text-white text-sm font-bold px-6 py-2.5 rounded-xl hover:bg-blue-700 transition-colors shadow-md">
                      Kirim Komentar
                    </button>
                  </div>
                </div>
              </div>

            </article>
          </div>

          {/* Sidebar Column (Right) */}
          <div className="lg:col-span-4 space-y-8 sticky top-28">
            
            {/* Search */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h4 className="text-xs font-black uppercase tracking-[0.1em] text-gray-900 mb-4">
                Cari Artikel
              </h4>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[18px]">search</span>
                <input 
                  type="text" 
                  placeholder="Ketik kata kunci..." 
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#004ac6] transition-all text-sm bg-gray-50"
                />
              </div>
            </div>

            {/* Popular Articles */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h4 className="text-xs font-black uppercase tracking-[0.1em] text-gray-900 mb-6">
                Artikel Populer
              </h4>
              <div className="space-y-5">
                <div className="flex gap-4 group cursor-pointer">
                  <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-gray-100">
                    <img src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=400" alt="Post" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h5 className="text-xs font-bold text-gray-900 mb-1 leading-snug group-hover:text-[#004ac6] transition-colors line-clamp-2">50 Kosakata Wajib EPS-TOPIK Manufaktur</h5>
                    <div className="text-[10px] text-gray-500">12 Okt 2024</div>
                  </div>
                </div>
                <div className="flex gap-4 group cursor-pointer">
                  <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-gray-100">
                    <img src="https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&q=80&w=400" alt="Post" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h5 className="text-xs font-bold text-gray-900 mb-1 leading-snug group-hover:text-[#004ac6] transition-colors line-clamp-2">Estimasi Gaji Terbaru Pekerja di Korea 2024</h5>
                    <div className="text-[10px] text-gray-500">05 Okt 2024</div>
                  </div>
                </div>
                <div className="flex gap-4 group cursor-pointer">
                  <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-gray-100">
                    <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=400" alt="Post" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h5 className="text-xs font-bold text-gray-900 mb-1 leading-snug group-hover:text-[#004ac6] transition-colors line-clamp-2">Cara Cepat Hafal Hangeul dalam 1 Hari</h5>
                    <div className="text-[10px] text-gray-500">28 Sep 2024</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter CTA */}
            <div className="bg-[#004ac6] rounded-2xl p-6 text-white text-center shadow-lg relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <h3 className="text-lg font-bold mb-3">Update Gratis</h3>
                <p className="text-blue-100 text-xs mb-6 leading-relaxed">
                  Dapatkan info pendaftaran EPS-TOPIK terbaru langsung di WhatsApp Anda.
                </p>
                <button className="w-full bg-white text-[#004ac6] font-bold py-2.5 rounded-lg text-sm hover:bg-gray-50 transition-colors shadow-md">
                  Gabung Grup WA
                </button>
              </div>
            </div>
            
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#111c2d] text-white pt-16 pb-8 px-8 border-t border-white/10 mt-10">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          <div className="md:col-span-6">
            <div className="text-2xl font-black text-white tracking-tighter mb-4">KEKOREA</div>
            <p className="text-sm text-gray-400 max-w-sm mb-6 leading-relaxed">
              Pusat pelatihan dan informasi terpadu untuk calon pekerja migran ke Korea Selatan. Kami berdedikasi membantu Anda meraih masa depan karir naik level melalui pendidikan bahasa yang berkualitas.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <span className="material-symbols-outlined text-white text-xs">public</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <span className="material-symbols-outlined text-white text-xs">share</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <span className="material-symbols-outlined text-white text-xs">mail</span>
              </a>
            </div>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-4 text-gray-400">Navigasi</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Tentang Kami</Link></li>
              <li><Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Program Beasiswa</Link></li>
              <li><Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Informasi EPS-TOPIK</Link></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-4 text-gray-400">Dukungan</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Hubungi Kami</Link></li>
              <li><Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Kebijakan Privasi</Link></li>
              <li><Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Bantuan</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1280px] mx-auto border-t border-white/10 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 font-medium">
            © 2024 KEKOREA. Platform Edukasi Bahasa Korea Terpercaya. Part of EPS-TOPIK.ID Network.
          </p>
        </div>
      </footer>
    </div>
  );
}
