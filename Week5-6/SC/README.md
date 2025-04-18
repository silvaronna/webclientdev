## Changelog & Features 18 APRIL 2025

### 1. 3-Column View Mode
- Menambahkan mode tampilan baru: `grid3`
- Menggunakan ikon `Columns3` dari **Lucide React** sebagai tombol toggle
- Menyesuaikan ukuran kartu agar proporsional dengan layout 3 kolom

---

### 2. LocalStorage Caching
- Implementasi **Redux + localStorage** untuk menyimpan:
  - Data Pokémon
  - Detail Pokémon yang dipilih
  - Preferensi mode tampilan
  - Pengaturan sort & filter
- Data tetap tersimpan saat user kembali membuka halaman, tanpa perlu fetch ulang

---

### 3. Filtering & Sorting
- Menambahkan komponen baru: `FilterControls`, berisi:
  - Dropdown untuk **sorting** (nama, nomor, atau tipe)
  - Dropdown untuk **filter** berdasarkan tipe Pokémon
- Saat filter dipilih, tipe terpilih ditampilkan paling atas
- Menambahkan aksi & reducer Redux untuk menangani sorting dan filtering

---

### 4. Redux Implementation
- Mengonfigurasi Redux store dengan dua slice utama:
  - `pokemonSlice`: Mengelola data Pokémon, filtering, dan sorting
  - `uiSlice`: Mengatur state tampilan seperti view mode, pencarian, dan animasi
- Menambahkan custom hooks agar penggunaan Redux lebih mudah dan clean

---

### 📁 Key Files & Folders

| Path                            | Deskripsi                                 |
|---------------------------------|-------------------------------------------|
| `/lib/redux/*`                 | Store, slices, dan custom hooks Redux     |
| `/app/providers.tsx`          | Wrapper untuk Redux Provider               |
| `/components/filter-controls.tsx` | Komponen untuk filter & sorting Pokémon |

