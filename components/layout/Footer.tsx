import { footerColumns } from '@/lib/data/footer';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand column */}
          <div className="footer-brand">
            <a href="/" className="footer-logo">
              <span className="logo-ke" style={{ color: '#6B9EFF' }}>ke</span>
              <span style={{ color: '#fff' }}>korea</span>
              <span style={{ color: 'rgba(255,255,255,.35)', fontSize: 20 }}>.com</span>
            </a>
            <p>
              Ekosistem Korea Indonesia yang menaungi seluruh perjalanan Anda — belajar bahasa,
              persiapan ujian, karier, komunitas, dan informasi Korea.
            </p>
            <div style={{
              fontSize: 11, fontWeight: 600, letterSpacing: '.08em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,.3)', marginBottom: 10,
            }}>
              Platform dalam ekosistem
            </div>
            <div className="footer-platforms">
              <a
                href="https://epstopik.id"
                className="footer-plat-badge"
                style={{ background: 'rgba(212,43,43,.2)', color: '#FF8A8A', border: '1px solid rgba(212,43,43,.3)' }}
                target="_blank"
                rel="noopener"
              >
                epstopik.id ↗
              </a>
              <a
                href="https://hanguko.id"
                className="footer-plat-badge"
                style={{ background: 'rgba(27,79,216,.25)', color: '#7EB2FF', border: '1px solid rgba(27,79,216,.3)' }}
                target="_blank"
                rel="noopener"
              >
                hanguko.id ↗
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div className="footer-col" key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.external ? { target: '_blank', rel: 'noopener' } : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>© 2025 kekorea.com — Ekosistem Korea untuk Indonesia · epstopik.id · hanguko.id. Semua hak dilindungi.</p>
          <p className="footer-tagline">Dibuat dengan ️ untuk para pejuang yang ingin ke Korea</p>
        </div>
      </div>
    </footer>
  );
}
