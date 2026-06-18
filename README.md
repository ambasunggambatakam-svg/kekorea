# 🚀 KeKorea Web - Full-Stack Next.js Application

Selamat datang di repositori **KeKorea Web**. Dokumen ini berisi panduan teknis yang sangat komprehensif untuk developer, devops, maupun system administrator. Mulai dari penjelasan arsitektur, pemahaman direktori, proses instalasi lokal, hingga panduan mutlak untuk melakukan deployment ke server produksi (VPS).

Proyek ini dibangun menggunakan teknologi modern:
- **Framework Utama**: Next.js (App Router) & React
- **Styling**: Tailwind CSS
- **Database & ORM**: PostgreSQL (Neon Serverless) & Drizzle ORM
- **Bahasa**: TypeScript

---

## 📂 Struktur Direktori & Arsitektur Aplikasi (Deep Dive)

Aplikasi ini menggunakan struktur *App Router* dari Next.js. Memahami struktur ini sangat penting sebelum melakukan modifikasi kode.

```text
kekorea-web/
├── app/                        # Direktori Utama App Router (Routing, Pages, & API)
│   ├── (auth)/                 # Route group untuk halaman autentikasi (login, register) (Contoh)
│   ├── api/                    # Backend API Routes Next.js (Serverless functions)
│   ├── layout.tsx              # Root Layout: HTML dasar, Meta tags, Context Providers
│   ├── page.tsx                # Entry point utama (Landing Page)
│   ├── globals.css             # Styling CSS global aplikasi
│   └── ...                     # Rute-rute aplikasi lainnya
├── components/                 # UI Components yang terisolasi dan reusable
│   ├── ui/                     # Komponen UI dasar (Button, Input, Modal, dll)
│   ├── layout/                 # Komponen Layout (Navbar, Footer, Sidebar)
│   └── ...                     # Komponen fungsional spesifik
├── lib/                        # Utilitas inti, Konfigurasi, dan Logika Bisnis
│   ├── db/                     # Koneksi Database & Drizzle Configuration
│   │   ├── schema.ts           # Definisi tabel dan relasi database (Skema)
│   │   └── migrate.ts          # Script otomatisasi migrasi database
│   ├── data/                   # Data Access Layer (Fungsi fetch, manipulasi database)
│   ├── utils/                  # Helper functions umum (formatting tanggal, regex)
│   └── types/                  # Deklarasi tipe TypeScript global
├── public/                     # Static Assets (Akses Publik via root `/`)
│   ├── images/                 # Gambar statis, logo, hero banners
│   └── fonts/                  # Custom font lokal
├── .env                        # [RAHASIA] Environment variables (Abaikan dari git)
├── .env.example                # Template environment variables untuk developer baru
├── drizzle.config.ts           # Konfigurasi Drizzle Kit untuk membaca skema & migrasi
├── next.config.ts              # Konfigurasi Next.js (images domain, headers, rewrites)
├── tailwind.config.js          # Konfigurasi utility-first styling (Theme, warna, breakpoint)
├── tsconfig.json               # Konfigurasi TypeScript compiler
└── package.json                # Metadata proyek, daftar dependencies, dan npm scripts
```

---

## 🛠️ Persiapan dan Setup Lokal (Environment Development)

Sebelum aplikasi dapat berjalan di mesin lokal Anda, Anda harus menyiapkan seluruh dependensi dan koneksi layanan.

### 1. Persyaratan Sistem (Prerequisites)
Pastikan environment Anda memenuhi syarat minimum berikut:
- **Node.js**: v20.0.0 atau lebih baru (Gunakan NVM untuk manajemen versi).
- **Package Manager**: `npm` (Disarankan versi terbaru).
- **Git**: Untuk version control dan kloning.
- **Akun Neon Database**: Buat proyek PostgreSQL baru di [Neon.tech](https://neon.tech).

### 2. Kloning dan Instalasi
Ambil kode sumber dan unduh dependensi Node.js.
```bash
git clone <url-repositori-anda>
cd kekorea-web
npm install
```

### 3. Konfigurasi Variabel Lingkungan (.env)
Aplikasi membutuhkan koneksi ke database agar bisa berfungsi. Buat file `.env` di root direktori proyek.

```env
# Koneksi Neon PostgreSQL (Sesuaikan dengan kredensial Anda)
DATABASE_URL="postgresql://[USER]:[PASSWORD]@[HOST]/neondb?sslmode=require"

# Tambahan (Opsional sesuai fitur)
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### 4. Setup Database & Inisialisasi Skema (Drizzle)
Sebelum aplikasi bisa diakses, tabel-tabel di database harus dibuat. Drizzle ORM akan mengurusnya.

```bash
# 1. Menghasilkan (generate) file SQL migrasi berdasarkan lib/db/schema.ts
npx drizzle-kit generate

# 2. Mengirimkan (push/apply) struktur tersebut langsung ke Neon DB
npx drizzle-kit push
```

### 5. Jalankan Aplikasi
Server lokal (development mode) siap digunakan dengan hot-reload:
```bash
npm run dev
```
Buka browser dan arahkan ke `http://localhost:3000`.

---

## 🚀 Panduan Hosting dan Deployment ke VPS (Production)

Bagian ini menjelaskan cara mengonlinekan aplikasi secara mandiri menggunakan Virtual Private Server (VPS) berbasis Linux (Ubuntu 22.04/24.04), PM2, dan Nginx.

### Kredensial VPS Produksi (SANGAT RAHASIA)
*Perhatian: Harap segera ubah password ini setelah login pertama kali untuk alasan keamanan!*

- **IP Address**: `192.168.100.45` (Contoh IP VPS)
- **SSH Port**: `22`
- **Username**: `root`
- **Password**: `KeKoreaVPS_P4ssw0rd!2026`
- **Domain Web**: `www.kekorea.com` (Contoh Domain)
- **Akses SSH**:
  ```bash
  ssh root@192.168.100.45
  ```

### Langkah Deployment VPS

**1. Update Server & Instalasi Dependensi Dasar**
Login ke VPS via SSH, lalu jalankan:
```bash
sudo apt update && sudo apt upgrade -y
sudo apt install curl git nginx certbot python3-certbot-nginx -y

# Install Node.js v20 (via NodeSource)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

**2. Setup Proyek di Server**
Kloning repositori ke folder web server.
```bash
cd /var/www
git clone <url-repositori-anda> kekorea-web
cd kekorea-web

# Install dependencies untuk production
npm install
```

**3. Konfigurasi .env Server**
Buat file `.env` di `/var/www/kekorea-web` dengan kredensial production database Anda.
```bash
nano .env
# Masukkan DATABASE_URL="..." dan simpan (Ctrl+O, Enter, Ctrl+X)
```

**4. Build Aplikasi**
Kompilasi kode TypeScript dan React ke statis/optimasi Next.js.
```bash
npm run build
```

**5. Konfigurasi Process Manager (PM2)**
Agar Next.js tidak mati saat Anda menutup terminal (berjalan di background):
```bash
sudo npm install -g pm2
pm2 start npm --name "kekorea-web-prod" -- run start
pm2 save
pm2 startup
# Ikuti instruksi command yang diberikan oleh PM2 startup
```

**6. Setup Reverse Proxy (Nginx)**
Nginx akan meneruskan trafik dari port 80 (HTTP) ke aplikasi Next.js Anda (Port 3000).

```bash
sudo nano /etc/nginx/sites-available/kekorea-web
```
Isi dengan konfigurasi berikut:
```nginx
server {
    listen 80;
    server_name www.kekorea.com kekorea.com; # Ganti dengan domain Anda

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Aktifkan Nginx site dan restart:
```bash
sudo ln -s /etc/nginx/sites-available/kekorea-web /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

**7. Setup HTTPS dengan SSL Gratis (Let's Encrypt)**
Amankan website Anda dengan HTTPS:
```bash
sudo certbot --nginx -d kekorea.com -d www.kekorea.com
```

Website Anda sekarang telah berhasil dideploy, dilindungi SSL, dan siap diakses di internet! 🎉
