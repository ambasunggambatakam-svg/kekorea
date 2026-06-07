const STATS = [
  { value: '10.000+', label: 'Pengguna Aktif Indonesia', iconType: 'users' as const },
  { value: '10.000+', label: 'Soal TOPIK & EPS-TOPIK', iconType: 'clock' as const },
  { value: '100+', label: 'Tools Belajar Korea', iconType: 'monitor' as const, iconStyle: { background: 'rgba(245,158,11,.1)', color: '#D97706' } },
  { value: '500+', label: 'Materi dari Hangul ke Karier', iconType: 'book' as const, iconStyle: { background: 'rgba(5,150,105,.1)', color: '#059669' } },
];

export function StatsBar() {
  return (
    <div className="stats-bar">
      <div className="container">
        <div className="stats-grid">
          {STATS.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <div className="stat-icon" style={stat.iconStyle}>
                <StatIcon type={stat.iconType} />
              </div>
              <div>
                <div className="stat-number">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatIcon({ type }: { type: 'users' | 'clock' | 'monitor' | 'book' }) {
  const props = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const };
  switch (type) {
    case 'users':
      return (
        <svg {...props}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case 'clock':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
        </svg>
      );
    case 'monitor':
      return (
        <svg {...props}>
          <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8m-4-4v4" />
        </svg>
      );
    case 'book':
      return (
        <svg {...props}>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      );
  }
}
