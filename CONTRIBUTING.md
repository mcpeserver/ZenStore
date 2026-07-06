# Pedoman Kontribusi ZenStore 🚀

Terima kasih telah tertarik untuk berkontribusi pada **ZenStore**! Proyek ini bertujuan untuk menyediakan landing page hosting Minecraft dan Panel Bot terbaik, stabil, dan berkinerja tinggi.

Dokumen ini berisi sekumpulan pedoman untuk berkontribusi pada proyek ini.

## Cara Berkontribusi 🛠️

### 1. Melaporkan Masalah (Bug Report)
Jika Anda menemukan bug atau masalah:
* Pastikan masalah tersebut belum dilaporkan sebelumnya di bagian **Issues**.
* Buka Issue baru dan jelaskan masalah dengan jelas, termasuk langkah-langkah untuk mereproduksi bug tersebut, hasil yang diharapkan, dan tangkapan layar jika ada.

### 2. Mengusulkan Fitur Baru (Feature Request)
Kami selalu terbuka untuk ide-ide baru!
* Buka Issue baru dengan label `enhancement` atau `feature request`.
* Jelaskan mengapa fitur ini berguna bagi pengguna ZenStore lainnya.

### 3. Mengirimkan Pull Request (PR)
Jika Anda ingin memperbaiki bug atau menambahkan fitur baru secara langsung:
1. **Fork** repositori ini ke akun GitHub Anda.
2. Buat branch baru dari branch `main` dengan nama yang deskriptif:
   ```bash
   git checkout -b fitur/nama-fitur-anda
   # atau
   git checkout -b perbaikan/nama-bug
   ```
3. Lakukan perubahan pada kode Anda. Pastikan untuk mengikuti gaya penulisan kode yang sudah ada (menggunakan TypeScript, Tailwind CSS, dan komponen React modular).
4. Jalankan linter dan build lokal sebelum melakukan commit untuk memastikan tidak ada error:
   ```bash
   npm run lint
   npm run build
   ```
5. Lakukan commit perubahan Anda dengan pesan commit yang jelas dan deskriptif:
   ```bash
   git commit -m "Fitur: Menambahkan visualisasi paket baru"
   ```
6. Push branch Anda ke repositori hasil fork:
   ```bash
   git push origin fitur/nama-fitur-anda
   ```
7. Buka Pull Request ke repositori utama ZenStore dari branch Anda. Jelaskan perubahan yang Anda lakukan pada deskripsi PR.

---

## Standar Kode & Desain 🎨

* **TypeScript**: Pastikan semua kode bertipe kuat (strongly-typed) dan tidak menggunakan tipe `any` kecuali terpaksa.
* **Tailwind CSS**: Gunakan kelas utilitas Tailwind secara konsisten untuk menjaga performa dan keindahan tampilan responsif.
* **Framer Motion**: Gunakan animasi yang halus, terarah, dan memiliki tujuan visual yang jelas untuk pengalaman pengguna yang intuitif.
* **Pristine Layout**: Selalu perhatikan whitespace, kontras warna yang ramah aksesibilitas, dan kerapihan komponen.

Terima kasih telah menjadi bagian dari perjalanan pengembangan ZenStore! 🌟
