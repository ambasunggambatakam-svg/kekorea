export function EcosystemSection() {
  return (
    <section className="ecosystem-section" id="ekosistem">
      <div className="container">
        <div className="ecosystem-header">
          <div className="ecosystem-label">
            <svg style={{ width: 13, height: 13 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              <path d="M2 12h20" />
            </svg>
            Ekosistem Korea Indonesia
          </div>
          <h2 className="ecosystem-title">Tiga Platform, Satu Ekosistem<br />yang Terintegrasi</h2>
          <p className="ecosystem-sub">
            kekorea.com adalah pusat ekosistem yang menaungi seluruh perjalanan Anda — dari belajar bahasa,
            persiapan ujian, hingga karier dan kehidupan di Korea.
          </p>
        </div>

        {/* Parent Card */}
        <ParentPlatformCard />

        {/* Connector */}
        <EcoConnector />

        {/* Child Platform Cards */}
        <div className="eco-children-grid">
          <EpsTopikCard />
          <HangukoCard />
        </div>
      </div>
    </section>
  );
}

/* ─── Sub-components ─── */

const PILLAR_TAGS = ['Belajar', 'Karier', 'Komunitas', 'Tools', 'Korea Insight'];
const PARENT_STATS = [
  { num: '100', suffix: 'K+', label: 'Pengguna Aktif' },
  { num: '500', suffix: '+', label: 'Materi & Konten' },
  { num: '100', suffix: '+', label: 'Tools Praktis' },
  { num: '10', suffix: 'K+', label: 'Anggota Komunitas' },
];

function ParentPlatformCard() {
  return (
    <div className="eco-parent-wrap">
      <div className="eco-parent-card">
        <div className="eco-parent-content">
          <div className="eco-parent-tag">
            <svg style={{ width: 11, height: 11 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            Platform Induk
          </div>
          <div className="eco-parent-logo">
            <span className="ke">ke</span><span className="korea">korea</span><span className="dot">.com</span>
          </div>
          <p className="eco-parent-desc">
            Platform ekosistem utama yang menyatukan belajar bahasa Korea, karier, komunitas, tools,
            dan informasi Korea dalam satu pengalaman yang mulus dan terstruktur.
          </p>
          <div className="eco-parent-pillars">
            {PILLAR_TAGS.map((tag) => (
              <span className="eco-pillar-tag" key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="eco-parent-visual">
          <div className="eco-parent-stat-grid">
            {PARENT_STATS.map((stat) => (
              <div className="eco-parent-stat" key={stat.label}>
                <div className="eco-parent-stat-num">{stat.num}<span>{stat.suffix}</span></div>
                <div className="eco-parent-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function EcoConnector() {
  return (
    <div className="eco-connector" style={{
      textAlign: 'center', padding: '18px 0 4px', position: 'relative',
      height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <div style={{ position: 'absolute', top: 0, left: '50%', width: 2, height: 28, background: 'linear-gradient(180deg,rgba(37,99,235,.35),rgba(37,99,235,.1))', transform: 'translateX(-50%)' }} />
      <div style={{ display: 'flex', alignItems: 'center', width: '100%', maxWidth: 640, marginTop: 28 }}>
        <div style={{ flex: 1, height: 1.5, background: 'linear-gradient(90deg,transparent,rgba(37,99,235,.2))' }} />
        <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--blue-light)', border: '1.5px solid rgba(37,99,235,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 13 }}>⬇</div>
        <div style={{ flex: 1, height: 1.5, background: 'linear-gradient(270deg,transparent,rgba(37,99,235,.2))' }} />
      </div>
    </div>
  );
}

const EPS_FEATURES = [
  'Full CBT simulasi 30–50 soal seperti ujian asli',
  'Timer ujian + analisis skor & pembahasan lengkap',
  'Prediksi peluang lulus berdasarkan skor kamu',
  'Terintegrasi penuh dengan ekosistem kekorea.com',
];

function EpsTopikCard() {
  return (
    <div className="eco-child-card eps-card">
      <div className="eco-child-glow" />
      <span className="eco-child-badge">Sub-Platform</span>
      <div className="eco-child-content">
        <div className="eco-child-tag">Ujian &amp; Simulasi</div>
        <div className="eco-child-logo"><span>eps</span>topik.id</div>
        <p className="eco-child-desc">
          Platform simulasi ujian CBT EPS-TOPIK yang dirancang untuk mereplikasi kondisi ujian asli —
          untuk meningkatkan kesiapan dan kepercayaan diri sebelum hari H.
        </p>
        <ul className="eco-child-features">
          {EPS_FEATURES.map((feat) => (
            <li className="eco-child-feat" key={feat}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {feat}
            </li>
          ))}
        </ul>
        <a href="https://epstopik.id" className="eco-child-cta" target="_blank" rel="noopener">
          Coba Simulasi di epstopik.id
        </a>
      </div>
    </div>
  );
}

const HANGUKO_FEATURES = [
  'Materi TOPIK I & II (Level 1–6) lengkap',
  'Panduan khusus masuk universitas Korea',
  'Simulasi ujian TOPIK yang realistis + pembahasan',
];

function HangukoCard() {
  return (
    <div className="eco-child-card hanguko-card">
      <div className="eco-child-glow" />
      <span className="eco-child-badge">Sub-Platform</span>
      <div className="eco-child-content">
        <div className="eco-child-tag">Bahasa &amp; TOPIK</div>
        <div className="eco-child-logo"><span>hanguko</span>.id</div>
        <p className="eco-child-desc">
          Platform belajar TOPIK Level 1–6 untuk kamu yang bermimpi berkuliah di universitas Korea atau
          ingin menguasai bahasa Korea secara formal dan terstruktur.
        </p>
        <ul className="eco-child-features">
          {HANGUKO_FEATURES.map((feat) => (
            <li className="eco-child-feat" key={feat}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {feat}
            </li>
          ))}
        </ul>
        <a href="https://hanguko.id" className="eco-child-cta" target="_blank" rel="noopener">
          Mulai Belajar di hanguko.id
        </a>
      </div>
    </div>
  );
}
