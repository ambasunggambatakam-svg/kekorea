"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    // Minimal Interactivity
    const buttonsAndLinks = document.querySelectorAll('button, a');
    
    const handleMouseDown = (e: Event) => (e.currentTarget as HTMLElement).classList.add('scale-[0.98]');
    const handleMouseUp = (e: Event) => (e.currentTarget as HTMLElement).classList.remove('scale-[0.98]');

    buttonsAndLinks.forEach(el => {
        el.addEventListener('mousedown', handleMouseDown);
        el.addEventListener('mouseup', handleMouseUp);
        el.addEventListener('mouseleave', handleMouseUp);
    });

    const handleScroll = () => {
        const header = document.querySelector('header');
        if (header) {
            if (window.scrollY > 40) {
                header.classList.add('shadow-[0_8px_30px_rgba(0,0,0,0.04)]', 'bg-white/95');
            } else {
                header.classList.remove('shadow-[0_8px_30px_rgba(0,0,0,0.04)]', 'bg-white/95');
            }
        }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
        window.removeEventListener('scroll', handleScroll);
        buttonsAndLinks.forEach(el => {
            el.removeEventListener('mousedown', handleMouseDown);
            el.removeEventListener('mouseup', handleMouseUp);
            el.removeEventListener('mouseleave', handleMouseUp);
        });
    }
  }, []);

  return (
    <div className="bg-background text-on-background selection:bg-primary/10 selection:text-primary font-sans">
      {/* Navigation */}
      <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-outline-variant/50 h-20 transition-all duration-300">
        <div className="flex justify-between items-center w-full px-gutter max-w-container-max mx-auto h-full">
          <div className="text-2xl font-extrabold text-primary tracking-tighter">KEKOREA</div>
          <nav className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8 h-full">
              <div className="group relative h-full flex items-center">
                <button className="flex items-center gap-1.5 text-sm font-semibold text-on-surface/70 group-hover:text-primary transition-colors">
                  Belajar Bahasa Korea
                  <span className="material-symbols-outlined text-base transition-transform group-hover:rotate-180">expand_more</span>
                </button>
                <div className="absolute top-full left-0 w-64 pt-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="bg-white/95 backdrop-blur-xl border border-outline-variant/50 rounded-2xl p-4 shadow-2xl">
                    <div className="space-y-1">
                      <Link className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-primary/5 group/item transition-colors" href="#">
                        <span className="material-symbols-outlined text-primary/70 group-hover/item:text-primary">abc</span>
                        <div className="text-sm font-medium">Hangul &amp; Alphabet</div>
                      </Link>
                      <Link className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-primary/5 group/item transition-colors" href="#">
                        <span className="material-symbols-outlined text-primary/70 group-hover/item:text-primary">menu_book</span>
                        <div className="text-sm font-medium">Grammar</div>
                      </Link>
                      <Link className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-primary/5 group/item transition-colors" href="#">
                        <span className="material-symbols-outlined text-primary/70 group-hover/item:text-primary">translate</span>
                        <div className="text-sm font-medium">Vocabulary</div>
                      </Link>
                      <Link className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-primary/5 group/item transition-colors" href="#">
                        <span className="material-symbols-outlined text-primary/70 group-hover/item:text-primary">record_voice_over</span>
                        <div className="text-sm font-medium">Listening &amp; Speaking</div>
                      </Link>
                      <Link className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-primary/5 group/item transition-colors" href="#">
                        <span className="material-symbols-outlined text-primary/70 group-hover/item:text-primary">construction</span>
                        <div className="text-sm font-medium text-primary">Tools Gratis</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group relative h-full flex items-center">
                <button className="flex items-center gap-1.5 text-sm font-semibold text-on-surface/70 group-hover:text-primary transition-colors">
                  TOPIK &amp; EPS-TOPIK
                  <span className="material-symbols-outlined text-base transition-transform group-hover:rotate-180">expand_more</span>
                </button>
                <div className="absolute top-full left-0 w-72 pt-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="bg-white/95 backdrop-blur-xl border border-outline-variant/50 rounded-2xl p-4 shadow-2xl">
                    <div className="space-y-1">
                      <Link className="flex flex-col p-3 rounded-lg hover:bg-primary/5 transition-colors" href="#">
                        <div className="text-sm font-bold">Info Umum</div>
                        <div className="text-[11px] text-on-surface/50">Jadwal, biaya &amp; pendaftaran</div>
                      </Link>
                      <Link className="flex flex-col p-3 rounded-lg hover:bg-primary/5 transition-colors" href="#">
                        <div className="text-sm font-bold">Strategi Lulus</div>
                        <div className="text-[11px] text-on-surface/50">Tips Reading &amp; Listening</div>
                      </Link>
                      <Link className="flex flex-col p-3 rounded-lg hover:bg-primary/5 transition-colors" href="#">
                        <div className="text-sm font-bold">Simulasi Ujian</div>
                        <div className="text-[11px] text-on-surface/50">Mini TOPIK &amp; EPS-TOPIK</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group h-full flex items-center">
                <button className="flex items-center gap-1.5 text-sm font-semibold text-on-surface/70 group-hover:text-primary transition-colors">
                  Latihan &amp; Tes
                  <span className="material-symbols-outlined text-base transition-transform group-hover:rotate-180">expand_more</span>
                </button>
                <div className="absolute top-full w-screen left-1/2 -translate-x-1/2 pt-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 px-gutter">
                  <div className="max-w-container-max mx-auto bg-white/95 backdrop-blur-xl border border-outline-variant/50 rounded-3xl p-8 shadow-2xl grid grid-cols-5 gap-8">
                    <div>
                      <div className="text-[10px] font-black tracking-widest text-primary uppercase mb-6">Latihan &amp; Tes (1-20)</div>
                      <ul className="space-y-4">
                        <li><Link className="text-sm font-medium hover:text-primary flex items-center gap-2" href="#"><span className="material-symbols-outlined text-lg">quiz</span>Mini TOPIK</Link></li>
                        <li><Link className="text-sm font-medium hover:text-primary flex items-center gap-2" href="#"><span className="material-symbols-outlined text-lg">auto_stories</span>Reading Test</Link></li>
                        <li><Link className="text-sm font-medium hover:text-primary flex items-center gap-2" href="#"><span className="material-symbols-outlined text-lg">headphones</span>Listening Test</Link></li>
                        <li><Link className="text-sm font-medium hover:text-primary flex items-center gap-2" href="#"><span className="material-symbols-outlined text-lg">speed</span>Cek Level</Link></li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-[10px] font-black tracking-widest text-primary uppercase mb-6">Vocab &amp; Grammar (21-40)</div>
                      <ul className="space-y-4">
                        <li><Link className="text-sm font-medium hover:text-primary flex items-center gap-2" href="#"><span className="material-symbols-outlined text-lg">lightbulb</span>Tebak Arti</Link></li>
                        <li><Link className="text-sm font-medium hover:text-primary flex items-center gap-2" href="#"><span className="material-symbols-outlined text-lg">link</span>Latihan Partikel</Link></li>
                        <li><Link className="text-sm font-medium hover:text-primary flex items-center gap-2" href="#"><span className="material-symbols-outlined text-lg">forum</span>Slang Korea</Link></li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-[10px] font-black tracking-widest text-primary uppercase mb-6">Simulasi &amp; Kalkulator (41-60)</div>
                      <ul className="space-y-4">
                        <li><Link className="text-sm font-medium hover:text-primary flex items-center gap-2" href="#"><span className="material-symbols-outlined text-lg">calculate</span>Kalkulator Skor</Link></li>
                        <li><Link className="text-sm font-medium hover:text-primary flex items-center gap-2" href="#"><span className="material-symbols-outlined text-lg">payments</span>Estimasi Gaji</Link></li>
                        <li><Link className="text-sm font-medium hover:text-primary flex items-center gap-2" href="#"><span className="material-symbols-outlined text-lg">currency_exchange</span>Kurs Won</Link></li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-[10px] font-black tracking-widest text-primary uppercase mb-6">Fun &amp; Engagement (61-80)</div>
                      <ul className="space-y-4">
                        <li><Link className="text-sm font-medium hover:text-primary flex items-center gap-2" href="#"><span className="material-symbols-outlined text-lg">celebration</span>Seberapa Korea Kamu?</Link></li>
                        <li><Link className="text-sm font-medium hover:text-primary flex items-center gap-2" href="#"><span className="material-symbols-outlined text-lg">badge</span>Quiz Nama Korea</Link></li>
                        <li><Link className="text-sm font-medium hover:text-primary flex items-center gap-2" href="#"><span className="material-symbols-outlined text-lg">movie</span>K-Pop &amp; Drama Quiz</Link></li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-[10px] font-black tracking-widest text-primary uppercase mb-6">Persiapan Ke Korea (81-100)</div>
                      <ul className="space-y-4">
                        <li><Link className="text-sm font-medium hover:text-primary flex items-center gap-2" href="#"><span className="material-symbols-outlined text-lg">verified_user</span>Cek Kesiapan</Link></li>
                        <li><Link className="text-sm font-medium hover:text-primary flex items-center gap-2" href="#"><span className="material-symbols-outlined text-lg">groups</span>Simulasi Interview</Link></li>
                        <li><Link className="text-sm font-medium hover:text-primary flex items-center gap-2" href="#"><span className="material-symbols-outlined text-lg">fact_check</span>Checklist Dokumen</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group relative h-full flex items-center">
                <button className="flex items-center gap-1.5 text-sm font-semibold text-on-surface/70 group-hover:text-primary transition-colors">
                  Kerja &amp; Kuliah
                  <span className="material-symbols-outlined text-base transition-transform group-hover:rotate-180">expand_more</span>
                </button>
                <div className="absolute top-full left-0 w-80 pt-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="bg-white/95 backdrop-blur-xl border border-outline-variant/50 rounded-2xl p-5 shadow-2xl">
                    <div className="mb-4 pb-4 border-b border-outline-variant/50">
                      <div className="text-[10px] font-black text-primary uppercase mb-3">Kerja di Korea</div>
                      <div className="grid grid-cols-1 gap-2">
                        <Link className="text-xs font-bold hover:text-primary" href="#">Syarat G2G</Link>
                        <Link className="text-xs font-bold hover:text-primary" href="#">Gaji &amp; Fasilitas</Link>
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] font-black text-primary uppercase mb-3">Kuliah &amp; Hidup</div>
                      <div className="grid grid-cols-1 gap-2">
                        <Link className="text-xs font-bold hover:text-primary" href="#">Beasiswa GKS</Link>
                        <Link className="text-xs font-bold hover:text-primary" href="#">Budaya &amp; Etika</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link className="text-sm font-semibold text-on-surface/70 hover:text-primary transition-colors" href="#">Blog Storytelling</Link>
            </div>
          </nav>
          <div className="flex items-center gap-4">
            <button className="hidden lg:block px-6 py-2.5 rounded-full border border-outline-variant text-sm font-bold hover:bg-surface-container transition-all">Cek Level</button>
            <button className="px-6 py-2.5 rounded-full bg-primary text-on-primary text-sm font-bold hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95">Mulai Latihan</button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-40 pb-32 px-gutter overflow-hidden">
          <div className="max-w-container-max mx-auto flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-surface-container border border-outline-variant mb-10">
              <span className="material-symbols-outlined text-primary text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              <span className="text-[11px] font-bold tracking-widest text-primary uppercase">100% Gratis &amp; Tanpa Login</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-on-background max-w-5xl mb-8 leading-[1.1] text-balance">
              Belajar Bahasa Korea, Latihan EPS-TOPIK &amp; TOPIK
            </h1>
            <p className="text-lg md:text-xl text-on-surface/60 max-w-2xl mb-12 leading-relaxed">
              Platform edukasi digital dengan latihan interaktif dan simulasi ujian berbasis AI untuk karir masa depan Anda di Korea Selatan.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 mb-24">
              <button className="px-10 py-5 rounded-full bg-primary text-on-primary text-base font-bold shadow-2xl shadow-primary/30 hover:-translate-y-0.5 transition-all active:scale-95">Mulai Latihan Gratis</button>
              <button className="px-10 py-5 rounded-full border border-outline-variant text-base font-bold hover:bg-surface-container transition-all active:scale-95">Cek Level Bahasa Korea</button>
            </div>
            
            {/* Mockup */}
            <div className="relative w-full max-w-5xl mx-auto">
              <div className="absolute -inset-10 bg-primary/5 blur-[120px] rounded-full opacity-40"></div>
              <div className="relative bg-white rounded-3xl shadow-[0_32px_80px_rgba(0,0,0,0.08)] border border-outline-variant overflow-hidden p-2">
                <div className="bg-surface-container/50 rounded-[22px] overflow-hidden">
                  <div className="flex items-center justify-between px-8 py-5 border-b border-outline-variant/50">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                    </div>
                    <span className="text-xs font-bold text-on-surface/40 uppercase tracking-widest">Simulation Interface</span>
                  </div>
                  <div className="p-10 flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full max-w-2xl mx-auto text-center">
                      <span className="text-xs font-bold text-primary mb-2 block">Latihan Kosakata #102</span>
                      <h3 className="text-2xl md:text-3xl font-bold mb-10">Gambar manakah yang menunjukkan kata "Saja" (사자)?</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="p-6 rounded-2xl border-2 border-primary bg-primary/5 flex flex-col items-center group cursor-pointer transition-all hover:bg-primary/10">
                          <img alt="Lion" className="w-full h-48 object-cover rounded-xl mb-4 shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAV00PCAfOJ9e2NJYzplMqgS38RhV0omNqv9f56iUqS0xARUn5sXqdTL6Yg6rkHoQkErQ0ZBDddRbGOgPybkzpMaLrT5gwNqcpV0OZnP_zP9G1oT9OyZqfNAPPl7JD1XvfTarRdE4JrcCXmbQcLqQnjkUTI1cPbiLSdT9qyYM9_2Pu4NjMRXjHV9LKyUlLM4er-0pSUCfeCml6D1OoRh-3TRtzSUzbknf2P2uXhwhDDYxyZZcLyGVDsy0gptDi5IIztTEU3sj777vo" />
                          <span className="text-base font-bold text-primary">A. Singa</span>
                        </div>
                        <div className="p-6 rounded-2xl border border-outline-variant bg-white flex flex-col items-center grayscale opacity-60 group cursor-not-allowed">
                          <img alt="Puppy" className="w-full h-48 object-cover rounded-xl mb-4 shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0o6d58BHiXV3yLWLIHQlOkhv_oF4u1055-EZkOuAfazX3nZpQ7UFWAOL-BMjegT0VeDRkFGCc5rFHas_dHAlhAZKTo6qC6pyuoZzwfttMGcLgKHyN8ofAUAlITeFWbGma6kDQFRzjtrm8QodQoG5tXa3jraVYdRQMkg72X7uZrdggg2gofK2TV85kCu3lL7bZGethXmJnGFWhMgDYHMTKwERHwYRiSC_M6naP_3MXItoGU-2iP89zdzLqRGgs0HavARm_hNqFNBA" />
                          <span className="text-base font-bold text-on-surface/40">B. Anjing</span>
                        </div>
                      </div>
                      <div className="mt-10 flex justify-center gap-4">
                        <button className="px-8 py-3 rounded-full bg-primary/10 text-primary text-sm font-bold hover:bg-primary/20 transition-all">Lewati</button>
                        <button className="px-8 py-3 rounded-full bg-primary text-on-primary text-sm font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all">Konfirmasi Jawaban</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Split */}
        <section className="py-section-padding px-gutter bg-surface">
          <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-24 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Platform Belajar Bahasa Korea &amp; Persiapan ke Korea</h2>
              <p className="text-lg text-on-surface/60 mb-12 leading-relaxed">
                Kami mengerti bahwa mimpi bekerja atau kuliah di Korea Selatan membutuhkan persiapan yang matang. KEKOREA hadir sebagai jembatan yang menghubungkan Anda dengan materi berkualitas tinggi.
              </p>
              <div className="space-y-10">
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-[0_4px_30px_rgba(0,0,0,0.03)] flex items-center justify-center shrink-0 border border-outline-variant/50">
                    <span className="material-symbols-outlined text-primary text-2xl">school</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Materi Dasar &amp; Menengah</h4>
                    <p className="text-on-surface/60">Hangeul, Grammar, hingga percakapan sehari-hari disusun secara sistematis.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-[0_4px_30px_rgba(0,0,0,0.03)] flex items-center justify-center shrink-0 border border-outline-variant/50">
                    <span className="material-symbols-outlined text-primary text-2xl">assignment</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Fokus EPS-TOPIK &amp; TOPIK</h4>
                    <p className="text-on-surface/60">Ribuan soal latihan yang selalu diperbarui sesuai standar terbaru CBT 2024.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
              <img alt="Learning Environment" className="w-full aspect-[4/3] object-cover rounded-3xl shadow-2xl relative z-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6vSn3eUlStnzVbR-2Z5b4SdQc7Gk6I-6LdZalDK-7IkYPOTUdyWJlcAP_x-NnvpLweYPHr-7eFn8LVl-bAOAFwbQdOFzGGcWV-wL59R9RI-RPatZrUtF9QzgMXJbn7Rmy59Qqq8rWr8ejW1j-_Zr-MB_WoJjvGHLyhVTGd9crcRA7I4RaJbnEh3dAj91BHp3CJ90TVdY-p7LQO9slXy1JDCkJGzydXNVFhz6jKg7YK4AHh_Jajhxv6ESesFlD3TQGIZ3nCkA7pjg" />
            </div>
          </div>
        </section>

        {/* Quick Action Grid */}
        <section className="py-section-padding px-gutter">
          <div className="max-w-container-max mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Mulai Sekarang</h2>
            <p className="text-lg text-on-surface/60">Pilih kategori latihan sesuai dengan target belajar Anda hari ini.</p>
          </div>
          <div className="max-w-container-max mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white p-10 rounded-3xl border border-outline-variant premium-shadow premium-shadow-hover transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl glass-icon flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">speed</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Cek Level</h3>
              <p className="text-on-surface/50 text-sm mb-8 leading-relaxed">Ukur sejauh mana kemampuan bahasa Korea Anda saat ini secara akurat.</p>
              <Link className="text-sm font-bold text-primary flex items-center gap-2 group-hover:gap-4 transition-all" href="#">Coba Sekarang <span className="material-symbols-outlined text-base">arrow_forward</span></Link>
            </div>
            <div className="group bg-white p-10 rounded-3xl border border-outline-variant premium-shadow premium-shadow-hover transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl glass-icon flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">translate</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Latihan Vocabulary</h3>
              <p className="text-on-surface/50 text-sm mb-8 leading-relaxed">Kuasai 2000+ kosakata penting EPS-TOPIK dengan sistem flashcard.</p>
              <Link className="text-sm font-bold text-primary flex items-center gap-2 group-hover:gap-4 transition-all" href="#">Buka Latihan <span className="material-symbols-outlined text-base">arrow_forward</span></Link>
            </div>
            <div className="group bg-white p-10 rounded-3xl border border-outline-variant premium-shadow premium-shadow-hover transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl glass-icon flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">menu_book</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Latihan Grammar</h3>
              <p className="text-on-surface/50 text-sm mb-8 leading-relaxed">Pahami struktur kalimat Korea dari dasar hingga mahir dengan mudah.</p>
              <Link className="text-sm font-bold text-primary flex items-center gap-2 group-hover:gap-4 transition-all" href="#">Pelajari <span className="material-symbols-outlined text-base">arrow_forward</span></Link>
            </div>
            <div className="group bg-white p-10 rounded-3xl border border-outline-variant premium-shadow premium-shadow-hover transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl glass-icon flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">quiz</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Mini Test TOPIK</h3>
              <p className="text-on-surface/50 text-sm mb-8 leading-relaxed">Uji kesiapan Anda dengan simulasi tes singkat berdurasi 15 menit.</p>
              <Link className="text-sm font-bold text-primary flex items-center gap-2 group-hover:gap-4 transition-all" href="#">Mulai Tes <span className="material-symbols-outlined text-base">arrow_forward</span></Link>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="py-section-padding px-gutter bg-[#0a0e17] text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.1),transparent_50%)] bg-[#0a0e17]"></div>
          <div className="max-w-container-max mx-auto text-center mb-24 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">Belajar Secara Bertahap &amp; Terarah</h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">Kurikulum terstruktur yang dirancang secara profesional untuk membantu Anda menguasai Bahasa Korea dalam waktu 3 bulan.</p>
          </div>
          <div className="max-w-container-max mx-auto relative z-10">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-[60px] left-32 right-32 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
              <div className="relative flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mb-8 relative z-10 shadow-[0_0_20px_rgba(37,99,235,0.4)]">1</div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10 w-full hover:bg-white/[0.08] transition-all duration-300 group">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2 text-white">Bulan 1 (Dasar)</h3>
                    <div className="h-1 w-12 bg-primary rounded-full"></div>
                  </div>
                  <ul className="space-y-4 mb-10">
                    <li className="flex items-start gap-3 text-sm text-white/70">
                      <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                      <span>Pengenalan Vokal &amp; Konsonan Hangeul</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-white/70">
                      <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                      <span>Sistem Bunyi &amp; Aturan Menulis</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-white/70">
                      <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                      <span>Struktur Kalimat &amp; Perkenalan Diri</span>
                    </li>
                  </ul>
                  <button className="w-full py-4 rounded-xl bg-white text-on-background text-sm font-bold hover:bg-surface-container transition-all shadow-lg active:scale-95">Mulai Fase Dasar</button>
                </div>
              </div>
              <div className="relative flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#1e293b] border-2 border-primary/50 text-primary flex items-center justify-center font-bold text-lg mb-8 relative z-10">2</div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10 w-full hover:bg-white/[0.08] transition-all duration-300">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2 text-white">Bulan 2 (Menengah)</h3>
                    <div className="h-1 w-12 bg-primary/40 rounded-full"></div>
                  </div>
                  <ul className="space-y-4 mb-10">
                    <li className="flex items-start gap-3 text-sm text-white/70">
                      <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                      <span>Pola Kalimat Kerja &amp; Sifat Kompleks</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-white/70">
                      <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                      <span>500 Kosakata Industri &amp; Kerja</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-white/70">
                      <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                      <span>Simulasi Percakapan Harian &amp; Formal</span>
                    </li>
                  </ul>
                  <button className="w-full py-4 rounded-xl border border-white/20 text-white text-sm font-bold hover:bg-white/10 transition-all active:scale-95">Lanjutkan Belajar</button>
                </div>
              </div>
              <div className="relative flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#1e293b] border-2 border-primary/50 text-primary flex items-center justify-center font-bold text-lg mb-8 relative z-10">3</div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10 w-full hover:bg-white/[0.08] transition-all duration-300">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2 text-white">Bulan 3 (Ujian)</h3>
                    <div className="h-1 w-12 bg-primary/40 rounded-full"></div>
                  </div>
                  <ul className="space-y-4 mb-10">
                    <li className="flex items-start gap-3 text-sm text-white/70">
                      <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                      <span>Simulasi CBT EPS-TOPIK Terpadu</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-white/70">
                      <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                      <span>Analisis Kelemahan &amp; Review Materi</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-white/70">
                      <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                      <span>Tips &amp; Trik Mengerjakan Soal Ujian</span>
                    </li>
                  </ul>
                  <button className="w-full py-4 rounded-xl border border-white/20 text-white text-sm font-bold hover:bg-white/10 transition-all active:scale-95">Siap Hadapi Ujian</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Simulasi Cepat Section */}
        <section className="py-section-padding px-gutter bg-white relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-container-max pointer-events-none">
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/5 rounded-full blur-[100px]"></div>
          </div>
          <div className="max-w-container-max mx-auto">
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-6 relative z-10">
                <span className="text-[10px] font-black tracking-[0.2em] text-primary uppercase">Simulasi Cepat</span>
              </div>
              <div className="w-full max-w-3xl bg-white/40 backdrop-blur-xl border border-outline-variant/60 rounded-[40px] p-8 md:p-16 shadow-[0_40px_100px_-20px_rgba(0,74,198,0.1)] relative z-10 group overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                  <span className="material-symbols-outlined text-primary text-[120px]">psychology</span>
                </div>
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-black mb-4 text-on-background tracking-tight">Mini Tryout</h2>
                  <p className="text-xl md:text-2xl font-medium text-primary mb-12">Manakah arti kata "Annyeong" (안녕)?</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                    <button className="p-5 rounded-2xl border border-outline-variant bg-white/50 text-left hover:border-primary hover:bg-primary/5 transition-all flex items-center gap-4 group/opt">
                      <span className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-xs font-bold group-hover/opt:bg-primary group-hover/opt:text-white transition-colors">A</span>
                      <span className="font-semibold">Halo / Apa Kabar</span>
                    </button>
                    <button className="p-5 rounded-2xl border border-outline-variant bg-white/50 text-left hover:border-primary hover:bg-primary/5 transition-all flex items-center gap-4 group/opt">
                      <span className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-xs font-bold group-hover/opt:bg-primary group-hover/opt:text-white transition-colors">B</span>
                      <span className="font-semibold">Terima Kasih</span>
                    </button>
                    <button className="p-5 rounded-2xl border border-outline-variant bg-white/50 text-left hover:border-primary hover:bg-primary/5 transition-all flex items-center gap-4 group/opt">
                      <span className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-xs font-bold group-hover/opt:bg-primary group-hover/opt:text-white transition-colors">C</span>
                      <span className="font-semibold">Selamat Makan</span>
                    </button>
                    <button className="p-5 rounded-2xl border border-outline-variant bg-white/50 text-left hover:border-primary hover:bg-primary/5 transition-all flex items-center gap-4 group/opt">
                      <span className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-xs font-bold group-hover/opt:bg-primary group-hover/opt:text-white transition-colors">D</span>
                      <span className="font-semibold">Maaf</span>
                    </button>
                  </div>
                  <div className="flex justify-center">
                    <button className="px-12 py-5 rounded-full bg-[#2563EB] text-white text-base font-bold shadow-xl shadow-blue-500/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-3">
                      Mulai Tryout Lengkap
                      <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-section-padding px-gutter bg-surface">
          <div className="max-w-container-max mx-auto text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Semua Latihan dalam Satu Platform</h2>
            <p className="text-on-surface/60">Akses berbagai modul latihan spesifik untuk menajamkan kemampuan Anda.</p>
          </div>
          <div className="max-w-container-max mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="flex flex-col items-center p-8 bg-white rounded-3xl border border-outline-variant premium-shadow hover:shadow-lg transition-all cursor-pointer group">
              <span className="material-symbols-outlined text-primary text-3xl mb-4 group-hover:scale-110 transition-transform">auto_stories</span>
              <span className="text-sm font-bold text-center">Reading</span>
            </div>
            <div className="flex flex-col items-center p-8 bg-white rounded-3xl border border-outline-variant premium-shadow hover:shadow-lg transition-all cursor-pointer group">
              <span className="material-symbols-outlined text-primary text-3xl mb-4 group-hover:scale-110 transition-transform">headphones</span>
              <span className="text-sm font-bold text-center">Listening</span>
            </div>
            <div className="flex flex-col items-center p-8 bg-white rounded-3xl border border-outline-variant premium-shadow hover:shadow-lg transition-all cursor-pointer group">
              <span className="material-symbols-outlined text-primary text-3xl mb-4 group-hover:scale-110 transition-transform">edit_note</span>
              <span className="text-sm font-bold text-center">Writing</span>
            </div>
            <div className="flex flex-col items-center p-8 bg-white rounded-3xl border border-outline-variant premium-shadow hover:shadow-lg transition-all cursor-pointer group">
              <span className="material-symbols-outlined text-primary text-3xl mb-4 group-hover:scale-110 transition-transform">record_voice_over</span>
              <span className="text-sm font-bold text-center">Speaking</span>
            </div>
            <div className="flex flex-col items-center p-8 bg-white rounded-3xl border border-outline-variant premium-shadow hover:shadow-lg transition-all cursor-pointer group">
              <span className="material-symbols-outlined text-primary text-3xl mb-4 group-hover:scale-110 transition-transform">chat</span>
              <span className="text-sm font-bold text-center">Korean Slang</span>
            </div>
            <div className="flex flex-col items-center p-8 bg-white rounded-3xl border border-outline-variant premium-shadow hover:shadow-lg transition-all cursor-pointer group">
              <span className="material-symbols-outlined text-primary text-3xl mb-4 group-hover:scale-110 transition-transform">grid_view</span>
              <span className="text-sm font-bold text-center">Lainnya</span>
            </div>
          </div>
        </section>

        {/* Partner CTA */}
        <section className="py-24 px-gutter">
          <div className="max-w-5xl mx-auto p-12 md:p-20 rounded-[40px] bg-primary text-on-primary text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Ingin Merasakan Ujian Seperti Aslinya?</h2>
              <p className="text-lg opacity-80 mb-12 max-w-2xl mx-auto">
                Dapatkan pengalaman simulasi ujian CBT EPS-TOPIK dengan sistem pengatur waktu, kategori soal, dan laporan nilai instan di platform partner kami.
              </p>
              <button className="px-10 py-5 rounded-full bg-white text-primary text-lg font-bold shadow-2xl hover:scale-105 transition-all flex items-center gap-3 mx-auto">
                Coba Simulasi di epstopik.id
                <span className="material-symbols-outlined">launch</span>
              </button>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-section-padding px-gutter">
          <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold mb-4">Belajar &amp; Persiapan ke Korea dalam Satu Tempat</h2>
              <p className="text-lg text-on-surface/60">Update informasi terbaru seputar karir dan edukasi di Korea Selatan.</p>
            </div>
            <Link className="flex items-center gap-2 text-sm font-bold text-primary hover:underline" href="#">Lihat Semua Blog <span className="material-symbols-outlined">chevron_right</span></Link>
          </div>
          <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            <article className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl mb-6">
                <img alt="Seoul" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVDDQFGfyjklVinIXMnRrYvVCV665ZSYPDxp0FJWD0InTw-VTgw9lR1uSYC8j1zL9odGT7g0XmIEZtrQwj8sjqK5bMeP20Lc9NLF3VFIOdojj7O8HX0REBsyTmINKtWyVCM76LhAiJiNeEbVagumFOF2zb8malzdjIrNbAkz01DO9yuw6eFnqBpu39pXlSTfB5mJ7w3KSs1u6tJS1Hfxa5t03mAC5ndChlxSrPHJxWmD4N8s4wJ5ivTe-ZttpCo9P5vY5pvwVCzD4" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-3 block">Panduan Karir</span>
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">Syarat Terbaru Pendaftaran EPS-TOPIK 2024</h3>
              <div className="flex items-center justify-between text-xs opacity-50 font-medium">
                <span className="">5 Menit Baca</span>
                <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">east</span>
              </div>
            </article>
            <article className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl mb-6">
                <img alt="Study" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv05dCWtvONIXEIcg2IxrloKxghPlIGbzPPvGGh5sctx-oArdNTiXMDq430Nq3mc8X3WrdOJIyULzqM3xuOSC44gy04QWOZRKPufg5EjsDqYkanRRFSHIDL-YANQAZ61VfFCJsISxrUiDdgRB4z7krRAq2cBj4gRGzImUlLE5yX9CgqTXoT5B1ULWa3uRKeNpgmPAulZbkHjGx-hNQEl9W1c3gzYGuZFbPT08Q0XAbdDyFsiC3zwc2SIz6XNv31DfmKtBSU8T4zMA" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-3 block">Tips Belajar</span>
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">Cara Cepat Hafal Kosakata Kerja EPS-TOPIK</h3>
              <div className="flex items-center justify-between text-xs opacity-50 font-medium">
                <span className="">8 Menit Baca</span>
                <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">east</span>
              </div>
            </article>
            <article className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl mb-6">
                <img alt="University" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARlKZljqjNwOxyWNd7KSWpH_u8SK2eeZWgnXRX_LNnIDxSdirudnvDUAw0urhGmStuTLnYCkHk4yTW1W9mqgu0rLOQBr3I3qC7XW2iekoEfWG6FD6005TWFbTuIMQKoWddQBIkQfwQ8onqzSrj_nx5blPNkxoj2Dlu4XuFX7o4BJzQd4s-zLmkwalFObDXO-H1uOEEtTrmxbWaznQwNZgJ5w6-I5dU8XgIRo4Z42f1dgtNcO8gJ2He_DA1Ng2vCnoq0AO_RyrAK98" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-3 block">Beasiswa</span>
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">Daftar Universitas di Korea dengan Beasiswa GKS</h3>
              <div className="flex items-center justify-between text-xs opacity-50 font-medium">
                <span className="">12 Menit Baca</span>
                <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">east</span>
              </div>
            </article>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 px-gutter bg-surface border-t border-outline-variant/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tight">Wujudkan Impian Anda ke Korea Selatan Hari Ini</h2>
            <p className="text-xl text-on-surface/60 mb-16">Gratis selamanya, akses tanpa batas ke semua materi latihan interaktif.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-14 py-6 rounded-full bg-primary text-on-primary text-lg font-bold shadow-2xl shadow-primary/30 hover:scale-105 transition-all">Mulai Latihan Gratis</button>
              <button className="px-14 py-6 rounded-full border border-outline-variant bg-white text-on-surface text-lg font-bold hover:bg-surface-container transition-all">Cek Level Sekarang</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-on-background border-t border-white/10 pt-24 pb-12 px-gutter text-white">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-24">
            <div className="md:col-span-1">
              <div className="text-3xl font-black text-white tracking-tighter mb-8">KEKOREA</div>
              <p className="text-sm text-white/60 max-w-sm mb-10 leading-relaxed">Platform edukasi terlengkap untuk persiapan kerja dan kuliah di Korea Selatan.</p>
              <div className="flex gap-4">
                <Link className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors" href="#"><span className="material-symbols-outlined text-white">public</span></Link>
                <Link className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors" href="#"><span className="material-symbols-outlined text-white">mail</span></Link>
                <Link className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors" href="#"><span className="material-symbols-outlined text-white">smart_display</span></Link>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-white/40">Belajar</h4>
              <ul className="space-y-4">
                <li><Link className="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#">Hangul &amp; Alphabet</Link></li>
                <li><Link className="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#">Grammar</Link></li>
                <li><Link className="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#">Vocabulary</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-white/40">Ujian</h4>
              <ul className="space-y-4">
                <li><Link className="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#">Info Umum</Link></li>
                <li><Link className="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#">Strategi Lulus</Link></li>
                <li><Link className="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#">Simulasi Ujian</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-white/40">Latihan</h4>
              <ul className="space-y-4">
                <li><Link className="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#">Mini TOPIK</Link></li>
                <li><Link className="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#">Reading Test</Link></li>
                <li><Link className="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#">Cek Level</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-white/40">Info</h4>
              <ul className="space-y-4">
                <li><Link className="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#">Kerja &amp; Kuliah</Link></li>
                <li><Link className="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#">Blog Storytelling</Link></li>
                <li><Link className="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#">Hubungi Kami</Link></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/10 gap-8">
            <p className="text-xs text-white/40 font-medium">© 2024 KEKOREA. Platform Edukasi Bahasa Korea Terpercaya.</p>
            <div className="flex gap-4">
              <span className="text-[10px] px-4 py-1.5 rounded-full border border-white/10 font-black uppercase tracking-wider text-white/40">Lulus Verifikasi Akademik</span>
              <span className="text-[10px] px-4 py-1.5 rounded-full border border-white/10 font-black uppercase tracking-wider text-white/40">Partner EPS-TOPIK.ID</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
