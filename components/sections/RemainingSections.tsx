/**
 * Remaining homepage sections — grouped for maintainability.
 * Each is exported as a named component.
 */

/* ═══════════ ROADMAP ═══════════ */
const ROADMAP_STEPS = [
  { step: 1, period: 'Minggu 1–2', title: 'Mampu Membaca Hangul', desc: 'Kamu bisa membaca alfabet Korea, mengenali bunyi konsonan dan vokal, dan mulai mengeja kata-kata sederhana.', cta: 'Mulai Belajar Hangul', href: '#belajar' },
  { step: 2, period: 'Bulan 1', title: 'Menguasai Kosakata Dasar', desc: 'Kamu hafal 500+ kosakata harian dan pekerjaan yang sering muncul di EPS-TOPIK dan percakapan Korea.' },
  { step: 3, period: 'Bulan 2', title: 'Paham Tata Bahasa Korea Dasar', desc: 'Kamu bisa menyusun kalimat sederhana — partikel, konjugasi, dan pola kalimat formal yang diperlukan di ujian.' },
  { step: 4, period: 'Bulan 3–4', title: 'Mulai Simulasi TOPIK dan Naik Level', desc: 'Kamu mulai latihan soal TOPIK berLevel, tahu di mana kelemahan, dan terus meningkatkan skor setiap sesi.', cta: 'Coba di Hanguko.id', href: 'https://hanguko.id', external: true },
  { step: 5, period: 'Bulan 4–5', title: 'Siap Mengikuti Ujian Resmi', desc: 'Kamu sudah terbiasa dengan format, timer, dan tekanan ujian — simulasi CBT EPS-TOPIK terasa seperti latihan biasa.', cta: 'Coba di epstopik.id', href: 'https://epstopik.id', external: true },
  { step: 6, period: 'Bulan 5–6', title: 'Lulus & Siap ke Korea', desc: 'Kamu lulus EPS-TOPIK atau TOPIK dengan skor memuaskan — karier atau kuliah impianmu di Korea tinggal selangkah lagi.' },
];

export function RoadmapSection() {
  return (
    <section className="roadmap" id="roadmap">
      <div className="container">
        <div className="section-header section-header--center">
          <span className="section-eyebrow">Roadmap Belajar Bahasa Korea</span>
          <h2 className="section-title">Bayangkan Kamu <span className="text-blue">di Mana dalam 6 Bulan</span></h2>
          <p className="section-sub">Ikuti jalur belajar yang sudah terbukti — setiap tahap membawa kamu lebih dekat ke Korea.</p>
        </div>
        <div className="roadmap-vertical">
          {ROADMAP_STEPS.map((s) => (
            <div className={`rv-step${s.step === 1 ? ' rv-active' : ''}`} data-step={s.step} key={s.step}>
              <div className="rv-left">
                <div className="rv-num">{s.step}</div>
                <div className="rv-line" />
              </div>
              <div className="rv-content">
                <div className="rv-label">{s.period}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                {s.cta && (
                  <a href={s.href} className="rv-cta" {...(s.external ? { target: '_blank', rel: 'noopener' } : {})} style={{ marginTop: 10 }}>
                    {s.cta}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════ TESTIMONIALS ═══════════ */
const TESTIMONIALS = [
  { quote: 'setiap hari selama 2 bulan. Soalnya memang mirip ujian asli — skor saya 144 dari 200, lulus, dan sekarang sudah kerja di pabrik Incheon. Rekomendasiin banget!', name: 'Andi R. — Bekasi', role: 'Manufaktur, Incheon Korea', badge: '✓ Lulus EPS-TOPIK 2025', badgeStyle: { background: '#FEF2F2', color: '#DC2626' }, avatarColor: '#2563EB', initials: 'AR' },
  { quote: 'tidak tahu Hangul sama sekali. 4 bulan belajar di Kekorea dan hanguko.id — berhasil TOPIK Level 4 skor 185. Sekarang sudah kerja di perusahaan Korea di Seoul.', name: 'Nisa — Bandung', role: 'Karyawan, Seoul', badge: '✓ TOPIK II Level 4 — 2025', badgeStyle: { background: '#ECFDF5', color: '#059669' }, avatarColor: '#059669', initials: 'SP' },
  { quote: 'adalah roadmap-nya jelas banget. Tahu harus mulai dari mana, kapan latihan soal, kapan simulasi ujian. Akhirnya dapat TOPIK Level 3 dan diterima di universitas Sungkyunkwan.', name: 'Dewi — Yogyakarta', role: 'Mahasiswa, Seoul', badge: '✓ TOPIK II Level 3 — Kuliah di Korea', badgeStyle: { background: '#EFF6FF', color: '#2563EB' }, avatarColor: '#7C3AED', initials: 'DM' },
];

export function TestimonialsSection() {
  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="section-header section-header--center">
          <span className="section-eyebrow">Cerita Sukses</span>
          <h2 className="section-title">Mereka Sudah Berhasil ke Korea</h2>
          <p className="section-sub">Hasil nyata dari pengguna yang mempersiapkan diri dengan serius di ekosistem Kekorea.</p>
        </div>
        <div className="testi-grid">
          {TESTIMONIALS.map((t) => (
            <div className="testi-card" key={t.name}>
              <div className="testi-stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="testi-star-svg" viewBox="0 0 24 24">
                    {i === 0 && <defs><linearGradient id={`sg-${t.initials}`} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#FFE066" /><stop offset="100%" stopColor="#F5A623" /></linearGradient></defs>}
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill={`url(#sg-${t.initials})`} stroke="rgba(245,166,35,.25)" strokeWidth="0.5" />
                  </svg>
                ))}
              </div>
              <p>&ldquo;{t.quote}&rdquo;</p>
              <div className="testi-author">
                <div className="testi-avatar" style={{ background: t.avatarColor }}>{t.initials}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-meta">{t.role}</div>
                  <span className="testi-badge" style={t.badgeStyle}>{t.badge}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════ VALUE SECTION ═══════════ */
const VALUES = [
  { title: 'Langsung Bisa Dipraktikkan', desc: 'Latihan interaktif langsung — bukan hanya baca teori. Kamu langsung mengerjakan soal, menjawab quiz, dan melihat hasilnya.', bg: '#EFF6FF', color: '#2563EB' },
  { title: 'Simulasi Soal Ujian Asli', desc: 'Soal dirancang mengacu pada format TOPIK dan EPS-TOPIK resmi — bukan soal asal-asalan — jadi latihan kamu benar-benar relevan.', bg: '#FEF2F2', color: '#DC2626' },
  { title: 'Lebih Fleksibel & Gratis', desc: 'Akses kapan saja, di mana saja — di HP, tablet, atau laptop. Tanpa daftar, tanpa bayar. Lebih efisien dari buku fisik.', bg: '#ECFDF5', color: '#059669' },
  { title: 'Feedback & Insight Otomatis', desc: 'Setiap latihan memberikan skor, level, dan insight — "kamu kuat di vocabulary, perlu tingkatkan grammar." Bukan hanya skor buta.', bg: '#FFF8E7', color: '#B46A00' },
];

export function ValueSection() {
  return (
    <section className="value-section">
      <div className="container">
        <div className="section-header section-header--center">
          <span className="section-eyebrow">Kenapa kekorea.com?</span>
          <h2 className="section-title">Cara Belajar yang Lebih <span className="text-blue">Efektif &amp; Interaktif</span></h2>
        </div>
        <div className="value-grid">
          {VALUES.map((v) => (
            <div className="value-card" key={v.title}>
              <div className="value-icon" style={{ background: v.bg, color: v.color }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
              <div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════ MENGAPA SECTION ═══════════ */
export function MengapaSection() {
  return (
    <section style={{ padding: '80px 0', background: 'var(--gray-1)' }}>
      <div className="container">
        <div className="section-header section-header--center">
          <span className="section-eyebrow">Mengapa Belajar di Kekorea?</span>
          <h2 className="section-title">Lebih Terarah dari<br />Belajar Sendiri</h2>
          <p className="section-sub">Mengumpulkan materi dari berbagai sumber membuang waktu dan energi. Di Kekorea semua sudah tersedia, terstruktur, dan siap digunakan.</p>
        </div>
        <div className="mengapa-grid-3col">
          {[
            { title: 'Semua Kebutuhan Belajar', desc: 'Satu platform untuk belajar Hangul, tata bahasa, kosakata, latihan TOPIK, dan EPS-TOPIK. Tidak perlu buka 10 tab berbeda.', accent: '' },
            { title: 'Roadmap Belajar yang Jelas', desc: 'Tahu persis harus mulai dari mana, fokus apa sekarang, dan kapan siap ujian — bukan belajar secara acak.', accent: 'red' },
            { title: 'Komunitas Aktif', desc: 'Belajar bareng ribuan pelajar Indonesia lainnya. Diskusi, motivasi, dan sharing pengalaman dari yang sudah berhasil ke Korea.', accent: 'green' },
          ].map((item) => (
            <div className={`pos-card${item.accent ? ` ${item.accent}-accent` : ''}`} style={{ textAlign: 'center', padding: '32px 24px' }} key={item.title}>
              <div className={`pos-icon-wrap${item.accent ? ` ${item.accent}` : ''}`} style={{ margin: '0 auto 20px' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke={item.accent === 'red' ? '#DC2626' : item.accent === 'green' ? '#059669' : '#2563EB'} strokeWidth="1.8" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <h3>{item.title}</h3>
              <p style={{ marginBottom: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════ BRIDGE EPS-TOPIK ═══════════ */
export function BridgeEpsSection() {
  return (
    <section className="bridge-section eps" id="eps">
      <div className="container">
        <div className="bridge-inner">
          <div>
            <div className="bridge-eyebrow-badge eps-badge">Sub-Platform · epstopik.id</div>
            <h2 className="bridge-title">Simulasi Ujian EPS-TOPIK<br />Paling Realistis di Indonesia</h2>
            <p className="bridge-desc">Platform simulasi ujian CBT yang dirancang untuk mereplikasi kondisi ujian EPS-TOPIK secara nyata — untuk meningkatkan kesiapan dan kepercayaan diri sebelum ujian.</p>
            <ul className="bridge-benefits">
              {['Full CBT simulasi 30–50 soal seperti ujian asli', 'Timer ujian + analisis skor otomatis', 'Pembahasan soal lengkap per nomor', 'Prediksi peluang lulus berdasarkan skor kamu'].map((b) => (
                <li className="bridge-benefit" key={b}>
                  <div className="bridge-benefit-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg></div>
                  {b}
                </li>
              ))}
            </ul>
            <a href="https://epstopik.id" className="btn btn-red btn-lg" target="_blank" rel="noopener">Mulai Simulasi EPS-TOPIK</a>
          </div>
          <div>
            <div className="bridge-mockup-eps">
              <div className="bme-header">
                <div className="bme-dots"><span /><span /><span /></div>
                <div className="bme-url">epstopik.id — Simulasi Ujian CBT</div>
              </div>
              <div className="bme-body">
                <div className="bme-score-card">
                  <div className="bme-score-label">Skor Tryout Kamu</div>
                  <div><span className="bme-score-num">72</span><span className="bme-score-total"> / 100</span></div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', marginTop: 6 }}>Level: Intermediate — Hampir Lulus!</div>
                </div>
                <div className="bme-progress-items">
                  {[{ label: 'Vocabulary', pct: 85, color: '#6FD99B' }, { label: 'Reading', pct: 70, color: '#FFD86E' }, { label: 'Listening', pct: 55, color: '#FF8A8A' }, { label: 'Grammar', pct: 68, color: '#FFD86E' }].map((p) => (
                    <div className="bme-prog-item" key={p.label}>
                      <label><span>{p.label}</span><span style={{ color: p.color }}>{p.pct}%</span></label>
                      <div className="bme-prog-bar"><div className="bme-prog-fill" style={{ width: `${p.pct}%`, background: p.color }} /></div>
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

/* ═══════════ BRIDGE HANGUKO ═══════════ */
export function BridgeHangukoSection() {
  return (
    <section className="bridge-section hanguko" id="hanguko">
      <div className="container">
        <div className="bridge-inner reverse">
          <div>
            <div className="bridge-eyebrow-badge hanguko-badge">Sub-Platform · hanguko.id</div>
            <h2 className="bridge-title">Kuasai Bahasa Korea Formal<br />dengan TOPIK Level 1–6</h2>
            <p className="bridge-desc">Platform belajar TOPIK Level 1–6 yang dirancang khusus untuk kamu yang bermimpi berkuliah di universitas Korea — lengkap dengan panduan beasiswa dan pendaftaran.</p>
            <ul className="bridge-benefits">
              {['Materi TOPIK I & II (Level 1–6) lengkap', 'Panduan khusus masuk universitas Korea', 'Simulasi ujian TOPIK yang realistis + pembahasan'].map((b) => (
                <li className="bridge-benefit" key={b}>
                  <div className="bridge-benefit-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg></div>
                  {b}
                </li>
              ))}
            </ul>
            <a href="https://hanguko.id" className="btn btn-primary btn-lg" target="_blank" rel="noopener">Mulai Belajar Bahasa Korea</a>
          </div>
          <div>
            <div className="bridge-mockup-hanguko">
              <div className="bmh-header">
                <div className="bmh-levels">
                  <span className="bmh-level done">TOPIK I</span>
                  <span className="bmh-level done">TOPIK II</span>
                  <span className="bmh-level active">TOPIK III</span>
                  <span className="bmh-level">TOPIK IV</span>
                  <span className="bmh-level">TOPIK V</span>
                  <span className="bmh-level">TOPIK VI</span>
                </div>
              </div>
              <div className="bmh-body">
                <div className="bmh-q" style={{ fontWeight: 600, color: 'var(--ink)', marginBottom: 4 }}>다음 글을 읽고 물음에 답하십시오.</div>
                <div className="bmh-q" style={{ fontSize: 13 }}>Bacalah teks berikut dan jawab pertanyaannya:</div>
                <div style={{ padding: 14, background: 'var(--gray-1)', borderRadius: 'var(--radius-sm)', margin: '14px 0', fontSize: 13, lineHeight: 1.7, color: 'var(--ink-3)' }}>
                  저는 매일 아침 7시에 일어납니다. 그리고 커피를 마신 후 학교에 갑니다...
                </div>
                <div className="bmh-answers">
                  <div className="bmh-ans selected">① 오전 6시</div>
                  <div className="bmh-ans">② 오전 7시</div>
                  <div className="bmh-ans">③ 오전 8시</div>
                  <div className="bmh-ans">④ 오전 9시</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════ COMMUNITY ═══════════ */
export function CommunitySection() {
  return (
    <section className="community-section" id="komunitas">
      <div className="container">
        <div className="community-inner">
          <div className="community-content">
            <span className="section-eyebrow">Komunitas Korea Indonesia</span>
            <h2>Anda Tidak Perlu<br />Menjalani Perjalanan Ini Sendirian</h2>
            <p>Bergabung dengan pelajar, profesional, alumni Korea, dan ribuan anggota komunitas lainnya — saling bantu, sharing pengalaman, dan motivasi satu sama lain.</p>
            <div className="comm-stats-row">
              {[{ num: '10K+', label: 'Member' }, { num: '500+', label: 'Diskusi' }, { num: '200+', label: 'Alumni Korea' }].map((s) => (
                <div className="comm-stat" key={s.label}><div className="comm-stat-num">{s.num}</div><div className="comm-stat-label">{s.label}</div></div>
              ))}
            </div>
            <div style={{ marginTop: 28 }}><a href="/blog" className="btn btn-primary btn-lg">Lihat Forum Diskusi</a></div>
          </div>
          <div className="community-visual">
            <div className="forum-preview">
              <div className="fp-header">
                <div className="fp-tabs">
                  <button className="fp-tab active">Terbaru</button>
                  <button className="fp-tab">Hot</button>
                  <button className="fp-tab">EPS-TOPIK</button>
                  <button className="fp-tab">TOPIK</button>
                </div>
              </div>
              {[
                { author: 'Ahmad Rizky', time: '5 menit lalu', tag: 'EPS-TOPIK', tagStyle: { background: '#FEF2F2', color: '#DC2626' }, title: 'Tips mengerjakan soal Listening EPS-TOPIK agar tidak panik?', preview: 'Saya sering blank waktu listening — ada yang punya pengalaman dan tips?', replies: 12, likes: 48, color: '#2563EB', initials: 'AR' },
                { author: 'Siti Pratiwi', time: '2 jam lalu', tag: 'TOPIK', tagStyle: { background: '#EFF6FF', color: '#2563EB' }, title: 'Lulus TOPIK Level 3! Ini strategi belajar saya selama 4 bulan 🎉', preview: 'Alhamdulillah akhirnya lulus juga. Mau share strategi saya karena banyak yang tanya...', replies: 87, likes: 234, color: '#7C3AED', initials: 'SP' },
              ].map((post) => (
                <div className="fp-post" key={post.title}>
                  <div className="fp-post-header">
                    <div className="fp-avatar" style={{ background: post.color }}>{post.initials}</div>
                    <div className="fp-post-meta"><div className="fp-post-author">{post.author}</div><div className="fp-post-time">{post.time}</div></div>
                    <span className="fp-tag" style={post.tagStyle}>{post.tag}</span>
                  </div>
                  <div className="fp-post-title">{post.title}</div>
                  <div className="fp-post-preview">{post.preview}</div>
                  <div className="fp-post-footer">
                    <div className="fp-post-stat">{post.replies} balasan</div>
                    <div className="fp-post-stat">{post.likes} suka</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════ ARTIKEL ═══════════ */
export function ArtikelSection() {
  return (
    <section className="artikel-section" id="artikel">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Panduan Belajar Bahasa Korea</span>
          <h2 className="section-title">Tips Belajar Bahasa Korea,<br />TOPIK, EPS-TOPIK &amp; Karier ke Korea</h2>
        </div>
        <div className="artikel-grid">
          <article className="artikel-card">
            <div className="artikel-img" />
            <div className="artikel-body">
              <span className="artikel-tag">Panduan</span>
              <h3>Cara Mulai Belajar Bahasa Korea dari Nol untuk Pemula</h3>
              <p>Panduan lengkap langkah demi langkah untuk kamu yang baru pertama kali belajar bahasa Korea — dari Hangul hingga kalimat pertama.</p>
              <a href="/blog" className="artikel-link">Baca Selengkapnya →</a>
            </div>
          </article>
          <article className="artikel-card small">
            <div className="artikel-img small" />
            <div className="artikel-body">
              <span className="artikel-tag red">EPS-TOPIK</span>
              <h3>Strategi Lulus EPS-TOPIK dalam 3 Bulan</h3>
              <p>Tips dan trik persiapan ujian EPS-TOPIK yang efektif.</p>
              <a href="/blog" className="artikel-link">Baca →</a>
            </div>
          </article>
          <article className="artikel-card small">
            <div className="artikel-img small" />
            <div className="artikel-body">
              <span className="artikel-tag green">TOPIK Kuliah</span>
              <h3>Syarat TOPIK untuk Masuk Universitas Korea</h3>
              <p>Informasi persyaratan bahasa Korea untuk kuliah di Korea.</p>
              <a href="/blog" className="artikel-link">Baca →</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ═══════════ FINAL CTA ═══════════ */
export function FinalCTASection() {
  return (
    <section className="final-cta-upgrade" id="daftar">
      <div className="container">
        <div className="fcu-inner">
          <div className="fcu-eyebrow"><span /><span>Mulai Belajar Bahasa Korea Hari Ini</span><span /></div>
          <h2 className="fcu-h1">Mulai Persiapan TOPIK<br />dan EPS-TOPIK <span className="hl">Sekarang</span></h2>
          <p className="fcu-sub">Platform belajar bahasa Korea terlengkap untuk orang Indonesia — 10.000+ soal latihan, 100+ tools, dan komunitas aktif yang siap mendukung perjalananmu ke Korea.</p>
          <div className="fcu-btns">
            <a href="#mulai" className="btn btn-white btn-xl">Mulai Belajar Gratis</a>
            <a href="#komunitas" className="btn btn-outline-white btn-xl">Gabung Komunitas</a>
          </div>
          <div className="fcu-social-proof">
            {['Gratis memulai', 'Akses 10.000+ soal latihan', '100+ tools belajar', 'Komunitas aktif'].map((item, i) => (
              <span key={item}>
                {i > 0 && <div className="fcu-divider" />}
                <span className="fcu-sp-item">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 6L9 17l-5-5 1.4-1.4L9 14.2 18.6 4.6z" /></svg>
                  {item}
                </span>
              </span>
            ))}
          </div>
          <div className="fcu-avatars">
            {[
              { initials: 'AR', bg: 'linear-gradient(135deg,#2563EB,#3B82F6)' },
              { initials: 'DM', bg: 'linear-gradient(135deg,#7C3AED,#8B5CF6)' },
              { initials: 'SP', bg: 'linear-gradient(135deg,#059669,#10B981)' },
              { initials: 'BK', bg: 'linear-gradient(135deg,#DC2626,#EF4444)' },
              { initials: '+9K', bg: 'rgba(255,255,255,.12)' },
            ].map((a) => (
              <div className="fcu-avatar" style={{ background: a.bg }} key={a.initials}>{a.initials}</div>
            ))}
          </div>
          <div className="fcu-social-label">Bergabung dengan <strong>10.000+ pengguna aktif</strong> yang sedang mempersiapkan diri ke Korea</div>
        </div>
      </div>
    </section>
  );
}
