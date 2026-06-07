/**
 * All remaining homepage sections that were previously part of the monolithic page.tsx.
 * Each is exported as a named component and composed in app/page.tsx.
 *
 * Sections included:
 * - PositioningSection
 * - PlatformStatsSection
 * - ProofSection
 * - QuickActionsSection
 * - BentoFeaturesSection
 */

/* ═══════════════════════════════════════════
   POSITIONING — "Pilih jalur berdasarkan tujuanmu"
   ═══════════════════════════════════════════ */
export function PositioningSection() {
  return (
    <section className="positioning" id="tujuan">
      <div className="container">
        <div className="section-header section-header--center">
          <span className="section-eyebrow">Pilih Jalur Belajar</span>
          <h2 className="section-title">
            Mau ke Korea untuk Apa?<br />
            <span className="text-blue">Pilih Jalur Berdasarkan Tujuanmu</span>
          </h2>
          <p className="section-sub">
            Setiap orang punya tujuan berbeda. Kekorea menyediakan jalur belajar yang disesuaikan dengan tujuan kamu — kerja, kuliah, atau sekadar belajar bahasa Korea.
          </p>
        </div>
        <div className="pos-grid">
          <PositionCard
            title="Saya Belajar dari Nol"
            description="Mulai dari belajar Hangul, kosakata dasar, dan grammar pertama — tanpa perlu pengetahuan bahasa Korea sebelumnya."
            accent="blue"
            linkText="Mulai dari Nol"
            linkHref="#belajar"
          />
          <PositionCard
            title="Saya Persiapan TOPIK"
            description="Fokus meningkatkan kemampuan bahasa Korea dan skor TOPIK — dengan latihan soal terstruktur, simulasi ujian, dan pembahasan lengkap."
            accent="red"
            linkText="Latihan TOPIK"
            linkHref="#ujian"
          />
          <PositionCard
            title="Saya Ingin Kerja ke Korea"
            description="Fokus EPS-TOPIK dan persiapan karier ke Korea — simulasi CBT, latihan soal, vocab kerja, hingga panduan visa TKI."
            accent="green"
            linkText="Siapkan EPS-TOPIK"
            linkHref="#eps"
          />
        </div>
      </div>
    </section>
  );
}

function PositionCard({ title, description, accent, linkText, linkHref }: {
  title: string; description: string; accent: string; linkText: string; linkHref: string;
}) {
  return (
    <div className={`pos-card ${accent}-accent`}>
      <div className={`pos-icon-wrap ${accent}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke={accent === 'blue' ? '#2563EB' : accent === 'red' ? '#DC2626' : '#059669'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {accent === 'blue' && <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></>}
          {accent === 'red' && <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>}
          {accent === 'green' && <><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></>}
        </svg>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={linkHref} className={`pos-link ${accent}`}>
        {linkText}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
}

/* ═══════════════════════════════════════════
   PLATFORM STATS
   ═══════════════════════════════════════════ */
export function PlatformStatsSection() {
  const stats = [
    { value: '10.000', suffix: '+', label: 'Soal TOPIK & EPS-TOPIK', sublabel: 'terupdate, berlevel, lengkap dengan pembahasan' },
    { value: '100', suffix: '+', label: 'Tools Belajar Bahasa Korea', sublabel: 'dari Hangul hingga kalkulator gaji Korea' },
    { value: '500', suffix: '+', label: 'Materi Pembelajaran', sublabel: 'Hangul, Grammar, Vocab, Listening' },
    { value: '10.000', suffix: '+', label: 'Pengguna Aktif', sublabel: 'pelajar, profesional & alumni Korea' },
  ];

  return (
    <section className="platform-stats">
      <div className="container">
        <div className="ps-grid">
          {stats.map((s) => (
            <div className="ps-item" key={s.label}>
              <div className="ps-number">{s.value}<span>{s.suffix}</span></div>
              <div className="ps-label">{s.label}</div>
              <div className="ps-sublabel">{s.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   PROOF — "Semua yang Kamu Butuhkan"
   ═══════════════════════════════════════════ */
const PROOF_CARDS = [
  { title: '10.000+ Soal TOPIK & EPS-TOPIK', desc: 'Soal latihan terupdate dan berlevel — dari TOPIK I hingga Level 6, dan paket lengkap EPS-TOPIK dengan pembahasan tiap soal.', color: '#DC2626', bg: '#FEF2F2' },
  { title: '100+ Tools Belajar Bahasa Korea', desc: 'Kalkulator skor TOPIK, latihan Hangul interaktif, kamus Korea–Indonesia, flashcard kosakata, hingga kalkulator gaji Korea.', color: '#2563EB', bg: undefined },
  { title: 'Materi dari Hangul hingga Persiapan Karier', desc: 'Roadmap belajar terstruktur — dari alfabet Korea pertama hingga siap lulus ujian dan berangkat kerja ke Korea.', color: '#059669', bg: undefined, accent: 'green' },
  { title: 'Komunitas Aktif Pelajar Indonesia', desc: 'Forum diskusi, study group, dan mentoring alumni yang sudah berhasil ke Korea — belajar bersama lebih efektif.', color: '#7C3AED', bg: '#F5F3FF' },
  { title: 'Update Materi & Soal Terbaru', desc: 'Konten terus diperbarui mengikuti format TOPIK dan EPS-TOPIK terkini — selalu relevan dengan ujian sesungguhnya.', color: '#B46A00', bg: '#FFF8E7' },
  { title: 'Belajar Lebih Terarah', desc: 'Berbeda dengan mengumpulkan materi dari berbagai sumber — di Kekorea semua sudah tersusun rapi dengan jalur belajar yang jelas.', color: '#DC2626', bg: undefined, accent: 'red' },
];

export function ProofSection() {
  return (
    <section style={{ padding: '72px 0', background: 'var(--white)' }}>
      <div className="container">
        <div className="section-header section-header--center">
          <span className="section-eyebrow">Platform Belajar Bahasa Korea Terlengkap</span>
          <h2 className="section-title">Semua yang Kamu Butuhkan<br />Ada di Satu Tempat</h2>
          <p className="section-sub">
            Tidak perlu berpindah-pindah platform. Dari belajar Hangul hingga persiapan karier ke Korea — Kekorea menyediakan segalanya.
          </p>
        </div>
        <div className="proof-grid-3col">
          {PROOF_CARDS.map((card) => (
            <div className={`pos-card${card.accent ? ` ${card.accent}-accent` : ''}`} key={card.title}>
              <div className={`pos-icon-wrap${card.accent ? ` ${card.accent}` : ''}`} style={card.bg ? { background: card.bg } : undefined}>
                <svg viewBox="0 0 24 24" fill="none" stroke={card.color} strokeWidth="1.8" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   QUICK ACTIONS
   ═══════════════════════════════════════════ */
export function QuickActionsSection() {
  return (
    <section className="quick-actions" id="mulai">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Mulai Sekarang</span>
          <h2 className="section-title">Mulai Belajar Sekarang — <span className="text-red">Gratis &amp; Tanpa Login</span></h2>
          <p className="section-sub">Tidak perlu daftar. Pilih latihan yang kamu butuhkan dan langsung mulai belajar bahasa Korea.</p>
        </div>

        {/* Primary action */}
        <div style={{ marginBottom: 16 }}>
          <div className="qa-card" style={{ background: 'linear-gradient(135deg,#EFF6FF,#DBEAFE)', borderColor: 'rgba(37,99,235,.2)', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 20, padding: '24px 28px' }}>
            <div className="qa-icon" style={{ background: '#2563EB', color: '#fff', width: 52, height: 52, minWidth: 52, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(37,99,235,.3)' }}>
              <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase' as const, color: 'var(--blue)', marginBottom: 4 }}>Aksi Utama</div>
              <h3 style={{ fontSize: 18, marginBottom: 4 }}>Mulai Latihan TOPIK Sekarang</h3>
              <p style={{ fontSize: 14, color: 'var(--gray-5)', margin: 0 }}>Simulasi soal TOPIK langsung dengan pembahasan — ukur kemampuan dan tahu harus fokus di mana.</p>
            </div>
            <div className="qa-arrow" style={{ background: 'var(--blue)', color: '#fff', boxShadow: '0 2px 8px rgba(37,99,235,.3)' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        <div className="qa-grid">
          {[
            { title: 'Cek Level Bahasa Korea', desc: 'Ketahui kemampuan kamu dalam 2 menit — tes cepat gratis untuk tahu mulai dari mana.', tag: '2 Menit', tagColor: '#2563EB', tagBg: '#EFF6FF', iconBg: '#EFF6FF', iconColor: '#2563EB' },
            { title: 'Latihan Mini TOPIK', desc: 'Simulasi soal TOPIK 10 pertanyaan — langsung cek skor dan lihat kekuatan & kelemahanmu.', tag: '10 Soal', tagColor: '#DC2626', tagBg: '#FEF2F2', iconBg: '#FEF2F2', iconColor: '#DC2626' },
            { title: 'Latihan Vocabulary', desc: 'Perbanyak kosakata Korea penting untuk ujian dan percakapan sehari-hari.', tag: 'Gratis', tagColor: '#059669', tagBg: '#ECFDF5', iconBg: '#ECFDF5', iconColor: '#059669' },
            { title: 'Kalkulator TOPIK', desc: 'Hitung prediksi skor, estimasi waktu belajar, dan perkiraan lulus ujian TOPIK-mu.', tag: 'Kalkulator', tagColor: '#B46A00', tagBg: '#FFF8E7', iconBg: '#FFF8E7', iconColor: '#B46A00' },
          ].map((item) => (
            <div className="qa-card" key={item.title}>
              <div className="qa-icon" style={{ background: item.iconBg, color: item.iconColor, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg style={{ width: 22, height: 22 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="qa-card-footer">
                <span className="qa-tag" style={{ background: item.tagBg, color: item.tagColor }}>{item.tag}</span>
                <div className="qa-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   BENTO FEATURES
   ═══════════════════════════════════════════ */
export function BentoFeaturesSection() {
  return (
    <section className="fitur-section" id="fitur">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Fitur Unggulan</span>
          <h2 className="section-title">Platform <span className="text-blue">Modern</span> Bukan Sekadar Website</h2>
          <p className="section-sub">Dibangun khusus untuk orang Indonesia yang serius ingin ke Korea — bukan sekadar kumpulan artikel.</p>
        </div>
        <div className="bento-grid">
          {/* AI Tutor */}
          <div className="bento-card bento-1 bento-dark">
            <div className="bento-eyebrow" style={{ color: '#7EB2FF' }}>AI Tutor Korea</div>
            <h3>Tanya Apa Saja tentang<br />Bahasa &amp; Korea</h3>
            <p>AI Tutor kami siap menjawab pertanyaan grammar, kosakata, tips ujian EPS-TOPIK, hingga panduan hidup di Korea — kapan saja, gratis.</p>
            <div className="ai-chat-preview">
              <div className="chat-bubble user"><div className="chat-avatar">U</div><div className="chat-text">Apa bedanya 은/는 dengan 이/가 kak?</div></div>
              <div className="chat-bubble"><div className="chat-avatar ai">AI</div><div className="chat-text">은/는 adalah partikel topik — dipakai untuk memperkenalkan atau mengontraskan subjek. Contoh: 저는 학생이에요 (Saya adalah pelajar). Sedangkan 이/가 adalah partikel subjek — dipakai untuk menunjukkan pelaku aksi baru. Contoh: 고양이가 왔어요 (Kucingnya datang).</div></div>
              <div className="chat-bubble user"><div className="chat-avatar">U</div><div className="chat-text">Bisa kasih contoh soal latihan?</div></div>
              <div className="chat-bubble"><div className="chat-avatar ai">AI</div><div className="chat-typing"><span /><span /><span /></div></div>
            </div>
          </div>

          {/* EPS Simulator */}
          <div className="bento-card bento-2 bento-red">
            <div className="bento-score-ring on-blue" style={{ borderColor: 'rgba(255,255,255,.2)' }}>
              <div className="bento-score-num" style={{ color: '#FFD86E' }}>72</div>
              <div className="bento-score-label-sm">/ 100</div>
            </div>
            <div className="bento-eyebrow" style={{ color: 'rgba(255,255,255,.6)' }}>EPS-TOPIK Simulator</div>
            <h3>Simulasi Ujian<br />Seperti Aslinya</h3>
            <p>CBT timer, feedback instan, analisis skor per skill.</p>
            <div className="bento-feature-list">
              {['50 soal mirip ujian asli', 'Timer countdown otomatis', 'Pembahasan tiap soal'].map((f) => (
                <div className="bento-feat-item" key={f}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>
                  {f}
                </div>
              ))}
            </div>
          </div>

          {/* TOPIK Practice */}
          <div className="bento-card bento-3 bento-blue">
            <div className="bento-eyebrow" style={{ color: 'rgba(255,255,255,.6)' }}>TOPIK Practice</div>
            <h3>Soal TOPIK<br />Level 1–6</h3>
            <p>Soal terupdate, berlevel, ada pembahasan. Cocok untuk persiapan kuliah di Korea.</p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 16 }}>
              {['TOPIK I', 'TOPIK II', 'Level 3 →'].map((l, i) => (
                <span key={l} style={{ background: `rgba(255,255,255,${i === 2 ? '.3' : '.15'})`, color: '#fff', fontSize: 11, fontWeight: 700, padding: '5px 12px', borderRadius: 100 }}>{l}</span>
              ))}
            </div>
          </div>

          {/* Progress Tracker */}
          <div className="bento-card bento-4">
            <div className="bento-eyebrow" style={{ color: '#2563EB' }}>Progress Tracker</div>
            <h3>Pantau Perkembanganmu</h3>
            <div className="bento-progress-list">
              {[
                { label: 'Hangul', pct: 80, color: '#2563EB' },
                { label: 'Vocabulary', pct: 55, color: '#7C3AED' },
                { label: 'Grammar', pct: 32, color: '#DC2626' },
                { label: 'EPS-TOPIK', pct: 70, color: '#059669' },
              ].map((p) => (
                <div className="bento-prog-item" key={p.label}>
                  <label><span>{p.label}</span><span>{p.pct}%</span></label>
                  <div className="bento-prog-bar"><div className="bento-prog-fill" style={{ width: `${p.pct}%`, background: p.color }} /></div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bento-card bento-5" style={{ background: 'var(--gray-1)' }}>
            <div className="bento-eyebrow" style={{ color: '#059669' }}>100+ Tools Gratis</div>
            <h3>Kalkulator &amp; Simulasi</h3>
            <p>Kurs Won, gaji Korea, biaya hidup, prediksi lulus TOPIK — semua gratis.</p>
          </div>

          {/* No Login */}
          <div className="bento-card bento-6" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', background: 'linear-gradient(135deg,#ECFDF5,#EFF6FF)' }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>🔓</div>
            <div className="bento-eyebrow" style={{ color: '#059669' }}>Mulai Sekarang</div>
            <h3 style={{ fontSize: 18 }}>Tanpa Login,<br />Tanpa Bayar</h3>
            <p style={{ fontSize: 13, maxWidth: 'none' }}>Langsung latihan, lihat skor, dan belajar.</p>
            <a href="#mulai" className="btn btn-primary btn-sm" style={{ marginTop: 16 }}>Coba Gratis</a>
          </div>
        </div>
      </div>
    </section>
  );
}
