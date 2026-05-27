const fs = require('fs');

const html = `<body class="bg-background text-on-background selection:bg-primary/10 selection:text-primary">
<!-- Navigation -->
<header class="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-outline-variant/50 h-20">
<div class="flex justify-between items-center w-full px-gutter max-w-container-max mx-auto h-full">
<div class="text-2xl font-extrabold text-primary tracking-tighter">KEKOREA</div>
<nav class="hidden md:flex items-center gap-10"><div class="flex items-center gap-8 h-full">
<div class="group relative h-full flex items-center">
<button class="flex items-center gap-1.5 text-sm font-semibold text-on-surface/70 group-hover:text-primary transition-colors">
            Belajar Bahasa Korea
            <span class="material-symbols-outlined text-base transition-transform group-hover:rotate-180">expand_more</span>
</button>
<div class="absolute top-full left-0 w-64 pt-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
<div class="bg-white/95 backdrop-blur-xl border border-outline-variant/50 rounded-2xl p-4 shadow-2xl">
<div class="space-y-1">
<a class="flex items-center gap-3 p-2.5 rounded-lg hover:bg-primary/5 group/item transition-colors" href="#">
<span class="material-symbols-outlined text-primary/70 group-hover/item:text-primary">abc</span>
<div class="text-sm font-medium">Hangul &amp; Alphabet</div>
</a>
<a class="flex items-center gap-3 p-2.5 rounded-lg hover:bg-primary/5 group/item transition-colors" href="#">
<span class="material-symbols-outlined text-primary/70 group-hover/item:text-primary">menu_book</span>
<div class="text-sm font-medium">Grammar</div>
</a>
<a class="flex items-center gap-3 p-2.5 rounded-lg hover:bg-primary/5 group/item transition-colors" href="#">
<span class="material-symbols-outlined text-primary/70 group-hover/item:text-primary">translate</span>
<div class="text-sm font-medium">Vocabulary</div>
</a>
<a class="flex items-center gap-3 p-2.5 rounded-lg hover:bg-primary/5 group/item transition-colors" href="#">
<span class="material-symbols-outlined text-primary/70 group-hover/item:text-primary">record_voice_over</span>
<div class="text-sm font-medium">Listening &amp; Speaking</div>
</a>
<a class="flex items-center gap-3 p-2.5 rounded-lg hover:bg-primary/5 group/item transition-colors" href="#">
<span class="material-symbols-outlined text-primary/70 group-hover/item:text-primary">construction</span>
<div class="text-sm font-medium text-primary">Tools Gratis</div>
</a>
</div>
</div>
</div>
</div>
<div class="group relative h-full flex items-center">
<button class="flex items-center gap-1.5 text-sm font-semibold text-on-surface/70 group-hover:text-primary transition-colors">
            TOPIK &amp; EPS-TOPIK
            <span class="material-symbols-outlined text-base transition-transform group-hover:rotate-180">expand_more</span>
</button>
<div class="absolute top-full left-0 w-72 pt-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
<div class="bg-white/95 backdrop-blur-xl border border-outline-variant/50 rounded-2xl p-4 shadow-2xl">
<div class="space-y-1">
<a class="flex flex-col p-3 rounded-lg hover:bg-primary/5 transition-colors" href="#">
<div class="text-sm font-bold">Info Umum</div>
<div class="text-[11px] text-on-surface/50">Jadwal, biaya &amp; pendaftaran</div>
</a>
<a class="flex flex-col p-3 rounded-lg hover:bg-primary/5 transition-colors" href="#">
<div class="text-sm font-bold">Strategi Lulus</div>
<div class="text-[11px] text-on-surface/50">Tips Reading &amp; Listening</div>
</a>
<a class="flex flex-col p-3 rounded-lg hover:bg-primary/5 transition-colors" href="#">
<div class="text-sm font-bold">Simulasi Ujian</div>
<div class="text-[11px] text-on-surface/50">Mini TOPIK &amp; EPS-TOPIK</div>
</a>
</div>
</div>
</div>
</div>
<div class="group h-full flex items-center">
<button class="flex items-center gap-1.5 text-sm font-semibold text-on-surface/70 group-hover:text-primary transition-colors">
            Latihan &amp; Tes
            <span class="material-symbols-outlined text-base transition-transform group-hover:rotate-180">expand_more</span>
</button>
<div class="absolute top-full left-0 w-screen left-1/2 -translate-x-1/2 pt-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 px-gutter">
<div class="max-w-container-max mx-auto bg-white/95 backdrop-blur-xl border border-outline-variant/50 rounded-3xl p-8 shadow-2xl grid grid-cols-5 gap-8">
<div>
<div class="text-[10px] font-black tracking-widest text-primary uppercase mb-6">Latihan &amp; Tes (1-20)</div>
<ul class="space-y-4">
<li class=""><a class="text-sm font-medium hover:text-primary flex items-center gap-2" href="#"><span class="material-symbols-outlined text-lg">quiz</span>Mini TOPIK</a></li>
<li class=""><a class="text-sm font-medium hover:text-primary flex items-center gap-2" href="#"><span class="material-symbols-outlined text-lg">auto_stories</span>Reading Test</a></li>
<li class=""><a class="text-sm font-medium hover:text-primary flex items-center gap-2" href="#"><span class="material-symbols-outlined text-lg">headphones</span>Listening Test</a></li>
<li class=""><a class="text-sm font-medium hover:text-primary flex items-center gap-2" href="#"><span class="material-symbols-outlined text-lg">speed</span>Cek Level</a></li>
</ul>
</div>
<div>
<div class="text-[10px] font-black tracking-widest text-primary uppercase mb-6">Vocab &amp; Grammar (21-40)</div>
<ul class="space-y-4">
<li class=""><a class="text-sm font-medium hover:text-primary flex items-center gap-2" href="#"><span class="material-symbols-outlined text-lg">lightbulb</span>Tebak Arti</a></li>
<li class=""><a class="text-sm font-medium hover:text-primary flex items-center gap-2" href="#"><span class="material-symbols-outlined text-lg">link</span>Latihan Partikel</a></li>
<li class=""><a class="text-sm font-medium hover:text-primary flex items-center gap-2" href="#"><span class="material-symbols-outlined text-lg">forum</span>Slang Korea</a></li>
</ul>
</div>
<div>
<div class="text-[10px] font-black tracking-widest text-primary uppercase mb-6">Simulasi &amp; Kalkulator (41-60)</div>
<ul class="space-y-4">
<li class=""><a class="text-sm font-medium hover:text-primary flex items-center gap-2" href="#"><span class="material-symbols-outlined text-lg">calculate</span>Kalkulator Skor</a></li>
<li class=""><a class="text-sm font-medium hover:text-primary flex items-center gap-2" href="#"><span class="material-symbols-outlined text-lg">payments</span>Estimasi Gaji</a></li>
<li class=""><a class="text-sm font-medium hover:text-primary flex items-center gap-2" href="#"><span class="material-symbols-outlined text-lg">currency_exchange</span>Kurs Won</a></li>
</ul>
</div>
<div>
<div class="text-[10px] font-black tracking-widest text-primary uppercase mb-6">Fun &amp; Engagement (61-80)</div>
<ul class="space-y-4">
<li class=""><a class="text-sm font-medium hover:text-primary flex items-center gap-2" href="#"><span class="material-symbols-outlined text-lg">celebration</span>Seberapa Korea Kamu?</a></li>
<li class=""><a class="text-sm font-medium hover:text-primary flex items-center gap-2" href="#"><span class="material-symbols-outlined text-lg">badge</span>Quiz Nama Korea</a></li>
<li class=""><a class="text-sm font-medium hover:text-primary flex items-center gap-2" href="#"><span class="material-symbols-outlined text-lg">movie</span>K-Pop &amp; Drama Quiz</a></li>
</ul>
</div>
<div>
<div class="text-[10px] font-black tracking-widest text-primary uppercase mb-6">Persiapan Ke Korea (81-100)</div>
<ul class="space-y-4">
<li class=""><a class="text-sm font-medium hover:text-primary flex items-center gap-2" href="#"><span class="material-symbols-outlined text-lg">verified_user</span>Cek Kesiapan</a></li>
<li class=""><a class="text-sm font-medium hover:text-primary flex items-center gap-2" href="#"><span class="material-symbols-outlined text-lg">groups</span>Simulasi Interview</a></li>
<li class=""><a class="text-sm font-medium hover:text-primary flex items-center gap-2" href="#"><span class="material-symbols-outlined text-lg">fact_check</span>Checklist Dokumen</a></li>
</ul>
</div>
</div>
</div>
</div>
<div class="group relative h-full flex items-center">
<button class="flex items-center gap-1.5 text-sm font-semibold text-on-surface/70 group-hover:text-primary transition-colors">
            Kerja &amp; Kuliah
            <span class="material-symbols-outlined text-base transition-transform group-hover:rotate-180">expand_more</span>
</button>
<div class="absolute top-full left-0 w-80 pt-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
<div class="bg-white/95 backdrop-blur-xl border border-outline-variant/50 rounded-2xl p-5 shadow-2xl">
<div class="mb-4 pb-4 border-b border-outline-variant/50">
<div class="text-[10px] font-black text-primary uppercase mb-3">Kerja di Korea</div>
<div class="grid grid-cols-1 gap-2">
<a class="text-xs font-bold hover:text-primary" href="#">Syarat G2G</a>
<a class="text-xs font-bold hover:text-primary" href="#">Gaji &amp; Fasilitas</a>
</div>
</div>
<div>
<div class="text-[10px] font-black text-primary uppercase mb-3">Kuliah &amp; Hidup</div>
<div class="grid grid-cols-1 gap-2">
<a class="text-xs font-bold hover:text-primary" href="#">Beasiswa GKS</a>
<a class="text-xs font-bold hover:text-primary" href="#">Budaya &amp; Etika</a>
</div>
</div>
</div>
</div>
</div>
<a class="text-sm font-semibold text-on-surface/70 hover:text-primary transition-colors" href="#">Blog Storytelling</a>
</div></nav>
<div class="flex items-center gap-4">
<button class="hidden lg:block px-6 py-2.5 rounded-full border border-outline-variant text-sm font-bold hover:bg-surface-container transition-all">Cek Level</button>
<button class="px-6 py-2.5 rounded-full bg-primary text-on-primary text-sm font-bold hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95">Mulai Latihan</button>
</div>
</div>
</header>
<main>
<!-- Hero Section -->
<section class="relative pt-40 pb-32 px-gutter overflow-hidden">
<div class="max-w-container-max mx-auto flex flex-col items-center text-center">
<div class="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-surface-container border border-outline-variant mb-10">
<span class="material-symbols-outlined text-primary text-[18px]" style="font-variation-settings: 'FILL' 1;">verified</span>
<span class="text-[11px] font-bold tracking-widest text-primary uppercase">100% Gratis &amp; Tanpa Login</span>
</div>
<h1 class="text-5xl md:text-7xl font-extrabold tracking-tight text-on-background max-w-5xl mb-8 leading-[1.1] text-balance">Belajar Bahasa Korea, Latihan EPS-TOPIK &amp; TOPIK</h1>
<p class="text-lg md:text-xl text-on-surface/60 max-w-2xl mb-12 leading-relaxed">
                Platform edukasi digital dengan latihan interaktif dan simulasi ujian berbasis AI untuk karir masa depan Anda di Korea Selatan.
            </p>
<div class="flex flex-col sm:flex-row gap-5 mb-24">
<button class="px-10 py-5 rounded-full bg-primary text-on-primary text-base font-bold shadow-2xl shadow-primary/30 hover:-translate-y-0.5 transition-all active:scale-95">Mulai Latihan Gratis</button>
<button class="px-10 py-5 rounded-full border border-outline-variant text-base font-bold hover:bg-surface-container transition-all active:scale-95">Cek Level Bahasa Korea</button>
</div>
<!-- Mockup -->
<div class="relative w-full max-w-5xl mx-auto">
<div class="absolute -inset-10 bg-primary/5 blur-[120px] rounded-full opacity-40"></div>
<div class="relative bg-white rounded-3xl shadow-[0_32px_80px_rgba(0,0,0,0.08)] border border-outline-variant overflow-hidden p-2">
<div class="bg-surface-container/50 rounded-[22px] overflow-hidden">
<div class="flex items-center justify-between px-8 py-5 border-b border-outline-variant/50">
<div class="flex items-center gap-2">
<div class="w-3 h-3 rounded-full bg-red-400"></div>
<div class="w-3 h-3 rounded-full bg-amber-400"></div>
<div class="w-3 h-3 rounded-full bg-emerald-400"></div>
</div>
<span class="text-xs font-bold text-on-surface/40 uppercase tracking-widest">Simulation Interface</span>
</div>
<div class="p-10 flex flex-col md:flex-row gap-12 items-center"><div class="w-full max-w-2xl mx-auto text-center"><span class="text-xs font-bold text-primary mb-2 block">Latihan Kosakata #102</span><h3 class="text-2xl md:text-3xl font-bold mb-10">Gambar manakah yang menunjukkan kata "Saja" (사자)?</h3><div class="grid grid-cols-1 sm:grid-cols-2 gap-6"><div class="p-6 rounded-2xl border-2 border-primary bg-primary/5 flex flex-col items-center group cursor-pointer transition-all hover:bg-primary/10"><img alt="Lion" class="w-full h-48 object-cover rounded-xl mb-4 shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAV00PCAfOJ9e2NJYzplMqgS38RhV0omNqv9f56iUqS0xARUn5sXqdTL6Yg6rkHoQkErQ0ZBDddRbGOgPybkzpMaLrT5gwNqcpV0OZnP_zP9G1oT9OyZqfNAPPl7JD1XvfTarRdE4JrcCXmbQcLqQnjkUTI1cPbiLSdT9qyYM9_2Pu4NjMRXjHV9LKyUlLM4er-0pSUCfeCml6D1OoRh-3TRtzSUzbknf2P2uXhwhDDYxyZZcLyGVDsy0gptDi5IIztTEU3sj777vo"><span class="text-base font-bold text-primary">A. Singa</span></div><div class="p-6 rounded-2xl border border-outline-variant bg-white flex flex-col items-center grayscale opacity-60 group cursor-not-allowed"><img alt="Puppy" class="w-full h-48 object-cover rounded-xl mb-4 shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0o6d58BHiXV3yLWLIHQlOkhv_oF4u1055-EZkOuAfazX3nZpQ7UFWAOL-BMjegT0VeDRkFGCc5rFHas_dHAlhAZKTo6qC6pyuoZzwfttMGcLgKHyN8ofAUAlITeFWbGma6kDQFRzjtrm8QodQoG5tXa3jraVYdRQMkg72X7uZrdggg2gofK2TV85kCu3lL7bZGethXmJnGFWhMgDYHMTKwERHwYRiSC_M6naP_3MXItoGU-2iP89zdzLqRGgs0HavARm_hNqFNBA"><span class="text-base font-bold text-on-surface/40">B. Anjing</span></div></div><div class="mt-10 flex justify-center gap-4"><button class="px-8 py-3 rounded-full bg-primary/10 text-primary text-sm font-bold hover:bg-primary/20 transition-all">Lewati</button><button class="px-8 py-3 rounded-full bg-primary text-on-primary text-sm font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all">Konfirmasi Jawaban</button></div></div></div>
</div>
</div>
</div>
</div>
</section>
<!-- Content Split -->
<section class="py-section-padding px-gutter bg-surface">
<div class="max-w-container-max mx-auto grid md:grid-cols-2 gap-24 items-center">
<div class="order-2 md:order-1">
<h2 class="text-4xl md:text-5xl font-bold mb-8 leading-tight">Platform Belajar Bahasa Korea &amp; Persiapan ke Korea</h2>
<p class="text-lg text-on-surface/60 mb-12 leading-relaxed">
                    Kami mengerti bahwa mimpi bekerja atau kuliah di Korea Selatan membutuhkan persiapan yang matang. KEKOREA hadir sebagai jembatan yang menghubungkan Anda dengan materi berkualitas tinggi.
                </p>
<div class="space-y-10">
<div class="flex gap-6 items-start">
<div class="w-14 h-14 rounded-2xl bg-white shadow-soft flex items-center justify-center shrink-0 border border-outline-variant/50">
<span class="material-symbols-outlined text-primary text-2xl">school</span>
</div>
<div>
<h4 class="text-lg font-bold mb-2">Materi Dasar &amp; Menengah</h4>
<p class="text-on-surface/60">Hangeul, Grammar, hingga percakapan sehari-hari disusun secara sistematis.</p>
</div>
</div>
<div class="flex gap-6 items-start">
<div class="w-14 h-14 rounded-2xl bg-white shadow-soft flex items-center justify-center shrink-0 border border-outline-variant/50">
<span class="material-symbols-outlined text-primary text-2xl">assignment</span>
</div>
<div>
<h4 class="text-lg font-bold mb-2">Fokus EPS-TOPIK &amp; TOPIK</h4>
<p class="text-on-surface/60">Ribuan soal latihan yang selalu diperbarui sesuai standar terbaru CBT 2024.</p>
</div>
</div>
</div>
</div>
<div class="order-1 md:order-2 relative">
<div class="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
<img alt="Learning Environment" class="w-full aspect-[4/3] object-cover rounded-3xl shadow-2xl relative z-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6vSn3eUlStnzVbR-2Z5b4SdQc7Gk6I-6LdZalDK-7IkYPOTUdyWJlcAP_x-NnvpLweYPHr-7eFn8LVl-bAOAFwbQdOFzGGcWV-wL59R9RI-RPatZrUtF9QzgMXJbn7Rmy59Qqq8rWr8ejW1j-_Zr-MB_WoJjvGHLyhVTGd9crcRA7I4RaJbnEh3dAj91BHp3CJ90TVdY-p7LQO9slXy1JDCkJGzydXNVFhz6jKg7YK4AHh_Jajhxv6ESesFlD3TQGIZ3nCkA7pjg">
</div>
</div>
</section>
<!-- Quick Action Grid -->
<section class="py-section-padding px-gutter">
<div class="max-w-container-max mx-auto text-center mb-20">
<h2 class="text-4xl md:text-5xl font-bold mb-6">Mulai Sekarang</h2>
<p class="text-lg text-on-surface/60">Pilih kategori latihan sesuai dengan target belajar Anda hari ini.</p>
</div>
<div class="max-w-container-max mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
<div class="group bg-white p-10 rounded-3xl border border-outline-variant premium-shadow premium-shadow-hover transition-all duration-500">
<div class="w-14 h-14 rounded-2xl glass-icon flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-primary text-3xl">speed</span>
</div>
<h3 class="text-xl font-bold mb-3">Cek Level</h3>
<p class="text-on-surface/50 text-sm mb-8 leading-relaxed">Ukur sejauh mana kemampuan bahasa Korea Anda saat ini secara akurat.</p>
<a class="text-sm font-bold text-primary flex items-center gap-2 group-hover:gap-4 transition-all" href="#">Coba Sekarang <span class="material-symbols-outlined text-base">arrow_forward</span></a>
</div>
<div class="group bg-white p-10 rounded-3xl border border-outline-variant premium-shadow premium-shadow-hover transition-all duration-500">
<div class="w-14 h-14 rounded-2xl glass-icon flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-primary text-3xl">translate</span>
</div>
<h3 class="text-xl font-bold mb-3">Latihan Vocabulary</h3>
<p class="text-on-surface/50 text-sm mb-8 leading-relaxed">Kuasai 2000+ kosakata penting EPS-TOPIK dengan sistem flashcard.</p>
<a class="text-sm font-bold text-primary flex items-center gap-2 group-hover:gap-4 transition-all" href="#">Buka Latihan <span class="material-symbols-outlined text-base">arrow_forward</span></a>
</div>
<div class="group bg-white p-10 rounded-3xl border border-outline-variant premium-shadow premium-shadow-hover transition-all duration-500">
<div class="w-14 h-14 rounded-2xl glass-icon flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-primary text-3xl">menu_book</span>
</div>
<h3 class="text-xl font-bold mb-3">Latihan Grammar</h3>
<p class="text-on-surface/50 text-sm mb-8 leading-relaxed">Pahami struktur kalimat Korea dari dasar hingga mahir dengan mudah.</p>
<a class="text-sm font-bold text-primary flex items-center gap-2 group-hover:gap-4 transition-all" href="#">Pelajari <span class="material-symbols-outlined text-base">arrow_forward</span></a>
</div>
<div class="group bg-white p-10 rounded-3xl border border-outline-variant premium-shadow premium-shadow-hover transition-all duration-500">
<div class="w-14 h-14 rounded-2xl glass-icon flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-primary text-3xl">quiz</span>
</div>
<h3 class="text-xl font-bold mb-3">Mini Test TOPIK</h3>
<p class="text-on-surface/50 text-sm mb-8 leading-relaxed">Uji kesiapan Anda dengan simulasi tes singkat berdurasi 15 menit.</p>
<a class="text-sm font-bold text-primary flex items-center gap-2 group-hover:gap-4 transition-all" href="#">Mulai Tes <span class="material-symbols-outlined text-base">arrow_forward</span></a>
</div>
</div>
</section>
<!-- Roadmap Section -->
<section class="py-section-padding px-gutter bg-[#0a0e17] text-white overflow-hidden relative"><div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.1),transparent_50%)] bg-[#0a0e17]"></div>
<div class="max-w-container-max mx-auto text-center mb-24 relative z-10">
<h2 class="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">Belajar Secara Bertahap &amp; Terarah</h2>
<p class="text-lg text-white/60 max-w-2xl mx-auto">Kurikulum terstruktur yang dirancang secara profesional untuk membantu Anda menguasai Bahasa Korea dalam waktu 3 bulan.</p>
</div>
<div class="max-w-container-max mx-auto relative z-10">
<!-- Connecting Line -->
<div class="hidden lg:block absolute top-[60px] left-32 right-32 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
<!-- Step 1 -->
<div class="relative flex flex-col items-center">
<div class="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mb-8 relative z-10 shadow-[0_0_20px_rgba(37,99,235,0.4)]">1</div>
<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10 w-full hover:bg-white/[0.08] transition-all duration-300 group">
<div class="mb-6">
<h3 class="text-2xl font-bold mb-2 text-white">Bulan 1 (Dasar)</h3>
<div class="h-1 w-12 bg-primary rounded-full"></div>
</div>
<ul class="space-y-4 mb-10">
<li class="flex items-start gap-3 text-sm text-white/70">
<span class="material-symbols-outlined text-primary text-xl">check_circle</span>
<span class="">Pengenalan Vokal &amp; Konsonan Hangeul</span>
</li>
<li class="flex items-start gap-3 text-sm text-white/70">
<span class="material-symbols-outlined text-primary text-xl">check_circle</span>
<span class="">Sistem Bunyi &amp; Aturan Menulis</span>
</li>
<li class="flex items-start gap-3 text-sm text-white/70">
<span class="material-symbols-outlined text-primary text-xl">check_circle</span>
<span class="">Struktur Kalimat &amp; Perkenalan Diri</span>
</li>
</ul>
<button class="w-full py-4 rounded-xl bg-white text-on-background text-sm font-bold hover:bg-surface-container transition-all shadow-lg active:scale-95">Mulai Fase Dasar</button>
</div>
</div>
<!-- Step 2 -->
<div class="relative flex flex-col items-center">
<div class="w-12 h-12 rounded-full bg-[#1e293b] border-2 border-primary/50 text-primary flex items-center justify-center font-bold text-lg mb-8 relative z-10">2</div>
<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10 w-full hover:bg-white/[0.08] transition-all duration-300">
<div class="mb-6">
<h3 class="text-2xl font-bold mb-2 text-white">Bulan 2 (Menengah)</h3>
<div class="h-1 w-12 bg-primary/40 rounded-full"></div>
</div>
<ul class="space-y-4 mb-10">
<li class="flex items-start gap-3 text-sm text-white/70">
<span class="material-symbols-outlined text-primary text-xl">check_circle</span>
<span class="">Pola Kalimat Kerja &amp; Sifat Kompleks</span>
</li>
<li class="flex items-start gap-3 text-sm text-white/70">
<span class="material-symbols-outlined text-primary text-xl">check_circle</span>
<span class="">500 Kosakata Industri &amp; Kerja</span>
</li>
<li class="flex items-start gap-3 text-sm text-white/70">
<span class="material-symbols-outlined text-primary text-xl">check_circle</span>
<span class="">Simulasi Percakapan Harian &amp; Formal</span>
</li>
</ul>
<button class="w-full py-4 rounded-xl border border-white/20 text-white text-sm font-bold hover:bg-white/10 transition-all active:scale-95">Lanjutkan Belajar</button>
</div>
</div>
<!-- Step 3 -->
<div class="relative flex flex-col items-center">
<div class="w-12 h-12 rounded-full bg-[#1e293b] border-2 border-primary/50 text-primary flex items-center justify-center font-bold text-lg mb-8 relative z-10">3</div>
<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10 w-full hover:bg-white/[0.08] transition-all duration-300">
<div class="mb-6">
<h3 class="text-2xl font-bold mb-2 text-white">Bulan 3 (Ujian)</h3>
<div class="h-1 w-12 bg-primary/40 rounded-full"></div>
</div>
<ul class="space-y-4 mb-10">
<li class="flex items-start gap-3 text-sm text-white/70">
<span class="material-symbols-outlined text-primary text-xl">check_circle</span>
<span class="">Simulasi CBT EPS-TOPIK Terpadu</span>
</li>
<li class="flex items-start gap-3 text-sm text-white/70">
<span class="material-symbols-outlined text-primary text-xl">check_circle</span>
<span class="">Analisis Kelemahan &amp; Review Materi</span>
</li>
<li class="flex items-start gap-3 text-sm text-white/70">
<span class="material-symbols-outlined text-primary text-xl">check_circle</span>
<span class="">Tips &amp; Trik Mengerjakan Soal Ujian</span>
</li>
</ul>
<button class="w-full py-4 rounded-xl border border-white/20 text-white text-sm font-bold hover:bg-white/10 transition-all active:scale-95">Siap Hadapi Ujian</button>
</div>
</div>
</div>
</div></section>
<!-- Simulasi Cepat Section -->
<section class="py-section-padding px-gutter bg-white relative overflow-hidden">
<div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-container-max pointer-events-none">
<div class="absolute top-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
<div class="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/5 rounded-full blur-[100px]"></div>
</div>
<div class="max-w-container-max mx-auto">
<div class="flex flex-col items-center">
<div class="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-6 relative z-10">
<span class="text-[10px] font-black tracking-[0.2em] text-primary uppercase">Simulasi Cepat</span>
</div>
<div class="w-full max-w-3xl bg-white/40 backdrop-blur-xl border border-outline-variant/60 rounded-[40px] p-8 md:p-16 shadow-[0_40px_100px_-20px_rgba(0,74,198,0.1)] relative z-10 group overflow-hidden">
<div class="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
<span class="material-symbols-outlined text-primary text-[120px]">psychology</span>
</div>
<div class="relative z-10">
<h2 class="text-3xl md:text-4xl font-black mb-4 text-on-background tracking-tight">Mini Tryout</h2>
<p class="text-xl md:text-2xl font-medium text-primary mb-12">Manakah arti kata "Annyeong" (안녕)?</p>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
<button class="p-5 rounded-2xl border border-outline-variant bg-white/50 text-left hover:border-primary hover:bg-primary/5 transition-all flex items-center gap-4 group/opt">
<span class="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-xs font-bold group-hover/opt:bg-primary group-hover/opt:text-white transition-colors">A</span>
<span class="font-semibold">Halo / Apa Kabar</span>
</button>
<button class="p-5 rounded-2xl border border-outline-variant bg-white/50 text-left hover:border-primary hover:bg-primary/5 transition-all flex items-center gap-4 group/opt">
<span class="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-xs font-bold group-hover/opt:bg-primary group-hover/opt:text-white transition-colors">B</span>
<span class="font-semibold">Terima Kasih</span>
</button>
<button class="p-5 rounded-2xl border border-outline-variant bg-white/50 text-left hover:border-primary hover:bg-primary/5 transition-all flex items-center gap-4 group/opt">
<span class="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-xs font-bold group-hover/opt:bg-primary group-hover/opt:text-white transition-colors">C</span>
<span class="font-semibold">Selamat Makan</span>
</button>
<button class="p-5 rounded-2xl border border-outline-variant bg-white/50 text-left hover:border-primary hover:bg-primary/5 transition-all flex items-center gap-4 group/opt">
<span class="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-xs font-bold group-hover/opt:bg-primary group-hover/opt:text-white transition-colors">D</span>
<span class="font-semibold">Maaf</span>
</button>
</div>
<div class="flex justify-center">
<button class="px-12 py-5 rounded-full bg-[#2563EB] text-white text-base font-bold shadow-xl shadow-blue-500/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-3">
                            Mulai Tryout Lengkap
                            <span class="material-symbols-outlined text-lg">arrow_forward</span>
</button>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Categories -->
<section class="py-section-padding px-gutter bg-surface">
<div class="max-w-container-max mx-auto text-center mb-20">
<h2 class="text-4xl font-bold mb-4">Semua Latihan dalam Satu Platform</h2>
<p class="text-on-surface/60">Akses berbagai modul latihan spesifik untuk menajamkan kemampuan Anda.</p>
</div>
<div class="max-w-container-max mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
<div class="flex flex-col items-center p-8 bg-white rounded-3xl border border-outline-variant premium-shadow hover:shadow-lg transition-all cursor-pointer group">
<span class="material-symbols-outlined text-primary text-3xl mb-4 group-hover:scale-110 transition-transform">auto_stories</span>
<span class="text-sm font-bold text-center">Reading</span>
</div>
<div class="flex flex-col items-center p-8 bg-white rounded-3xl border border-outline-variant premium-shadow hover:shadow-lg transition-all cursor-pointer group">
<span class="material-symbols-outlined text-primary text-3xl mb-4 group-hover:scale-110 transition-transform">headphones</span>
<span class="text-sm font-bold text-center">Listening</span>
</div>
<div class="flex flex-col items-center p-8 bg-white rounded-3xl border border-outline-variant premium-shadow hover:shadow-lg transition-all cursor-pointer group">
<span class="material-symbols-outlined text-primary text-3xl mb-4 group-hover:scale-110 transition-transform">edit_note</span>
<span class="text-sm font-bold text-center">Writing</span>
</div>
<div class="flex flex-col items-center p-8 bg-white rounded-3xl border border-outline-variant premium-shadow hover:shadow-lg transition-all cursor-pointer group">
<span class="material-symbols-outlined text-primary text-3xl mb-4 group-hover:scale-110 transition-transform">record_voice_over</span>
<span class="text-sm font-bold text-center">Speaking</span>
</div>
<div class="flex flex-col items-center p-8 bg-white rounded-3xl border border-outline-variant premium-shadow hover:shadow-lg transition-all cursor-pointer group">
<span class="material-symbols-outlined text-primary text-3xl mb-4 group-hover:scale-110 transition-transform">chat</span>
<span class="text-sm font-bold text-center">Korean Slang</span>
</div>
<div class="flex flex-col items-center p-8 bg-white rounded-3xl border border-outline-variant premium-shadow hover:shadow-lg transition-all cursor-pointer group">
<span class="material-symbols-outlined text-primary text-3xl mb-4 group-hover:scale-110 transition-transform">grid_view</span>
<span class="text-sm font-bold text-center">Lainnya</span>
</div>
</div>
</section>
<!-- Partner CTA -->
<section class="py-24 px-gutter">
<div class="max-w-5xl mx-auto p-12 md:p-20 rounded-[40px] bg-primary text-on-primary text-center relative overflow-hidden">
<div class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
<div class="relative z-10">
<h2 class="text-3xl md:text-5xl font-bold mb-8">Ingin Merasakan Ujian Seperti Aslinya?</h2>
<p class="text-lg opacity-80 mb-12 max-w-2xl mx-auto">
                    Dapatkan pengalaman simulasi ujian CBT EPS-TOPIK dengan sistem pengatur waktu, kategori soal, dan laporan nilai instan di platform partner kami.
                </p>
<button class="px-10 py-5 rounded-full bg-white text-primary text-lg font-bold shadow-2xl hover:scale-105 transition-all flex items-center gap-3 mx-auto">
                    Coba Simulasi di epstopik.id
                    <span class="material-symbols-outlined">launch</span>
</button>
</div>
</div>
</section>
<!-- Blog Section -->
<section class="py-section-padding px-gutter">
<div class="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
<div class="max-w-xl">
<h2 class="text-4xl font-bold mb-4">Belajar &amp; Persiapan ke Korea dalam Satu Tempat</h2>
<p class="text-lg text-on-surface/60">Update informasi terbaru seputar karir dan edukasi di Korea Selatan.</p>
</div>
<a class="flex items-center gap-2 text-sm font-bold text-primary hover:underline" href="#">Lihat Semua Blog <span class="material-symbols-outlined">chevron_right</span></a>
</div>
<div class="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
<!-- Card 1 -->
<article class="group cursor-pointer">
<div class="relative aspect-[4/3] overflow-hidden rounded-3xl mb-6">
<img alt="Seoul" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVDDQFGfyjklVinIXMnRrYvVCV665ZSYPDxp0FJWD0InTw-VTgw9lR1uSYC8j1zL9odGT7g0XmIEZtrQwj8sjqK5bMeP20Lc9NLF3VFIOdojj7O8HX0REBsyTmINKtWyVCM76LhAiJiNeEbVagumFOF2zb8malzdjIrNbAkz01DO9yuw6eFnqBpu39pXlSTfB5mJ7w3KSs1u6tJS1Hfxa5t03mAC5ndChlxSrPHJxWmD4N8s4wJ5ivTe-ZttpCo9P5vY5pvwVCzD4">
</div>
<span class="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-3 block">Panduan Karir</span>
<h3 class="text-xl font-bold mb-4 group-hover:text-primary transition-colors">Syarat Terbaru Pendaftaran EPS-TOPIK 2024</h3>
<div class="flex items-center justify-between text-xs opacity-50 font-medium">
<span class="">5 Menit Baca</span>
<span class="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">east</span>
</div>
</article>
<!-- Card 2 -->
<article class="group cursor-pointer">
<div class="relative aspect-[4/3] overflow-hidden rounded-3xl mb-6">
<img alt="Study" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv05dCWtvONIXEIcg2IxrloKxghPlIGbzPPvGGh5sctx-oArdNTiXMDq430Nq3mc8X3WrdOJIyULzqM3xuOSC44gy04QWOZRKPufg5EjsDqYkanRRFSHIDL-YANQAZ61VfFCJsISxrUiDdgRB4z7krRAq2cBj4gRGzImUlLE5yX9CgqTXoT5B1ULWa3uRKeNpgmPAulZbkHjGx-hNQEl9W1c3gzYGuZFbPT08Q0XAbdDyFsiC3zwc2SIz6XNv31DfmKtBSU8T4zMA">
</div>
<span class="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-3 block">Tips Belajar</span>
<h3 class="text-xl font-bold mb-4 group-hover:text-primary transition-colors">Cara Cepat Hafal Kosakata Kerja EPS-TOPIK</h3>
<div class="flex items-center justify-between text-xs opacity-50 font-medium">
<span class="">8 Menit Baca</span>
<span class="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">east</span>
</div>
</article>
<!-- Card 3 -->
<article class="group cursor-pointer">
<div class="relative aspect-[4/3] overflow-hidden rounded-3xl mb-6">
<img alt="University" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARlKZljqjNwOxyWNd7KSWpH_u8SK2eeZWgnXRX_LNnIDxSdirudnvDUAw0urhGmStuTLnYCkHk4yTW1W9mqgu0rLOQBr3I3qC7XW2iekoEfWG6FD6005TWFbTuIMQKoWddQBIkQfwQ8onqzSrj_nx5blPNkxoj2Dlu4XuFX7o4BJzQd4s-zLmkwalFObDXO-H1uOEEtTrmxbWaznQwNZgJ5w6-I5dU8XgIRo4Z42f1dgtNcO8gJ2He_DA1Ng2vCnoq0AO_RyrAK98">
</div>
<span class="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-3 block">Beasiswa</span>
<h3 class="text-xl font-bold mb-4 group-hover:text-primary transition-colors">Daftar Universitas di Korea dengan Beasiswa GKS</h3>
<div class="flex items-center justify-between text-xs opacity-50 font-medium">
<span class="">12 Menit Baca</span>
<span class="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">east</span>
</div>
</article>
</div>
</section>
<!-- Final CTA -->
<section class="py-32 px-gutter bg-surface border-t border-outline-variant/30">
<div class="max-w-4xl mx-auto text-center">
<h2 class="text-4xl md:text-6xl font-black mb-10 tracking-tight">Wujudkan Impian Anda ke Korea Selatan Hari Ini</h2>
<p class="text-xl text-on-surface/60 mb-16">Gratis selamanya, akses tanpa batas ke semua materi latihan interaktif.</p>
<div class="flex flex-col sm:flex-row gap-6 justify-center">
<button class="px-14 py-6 rounded-full bg-primary text-on-primary text-lg font-bold shadow-2xl shadow-primary/30 hover:scale-105 transition-all">Mulai Latihan Gratis</button>
<button class="px-14 py-6 rounded-full border border-outline-variant bg-white text-on-surface text-lg font-bold hover:bg-surface-container transition-all">Cek Level Sekarang</button>
</div>
</div>
</section>
</main>
<footer class="bg-on-background border-t border-white/10 pt-24 pb-12 px-gutter text-white">
<div class="max-w-container-max mx-auto"><div class="grid grid-cols-1 md:grid-cols-5 gap-12 mb-24">
    <div class="md:col-span-1">
        <div class="text-3xl font-black text-white tracking-tighter mb-8">KEKOREA</div>
        <p class="text-sm text-white/60 max-w-sm mb-10 leading-relaxed">Platform edukasi terlengkap untuk persiapan kerja dan kuliah di Korea Selatan.</p>
        <div class="flex gap-4">
            <a class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors" href="#"><span class="material-symbols-outlined text-white">public</span></a>
            <a class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors" href="#"><span class="material-symbols-outlined text-white">mail</span></a>
            <a class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors" href="#"><span class="material-symbols-outlined text-white">smart_display</span></a>
        </div>
    </div>
    <div>
        <h4 class="text-xs font-black uppercase tracking-[0.2em] mb-8 text-white/40">Belajar</h4>
        <ul class="space-y-4">
            <li class=""><a class="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#">Hangul &amp; Alphabet</a></li>
            <li class=""><a class="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#">Grammar</a></li>
            <li class=""><a class="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#">Vocabulary</a></li>
        </ul>
    </div>
    <div>
        <h4 class="text-xs font-black uppercase tracking-[0.2em] mb-8 text-white/40">Ujian</h4>
        <ul class="space-y-4">
            <li class=""><a class="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#">Info Umum</a></li>
            <li class=""><a class="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#">Strategi Lulus</a></li>
            <li class=""><a class="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#">Simulasi Ujian</a></li>
        </ul>
    </div>
    <div>
        <h4 class="text-xs font-black uppercase tracking-[0.2em] mb-8 text-white/40">Latihan</h4>
        <ul class="space-y-4">
            <li class=""><a class="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#">Mini TOPIK</a></li>
            <li class=""><a class="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#">Reading Test</a></li>
            <li class=""><a class="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#">Cek Level</a></li>
        </ul>
    </div>
    <div>
        <h4 class="text-xs font-black uppercase tracking-[0.2em] mb-8 text-white/40">Info</h4>
        <ul class="space-y-4">
            <li class=""><a class="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#">Kerja &amp; Kuliah</a></li>
            <li class=""><a class="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#">Blog Storytelling</a></li>
            <li class=""><a class="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#">Hubungi Kami</a></li>
        </ul>
    </div>
</div>
<div class="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/10 gap-8">
    <p class="text-xs text-white/40 font-medium">© 2024 KEKOREA. Platform Edukasi Bahasa Korea Terpercaya.</p>
    <div class="flex gap-4">
        <span class="text-[10px] px-4 py-1.5 rounded-full border border-white/10 font-black uppercase tracking-wider text-white/40">Lulus Verifikasi Akademik</span>
        <span class="text-[10px] px-4 py-1.5 rounded-full border border-white/10 font-black uppercase tracking-wider text-white/40">Partner EPS-TOPIK.ID</span>
    </div>
</div></div>
</footer>
</body>`;

const jsxString = html
    .replace(/class=/g, 'className=')
    .replace(/<!--(.*?)-->/g, '{/* $1 */}')
    .replace(/style="font-variation-settings: 'FILL' 1;"/g, 'style={{ fontVariationSettings: "\\'FILL\\' 1" }}')
    .replace(/<img(.*?)>/g, (match, p1) => {
        if (match.endsWith('/>')) return match;
        return `<img${p1} />`;
    });

const pageContent = `"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Minimal Interactivity
    document.querySelectorAll('button, a').forEach(el => {
        const addScale = () => el.classList.add('scale-[0.98]');
        const removeScale = () => el.classList.remove('scale-[0.98]');
        el.addEventListener('mousedown', addScale);
        el.addEventListener('mouseup', removeScale);
        return () => {
            el.removeEventListener('mousedown', addScale);
            el.removeEventListener('mouseup', removeScale);
        }
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-background text-on-background selection:bg-primary/10 selection:text-primary">
${jsxString.replace(/<body[^>]*>/, '').replace(/<\/body>/, '')}
    </div>
  );
}`;

fs.writeFileSync('c:/Users/guest 1/epstopik/apps/kekorea/app/page.tsx', pageContent);

const globalsContent = `@import "tailwindcss";

@theme inline {
  --color-primary: #004ac6;
  --color-on-primary: #ffffff;
  --color-secondary: #bb0112;
  --color-on-secondary: #ffffff;
  --color-surface: #f9f9ff;
  --color-on-surface: #111c2d;
  --color-background: #ffffff;
  --color-on-background: #111c2d;
  --color-outline: #737686;
  --color-outline-variant: #e2e8f0;
  --color-surface-container: #f1f3ff;
  --color-surface-container-high: #e7eeff;
  --color-surface-container-highest: #d8e3fb;

  --spacing-margin-mobile: 20px;
  --spacing-container-max: 1280px;
  --spacing-section-padding: 120px;
  --spacing-gutter: 32px;

  --font-sans: "Inter", sans-serif;
}

.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
  vertical-align: middle;
}

body { font-family: 'Inter', sans-serif; -webkit-font-smoothing: antialiased; }
.premium-shadow { box-shadow: 0 4px 30px rgba(0, 0, 0, 0.03); }
.premium-shadow-hover:hover { box-shadow: 0 20px 40px rgba(0, 74, 198, 0.08); }
.glass-icon { background: rgba(255, 255, 255, 0.6); backdrop-filter: blur(8px); border: 1px solid rgba(255, 255, 255, 0.4); }
.text-balance { text-wrap: balance; }
`;
fs.writeFileSync('c:/Users/guest 1/epstopik/apps/kekorea/app/globals.css', globalsContent);
console.log('Done converting HTML to JSX');
