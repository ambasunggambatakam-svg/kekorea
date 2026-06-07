'use client';

import { useState } from 'react';

/* ─── Tab data ─── */
const TABS = [
  { key: 'hangul', label: 'Hangul & Alfabet' },
  { key: 'grammar', label: 'Grammar' },
  { key: 'vocab', label: 'Vocabulary' },
  { key: 'listening', label: 'Listening & Speaking' },
  { key: 'tools', label: 'Tools Gratis' },
] as const;

type TabKey = typeof TABS[number]['key'];

/* ─── Card data per tab ─── */
const TAB_CARDS: Record<TabKey, { title: string; meta: string; items: string[] }[]> = {
  hangul: [
    { title: 'Latihan Huruf Hangul', meta: 'Beginner • Pilih per huruf', items: ['Latihan Huruf Konsonan (ㄱ–ㅎ)', 'Latihan Huruf Vokal (ㅏ–ㅣ)', 'Kombinasi Konsonan + Vokal'] },
    { title: 'Latihan Membaca Hangul', meta: 'Beginner • Audio + teks', items: ['Membaca Suku Kata Dasar', 'Membaca Kata Sederhana', 'Membaca Kalimat Pendek'] },
    { title: 'Latihan Menulis Hangul', meta: 'Beginner • Urutan penulisan', items: ['Urutan Penulisan Konsonan', 'Urutan Penulisan Vokal', 'Latihan Menulis Kata'] },
  ],
  grammar: [
    { title: 'Grammar Dasar', meta: 'Beginner • Fondasi tata bahasa', items: ['Kalimat Dasar Korea', 'Pola SOV (Subject-Object-Verb)', 'Kata Kerja Dasar'] },
    { title: 'Partikel & Pola Kalimat', meta: 'Intermediate • Partikel Korea', items: ['Partikel 은/는 (Topik)', 'Partikel 이/가 (Subjek)', 'Partikel 을/를 (Objek)'] },
    { title: 'Grammar Lanjutan', meta: 'Advanced • Pola kalimat kompleks', items: ['Pola Kalimat Formal', 'Pola Kalimat Informal', 'Konjungsi & Ekspresi'] },
  ],
  vocab: [
    { title: 'Kosakata Harian', meta: 'Semua Level • Setiap hari', items: ['Quiz Vocabulary Harian', 'Tebak Arti Kata Korea', 'Sinonim Bahasa Korea'] },
    { title: 'Kosakata Kerja & Studi', meta: 'Intermediate • EPS & TOPIK', items: ['Kosakata Pekerjaan', 'Kosakata Kampus & Kuliah', 'Frasa & Idiom Korea'] },
    { title: 'Fun Vocabulary', meta: 'Semua Level • K-Pop & Drama', items: ['Tebak Kata dari K-Pop Lirik', 'Tebak Kata dari Drama Korea', 'Tebak Arti Slang Korea'] },
  ],
  listening: [
    { title: 'Tips Listening', meta: 'Semua Level', items: ['Tips Listening TOPIK', 'Listening dengan Audio'] },
    { title: 'Speaking & Pelafalan', meta: 'Beginner–Intermediate', items: ['Latihan Pronunciation', 'Percakapan Sehari-hari'] },
    { title: 'Tebak dari Audio', meta: 'Intermediate', items: ['Tebak Huruf dari Audio', 'Latihan Listening EPS-TOPIK'] },
  ],
  tools: [
    { title: 'Mini Quiz', meta: 'Gratis • Semua level', items: ['Quiz Vocabulary Harian', 'Quiz Grammar Korea'] },
    { title: 'Latihan Kata & Kalimat', meta: 'Gratis • Interaktif', items: ['Latihan Menyusun Kalimat', 'Pilih Grammar yang Benar'] },
    { title: 'Tebak Arti Kata', meta: 'Gratis • Fun', items: ['Tebak Arti Kata Korea', 'Tebak Kata dari Emoji'] },
  ],
};

/* ─── Component ─── */
export function BelajarSection() {
  const [activeTab, setActiveTab] = useState<TabKey>('hangul');

  return (
    <section className="belajar-section" id="belajar">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Kurikulum Belajar Bahasa Korea</span>
          <h2 className="section-title">
            Belajar Bahasa Korea<br />
            <span className="text-blue">Terstruktur dari Hangul hingga TOPIK</span>
          </h2>
          <p className="section-sub">
            Jalur belajar bahasa Korea yang terstruktur — dari belajar Hangul pertama kali, kosakata Korea,
            tata bahasa, latihan TOPIK, hingga simulasi EPS-TOPIK untuk persiapan kerja ke Korea.
          </p>
        </div>

        {/* Tabs */}
        <div className="belajar-tabs" id="belajarTabs">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              className={`belajar-tab${activeTab === tab.key ? ' active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Panels */}
        {TABS.map((tab) => (
          <div
            key={tab.key}
            className={`belajar-panel${activeTab === tab.key ? ' active' : ''}`}
            id={`tab-${tab.key}`}
          >
            <div className="belajar-grid">
              {TAB_CARDS[tab.key].map((card) => (
                <div className="belajar-card" key={card.title}>
                  <div className="belajar-card-header">
                    <div className="belajar-card-icon" style={{ background: '#EFF6FF' }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      </svg>
                    </div>
                    <div>
                      <h4>{card.title}</h4>
                      <div className="belajar-card-meta">{card.meta}</div>
                    </div>
                  </div>
                  <div className="belajar-card-body">
                    <ul className="belajar-submenu">
                      {card.items.map((item) => (
                        <li key={item}>
                          <a href={`/p/${item.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="belajar-card-footer">
                    <a href={`/p/${card.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="btn btn-primary btn-sm">Mulai Belajar</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
