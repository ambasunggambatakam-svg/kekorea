// @ts-nocheck
'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    try {
            
      // Navbar scroll effect
      const navbar = document.getElementById('navbar');
      window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 20);
      });
      
      // Belajar tabs
      document.getElementById('belajarTabs')?.addEventListener('click', (e: any) => {
        const tab = e.target.closest('[data-tab]');
        if (!tab) return;
        document.querySelectorAll('.belajar-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.belajar-panel').forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById('tab-' + tab.dataset.tab)?.classList.add('active');
      });
      
      // Tools filter
      document.getElementById('toolsFilter').addEventListener('click', (e) => {
        const btn = e.target.closest('[data-filter]');
        if (!btn) return;
        document.querySelectorAll('.tools-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        document.querySelectorAll('.tool-card').forEach(card => {
          const show = filter === 'all' || card.dataset.cat === filter;
          card.style.display = show ? '' : 'none';
        });
      });
      
      // Animate progress bars on scroll
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
          }
        });
      }, { threshold: 0.2 });
      document.querySelectorAll('.quiz-prog-fill').forEach(el => observer.observe(el));
      
      // Roadmap scroll animation
      const roadmapObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('rv-visible');
          }
        });
      }, { threshold: 0.3 });
      document.querySelectorAll('.rv-step:not(.rv-active)').forEach(el => roadmapObserver.observe(el));
      
      // Smooth scroll for CTA buttons
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          const href = this.getAttribute('href');
          if (href === '#') {
            e.preventDefault();
            return;
          }
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            navMenu.classList.remove('open');
          }
        });
      });
      
      // Tools search filter
      function filterToolsBySearch(query) {
        const q = query.toLowerCase().trim();
        document.querySelectorAll('.tool-card').forEach(card => {
          const name = card.querySelector('h5')?.textContent.toLowerCase() || '';
          card.style.display = (!q || name.includes(q)) ? '' : 'none';
        });
        // Reset category filter when searching
        if (q) {
          document.querySelectorAll('.tools-filter-btn').forEach(b => b.classList.remove('active'));
        }
      }
      
      
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <main dangerouslySetInnerHTML={{ __html: `

<!-- NAVBAR -->
<nav class="navbar" id="navbar">
  <div class="container nav-container">
    <a href="/" class="nav-logo">
      <span class="logo-ke">ke</span><span class="logo-korea">korea</span><span class="logo-dot">.com</span>
    </a>
    <button class="nav-toggle" id="navToggle" aria-label="Buka menu">
      <span></span><span></span><span></span>
    </button>
    <ul class="nav-menu" id="navMenu">
      <!-- Belajar Bahasa Korea -->
      <li class="nav-item">
        <span class="nav-link">
          Belajar
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </span>
        <div class="nav-dropdown nav-mega">
          <div class="nav-mega-grid">
            <div class="nav-mega-section">
              <div class="nav-mega-title">Hangul &amp; Alfabet</div>
              <a href="#" class="nav-dropdown-item">
                <div class="nav-dropdown-icon">ㄱ</div>
                <div class="nav-dropdown-item-text">
                  <span>Latihan Huruf</span>
                  <span class="nav-dropdown-label">Pilih per huruf</span>
                </div>
              </a>
              <a href="#" class="nav-dropdown-item">
                <div class="nav-dropdown-icon">읽</div>
                <div class="nav-dropdown-item-text">
                  <span>Latihan Membaca</span>
                  <span class="nav-dropdown-label">Hangul dasar</span>
                </div>
              </a>
              <a href="#" class="nav-dropdown-item">
                <div class="nav-dropdown-icon">쓰</div>
                <div class="nav-dropdown-item-text">
                  <span>Latihan Menulis</span>
                  <span class="nav-dropdown-label">Tulis huruf Korea</span>
                </div>
              </a>
            </div>
            <div class="nav-mega-section">
              <div class="nav-mega-title">Grammar &amp; Vocabulary</div>
              <a href="#" class="nav-dropdown-item">
                <div class="nav-dropdown-icon" style="font-size:11px;font-weight:700;">문법</div>
                <div class="nav-dropdown-item-text">
                  <span>Grammar Dasar</span>
                  <span class="nav-dropdown-label">Pola kalimat &amp; partikel</span>
                </div>
              </a>
              <a href="#" class="nav-dropdown-item">
                <div class="nav-dropdown-icon" style="font-size:11px;font-weight:700;">단어</div>
                <div class="nav-dropdown-item-text">
                  <span>Vocabulary Harian</span>
                  <span class="nav-dropdown-label">Kosakata sehari-hari</span>
                </div>
              </a>
              <a href="#" class="nav-dropdown-item">
                <div class="nav-dropdown-icon" style="font-size:11px;font-weight:700;">심화</div>
                <div class="nav-dropdown-item-text">
                  <span>Lanjutan</span>
                  <span class="nav-dropdown-label">Partikel &amp; sinonim</span>
                </div>
              </a>
            </div>
            <div class="nav-mega-section">
              <div class="nav-mega-title">Listening &amp; Speaking</div>
              <a href="#" class="nav-dropdown-item">
                <div class="nav-dropdown-icon" style="background:#EFF6FF;color:#2563EB;">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="width:16px;height:16px;"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"></path><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
                </div>
                <div class="nav-dropdown-item-text">
                  <span>Listening Audio</span>
                  <span class="nav-dropdown-label">Dengan audio interaktif</span>
                </div>
              </a>
              <a href="#" class="nav-dropdown-item">
                <div class="nav-dropdown-icon" style="background:#EFF6FF;color:#2563EB;">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="width:16px;height:16px;"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
                </div>
                <div class="nav-dropdown-item-text">
                  <span>Speaking &amp; Pronuniasi</span>
                  <span class="nav-dropdown-label">Latihan ucapan</span>
                </div>
              </a>
              <a href="#" class="nav-dropdown-item">
                <div class="nav-dropdown-icon" style="background:#EFF6FF;color:#2563EB;">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="width:16px;height:16px;"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                </div>
                <div class="nav-dropdown-item-text">
                  <span>Mini Quiz Tools</span>
                  <span class="nav-dropdown-label">Tebak arti &amp; kalimat</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </li>

      <!-- TOPIK & EPS-TOPIK -->
      <li class="nav-item">
        <span class="nav-link">
          Ujian
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </span>
        <div class="nav-dropdown" style="min-width:200px;">
          <a href="#" class="nav-dropdown-item">
            <div class="nav-dropdown-icon" style="background:#EFF6FF;color:#2563EB;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="width:16px;height:16px;"><rect x="2" y="7" width="20" height="14" rx="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
            </div>
            <div class="nav-dropdown-item-text">
              <span>EPS-TOPIK</span>
              <span class="nav-dropdown-label">Kerja di Korea</span>
            </div>
          </a>
          <a href="#" class="nav-dropdown-item">
            <div class="nav-dropdown-icon" style="background:#EFF6FF;color:#2563EB;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="width:16px;height:16px;"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
            </div>
            <div class="nav-dropdown-item-text">
              <span>TOPIK I &amp; II</span>
              <span class="nav-dropdown-label">Level 1–6</span>
            </div>
          </a>
          <a href="#" class="nav-dropdown-item">
            <div class="nav-dropdown-icon" style="font-size:11px;font-weight:700;background:#EFF6FF;color:#2563EB;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="width:16px;height:16px;"><rect x="2" y="3" width="20" height="14" rx="2"></rect><path d="M8 21h8m-4-4v4"></path></svg>
            </div>
            <div class="nav-dropdown-item-text">
              <span>Simulasi CBT</span>
              <span class="nav-dropdown-label">Tryout online</span>
            </div>
          </a>
          <a href="#" class="nav-dropdown-item">
            <div class="nav-dropdown-icon" style="background:#EFF6FF;color:#2563EB;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="width:16px;height:16px;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <div class="nav-dropdown-item-text">
              <span>Strategi Lulus</span>
              <span class="nav-dropdown-label">Tips &amp; passing grade</span>
            </div>
          </a>
        </div>
      </li>

      <!-- Tools / Latihan -->
      <li class="nav-item">
        <span class="nav-link">
          Tools
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </span>
        <div class="nav-dropdown nav-mega">
          <div class="nav-mega-grid">
            <div class="nav-mega-section">
              <div class="nav-mega-title">Latihan &amp; Tes</div>
              <a href="#" class="nav-dropdown-item"><div class="nav-dropdown-icon" style="background:#EFF6FF;color:#2563EB;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="width:16px;height:16px;"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div><div class="nav-dropdown-item-text"><span>Mini TOPIK (1–20)</span><span class="nav-dropdown-label">Simulasi soal TOPIK</span></div></a>
              <a href="#" class="nav-dropdown-item"><div class="nav-dropdown-icon" style="background:#EFF6FF;color:#2563EB;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="width:16px;height:16px;"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"></path><rect x="9" y="3" width="6" height="4" rx="2"></rect><polyline points="9 12 11 14 15 10"></polyline></svg></div><div class="nav-dropdown-item-text"><span>EPS-TOPIK (Latihan)</span><span class="nav-dropdown-label">Soal EPS-TOPIK</span></div></a>
              <a href="#" class="nav-dropdown-item"><div class="nav-dropdown-icon" style="background:#EFF6FF;color:#2563EB;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="width:16px;height:16px;"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg></div><div class="nav-dropdown-item-text"><span>Cek Level Korea</span><span class="nav-dropdown-label">Tes kemampuanmu</span></div></a>
            </div>
            <div class="nav-mega-section">
              <div class="nav-mega-title">Vocabulary &amp; Grammar</div>
              <a href="#" class="nav-dropdown-item"><div class="nav-dropdown-icon" style="background:#EFF6FF;color:#2563EB;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="width:16px;height:16px;"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg></div><div class="nav-dropdown-item-text"><span>Tebak Arti Kata</span><span class="nav-dropdown-label">21–40</span></div></a>
              <a href="#" class="nav-dropdown-item"><div class="nav-dropdown-icon" style="background:#EFF6FF;color:#2563EB;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="width:16px;height:16px;"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></div><div class="nav-dropdown-item-text"><span>Latihan Partikel</span><span class="nav-dropdown-label">은/는/이/가</span></div></a>
              <a href="#" class="nav-dropdown-item"><div class="nav-dropdown-icon" style="background:#EFF6FF;color:#2563EB;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="width:16px;height:16px;"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg></div><div class="nav-dropdown-item-text"><span>Tebak K-Pop Lirik</span><span class="nav-dropdown-label">Fun + belajar</span></div></a>
            </div>
            <div class="nav-mega-section">
              <div class="nav-mega-title">Kalkulator &amp; Persiapan</div>
              <a href="#" class="nav-dropdown-item"><div class="nav-dropdown-icon" style="background:#EFF6FF;color:#2563EB;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="width:16px;height:16px;"><rect x="4" y="2" width="16" height="20" rx="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="8" y1="10" x2="16" y2="10"></line><line x1="8" y1="14" x2="12" y2="14"></line></svg></div><div class="nav-dropdown-item-text"><span>Kalkulator Skor TOPIK</span><span class="nav-dropdown-label">41–60</span></div></a>
              <a href="#" class="nav-dropdown-item"><div class="nav-dropdown-icon" style="background:#EFF6FF;color:#2563EB;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="width:16px;height:16px;"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg></div><div class="nav-dropdown-item-text"><span>Estimasi Gaji Korea</span><span class="nav-dropdown-label">Kurs &amp; biaya hidup</span></div></a>
              <a href="#" class="nav-dropdown-item"><div class="nav-dropdown-icon" style="background:#EFF6FF;color:#2563EB;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="width:16px;height:16px;"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg></div><div class="nav-dropdown-item-text"><span>Checklist ke Korea</span><span class="nav-dropdown-label">81–100</span></div></a>
            </div>
          </div>
        </div>
      </li>

      <!-- Kerja & Kuliah -->
      <li class="nav-item">
        <span class="nav-link">
          Korea
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </span>
        <div class="nav-dropdown" style="min-width:210px;">
          <a href="#" class="nav-dropdown-item"><div class="nav-dropdown-icon" style="background:#EFF6FF;color:#2563EB;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="width:16px;height:16px;"><rect x="2" y="7" width="20" height="14" rx="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg></div><div class="nav-dropdown-item-text"><span>Kerja di Korea</span><span class="nav-dropdown-label">Syarat, gaji, tips seleksi</span></div></a>
          <a href="#" class="nav-dropdown-item"><div class="nav-dropdown-icon" style="background:#EFF6FF;color:#2563EB;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="width:16px;height:16px;"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path></svg></div><div class="nav-dropdown-item-text"><span>Kuliah di Korea</span><span class="nav-dropdown-label">Beasiswa &amp; universitas</span></div></a>
          <a href="#" class="nav-dropdown-item"><div class="nav-dropdown-icon" style="background:#EFF6FF;color:#2563EB;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="width:16px;height:16px;"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></div><div class="nav-dropdown-item-text"><span>Kehidupan di Korea</span><span class="nav-dropdown-label">Biaya hidup &amp; adaptasi</span></div></a>
        </div>
      </li>

      <!-- Perjalanan -->
      <li class="nav-item">
        <a href="#komunitas" class="nav-link">Komunitas</a>
      </li>
      <li class="nav-item">
        <a href="#artikel" class="nav-link">Korea Insight</a>
      </li>

      <li style="display:flex;align-items:center;gap:6px;margin-left:8px;">
        <a href="https://epstopik.id" class="nav-badge" target="_blank" rel="noopener" title="Sub-platform EPS-TOPIK">epstopik.id ↗</a>
        <a href="https://hanguko.id" class="nav-badge nav-badge--blue" target="_blank" rel="noopener" title="Sub-platform TOPIK &amp; Bahasa Korea">hanguko.id ↗</a>
      </li>
      <li><a href="#mulai" class="btn btn-primary btn-sm">Mulai Latihan</a></li>
    </ul>
  </div>
</nav>

<!-- ═══════════════════════════════════════════
     HERO
════════════════════════════════════════════ -->
<section class="hero" id="hero">
  <div class="hero-deco-arc"></div>
  <div class="hero-hangul-deco">한</div>
  <div class="hero-accent-bar"></div>
  <div class="hero-container">
    <div class="hero-content">
      <div class="hero-ecosystem-badge">
        <span class="eco-dot"></span>
        Platform Belajar Bahasa Korea #1 Indonesia
      </div>
      <h1 class="hero-title">
        Belajar Bahasa Korea<br>dari Nol hingga <span class="hl">Siap TOPIK,</span><br><span class="hl-red">EPS-TOPIK, dan Karier ke Korea</span>
      </h1>
      <p class="hero-sub">
        Belajar Hangul, tata bahasa, kosakata, latihan TOPIK, simulasi EPS-TOPIK, dan akses <strong>100+ tools belajar</strong> dalam satu platform yang terstruktur untuk pembelajar Indonesia.
      </p>
      <div class="hero-cta">
        <a href="#mulai" class="btn btn-primary btn-lg">
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          Mulai Belajar Gratis
        </a>
        <a href="#ekosistem" class="btn btn-outline-white btn-lg">
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path></svg>
          Jelajahi Platform
        </a>
      </div>
      <!-- Hero Social Proof -->
      <div class="hero-social-proof">
        <span class="hsp-stars" style="display:flex;gap:3px;align-items:center;">
          <svg style="width:14px;height:14px;filter:drop-shadow(0 0 3px rgba(245,200,80,.5));" viewBox="0 0 24 24"><defs><linearGradient id="hsg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FFE066"></stop><stop offset="100%" stop-color="#F5A623"></stop></linearGradient></defs><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="url(#hsg)"></polygon></svg>
          <svg style="width:14px;height:14px;filter:drop-shadow(0 0 3px rgba(245,200,80,.5));" viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="url(#hsg)"></polygon></svg>
          <svg style="width:14px;height:14px;filter:drop-shadow(0 0 3px rgba(245,200,80,.5));" viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="url(#hsg)"></polygon></svg>
          <svg style="width:14px;height:14px;filter:drop-shadow(0 0 3px rgba(245,200,80,.5));" viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="url(#hsg)"></polygon></svg>
          <svg style="width:14px;height:14px;filter:drop-shadow(0 0 3px rgba(245,200,80,.5));" viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="url(#hsg)"></polygon></svg>
        </span>
        <span class="hsp-text">Dipercaya <strong>10.000+ pengguna aktif</strong> — 10.000+ soal • 100+ tools • komunitas aktif</span>
      </div>
      <!-- Hero Intent Navigation -->
      <div class="hero-intent-nav">
        <span class="hint-label">Saya ingin:</span>
        <div class="hint-chips">
          <a href="#belajar" class="hint-chip">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="width:13px;height:13px;"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
            Belajar Hangul
          </a>
          <a href="#ujian" class="hint-chip">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="width:13px;height:13px;"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            Lulus TOPIK
          </a>
          <a href="#eps" class="hint-chip hint-chip-red">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="width:13px;height:13px;"><rect x="2" y="7" width="20" height="14" rx="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
            EPS-TOPIK
          </a>
          <a href="#tujuan" class="hint-chip hint-chip-green">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="width:13px;height:13px;"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h20"></path></svg>
            Kerja ke Korea
          </a>
        </div>
      </div>
      <div class="hero-sub-platforms">
        <span class="hero-sub-label">Platform dalam ekosistem:</span>
        <a href="https://epstopik.id" class="hero-platform-chip eps" target="_blank">
          <span class="chip-dot"></span>
          epstopik.id
        </a>
        <a href="https://hanguko.id" class="hero-platform-chip hanguko" target="_blank">
          <span class="chip-dot"></span>
          hanguko.id
        </a>
      </div>
    </div>
    <div class="hero-visual" style="position:relative;">
      <!-- Floating ecosystem pills -->
      <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px;justify-content:flex-end;">
        <span style="display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,.09);border:1px solid rgba(255,255,255,.14);padding:6px 14px;border-radius:100px;font-size:12px;font-weight:600;color:rgba(255,255,255,.85);">
          <svg style="width:12px;height:12px;color:#93C5FD;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
          Belajar Korea
        </span>
        <span style="display:inline-flex;align-items:center;gap:6px;background:rgba(59,130,246,.18);border:1px solid rgba(96,165,250,.3);padding:6px 14px;border-radius:100px;font-size:12px;font-weight:600;color:#93C5FD;">
          <svg style="width:12px;height:12px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          TOPIK I–VI
        </span>
        <span style="display:inline-flex;align-items:center;gap:6px;background:rgba(220,38,38,.18);border:1px solid rgba(248,113,113,.3);padding:6px 14px;border-radius:100px;font-size:12px;font-weight:600;color:#FCA5A5;">
          <svg style="width:12px;height:12px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><rect x="2" y="7" width="20" height="14" rx="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
          EPS-TOPIK
        </span>
        <span style="display:inline-flex;align-items:center;gap:6px;background:rgba(245,158,11,.15);border:1px solid rgba(252,211,77,.25);padding:6px 14px;border-radius:100px;font-size:12px;font-weight:600;color:#FCD34D;">
          <svg style="width:12px;height:12px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><rect x="2" y="3" width="20" height="14" rx="2"></rect></svg>
          100+ Tools
        </span>
        <span style="display:inline-flex;align-items:center;gap:6px;background:rgba(5,150,105,.15);border:1px solid rgba(111,217,155,.25);padding:6px 14px;border-radius:100px;font-size:12px;font-weight:600;color:#6FD99B;">
          <svg style="width:12px;height:12px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
          Komunitas
        </span>
        <span style="display:inline-flex;align-items:center;gap:6px;background:rgba(124,58,237,.15);border:1px solid rgba(167,139,250,.25);padding:6px 14px;border-radius:100px;font-size:12px;font-weight:600;color:#C4B5FD;">
          <svg style="width:12px;height:12px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10"></path><path d="M2 12h20"></path></svg>
          Info Korea
        </span>
      </div>
      <div class="quiz-card-mockup">
        <div class="quiz-card-top">
          <span class="quiz-card-label">Mini Test TOPIK</span>
          <span class="quiz-timer-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            02:45
          </span>
        </div>
        <div class="quiz-progress">
          <div class="quiz-prog-bar"><div class="quiz-prog-fill"></div></div>
          <span class="quiz-prog-text">Soal 2 dari 5 • Progress 40%</span>
        </div>
        <div class="quiz-question-ko">다음 중 올바른 문장은 무엇입니까?</div>
        <div class="quiz-question-id">Manakah kalimat yang benar di bawah ini?</div>
        <div class="quiz-options">
          <div class="quiz-opt">
            <span class="quiz-opt-letter">A</span>
            <span>저는 학생이에요</span>
          </div>
          <div class="quiz-opt correct">
            <span class="quiz-opt-letter">B</span>
            <span>나는 학교에 가요</span>
            <svg style="width:16px;height:16px;margin-left:auto;flex-shrink:0;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="quiz-opt">
            <span class="quiz-opt-letter">C</span>
            <span>우리는 친구야</span>
          </div>
          <div class="quiz-opt">
            <span class="quiz-opt-letter">D</span>
            <span>그들은 집이다</span>
          </div>
        </div>
        <button class="quiz-submit-btn">Lanjut Soal Berikutnya →</button>
      </div>
      <div class="hero-float-3"><span class="float-dot red"></span> Kerja &amp; Kuliah di Korea</div>
      <div class="hero-float-1"><span class="float-dot"></span> 100.000+ Pengguna</div>
      <div class="hero-float-2"><span class="float-dot yellow"></span> Lulus EPS-TOPIK &amp; TOPIK</div>
    </div>
  </div>
  <div class="hero-wave">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" preserveAspectRatio="none">
      <path fill="#F8FAFC" d="M0,40L60,42.7C120,45,240,51,360,50.7C480,51,600,45,720,42.7C840,40,960,40,1080,42.7C1200,45,1320,51,1380,53.3L1440,56L1440,80L0,80Z"></path>
    </svg>
  </div>
</section>

<!-- ═══════════════════════════════════════════
     STATS BAR
════════════════════════════════════════════ -->
<div class="stats-bar">
  <div class="container">
    <div class="stats-grid">
      <div class="stat-item">
        <div class="stat-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
        </div>
        <div>
          <div class="stat-number">10.000+</div>
          <div class="stat-label">Pengguna Aktif Indonesia</div>
        </div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
        </div>
        <div>
          <div class="stat-number">10.000+</div>
          <div class="stat-label">Soal TOPIK &amp; EPS-TOPIK</div>
        </div>
      </div>
      <div class="stat-item">
        <div class="stat-icon" style="background:rgba(245,158,11,.1);color:#D97706;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="2" y="3" width="20" height="14" rx="2"></rect><path d="M8 21h8m-4-4v4"></path></svg>
        </div>
        <div>
          <div class="stat-number">100+</div>
          <div class="stat-label">Tools Belajar Korea</div>
        </div>
      </div>
      <div class="stat-item">
        <div class="stat-icon" style="background:rgba(5,150,105,.1); color:#059669;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
        </div>
        <div>
          <div class="stat-number">500+</div>
          <div class="stat-label">Materi dari Hangul ke Karier</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ═══════════════════════════════════════════
     EKOSISTEM OVERVIEW — V3 NEW
════════════════════════════════════════════ -->
<section class="ecosystem-section" id="ekosistem">
  <div class="container">
    <div class="ecosystem-header">
      <div class="ecosystem-label">
        <svg style="width:13px;height:13px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h20"></path></svg>
        Ekosistem Korea Indonesia
      </div>
      <h2 class="ecosystem-title">Tiga Platform, Satu Ekosistem<br>yang Terintegrasi</h2>
      <p class="ecosystem-sub">kekorea.com adalah pusat ekosistem yang menaungi seluruh perjalanan Anda — dari belajar bahasa, persiapan ujian, hingga karier dan kehidupan di Korea.</p>
    </div>

    <!-- Parent Card: kekorea.com -->
    <div class="eco-parent-wrap">
      <div class="eco-parent-card">
        <div class="eco-parent-content">
          <div class="eco-parent-tag">
            <svg style="width:11px;height:11px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            Platform Induk
          </div>
          <div class="eco-parent-logo">
            <span class="ke">ke</span><span class="korea">korea</span><span class="dot">.com</span>
          </div>
          <p class="eco-parent-desc">Platform ekosistem utama yang menyatukan belajar bahasa Korea, karier, komunitas, tools, dan informasi Korea dalam satu pengalaman yang mulus dan terstruktur.</p>
          <div class="eco-parent-pillars">
            <span class="eco-pillar-tag">
              <svg style="width:12px;height:12px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
              Belajar
            </span>
            <span class="eco-pillar-tag">
              <svg style="width:12px;height:12px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
              Karier
            </span>
            <span class="eco-pillar-tag">
              <svg style="width:12px;height:12px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              Komunitas
            </span>
            <span class="eco-pillar-tag">
              <svg style="width:12px;height:12px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
              Tools
            </span>
            <span class="eco-pillar-tag">
              <svg style="width:12px;height:12px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h20"></path></svg>
              Korea Insight
            </span>
          </div>
        </div>
        <div class="eco-parent-visual">
          <div class="eco-parent-stat-grid">
            <div class="eco-parent-stat">
              <div class="eco-parent-stat-num">100<span>K+</span></div>
              <div class="eco-parent-stat-label">Pengguna Aktif</div>
            </div>
            <div class="eco-parent-stat">
              <div class="eco-parent-stat-num">500<span>+</span></div>
              <div class="eco-parent-stat-label">Materi &amp; Konten</div>
            </div>
            <div class="eco-parent-stat">
              <div class="eco-parent-stat-num">100<span>+</span></div>
              <div class="eco-parent-stat-label">Tools Praktis</div>
            </div>
            <div class="eco-parent-stat">
              <div class="eco-parent-stat-num">10<span>K+</span></div>
              <div class="eco-parent-stat-label">Anggota Komunitas</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Connector Visual -->
    <div class="eco-connector" style="text-align:center;padding:18px 0 4px;position:relative;height:60px;display:flex;align-items:center;justify-content:center;">
      <div style="position:absolute;top:0;left:50%;width:2px;height:28px;background:linear-gradient(180deg,rgba(37,99,235,.35),rgba(37,99,235,.1));transform:translateX(-50%);"></div>
      <div style="display:flex;align-items:center;width:100%;max-width:640px;margin-top:28px;">
        <div style="flex:1;height:1.5px;background:linear-gradient(90deg,transparent,rgba(37,99,235,.2));"></div>
        <div style="width:28px;height:28px;border-radius:50%;background:var(--blue-light);border:1.5px solid rgba(37,99,235,.2);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:13px;">⬇</div>
        <div style="flex:1;height:1.5px;background:linear-gradient(270deg,transparent,rgba(37,99,235,.2));"></div>
      </div>
      <div style="position:absolute;bottom:-4px;left:calc(50% - 200px);width:2px;height:24px;background:linear-gradient(180deg,rgba(220,38,38,.2),transparent);"></div>
      <div style="position:absolute;bottom:-4px;right:calc(50% - 200px);width:2px;height:24px;background:linear-gradient(180deg,rgba(37,99,235,.2),transparent);"></div>
    </div>

    <!-- Child Platform Cards -->
    <div class="eco-children-grid">
      <!-- epstopik.id -->
      <div class="eco-child-card eps-card">
        <div class="eco-child-glow"></div>
        <span class="eco-child-badge">Sub-Platform</span>
        <div class="eco-child-content">
          <div class="eco-child-tag">
            <svg style="width:10px;height:10px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
            Ujian &amp; Simulasi
          </div>
          <div class="eco-child-logo"><span>eps</span>topik.id</div>
          <p class="eco-child-desc">Platform simulasi ujian CBT EPS-TOPIK yang dirancang untuk mereplikasi kondisi ujian asli — untuk meningkatkan kesiapan dan kepercayaan diri sebelum hari H.</p>
          <ul class="eco-child-features">
            <li class="eco-child-feat">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Full CBT simulasi 30–50 soal seperti ujian asli
            </li>
            <li class="eco-child-feat">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Timer ujian + analisis skor &amp; pembahasan lengkap
            </li>
            <li class="eco-child-feat">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Prediksi peluang lulus berdasarkan skor kamu
            </li>
            <li class="eco-child-feat">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Terintegrasi penuh dengan ekosistem kekorea.com
            </li>
          </ul>
          <a href="https://epstopik.id" class="eco-child-cta" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Coba Simulasi di epstopik.id
          </a>
        </div>
      </div>

      <!-- hanguko.id -->
      <div class="eco-child-card hanguko-card">
        <div class="eco-child-glow"></div>
        <span class="eco-child-badge">Sub-Platform</span>
        <div class="eco-child-content">
          <div class="eco-child-tag">
            <svg style="width:10px;height:10px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path></svg>
            Bahasa &amp; TOPIK
          </div>
          <div class="eco-child-logo"><span>hanguko</span>.id</div>
          <p class="eco-child-desc">Platform belajar TOPIK Level 1–6 untuk kamu yang bermimpi berkuliah di universitas Korea atau ingin menguasai bahasa Korea secara formal dan terstruktur.</p>
          <ul class="eco-child-features">
            <li class="eco-child-feat">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Materi TOPIK I &amp; II (Level 1–6) selengkap-lengkapnya
            </li>
            <li class="eco-child-feat">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Panduan khusus masuk universitas Korea &amp; beasiswa
            </li>
            <li class="eco-child-feat">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Simulasi ujian TOPIK realistis + pembahasan detail
            </li>
            <li class="eco-child-feat">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Terintegrasi penuh dengan ekosistem kekorea.com
            </li>
          </ul>
          <a href="https://hanguko.id" class="eco-child-cta" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path></svg>
            Belajar TOPIK di hanguko.id
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════
     PILIH TUJUAN — NEW WIREFRAME
════════════════════════════════════════════ -->
<section class="tujuan-section" id="tujuan">
  <div class="container">
    <div class="section-header section-header--center">
      <span class="section-eyebrow">Mulai dari Tujuanmu</span>
      <h2 class="section-title">Apa Tujuan Kamu ke Korea?</h2>
      <p class="section-sub">Pilih jalur yang sesuai — kami siapkan konten, tools, dan panduan yang tepat untuk kamu.</p>
    </div>
    <div class="tujuan-grid">
      <div class="tujuan-card kerja">
        <span class="tujuan-badge" style="background:#FEF2F2;color:#DC2626;">High Demand</span>
        <div class="tujuan-icon-wrap" style="background:#FEF2F2;">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
        </div>
        <h3>Kerja di Korea</h3>
        <p>Siap lulus EPS-TOPIK &amp; berangkat kerja di Korea. Panduan lengkap dari nol.</p>
        <div class="tujuan-path">
          <span>EPS-TOPIK</span><span>Vocab Kerja</span><span>Interview</span><span>Visa TKI</span>
        </div>
        <div class="tujuan-cta-row">Mulai Persiapan
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
        </div>
      </div>
      <div class="tujuan-card kuliah">
        <span class="tujuan-badge" style="background:#EFF6FF;color:#2563EB;">TOPIK I–VI</span>
        <div class="tujuan-icon-wrap" style="background:#EFF6FF;">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
        </div>
        <h3>Kuliah di Korea</h3>
        <p>Persiapan TOPIK Level 1–6 untuk masuk universitas Korea impianmu.</p>
        <div class="tujuan-path">
          <span>TOPIK</span><span>Beasiswa</span><span>Pendaftaran</span><span>Kampus Korea</span>
        </div>
        <div class="tujuan-cta-row">Mulai Persiapan
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
        </div>
      </div>
      <div class="tujuan-card belajar">
        <span class="tujuan-badge" style="background:#ECFDF5;color:#059669;">Gratis</span>
        <div class="tujuan-icon-wrap" style="background:#ECFDF5;">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
        </div>
        <h3>Belajar Bahasa Korea</h3>
        <p>Dari Hangul nol besar hingga fasih percakapan — belajar terstruktur &amp; gratis.</p>
        <div class="tujuan-path">
          <span>Hangul</span><span>Grammar</span><span>Vocabulary</span><span>Listening</span>
        </div>
        <div class="tujuan-cta-row">Mulai Belajar
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
        </div>
      </div>
      <div class="tujuan-card tinggal">
        <span class="tujuan-badge" style="background:#F5F3FF;color:#7C3AED;">Lifestyle</span>
        <div class="tujuan-icon-wrap" style="background:#F5F3FF;">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
        </div>
        <h3>Kehidupan di Korea</h3>
        <p>Panduan hidup, biaya, budaya, dan adaptasi kehidupan sehari-hari di Korea.</p>
        <div class="tujuan-path">
          <span>Biaya Hidup</span><span>Budaya</span><span>Tips Adaptasi</span><span>Komunitas</span>
        </div>
        <div class="tujuan-cta-row">Lihat Panduan
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════
     POSITIONING — 3 Pilar
════════════════════════════════════════════ -->
<section class="positioning" id="tentang">
  <div class="container">
    <div class="section-header section-header--center">
      <span class="section-eyebrow">Belajar Bahasa Korea untuk Siapa Saja</span>
      <h2 class="section-title">Kamu Ada di Mana<br>dalam Perjalanan ini?</h2>
      <p class="section-sub">Kekorea dirancang untuk semua tahap — dari pemula yang belum tahu Hangul, hingga yang siap berangkat ke Korea.</p>
    </div>
    <div class="pos-grid">
      <div class="pos-card">
        <div class="pos-icon-wrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
        </div>
        <h3>Saya Pemula</h3>
        <p>Belum bisa membaca Hangul dan ingin belajar bahasa Korea dari nol — terstruktur, bertahap, dan gratis.</p>
        <a href="#belajar" class="pos-link">Mulai dari Hangul
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
        </a>
      </div>
      <div class="pos-card red-accent">
        <div class="pos-icon-wrap red">
          <svg viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
        </div>
        <h3>Saya Persiapan TOPIK</h3>
        <p>Fokus meningkatkan kemampuan bahasa Korea dan skor TOPIK — dengan latihan soal terstruktur, simulasi ujian, dan pembahasan lengkap.</p>
        <a href="#ujian" class="pos-link red">Latihan TOPIK
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
        </a>
      </div>
      <div class="pos-card green-accent">
        <div class="pos-icon-wrap green">
          <svg viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
        </div>
        <h3>Saya Ingin Kerja ke Korea</h3>
        <p>Fokus EPS-TOPIK dan persiapan karier ke Korea — simulasi CBT, latihan soal, vocab kerja, hingga panduan visa TKI.</p>
        <a href="#eps" class="pos-link green">Siapkan EPS-TOPIK
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
        </a>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════
     PLATFORM STATISTICS
════════════════════════════════════════════ -->
<section class="platform-stats">
  <div class="container">
    <div class="ps-grid">
      <div class="ps-item">
        <div class="ps-number">10.000<span>+</span></div>
        <div class="ps-label">Soal TOPIK &amp; EPS-TOPIK</div>
        <div class="ps-sublabel">terupdate, berlevel, lengkap dengan pembahasan</div>
      </div>
      <div class="ps-item">
        <div class="ps-number">100<span>+</span></div>
        <div class="ps-label">Tools Belajar Bahasa Korea</div>
        <div class="ps-sublabel">dari Hangul hingga kalkulator gaji Korea</div>
      </div>
      <div class="ps-item">
        <div class="ps-number">500<span>+</span></div>
        <div class="ps-label">Materi Pembelajaran</div>
        <div class="ps-sublabel">Hangul, Grammar, Vocab, Listening</div>
      </div>
      <div class="ps-item">
        <div class="ps-number">10.000<span>+</span></div>
        <div class="ps-label">Pengguna Aktif</div>
        <div class="ps-sublabel">pelajar, profesional &amp; alumni Korea</div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════
     PROOF SECTION — NEW V9
════════════════════════════════════════════ -->
<section style="padding:72px 0;background:var(--white);">
  <div class="container">
    <div class="section-header section-header--center">
      <span class="section-eyebrow">Platform Belajar Bahasa Korea Terlengkap</span>
      <h2 class="section-title">Semua yang Kamu Butuhkan<br>Ada di Satu Tempat</h2>
      <p class="section-sub">Tidak perlu berpindah-pindah platform. Dari belajar Hangul hingga persiapan karier ke Korea — Kekorea menyediakan segalanya.</p>
    </div>
    <div class="proof-grid-3col">
      <div class="pos-card">
        <div class="pos-icon-wrap" style="background:#FEF2F2;">
          <svg viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
        </div>
        <h3>10.000+ Soal TOPIK &amp; EPS-TOPIK</h3>
        <p>Soal latihan terupdate dan berlevel — dari TOPIK I hingga Level 6, dan paket lengkap EPS-TOPIK dengan pembahasan tiap soal.</p>
      </div>
      <div class="pos-card">
        <div class="pos-icon-wrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="1.8" stroke-linecap="round"><rect x="2" y="3" width="20" height="14" rx="2"></rect><path d="M8 21h8m-4-4v4"></path></svg>
        </div>
        <h3>100+ Tools Belajar Bahasa Korea</h3>
        <p>Kalkulator skor TOPIK, latihan Hangul interaktif, kamus Korea–Indonesia, flashcard kosakata, hingga kalkulator gaji Korea.</p>
      </div>
      <div class="pos-card green-accent">
        <div class="pos-icon-wrap green">
          <svg viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="1.8" stroke-linecap="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
        </div>
        <h3>Materi dari Hangul hingga Persiapan Karier</h3>
        <p>Roadmap belajar terstruktur — dari alfabet Korea pertama hingga siap lulus ujian dan berangkat kerja ke Korea.</p>
      </div>
      <div class="pos-card">
        <div class="pos-icon-wrap" style="background:#F5F3FF;">
          <svg viewBox="0 0 24 24" fill="none" stroke="#7C3AED" stroke-width="1.8" stroke-linecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
        </div>
        <h3>Komunitas Aktif Pelajar Indonesia</h3>
        <p>Forum diskusi, study group, dan mentoring alumni yang sudah berhasil ke Korea — belajar bersama lebih efektif.</p>
      </div>
      <div class="pos-card">
        <div class="pos-icon-wrap" style="background:#FFF8E7;">
          <svg viewBox="0 0 24 24" fill="none" stroke="#B46A00" stroke-width="1.8" stroke-linecap="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        </div>
        <h3>Update Materi &amp; Soal Terbaru</h3>
        <p>Konten terus diperbarui mengikuti format TOPIK dan EPS-TOPIK terkini — selalu relevan dengan ujian sesungguhnya.</p>
      </div>
      <div class="pos-card red-accent">
        <div class="pos-icon-wrap red">
          <svg viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="1.8" stroke-linecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        </div>
        <h3>Belajar Lebih Terarah</h3>
        <p>Berbeda dengan mengumpulkan materi dari berbagai sumber — di Kekorea semua sudah tersusun rapi dengan jalur belajar yang jelas.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════
     QUICK ACTIONS
════════════════════════════════════════════ -->
<section class="quick-actions" id="mulai">
  <div class="container">
    <div class="section-header">
      <span class="section-eyebrow">Mulai Sekarang</span>
      <h2 class="section-title">Mulai Belajar Sekarang — <span class="text-red">Gratis &amp; Tanpa Login</span></h2>
      <p class="section-sub">Tidak perlu daftar. Pilih latihan yang kamu butuhkan dan langsung mulai belajar bahasa Korea.</p>
    </div>
    <!-- Primary Action -->
    <div style="margin-bottom:16px;">
      <div class="qa-card" onclick="window.location='#ujian'" style="background:linear-gradient(135deg,#EFF6FF,#DBEAFE);border-color:rgba(37,99,235,.2);display:flex;flex-direction:row;align-items:center;gap:20px;padding:24px 28px;">
        <div class="qa-icon" style="background:#2563EB;color:#fff;width:52px;height:52px;min-width:52px;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(37,99,235,.3);">
          <svg style="width:24px;height:24px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
        </div>
        <div style="flex:1;">
          <div style="font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--blue);margin-bottom:4px;">Aksi Utama</div>
          <h3 style="font-size:18px;margin-bottom:4px;">Mulai Latihan TOPIK Sekarang</h3>
          <p style="font-size:14px;color:var(--gray-5);margin:0;">Simulasi soal TOPIK langsung dengan pembahasan — ukur kemampuan dan tahu harus fokus di mana.</p>
        </div>
        <div class="qa-arrow" style="background:var(--blue);color:#fff;box-shadow:0 2px 8px rgba(37,99,235,.3);">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
        </div>
      </div>
    </div>
    <div class="qa-grid">
      <div class="qa-card" onclick="window.location='#'">
        <div class="qa-icon" style="background:#EFF6FF;color:#2563EB;display:flex;align-items:center;justify-content:center;">
          <svg style="width:22px;height:22px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
        </div>
        <h3>Cek Level Bahasa Korea</h3>
        <p>Ketahui kemampuan kamu dalam 2 menit — tes cepat gratis untuk tahu mulai dari mana.</p>
        <div class="qa-card-footer">
          <span class="qa-tag" style="background:#EFF6FF;color:#2563EB;">2 Menit</span>
          <div class="qa-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
          </div>
        </div>
      </div>
      <div class="qa-card" onclick="window.location='#'">
        <div class="qa-icon" style="background:#FEF2F2;color:#DC2626;display:flex;align-items:center;justify-content:center;">
          <svg style="width:22px;height:22px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
        </div>
        <h3>Latihan Mini TOPIK</h3>
        <p>Simulasi soal TOPIK 10 pertanyaan — langsung cek skor dan lihat kekuatan &amp; kelemahanmu.</p>
        <div class="qa-card-footer">
          <span class="qa-tag" style="background:#FEF2F2;color:#DC2626;">10 Soal</span>
          <div class="qa-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
          </div>
        </div>
      </div>
      <div class="qa-card" onclick="window.location='#'">
        <div class="qa-icon" style="background:#ECFDF5;color:#059669;display:flex;align-items:center;justify-content:center;">
          <svg style="width:22px;height:22px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
        </div>
        <h3>Latihan Vocabulary</h3>
        <p>Perbanyak kosakata Korea penting untuk ujian dan percakapan sehari-hari.</p>
        <div class="qa-card-footer">
          <span class="qa-tag" style="background:#ECFDF5;color:#059669;">Gratis</span>
          <div class="qa-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
          </div>
        </div>
      </div>
      <div class="qa-card" onclick="window.location='#'">
        <div class="qa-icon" style="background:#FFF8E7;color:#B46A00;display:flex;align-items:center;justify-content:center;">
          <svg style="width:22px;height:22px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="4" y="2" width="16" height="20" rx="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="8" y1="10" x2="16" y2="10"></line><line x1="8" y1="14" x2="12" y2="14"></line></svg>
        </div>
        <h3>Kalkulator TOPIK</h3>
        <p>Hitung prediksi skor, estimasi waktu belajar, dan perkiraan lulus ujian TOPIK-mu.</p>
        <div class="qa-card-footer">
          <span class="qa-tag" style="background:#FFF8E7;color:#B46A00;">Kalkulator</span>
          <div class="qa-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════
     FITUR UTAMA — BENTO GRID
════════════════════════════════════════════ -->
<section class="fitur-section" id="fitur">
  <div class="container">
    <div class="section-header">
      <span class="section-eyebrow">Fitur Unggulan</span>
      <h2 class="section-title">Platform <span class="text-blue">Modern</span> Bukan Sekadar Website</h2>
      <p class="section-sub">Dibangun khusus untuk orang Indonesia yang serius ingin ke Korea — bukan sekadar kumpulan artikel.</p>
    </div>
    <div class="bento-grid">

      <!-- BENTO 1: AI Tutor — LARGE -->
      <div class="bento-card bento-1 bento-dark">
        <div class="bento-eyebrow" style="color:#7EB2FF;">AI Tutor Korea</div>
        <h3>Tanya Apa Saja tentang<br>Bahasa &amp; Korea</h3>
        <p>AI Tutor kami siap menjawab pertanyaan grammar, kosakata, tips ujian EPS-TOPIK, hingga panduan hidup di Korea — kapan saja, gratis.</p>
        <div class="ai-chat-preview">
          <div class="chat-bubble user">
            <div class="chat-avatar">U</div>
            <div class="chat-text">Apa bedanya 은/는 dengan 이/가 kak?</div>
          </div>
          <div class="chat-bubble">
            <div class="chat-avatar ai">AI</div>
            <div class="chat-text">은/는 adalah partikel topik — dipakai untuk memperkenalkan atau mengontraskan subjek. Contoh: 저는 학생이에요 (Saya adalah pelajar). Sedangkan 이/가 adalah partikel subjek — dipakai untuk menunjukkan pelaku aksi baru. Contoh: 고양이가 왔어요 (Kucingnya datang).</div>
          </div>
          <div class="chat-bubble user">
            <div class="chat-avatar">U</div>
            <div class="chat-text">Bisa kasih contoh soal latihan?</div>
          </div>
          <div class="chat-bubble">
            <div class="chat-avatar ai">AI</div>
            <div class="chat-typing"><span></span><span></span><span></span></div>
          </div>
        </div>
      </div>

      <!-- BENTO 2: EPS Simulator -->
      <div class="bento-card bento-2 bento-red">
        <div class="bento-score-ring on-blue" style="border-color:rgba(255,255,255,.2);">
          <div class="bento-score-num" style="color:#FFD86E;">72</div>
          <div class="bento-score-label-sm">/ 100</div>
        </div>
        <div class="bento-eyebrow" style="color:rgba(255,255,255,.6);">EPS-TOPIK Simulator</div>
        <h3>Simulasi Ujian<br>Seperti Aslinya</h3>
        <p>CBT timer, feedback instan, analisis skor per skill.</p>
        <div class="bento-feature-list">
          <div class="bento-feat-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"></polyline></svg> 50 soal mirip ujian asli</div>
          <div class="bento-feat-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Timer countdown otomatis</div>
          <div class="bento-feat-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Pembahasan tiap soal</div>
        </div>
      </div>

      <!-- BENTO 3: TOPIK Practice -->
      <div class="bento-card bento-3 bento-blue">
        <div class="bento-eyebrow" style="color:rgba(255,255,255,.6);">TOPIK Practice</div>
        <h3>Soal TOPIK<br>Level 1–6</h3>
        <p>Soal terupdate, berlevel, ada pembahasan. Cocok untuk persiapan kuliah di Korea.</p>
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:16px;">
          <span style="background:rgba(255,255,255,.15);color:#fff;font-size:11px;font-weight:700;padding:5px 12px;border-radius:100px;">TOPIK I</span>
          <span style="background:rgba(255,255,255,.15);color:#fff;font-size:11px;font-weight:700;padding:5px 12px;border-radius:100px;">TOPIK II</span>
          <span style="background:rgba(255,255,255,.3);color:#fff;font-size:11px;font-weight:700;padding:5px 12px;border-radius:100px;">Level 3 →</span>
        </div>
      </div>

      <!-- BENTO 4: Progress Tracker -->
      <div class="bento-card bento-4">
        <div class="bento-eyebrow" style="color:#2563EB;">Progress Tracker</div>
        <h3>Pantau Perkembanganmu</h3>
        <div class="bento-progress-list">
          <div class="bento-prog-item">
            <label><span>Hangul</span><span>80%</span></label>
            <div class="bento-prog-bar"><div class="bento-prog-fill" style="width:80%;background:#2563EB;"></div></div>
          </div>
          <div class="bento-prog-item">
            <label><span>Vocabulary</span><span>55%</span></label>
            <div class="bento-prog-bar"><div class="bento-prog-fill" style="width:55%;background:#7C3AED;"></div></div>
          </div>
          <div class="bento-prog-item">
            <label><span>Grammar</span><span>32%</span></label>
            <div class="bento-prog-bar"><div class="bento-prog-fill" style="width:32%;background:#DC2626;"></div></div>
          </div>
          <div class="bento-prog-item">
            <label><span>EPS-TOPIK</span><span>70%</span></label>
            <div class="bento-prog-bar"><div class="bento-prog-fill" style="width:70%;background:#059669;"></div></div>
          </div>
        </div>
      </div>

      <!-- BENTO 5: Tools Gratis -->
      <div class="bento-card bento-5" style="background:var(--gray-1);">
        <div class="bento-eyebrow" style="color:#059669;">100+ Tools Gratis</div>
        <h3>Kalkulator &amp; Simulasi</h3>
        <p>Kurs Won, gaji Korea, biaya hidup, prediksi lulus TOPIK — semua gratis.</p>
        <div style="display:flex;flex-direction:column;gap:8px;margin-top:16px;">
          <div style="display:flex;align-items:center;gap:8px;font-size:13px;color:var(--ink-3);">
            <span style="font-size:16px;"></span> Kalkulator Won → Rupiah
          </div>
          <div style="display:flex;align-items:center;gap:8px;font-size:13px;color:var(--ink-3);">
            <span style="font-size:16px;"></span> Estimasi Gaji Korea
          </div>
          <div style="display:flex;align-items:center;gap:8px;font-size:13px;color:var(--ink-3);">
            <span style="font-size:16px;"></span> Prediksi Lulus TOPIK
          </div>
        </div>
      </div>

      <!-- BENTO 6: No Login -->
      <div class="bento-card bento-6" style="display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;background:linear-gradient(135deg,#ECFDF5,#EFF6FF);">
        <div style="font-size:40px;margin-bottom:12px;"></div>
        <div class="bento-eyebrow" style="color:#059669;">Mulai Sekarang</div>
        <h3 style="font-size:18px;">Tanpa Login,<br>Tanpa Bayar</h3>
        <p style="font-size:13px;max-width:none;">Langsung latihan, lihat skor, dan belajar.</p>
        <a href="#mulai" class="btn btn-primary btn-sm" style="margin-top:16px;">Coba Gratis</a>
      </div>

    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════
     MENU BELAJAR — PILLAR MENU (BARU)
════════════════════════════════════════════ -->
<section class="belajar-section" id="belajar">
  <div class="container">
    <div class="section-header">
      <span class="section-eyebrow">Kurikulum Belajar Bahasa Korea</span>
      <h2 class="section-title">Belajar Bahasa Korea<br><span class="text-blue">Terstruktur dari Hangul hingga TOPIK</span></h2>
      <p class="section-sub">Jalur belajar bahasa Korea yang terstruktur — dari belajar Hangul pertama kali, kosakata Korea, tata bahasa, latihan TOPIK, hingga simulasi EPS-TOPIK untuk persiapan kerja ke Korea.</p>
    </div>
    <div class="belajar-tabs" id="belajarTabs">
      <button class="belajar-tab active" data-tab="hangul">Hangul &amp; Alfabet</button>
      <button class="belajar-tab" data-tab="grammar">Grammar</button>
      <button class="belajar-tab" data-tab="vocab">Vocabulary</button>
      <button class="belajar-tab" data-tab="listening">Listening &amp; Speaking</button>
      <button class="belajar-tab" data-tab="tools">Tools Gratis</button>
    </div>

    <!-- HANGUL -->
    <div class="belajar-panel active" id="tab-hangul">
      <div class="belajar-grid">
        <div class="belajar-card">
          <div class="belajar-card-header">
            <div class="belajar-card-icon" style="background:#EFF6FF;">
              <svg viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="1.8" stroke-linecap="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path></svg>
            </div>
            <div>
              <h4>Latihan Huruf Hangul</h4>
              <div class="belajar-card-meta">
                <span>Beginner</span> • <span>Pilih per huruf</span>
              </div>
            </div>
          </div>
          <div class="belajar-card-body">
            <ul class="belajar-submenu">
              <li><a href="#">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
                Latihan Huruf Konsonan (ㄱ–ㅎ)
              </a></li>
              <li><a href="#">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
                Latihan Huruf Vokal (ㅏ–ㅣ)
              </a></li>
              <li><a href="#">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
                Kombinasi Konsonan + Vokal
              </a></li>
            </ul>
          </div>
          <div class="belajar-card-footer">
            <a href="#" class="btn btn-primary btn-sm">Mulai Belajar</a>
          </div>
        </div>
        <div class="belajar-card">
          <div class="belajar-card-header">
            <div class="belajar-card-icon" style="background:#ECFDF5;">
              <svg viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="1.8" stroke-linecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            </div>
            <div>
              <h4>Latihan Membaca Hangul</h4>
              <div class="belajar-card-meta">
                <span>Beginner</span> • <span>Audio + teks</span>
              </div>
            </div>
          </div>
          <div class="belajar-card-body">
            <ul class="belajar-submenu">
              <li><a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>Membaca Suku Kata Dasar</a></li>
              <li><a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>Membaca Kata Sederhana</a></li>
              <li><a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>Membaca Kalimat Pendek</a></li>
            </ul>
          </div>
          <div class="belajar-card-footer">
            <a href="#" class="btn btn-primary btn-sm">Mulai Belajar</a>
          </div>
        </div>
        <div class="belajar-card">
          <div class="belajar-card-header">
            <div class="belajar-card-icon" style="background:#FEF2F2;">
              <svg viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="1.8" stroke-linecap="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
            </div>
            <div>
              <h4>Latihan Menulis Hangul</h4>
              <div class="belajar-card-meta">
                <span>Beginner</span> • <span>Urutan penulisan</span>
              </div>
            </div>
          </div>
          <div class="belajar-card-body">
            <ul class="belajar-submenu">
              <li><a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>Urutan Penulisan Konsonan</a></li>
              <li><a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>Urutan Penulisan Vokal</a></li>
              <li><a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>Latihan Menulis Kata</a></li>
            </ul>
          </div>
          <div class="belajar-card-footer">
            <a href="#" class="btn btn-primary btn-sm">Mulai Belajar</a>
          </div>
        </div>
      </div>
    </div>

    <!-- GRAMMAR -->
    <div class="belajar-panel" id="tab-grammar">
      <div class="belajar-grid">
        <div class="belajar-card">
          <div class="belajar-card-header">
            <div class="belajar-card-icon" style="background:#EFF6FF;"><svg viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="1.8" stroke-linecap="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path><line x1="8" y1="7" x2="15" y2="7"></line><line x1="8" y1="11" x2="15" y2="11"></line><line x1="8" y1="15" x2="12" y2="15"></line></svg></div>
            <div><h4>Grammar Dasar</h4><div class="belajar-card-meta">Beginner • Fondasi tata bahasa</div></div>
          </div>
          <div class="belajar-card-body">
            <ul class="belajar-submenu">
              <li><a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>Kalimat Dasar Korea</a></li>
              <li><a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>Pola SOV (Subject-Object-Verb)</a></li>
              <li><a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>Kata Kerja Dasar</a></li>
            </ul>
          </div>
          <div class="belajar-card-footer"><a href="#" class="btn btn-primary btn-sm">Mulai Belajar</a></div>
        </div>
        <div class="belajar-card">
          <div class="belajar-card-header">
            <div class="belajar-card-icon" style="background:#FFF0F7;"><svg viewBox="0 0 24 24" fill="none" stroke="#C2185B" stroke-width="1.8" stroke-linecap="round"><circle cx="6" cy="12" r="2"></circle><circle cx="18" cy="6" r="2"></circle><circle cx="18" cy="18" r="2"></circle><line x1="8" y1="11" x2="16" y2="7"></line><line x1="8" y1="13" x2="16" y2="17"></line></svg></div>
            <div><h4>Partikel &amp; Pola Kalimat</h4><div class="belajar-card-meta">Intermediate • Partikel Korea</div></div>
          </div>
          <div class="belajar-card-body">
            <ul class="belajar-submenu">
              <li><a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>Partikel 은/는 (Topik)</a></li>
              <li><a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>Partikel 이/가 (Subjek)</a></li>
              <li><a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>Partikel 을/를 (Objek)</a></li>
            </ul>
          </div>
          <div class="belajar-card-footer"><a href="#" class="btn btn-primary btn-sm">Mulai Belajar</a></div>
        </div>
        <div class="belajar-card">
          <div class="belajar-card-header">
            <div class="belajar-card-icon" style="background:#ECFDF5;"><svg viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="1.8" stroke-linecap="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path><path d="M4 7h2M4 11h2M4 15h2"></path><line x1="9" y1="7" x2="16" y2="7"></line><line x1="9" y1="11" x2="16" y2="11"></line><line x1="9" y1="15" x2="13" y2="15"></line><rect x="14" y="13" width="5" height="5" rx="1"></rect></svg></div>
            <div><h4>Grammar Lanjutan</h4><div class="belajar-card-meta">Advanced • Pola kalimat kompleks</div></div>
          </div>
          <div class="belajar-card-body">
            <ul class="belajar-submenu">
              <li><a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>Pola Kalimat Formal</a></li>
              <li><a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>Pola Kalimat Informal</a></li>
              <li><a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>Konjungsi &amp; Ekspresi</a></li>
            </ul>
          </div>
          <div class="belajar-card-footer"><a href="#" class="btn btn-primary btn-sm">Mulai Belajar</a></div>
        </div>
      </div>
    </div>

    <!-- VOCAB, LISTENING, TOOLS panels (simplified) -->
    <div class="belajar-panel" id="tab-vocab">
      <div class="belajar-grid">
        <div class="belajar-card"><div class="belajar-card-header"><div class="belajar-card-icon" style="background:#EFF6FF;"><svg viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="1.8" stroke-linecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></div><div><h4>Kosakata Harian</h4><div class="belajar-card-meta">Semua Level • Setiap hari</div></div></div><div class="belajar-card-body"><ul class="belajar-submenu"><li><a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>Quiz Vocabulary Harian</a></li><li><a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>Tebak Arti Kata Korea</a></li><li><a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>Sinonim Bahasa Korea</a></li></ul></div><div class="belajar-card-footer"><a href="#" class="btn btn-primary btn-sm">Mulai Belajar</a></div></div>
        <div class="belajar-card"><div class="belajar-card-header"><div class="belajar-card-icon" style="background:#FEF2F2;"><svg viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="1.8" stroke-linecap="round"><rect x="2" y="7" width="20" height="14" rx="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg></div><div><h4>Kosakata Kerja &amp; Studi</h4><div class="belajar-card-meta">Intermediate • EPS &amp; TOPIK</div></div></div><div class="belajar-card-body"><ul class="belajar-submenu"><li><a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>Kosakata Pekerjaan</a></li><li><a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>Kosakata Kampus &amp; Kuliah</a></li><li><a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>Frasa &amp; Idiom Korea</a></li></ul></div><div class="belajar-card-footer"><a href="#" class="btn btn-primary btn-sm">Mulai Belajar</a></div></div>
        <div class="belajar-card"><div class="belajar-card-header"><div class="belajar-card-icon" style="background:#FFF0F7;"><svg viewBox="0 0 24 24" fill="none" stroke="#C2185B" stroke-width="1.8" stroke-linecap="round"><path d="M9 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4"></path><path d="M15 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4"></path><path d="M12 3v4m0 10v4"></path><circle cx="12" cy="12" r="3"></circle></svg></div><div><h4>Fun Vocabulary</h4><div class="belajar-card-meta">Semua Level • K-Pop &amp; Drama</div></div></div><div class="belajar-card-body"><ul class="belajar-submenu"><li><a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>Tebak Kata dari K-Pop Lirik</a></li><li><a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>Tebak Kata dari Drama Korea</a></li><li><a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>Tebak Arti Slang Korea</a></li></ul></div><div class="belajar-card-footer"><a href="#" class="btn btn-primary btn-sm">Mulai Belajar</a></div></div>
      </div>
    </div>
    <div class="belajar-panel" id="tab-listening">
      <div class="belajar-grid">
        <div class="belajar-card"><div class="belajar-card-header"><div class="belajar-card-icon" style="background:#EFF6FF;"><svg viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="1.8" stroke-linecap="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"></path><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg></div><div><h4>Tips Listening</h4><div class="belajar-card-meta">Semua Level</div></div></div><div class="belajar-card-body"><ul class="belajar-submenu"><li><a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>Tips Listening TOPIK</a></li><li><a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>Listening dengan Audio</a></li></ul></div><div class="belajar-card-footer"><a href="#" class="btn btn-primary btn-sm">Mulai</a></div></div>
        <div class="belajar-card"><div class="belajar-card-header"><div class="belajar-card-icon" style="background:#FEF2F2;"><svg viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="1.8" stroke-linecap="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg></div><div><h4>Speaking &amp; Pelafalan</h4><div class="belajar-card-meta">Beginner–Intermediate</div></div></div><div class="belajar-card-body"><ul class="belajar-submenu"><li><a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>Latihan Pronunciation</a></li><li><a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>Percakapan Sehari-hari</a></li></ul></div><div class="belajar-card-footer"><a href="#" class="btn btn-primary btn-sm">Mulai</a></div></div>
        <div class="belajar-card"><div class="belajar-card-header"><div class="belajar-card-icon" style="background:#ECFDF5;"><svg viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="1.8" stroke-linecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg></div><div><h4>Tebak dari Audio</h4><div class="belajar-card-meta">Intermediate</div></div></div><div class="belajar-card-body"><ul class="belajar-submenu"><li><a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>Tebak Huruf dari Audio</a></li><li><a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>Latihan Listening EPS-TOPIK</a></li></ul></div><div class="belajar-card-footer"><a href="#" class="btn btn-primary btn-sm">Mulai</a></div></div>
      </div>
    </div>
    <div class="belajar-panel" id="tab-tools">
      <div class="belajar-grid">
        <div class="belajar-card"><div class="belajar-card-header"><div class="belajar-card-icon" style="background:#EFF6FF;"><svg viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg></div><div><h4>Mini Quiz</h4><div class="belajar-card-meta">Gratis • Semua level</div></div></div><div class="belajar-card-body"><ul class="belajar-submenu"><li><a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>Quiz Vocabulary Harian</a></li><li><a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>Quiz Grammar Korea</a></li></ul></div><div class="belajar-card-footer"><a href="#" class="btn btn-primary btn-sm">Mulai</a></div></div>
        <div class="belajar-card"><div class="belajar-card-header"><div class="belajar-card-icon" style="background:#FEF2F2;"><svg viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="1.8" stroke-linecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></div><div><h4>Latihan Kata &amp; Kalimat</h4><div class="belajar-card-meta">Gratis • Interaktif</div></div></div><div class="belajar-card-body"><ul class="belajar-submenu"><li><a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>Latihan Menyusun Kalimat</a></li><li><a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>Pilih Grammar yang Benar</a></li></ul></div><div class="belajar-card-footer"><a href="#" class="btn btn-primary btn-sm">Mulai</a></div></div>
        <div class="belajar-card"><div class="belajar-card-header"><div class="belajar-card-icon" style="background:#ECFDF5;"><svg viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="1.8" stroke-linecap="round"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path></svg></div><div><h4>Tebak Arti Kata</h4><div class="belajar-card-meta">Gratis • Fun</div></div></div><div class="belajar-card-body"><ul class="belajar-submenu"><li><a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>Tebak Arti Kata Korea</a></li><li><a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>Tebak Kata dari Emoji</a></li></ul></div><div class="belajar-card-footer"><a href="#" class="btn btn-primary btn-sm">Mulai</a></div></div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════
     ROADMAP
════════════════════════════════════════════ -->
<section class="roadmap" id="roadmap">
  <div class="container">
    <div class="section-header section-header--center">
      <span class="section-eyebrow">Roadmap Belajar Bahasa Korea</span>
      <h2 class="section-title">Bayangkan Kamu <span class="text-blue">di Mana dalam 6 Bulan</span></h2>
      <p class="section-sub">Ikuti jalur belajar yang sudah terbukti — setiap tahap membawa kamu lebih dekat ke Korea.</p>
    </div>
    <div class="roadmap-vertical">
      <div class="rv-step rv-active" data-step="1">
        <div class="rv-left">
          <div class="rv-num">1</div>
          <div class="rv-line"></div>
        </div>
        <div class="rv-content">
          <div class="rv-label">Minggu 1–2</div>
          <h3>Mampu Membaca Hangul</h3>
          <p>Kamu bisa membaca alfabet Korea, mengenali bunyi konsonan dan vokal, dan mulai mengeja kata-kata sederhana.</p>
          <a href="#belajar" class="rv-cta">Mulai Belajar Hangul
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
          </a>
        </div>
      </div>
      <div class="rv-step" data-step="2">
        <div class="rv-left">
          <div class="rv-num">2</div>
          <div class="rv-line"></div>
        </div>
        <div class="rv-content">
          <div class="rv-label">Bulan 1</div>
          <h3>Menguasai Kosakata Dasar</h3>
          <p>Kamu hafal 500+ kosakata harian dan pekerjaan yang sering muncul di EPS-TOPIK dan percakapan Korea.</p>
        </div>
      </div>
      <div class="rv-step" data-step="3">
        <div class="rv-left">
          <div class="rv-num">3</div>
          <div class="rv-line"></div>
        </div>
        <div class="rv-content">
          <div class="rv-label">Bulan 2</div>
          <h3>Paham Tata Bahasa Korea Dasar</h3>
          <p>Kamu bisa menyusun kalimat sederhana — partikel, konjugasi, dan pola kalimat formal yang diperlukan di ujian.</p>
        </div>
      </div>
      <div class="rv-step" data-step="4">
        <div class="rv-left">
          <div class="rv-num">4</div>
          <div class="rv-line"></div>
        </div>
        <div class="rv-content">
          <div class="rv-label">Bulan 3–4</div>
          <h3>Mulai Simulasi TOPIK dan Naik Level</h3>
          <p>Kamu mulai latihan soal TOPIK berLevel, tahu di mana kelemahan, dan terus meningkatkan skor setiap sesi.</p>
          <a href="https://hanguko.id" class="rv-cta" target="_blank" style="margin-top:10px;">Coba di Hanguko.id
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
          </a>
        </div>
      </div>
      <div class="rv-step" data-step="5">
        <div class="rv-left">
          <div class="rv-num">5</div>
          <div class="rv-line"></div>
        </div>
        <div class="rv-content">
          <div class="rv-label">Bulan 4–5</div>
          <h3>Siap Mengikuti Ujian Resmi</h3>
          <p>Kamu sudah terbiasa dengan format, timer, dan tekanan ujian — simulasi CBT EPS-TOPIK terasa seperti latihan biasa.</p>
          <a href="https://epstopik.id" class="rv-cta" target="_blank">Coba di epstopik.id
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
          </a>
        </div>
      </div>
      <div class="rv-step" data-step="6">
        <div class="rv-left">
          <div class="rv-num">6</div>
          <div class="rv-line"></div>
        </div>
        <div class="rv-content">
          <div class="rv-label">Bulan 5–6</div>
          <h3>Siap Wawancara &amp; Dokumen Lengkap</h3>
          <p>Kamu percaya diri dalam interview kerja bahasa Korea, dokumen visa siap, dan checklist keberangkatan sudah terpenuhi.</p>
        </div>
      </div>
      <div class="rv-step rv-final" data-step="7">
        <div class="rv-left">
          <div class="rv-num rv-num-final">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          </div>
        </div>
        <div class="rv-content">
          <div class="rv-label rv-label-final">Tujuan Akhir</div>
          <h3>Berangkat &amp; Sukses di Korea</h3>
          <p>Kamu berhasil. Bergabunglah dengan ribuan alumni Kekorea yang kini sudah bekerja, kuliah, dan tinggal di Korea.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════
     100 TOOLS SHOWCASE
════════════════════════════════════════════ -->
<section class="tools-section" id="tools">
  <div class="container">
    <div class="section-header">
      <span class="section-eyebrow">100+ Tools Belajar Bahasa Korea</span>
      <h2 class="section-title">Semua Tools Korea dalam <span class="text-blue">Satu Platform</span></h2>
      <p class="section-sub">Dari latihan Hangul, soal TOPIK, simulasi EPS-TOPIK, hingga kalkulator gaji Korea — tidak perlu berpindah-pindah website lagi.</p>
    </div>
    <!-- Layer 1: Tools Favorit label -->
    <div style="margin-bottom:16px;">
      <span class="section-eyebrow" style="margin-bottom:0;">Tools Favorit Pengguna</span>
    </div>
    <!-- Tools Search Bar -->
    <div style="position:relative;margin-bottom:24px;max-width:480px;">
      <svg style="position:absolute;left:16px;top:50%;transform:translateY(-50%);width:18px;height:18px;color:var(--gray-4);pointer-events:none;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path></svg>
      <input id="toolsSearch" type="text" placeholder="Cari Tools Korea..." style="width:100%;padding:12px 16px 12px 46px;border:1.5px solid var(--gray-2);border-radius:var(--radius-md);font-family:var(--font-body);font-size:14px;color:var(--ink);background:var(--white);outline:none;transition:border-color .2s;" onfocus="this.style.borderColor='var(--blue)'" onblur="this.style.borderColor='var(--gray-2)'" oninput="filterToolsBySearch(this.value)">
    </div>
    <div class="tools-filter" id="toolsFilter">
      <button class="tools-filter-btn active" data-filter="all">Semua</button>
      <button class="tools-filter-btn" data-filter="latihan">Latihan &amp; Tes</button>
      <button class="tools-filter-btn" data-filter="vocab">Vocab &amp; Grammar</button>
      <button class="tools-filter-btn" data-filter="kalkulator">Kalkulator</button>
      <button class="tools-filter-btn" data-filter="fun">Fun &amp; Engagement</button>
      <button class="tools-filter-btn" data-filter="persiapan">Persiapan Korea</button>
    </div>
    <div class="tools-grid" id="toolsGrid">
      <!-- Latihan & Tes -->
      <div class="tool-card" data-cat="latihan"><div class="tool-card-icon" style="background:var(--gray-1);color:var(--gray-5);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div><h5>Latihan Mini TOPIK</h5><span class="tool-card-tag" style="background:var(--blue-light);color:var(--blue);">Latihan</span></div>
      <div class="tool-card" data-cat="latihan"><div class="tool-card-icon" style="background:var(--gray-1);color:var(--gray-5);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg></div><h5>Latihan Reading TOPIK</h5><span class="tool-card-tag" style="background:var(--blue-light);color:var(--blue);">Latihan</span></div>
      <div class="tool-card" data-cat="latihan"><div class="tool-card-icon" style="background:var(--gray-1);color:var(--gray-5);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"></path><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg></div><h5>Latihan Listening TOPIK</h5><span class="tool-card-tag" style="background:var(--blue-light);color:var(--blue);">Latihan</span></div>
      <div class="tool-card" data-cat="latihan"><div class="tool-card-icon" style="background:var(--gray-1);color:var(--gray-5);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg></div><h5>Latihan Grammar TOPIK</h5><span class="tool-card-tag" style="background:var(--blue-light);color:var(--blue);">Latihan</span></div>
      <div class="tool-card" data-cat="latihan"><div class="tool-card-icon" style="background:var(--gray-1);color:var(--gray-5);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg></div><h5>Latihan Vocabulary TOPIK</h5><span class="tool-card-tag" style="background:var(--blue-light);color:var(--blue);">Latihan</span></div>
      <div class="tool-card" data-cat="latihan"><div class="tool-card-icon" style="background:var(--gray-1);color:var(--gray-5);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="2" y="7" width="20" height="14" rx="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg></div><h5>Simulasi Mini EPS-TOPIK</h5><span class="tool-card-tag" style="background:var(--red-light);color:var(--red);">EPS</span></div>
      <div class="tool-card" data-cat="latihan"><div class="tool-card-icon" style="background:var(--gray-1);color:var(--gray-5);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg></div><h5>Cek Level Bahasa Korea</h5><span class="tool-card-tag" style="background:var(--blue-light);color:var(--blue);">Tes</span></div>
      <div class="tool-card" data-cat="latihan"><div class="tool-card-icon" style="background:var(--gray-1);color:var(--gray-5);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg></div><h5>Mini Test 10 Soal TOPIK</h5><span class="tool-card-tag" style="background:var(--blue-light);color:var(--blue);">10 Soal</span></div>
      <div class="tool-card" data-cat="latihan"><div class="tool-card-icon" style="background:var(--gray-1);color:var(--gray-5);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg></div><h5>Latihan Soal TOPIK Level 1</h5><span class="tool-card-tag" style="background:var(--blue-light);color:var(--blue);">Level 1</span></div>
      <div class="tool-card" data-cat="latihan"><div class="tool-card-icon" style="background:var(--gray-1);color:var(--gray-5);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></div><h5>Latihan Soal TOPIK Level 2</h5><span class="tool-card-tag" style="background:var(--blue-light);color:var(--blue);">Level 2</span></div>
      <!-- Vocab & Grammar -->
      <div class="tool-card" data-cat="vocab"><div class="tool-card-icon" style="background:var(--gray-1);color:var(--gray-5);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path></svg></div><h5>Tebak Arti Kata Korea</h5><span class="tool-card-tag" style="background:var(--green-light);color:var(--green);">Vocab</span></div>
      <div class="tool-card" data-cat="vocab"><div class="tool-card-icon" style="background:var(--gray-1);color:var(--gray-5);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></div><h5>Tebak Kata Bahasa Korea</h5><span class="tool-card-tag" style="background:var(--green-light);color:var(--green);">Vocab</span></div>
      <div class="tool-card" data-cat="vocab"><div class="tool-card-icon" style="background:var(--gray-1);color:var(--gray-5);font-size:15px;font-weight:800;font-family:var(--font-display);">ㄱ</div><h5>Latihan Hangul</h5><span class="tool-card-tag" style="background:var(--blue-light);color:var(--blue);">Hangul</span></div>
      <div class="tool-card" data-cat="vocab"><div class="tool-card-icon" style="background:var(--gray-1);color:var(--gray-5);font-size:11px;font-weight:800;font-family:var(--font-display);">읽기</div><h5>Latihan Membaca Hangul</h5><span class="tool-card-tag" style="background:var(--blue-light);color:var(--blue);">Hangul</span></div>
      <div class="tool-card" data-cat="vocab"><div class="tool-card-icon" style="background:var(--gray-1);color:var(--gray-5);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg></div><h5>Latihan Menyusun Kalimat</h5><span class="tool-card-tag" style="background:var(--gray-1);color:var(--gray-5);">Grammar</span></div>
      <div class="tool-card" data-cat="vocab"><div class="tool-card-icon" style="background:var(--gray-1);color:var(--gray-5);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></div><h5>Latihan Partikel 은/는/이/가</h5><span class="tool-card-tag" style="background:var(--gray-1);color:var(--gray-5);">Partikel</span></div>
      <div class="tool-card" data-cat="vocab"><div class="tool-card-icon" style="background:var(--gray-1);color:var(--gray-5);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg></div><h5>Latihan Kata Kerja Korea</h5><span class="tool-card-tag" style="background:var(--green-light);color:var(--green);">Vocab</span></div>
      <div class="tool-card" data-cat="vocab"><div class="tool-card-icon" style="background:var(--gray-1);color:var(--gray-5);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg></div><h5>Sinonim Bahasa Korea Quiz</h5><span class="tool-card-tag" style="background:var(--green-light);color:var(--green);">Vocab</span></div>
      <div class="tool-card" data-cat="vocab"><div class="tool-card-icon" style="background:var(--gray-1);color:var(--gray-5);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg></div><h5>Tebak Kata dari K-Pop Lirik</h5><span class="tool-card-tag" style="background:#FFF8E7;color:#B45309;">Fun</span></div>
      <div class="tool-card" data-cat="vocab"><div class="tool-card-icon" style="background:var(--gray-1);color:var(--gray-5);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg></div><h5>Quiz Vocabulary Harian</h5><span class="tool-card-tag" style="background:var(--green-light);color:var(--green);">Harian</span></div>
      <!-- Kalkulator -->
      <div class="tool-card" data-cat="kalkulator"><div class="tool-card-icon" style="background:var(--gray-1);color:var(--gray-5);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="4" y="2" width="16" height="20" rx="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="8" y1="10" x2="16" y2="10"></line><line x1="8" y1="14" x2="12" y2="14"></line></svg></div><h5>Kalkulator Skor TOPIK</h5><span class="tool-card-tag" style="background:#FFF8E7;color:#B45309;">Kalkulator</span></div>
      <div class="tool-card" data-cat="kalkulator"><div class="tool-card-icon" style="background:var(--gray-1);color:var(--gray-5);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg></div><h5>Prediksi Lulus TOPIK</h5><span class="tool-card-tag" style="background:#FFF8E7;color:#B45309;">Kalkulator</span></div>
      <div class="tool-card" data-cat="kalkulator"><div class="tool-card-icon" style="background:var(--gray-1);color:var(--gray-5);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div><h5>Estimasi Waktu Belajar</h5><span class="tool-card-tag" style="background:#FFF8E7;color:#B45309;">Kalkulator</span></div>
      <div class="tool-card" data-cat="kalkulator"><div class="tool-card-icon" style="background:var(--gray-1);color:var(--gray-5);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg></div><h5>Estimasi Gaji Korea</h5><span class="tool-card-tag" style="background:var(--green-light);color:var(--green);">Gaji</span></div>
      <div class="tool-card" data-cat="kalkulator"><div class="tool-card-icon" style="background:var(--gray-1);color:var(--gray-5);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg></div><h5>Kalkulator Kurs Won → Rupiah</h5><span class="tool-card-tag" style="background:#FFF8E7;color:#B45309;">Kurs</span></div>
      <div class="tool-card" data-cat="kalkulator"><div class="tool-card-icon" style="background:var(--gray-1);color:var(--gray-5);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></div><h5>Estimasi Biaya Hidup Korea</h5><span class="tool-card-tag" style="background:#FFF8E7;color:#B45309;">Biaya</span></div>
      <div class="tool-card" data-cat="kalkulator"><div class="tool-card-icon" style="background:var(--gray-1);color:var(--gray-5);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="2" y="7" width="20" height="14" rx="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg></div><h5>Kalkulator Biaya EPS-TOPIK</h5><span class="tool-card-tag" style="background:var(--red-light);color:var(--red);">EPS</span></div>
      <div class="tool-card" data-cat="kalkulator"><div class="tool-card-icon" style="background:var(--gray-1);color:var(--gray-5);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M20 12V22H4V12"></path><path d="M22 7H2v5h20V7z"></path><path d="M12 22V7"></path><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg></div><h5>Simulasi Tabungan ke Korea</h5><span class="tool-card-tag" style="background:#FFF8E7;color:#B45309;">Simulasi</span></div>
      <!-- Fun -->
      <div class="tool-card" data-cat="fun"><div class="tool-card-icon" style="background:var(--gray-1);color:var(--gray-5);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg></div><h5>"Seberapa Korea Kamu?" Quiz</h5><span class="tool-card-tag" style="background:#FFF0F7;color:#C2185B;">Fun</span></div>
      <div class="tool-card" data-cat="fun"><div class="tool-card-icon" style="background:var(--gray-1);color:var(--gray-5);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg></div><h5>"Cocok Kerja di Korea?" Quiz</h5><span class="tool-card-tag" style="background:#FFF0F7;color:#C2185B;">Fun</span></div>
      <div class="tool-card" data-cat="fun"><div class="tool-card-icon" style="background:var(--gray-1);color:var(--gray-5);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg></div><h5>Level Ngerti Drama Korea</h5><span class="tool-card-tag" style="background:#FFF0F7;color:#C2185B;">Fun</span></div>
      <div class="tool-card" data-cat="fun"><div class="tool-card-icon" style="background:var(--gray-1);color:var(--gray-5);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg></div><h5>Tebak Arti Lirik K-Pop</h5><span class="tool-card-tag" style="background:#FFF0F7;color:#C2185B;">K-Pop</span></div>
      <div class="tool-card" data-cat="fun"><div class="tool-card-icon" style="background:var(--gray-1);color:var(--gray-5);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div><h5>Generator Nama Korea</h5><span class="tool-card-tag" style="background:#FFF0F7;color:#C2185B;">Fun</span></div>
      <div class="tool-card" data-cat="fun"><div class="tool-card-icon" style="background:var(--gray-1);color:var(--gray-5);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg></div><h5>Tebak Makanan Korea</h5><span class="tool-card-tag" style="background:#FFF0F7;color:#C2185B;">Fun</span></div>
      <div class="tool-card" data-cat="fun"><div class="tool-card-icon" style="background:var(--gray-1);color:var(--gray-5);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h20"></path></svg></div><h5>Quiz Budaya Korea</h5><span class="tool-card-tag" style="background:var(--blue-light);color:var(--blue);">Budaya</span></div>
      <div class="tool-card" data-cat="fun"><div class="tool-card-icon" style="background:var(--gray-1);color:var(--gray-5);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line></svg></div><h5>Tebak Kata dari Emoji</h5><span class="tool-card-tag" style="background:#FFF0F7;color:#C2185B;">Fun</span></div>
      <!-- Persiapan -->
      <div class="tool-card" data-cat="persiapan"><div class="tool-card-icon" style="background:var(--gray-1);color:var(--gray-5);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></div><h5>Cek Kesiapan EPS-TOPIK</h5><span class="tool-card-tag" style="background:var(--blue-light);color:var(--blue);">Persiapan</span></div>
      <div class="tool-card" data-cat="persiapan"><div class="tool-card-icon" style="background:var(--gray-1);color:var(--gray-5);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg></div><h5>Checklist ke Korea</h5><span class="tool-card-tag" style="background:var(--blue-light);color:var(--blue);">Persiapan</span></div>
    </div>
    <div class="tools-cta">
      <p style="color:var(--gray-5);margin-bottom:16px;font-size:14px;">Menampilkan tools favorit dari <strong>100+ tools belajar bahasa Korea</strong> yang tersedia</p>
      <a href="#" class="btn btn-primary btn-lg">Jelajahi 100+ Tools Belajar Korea
        <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
      </a>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════
     MINI QUIZ PREVIEW / TRYOUT
════════════════════════════════════════════ -->
<section class="tryout-section" id="cek-level">
  <div class="container">
    <div class="tryout-inner">
      <div class="tryout-content">
        <span class="section-eyebrow">Simulasi Ujian Sesungguhnya</span>
        <h2>Latihan Soal TOPIK &amp; EPS-TOPIK<br>Seperti Ujian Aslinya</h2>
        <p style="font-size:16px;color:var(--gray-5);margin-bottom:24px;line-height:1.7;">Simulasi ujian yang terasa seperti tes resmi — dilengkapi timer countdown, analisis hasil, dan evaluasi kemampuan per kategori soal.</p>
        <div class="tryout-features">
          <div class="tryout-feature">
            <div class="tryout-feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div>
            Timer countdown otomatis seperti ujian asli
          </div>
          <div class="tryout-feature">
            <div class="tryout-feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg></div>
            Analisis hasil dan skor otomatis langsung
          </div>
          <div class="tryout-feature">
            <div class="tryout-feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></div>
            Insight "kamu lemah di grammar, kuat di vocab"
          </div>
          <div class="tryout-feature">
            <div class="tryout-feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg></div>
            CTA ke tryout penuh di epstopik.id setelah selesai
          </div>
        </div>
        <a href="#" class="btn btn-primary btn-lg">Coba Latihan Sekarang</a>
      </div>
      <div class="tryout-visual">
        <div class="tv-header">
          <span class="tv-title">Cek Level Bahasa Korea</span>
          <span class="tv-badge">10 Soal • Gratis</span>
        </div>
        <div class="tv-result">
          <div class="tv-result-header">
            <div class="tv-result-icon">🎯</div>
            <h3>Hasil Kamu</h3>
          </div>
          <div class="tv-result-score">
            <div class="tv-rs-value">8<span> / 10</span></div>
            <div class="tv-rs-level">Level: Dasar</div>
          </div>
          <div class="tv-result-analysis">
            <div class="tv-ra-title">📊 Analisis</div>
            <ul class="tv-ra-list">
              <li class="tv-ra-item success"><span class="tv-ra-icon">✔</span> Vocabulary: Lumayan</li>
              <li class="tv-ra-item error"><span class="tv-ra-icon">❌</span> Grammar: Lemah</li>
              <li class="tv-ra-item error"><span class="tv-ra-icon">❌</span> Listening: Perlu latihan</li>
            </ul>
            <p class="tv-ra-desc">Kamu sudah punya dasar, tapi belum cukup untuk lulus EPS-TOPIK.</p>
          </div>
          <div class="tv-result-cta">
            <p>🔥 Mau tahu peluang kamu lulus?</p>
            <a href="https://wa.me/xxxxxxxxxx" target="_blank" class="btn btn-primary btn-wa">
              👉 Gabung WhatsApp Channel
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════
     LEARNING JOURNEY — PROGRESS TRACKER
════════════════════════════════════════════ -->
<section class="learning-journey" id="perjalanan">
  <div class="container">
    <div class="lj-inner">
      <div class="lj-content">
        <span class="section-eyebrow">Perjalanan Belajarmu</span>
        <h2>Lanjutkan Perjalanan<br>Belajar Korea-mu</h2>
        <p>Platform kami dirancang untuk tumbuh bersama kamu — dari Hangul pertama hingga lulus ujian TOPIK atau EPS-TOPIK. Simpan progress, pantau perkembangan, dan selalu tahu langkah selanjutnya.</p>
        <div style="display:flex;flex-direction:column;gap:14px;margin-bottom:32px;">
          <div style="display:flex;align-items:flex-start;gap:14px;">
            <div style="width:36px;height:36px;border-radius:50%;background:var(--blue);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-family:var(--font-display);font-size:14px;flex-shrink:0;">1</div>
            <div>
              <div style="font-weight:700;font-size:15px;color:var(--ink);margin-bottom:2px;">Pilih Tujuan Kamu</div>
              <div style="font-size:13.5px;color:var(--gray-5);">Kerja, kuliah, atau belajar bahasa — pilih jalur yang sesuai.</div>
            </div>
          </div>
          <div style="display:flex;align-items:flex-start;gap:14px;">
            <div style="width:36px;height:36px;border-radius:50%;background:#7C3AED;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-family:var(--font-display);font-size:14px;flex-shrink:0;">2</div>
            <div>
              <div style="font-weight:700;font-size:15px;color:var(--ink);margin-bottom:2px;">Ikuti Learning Path</div>
              <div style="font-size:13.5px;color:var(--gray-5);">Kurikulum terstruktur dari Beginner → Intermediate → Advanced.</div>
            </div>
          </div>
          <div style="display:flex;align-items:flex-start;gap:14px;">
            <div style="width:36px;height:36px;border-radius:50%;background:var(--green);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-family:var(--font-display);font-size:14px;flex-shrink:0;">3</div>
            <div>
              <div style="font-weight:700;font-size:15px;color:var(--ink);margin-bottom:2px;">Pantau Progress &amp; Lulus</div>
              <div style="font-size:13.5px;color:var(--gray-5);">Track perkembangan skill dan upgrade ke tryout penuh saat siap.</div>
            </div>
          </div>
        </div>
        <a href="#mulai" class="btn btn-primary btn-lg">Mulai Perjalanan Kamu</a>
      </div>
      <div class="lj-progress-widget">
        <div class="lj-widget-header">
          <span class="lj-widget-title"> Progress Belajar Korea</span>
          <span style="font-size:12px;color:var(--gray-4);">Level: Intermediate</span>
        </div>
        <div class="lj-widget-body">
          <div class="lj-skill">
            <div class="lj-skill-header">
              <div class="lj-skill-name">
                <div class="lj-skill-icon" style="background:#EFF6FF;">ㄱ</div>
                Hangul &amp; Alfabet
              </div>
              <div style="display:flex;align-items:center;gap:8px;">
                <span class="lj-badge" style="background:#ECFDF5;color:#059669;">Selesai</span>
                <span class="lj-skill-pct" style="color:#059669;">100%</span>
              </div>
            </div>
            <div class="lj-prog-bar"><div class="lj-prog-fill" style="width:100%;background:#059669;"></div></div>
          </div>
          <div class="lj-skill">
            <div class="lj-skill-header">
              <div class="lj-skill-name">
                <div class="lj-skill-icon" style="background:#EFF6FF;font-size:11px;font-weight:700;color:#2563EB;">단어</div>
                Vocabulary
              </div>
              <div style="display:flex;align-items:center;gap:8px;">
                <span class="lj-badge" style="background:#EFF6FF;color:#2563EB;">Sedang Berjalan</span>
                <span class="lj-skill-pct" style="color:#2563EB;">65%</span>
              </div>
            </div>
            <div class="lj-prog-bar"><div class="lj-prog-fill" style="width:65%;background:#2563EB;"></div></div>
          </div>
          <div class="lj-skill">
            <div class="lj-skill-header">
              <div class="lj-skill-name">
                <div class="lj-skill-icon" style="background:#FFF0F7;font-size:11px;font-weight:700;color:#C2185B;">문법</div>
                Grammar
              </div>
              <div style="display:flex;align-items:center;gap:8px;">
                <span class="lj-badge" style="background:#FFF0F7;color:#C2185B;">Perlu Latihan</span>
                <span class="lj-skill-pct" style="color:#C2185B;">38%</span>
              </div>
            </div>
            <div class="lj-prog-bar"><div class="lj-prog-fill" style="width:38%;background:#C2185B;"></div></div>
          </div>
          <div class="lj-skill">
            <div class="lj-skill-header">
              <div class="lj-skill-name">
                <div class="lj-skill-icon" style="background:#FEF2F2;color:#DC2626;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="width:14px;height:14px;"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"></path><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg></div>
                Listening
              </div>
              <div style="display:flex;align-items:center;gap:8px;">
                <span class="lj-badge" style="background:#FFF8E7;color:#B46A00;">Mulai</span>
                <span class="lj-skill-pct" style="color:#B46A00;">20%</span>
              </div>
            </div>
            <div class="lj-prog-bar"><div class="lj-prog-fill" style="width:20%;background:#F0A500;"></div></div>
          </div>
          <div class="lj-skill">
            <div class="lj-skill-header">
              <div class="lj-skill-name">
                <div class="lj-skill-icon" style="background:#FEF2F2;font-size:11px;font-weight:700;color:#DC2626;">EPS</div>
                EPS-TOPIK
              </div>
              <div style="display:flex;align-items:center;gap:8px;">
                <span class="lj-badge" style="background:#EFF6FF;color:#2563EB;">Terkunci</span>
                <span class="lj-skill-pct" style="color:var(--gray-4);">0%</span>
              </div>
            </div>
            <div class="lj-prog-bar"><div class="lj-prog-fill" style="width:0%;background:var(--gray-3);"></div></div>
          </div>
        </div>
        <div class="lj-widget-footer">
          <span class="lj-login-prompt"> <a href="#">Buat akun gratis</a> untuk simpan progres kamu secara permanen</span>
          <a href="#" class="btn btn-primary btn-sm">Lanjutkan →</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════
     BRIDGE → epstopik.id (Detail)
════════════════════════════════════════════ -->
<section class="bridge-section eps" id="eps">
  <div class="container">
    <div class="bridge-inner">
      <div>
        <div class="bridge-eyebrow-badge eps-badge">
          <svg style="width:11px;height:11px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
          Sub-Platform · epstopik.id
        </div>
        <h2 class="bridge-title">Simulasi Ujian EPS-TOPIK<br>Paling Realistis di Indonesia</h2>
        <p class="bridge-desc">Platform simulasi ujian CBT yang dirancang untuk mereplikasi kondisi ujian EPS-TOPIK secara nyata — untuk meningkatkan kesiapan dan kepercayaan diri sebelum ujian.</p>
        <ul class="bridge-benefits">
          <li class="bridge-benefit">
            <div class="bridge-benefit-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
            Full CBT simulasi 30–50 soal seperti ujian asli
          </li>
          <li class="bridge-benefit">
            <div class="bridge-benefit-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
            Timer ujian + analisis skor otomatis
          </li>
          <li class="bridge-benefit">
            <div class="bridge-benefit-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
            Pembahasan soal lengkap per nomor
          </li>
          <li class="bridge-benefit">
            <div class="bridge-benefit-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
            Prediksi peluang lulus berdasarkan skor kamu
          </li>
        </ul>
        <a href="https://epstopik.id" class="btn btn-red btn-lg" target="_blank" rel="noopener">
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          Mulai Simulasi EPS-TOPIK
        </a>
      </div>
      <div>
        <div class="bridge-mockup-eps">
          <div class="bme-header">
            <div class="bme-dots"><span></span><span></span><span></span></div>
            <div class="bme-url">epstopik.id — Simulasi Ujian CBT</div>
          </div>
          <div class="bme-body">
            <div class="bme-score-card">
              <div class="bme-score-label">Skor Tryout Kamu</div>
              <div><span class="bme-score-num">72</span><span class="bme-score-total"> / 100</span></div>
              <div style="font-size:12px;color:rgba(255,255,255,.4);margin-top:6px;"> Level: Intermediate — Hampir Lulus!</div>
            </div>
            <div class="bme-progress-items">
              <div class="bme-prog-item">
                <label><span>Vocabulary</span><span style="color:#6FD99B;">85%</span></label>
                <div class="bme-prog-bar"><div class="bme-prog-fill" style="width:85%;background:#6FD99B;"></div></div>
              </div>
              <div class="bme-prog-item">
                <label><span>Reading</span><span style="color:#FFD86E;">70%</span></label>
                <div class="bme-prog-bar"><div class="bme-prog-fill" style="width:70%;background:#FFD86E;"></div></div>
              </div>
              <div class="bme-prog-item">
                <label><span>Listening</span><span style="color:#FF8A8A;">55%</span></label>
                <div class="bme-prog-bar"><div class="bme-prog-fill" style="width:55%;background:#FF8A8A;"></div></div>
              </div>
              <div class="bme-prog-item">
                <label><span>Grammar</span><span style="color:#FFD86E;">68%</span></label>
                <div class="bme-prog-bar"><div class="bme-prog-fill" style="width:68%;background:#FFD86E;"></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════
     BRIDGE → hanguko.id (Detail)
════════════════════════════════════════════ -->
<section class="bridge-section hanguko" id="hanguko">
  <div class="container">
    <div class="bridge-inner reverse">
      <div>
        <div class="bridge-eyebrow-badge hanguko-badge">
          <svg style="width:11px;height:11px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path></svg>
          Sub-Platform · hanguko.id
        </div>
        <h2 class="bridge-title">Kuasai Bahasa Korea Formal<br>dengan TOPIK Level 1–6</h2>
        <p class="bridge-desc">Platform belajar TOPIK Level 1–6 yang dirancang khusus untuk kamu yang bermimpi berkuliah di universitas Korea — lengkap dengan panduan beasiswa dan pendaftaran.</p>
        <ul class="bridge-benefits">
          <li class="bridge-benefit">
            <div class="bridge-benefit-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
            Materi TOPIK I &amp; II (Level 1–6) lengkap
          </li>
          <li class="bridge-benefit">
            <div class="bridge-benefit-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
            Panduan khusus masuk universitas Korea
          </li>
          <li class="bridge-benefit">
            <div class="bridge-benefit-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
            Simulasi ujian TOPIK yang realistis + pembahasan
          </li>
        </ul>
        <a href="https://hanguko.id" class="btn btn-primary btn-lg" target="_blank" rel="noopener">
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path></svg>
          Mulai Belajar Bahasa Korea
        </a>
      </div>
      <div>
        <div class="bridge-mockup-hanguko">
          <div class="bmh-header">
            <div class="bmh-levels">
              <span class="bmh-level done">TOPIK I</span>
              <span class="bmh-level done">TOPIK II</span>
              <span class="bmh-level active">TOPIK III</span>
              <span class="bmh-level">TOPIK IV</span>
              <span class="bmh-level">TOPIK V</span>
              <span class="bmh-level">TOPIK VI</span>
            </div>
          </div>
          <div class="bmh-body">
            <div class="bmh-q" style="font-weight:600;color:var(--ink);margin-bottom:4px;">다음 글을 읽고 물음에 답하십시오.</div>
            <div class="bmh-q" style="font-size:13px;">Bacalah teks berikut dan jawab pertanyaannya:</div>
            <div style="padding:14px;background:var(--gray-1);border-radius:var(--radius-sm);margin:14px 0;font-size:13px;line-height:1.7;color:var(--ink-3);">저는 매일 아침 7시에 일어납니다. 그리고 커피를 마신 후 학교에 갑니다...</div>
            <div class="bmh-answers">
              <div class="bmh-ans selected">① 오전 6시</div>
              <div class="bmh-ans">② 오전 7시</div>
              <div class="bmh-ans">③ 오전 8시</div>
              <div class="bmh-ans">④ 오전 9시</div>
            </div>
            <div style="display:flex;justify-content:flex-end;margin-top:16px;">
              <a href="#" class="btn btn-primary btn-sm">Cek Jawaban</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════
     VALUE SECTION
════════════════════════════════════════════ -->
<section class="value-section">
  <div class="container">
    <div class="section-header section-header--center">
      <span class="section-eyebrow">Kenapa kekorea.com?</span>
      <h2 class="section-title">Cara Belajar yang Lebih <span class="text-blue">Efektif &amp; Interaktif</span></h2>
    </div>
    <div class="value-grid">
      <div class="value-card">
        <div class="value-icon" style="background:#EFF6FF;color:#2563EB;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
        </div>
        <div>
          <h4>Langsung Bisa Dipraktikkan</h4>
          <p>Latihan interaktif langsung — bukan hanya baca teori. Kamu langsung mengerjakan soal, menjawab quiz, dan melihat hasilnya.</p>
        </div>
      </div>
      <div class="value-card">
        <div class="value-icon" style="background:#FEF2F2;color:#DC2626;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path></svg>
        </div>
        <div>
          <h4>Simulasi Soal Ujian Asli</h4>
          <p>Soal dirancang mengacu pada format TOPIK dan EPS-TOPIK resmi — bukan soal asal-asalan — jadi latihan kamu benar-benar relevan.</p>
        </div>
      </div>
      <div class="value-card">
        <div class="value-icon" style="background:#ECFDF5;color:#059669;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
        </div>
        <div>
          <h4>Lebih Fleksibel &amp; Gratis</h4>
          <p>Akses kapan saja, di mana saja — di HP, tablet, atau laptop. Tanpa daftar, tanpa bayar. Lebih efisien dari buku fisik.</p>
        </div>
      </div>
      <div class="value-card">
        <div class="value-icon" style="background:#FFF8E7;color:#B46A00;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        </div>
        <div>
          <h4>Feedback &amp; Insight Otomatis</h4>
          <p>Setiap latihan memberikan skor, level, dan insight — "kamu kuat di vocabulary, perlu tingkatkan grammar." Bukan hanya skor buta.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════
     MENGAPA KEKOREA — NEW V9
════════════════════════════════════════════ -->
<section style="padding:80px 0;background:var(--gray-1);">
  <div class="container">
    <div class="section-header section-header--center">
      <span class="section-eyebrow">Mengapa Belajar di Kekorea?</span>
      <h2 class="section-title">Lebih Terarah dari<br>Belajar Sendiri</h2>
      <p class="section-sub">Mengumpulkan materi dari berbagai sumber membuang waktu dan energi. Di Kekorea semua sudah tersedia, terstruktur, dan siap digunakan.</p>
    </div>
    <div class="mengapa-grid-3col">
      <div class="pos-card" style="text-align:center;padding:32px 24px;">
        <div class="pos-icon-wrap" style="margin:0 auto 20px;background:var(--blue-light);">
          <svg viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="1.8" stroke-linecap="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
        </div>
        <h3>Semua Kebutuhan Belajar</h3>
        <p style="margin-bottom:0;">Satu platform untuk belajar Hangul, tata bahasa, kosakata, latihan TOPIK, dan EPS-TOPIK. Tidak perlu buka 10 tab berbeda.</p>
      </div>
      <div class="pos-card" style="text-align:center;padding:32px 24px;">
        <div class="pos-icon-wrap red" style="margin:0 auto 20px;">
          <svg viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="1.8" stroke-linecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
        </div>
        <h3>Roadmap Belajar yang Jelas</h3>
        <p style="margin-bottom:0;">Tahu persis harus mulai dari mana, fokus apa sekarang, dan kapan siap ujian — bukan belajar secara acak.</p>
      </div>
      <div class="pos-card green-accent" style="text-align:center;padding:32px 24px;">
        <div class="pos-icon-wrap green" style="margin:0 auto 20px;">
          <svg viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="1.8" stroke-linecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
        </div>
        <h3>Komunitas Aktif</h3>
        <p style="margin-bottom:0;">Belajar bareng ribuan pelajar Indonesia lainnya. Diskusi, motivasi, dan sharing pengalaman dari yang sudah berhasil ke Korea.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════
     TESTIMONI
════════════════════════════════════════════ -->
<section class="testimonial-section">
  <div class="container">
    <div class="section-header section-header--center">
      <span class="section-eyebrow">Cerita Sukses</span>
      <h2 class="section-title">Mereka Sudah Berhasil ke Korea</h2>
      <p class="section-sub">Hasil nyata dari pengguna yang mempersiapkan diri dengan serius di ekosistem Kekorea.</p>
    </div>
    <div class="testi-grid">
      <div class="testi-card">
        <div class="testi-stars">
          <svg class="testi-star-svg" viewBox="0 0 24 24"><defs><linearGradient id="sg1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FFE066"></stop><stop offset="100%" stop-color="#F5A623"></stop></linearGradient></defs><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="url(#sg1)" stroke="rgba(245,166,35,.25)" stroke-width="0.5"></polygon></svg>
          <svg class="testi-star-svg" viewBox="0 0 24 24"><use href="#sg1"></use><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="url(#sg1)" stroke="rgba(245,166,35,.25)" stroke-width="0.5"></polygon></svg>
          <svg class="testi-star-svg" viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="url(#sg1)" stroke="rgba(245,166,35,.25)" stroke-width="0.5"></polygon></svg>
          <svg class="testi-star-svg" viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="url(#sg1)" stroke="rgba(245,166,35,.25)" stroke-width="0.5"></polygon></svg>
          <svg class="testi-star-svg" viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="url(#sg1)" stroke="rgba(245,166,35,.25)" stroke-width="0.5"></polygon></svg>
        </div> setiap hari selama 2 bulan. Soalnya memang mirip ujian asli — skor saya 144 dari 200, lulus, dan sekarang sudah kerja di pabrik Incheon. Rekomendasiin banget!"<p></p>
        <div class="testi-author">
          <div class="testi-avatar" style="background:#2563EB;">AR</div>
          <div>
            <div class="testi-name">Andi R. — Bekasi</div>
            <div class="testi-meta">Manufaktur, Incheon Korea</div>
            <span class="testi-badge" style="background:#FEF2F2;color:#DC2626;">✓ Lulus EPS-TOPIK 2025</span>
          </div>
        </div>
      </div>
      <div class="testi-card">
        <div class="testi-stars">
          <svg class="testi-star-svg" viewBox="0 0 24 24"><defs><linearGradient id="sg2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FFE066"></stop><stop offset="100%" stop-color="#F5A623"></stop></linearGradient></defs><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="url(#sg2)" stroke="rgba(245,166,35,.25)" stroke-width="0.5"></polygon></svg>
          <svg class="testi-star-svg" viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="url(#sg2)" stroke="rgba(245,166,35,.25)" stroke-width="0.5"></polygon></svg>
          <svg class="testi-star-svg" viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="url(#sg2)" stroke="rgba(245,166,35,.25)" stroke-width="0.5"></polygon></svg>
          <svg class="testi-star-svg" viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="url(#sg2)" stroke="rgba(245,166,35,.25)" stroke-width="0.5"></polygon></svg>
          <svg class="testi-star-svg" viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="url(#sg2)" stroke="rgba(245,166,35,.25)" stroke-width="0.5"></polygon></svg>
        </div>, tidak tahu Hangul sama sekali. 4 bulan belajar di Kekorea dan hanguko.id — berhasil TOPIK Level 4 skor 185. Sekarang sudah kerja di perusahaan Korea di Seoul."<p></p>
        <div class="testi-author">
          <div class="testi-avatar" style="background:#059669;">SP</div>
          <div>
            <div class="testi-name">Nisa — Bandung</div>
            <div class="testi-meta">Karyawan, Seoul</div>
            <span class="testi-badge" style="background:#ECFDF5;color:#059669;">✓ TOPIK II Level 4 — 2025</span>
          </div>
        </div>
      </div>
      <div class="testi-card">
        <div class="testi-stars">
          <svg class="testi-star-svg" viewBox="0 0 24 24"><defs><linearGradient id="sg3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FFE066"></stop><stop offset="100%" stop-color="#F5A623"></stop></linearGradient></defs><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="url(#sg3)" stroke="rgba(245,166,35,.25)" stroke-width="0.5"></polygon></svg>
          <svg class="testi-star-svg" viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="url(#sg3)" stroke="rgba(245,166,35,.25)" stroke-width="0.5"></polygon></svg>
          <svg class="testi-star-svg" viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="url(#sg3)" stroke="rgba(245,166,35,.25)" stroke-width="0.5"></polygon></svg>
          <svg class="testi-star-svg" viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="url(#sg3)" stroke="rgba(245,166,35,.25)" stroke-width="0.5"></polygon></svg>
          <svg class="testi-star-svg" viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="url(#sg3)" stroke="rgba(245,166,35,.25)" stroke-width="0.5"></polygon></svg>
        </div> adalah roadmap-nya jelas banget. Tahu harus mulai dari mana, kapan latihan soal, kapan simulasi ujian. Akhirnya dapat TOPIK Level 3 dan diterima di universitas Sungkyunkwan."<p></p>
        <div class="testi-author">
          <div class="testi-avatar" style="background:#7C3AED;">DM</div>
          <div>
            <div class="testi-name">Dewi — Yogyakarta</div>
            <div class="testi-meta">Mahasiswa, Seoul</div>
            <span class="testi-badge" style="background:#EFF6FF;color:#2563EB;">✓ TOPIK II Level 3 — Kuliah di Korea</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════
     COMMUNITY SECTION
════════════════════════════════════════════ -->
<section class="community-section" id="komunitas">
  <div class="container">
    <div class="community-inner">
      <div class="community-content">
        <span class="section-eyebrow">Komunitas Korea Indonesia</span>
        <h2>Anda Tidak Perlu<br>Menjalani Perjalanan Ini Sendirian</h2>
        <p>Bergabung dengan pelajar, profesional, alumni Korea, dan ribuan anggota komunitas lainnya — saling bantu, sharing pengalaman, dan motivasi satu sama lain.</p>
        <div class="community-features">
          <div class="comm-feat">
            <div class="comm-feat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            </div>
            <h4>Forum Diskusi</h4>
            <p>Tanya jawab grammar, EPS-TOPIK, dan tips ke Korea.</p>
          </div>
          <div class="comm-feat">
            <div class="comm-feat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            </div>
            <h4>Networking</h4>
            <p>Terhubung dengan alumni dan profesional di Korea.</p>
          </div>
          <div class="comm-feat">
            <div class="comm-feat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
            </div>
            <h4>Event &amp; Webinar</h4>
            <p>Ikuti event dan webinar rutin bersama komunitas.</p>
          </div>
          <div class="comm-feat">
            <div class="comm-feat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
            </div>
            <h4>Success Story</h4>
            <p>Inspirasi nyata dari alumni yang sudah berhasil ke Korea.</p>
          </div>
        </div>
        <div class="comm-stats-row">
          <div class="comm-stat">
            <div class="comm-stat-num">10K+</div>
            <div class="comm-stat-label">Member</div>
          </div>
          <div class="comm-stat">
            <div class="comm-stat-num">500+</div>
            <div class="comm-stat-label">Diskusi</div>
          </div>
          <div class="comm-stat">
            <div class="comm-stat-num">200+</div>
            <div class="comm-stat-label">Alumni Korea</div>
          </div>
        </div>
        <div style="margin-top:28px;">
          <a href="#" class="btn btn-primary btn-lg">Gabung Komunitas Gratis</a>
        </div>
      </div>
      <div class="community-visual">
        <div class="forum-preview">
          <div class="fp-header">
            <div class="fp-tabs">
              <button class="fp-tab active">Terbaru</button>
              <button class="fp-tab">Hot</button>
              <button class="fp-tab">EPS-TOPIK</button>
              <button class="fp-tab">TOPIK</button>
            </div>
          </div>
          <div class="fp-post">
            <div class="fp-post-header">
              <div class="fp-avatar" style="background:#2563EB;">AR</div>
              <div class="fp-post-meta">
                <div class="fp-post-author">Ahmad Rizky</div>
                <div class="fp-post-time">5 menit lalu</div>
              </div>
              <span class="fp-tag" style="background:#FEF2F2;color:#DC2626;">EPS-TOPIK</span>
            </div>
            <div class="fp-post-title">Tips mengerjakan soal Listening EPS-TOPIK agar tidak panik?</div>
            <div class="fp-post-preview">Saya sering blank waktu listening — ada yang punya pengalaman dan tips?</div>
            <div class="fp-post-footer">
              <div class="fp-post-stat">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                12 balasan
              </div>
              <div class="fp-post-stat">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3z"></path><path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                48 suka
              </div>
            </div>
          </div>
          <div class="fp-post">
            <div class="fp-post-header">
              <div class="fp-avatar" style="background:#7C3AED;">SP</div>
              <div class="fp-post-meta">
                <div class="fp-post-author">Siti Pratiwi</div>
                <div class="fp-post-time">2 jam lalu</div>
              </div>
              <span class="fp-tag" style="background:#EFF6FF;color:#2563EB;">TOPIK</span>
            </div>
            <div class="fp-post-title">Lulus TOPIK Level 3! Ini strategi belajar saya selama 4 bulan </div>
            <div class="fp-post-preview">Alhamdulillah akhirnya lulus juga. Mau share strategi saya karena banyak yang tanya...</div>
            <div class="fp-post-footer">
              <div class="fp-post-stat">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                87 balasan
              </div>
              <div class="fp-post-stat">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3z"></path><path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                234 suka
              </div>
            </div>
          </div>
          <div class="fp-post">
            <div class="fp-post-header">
              <div class="fp-avatar" style="background:#059669;">DM</div>
              <div class="fp-post-meta">
                <div class="fp-post-author">Dewi Maharani</div>
                <div class="fp-post-time">5 jam lalu</div>
              </div>
              <span class="fp-tag" style="background:#ECFDF5;color:#059669;">Hangul</span>
            </div>
            <div class="fp-post-title">Cara cepat hafal Hangul dalam 1 minggu — metode yang berhasil!</div>
            <div class="fp-post-preview">Saya coba metode baru dan dalam 7 hari sudah bisa baca semua huruf Korea...</div>
            <div class="fp-post-footer">
              <div class="fp-post-stat">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                43 balasan
              </div>
              <div class="fp-post-stat">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3z"></path><path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                189 suka
              </div>
            </div>
          </div>
          <div class="fp-footer-bar">
            <div class="fp-new-post">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              Tulis diskusi baru
            </div>
            <a href="#" class="btn btn-primary btn-sm">Lihat Semua →</a>
          </div>
        </div>
        <div class="community-float" style="top:-18px;right:0;">
           <span>247 member online sekarang</span>
        </div>
        <div class="community-float f2" style="bottom:-16px;left:-10px;">
           <span>Siti baru saja lulus EPS-TOPIK!</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════
     BELAJAR DIMANAPUN — V5 PREMIUM
════════════════════════════════════════════ -->
<section class="belajar-dimanapun-section" id="app">
  <div class="container">
    <div class="bdm-inner">
      <div class="bdm-content">
        <span class="section-eyebrow">Akses Penuh, Kapan Saja</span>
        <h2 class="bdm-title">Belajar Bahasa Korea<br>di Mana Saja, Kapan Saja</h2>
        <p class="bdm-desc">Lanjutkan progres belajar dari desktop maupun smartphone. Semua materi, latihan TOPIK &amp; EPS-TOPIK, serta perkembangan belajar tersinkron secara otomatis dalam satu akun.</p>
        <div class="bdm-benefits">
          <div class="bdm-benefit">
            <div class="bdm-benefit-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
            </div>
            <div>
              <div class="bdm-benefit-title">Mobile Friendly</div>
              <div class="bdm-benefit-desc">Belajar langsung dari smartphone kapan saja.</div>
            </div>
          </div>
          <div class="bdm-benefit">
            <div class="bdm-benefit-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            </div>
            <div>
              <div class="bdm-benefit-title">Sinkron Antar Perangkat</div>
              <div class="bdm-benefit-desc">Lanjutkan belajar tanpa kehilangan progres.</div>
            </div>
          </div>
          <div class="bdm-benefit">
            <div class="bdm-benefit-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
            </div>
            <div>
              <div class="bdm-benefit-title">Progress Belajar Tersimpan</div>
              <div class="bdm-benefit-desc">Pantau perkembangan Anda secara real-time.</div>
            </div>
          </div>
          <div class="bdm-benefit">
            <div class="bdm-benefit-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            </div>
            <div>
              <div class="bdm-benefit-title">Akses 24/7</div>
              <div class="bdm-benefit-desc">Belajar dari rumah, kampus, kantor, atau perjalanan.</div>
            </div>
          </div>
        </div>
        <a href="#mulai" class="btn btn-primary btn-lg">
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          Mulai Belajar Sekarang
        </a>
      </div>
      <div class="bdm-visual">
        <!-- Desktop mockup (70%) -->
        <div class="bdm-desktop">
          <div class="bdm-desktop-bar">
            <div class="bdm-bar-dots"><span></span><span></span><span></span></div>
            <div class="bdm-bar-url">kekorea.com — Dashboard Belajar</div>
          </div>
          <div class="bdm-desktop-screen">
            <div class="bdm-dash-sidebar">
              <div class="bdm-dash-logo">ke<span>korea</span></div>
              <div class="bdm-dash-nav-item active">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect></svg>
                Dashboard
              </div>
              <div class="bdm-dash-nav-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                Materi
              </div>
              <div class="bdm-dash-nav-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                TOPIK
              </div>
              <div class="bdm-dash-nav-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                Progress
              </div>
            </div>
            <div class="bdm-dash-main">
              <div class="bdm-dash-greeting">Selamat pagi, Andi 👋</div>
              <div class="bdm-progress-cards">
                <div class="bdm-prog-card">
                  <div class="bdm-prog-label">Grammar</div>
                  <div class="bdm-prog-bar-wrap"><div class="bdm-prog-bar-fill" style="width:80%;background:#2563EB;"></div></div>
                  <div class="bdm-prog-pct">80%</div>
                </div>
                <div class="bdm-prog-card">
                  <div class="bdm-prog-label">Vocabulary</div>
                  <div class="bdm-prog-bar-wrap"><div class="bdm-prog-bar-fill" style="width:65%;background:#7C3AED;"></div></div>
                  <div class="bdm-prog-pct">65%</div>
                </div>
                <div class="bdm-prog-card">
                  <div class="bdm-prog-label">Listening</div>
                  <div class="bdm-prog-bar-wrap"><div class="bdm-prog-bar-fill" style="width:40%;background:#059669;"></div></div>
                  <div class="bdm-prog-pct">40%</div>
                </div>
              </div>
              <div class="bdm-topik-score">
                <div class="bdm-score-label">Skor TOPIK Terakhir</div>
                <div class="bdm-score-big">185<span>/200</span></div>
                <div class="bdm-score-badge">Level 3 — Lanjutkan! 🎯</div>
              </div>
              <div class="bdm-roadmap-mini">
                <div class="bdm-rm-item done">✓ Hangul</div>
                <div class="bdm-rm-item done">✓ Grammar</div>
                <div class="bdm-rm-item done">✓ Vocab</div>
                <div class="bdm-rm-item current">→ TOPIK</div>
                <div class="bdm-rm-item">EPS</div>
              </div>
            </div>
          </div>
        </div>
        <!-- Mobile mockup (30%) -->
        <div class="bdm-phone">
          <div class="bdm-phone-notch"></div>
          <div class="bdm-phone-screen">
            <div class="bdm-phone-header">
              <div style="font-size:9px;font-weight:700;color:rgba(255,255,255,.9);">TOPIK Reading</div>
              <div style="font-size:8px;color:rgba(255,255,255,.5);">Soal 12/30</div>
            </div>
            <div style="background:rgba(255,255,255,.05);border-radius:6px;padding:8px;margin-bottom:8px;font-size:8px;line-height:1.6;color:rgba(255,255,255,.8);">한국어를 공부하는<br>이유는 무엇입니까?</div>
            <div class="bdm-phone-opts">
              <div class="bdm-phone-opt">일이 좋아서</div>
              <div class="bdm-phone-opt active">한국에 가고 싶어서 ✓</div>
              <div class="bdm-phone-opt">음식이 맛있어서</div>
              <div class="bdm-phone-opt">k-pop을 좋아해서</div>
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;">
              <div style="font-size:7px;color:rgba(255,255,255,.4);">40% selesai</div>
              <div style="background:#2563EB;color:#fff;font-size:7px;font-weight:700;padding:3px 8px;border-radius:4px;">Selanjutnya →</div>
            </div>
            <!-- Floating badges -->
            <div class="bdm-float-badge xp">+15 XP hari ini ⚡</div>
            <div class="bdm-float-badge streak">🔥 7 Hari Streak</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════
     ARTIKEL / EDUKASI
════════════════════════════════════════════ -->
<section class="artikel-section" id="artikel">
  <div class="container">
    <div class="section-header">
      <span class="section-eyebrow">Panduan Belajar Bahasa Korea</span>
      <h2 class="section-title">Tips Belajar Bahasa Korea,<br>TOPIK, EPS-TOPIK &amp; Karier ke Korea</h2>
    </div>
    <!-- Article Categories -->
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:32px;">
      <span style="padding:6px 16px;border-radius:100px;background:var(--blue-light);color:var(--blue);font-size:12.5px;font-weight:600;border:1.5px solid rgba(37,99,235,.15);cursor:pointer;">Semua</span>
      <span style="padding:6px 16px;border-radius:100px;background:var(--white);color:var(--gray-5);font-size:12.5px;font-weight:600;border:1.5px solid var(--gray-2);cursor:pointer;">Belajar Bahasa Korea</span>
      <span style="padding:6px 16px;border-radius:100px;background:var(--white);color:var(--gray-5);font-size:12.5px;font-weight:600;border:1.5px solid var(--gray-2);cursor:pointer;">Latihan TOPIK</span>
      <span style="padding:6px 16px;border-radius:100px;background:var(--white);color:var(--gray-5);font-size:12.5px;font-weight:600;border:1.5px solid var(--gray-2);cursor:pointer;">Latihan EPS-TOPIK</span>
      <span style="padding:6px 16px;border-radius:100px;background:var(--white);color:var(--gray-5);font-size:12.5px;font-weight:600;border:1.5px solid var(--gray-2);cursor:pointer;">Kerja ke Korea</span>
      <span style="padding:6px 16px;border-radius:100px;background:var(--white);color:var(--gray-5);font-size:12.5px;font-weight:600;border:1.5px solid var(--gray-2);cursor:pointer;">Hangul</span>
    </div>
    <div class="artikel-grid">
      <article class="artikel-card">
        <div class="artikel-img"></div>
        <div class="artikel-body">
          <span class="artikel-tag">Panduan</span>
          <h3>Cara Mulai Belajar Bahasa Korea dari Nol untuk Pemula</h3>
          <p>Panduan lengkap langkah demi langkah untuk kamu yang baru pertama kali belajar bahasa Korea — dari Hangul hingga kalimat pertama.</p>
          <a href="#" class="artikel-link">Baca Selengkapnya <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg></a>
        </div>
      </article>
      <article class="artikel-card small">
        <div class="artikel-img small"></div>
        <div class="artikel-body">
          <span class="artikel-tag red">EPS-TOPIK</span>
          <h3>Strategi Lulus EPS-TOPIK dalam 3 Bulan</h3>
          <p>Tips dan trik persiapan ujian EPS-TOPIK yang efektif.</p>
          <a href="#" class="artikel-link">Baca <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg></a>
        </div>
      </article>
      <article class="artikel-card small">
        <div class="artikel-img small"></div>
        <div class="artikel-body">
          <span class="artikel-tag green">TOPIK Kuliah</span>
          <h3>Syarat TOPIK untuk Masuk Universitas Korea</h3>
          <p>Informasi persyaratan bahasa Korea untuk kuliah di Korea.</p>
          <a href="#" class="artikel-link">Baca <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg></a>
        </div>
      </article>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════
     FINAL CTA — UPGRADED
════════════════════════════════════════════ -->
<section class="final-cta-upgrade" id="daftar">
  <div class="container">
    <div class="fcu-inner">
      <div class="fcu-eyebrow">
        <span></span>
        Mulai Belajar Bahasa Korea Hari Ini
        <span></span>
      </div>
      <h2 class="fcu-h1">Mulai Persiapan TOPIK<br>dan EPS-TOPIK <span class="hl">Sekarang</span></h2>
      <p class="fcu-sub">Platform belajar bahasa Korea terlengkap untuk orang Indonesia — 10.000+ soal latihan, 100+ tools, dan komunitas aktif yang siap mendukung perjalananmu ke Korea.</p>
      <div class="fcu-btns">
        <a href="#mulai" class="btn btn-white btn-xl">
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          Mulai Belajar Gratis
        </a>
        <a href="#komunitas" class="btn btn-outline-white btn-xl">
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          Gabung Komunitas
        </a>
      </div>
      <div class="fcu-social-proof">
        <span class="fcu-sp-item">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 6L9 17l-5-5 1.4-1.4L9 14.2 18.6 4.6z"></path></svg>
          Gratis memulai
        </span>
        <div class="fcu-divider"></div>
        <span class="fcu-sp-item">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 6L9 17l-5-5 1.4-1.4L9 14.2 18.6 4.6z"></path></svg>
          Akses 10.000+ soal latihan
        </span>
        <div class="fcu-divider"></div>
        <span class="fcu-sp-item">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 6L9 17l-5-5 1.4-1.4L9 14.2 18.6 4.6z"></path></svg>
          100+ tools belajar
        </span>
        <div class="fcu-divider"></div>
        <span class="fcu-sp-item">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 6L9 17l-5-5 1.4-1.4L9 14.2 18.6 4.6z"></path></svg>
          Komunitas aktif
        </span>
      </div>
      <div class="fcu-avatars">
        <div class="fcu-avatar" style="background:linear-gradient(135deg,#2563EB,#3B82F6);">AR</div>
        <div class="fcu-avatar" style="background:linear-gradient(135deg,#7C3AED,#8B5CF6);">DM</div>
        <div class="fcu-avatar" style="background:linear-gradient(135deg,#059669,#10B981);">SP</div>
        <div class="fcu-avatar" style="background:linear-gradient(135deg,#DC2626,#EF4444);">BK</div>
        <div class="fcu-avatar" style="background:linear-gradient(135deg,#B46A00,#D97706);">NN</div>
        <div class="fcu-avatar" style="background:linear-gradient(135deg,#C2185B,#EC4899);">RW</div>
        <div class="fcu-avatar" style="background:linear-gradient(135deg,#0C5FA5,#2563EB);">YP</div>
        <div class="fcu-avatar" style="background:rgba(255,255,255,.12);border-color:rgba(255,255,255,.3);font-size:11px;color:rgba(255,255,255,.85);letter-spacing:-.02em;">+9K</div>
      </div>
      <div class="fcu-social-label">Bergabung dengan <strong>10.000+ pengguna aktif</strong> yang sedang mempersiapkan diri ke Korea </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════
     FOOTER
════════════════════════════════════════════ -->
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="/" class="footer-logo">
          <span class="logo-ke" style="color:#6B9EFF;">ke</span><span style="color:#fff;">korea</span><span style="color:rgba(255,255,255,.35);font-size:20px;">.com</span>
        </a>
        <p>Ekosistem Korea Indonesia yang menaungi seluruh perjalanan Anda — belajar bahasa, persiapan ujian, karier, komunitas, dan informasi Korea.</p>
        <div style="font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:10px;">Platform dalam ekosistem</div>
        <div class="footer-platforms">
          <a href="https://epstopik.id" class="footer-plat-badge" style="background:rgba(212,43,43,.2);color:#FF8A8A;border:1px solid rgba(212,43,43,.3);" target="_blank">epstopik.id ↗</a>
          <a href="https://hanguko.id" class="footer-plat-badge" style="background:rgba(27,79,216,.25);color:#7EB2FF;border:1px solid rgba(27,79,216,.3);" target="_blank">hanguko.id ↗</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Belajar</h4>
        <ul>
          <li><a href="#">Hangul &amp; Alfabet</a></li>
          <li><a href="#">Grammar Korea</a></li>
          <li><a href="#">Vocabulary Harian</a></li>
          <li><a href="#">Listening &amp; Speaking</a></li>
          <li><a href="#">Mini Quiz Tools</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Ujian &amp; Platform</h4>
        <ul>
          <li><a href="#">TOPIK I &amp; II</a></li>
          <li><a href="#">EPS-TOPIK</a></li>
          <li><a href="#">Simulasi CBT</a></li>
          <li><a href="https://epstopik.id" target="_blank">epstopik.id ↗</a></li>
          <li><a href="https://hanguko.id" target="_blank">hanguko.id ↗</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Info &amp; Panduan</h4>
        <ul>
          <li><a href="#">Kerja di Korea</a></li>
          <li><a href="#">Kuliah di Korea</a></li>
          <li><a href="#">Blog &amp; Artikel</a></li>
          <li><a href="#">Tentang Kami</a></li>
          <li><a href="#">Kebijakan Privasi</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Komunitas &amp; App</h4>
        <ul>
          <li><a href="#komunitas">Forum Diskusi</a></li>
          <li><a href="#komunitas">Study Group</a></li>
          <li><a href="#komunitas">Mentoring Alumni</a></li>
          <li><a href="#app">Download App (Soon)</a></li>
          <li><a href="#">WhatsApp Channel</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2025 kekorea.com — Ekosistem Korea untuk Indonesia · epstopik.id · hanguko.id. Semua hak dilindungi.</p>
      <p class="footer-tagline">Dibuat dengan ️ untuk para pejuang yang ingin ke Korea </p>
    </div>
  </div>
</footer>




` }} />
  );
}
