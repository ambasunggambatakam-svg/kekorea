import type { FooterColumn } from '@/lib/types';

export const footerColumns: FooterColumn[] = [
  {
    title: 'Belajar',
    links: [
      { label: 'Hangul & Alfabet', href: '/belajar' },
      { label: 'Grammar Korea', href: '/p/grammar-dasar' },
      { label: 'Vocabulary Harian', href: '/p/vocabulary-harian' },
      { label: 'Listening & Speaking', href: '/p/listening-audio' },
      { label: 'Mini Quiz Tools', href: '/tools' },
    ],
  },
  {
    title: 'Ujian & Platform',
    links: [
      { label: 'TOPIK I & II', href: '/ujian' },
      { label: 'EPS-TOPIK', href: '/ujian' },
      { label: 'Simulasi CBT', href: '/p/simulasi-cbt' },
      { label: 'epstopik.id ↗', href: 'https://epstopik.id', external: true },
      { label: 'hanguko.id ↗', href: 'https://hanguko.id', external: true },
    ],
  },
  {
    title: 'Info & Panduan',
    links: [
      { label: 'Kerja di Korea', href: '/korea' },
      { label: 'Kuliah di Korea', href: '/korea' },
      { label: 'Blog & Artikel', href: '/blog' },
      { label: 'Tentang Kami', href: '/p/tentang-kami' },
      { label: 'Kebijakan Privasi', href: '/p/kebijakan-privasi' },
    ],
  },
  {
    title: 'Komunitas & App',
    links: [
      { label: 'Forum Diskusi', href: '/#komunitas' },
      { label: 'Study Group', href: '/#komunitas' },
      { label: 'Mentoring Alumni', href: '/#komunitas' },
      { label: 'Download App (Soon)', href: '/#app' },
      { label: 'WhatsApp Channel', href: 'https://wa.me/6281234567890' },
    ],
  },
];
