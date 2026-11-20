# Portofolio — Syifa Aprilia Ayu Wandika

Portofolio satu halaman untuk melamar posisi **Pelajar**. Dibuat dengan HTML, CSS, dan JavaScript murni. Tanpa framework, tanpa build step, tanpa npm.

## Struktur

```
.
├── index.html    # Seluruh konten halaman (hero, pengalaman, hasil kerja, keahlian, pendidikan, kontak)
├── styles.css    # Gaya, variabel warna (:root), mode gelap, dan CSS print
├── script.js     # Tema terang/gelap, kartu pengalaman buka-tutup, animasi scroll
├── vercel.json   # Konfigurasi Vercel: cleanUrls dan header keamanan dasar
├── LICENSE       # Lisensi MIT asli dari template
└── README.md
```

Cukup buka `index.html` di browser untuk melihat hasilnya. Tidak perlu instalasi apa pun.

## Cara Mengedit Konten

Semua data yang sering diganti ditandai dengan komentar `<!-- EDIT: ... -->` di `index.html`. Cari teks `EDIT` di editor (Ctrl+F) untuk menemukannya semua.

Yang perlu diisi:

1. **Domain** (`og:url` dan `canonical`): ganti `YOUR-DOMAIN.vercel.app` setelah situs dipasang di Vercel.
2. **Periode PKL**: isi bulan dan tahun mulai–selesai.
3. **Periode OSIS**: isi periode kepengurusan untuk Wakil Sekretaris dan Koordinator Sekbid 10.
4. **Pendidikan**: isi jurusan dan tahun.
5. **LinkedIn**: isi URL profil di `href`, lalu hapus atribut `hidden` pada `<li>` LinkedIn. Selama atribut itu masih ada, tautan tidak ditampilkan.

Warna utama juga bisa diubah di `styles.css` pada blok `:root` (mode terang) dan `:root[data-theme="dark"]` (mode gelap).

## Cara Mencetak sebagai CV

Buka halaman, lalu tekan **Ctrl+P** (atau Cmd+P di Mac). CSS print menyembunyikan navigasi dan tombol tema, memaksa palet terang, dan membuka semua kartu pengalaman.

## Push ke GitHub

```bash
git add .
git commit -m "Portofolio Syifa"
git remote add origin https://github.com/USERNAME/NAMA-REPO.git
git push -u origin main
```

## Import ke Vercel

1. Masuk ke [vercel.com](https://vercel.com) dan pilih **Add New → Project**.
2. Pilih repo GitHub yang baru dibuat, lalu **Import**.
3. Biarkan **Framework Preset** pada *Other* dan kosongkan **Build Command** serta **Output Directory**. Vercel akan langsung menayangkan file statis.
4. Klik **Deploy**. Setelah jadi, salin URL yang diberikan Vercel lalu isi ke placeholder `YOUR-DOMAIN.vercel.app` di `index.html`.
5. Setiap `git push` ke `main` akan men-deploy ulang otomatis.

`vercel.json` sudah mengatur `cleanUrls` dan header keamanan dasar (`X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy`), jadi tidak perlu konfigurasi tambahan.

## Kredit

Dibangun di atas template [portfolio-template](https://github.com/diyoriko/portfolio-template) oleh [diyoriko](https://github.com/diyoriko) (Diyor Khakimov), berlisensi MIT. Lisensi asli disertakan di file `LICENSE`.
