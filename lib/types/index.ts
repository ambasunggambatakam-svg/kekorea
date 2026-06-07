/** Navigasi utama */
export interface NavDropdownItem {
  label: string;
  sublabel?: string;
  href: string;
  icon?: React.ReactNode;
  iconText?: string;
}

export interface NavMegaSection {
  title: string;
  items: NavDropdownItem[];
}

export interface NavItem {
  label: string;
  href?: string;
  megaSections?: NavMegaSection[];
  dropdownItems?: NavDropdownItem[];
}

/** Statistik */
export interface StatItem {
  value: string;
  label: string;
  sublabel?: string;
  icon: React.ReactNode;
  iconStyle?: React.CSSProperties;
}

/** Testimoni */
export interface Testimonial {
  quote: string;
  name: string;
  location: string;
  role: string;
  badge: string;
  badgeStyle: React.CSSProperties;
  avatarColor: string;
  avatarInitials: string;
}

/** Roadmap */
export interface RoadmapStep {
  step: number;
  period: string;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  ctaExternal?: boolean;
}

/** Value Proposition */
export interface ValueCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
}

/** Artikel */
export interface ArticleCard {
  tag: string;
  tagVariant?: 'default' | 'red' | 'green';
  title: string;
  description: string;
  href: string;
  small?: boolean;
}

/** Forum Post */
export interface ForumPost {
  author: string;
  avatarColor: string;
  avatarInitials: string;
  time: string;
  tag: string;
  tagStyle: React.CSSProperties;
  title: string;
  preview: string;
  replies: number;
  likes: number;
}

/** Belajar Tab / Card */
export interface BelajarSubmenuItem {
  label: string;
  href: string;
}

export interface BelajarCard {
  title: string;
  meta: string;
  icon: React.ReactNode;
  iconBg: string;
  submenuItems: BelajarSubmenuItem[];
}

/** Footer */
export interface FooterColumn {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}
