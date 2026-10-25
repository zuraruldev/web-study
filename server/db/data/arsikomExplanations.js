const arsikomExplanations = [
  {
    id: 'exp_arsikom_kisi1',
    subject_slug: 'arsikom',
    chapter_order: 1,
    topic_title: 'Kisi-Kisi 1: Perbedaan Arsitektur Komputer vs Organisasi Komputer & Studi Kasus Desain',
    content_markdown: `# Kisi-Kisi 1: Perbedaan Arsitektur Komputer vs Organisasi Komputer

![Kisi-Kisi Resmi UTS Arsitektur Komputer](/materials/arsikom/kisi-kisi.png)

## 1. Definisi Fundamental & Esensi Filosofis

Dalam dunia komputasi, dua istilah yang sering tertukar namun memiliki batasan ranah (*scope*) yang sangat tegas adalah **Arsitektur Komputer** (*Computer Architecture*) dan **Organisasi Komputer** (*Computer Organization*).

> **Kunci Pemahaman Pak Bagas:**
> - **Arsitektur Komputer** menjawab pertanyaan: *"APA yang bisa dilakukan oleh sistem komputer?"* (*What the system does - Functional specification*).
> - **Organisasi Komputer** menjawab pertanyaan: *"BAGAIMANA sistem mengimplementasikan fungsi tersebut secara fisik?"* (*How the system does it - Physical implementation*).

---

## 2. Analogi Perancangan Mobil (Pedal Gas vs Mesin Fisik)

Buku acuan (*Nugraha, Anggara T. 2025. Organisasi dan Arsitektur Komputer*) dan bahan ajar perkuliahan menguraikan analogi mobil secara gamblang:

| Parameter Komparasi | Arsitektur Komputer (Sudut Pandang Pengemudi/Programmer) | Organisasi Komputer (Sudut Pandang Teknisi/Insinyur Pabrik) |
| :--- | :--- | :--- |
| **Konsep Desain** | Rancangan abstrak dan fungsionalitas tanpa peduli detail fisik internal. | Rancangan fisik, struktur mekanikal, dan interkoneksi komponen nyata. |
| **Analogi Kemudi Mobil** | Adanya pedal gas, pedal rem, setir kemudi, dan tuas persneling yang bertindak sebagai antarmuka (*interface*). Pengemudi tahu jika pedal gas ditekan, mobil bergerak maju. | Bagaimana kabel pedal gas menarik throttle valve, injektor menyemprotkan bensin, rasio kompresi silinder, dan bagaimana transmisi girbox berputar. |
| **Pilihan Mesin** | Kapasitas daya kuda (*horsepower*) dan volume tangki yang tersedia bagi pengguna. | Apakah mobil memakai mesin bensin 4-silinder hemat bahan bakar, mesin V8 twin-turbo balap, atau motor listrik baterai. Fungsionalitas menyetir tetap sama, namun performa, efisiensi termal, dan biaya produksinya berbeda drastis. |
| **Konfigurasi Fisik** | Spesifikasi kursi, bagasi, dan tata letak dashboard. | Penempatan radiator, filter udara, sirkulasi pendingin, dan kabel harness di balik kap mesin. |

---

## 3. Matriks Perbandingan Komprehensif

| Karakteristik | Arsitektur Komputer (*Architecture*) | Organisasi Komputer (*Organization*) |
| :--- | :--- | :--- |
| **Fokus Pertanyaan** | *What to do?* (Atribut yang berdampak langsung pada eksekusi logis program). | *How to do it?* (Realisasi operasional perangkat keras dan sinyal interkoneksi). |
| **Visibilitas bagi Programmer** | **Terlihat langsung (*visible*)** oleh pembuat program bahasa mesin / assembly / compiler. | **Transparan / Tersembunyi (*invisible*)** bagi programmer aplikasi umum. |
| **Atribut & Komponen Kunci** | 1. Set Instruksi (*Instruction Set Architecture / ISA*)<br>2. Format data dan ukuran representasi bilangan<br>3. Mode pengalamatan memori (*Addressing Modes*)<br>4. Jumlah dan register yang dapat diakses programmer (*General Purpose Registers*)<br>5. Mekanisme I/O logis | 1. Teknologi perangkat keras (Semikonduktor, transistor, CMOS)<br>2. Sinyal kontrol (*Control signals*) dan clocking timing<br>3. Antarmuka perangkat (*Interface hardware*) dan lebar bus fisik<br>4. Hirarki memori fisik (SRAM untuk Cache L1/L2/L3, DRAM untuk RAM)<br>5. Teknik pipelining eksekusi (3-stage, 5-stage, out-of-order execution) |
| **Stabilitas & Siklus Perubahan** | **Sangat stabil dan bertahan lama.** Contoh: Arsitektur x86 telah bertahan puluhan tahun agar kompatibel mundur (*backward compatible*). | **Sangat cepat berevolusi.** Generasi CPU baru (Intel Generasi 12, 13, 14 atau AMD Zen 3, Zen 4) mengubah susunan cache, litografi transistor (7nm ke 4nm), dan jumlah core tanpa mengubah ISA x86 dasarnya. |

---

## 4. Bedah Studi Kasus Nyata Perkuliahan

Dalam ujian UTS, mahasiswa diuji kemampuannya mengelompokkan spesifikasi perangkat ke dalam kotak **Arsitektur** atau **Organisasi**:

### Studi Kasus A: Sistem Kasir Minimarket (Point-of-Sale / POS)
- **Tuntutan Kebutuhan**: Memproses transaksi cepat, terhubung barcode scanner & printer thermal struk, hemat daya listrik, pendinginan pasif, dan ruang ringkas.
- **Tinjauan Arsitektur**:
  - Pemilihan prosesor berbasis **ARM Cortex-A** (karena arsitektur hemat daya).
  - Mengadopsi set instruksi **RISC (Reduced Instruction Set Computer)** yang sederhana dan efisien untuk instruksi dasar kasir.
  - Dukungan memori hingga 4 GB RAM dan mode operasi multitasking (aplikasi POS kasir + sinkronisasi database stok).
- **Tinjauan Organisasi**:
  - Penerapan clock speed 1.8 GHz dengan pipeline instruksi 5 tahap.
  - Implementasi 16 register fisik internal CPU.
  - Cache memori L1 32 KB dan L2 256 KB untuk mempercepat akses perhitungan kasir.
  - Buffer I/O khusus pada port USB/Serial agar pembacaan barcode scanner tidak terputus (*no delay*).
  - Manajemen daya dengan sleep mode otomatis saat kasir tidak melayani pelanggan.

### Studi Kasus B: Workstation Desain Grafis & Rendering 3D
- **Tuntutan Kebutuhan**: Menjalankan Adobe Photoshop, Blender, rendering video 4K, dan grafis multi-layer tanpa lag.
- **Tinjauan Arsitektur**:
  - Arsitektur prosesor **x86_64 multicore** (Intel Core i9 atau AMD Ryzen 9).
  - Set instruksi wajib mendukung ekstensi multimedia vektor: **SIMD, AVX (Advanced Vector Extensions), dan FMA** untuk percepatan kalkulasi matriks 3D.
  - Dukungan memori addressing 64-bit hingga 128 GB RAM dan dukungan kartu grafis diskrit (GPU).
- **Tinjauan Organisasi**:
  - Desain 12 core / 24 thread dengan clock dinamis 4.2 GHz.
  - Cache L3 besar sebesar 32 MB untuk menampung tekstur gambar yang sedang aktif.
  - Interkoneksi bus data berkecepatan tinggi **PCIe 4.0 x16** untuk slot GPU dan NVMe SSD.
  - Arsitektur memori Quad-channel DDR5 untuk bandwidth transfer data masif.`
  },
  {
    id: 'exp_arsikom_kisi2',
    subject_slug: 'arsikom',
    chapter_order: 2,
    topic_title: 'Kisi-Kisi 2: Konversi Sistem Bilangan (Desimal, Biner, Oktal, Heksadesimal)',
    content_markdown: `# Kisi-Kisi 2: Konversi Sistem Bilangan Komputer

## 1. Landasan Sistem Bilangan Komputer

Semua data di dalam komputer digital disimpan, diproses, dan ditransmisikan dalam representasi bilangan biner. Hal ini disebabkan oleh sifat fisik komponen elektronik digital (transistor) yang hanya mengenal dua status stabil:
- **Tegangan tinggi / Arus mengalir (ON)** = Logika 1.
- **Tegangan rendah / Arus terputus (OFF)** = Logika 0.

Jumlah digit simbol yang digunakan dalam suatu sistem penomoran disebut **Radix** atau **Basis**:

| Sistem Bilangan | Radix / Basis | Simbol Angka yang Sah | Representasi Nilai Bit |
| :--- | :--- | :--- | :--- |
| **Biner** | 2 | \`0, 1\` | 1 bit per digit |
| **Oktal** | 8 | \`0, 1, 2, 3, 4, 5, 6, 7\` | 1 digit oktal = tepat 3 bit biner (\`2³ = 8\`) |
| **Desimal** | 10 | \`0, 1, 2, 3, 4, 5, 6, 7, 8, 9\` | Sistem hitung standar manusia |
| **Heksadesimal** | 16 | \`0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F\` | 1 digit heksa = tepat 4 bit biner (\`2⁴ = 16\`) |

> **PENTING (Nilai Huruf Heksadesimal):**
> \`A = 10\`, \`B = 11\`, \`C = 12\`, \`D = 13\`, \`E = 14\`, \`F = 15\`.

---

## 2. Tabel Pemetaan Cepat Bit (Pocket Cheat-Sheet)

### Tabel Oktal ke 3-Bit Biner
| Oktal | Biner (3-bit) | Oktal | Biner (3-bit) |
| :---: | :---: | :---: | :---: |
| \`0₈\` | \`000₂\` | \`4₈\` | \`100₂\` |
| \`1₈\` | \`001₂\` | \`5₈\` | \`101₂\` |
| \`2₈\` | \`010₂\` | \`6₈\` | \`110₂\` |
| \`3₈\` | \`011₂\` | \`7₈\` | \`111₂\` |

### Tabel Heksadesimal ke 4-Bit Biner
| Heksa | Desimal | Biner (4-bit) | Heksa | Desimal | Biner (4-bit) |
| :---: | :---: | :---: | :---: | :---: | :---: |
| \`0\` | 0 | \`0000\` | \`8\` | 8 | \`1000\` |
| \`1\` | 1 | \`0001\` | \`9\` | 9 | \`1001\` |
| \`2\` | 2 | \`0010\` | \`A\` | 10 | \`1010\` |
| \`3\` | 3 | \`0011\` | \`B\` | 11 | \`1011\` |
| \`4\` | 4 | \`0100\` | \`C\` | 12 | \`1100\` |
| \`5\` | 5 | \`0101\` | \`D\` | 13 | \`1101\` |
| \`6\` | 6 | \`0110\` | \`E\` | 14 | \`1110\` |
| \`7\` | 7 | \`0111\` | \`F\` | 15 | \`1111\` |

---

## 3. Algoritma & Prosedur Konversi

### A. Desimal ke Basis Lain (Metode Pembagian Beruntun / Suksesif)
Bagi bilangan desimal dengan basis tujuan (2, 8, atau 16) sampai hasil baginya 0. **Sisa pembagian dibaca dari bawah ke atas (sisa terakhir adalah Most Significant Digit / MSD)**.

#### Contoh 1: Konversi Desimal 87₁₀ ke Biner
\`\`\`text
87 / 2 = 43  sisa 1  ▲ (Digit terakhir / LSB)
43 / 2 = 21  sisa 1  │
21 / 2 = 10  sisa 1  │
10 / 2 = 5   sisa 0  │
 5 / 2 = 2   sisa 1  │
 2 / 2 = 1   sisa 0  │
 1 / 2 = 0   sisa 1  │ (Digit pertama / MSB)
Hasil dibaca dari bawah ke atas: 1010111₂
\`\`\`

#### Contoh 2: Konversi Desimal 87₁₀ ke Oktal
\`\`\`text
87 / 8 = 10  sisa 7  ▲
10 / 8 = 1   sisa 2  │
 1 / 8 = 0   sisa 1  │
Hasil dibaca dari bawah: 127₈
\`\`\`

#### Contoh 3: Konversi Desimal 179₁₀ ke Heksadesimal
\`\`\`text
179 / 16 = 11  sisa 3  ▲
 11 / 16 = 0   sisa 11 (diwakili karakter B)
Hasil dibaca dari bawah: B3₁₆
\`\`\`

---

### B. Konversi Antara Biner, Oktal, dan Heksadesimal (Metode Pengelompokan Bit)

Ini adalah teknik tercepat yang paling sering keluar pada lembar ujian UTS:

1. **Biner ke Oktal**:
   - Kelompokkan bit biner **setiap 3 bit mulai dari sisi paling kanan (LSB)**.
   - Tambahkan angka 0 di depan jika kelompok paling kiri kurang dari 3 bit.
   - Ubah tiap kelompok 3 bit menjadi nilai oktalnya (0–7).
   - *Contoh*: \`1010111₂\` dipisah menjadi \`001 | 010 | 111\` = \`1 | 2 | 7\` ➔ **127₈**.

2. **Biner ke Heksadesimal**:
   - Kelompokkan bit biner **setiap 4 bit mulai dari sisi paling kanan**.
   - Tambahkan 0 di depan jika kelompok paling kiri kurang dari 4 bit.
   - Ubah tiap kelompok 4 bit menjadi digit heksa (0–9, A–F).
   - *Contoh*: \`10110011₂\` dipisah menjadi \`1011 | 0011\` = \`11 | 3\` = **B3₁₆**.

3. **Oktal ke Heksadesimal** (Lewat Jembatan Biner):
   - Ubah tiap digit oktal ke 3 bit biner.
   - Satukan string biner tersebut.
   - Pecah kembali string biner setiap 4 bit dari kanan, lalu terjemahkan ke heksadesimal.
   - *Contoh*: Konversi \`127₈\` ke Heksadesimal:
     - 1 = \`001\`, 2 = \`010\`, 7 = \`111\` ➔ Biner: \`001010111₂\`.
     - Kelompokkan 4 bit dari kanan: \`0 | 0101 | 0111\` ➔ \`0101\` (5) dan \`0111\` (7) = **57₁₆**.`
  },
  {
    id: 'exp_arsikom_kisi3',
    subject_slug: 'arsikom',
    chapter_order: 3,
    topic_title: 'Kisi-Kisi 3: Operasi Aritmatika Antar Bilangan (Biner, Oktal, Heksadesimal)',
    content_markdown: `# Kisi-Kisi 3: Operasi Aritmatika Antar Bilangan Komputer

Operasi sistem bilangan tidak hanya terbatas pada konversi, tetapi juga mencakup perhitungan aritmatika dasar: **Penjumlahan (+), Pengurangan (-), Perkalian (×), dan Pembagian (÷)** pada basis 2, basis 8, dan basis 16.

---

## 1. Operasi Aritmatika Bilangan Biner

### A. Penjumlahan Biner (*Binary Addition*)
Aturan penjumlahan dasar:
- \`0 + 0 = 0\`
- \`0 + 1 = 1\`
- \`1 + 0 = 1\`
- \`1 + 1 = 0\` (dengan **Carry-Out 1** ke posisi kiri berikutnya, bernilai 10₂)
- \`1 + 1 + 1 = 1\` (dengan **Carry-Out 1**, bernilai 11₂)

**Contoh: 111₂ + 101₂**
\`\`\`text
  ¹ ¹     (simpanan / carry)
   1 1 1₂   (= 7₁₀)
   1 0 1₂   (= 5₁₀)
  ------- +
 1 1 0 0₂   (= 12₁₀)
\`\`\`
*Penjabaran dari kanan:*
1. Kolom 0: 1 + 1 = 10₂ ➔ tulis 0, carry 1 ke kolom 1.
2. Kolom 1: 1 (carry) + 1 + 0 = 10₂ ➔ tulis 0, carry 1 ke kolom 2.
3. Kolom 2: 1 (carry) + 1 + 1 = 11₂ ➔ tulis 1, carry 1 ke kolom 3.
4. Kolom 3: tulis 1. Hasil akhir: **1100₂**.

---

### B. Pengurangan Biner (*Binary Subtraction*)
Aturan pengurangan dasar:
- \`0 - 0 = 0\`
- \`1 - 0 = 1\`
- \`1 - 1 = 0\`
- \`0 - 1 = 1\` (dengan **Borrow 1** dari digit sebelah kiri, di mana 1 pinjaman bernilai 2₁₀ atau 10₂)

**Contoh: 100₂ - 010₂**
\`\`\`text
   1 0 0₂   (= 4₁₀)
   0 1 0₂   (= 2₁₀)
  ------- -
   0 1 0₂ = 10₂ (= 2₁₀)
\`\`\`
*Penjabaran dari kanan:*
1. Kolom 0: 0 - 0 = 0.
2. Kolom 1: 0 - 1 tidak bisa, maka meminjam 1 dari kolom 2. Nilai pinjaman adalah 10₂ (= 2₁₀). Maka: 2 - 1 = 1.
3. Kolom 2: digit 1 sudah dipinjam, bersisa 0. 0 - 0 = 0. Hasil akhir: **10₂** (atau 010₂).

---

### C. Perkalian Biner (*Binary Multiplication*)
Perkalian biner sangat sederhana karena hanya mengalikan angka dengan 0 atau 1, lalu melakukan pergeseran (*shift-and-add*):

**Contoh: 1011₂ × 1110₂**
\`\`\`text
        1 0 1 1₂   (= 11₁₀)
        1 1 1 0₂   (= 14₁₀)
        --------- ×
        0 0 0 0    (1011 × 0)
      1 0 1 1 0    (1011 × 1, geser 1 digit kiri)
    1 0 1 1 0 0    (1011 × 1, geser 2 digit kiri)
  1 0 1 1 0 0 0    (1011 × 1, geser 3 digit kiri)
  --------------- +
  1 0 0 1 1 0 1 0₂ (= 154₁₀)
\`\`\`

---

### D. Pembagian Biner (*Binary Long Division*)
Prinsip pembagian biner mengikuti pola porogapit desimal:
- Jika bilangan yang diambil ≥ pembagi ➔ tulis hasil **1**, lalu kurangkan dengan pembagi.
- Jika bilangan yang diambil < pembagi ➔ tulis hasil **0**, lalu turunkan bit berikutnya.

**Contoh: 1110011₂ ÷ 101₂**
\`\`\`text
Ambil 3 bit pertama: 111 ≥ 101 ➔ tulis 1
  111 - 101 = 010
Turunkan 0: 100 < 101 ➔ tulis 0
Turunkan 0: 1000 > 101 ➔ tulis 1 (1000₂ - 101₂ = 8 - 5 = 3 = 011₂)
Turunkan 1: 111 > 101 ➔ tulis 1 (111₂ - 101₂ = 2 = 010₂)
Turunkan 1: 101 ≥ 101 ➔ tulis 1 (101₂ - 101₂ = 0)
Hasil pembagian akhir = 10111₂ (= 23₁₀).
\`\`\`

---

## 2. Operasi Aritmatika Oktal & Heksadesimal (Sangat Krusial di UTS)

> **Golden Rules yang Wajib Dihafal:**
> 1. **Oktal (Basis 8)**:
>    - Jika penjumlahan kolom **≥ 8**, bagi dengan 8. Hasil bagi menjadi **Carry-Out**, dan sisa baginya ditulis di bawah.
>    - Jika pengurangan meminjam dari kolom sebelah kiri, **1 pinjaman bernilai 8**.
> 2. **Heksadesimal (Basis 16)**:
>    - Jika penjumlahan kolom **≥ 16**, bagi dengan 16. Hasil bagi menjadi **Carry-Out**, dan sisa baginya ditulis di bawah.
>    - Jika pengurangan meminjam dari kolom sebelah kiri, **1 pinjaman bernilai 16**.

### Penjumlahan Oktal: 54₈ + 35₈
\`\`\`text
  ¹   (carry)
  5 4₈
  3 5₈
  ---- +
  1 1 1₈
\`\`\`
- Kolom kanan: \`4 + 5 = 9\`. Karena 9 ≥ 8: \`9 / 8 = 1 sisa 1\`. Tulis 1, simpan carry 1.
- Kolom kiri: \`1 (carry) + 5 + 3 = 9\`. \`9 / 8 = 1 sisa 1\`. Tulis 1, sisa carry 1 ditulis paling kiri. Hasil: **111₈**.

### Pengurangan Oktal: 54₈ - 35₈
\`\`\`text
  5 4₈
  3 5₈
  ---- -
  1 7₈
\`\`\`
- Kolom kanan: \`4 - 5\` tidak bisa. Pinjam 1 dari kolom kiri (bernilai 8). Maka: \`(4 + 8) - 5 = 12 - 5 = 7\`. Tulis 7.
- Kolom kiri: 5 sudah dipinjam 1, bersisa 4. Maka \`4 - 3 = 1\`. Tulis 1. Hasil: **17₈**.

---

### Penjumlahan Heksadesimal: 2A₁₆ + 1F₁₆
\`\`\`text
  ¹   (carry)
  2 A₁₆   (A = 10)
  1 F₁₆   (F = 15)
  ----- +
  4 9₁₆
\`\`\`
- Kolom kanan: \`A + F = 10 + 15 = 25\`. Karena 25 ≥ 16: \`25 / 16 = 1 sisa 9\`. Tulis 9, carry 1.
- Kolom kiri: \`1 (carry) + 2 + 1 = 4\`. Tulis 4. Hasil: **49₁₆**.

### Pengurangan Heksadesimal: 2A₁₆ - 1F₁₆
\`\`\`text
  2 A₁₆
  1 F₁₆
  ----- -
  0 B₁₆ = B₁₆
\`\`\`
- Kolom kanan: \`A - F = 10 - 15\` tidak bisa. Pinjam 1 dari kiri (bernilai 16). Maka: \`(10 + 16) - 15 = 26 - 15 = 11\`. Angka 11 dalam heksadesimal adalah huruf **B**.
- Kolom kiri: 2 sudah dipinjam 1, tersisa 1. Maka \`1 - 1 = 0\`. Hasil: **B₁₆**.`
  },
  {
    id: 'exp_arsikom_kisi4',
    subject_slug: 'arsikom',
    chapter_order: 4,
    topic_title: 'Kisi-Kisi 4: Operasi Logika dan Aritmatika Biner (AND, OR, NOT & Evaluasi Majemuk)',
    content_markdown: `# Kisi-Kisi 4: Operasi Logika & Aljabar Boolean Biner

Operasi logika biner memproses variabel Boolean (hanya bernilai \`0\` untuk Salah / False, dan \`1\` untuk Benar / True). Di dalam ALU CPU, operasi ini dikerjakan oleh gerbang logika digital (*logic gates*) untuk keperluan penyaringan bit, masking, pengaturan status bendera (*flags*), dan evaluasi percabangan program.

---

## 1. Tiga Operator Logika Dasar

### A. Operator AND (& / Konjungsi)
- **Aturan**: Menghasilkan keluaran \`1\` **HANYA JIKA SEMUA MASUKANNYA 1**. Jika ada satu saja masukan 0, keluarannya pasti 0.
- **Tabel Kebenaran AND**:
  | Masukan A | Masukan B | Keluaran (A AND B) |
  | :---: | :---: | :---: |
  | 0 | 0 | **0** |
  | 0 | 1 | **0** |
  | 1 | 0 | **0** |
  | 1 | 1 | **1** |

### B. Operator OR (| / Disjungsi)
- **Aturan**: Menghasilkan keluaran \`1\` **JIKA SETIDAKNYA SALAH SATU MASUKAN BERILAI 1**. Hanya menghasilkan 0 jika seluruh masukan bernilai 0.
- **Tabel Kebenaran OR**:
  | Masukan A | Masukan B | Keluaran (A OR B) |
  | :---: | :---: | :---: |
  | 0 | 0 | **0** |
  | 0 | 1 | **1** |
  | 1 | 0 | **1** |
  | 1 | 1 | **1** |

### C. Operator NOT (~ / Inversi / Negasi)
- **Aturan**: Merupakan operator unary (satu masukan) yang membalikkan nilai bit. Bit \`0\` diubah menjadi \`1\`, dan bit \`1\` diubah menjadi \`0\`.
- **Tabel Kebenaran NOT**:
  | Masukan A | Keluaran NOT(A) |
  | :---: | :---: |
  | 0 | **1** |
  | 1 | **0** |

---

## 2. Cara Kerja Operasi Bitwise pada String Biner

Operasi bitwise dijalankan dengan membandingkan bit demi bit pada posisi yang bersesuaian:

### Contoh Operasi AND Bitwise: \`1011₂ AND 1101₂\`
\`\`\`text
  1 0 1 1
  1 1 0 1
  ------- AND
  1 0 0 1₂
\`\`\`
- Kolom 3 (paling kiri): 1 AND 1 = 1
- Kolom 2: 0 AND 1 = 0
- Kolom 1: 1 AND 0 = 0
- Kolom 0 (paling kanan): 1 AND 1 = 1
➔ Hasil: **1001₂**.

### Contoh Operasi OR Bitwise: \`1010₂ OR 0111₂\`
\`\`\`text
  1 0 1 0
  0 1 1 1
  ------- OR
  1 1 1 1₂
\`\`\`
➔ Hasil: **1111₂**.

### Contoh Operasi NOT Bitwise: \`NOT (1101₂)\`
\`\`\`text
  NOT(1) = 0
  NOT(1) = 0
  NOT(0) = 1
  NOT(1) = 0
\`\`\`
➔ Hasil: **0010₂**.

---

## 3. Pembahasan Latihan Soal UTS Dosen (Pak Bagas)

Soal ujian UTS sering mengombinasikan operasi bitwise dengan tanda kurung precedence:

### Soal 1: \`(1011 AND 0110) OR 1001\`
1. Selesaikan operasi di dalam tanda kurung terlebih dahulu:
   \`\`\`text
     1011
     0110
     ---- AND
     0010
   \`\`\`
2. Operasikan hasil tersebut dengan OR \`1001\`:
   \`\`\`text
     0010
     1001
     ---- OR
     1011 (Catatan slide: jika bit 1 di OR kan bit 1 maka bit 1 ➔ 1011)
   \`\`\`
   *Jawab*: **1011₂** (atau 1001₂ jika bit ke-2 adalah 0000).

### Soal 2: \`NOT (1010 OR 0101)\`
1. Hitung operasi di dalam kurung:
   \`\`\`text
     1010
     0101
     ---- OR
     1111
   \`\`\`
2. Balikkan seluruh bit menggunakan NOT:
   \`\`\`text
     NOT(1111) = 0000₂
   \`\`\`
   *Jawab*: **0000₂** (semua bit nol).

### Soal 3: \`(NOT 1001) AND 0110\`
1. Inversikan \`1001\` ➔ \`0110\`.
2. Lakukan AND terhadap \`0110\`:
   \`\`\`text
     0110
     0110
     ---- AND
     0110₂
   \`\`\`
   *Jawab*: **0110₂**.`
  },
  {
    id: 'exp_arsikom_kisi5',
    subject_slug: 'arsikom',
    chapter_order: 5,
    topic_title: 'Kisi-Kisi 5: Simulasi Cara Kerja Register dalam CPU, Siklus Instruksi, & CPU Simulator',
    content_markdown: `# Kisi-Kisi 5: Simulasi Cara Kerja Register dalam CPU & Siklus Instruksi

![Struktur Siklus Instruksi CPU: Fetch, Decode, Execute, Store](/materials/arsikom/instruction-cycle-diagram.png)

## 1. Hakikat Register & Analogi Kotak Surat (*Mailbox*)

Register adalah unit memori internal berukuran sangat kecil namun memiliki kecepatan akses tertinggi di dalam sebuah komputer digital. Register terletak langsung di dalam chip silikon CPU (bersebelahan dengan ALU dan Control Unit), sehingga tidak mengalami hambatan bus eksternal seperti RAM.

![Analogi Memori Kotak Surat](/materials/arsikom/mailbox-analogy.png)

Dalam slide *P6 - Arsikom Wahyono & Nugraha*, memori dan register diibaratkan seperti **Kotak Surat (*Mailbox*)**:
- Alamat nomor kotak surat (misal Kotak No. 100) bersifat tetap dan tidak pernah berubah (*fixed address*).
- Namun surat atau isi dokumen di dalam kotak tersebut dapat diganti sewaktu-waktu: data lama dapat ditimpa (*overwrite*) oleh data hasil perhitungan baru.

---

## 2. Klasifikasi Taksonomi Register CPU

Berdasarkan fungsi dan arsitektur x86 / mikroprosesor:

### A. Register Komunikasi Eksternal Memori (Bus Interface)
1. **Program Counter (PC)**: Register yang memegang **alamat memori dari instruksi berikutnya** yang akan diambil (*fetch*). Nilai PC bertambah otomatis (+1 atau +panjang instruksi) setiap kali sebuah instruksi diambil.
2. **Memory Address Register (MAR)**: Menampung **alamat memori fisik** yang sedang diakses oleh CPU (baik untuk membaca instruksi/data maupun untuk menulis data). Terhubung langsung ke *Address Bus*.
3. **Memory Data Register (MDR)** / *Memory Buffer Register (MBR)*: Menampung **data atau instruksi aktual** yang baru saja dibaca dari RAM atau data yang siap dituliskan ke RAM. Terhubung langsung ke *Data Bus*.
4. **Instruction Register (IR)**: Menampung kode biner instruksi yang baru saja di-*fetch* dari memori, tempat di mana Control Unit akan membongkar opcode dan operan (*decoding*).

### B. Segment Register (Pembentuk Alamat 16/32-bit)
- **CS (Code Segment)**: Menunjuk ke segmen memori yang memuat kode program yang sedang dieksekusi.
- **DS (Data Segment)**: Menunjuk ke segmen memori tempat variabel dan konstanta program disimpan.
- **SS (Stack Segment)**: Menunjuk ke segmen memori penampung operasi *stack* (PUSH, POP, Call subrutin).
- **ES (Extra Segment)**: Segmen memori cadangan, sering digunakan untuk manipulasi string bersama register CX.

### C. Pointer & Index Register
- **IP (Instruction Pointer)**: Pasangan segmen CS untuk menunjuk offset instruksi berikutnya \`CS:IP\`
- **SP (Stack Pointer)**: Menunjuk ke offset byte paling atas (*top of stack*) pada Stack Segment \`SS:SP\`
- **BP (Base Pointer)**: Digunakan untuk membaca parameter dan variabel lokal pada stack frame fungsi.
- **SI (Source Index)**: Menunjuk ke alamat indeks data asal dalam operasi array/string \`DS:SI\`
- **DI (Destination Index)**: Menunjuk ke alamat indeks tujuan dalam operasi array/string \`ES:DI\`

### D. Status / Flag Register (Tanda Kondisi Logika CPU)
Register khusus yang terdiri dari bit-bit status individual:
- **C (Carry Flag)**: Bernilai 1 jika operasi aritmatika menghasilkan simpanan (*carry-out*) atau pinjaman (*borrow*).
- **Z (Zero Flag)**: Bernilai 1 jika hasil operasi bernilai **tepat nol** (sangat penting untuk instruksi perulangan dan conditional jump \`JZ\` / \`JNZ\`).
- **S (Sign Flag)**: Bernilai 1 jika bit tertinggi hasil operasi bernilai 1 (menandakan bilangan negatif bertanda).
- **O (Overflow Flag)**: Bernilai 1 jika hasil operasi aritmatika melebihi batas kapasitas bit register yang ditentukan.
- **P (Parity Flag)**: Bernilai 1 jika jumlah bit 1 pada byte hasil adalah genap (*even parity*).
- **I (Interrupt Flag)**: 1 berarti CPU menerima interupsi dari luar (*enable*), 0 berarti interupsi diabaikan (*disable*).

---

## 3. Empat Tahap Siklus Instruksi (Fetch - Decode - Execute - Store)

Sebagaimana dipaparkan dalam video YouTube perkuliahan (*What Is Instruction Cycle? Learn Computer Science*):

![Siklus 4 Tahap CPU](/materials/arsikom/instruction-cycle-steps.png)

1. **Tahap 1: Fetch (Pengambilan)**
   - Nilai alamat pada **Program Counter (PC)** disalin ke **Memory Address Register (MAR)** via internal bus.
   - Control Unit mengirimkan sinyal kendali baca (*Memory Read Signal*) melalui Control Bus.
   - Memori RAM meletakkan instruksi pada Data Bus, lalu disalin ke **Memory Data Register (MDR)**.
   - Instruksi dipindahkan dari MDR ke **Instruction Register (IR)**.
   - Nilai PC diperbarui secara otomatis: \`PC = PC + 1\` (atau +4 byte) agar siap menunjuk instruksi selanjutnya.

2. **Tahap 2: Decode (Penerjemahan)**
   - Control Unit (CU) mengurai kode biner pada IR menjadi dua komponen:
     - **OPCODE (Operation Code)**: Menentukan jenis perintah yang akan dijalankan (misal: \`ADD\`, \`SUB\`, \`MOV\`, \`LOAD\`, \`STORE\`, \`HLT\`).
     - **OPERAND / Addressing Mode**: Menentukan lokasi data (apakah konstanta langsung, register tujuan, atau alamat memori).
   - Control Unit membangkitkan micro-operations dan sinyal kontrol untuk mengaktifkan sirkuit ALU atau register terkait.

3. **Tahap 3: Execute (Eksekusi)**
   - Komponen fungsional (misal ALU) melakukan komputasi aritmatika atau transfer data antar register sesuai arahan sinyal CU.
   - Contoh: ALU menjumlahkan isi Register \`R1\` dan \`R2\`.

4. **Tahap 4: Store / Write-back (Penyimpanan)**
   - Hasil perhitungan dari output register ALU disimpan kembali ke register tujuan (*destination register*) atau dituliskan kembali ke RAM via MAR & MDR.

---

## 4. Simulasi Eksekusi Mesin Konseptual & CPU Simulator

![Antarmuka CPU Simulator YASMIN](/materials/arsikom/cpu-simulator-gui.png)

Dalam perkuliahan Arsitektur Komputer (*P6 - Arsikom Rahmawan Bagus Trianto*), mahasiswa mempelajari software **CPU Simulator (CPU-OS Simulator v7.5.50 oleh Besim Mustafa, Edge Hill University)**:

![Simulasi Penjumlahan 5 + 8 pada CPU Simulator](/materials/arsikom/cpu-simulator-tambah.png)

### Skenario Program "Tambah" (Menghitung 5 + 8 pada Base Address 100)
Tujuan: Menghitung \`5 + 8\` menggunakan register \`R01\` dan \`R02\` pada memori awal \`0100\`.

1. **Daftar Kode Instruksi Assembly**:
   \`\`\`assembly
   PAdd   LAdd   Instruction      Penjelasan Operasional
   0100   0000   MOV #5, R01      ; Masukkan nilai konstan 5 ke Register R01
   0106   0006   MOV #8, R02      ; Masukkan nilai konstan 8 ke Register R02
   0112   0012   ADD R01, R02     ; Jumlahkan isi R01 ke R02 (R02 = 8 + 5 = 13)
   0117   0017   HLT              ; Hentikan eksekusi CPU (Halt)
   \`\`\`

2. **Tracing Perubahan Register Saat Step-by-Step**:
   - **Kondisi Awal**: \`PC = 0100\`, \`R01 = 0\`, \`R02 = 0\`, \`IR = null\`.
   - **Langkah 1**:
     - Fetch \`0100\` ➔ MAR = 0100, IR = \`MOV #5, R01\`. PC berubah menjadi \`0106\`.
     - Execute ➔ Nilai 5 diisikan ke **R01**. Sekarang \`R01 = 5\`.
   - **Langkah 2**:
     - Fetch \`0106\` ➔ MAR = 0106, IR = \`MOV #8, R02\`. PC berubah menjadi \`0112\`.
     - Execute ➔ Nilai 8 diisikan ke **R02**. Sekarang \`R02 = 8\`.
   - **Langkah 3**:
     - Fetch \`0112\` ➔ MAR = 0112, IR = \`ADD R01, R02\`. PC berubah menjadi \`0117\`.
     - Execute ➔ ALU mengambil isi \`R01\` (5) dan \`R02\` (8), melakukan penjumlahan \`5 + 8 = 13\`, dan menyimpan hasilnya ke register kedua (\`R02\`). Sekarang **R02 bernilai 13** (desimal) atau \`D\` (heksadesimal).
   - **Langkah 4**:
     - Fetch \`0117\` ➔ IR = \`HLT\`. CPU menghentikan siklus clock dan program selesai.`
  }
];

module.exports = arsikomExplanations;
