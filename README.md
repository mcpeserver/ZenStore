# ZenStore - Minecraft Hosting & Panel Bot Terbaik 🌐🎮

[![Vercel Deployment](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)
[![GitHub License](https://img.shields.io/github/license/username/repo?style=flat-square&color=blue)](LICENSE)
[![Built with React](https://img.shields.io/badge/Built%20with-React%2018-blue?style=flat-square&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Bundled%20with-Vite-646CFF?style=flat-square&logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)

**ZenStore** adalah platform landing page modern berkinerja tinggi yang menawarkan layanan **Minecraft Hosting** dan **Panel Bot WhatsApp** berkualitas tinggi, super stabil, anti-lag, dengan aktivasi instan dan lokasi server di Indonesia. Memiliki desain antarmuka yang sangat responsif, mewah, dan berkelas dunia yang memanjakan mata pengguna baik di desktop maupun perangkat mobile.

---

## 🌟 Fitur Utama

1. **Desain UI/UX Premium & Responsif**: Menggunakan kombinasi warna modern, tipografi elegan dari Google Fonts, efek interaksi interaktif, dan performa mulus di semua ukuran layar (Mobile, Tablet, Desktop).
2. **Katalog Produk Dinamis**: Menampilkan paket-paket hosting Minecraft (Basic & Premium) serta WhatsApp Bot Panel dengan detail spesifikasi lengkap dan harga mulai dari Rp1.000.
3. **Navigasi Mulus & Interaktif**: Header navigasi lengket (sticky), integrasi menu mobile yang halus dengan Framer Motion, serta smooth-scroll ke setiap section halaman.
4. **Tombol Call-To-Action (CTA) Instan**: Akses cepat menuju WhatsApp Admin Resmi (`WA JP` & `WA RB`) dan navigasi ke daftar paket produk.
5. **Dukungan Deploy Vercel**: Dilengkapi konfigurasi siap pakai (`vercel.json`) untuk penyebaran aplikasi kilat dan performa CDN super cepat.

---

## 🛠️ Teknologi yang Digunakan

Aplikasi web ini dibangun dengan teknologi mutakhir untuk memastikan kecepatan, keamanan, dan keindahan tampilan:

* **React 18** - Library UI JavaScript deklaratif terpopuler untuk pengembangan komponen modular.
* **Vite** - Build tool generasi baru yang sangat cepat untuk HMR dan optimasi produksi.
* **TypeScript** - Menambahkan pengetikan statis yang kuat demi meminimalkan error runtime.
* **Tailwind CSS** - Framework CSS utilitas pertama untuk kustomisasi desain responsif secara instan dan bersih.
* **Framer Motion (`motion/react`)** - Mesin animasi bertenaga tinggi untuk animasi transisi dan interaksi mikro yang memukau.
* **Lucide React** - Set ikon SVG modern dan konsisten yang ringan dan fleksibel.

---

## 🚀 Memulai Pengembangan Lokal

Ikuti langkah-langkah berikut untuk menjalankan proyek ini di mesin lokal Anda:

### Prasyarat
Pastikan Anda sudah menginstal [Node.js](https://nodejs.org/) (versi 18 atau yang lebih baru) dan npm.

### Langkah-langkah:

1. **Clone Repositori**:
   ```bash
   git clone https://github.com/username/zenstore-landing.git
   cd zenstore-landing
   ```

2. **Instal Dependensi**:
   ```bash
   npm install
   ```

3. **Jalankan Server Pengembangan**:
   ```bash
   npm run dev
   ```
   Buka browser Anda dan akses `http://localhost:3000` (atau port default yang diarahkan di terminal Anda).

4. **Lakukan Build Produksi**:
   ```bash
   npm run build
   ```
   Perintah ini akan menghasilkan direktori `dist/` yang siap dideploy ke server hosting statis mana pun.

5. **Jalankan Pemeriksaan Linter**:
   ```bash
   npm run lint
   ```

---

## ☁️ Penyebaran ke Vercel (Deployment)

Proyek ini telah dikonfigurasi sepenuhnya untuk penyebaran sekali klik di platform **Vercel**.

### Cara Deploy Menggunakan Vercel CLI:
1. Instal Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Jalankan perintah deploy di folder root proyek:
   ```bash
   vercel
   ```
3. Ikuti langkah petunjuk di terminal untuk menghubungkan dan mengunggah kode Anda.

### Cara Deploy Menggunakan Integrasi GitHub:
1. Hubungkan repositori GitHub Anda ke akun **Vercel Dashboard**.
2. Klik **Add New Project** dan pilih repositori ini.
3. Vercel akan otomatis mendeteksi konfigurasi **Vite** dan melakukan build.
4. Klik **Deploy**! Setiap kali Anda melakukan push kode ke branch `main`, Vercel akan otomatis memperbarui situs web Anda.

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE) - bebas digunakan, dimodifikasi, dan didistribusikan untuk keperluan personal maupun komersial.

---

Dibuat dengan penuh dedikasi untuk komunitas Minecraft dan pengguna Bot WhatsApp Indonesia. **ZenStore** – *Stable, Fast, Premium Hosting*. 🚀🎮
