export function HeroSection() {
  return (
    <section className="hero" id="hero">
      <div className="hero-deco-arc" />
      <div className="hero-hangul-deco">한</div>
      <div className="hero-accent-bar" />

      <div className="hero-container">
        {/* Left content */}
        <div className="hero-content">
          <div className="hero-ecosystem-badge">
            <span className="eco-dot" />
            Platform Belajar Bahasa Korea #1 Indonesia
          </div>

          <h1 className="hero-title">
            Belajar Bahasa Korea<br />dari Nol hingga <span className="hl">Siap TOPIK,</span>
            <br /><span className="hl-red">EPS-TOPIK, dan Karier ke Korea</span>
          </h1>

          <p className="hero-sub">
            Belajar Hangul, tata bahasa, kosakata, latihan TOPIK, simulasi EPS-TOPIK, dan akses{' '}
            <strong>100+ tools belajar</strong> dalam satu platform yang terstruktur untuk pembelajar Indonesia.
          </p>

          <div className="hero-cta">
            <a href="#mulai" className="btn btn-primary btn-lg">
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              Mulai Belajar Gratis
            </a>
            <a href="#ekosistem" className="btn btn-outline-white btn-lg">
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              Jelajahi Platform
            </a>
          </div>

          {/* Social Proof */}
          <div className="hero-social-proof">
            <span className="hsp-stars" style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} style={{ width: 14, height: 14, filter: 'drop-shadow(0 0 3px rgba(245,200,80,.5))' }} viewBox="0 0 24 24">
                  {i === 0 && (
                    <defs>
                      <linearGradient id="hsg" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFE066" />
                        <stop offset="100%" stopColor="#F5A623" />
                      </linearGradient>
                    </defs>
                  )}
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="url(#hsg)" />
                </svg>
              ))}
            </span>
            <span className="hsp-text">
              Dipercaya <strong>10.000+ pengguna aktif</strong> — 10.000+ soal • 100+ tools • komunitas aktif
            </span>
          </div>

          {/* Intent Navigation */}
          <div className="hero-intent-nav">
            <span className="hint-label">Saya ingin:</span>
            <div className="hint-chips">
              <a href="#belajar" className="hint-chip">Belajar Hangul</a>
              <a href="#ujian" className="hint-chip">Lulus TOPIK</a>
              <a href="#eps" className="hint-chip hint-chip-red">EPS-TOPIK</a>
              <a href="#tujuan" className="hint-chip hint-chip-green">Kerja ke Korea</a>
            </div>
          </div>

          {/* Sub-platforms */}
          <div className="hero-sub-platforms">
            <span className="hero-sub-label">Platform dalam ekosistem:</span>
            <a href="https://epstopik.id" className="hero-platform-chip eps" target="_blank" rel="noopener">
              <span className="chip-dot" /> epstopik.id
            </a>
            <a href="https://hanguko.id" className="hero-platform-chip hanguko" target="_blank" rel="noopener">
              <span className="chip-dot" /> hanguko.id
            </a>
          </div>
        </div>

        {/* Right visual — Quiz card mockup */}
        <div className="hero-visual" style={{ position: 'relative' }}>
          <EcosystemPills />
          <QuizCardMockup />
          <div className="hero-float-3"><span className="float-dot red" /> Kerja &amp; Kuliah di Korea</div>
          <div className="hero-float-1"><span className="float-dot" /> 100.000+ Pengguna</div>
          <div className="hero-float-2"><span className="float-dot yellow" /> Lulus EPS-TOPIK &amp; TOPIK</div>
        </div>
      </div>

      {/* Wave */}
      <div className="hero-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path fill="#F8FAFC" d="M0,40L60,42.7C120,45,240,51,360,50.7C480,51,600,45,720,42.7C840,40,960,40,1080,42.7C1200,45,1320,51,1380,53.3L1440,56L1440,80L0,80Z" />
        </svg>
      </div>
    </section>
  );
}

/* ─── Sub-components ─── */

const ECOSYSTEM_PILLS = [
  { label: 'Belajar Korea', bg: 'rgba(255,255,255,.09)', border: 'rgba(255,255,255,.14)', color: 'rgba(255,255,255,.85)' },
  { label: 'TOPIK I–VI', bg: 'rgba(59,130,246,.18)', border: 'rgba(96,165,250,.3)', color: '#93C5FD' },
  { label: 'EPS-TOPIK', bg: 'rgba(220,38,38,.18)', border: 'rgba(248,113,113,.3)', color: '#FCA5A5' },
  { label: '100+ Tools', bg: 'rgba(245,158,11,.15)', border: 'rgba(252,211,77,.25)', color: '#FCD34D' },
  { label: 'Komunitas', bg: 'rgba(5,150,105,.15)', border: 'rgba(111,217,155,.25)', color: '#6FD99B' },
  { label: 'Info Korea', bg: 'rgba(124,58,237,.15)', border: 'rgba(167,139,250,.25)', color: '#C4B5FD' },
];

function EcosystemPills() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16, justifyContent: 'flex-end' }}>
      {ECOSYSTEM_PILLS.map((pill) => (
        <span
          key={pill.label}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: pill.bg, border: `1px solid ${pill.border}`,
            padding: '6px 14px', borderRadius: 100,
            fontSize: 12, fontWeight: 600, color: pill.color,
          }}
        >
          {pill.label}
        </span>
      ))}
    </div>
  );
}

function QuizCardMockup() {
  return (
    <div className="quiz-card-mockup">
      <div className="quiz-card-top">
        <span className="quiz-card-label">Mini Test TOPIK</span>
        <span className="quiz-timer-badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
          </svg>
          02:45
        </span>
      </div>
      <div className="quiz-progress">
        <div className="quiz-prog-bar"><div className="quiz-prog-fill" /></div>
        <span className="quiz-prog-text">Soal 2 dari 5 • Progress 40%</span>
      </div>
      <div className="quiz-question-ko">다음 중 올바른 문장은 무엇입니까?</div>
      <div className="quiz-question-id">Manakah kalimat yang benar di bawah ini?</div>
      <div className="quiz-options">
        {[
          { letter: 'A', text: '저는 학생이에요', correct: false },
          { letter: 'B', text: '나는 학교에 가요', correct: true },
          { letter: 'C', text: '우리는 친구야', correct: false },
          { letter: 'D', text: '그들은 집이다', correct: false },
        ].map((opt) => (
          <div className={`quiz-opt${opt.correct ? ' correct' : ''}`} key={opt.letter}>
            <span className="quiz-opt-letter">{opt.letter}</span>
            <span>{opt.text}</span>
            {opt.correct && (
              <svg style={{ width: 16, height: 16, marginLeft: 'auto', flexShrink: 0 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}
          </div>
        ))}
      </div>
      <button className="quiz-submit-btn">Lanjut Soal Berikutnya →</button>
    </div>
  );
}
