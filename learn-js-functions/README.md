# Week 2 JavaScript Functions Project

Project ini berisi kumpulan fungsi dasar JavaScript yang ditempatkan secara modular dalam file terpisah. Setiap fungsi memiliki tugas tertentu seperti konversi suhu, konversi panjang, hingga pemeriksaan palindrome.

## 📁 Struktur Direktori

```
Week2/
│
├── functions/
│   ├── function*.js      
│   └── logger.js         
│
├── index.js (atau main.js) 
```

## ⚙️ Cara Menjalankan

1. **Pastikan sudah install Node.js.**
2. Jalankan file `index.js` atau `main.js`:
   ```bash
   node index.js
   ```
3. Program akan menampilkan menu pilihan fungsi. User dapat memilih fungsi berdasarkan input angka.

## Catatan
- Seluruh fungsi disimpan dalam folder `functions/` dan diexport menggunakan `module.exports`.
- File utama menggunakan `require()` untuk mengimpor fungsi-fungsi tersebut.
- Input dari user ditangani dengan modul `readline`.
---
