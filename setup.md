# Panduan Lengkap Setup & Deployment: KeKorea Web

Dokumen ini berisi panduan komprehensif mengenai struktur folder, cara instalasi, konfigurasi lokal, hingga proses deployment proyek **KeKorea Web**. Proyek ini dibangun menggunakan **Next.js**, **React**, **Drizzle ORM**, **Neon Database (PostgreSQL)**, dan **Tailwind CSS**.

---

## 📂 Struktur Folder dan Fungsinya

Proyek ini menggunakan struktur standar *App Router* dari Next.js beserta penambahan direktori untuk pengelolaan database dan komponen.

```text
kekorea-web/
├── app/                  # (Utama) Direktori App Router Next.js. Berisi halaman (pages), layout, dan API routes.
│   ├── layout.tsx        # Layout utama aplikasi (struktur HTML dasar, meta tags, provider).
│   ├── page.tsx          # Halaman beranda (Home/Landing Page).
│   └── ...               # Sub-folder lainnya merepresentasikan rute URL aplikasi.
├── components/           # Kumpulan komponen React UI yang dapat digunakan kembali (reusable) di berbagai halaman (seperti Navbar, Footer, Button).
├── lib/                  # Berisi kode utilitas, fungsi pembantu (helpers), dan konfigurasi penting.
│   ├── db/               # Konfigurasi Drizzle ORM, skema database, dan koneksi ke Neon DB.
│   ├── data/             # Fungsi untuk fetch data, manipulasi data, atau mock data.
│   └── types/            # Definisi tipe data TypeScript (interfaces & types).
├── public/               # File aset statis yang dapat diakses publik (gambar, ikon, font). File di sini di-serve di root (/).
├── drizzle.config.ts     # Konfigurasi Drizzle Kit untuk membaca skema dan melakukan migrasi database.
├── next.config.ts        # Konfigurasi Next.js (optimasi gambar, env vars publik, redirects, dsb).
├── package.json          # Daftar dependensi aplikasi dan script NPM (dev, build, start).
├── tailwind.config.js*   # (Terintegrasi via postcss/config mjs) Konfigurasi desain, tema warna, dan utilitas untuk Tailwind CSS.
└── .env                  # File environment variables rahasia (TIDAK BOLEH di-commit ke Git).
```

---

## 💻 Persyaratan Sistem (Prerequisites)

Sebelum menjalankan proyek ini, pastikan sistem Anda telah terinstal:
- **Node.js**: Versi 20.x atau lebih baru (direkomendasikan versi LTS).
- **Package Manager**: npm, pnpm, atau yarn. (Panduan ini akan menggunakan `npm`).
- **Database**: Akun [Neon.tech](https://neon.tech) untuk Serverless Postgres atau database PostgreSQL lokal.
- **Git**: Untuk version control.

---

## 🛠️ Setup Lokal (Development)

Ikuti langkah-langkah berikut untuk menjalankan aplikasi di komputer lokal Anda.

### 1. Kloning Repositori
Clone proyek ke komputer Anda dan masuk ke direktorinya:
```bash
git clone <url-repositori-anda>
cd kekorea-web
```

### 2. Instalasi Dependensi
Instal semua paket yang dibutuhkan oleh proyek:
```bash
npm install
```

### 3. Konfigurasi Environment Variables (Variabel Lingkungan)
Buat file bernama `.env` di direktori root aplikasi (sejajar dengan `package.json`). Tambahkan variabel berikut ke dalam file `.env`:

```env
# Koneksi Database PostgreSQL (Dapatkan dari dashboard Neon)
DATABASE_URL="postgresql://user:password@endpoint.neon.tech/neondb?sslmode=require"

# (Jika ada variabel environment tambahan untuk API pihak ketiga, tambahkan di sini)
```

### 4. Setup Database & Migrasi (Drizzle ORM)
Pastikan skema database tersinkronisasi. Jalankan perintah ini untuk melakukan migrasi skema `lib/db/schema.ts` (atau lokasi skema Anda) ke database Neon:

```bash
# Untuk melakukan generate file migrasi SQL:
npx drizzle-kit generate

# Untuk meng-apply (push) perubahan skema secara langsung ke database:
npx drizzle-kit push
```

### 5. Menjalankan Server Development
Setelah database terhubung, jalankan aplikasi mode pengembangan:
```bash
npm run dev
```
Aplikasi sekarang berjalan di `http://localhost:3000`. Server akan secara otomatis memuat ulang (*hot-reload*) saat Anda melakukan perubahan pada kode.

---

## 🚀 Panduan Deployment (Produksi)

Proyek Next.js dapat di-deploy dengan sangat mudah ke Vercel, atau Anda dapat mendeploy-nya secara manual ke VPS/Dedicated Server Anda (contoh: menggunakan Nginx & PM2).

### Opsi A: Deployment ke Vercel (Paling Direkomendasikan)
Vercel adalah platform kreator Next.js, sehingga optimasinya otomatis.
1. Buat akun di [Vercel](https://vercel.com/).
2. Buat proyek baru dan impor repositori GitHub Anda.
3. Di bagian **Environment Variables** pada dashboard Vercel, masukkan variabel dari file `.env` Anda (seperti `DATABASE_URL`).
4. Klik **Deploy**. Vercel akan secara otomatis menjalankan `npm run build` dan mempublikasikan aplikasi Anda.

### Opsi B: Deployment ke VPS (Self-Hosted via PM2 & Nginx)
Jika Anda menggunakan server Linux (Ubuntu/Debian) untuk hosting mandiri:

**1. Clone dan Install di Server**
```bash
git clone <url-repositori-anda> /var/www/kekorea-web
cd /var/www/kekorea-web
npm install
```

**2. Setup `.env` di Server**
Pastikan file `.env` berisi URL database produksi yang valid.

**3. Build Aplikasi**
Kompilasi kode menjadi versi produksi yang dioptimalkan:
```bash
npm run build
```

**4. Menjalankan dengan PM2 (Process Manager)**
PM2 memastikan aplikasi tetap hidup (keep-alive) meskipun server restart.
```bash
npm install -g pm2
pm2 start npm --name "kekorea-web" -- run start
pm2 save
pm2 startup
```

**5. Setup Reverse Proxy dengan Nginx**
Agar aplikasi dapat diakses lewat nama domain dan port 80/443 (HTTP/HTTPS), atur Nginx:
Buat file konfigurasi: `sudo nano /etc/nginx/sites-available/kekorea-web`

```nginx
server {
    listen 80;
    server_name domainanda.com www.domainanda.com;

    location / {
        proxy_pass http://localhost:3000; # Port default Next.js
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Aktifkan konfigurasi dan restart Nginx:
```bash
sudo ln -s /etc/nginx/sites-available/kekorea-web /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

*(Catatan: Jangan lupa mengkonfigurasi sertifikat SSL menggunakan Certbot/Let's Encrypt).*

---

## 🛠️ Skrip NPM yang Tersedia

Di dalam proyek ini, terdapat beberapa perintah bawaan yang dapat dijalankan lewat terminal:
- `npm run dev`: Memulai aplikasi di mode development (localhost).
- `npm run build`: Mem-build aplikasi Next.js untuk lingkungan produksi.
- `npm run start`: Menjalankan aplikasi hasil build produksi.
- `npm run lint`: Memeriksa standar format kode menggunakan ESLint.

---
**Kontributor & Dukungan:**
Jika mengalami kendala pada database, periksa URL koneksi Neon. Jika terdapat error pada styling, pastikan ekstensi plugin Tailwind CSS telah diinisialisasi dan diaktifkan.
