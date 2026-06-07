'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

/* ─── SVG Icon helpers ─── */
const ChevronDown = ({ style }: { style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={style}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

/* ─── Data: Nav mega-menu structure ─── */
const BELAJAR_SECTIONS = [
  {
    title: 'Hangul & Alfabet',
    items: [
      { icon: 'ㄱ', label: 'Latihan Huruf', sublabel: 'Pilih per huruf', href: '/p/latihan-huruf' },
      { icon: '읽', label: 'Latihan Membaca', sublabel: 'Hangul dasar', href: '/p/latihan-membaca' },
      { icon: '쓰', label: 'Latihan Menulis', sublabel: 'Tulis huruf Korea', href: '/p/latihan-menulis' },
    ],
  },
  {
    title: 'Grammar & Vocabulary',
    items: [
      { icon: '문법', label: 'Grammar Dasar', sublabel: 'Pola kalimat & partikel', href: '/p/grammar-dasar' },
      { icon: '단어', label: 'Vocabulary Harian', sublabel: 'Kosakata sehari-hari', href: '/p/vocabulary-harian' },
      { icon: '심화', label: 'Lanjutan', sublabel: 'Partikel & sinonim', href: '/p/grammar-lanjutan' },
    ],
  },
  {
    title: 'Listening & Speaking',
    items: [
      { icon: 'headphones', label: 'Listening Audio', sublabel: 'Dengan audio interaktif', href: '/p/listening-audio' },
      { icon: 'mic', label: 'Speaking & Pronuniasi', sublabel: 'Latihan ucapan', href: '/p/speaking-pronuniasi' },
      { icon: 'quiz', label: 'Mini Quiz Tools', sublabel: 'Tebak arti & kalimat', href: '/p/mini-quiz-tools' },
    ],
  },
];

const UJIAN_ITEMS = [
  { label: 'EPS-TOPIK', sublabel: 'Kerja di Korea', href: '/p/eps-topik' },
  { label: 'TOPIK I & II', sublabel: 'Level 1–6', href: '/p/topik-1-2' },
  { label: 'Simulasi CBT', sublabel: 'Tryout online', href: '/p/simulasi-cbt' },
  { label: 'Strategi Lulus', sublabel: 'Tips & passing grade', href: '/p/strategi-lulus' },
];

const KOREA_ITEMS = [
  { label: 'Kerja di Korea', sublabel: 'Syarat, gaji, tips seleksi', href: '/p/kerja-di-korea' },
  { label: 'Kuliah di Korea', sublabel: 'Beasiswa & universitas', href: '/p/kuliah-di-korea' },
  { label: 'Kehidupan di Korea', sublabel: 'Biaya hidup & adaptasi', href: '/p/kehidupan-di-korea' },
];

/* ─── Sub-components ─── */
function DropdownIcon({ icon }: { icon: string }) {
  if (icon.length <= 3 && !/^[a-z]/.test(icon)) {
    return (
      <div
        className="nav-dropdown-icon"
        style={{ fontSize: '11px', fontWeight: 700 }}
      >
        {icon}
      </div>
    );
  }
  return <div className="nav-dropdown-icon" style={{ background: '#EFF6FF', color: '#2563EB' }} />;
}

function MegaDropdown({ sections, className = '' }: { sections: typeof BELAJAR_SECTIONS, className?: string }) {
  return (
    <div className={`nav-dropdown nav-mega ${className}`}>
      <div className="nav-mega-grid">
        {sections.map((section) => (
          <div className="nav-mega-section" key={section.title}>
            <div className="nav-mega-title">{section.title}</div>
            {section.items.map((item) => (
              <a href={item.href} className="nav-dropdown-item" key={item.label}>
                <DropdownIcon icon={item.icon} />
                <div className="nav-dropdown-item-text">
                  <span>{item.label}</span>
                  <span className="nav-dropdown-label">{item.sublabel}</span>
                </div>
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function SimpleDropdown({ items, style, className = '' }: {
  items: { label: string; sublabel: string; href: string }[];
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <div className={`nav-dropdown ${className}`} style={style}>
      {items.map((item) => (
        <a href={item.href} className="nav-dropdown-item" key={item.label}>
          <div className="nav-dropdown-icon" style={{ background: '#EFF6FF', color: '#2563EB' }} />
          <div className="nav-dropdown-item-text">
            <span>{item.label}</span>
            <span className="nav-dropdown-label">{item.sublabel}</span>
          </div>
        </a>
      ))}
    </div>
  );
}

/* ─── Main Navbar ─── */
export function Navbar() {
  const navbarRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (e: React.MouseEvent, dropdownName: string) => {
    if (window.innerWidth <= 768) {
      e.preventDefault(); // Prevent Link navigation on mobile if they click to open menu
      setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
    }
  };

  /* Scroll shadow effect */
  useEffect(() => {
    const handleScroll = () => {
      navbarRef.current?.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Close menu on outside click */
  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [menuOpen]);

  /* Smooth scroll for hash links */
  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (!href || href === '#') { e.preventDefault(); return; }
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="navbar" id="navbar" ref={navbarRef}>
      <div className="container nav-container">
        <Link href="/" className="nav-logo">
          <span className="logo-ke">ke</span>
          <span className="logo-korea">korea</span>
          <span className="logo-dot">.com</span>
        </Link>

        <button
          className="nav-toggle"
          id="navToggle"
          aria-label="Buka menu"
          onClick={() => setMenuOpen((prev) => !prev)}
          style={{ transform: menuOpen ? 'rotate(90deg)' : '' }}
        >
          <span /><span /><span />
        </button>

        <ul className={`nav-menu${menuOpen ? ' open' : ''}`} id="navMenu">
          {/* Belajar — Mega dropdown */}
          <li className="nav-item">
            <Link href="/belajar" className="nav-link" onClick={(e) => toggleDropdown(e, 'belajar')}>
              Belajar <ChevronDown style={{ transform: openDropdown === 'belajar' ? 'rotate(180deg)' : '' }} />
            </Link>
            <MegaDropdown sections={BELAJAR_SECTIONS} className={openDropdown === 'belajar' ? 'mobile-open' : ''} />
          </li>

          {/* Ujian */}
          <li className="nav-item">
            <Link href="/ujian" className="nav-link" onClick={(e) => toggleDropdown(e, 'ujian')}>
              Ujian <ChevronDown style={{ transform: openDropdown === 'ujian' ? 'rotate(180deg)' : '' }} />
            </Link>
            <SimpleDropdown items={UJIAN_ITEMS} style={{ minWidth: 200 }} className={openDropdown === 'ujian' ? 'mobile-open' : ''} />
          </li>

          {/* Tools — Mega */}
          <li className="nav-item">
            <Link href="/tools" className="nav-link" onClick={(e) => toggleDropdown(e, 'tools')}>
              Tools <ChevronDown style={{ transform: openDropdown === 'tools' ? 'rotate(180deg)' : '' }} />
            </Link>
            {/* Simplified mega for tools */}
            <div className={`nav-dropdown nav-mega ${openDropdown === 'tools' ? 'mobile-open' : ''}`}>
              <div className="nav-mega-grid">
                <div className="nav-mega-section">
                  <div className="nav-mega-title">Latihan &amp; Tes</div>
                  <a href="/p/mini-topik" className="nav-dropdown-item">
                    <div className="nav-dropdown-icon" style={{ background: '#EFF6FF', color: '#2563EB' }} />
                    <div className="nav-dropdown-item-text">
                      <span>Mini TOPIK (1–20)</span>
                      <span className="nav-dropdown-label">Simulasi soal TOPIK</span>
                    </div>
                  </a>
                  <a href="/p/latihan-eps-topik" className="nav-dropdown-item">
                    <div className="nav-dropdown-icon" style={{ background: '#EFF6FF', color: '#2563EB' }} />
                    <div className="nav-dropdown-item-text">
                      <span>EPS-TOPIK (Latihan)</span>
                      <span className="nav-dropdown-label">Soal EPS-TOPIK</span>
                    </div>
                  </a>
                  <a href="/p/cek-level-korea" className="nav-dropdown-item">
                    <div className="nav-dropdown-icon" style={{ background: '#EFF6FF', color: '#2563EB' }} />
                    <div className="nav-dropdown-item-text">
                      <span>Cek Level Korea</span>
                      <span className="nav-dropdown-label">Tes kemampuanmu</span>
                    </div>
                  </a>
                </div>
                <div className="nav-mega-section">
                  <div className="nav-mega-title">Vocabulary &amp; Grammar</div>
                  <a href="/p/tebak-arti-kata" className="nav-dropdown-item">
                    <div className="nav-dropdown-icon" style={{ background: '#EFF6FF', color: '#2563EB' }} />
                    <div className="nav-dropdown-item-text">
                      <span>Tebak Arti Kata</span>
                      <span className="nav-dropdown-label">21–40</span>
                    </div>
                  </a>
                  <a href="/p/latihan-partikel" className="nav-dropdown-item">
                    <div className="nav-dropdown-icon" style={{ background: '#EFF6FF', color: '#2563EB' }} />
                    <div className="nav-dropdown-item-text">
                      <span>Latihan Partikel</span>
                      <span className="nav-dropdown-label">은/는/이/가</span>
                    </div>
                  </a>
                  <a href="/p/tebak-kpop-lirik" className="nav-dropdown-item">
                    <div className="nav-dropdown-icon" style={{ background: '#EFF6FF', color: '#2563EB' }} />
                    <div className="nav-dropdown-item-text">
                      <span>Tebak K-Pop Lirik</span>
                      <span className="nav-dropdown-label">Fun + belajar</span>
                    </div>
                  </a>
                </div>
                <div className="nav-mega-section">
                  <div className="nav-mega-title">Kalkulator &amp; Persiapan</div>
                  <a href="/p/kalkulator-skor-topik" className="nav-dropdown-item">
                    <div className="nav-dropdown-icon" style={{ background: '#EFF6FF', color: '#2563EB' }} />
                    <div className="nav-dropdown-item-text">
                      <span>Kalkulator Skor TOPIK</span>
                      <span className="nav-dropdown-label">41–60</span>
                    </div>
                  </a>
                  <a href="/p/estimasi-gaji-korea" className="nav-dropdown-item">
                    <div className="nav-dropdown-icon" style={{ background: '#EFF6FF', color: '#2563EB' }} />
                    <div className="nav-dropdown-item-text">
                      <span>Estimasi Gaji Korea</span>
                      <span className="nav-dropdown-label">Kurs &amp; biaya hidup</span>
                    </div>
                  </a>
                  <a href="/p/checklist-ke-korea" className="nav-dropdown-item">
                    <div className="nav-dropdown-icon" style={{ background: '#EFF6FF', color: '#2563EB' }} />
                    <div className="nav-dropdown-item-text">
                      <span>Checklist ke Korea</span>
                      <span className="nav-dropdown-label">81–100</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </li>

          {/* Korea */}
          <li className="nav-item">
            <Link href="/korea" className="nav-link" onClick={(e) => toggleDropdown(e, 'korea')}>
              Korea <ChevronDown style={{ transform: openDropdown === 'korea' ? 'rotate(180deg)' : '' }} />
            </Link>
            <SimpleDropdown items={KOREA_ITEMS} style={{ minWidth: 210 }} className={openDropdown === 'korea' ? 'mobile-open' : ''} />
          </li>

          {/* Simple links */}
          <li className="nav-item">
            <a href="#komunitas" className="nav-link" onClick={handleHashClick}>Komunitas</a>
          </li>
          <li className="nav-item">
            <a href="#artikel" className="nav-link" onClick={handleHashClick}>Korea Insight</a>
          </li>

          {/* Platform badges */}
          <li style={{ display: 'flex', alignItems: 'center', gap: 6, marginLeft: 8 }}>
            <a href="https://epstopik.id" className="nav-badge" target="_blank" rel="noopener" title="Sub-platform EPS-TOPIK">
              epstopik.id ↗
            </a>
            <a href="https://hanguko.id" className="nav-badge nav-badge--blue" target="_blank" rel="noopener" title="Sub-platform TOPIK & Bahasa Korea">
              hanguko.id ↗
            </a>
          </li>

          <li>
            <a href="#mulai" className="btn btn-primary btn-sm" onClick={handleHashClick}>Mulai Latihan</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
