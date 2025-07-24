# Proyek Berita SDGs

Ini adalah proyek aplikasi web berita yang berfokus pada Tujuan Pembangunan Berkelanjutan (SDGs). Aplikasi ini dibangun dengan arsitektur client-server.

## 📜 Daftar Isi

- [Tech Stack](#-tech-stack)
- [Instalasi](#-instalasi)
- [Fitur](#-fitur)

---

## 🚀 Tech Stack

Proyek ini dibangun menggunakan teknologi modern berikut:

### **Backend (Server)**

-   **Framework**: Laravel 10
-   **Bahasa**: PHP 8.1
-   **Database**: MySQL (dapat dikonfigurasi ke yang lain seperti PostgreSQL atau SQLite)
-   **Manajemen Paket**: Composer

### **Frontend (Client)**

-   **Framework**: React 19
-   **Bahasa**: TypeScript
-   **Build Tool**: Vite
-   **Styling**: Tailwind CSS
-   **Komponen UI**: shadcn/ui (Radix UI)
-   **Manajemen Paket**: npm/pnpm/yarn

---

## ⚙️ Instalasi

Ikuti langkah-langkah di bawah ini untuk menjalankan proyek ini di lingkungan lokal Anda.

### **Prasyarat**

-   PHP >= 8.1
-   Composer
-   Node.js >= 18
-   Server Database (misalnya MySQL)

### **1. Kloning Repositori**

```bash
git clone [https://github.com/rapleswojtyla/sdgs-news.git](https://github.com/rapleswojtyla/sdgs-news.git)
cd sdgs-news
```

### **2. Instalasi Backend (Server)**
1. Masuk ke direktori server:
   ```bash
   cd server
   ```
2. Instal dependensi Composer:
   ```bash
   composer install
   ```
3. Salin file .env.example menjadi .env dan konfigurasikan:
   ```bash
   cp .env.example .env
   ```
   Buka file .env dan sesuaikan pengaturan database Anda (DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD).
4. Hasilkan kunci aplikasi:
   ```bash
   php artisan key:generate
   ```
5. Jalankan migrasi database dan seeder:
   ```bash
   php artisan migrate --seed
   ```
6. Buat tautan penyimpanan (storage link):
   ```bash
   php artisan storage:link
   ```
7. Jalankan server pengembangan Laravel:
   ```bash
   php artisan serve
   ```

### **3. Instalasi Frontend (Client)**
1. Buka terminal baru dan masuk ke direktori client:
   ```bash
   cd client
   ```
2. Instal dependensi Node.js:
   ```bash
   pnpm install
   ```
3. Salin file .env.example menjadi .env:
   ```bash
   cp .env.example .env
   ```
4. Jalankan server pengembangan Vite:
   ```bash
   pnpm run dev
   ```

## ✨ Fitur
- Tampilan Berita: Pengguna dapat melihat daftar berita terbaru.
- Detail Berita: Halaman detail untuk setiap berita, termasuk konten lengkap dan gambar.
- Pencarian & Filter: Fungsionalitas untuk mencari berita berdasarkan kata kunci dan memfilter berdasarkan kategori.
- Paginasi: Navigasi halaman untuk menelusuri banyak berita.
- CMS (Admin):
  - Autentikasi admin yang aman.
  - Dasbor untuk mengelola berita (Buat, Baca, Perbarui, Hapus).
  - Editor teks kaya (WYSIWYG) untuk membuat dan mengedit konten berita.
