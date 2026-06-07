import Link from "next/link";
import { ArrowLeft, BookOpen, Mic, PenTool, CheckCircle, Calculator, Plane, Monitor, Briefcase } from "lucide-react";

// Dictionary mapping slugs to page data based on Navbar
const PAGE_DATA: Record<string, { title: string, desc: string, icon: any, type: string }> = {
  // Belajar
  'latihan-huruf': { title: 'Latihan Huruf Hangul', desc: 'Pilih dan pelajari huruf konsonan maupun vokal bahasa Korea satu per satu.', icon: PenTool, type: 'Belajar' },
  'latihan-membaca': { title: 'Latihan Membaca Hangul', desc: 'Belajar membaca suku kata dan kata dasar dalam bahasa Korea dengan mudah.', icon: BookOpen, type: 'Belajar' },
  'latihan-menulis': { title: 'Latihan Menulis Hangul', desc: 'Ketahui urutan guratan yang benar untuk menulis huruf Korea.', icon: PenTool, type: 'Belajar' },
  'grammar-dasar': { title: 'Grammar Dasar', desc: 'Pahami pola kalimat dasar (Subjek-Objek-Predikat) dan partikel utama.', icon: BookOpen, type: 'Belajar' },
  'vocabulary-harian': { title: 'Vocabulary Harian', desc: 'Kosakata bahasa Korea sehari-hari yang wajib dihafal untuk pemula.', icon: BookOpen, type: 'Belajar' },
  'grammar-lanjutan': { title: 'Grammar Lanjutan', desc: 'Materi partikel lanjutan, konjungsi, dan ekspresi kompleks bahasa Korea.', icon: BookOpen, type: 'Belajar' },
  'listening-audio': { title: 'Listening Audio', desc: 'Latih pendengaranmu dengan audio interaktif dari native speaker.', icon: Mic, type: 'Belajar' },
  'speaking-pronuniasi': { title: 'Speaking & Pronuniasi', desc: 'Latihan mengucapkan kata dan kalimat bahasa Korea dengan pelafalan yang benar.', icon: Mic, type: 'Belajar' },
  
  // Ujian
  'eps-topik': { title: 'Persiapan EPS-TOPIK', desc: 'Materi khusus dan latihan soal untuk ujian EPS-TOPIK (Syarat kerja di Korea).', icon: Briefcase, type: 'Ujian' },
  'topik-1-2': { title: 'TOPIK I & II', desc: 'Panduan lengkap dan latihan soal untuk TOPIK level 1 hingga 6.', icon: BookOpen, type: 'Ujian' },
  'simulasi-cbt': { title: 'Simulasi CBT', desc: 'Tryout online menggunakan sistem Computer Based Test semirip aslinya.', icon: Monitor, type: 'Ujian' },
  'strategi-lulus': { title: 'Strategi Lulus Ujian', desc: 'Kumpulan tips, trik, dan passing grade untuk menembus ujian TOPIK/EPS-TOPIK.', icon: CheckCircle, type: 'Ujian' },
  
  // Tools
  'mini-topik': { title: 'Mini TOPIK (1–20)', desc: 'Simulasi soal TOPIK singkat untuk melatih kecepatan menjawab.', icon: Monitor, type: 'Tools' },
  'latihan-eps-topik': { title: 'Latihan Soal EPS-TOPIK', desc: 'Kerjakan soal-soal EPS-TOPIK format terbaru.', icon: Monitor, type: 'Tools' },
  'cek-level-korea': { title: 'Cek Level Bahasa Korea', desc: 'Ikuti tes singkat untuk mengetahui sejauh mana kemampuan bahasa Koreamu.', icon: CheckCircle, type: 'Tools' },
  'tebak-arti-kata': { title: 'Tebak Arti Kata', desc: 'Kuis menyenangkan untuk mengetes hafalan kosakatamu.', icon: CheckCircle, type: 'Tools' },
  'latihan-partikel': { title: 'Latihan Partikel', desc: 'Kuis khusus untuk melatih penggunaan partikel 은/는, 이/가, 을/를, dll.', icon: CheckCircle, type: 'Tools' },
  'tebak-kpop-lirik': { title: 'Tebak K-Pop Lirik', desc: 'Belajar bahasa Korea sambil seru-seruan menebak lirik lagu K-Pop favoritmu!', icon: Mic, type: 'Tools' },
  'kalkulator-skor-topik': { title: 'Kalkulator Skor TOPIK', desc: 'Hitung estimasi skormu dan cari tahu level kelulusanmu.', icon: Calculator, type: 'Tools' },
  'estimasi-gaji-korea': { title: 'Estimasi Gaji Korea', desc: 'Kalkulator konversi gaji Won ke Rupiah dan estimasi biaya hidup bulanan.', icon: Calculator, type: 'Tools' },
  'checklist-ke-korea': { title: 'Checklist Keberangkatan', desc: 'Daftar barang dan dokumen yang wajib disiapkan sebelum terbang ke Korea.', icon: Plane, type: 'Tools' },
  
  // Korea
  'kerja-di-korea': { title: 'Kerja di Korea', desc: 'Panduan lengkap syarat, visa, alur pendaftaran, dan tips seleksi kerja di Korea.', icon: Briefcase, type: 'Korea' },
  'kuliah-di-korea': { title: 'Kuliah di Korea', desc: 'Informasi pendaftaran universitas, beasiswa GKS, dan kehidupan kampus.', icon: BookOpen, type: 'Korea' },
  'kehidupan-di-korea': { title: 'Kehidupan di Korea', desc: 'Biaya hidup, adaptasi budaya, transportasi, dan tempat tinggal di Korea.', icon: Plane, type: 'Korea' },
};

import { getPageBySlug } from "@/app/admin/pages/actions";

export default async function DynamicPage({ params }: { params: { slug: string } }) {
  const pageData = PAGE_DATA[params.slug] || {
    title: 'Halaman ' + params.slug.replace(/-/g, ' '),
    desc: 'Materi untuk halaman ini sedang disusun.',
    icon: BookOpen,
    type: 'Materi'
  };

  const IconComponent = pageData.icon;
  
  // Fetch real content from DB
  const dbResponse = await getPageBySlug(params.slug);
  const dbPage = dbResponse?.success ? dbResponse.data : null;
  const hasContent = dbPage && dbPage.content && dbPage.content.trim() !== "";

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-24 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8 font-medium">
          <Link href="/" className="hover:text-blue-600 transition-colors">Beranda</Link>
          <span>/</span>
          <span className="text-gray-900">{pageData.type}</span>
          <span>/</span>
          <span className="text-blue-600 capitalize">{dbPage?.title || pageData.title}</span>
        </div>

        {/* Header Section */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-10 md:p-14 mb-8">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
              <IconComponent className="w-10 h-10" />
            </div>
            
            <div>
              <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider rounded-lg mb-4">
                {dbPage?.category || pageData.type}
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                {dbPage?.title || pageData.title}
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                {pageData.desc}
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        {hasContent ? (
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-10 md:p-14">
            <div className="prose prose-blue max-w-none whitespace-pre-wrap">
              {dbPage.content}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-10 md:p-14 text-center">
            <div className="max-w-xl mx-auto py-12">
              <div className="w-16 h-16 bg-gray-50 text-gray-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <PenTool className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Modul Sedang Dipersiapkan</h3>
              <p className="text-gray-500 mb-8">
                Tim akademik kami sedang menyusun materi interaktif untuk bagian ini. Silakan cek kembali dalam beberapa waktu, atau kerjakan latihan lain yang tersedia.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/belajar" className="btn btn-outline">
                  Lihat Modul Lainnya
                </Link>
                <Link href="/" className="btn btn-primary">
                  Kembali ke Beranda
                </Link>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
