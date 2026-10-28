const matdasExplanations = [
  {
    id: 'exp_matdas_bab1',
    subject_slug: 'matdas',
    chapter_order: 1,
    topic_title: 'Bab 1: Sistem Bilangan Real, Hierarki Himpunan, Sifat Operasi, & Urutan Operasi (PEMDAS)',
    content_markdown: `# Bab 1: Sistem Bilangan Real, Hierarki Himpunan, & Operasi Bilangan

## 1. Hierarki & Klasifikasi Himpunan Bilangan Real

Dalam matematika dasar komputasi, bilangan real (nyata) membentuk fondasi seluruh representasi data, pemrosesan algoritma, dan komputasi numerik.

### Hubungan Ketercakupan Himpunan:
\`\`\`text
  ℕ (Bilangan Asli) ⊂ Bilangan Cacah ⊂ ℤ (Bilangan Bulat) ⊂ ℚ (Bilangan Rasional) ⊂ ℝ (Bilangan Real)
\`\`\`

| Simbol | Nama Himpunan | Definisi & Karakteristik | Contoh Anggota |
| :---: | :--- | :--- | :--- |
| **ℕ** | **Bilangan Asli** (*Natural Numbers*) | Bilangan bulat positif yang digunakan untuk mencacah objek mulai dari angka satu. | \`{1, 2, 3, 4, 5, ...}\` |
| **Cacah** | **Bilangan Cacah** (*Whole Numbers*) | Gabungan bilangan asli dengan angka nol. | \`{0, 1, 2, 3, 4, ...}\` |
| **ℤ** | **Bilangan Bulat** (*Integers*) | Himpunan yang mencakup bilangan bulat negatif, nol, dan bilangan bulat positif. Berasal dari kata Jerman *Zahlen*. | \`{..., -3, -2, -1, 0, 1, 2, 3, ...}\` |
| **ℚ** | **Bilangan Rasional** (*Rational Numbers*) | Bilangan yang dapat dinyatakan dalam bentuk pecahan \`p/q\`, di mana \`p, q ∈ ℤ\` dan \`q ≠ 0\`. Desimalnya berhenti atau berulang teratur. | \`1/2 = 0.5\`, \`3/4 = 0.75\`, \`1/3 = 0.333...\`, \`-5 = -5/1\` |
| **Irasional** | **Bilangan Irasional** | Bilangan yang **tidak dapat** ditulis sebagai pecahan dua bilangan bulat. Bentuk desimalnya tak berhingga dan tidak berpola (tidak berulang). | \`√2 ≈ 1.4142...\`, \`√5\`, \`π ≈ 3.14159...\`, \`e ≈ 2.71828...\` |
| **ℝ** | **Bilangan Real** (*Real Numbers*) | Gabungan seluruh bilangan rasional dan irasional yang dapat direpresentasikan pada garis bilangan kontinu. | Seluruh titik pada garis bilangan dari \`-∞\` hingga \`+∞\` |

---

## 2. Mengubah Desimal Berulang Menjadi Pecahan Rasional

Untuk membuktikan bahwa desimal berulang adalah bilangan rasional (\`ℚ\`), kita menggunakan metode aljabar eliminasi:

### Contoh: Ubah \`0.7777...\` menjadi pecahan \`p/q\`
1. Misalkan: \`x = 0.7777...\`
2. Karena periode perulangan adalah 1 digit (angka 7), kalikan kedua ruas dengan 10:
   \`\`\`text
   10x = 7.7777...
     x = 0.7777...
   --------------- - (Kurangkan kedua persamaan)
    9x = 7
     x = 7/9
   \`\`\`
➔ Jadi, \`0.7777... = 7/9\` (terbukti rasional).

### Contoh 2: Ubah \`0.252525...\` menjadi pecahan \`p/q\`
1. Misalkan: \`x = 0.252525...\`
2. Karena periode perulangan adalah 2 digit (angka 25), kalikan dengan 100:
   \`\`\`text
   100x = 25.252525...
      x =  0.252525...
   ------------------- -
    99x = 25
      x = 25/99
   \`\`\`

---

## 3. Sifat-Sifat Operasi Aritmatika Bilangan Real

Untuk setiap bilangan real \`a, b, c ∈ ℝ\`, berlaku aksioma dasar:

| Nama Sifat | Operasi Penjumlahan | Operasi Perkalian | Keterangan / Syarat |
| :--- | :--- | :--- | :--- |
| **Komutatif** | \`a + b = b + a\` | \`a × b = b × a\` | Urutan bilangan tidak mempengaruhi hasil. |
| **Asosiatif** | \`(a + b) + c = a + (b + c)\` | \`(a × b) × c = a × (b × c)\` | Pengelompokan operasi tidak mengubah hasil. |
| **Distributif** | \`a × (b + c) = (a × b) + (a × c)\` | \`(b + c) × a = (b × a) + (c × a)\` | Perkalian mendistribusikan penjumlahan. |
| **Identitas** | \`a + 0 = a\` (Elemen netral: 0) | \`a × 1 = a\` (Elemen netral: 1) | Operasi dengan identitas menghasilkan bilangan itu sendiri. |
| **Invers** | \`a + (-a) = 0\` (Invers aditif) | \`a × (1/a) = 1\` (Invers multiplikatif) | Untuk perkalian, syarat mutlak: \`a ≠ 0\`. |

---

## 4. Urutan Operasi Hitung (Hierarki PEMDAS / BODMAS)

Banyak kesalahan perhitungan kalkulasi komputasi berakar dari ketidakpatuhan terhadap hierarki operator:
1. **P** - *Parentheses* (Tanda Kurung terdalam terlebih dahulu \`( )\` / \`[ ]\`)
2. **E** - *Exponents & Roots* (Pangkat dan Bentuk Akar)
3. **MD** - *Multiplication & Division* (Perkalian dan Pembagian sederajat, dikerjakan berurutan dari **kiri ke kanan**)
4. **AS** - *Addition & Subtraction* (Penjumlahan dan Pengurangan sederajat, dikerjakan berurutan dari **kiri ke kanan**)

### Contoh Soal:
Hitung: \`8 + 2 × (3² - 1) ÷ 4\`
1. Hitung tanda kurung: \`(3² - 1) = (9 - 1) = 8\`
2. Evaluasi perkalian & pembagian dari kiri: \`2 × 8 ÷ 4 = 16 ÷ 4 = 4\`
3. Evaluasi penjumlahan: \`8 + 4 = 12\`.

---

## 5. Notasi Interval & Konsep Nilai Mutlak

### Notasi Interval pada Garis Bilangan Real:
- **Interval Terbuka \`(a, b)\`**: \`{x ∈ ℝ | a < x < b}\` (titik \`a\` dan \`b\` tidak termasuk / bulatan kosong).
- **Interval Tertutup \`[a, b]\`**: \`{x ∈ ℝ | a ≤ x ≤ b}\` (titik \`a\` dan \`b\` termasuk / bulatan penuh).
- **Interval Setengah Terbuka \`[a, b)\`**: \`{x ∈ ℝ | a ≤ x < b}\`.
- **Interval Tak Terhingga \`(-∞, b]\`**: \`{x ∈ ℝ | x ≤ b}\`.

### Definisi Nilai Mutlak (*Absolute Value*):
Secara geometris, nilai mutlak menyatakan jarak suatu bilangan dari titik 0 pada garis bilangan (selalu bernilai non-negatif):
\`\`\`text
|x| =  x,  jika x ≥ 0
|x| = -x,  jika x < 0
\`\`\`
*Sifat Utama Pertidaksamaan Nilai Mutlak (untuk a > 0):*
- \`|x| ≤ a  ⟺  -a ≤ x ≤ a\`
- \`|x| ≥ a  ⟺  x ≤ -a  atau  x ≥ a\``
  },
  {
    id: 'exp_matdas_bab2',
    subject_slug: 'matdas',
    chapter_order: 2,
    topic_title: 'Bab 2: Eksponen, Sifat-Sifat Pangkat Rasional, & Operasi Merasionalkan Bentuk Akar',
    content_markdown: `# Bab 2: Eksponen & Bentuk Akar

## 1. Definisi Pangkat & Keutamaan Tanda Kurung

Untuk bilangan real \`a\` (basis) dan bilangan bulat positif \`n\` (eksponen/pangkat):
\`\`\`text
aⁿ = a × a × a × ... × a  (sebanyak n faktor)
\`\`\`

> **PERINGATAN UJIAN (Pentingnya Kurung pada Basis Negatif):**
> - \`(-3)² = (-3) × (-3) = 9\`  ➔ Tanda minus berada **di dalam** kurung dan ikut dipangkatkan.
> - \`-3² = -(3 × 3) = -9\`       ➔ Tanda minus berada **di luar** pangkat; yang dipangkatkan hanya angka 3.
> - Basis negatif berpangkat **genap** menghasilkan nilai **positif**.
> - Basis negatif berpangkat **ganjil** menghasilkan nilai **negatif** (misal: \`(-2)³ = -8\`).

---

## 2. Tujuh Sifat Eksponen Fundamental

| No | Sifat Aljabar | Rumus Matematis | Syarat | Contoh Perhitungan |
| :---: | :--- | :--- | :--- | :--- |
| **1** | Perkalian Basis Sama | \`aᵐ × aⁿ = aᵐ⁺ⁿ\` | - | \`2³ × 2⁴ = 2³⁺⁴ = 2⁷ = 128\` |
| **2** | Pembagian Basis Sama | \`aᵐ ÷ aⁿ = aᵐ⁻ⁿ\` | \`a ≠ 0\` | \`5⁶ ÷ 5² = 5⁶⁻² = 5⁴ = 625\` |
| **3** | Pangkat dari Pangkat | \`(aᵐ)ⁿ = aᵐˣⁿ\` | - | \`(2³)² = 2³ˣ² = 2⁶ = 64\` |
| **4** | Pangkat dari Perkalian | \`(ab)ⁿ = aⁿ × bⁿ\` | - | \`(2x)³ = 2³ × x³ = 8x³\` |
| **5** | Pangkat dari Pembagian | \`(a/b)ⁿ = aⁿ / bⁿ\` | \`b ≠ 0\` | \`(2/3)³ = 2³ / 3³ = 8/27\` |
| **6** | Pangkat Nol | \`a⁰ = 1\` | \`a ≠ 0\` | \`7⁰ = 1\`, \`(-15)⁰ = 1\` (Catatan: \`0⁰\` tak tentu) |
| **7** | Pangkat Negatif | \`a⁻ⁿ = 1 / aⁿ\` | \`a ≠ 0\` | \`2⁻³ = 1 / 2³ = 1/8\`, \`(3/4)⁻² = (4/3)² = 16/9\` |

---

## 3. Pangkat Pecahan (Rasional) & Konversi ke Bentuk Akar

Pangkat pecahan merupakan jembatan antara operasi pemangkatan dan penarikan akar:
\`\`\`text
a^(m/n) = ⁿ√(aᵐ) = (ⁿ√a)ᵐ   (dengan syarat a ≥ 0 jika n genap)
\`\`\`
- Penyebut pecahan (\`n\`) menjadi **indeks akar**.
- Pembilang pecahan (\`m\`) menjadi **pangkat bilangan di dalam akar**.

### Contoh Konversi:
- \`8^(2/3) = (∛8)² = (2)² = 4\`
- \`16^(3/4) = (⁴√16)³ = (2)³ = 8\`
- \`x^(1/2) = √x\`

---

## 4. Operasi Aljabar pada Bentuk Akar

Dua bentuk akar hanya dapat dijumlahkan atau dikurangkan jika memiliki **indeks akar dan radikan (bilangan di bawah tanda akar) yang sama (akar sejenis)**:
\`\`\`text
p√a + q√a = (p + q)√a
p√a - q√a = (p - q)√a
\`\`\`

### Contoh Penyederhanaan:
Sederhanakan: \`√75 - √12 + √27\`
1. Uraikan setiap bilangan menjadi perkalian bilangan kuadrat sempurna:
   - \`√75 = √(25 × 3) = 5√3\`
   - \`√12 = √(4 × 3) = 2√3\`
   - \`√27 = √(9 × 3) = 3√3\`
2. Gabungkan akar-akar sejenis:
   \`5√3 - 2√3 + 3√3 = (5 - 2 + 3)√3 = 6√3\`.

---

## 5. Teknik Merasionalkan Penyebut Pecahan Bentuk Akar

Penyebut pecahan tidak boleh dibiarkan memuat tanda akar (irasional):

### Kasus A: Penyebut Tunggal Bentuk \`a / √b\`
Kalikan pembilang dan penyebut dengan \`√b / √b\`:
\`\`\`text
  6 / √3 = (6 / √3) × (√3 / √3) = 6√3 / 3 = 2√3
\`\`\`

### Kasus B: Penyebut Dua Suku Bentuk \`c / (√a + √b)\` atau \`c / (a - √b)\`
Kalikan dengan **bentuk sekawan (konjugat)** memanfaatkan identitas selisih kuadrat \`(u + v)(u - v) = u² - v²\`:

**Contoh: Rasionalkan \`4 / (3 - √5)\`**
1. Bentuk sekawan dari \`(3 - √5)\` adalah \`(3 + √5)\`.
2. Kalikan pecahan:
   \`\`\`text
   4 / (3 - √5) × (3 + √5) / (3 + √5) = 4(3 + √5) / (3² - (√5)²)
                                      = 4(3 + √5) / (9 - 5)
                                      = 4(3 + √5) / 4
                                      = 3 + √5
   \`\`\``
  },
  {
    id: 'exp_matdas_bentuk_akar',
    subject_slug: 'matdas',
    chapter_order: 3,
    topic_title: 'Bab 3: Bentuk Akar — Definisi, Akar Pangkat n, Sifat, Operasi, dan Merasionalkan Penyebut',
    content_markdown: `# Bab 3: Bentuk Akar — Definisi, Akar Pangkat n, Sifat, Operasi, dan Merasionalkan Penyebut

> **Sumber materi:** PDF Bentuk Akar 2026 TI — Program Studi Teknik Informatika.
>
> **Posisi materi:** pendalaman Bab 2. Bab 2 membahas eksponen dan dasar bentuk akar; bab ini memperluas definisi akar pangkat n, nilai mutlak, operasi, dan merasionalkan penyebut.

## 1. Definisi Akar Kuadrat

Akar kuadrat dari bilangan nonnegatif **a** adalah bilangan nonnegatif **b** yang memenuhi:

\`\`\`text
√a = b  ⇔  b² = a  dan  b ≥ 0
\`\`\`

Syarat **a ≥ 0** diperlukan agar akar kuadrat terdefinisi pada bilangan real.

Contoh:

- \`√25 = 5\` karena \`5² = 25\` dan \`5 ≥ 0\`.
- \`√0 = 0\` karena \`0² = 0\`.
- \`√49 = 7\` karena \`7² = 49\`.
- \`√(-9)\` tidak bernilai real karena tidak ada bilangan real yang kuadratnya \`-9\`.

**Penting:** notasi \`√a\` menyatakan **akar utama nonnegatif**. Jadi \`√25 = 5\`, bukan \`±5\`. Persamaan \`x² = 25\` memang memiliki dua solusi, yaitu \`x = 5\` atau \`x = -5\`, tetapi notasi \`√25\` hanya mengambil nilai nonnegatif.

---

## 2. Akar Pangkat n

Akar pangkat n dari **a** adalah bilangan **b** yang memenuhi:

\`\`\`text
ⁿ√a = b  ⇔  bⁿ = a,   n bilangan bulat dan n ≥ 2
\`\`\`

Aturan tanda dan domain:

| Jenis akar | Syarat | Contoh |
| :--- | :--- | :--- |
| n genap | \`a ≥ 0\` dan akar utama \`b ≥ 0\` | \`⁴√16 = 2\` karena \`2⁴ = 16\` |
| n ganjil | \`a\` dan \`b\` boleh negatif | \`∛(-8) = -2\` karena \`(-2)³ = -8\` |

Mengapa berbeda?

- Pada akar genap, hasil negatif akan menjadi positif setelah dipangkatkan genap, sehingga akar utama dipilih nonnegatif.
- Pada akar ganjil, tanda negatif dipertahankan karena pangkat ganjil dari bilangan negatif tetap negatif.

Contoh yang sering keliru:

- \`⁴√16 = 2\`, bukan \`-2\`, karena akar utama nonnegatif.
- \`∛(-27) = -3\`, karena \`(-3)³ = -27\`.
- \`⁴√(-16)\` tidak bernilai real, karena akar genap dari bilangan negatif.

---

## 3. Pangkat Rasional dan Hubungannya dengan Akar

Pangkat pecahan didefinisikan sebagai:

\`\`\`text
a^(m/n) = (ⁿ√a)ᵐ = ⁿ√(aᵐ)
\`\`\`

Dengan:

- **n** = penyebut pecahan = indeks akar;
- **m** = pembilang pecahan = pangkat;
- \`n ≥ 2\`;
- pecahan \`m/n\` sebaiknya sudah disederhanakan;
- jika **n genap**, maka \`a ≥ 0\`;
- jika **m negatif**, maka \`a ≠ 0\`.

Contoh:

\`\`\`text
27^(2/3) = (∛27)² = 3² = 9
16^(3/4) = (⁴√16)³ = 2³ = 8
x^(1/2) = √x
\`\`\`

**Urutan pengerjaan:** kerjakan akar terlebih dahulu, lalu pangkatkan. Pada \`27^(2/3)\`, hitung \`∛27 = 3\`, kemudian \`3² = 9\`.

---

## 4. Sifat-Sifat Penting Bentuk Akar

### 4.1 Sifat Perkalian

Untuk \`a ≥ 0\` dan \`b ≥ 0\`:

\`\`\`text
√(a × b) = √a × √b
\`\`\`

Contoh:

\`\`\`text
√(9 × 4) = √9 × √4 = 3 × 2 = 6
\`\`\`

Sifat ini dipakai untuk menyederhanakan akar dengan memecah radikan menjadi faktor kuadrat sempurna.

### 4.2 Sifat Pembagian

Untuk \`a ≥ 0\` dan \`b > 0\`:

\`\`\`text
√(a/b) = √a / √b
\`\`\`

Contoh:

\`\`\`text
√(36/4) = √36 / √4 = 6/2 = 3
\`\`\`

### 4.3 Akar Kuadrat dari Kuadrat: Nilai Mutlak

Untuk setiap bilangan real \`x\`:

\`\`\`text
√(x²) = |x|
\`\`\`

Bukan selalu \`x\`, karena akar kuadrat utama selalu nonnegatif.

Contoh:

\`\`\`text
√((-7)²) = √49 = |-7| = 7
\`\`\`

Jika \`x = -7\`, maka \`x\` bernilai negatif, tetapi \`√(x²)\` tetap \`7\`. Karena itu, hasilnya adalah \`|x|\`.

### 4.4 Sifat yang TIDAK Berlaku

Kesalahan yang sering terjadi:

\`\`\`text
√(a + b) ≠ √a + √b
√(a - b) ≠ √a - √b
\`\`\`

Contoh penyangkal:

\`\`\`text
√(9 + 16) = √25 = 5
√9 + √16 = 3 + 4 = 7
\`\`\`

Jadi, \`5 ≠ 7\`. Sifat distributif tidak berlaku untuk penjumlahan di dalam akar.

---

## 5. Menyederhanakan Bentuk Akar

Langkah umum:

1. Cari faktor terbesar dari radikan yang merupakan kuadrat sempurna.
2. Pecah akar menggunakan sifat perkalian.
3. Hitung akar dari faktor kuadrat sempurna.
4. Tulis hasil dalam bentuk paling sederhana.

Contoh: sederhanakan \`√72\`.

\`\`\`text
√72 = √(36 × 2)
    = √36 × √2
    = 6√2
\`\`\`

Faktor kuadrat sempurna yang dipilih adalah \`36\`, karena \`36 = 6²\` dan \`36 × 2 = 72\`.

Contoh lain:

\`\`\`text
√50 = √(25 × 2) = 5√2
√18 = √(9 × 2) = 3√2
√48 = √(16 × 3) = 4√3
√27 = √(9 × 3) = 3√3
√75 = √(25 × 3) = 5√3
\`\`\`

**Tips:** pilih faktor kuadrat sempurna terbesar agar penyederhanaan selesai dalam satu langkah.

---

## 6. Penjumlahan dan Pengurangan Bentuk Akar

Hanya **akar sejenis** yang boleh dijumlahkan atau dikurangkan. Akar sejenis memiliki indeks dan radikan yang sama.

\`\`\`text
p√a + q√a = (p + q)√a
p√a - q√a = (p - q)√a
\`\`\`

Contoh 1:

\`\`\`text
3√50 - 2√8 + √18
= 3(5√2) - 2(2√2) + 3√2
= 15√2 - 4√2 + 3√2
= (15 - 4 + 3)√2
= 14√2
\`\`\`

Contoh 2:

\`\`\`text
3√48 - 2√27 + √75
= 3(4√3) - 2(3√3) + 5√3
= 12√3 - 6√3 + 5√3
= (12 - 6 + 5)√3
= 11√3
\`\`\`

**Langkah wajib:** sederhanakan setiap akar terlebih dahulu, baru gabungkan koefisien akar sejenis. Tidak boleh menjumlahkan \`√2\` dengan \`√3\` karena radikannya berbeda.

---

## 7. Perkalian dan Pembagian Bentuk Akar

### 7.1 Perkalian

Gunakan sifat \`√a × √b = √(ab)\`, lalu sederhanakan.

Contoh:

\`\`\`text
2√3 × 4√6
= (2 × 4) × (√3 × √6)
= 8√18
= 8 × 3√2
= 24√2
\`\`\`

Koefisien dikalikan dengan koefisien, radikan dikalikan dengan radikan.

### 7.2 Pembagian

Gunakan sifat \`√a / √b = √(a/b)\`, dengan \`b > 0\`.

Contoh:

\`\`\`text
6√8 / (2√2)
= (6/2) × √(8/2)
= 3 × √4
= 3 × 2
= 6
\`\`\`

---

## 8. Merasionalkan Penyebut

Penyebut pecahan tidak boleh dibiarkan dalam bentuk akar. Proses menghilangkan akar pada penyebut disebut **merasionalkan penyebut**.

### 8.1 Penyebut Tunggal

Untuk bentuk \`a / √b\`, kalikan pembilang dan penyebut dengan \`√b / √b\`.

Contoh:

\`\`\`text
3/√5
= (3/√5) × (√5/√5)
= 3√5 / 5
\`\`\`

Nilai pecahan tidak berubah karena \`√5/√5 = 1\`.

### 8.2 Penyebut Dua Suku: Bentuk Sekawan

Untuk penyebut \`(a + √b)\`, gunakan sekawan \`(a - √b)\`. Untuk penyebut \`(a - √b)\`, gunakan sekawan \`(a + √b)\`.

Hasil perkalian sekawan memanfaatkan selisih kuadrat:

\`\`\`text
(a + √b)(a - √b) = a² - b
\`\`\`

Contoh: rasionalkan \`2 / (2 + √3)\`.

\`\`\`text
2/(2 + √3)
= 2/(2 + √3) × (2 - √3)/(2 - √3)
= 2(2 - √3) / (2² - (√3)²)
= 2(2 - √3) / (4 - 3)
= 2(2 - √3) / 1
= 4 - 2√3
\`\`\`

**Syarat:** penyebut awal tidak boleh nol.

---

## 9. Kesalahan Umum yang Harus Dihindari

1. Menulis \`√(a + b) = √a + √b\`. Sifat ini tidak berlaku.
2. Menulis \`√(x²) = x\` untuk semua \`x\`. Yang benar adalah \`|x|\`.
3. Menganggap \`√25 = ±5\`. Notasi akar utama hanya memberi nilai nonnegatif.
4. Menghitung \`⁴√16 = -2\`. Akar genap utama harus nonnegatif.
5. Menjumlahkan \`√2 + √3\` menjadi \`√5\`. Akar berbeda radikan tidak dapat digabung.
6. Lupa mengalikan pembilang saat merasionalkan penyebut.
7. Tidak menyederhanakan radikan terlebih dahulu sebelum menjumlahkan.
8. Mengabaikan syarat domain pada akar genap dan pangkat rasional.

---

## 10. Ringkasan Cepat

| Konsep | Rumus / Aturan |
| :--- | :--- |
| Definisi akar kuadrat | \`√a = b ⇔ b² = a\` dan \`b ≥ 0\` |
| Akar pangkat n | \`ⁿ√a = b ⇔ bⁿ = a\` |
| Akar genap | \`a ≥ 0\`, akar utama nonnegatif |
| Akar ganjil | boleh negatif |
| Pangkat rasional | \`a^(m/n) = (ⁿ√a)ᵐ\` |
| Perkalian akar | \`√a × √b = √(ab)\` |
| Pembagian akar | \`√a / √b = √(a/b)\` |
| Akar kuadrat dari kuadrat | \`√(x²) = |x|\` |
| Akar sejenis | \`p√a ± q√a = (p ± q)√a\` |
| Sekawan | \`(a + √b)(a - √b) = a² - b\` |

> **Kunci ujian:** sederhanakan akar terlebih dahulu, gabungkan hanya akar sejenis, dan gunakan sekawan saat penyebut berbentuk dua suku. Periksa kembali tanda dan syarat domain sebelum menuliskan hasil akhir.`
  },
  {
    id: 'exp_matdas_bab3',
    subject_slug: 'matdas',
    chapter_order: 4,
    topic_title: 'Bab 4: Ekspresi Aljabar: Komponen, Operasi Suku Sejenis, Sifat Distributif, & Pemfaktoran Aljabar',
    content_markdown: `# Bab 4: Ekspresi Aljabar & Operasi Polinomial

## 1. Anatomi & Komponen Ekspresi Aljabar

Ekspresi aljabar adalah kombinasi matematis yang memuat bilangan, variabel (huruf), dan simbol operasi hitung, tanpa menyertakan tanda relasi sama dengan (\`=\`).

Contoh ekspresi: \`3x² - 5x + 7\`
- **Variabel (Peubah)**: Lambang (misal \`x\`) yang nilainya dapat berubah-ubah.
- **Koefisien**: Faktor numerik yang melekat dan mengalikan suatu variabel (koefisien \`x²\` adalah \`3\`; koefisien \`x\` adalah \`-5\`).
- **Konstanta**: Suku berupa bilangan tunggal yang tidak memiliki variabel (yaitu \`7\`).
- **Suku (*Term*)**: Bagian-bagian ekspresi aljabar yang dipisahkan oleh tanda tambah (\`+\`) atau kurang (\`-\`). Pada contoh di atas terdapat 3 suku (trinomial): \`3x²\`, \`-5x\`, dan \`7\`.

---

## 2. Konsep Suku Sejenis (*Like Terms*)

Dua suku dikatakan sejenis jika dan hanya jika memiliki **variabel yang sama persis DAN pangkat yang sama persis**:

| Pasangan Suku | Status | Alasan Penjelasan |
| :--- | :---: | :--- |
| \`3x\` dan \`-8x\` | **Sejenis** | Variabelnya sama-sama \`x\` berpangkat 1. |
| \`5x²\` dan \`2x²\` | **Sejenis** | Variabelnya sama-sama \`x\` berpangkat 2. |
| \`4xy\` dan \`-xy\` | **Sejenis** | Kombinasi variabelnya sama-sama \`xy\`. |
| \`3x\` dan \`3x²\` | **TIDAK Sejenis** | Pangkat variabel berbeda (\`1\` vs \`2\`). |
| \`5a\` dan \`5b\` | **TIDAK Sejenis** | Variabel berbeda (\`a\` vs \`b\`). |
| \`2xy\` dan \`2x\` | **TIDAK Sejenis** | Suku pertama memuat variabel \`y\`, suku kedua tidak. |

> **Aturan Operasi:**
> Hanya suku-suku yang **sejenis** yang dapat dijumlahkan atau dikurangkan koefisiennya!

### Contoh Penyederhanaan Suku Sejenis:
Sederhanakan: \`(4x² - 3x + 5) + (2x² + 7x - 9)\`
1. Kumpulkan suku-suku sejenis:
   \`(4x² + 2x²) + (-3x + 7x) + (5 - 9)\`
2. Jumlahkan koefisiennya:
   \`= 6x² + 4x - 4\`.

---

## 3. Sifat Distributif & Perkalian Dua Binomial (Metode FOIL)

Ketika mengalikan dua bentuk binomial, setiap suku pada kurung pertama harus dikalikan ke setiap suku pada kurung kedua:
\`\`\`text
(a + b)(c + d) = ac + ad + bc + bd
\`\`\`

**Mnemonik FOIL:**
- **F** - *First* (Suku Pertama dikalikan: \`a × c\`)
- **O** - *Outer* (Suku Luar dikalikan: \`a × d\`)
- **I** - *Inner* (Suku Dalam dikalikan: \`b × c\`)
- **L** - *Last* (Suku Terakhir dikalikan: \`b × d\`)

### Contoh Perhitungan:
Kalikan: \`(2x - 3)(x + 5)\`
1. First: \`2x × x = 2x²\`
2. Outer: \`2x × 5 = 10x\`
3. Inner: \`-3 × x = -3x\`
4. Last: \`-3 × 5 = -15\`
5. Gabungkan suku tengah: \`2x² + (10x - 3x) - 15 = 2x² + 7x - 15\`.

---

## 4. Teknik Pemfaktoran Aljabar Dasar

Memfaktorkan adalah membalik proses perkalian menjadi bentuk faktor-faktor pengali:

### A. Menarik Faktor Persekutuan Terbesar (FPB / GCF)
\`\`\`text
6x³ + 9x² = 3x²(2x + 3)
12ab² - 8a²b = 4ab(3b - 2a)
\`\`\`

### B. Bentuk Khusus Selisih Dua Kuadrat (*Difference of Two Squares*)
Bentuk kuadrat murni tanpa suku tengah dapat difaktorkan seketika menggunakan rumus:
\`\`\`text
a² - b² = (a - b)(a + b)
\`\`\`
- \`x² - 16 = x² - 4² = (x - 4)(x + 4)\`
- \`4x² - 25 = (2x)² - 5² = (2x - 5)(2x + 5)\`
- \`9x² - 49y² = (3x - 7y)(3x + 7y)\``
  },
  {
    id: 'exp_matdas_bab4',
    subject_slug: 'matdas',
    chapter_order: 5,
    topic_title: 'Bab 5: Persamaan Linear Satu Variabel (PLSV) & Dua Variabel (SPLDV - Substitusi, Eliminasi, Campuran)',
    content_markdown: `# Bab 5: Persamaan Linear: PLSV & SPLDV

## 1. Persamaan Linear Satu Variabel (PLSV)

**PLSV** adalah kalimat terbuka yang dihubungkan oleh tanda sama dengan (\`=\`) dan hanya memuat satu variabel dengan pangkat tertinggi satu.

### Bentuk Umum PLSV:
\`\`\`text
ax + b = 0   (dengan a ≠ 0; a, b ∈ ℝ)
\`\`\`

### Prinsip Operasi Aljabar Setara (*Equivalent Equations*):
Nilai kebenaran suatu persamaan tidak berubah jika kedua ruas:
1. Ditambah atau dikurang dengan bilangan yang sama.
2. Dikalikan atau dibagi dengan bilangan bukan nol yang sama.

### Contoh 1: PLSV dengan Tanda Kurung Majemuk
Selesaikan persamaan: \`4(2x - 3) - 3(x + 5) = 2x + 9\`
1. Terapkan sifat distributif untuk membuka kurung:
   \`8x - 12 - 3x - 15 = 2x + 9\`
2. Gabungkan suku sejenis di ruas kiri:
   \`5x - 27 = 2x + 9\`
3. Pindahkan variabel ke ruas kiri dan konstanta ke ruas kanan:
   \`5x - 2x = 9 + 27\`
   \`3x = 36\`
   \`x = 12\`.

### Contoh 2: PLSV dengan Koefisien Pecahan (Teknik Pengali KPK)
Selesaikan: \`(2x - 1)/3 - (x + 2)/4 = 5/6\`
1. Cari KPK dari seluruh penyebut (3, 4, 6) ➔ \`KPK = 12\`.
2. Kalikan **seluruh suku pada kedua ruas** dengan 12:
   \`12 × [(2x - 1)/3] - 12 × [(x + 2)/4] = 12 × (5/6)\`
   \`4(2x - 1) - 3(x + 2) = 10\`
3. Buka tanda kurung:
   \`8x - 4 - 3x - 6 = 10\`
   \`5x - 10 = 10\`
   \`5x = 20\`
   \`x = 4\`.

---

## 2. Sistem Persamaan Linear Dua Variabel (SPLDV)

SPLDV adalah kumpulan dua atau lebih persamaan linear yang memuat dua variabel yang sama dan harus dipenuhi secara bersama-sama.

### Bentuk Umum SPLDV:
\`\`\`text
a₁x + b₁y = c₁   ... (Persamaan 1)
a₂x + b₂y = c₂   ... (Persamaan 2)
\`\`\`
Himpunan penyelesaian ditulis sebagai pasangan bilangan terurut \`(x, y)\`.

---

## 3. Empat Metode Penyelesaian SPLDV

### A. Metode Substitusi
Mengisolasi salah satu variabel dari satu persamaan, lalu menyubstitusikannya ke persamaan lainnya.

### B. Metode Eliminasi
Menghilangkan salah satu variabel dengan menyamakan nilai mutlak koefisiennya melalui perkalian, lalu menjumlahkan atau mengurangkan kedua persamaan.

### C. Metode Campuran (Eliminasi - Substitusi)
Merupakan metode yang **paling direkomendasikan dalam ujian karena paling cepat dan meminimalkan kesalahan hitung**:

**Contoh Soal Praktikum:**
Tentukan nilai \`(x, y)\` yang memenuhi:
\`\`\`text
2x + 3y = 8   ... (1)
3x - 2y = -1  ... (2)
\`\`\`

**Langkah 1: Eliminasi variabel y**
- Kalikan persamaan (1) dengan 2: \`4x + 6y = 16\`
- Kalikan persamaan (2) dengan 3: \`9x - 6y = -3\`
- Jumlahkan kedua persamaan (karena tanda koefisien y berlawanan, \`+6y\` dan \`-6y\`):
  \`\`\`text
   4x + 6y = 16
   9x - 6y = -3
  ------------- +
       13x = 13
         x = 1
  \`\`\`

**Langkah 2: Substitusikan nilai x = 1 ke persamaan (1)**
\`\`\`text
2(1) + 3y = 8
   2 + 3y = 8
       3y = 6
        y = 2
\`\`\`
➔ Himpunan Penyelesaian: **HP = {(1, 2)}**.`
  },
  {
    id: 'exp_matdas_bab5',
    subject_slug: 'matdas',
    chapter_order: 6,
    topic_title: 'Bab 6: Sistem Persamaan Linear Tiga Variabel (SPLTV) - Eliminasi Gauss & Pemodelan Soal Cerita',
    content_markdown: `# Bab 6: Sistem Persamaan Linear Tiga Variabel (SPLTV)

## 1. Konsep & Bentuk Umum SPLTV

**SPLTV** adalah sistem yang terdiri dari tiga persamaan linear dengan tiga variabel (peubah), biasanya dilambangkan dengan \`x, y, z\`.

### Bentuk Umum:
\`\`\`text
a₁x + b₁y + c₁z = d₁   ... (Persamaan 1)
a₂x + b₂y + c₂z = d₂   ... (Persamaan 2)
a₃x + b₃y + c₃z = d₃   ... (Persamaan 3)
\`\`\`
- \`aᵢ, bᵢ, cᵢ\` adalah koefisien variabel; \`dᵢ\` adalah suku konstanta.
- Seluruh variabel berderajat satu (linear).
- Solusi sistem dinyatakan dalam **tripel terurut \`(x, y, z)\`**.

---

## 2. Prosedur Baku Penyelesaian Metode Gabungan (Eliminasi - Substitusi)

Penyelesaian SPLTV dilakukan dengan mereduksi sistem tiga variabel menjadi sistem dua variabel (SPLDV):

\`\`\`text
SPLTV (3 Variabel: x, y, z)
          │
          ▼  Eliminasi variabel yang sama (misal z) dari 2 pasang persamaan
SPLDV (2 Variabel: x, y)
          │
          ▼  Selesaikan SPLDV (dapat nilai x dan y)
Substitusi Balik ke Persamaan Awal
          │
          ▼
Solusi Lengkap Tripel Terurut (x, y, z)
\`\`\`

---

## 3. Bedah Kasus Riil Slide Perkuliahan (Model Panen Komoditas)

Dalam slide *SPLTV_TI_2026_F2.pdf*, disajikan studi kasus nyata koperasi pertanian yang mengelola komoditas beras, jagung, dan kedelai:

### Deskripsi Masalah:
- **Penimbangan I**: 2 karung beras + 1 karung jagung + 1 karung kedelai = **54 kg**.
- **Penimbangan II**: 1 karung beras + 2 karung jagung + 1 karung kedelai = **48 kg**.
- **Penimbangan III**: 1 karung beras + 1 karung jagung + 2 karung kedelai = **42 kg**.

Berapakah berat masing-masing satu karung beras (\`x\`), jagung (\`y\`), dan kedelai (\`z\`)?

### Langkah 1: Model Matematika
\`\`\`text
2x +  y +  z = 54   ... (1)
 x + 2y +  z = 48   ... (2)
 x +  y + 2z = 42   ... (3)
\`\`\`

### Langkah 2: Eliminasi Variabel \`z\`
**Pasangan 1: Kurangkan persamaan (1) dengan persamaan (2)**
\`\`\`text
2x +  y + z = 54
 x + 2y + z = 48
---------------- -
 x -  y     = 6     ... (4)
\`\`\`

**Pasangan 2: Eliminasi \`z\` dari persamaan (2) dan (3)**
- Kalikan persamaan (2) dengan 2: \`2x + 4y + 2z = 96\`
- Tuliskan persamaan (3): \`x + y + 2z = 42\`
- Kurangkan:
\`\`\`text
2x + 4y + 2z = 96
 x +  y + 2z = 42
----------------- -
 x + 3y      = 54   ... (5)
\`\`\`

### Langkah 3: Selesaikan SPLDV Persamaan (4) dan (5)
Kurangkan persamaan (5) dengan persamaan (4):
\`\`\`text
x + 3y = 54
x -  y =  6
----------- -
    4y = 48
     y = 12  (Berat 1 karung jagung = 12 kg)
\`\`\`

Substitusikan \`y = 12\` ke persamaan (4):
\`\`\`text
x - 12 = 6  ➔  x = 18  (Berat 1 karung beras = 18 kg)
\`\`\`

### Langkah 4: Substitusi Balik untuk Menemukan \`z\`
Substitusikan \`x = 18\` dan \`y = 12\` ke persamaan (1):
\`\`\`text
2(18) + 12 + z = 54
    36 + 12 + z = 54
         48 + z = 54
              z = 6   (Berat 1 karung kedelai = 6 kg)
\`\`\`

### Kesimpulan & Uji Solusi:
Himpunan Penyelesaian: **(x, y, z) = (18, 12, 6)**.
- Uji ke Persamaan 1: \`2(18) + 12 + 6 = 36 + 18 = 54\` (BENAR).
- Uji ke Persamaan 2: \`18 + 2(12) + 6 = 18 + 24 + 6 = 48\` (BENAR).
- Uji ke Persamaan 3: \`18 + 12 + 2(6) = 30 + 12 = 42\` (BENAR).`
  },
  {
    id: 'exp_matdas_bab6',
    subject_slug: 'matdas',
    chapter_order: 7,
    topic_title: 'Bab 7: Faktorisasi & Persamaan Kuadrat (Kasus a = 1, a ≠ 1, Selisih Dua Kuadrat, & Rumus ABC)',
    content_markdown: `# Bab 7: Faktorisasi & Penyelesaian Persamaan Kuadrat

## 1. Bentuk Umum Persamaan Kuadrat

Persamaan kuadrat adalah persamaan polinomial satu variabel yang memiliki derajat tertinggi dua:
\`\`\`text
ax² + bx + c = 0   (dengan syarat a ≠ 0; a, b, c ∈ ℝ)
\`\`\`
- \`a\` = koefisien \`x²\`
- \`b\` = koefisien \`x\`
- \`c\` = suku konstanta

---

## 2. Faktorisasi Kasus 1: Ketika Koefisien \`a = 1\`

Bentuk: \`x² + bx + c = (x + f₁)(x + f₂)\`
Syarat penentuan faktor:
- \`f₁ + f₂ = b\` (jumlah kedua faktor sama dengan koefisien tengah)
- \`f₁ × f₂ = c\` (hasil kali kedua faktor sama dengan konstanta)

### Pedoman Tanda Faktor:
1. **Dua Faktor Positif (\`c > 0\` dan \`b > 0\`)**:
   - Contoh: Faktorkan \`x² + 5x + 6 = 0\`
   - Faktor dari 6 yang jika dijumlahkan bernilai 5 adalah \`2\` dan \`3\`.
   - Bentuk faktor: \`(x + 2)(x + 3) = 0\` ➔ Akar-akar: \`x₁ = -2\` atau \`x₂ = -3\`.
2. **Dua Faktor Negatif (\`c > 0\` dan \`b < 0\`)**:
   - Contoh: Faktorkan \`x² - 9x + 20 = 0\`
   - Faktor dari 20 yang jika dijumlahkan bernilai -9 adalah \`-4\` dan \`-5\`.
   - Bentuk faktor: \`(x - 4)(x - 5) = 0\` ➔ Akar-akar: \`x₁ = 4\` atau \`x₂ = 5\`.
3. **Faktor Berlawanan Tanda (\`c < 0\`)**:
   - Contoh A: \`x² + 3x - 10 = 0\`
     - Pasangan faktor dari -10 yang dijumlahkan bernilai +3 adalah \`+5\` dan \`-2\`.
     - Faktor: \`(x + 5)(x - 2) = 0\` ➔ Akar: \`x₁ = -5\` atau \`x₂ = 2\`.
   - Contoh B: \`x² - 2x - 24 = 0\`
     - Pasangan faktor dari -24 yang dijumlahkan bernilai -2 adalah \`-6\` dan \`+4\`.
     - Faktor: \`(x - 6)(x + 4) = 0\` ➔ Akar: \`x₁ = 6\` atau \`x₂ = -4\`.

---

## 3. Faktorisasi Kasus 2: Ketika Koefisien \`a ≠ 1\` (Metode AC)

Ketika koefisien \`x²\` bukan satu, gunakan teknik penguraian suku tengah:
1. Kalikan koefisien pertama dan konstanta: \`k = a × c\`.
2. Cari dua bilangan \`p\` dan \`q\` sedemikian rupa sehingga:
   - \`p × q = a × c\`
   - \`p + q = b\`
3. Uraikan suku tengah \`bx\` menjadi \`px + qx\`.
4. Lakukan pemfaktoran berpasangan (*grouping*).

### Contoh Soal:
Faktorkan: \`2x² + 7x + 3 = 0\`
1. Hitung \`a × c = 2 × 3 = 6\`.
2. Cari dua bilangan yang jika dikali = 6 dan dijumlah = 7 ➔ yaitu \`6\` dan \`1\`.
3. Uraikan suku tengah:
   \`2x² + 6x + 1x + 3 = 0\`
4. Faktorkan per kelompok:
   \`2x(x + 3) + 1(x + 3) = 0\`
   \`(2x + 1)(x + 3) = 0\`
5. Akar penyelesaian:
   \`2x + 1 = 0 ➔ x = -1/2\`
   \`x + 3 = 0  ➔ x = -3\`.

---

## 4. Rumus Kuadratik ABC & Analisis Diskriminan

Jika suatu persamaan kuadrat sulit difaktorkan dengan bilangan bulat, gunakan rumus kuadratik universal:
\`\`\`text
x₁,₂ = [-b ± √(b² - 4ac)] / (2a)
\`\`\`

Besaran di dalam tanda akar disebut **Diskriminan (\`D\`)**:
\`\`\`text
D = b² - 4ac
\`\`\`

### Karakteristik Jenis Akar Berdasarkan Diskriminan:
- **D > 0**: Persamaan memiliki **dua akar real yang berbeda** (grafik parabola memotong sumbu X di dua titik).
- **D = 0**: Persamaan memiliki **dua akar real kembar / satu solusi tunggal** (grafik parabola menyinggung sumbu X di satu titik).
- **D < 0**: Persamaan **tidak memiliki akar real** (akar imajiner / kompleks, grafik parabola tidak memotong sumbu X sama sekali).`
  },
  {
    id: 'exp_matdas_bab7',
    subject_slug: 'matdas',
    chapter_order: 8,
    topic_title: 'Bab 8: Pertidaksamaan Kuadrat, Garis Bilangan, Uji Tanda Interval, & Himpunan Penyelesaian',
    content_markdown: `# Bab 8: Pertidaksamaan Kuadrat & Analisis Interval

## 1. Definisi & Bentuk Umum Pertidaksamaan Kuadrat

Pertidaksamaan kuadrat adalah kalimat matematika terbuka yang memuat polinomial derajat dua dengan notasi ketaksamaan (\`>\`, \`< \`, \`≥\`, \`≤\`):

\`\`\`text
ax² + bx + c > 0
ax² + bx + c < 0
ax² + bx + c ≥ 0
ax² + bx + c ≤ 0
(dengan syarat a ≠ 0; a, b, c ∈ ℝ)
\`\`\`

---

## 2. Enam (6) Langkah Baku Penyelesaian Pertidaksamaan Kuadrat

Berdasarkan slide perkuliahan *PPT_Pertidaksamaan_Kuadrat_2026 TI.pdf*, prosedur standar penyelesaian terdiri dari 6 tahapan terstruktur:

1. **Langkah 1**: Pindahkan semua suku ke salah satu ruas (biasanya ruas kiri) sehingga ruas kanan bernilai nol: \`f(x) ≥ 0\` atau \`f(x) < 0\`.
2. **Langkah 2**: Cari pembuat nol (akar-akar persamaan) dengan menyelesaikan persamaan kuadrat \`f(x) = 0\`.
3. **Langkah 3**: Tempatkan nilai akar-akar tersebut pada garis bilangan secara terurut dari nilai terkecil ke terbesar.
   - Gunakan **bulatan penuh (terisi)** jika tanda pertidaksamaan memuat \`≥\` atau \`≤\`.
   - Gunakan **bulatan kosong (terbuka)** jika tanda pertidaksamaan ketat \`>\` atau \`<\`.
4. **Langkah 4**: Titik akar tersebut membagi garis bilangan menjadi tiga interval. Lakukan **uji tanda** dengan memasukkan nilai \`x\` sembarang di setiap interval ke dalam fungsi \`f(x)\` untuk menentukan daerah positif (\`+\`) dan daerah negatif (\`-\`).
5. **Langkah 5**: Pilih daerah interval yang memenuhi tanda pertidaksamaan:
   - Jika \`f(x) > 0\` atau \`f(x) ≥ 0\`, arsirlah daerah **POSITIF (+)**.
   - Jika \`f(x) < 0\` atau \`f(x) ≤ 0\`, arsirlah daerah **NEGATIF (-)**.
6. **Langkah 6**: Tuliskan Himpunan Penyelesaian (HP) dalam notasi matematis resmi.

---

## 3. Bedah Contoh Kasus 1: Tanda Lebih Besar Sama Dengan (≥)

**Soal**: Tentukan himpunan penyelesaian dari: \`x² - 2x - 8 ≥ 0\`

### Langkah 1: Ruas kanan sudah nol
\`f(x) = x² - 2x - 8 ≥ 0\`

### Langkah 2: Cari pembuat nol
\`\`\`text
x² - 2x - 8 = 0
(x - 4)(x + 2) = 0
x₁ = 4  atau  x₂ = -2
\`\`\`

### Langkah 3 & 4: Garis Bilangan dan Uji Tanda
Letakkan titik \`-2\` dan \`4\` pada garis bilangan (bulatan penuh karena tanda \`≥\`):
- **Interval I (\`x < -2\`)**: Ambil titik uji \`x = -3\`
  \`f(-3) = (-3)² - 2(-3) - 8 = 9 + 6 - 8 = +7\` (Daerah **POSITIF +**)
- **Interval II (\`-2 < x < 4\`)**: Ambil titik uji \`x = 0\`
  \`f(0) = 0² - 2(0) - 8 = -8\` (Daerah **NEGATIF -**)
- **Interval III (\`x > 4\`)**: Ambil titik uji \`x = 5\`
  \`f(5) = 5² - 2(5) - 8 = 25 - 10 - 8 = +7\` (Daerah **POSITIF +**)

\`\`\`text
        + + + + +         - - - - - -         + + + + +
    ──────────────●─────────────────────────●──────────────►
                 -2                         4
\`\`\`

### Langkah 5 & 6: Menentukan HP
Karena pertidaksamaan meminta \`≥ 0\`, maka pilih daerah **positif (+)**:
- Sisi kiri: \`x ≤ -2\`
- Sisi kanan: \`x ≥ 4\`

**Himpunan Penyelesaian:**
\`\`\`text
HP = {x | x ≤ -2  atau  x ≥ 4, x ∈ ℝ}
Dalam notasi interval: (-∞, -2] ∪ [4, ∞)
\`\`\`

---

## 4. Bedah Contoh Kasus 2: Tanda Kurang Dari (<)

**Soal**: Selesaikan pertidaksamaan: \`x² - 5x + 6 < 0\`

1. Cari akar pembuat nol:
   \`\`\`text
   x² - 5x + 6 = 0
   (x - 2)(x - 3) = 0
   x₁ = 2  atau  x₂ = 3
   \`\`\`
2. Garis bilangan (bulatan kosong karena tanda \`<\`):
   - Uji \`x = 0\` (interval kiri) ➔ \`0 - 0 + 6 = +6\` (Daerah **+**)
   - Uji \`x = 2.5\` (interval tengah) ➔ \`(2.5-2)(2.5-3) = (0.5)(-0.5) = -0.25\` (Daerah **-**)
   - Uji \`x = 4\` (interval kanan) ➔ \`(4-2)(4-3) = (2)(1) = +2\` (Daerah **+**)
3. Pertidaksamaan meminta daerah **kurang dari nol (< 0)**, yaitu daerah **negatif (-)** di antara 2 dan 3:

\`\`\`text
HP = {x | 2 < x < 3, x ∈ ℝ}
Dalam notasi interval: (2, 3)
\`\`\``
  },
  {
    id: 'exp_matdas_latihan_uts',
    subject_slug: 'matdas',
    chapter_order: 9,
    topic_title: 'Bab 9: Latihan Soal UTS Matematika Dasar TI 2026 (Pembahasan Lengkap)',
    content_markdown: `# Bab 9: Latihan Soal UTS Matematika Dasar TI 2026 (Pembahasan Lengkap)

![Latihan Soal UTS Matematika Dasar TI 2026 - Pembahasan Lengkap & Solusi Sistematis](../images/matdas/latihan-soal-uts.png)

> **Tujuan Pembelajaran:** Mahasiswa mampu menerapkan konsep operasi aljabar, fungsi linear, pertidaksamaan kuadrat, SPLDV, SPLTV, serta eksponen dan bentuk akar dalam menyelesaikan permasalahan terapan bidang Teknik Informatika secara sistematis dan tepat.

## Soal 1. Operasi Bentuk Aljabar

Sebuah perusahaan multimedia menggunakan model matematika untuk menentukan skor evaluasi kualitas hasil pengolahan video dengan variabel $x$ = jumlah efek visual dan $y$ = jumlah efek suara ($x,y$ bilangan bulat tidak negatif).

$$
S = 2\left[3x - 2(2y - x + 1)\right] - 3\left[x - (y - 4)\right] + 5(y - x)
$$

dengan $S$ dapat bernilai positif, nol, atau negatif.

### a) Sederhanakan $S$ menggunakan sifat distributif dan pengelompokan suku sejenis

**Langkah 1: Sederhanakan bagian dalam kurung pertama**  
$$
3x - 2(2y - x + 1) = 3x - 4y + 2x - 2 = 5x - 4y - 2
$$

Kemudian kalikan dengan $2$:
$$
2\left[5x - 4y - 2\right] = 10x - 8y - 4
$$

**Langkah 2: Sederhanakan bagian dalam kurung kedua**  
$$
x - (y - 4) = x - y + 4
$$

Kemudian kalikan dengan $-3$:
$$
-3\left[x - y + 4\right] = -3x + 3y - 12
$$

**Langkah 3: Sederhanakan suku ketiga**  
$$
5(y - x) = 5y - 5x
$$

**Langkah 4: Jumlahkan seluruh hasil**

$$
\begin{aligned}
S &= (10x - 8y - 4) + (-3x + 3y - 12) + (5y - 5x)\\[4pt]
S &= (10x - 3x - 5x) + (-8y + 3y + 5y) + (-4 - 12)\\[4pt]
S &= 2x + 0y - 16\\[4pt]
S &= 2x - 16
\end{aligned}
$$

**Hasil penyederhanaan:** $\boxed{S = 2x - 16}$

### b) Hitung nilai $S$ untuk $x = 4$ dan $y = 3$

Substitusikan $x = 4$ ke dalam bentuk sederhana $S = 2x - 16$:

$$
S = 2(4) - 16 = 8 - 16 = -8
$$

**Jadi, nilai $S = \boxed{-8}$**

### c) Evaluasi pernyataan koefisien $y$ adalah nol

Berdasarkan bentuk sederhana $S = 2x - 16 + 0y$, terlihat jelas bahwa **koefisien $y$ adalah $0$**. 

Artinya, besar kecilnya jumlah efek suara ($y$) **tidak memengaruhi** skor evaluasi $S$. Perubahan nilai $y$ sama sekali tidak akan mengubah hasil $S$ selama $x$ tetap.

**Kesimpulan:** Pernyataan tersebut **benar**, karena suku yang memuat $y$ telah hilang (koefisien $0$) setelah disederhanakan.

---

## Soal 2. Fungsi Linear (Biaya Pengiriman Ekspedisi)

Perusahaan A dan B menawarkan jasa pengiriman dengan sistem biaya linear.

| Perusahaan | Biaya Administrasi Tetap | Biaya per kg |
| :--- | :--- | :--- |
| **A** | Rp47.500 | Rp6.500 |
| **B** | Rp17.500 | Rp10.500 |

Misalkan $x$ = berat barang (kg), $x \ge 0$.

### a) Susun fungsi biaya pengiriman kedua perusahaan

$$
\begin{aligned}
f_A(x) &= 47.500 + 6.500x\\[4pt]
f_B(x) &= 17.500 + 10.500x
\end{aligned}
$$

### b) Tentukan berat barang saat biaya sama dan hitung biayanya

Kita cari $x$ dengan $f_A(x)=f_B(x)$:

$$
\begin{aligned}
47.500 + 6.500x &= 17.500 + 10.500x\\[4pt]
47.500 - 17.500 &= 10.500x - 6.500x\\[4pt]
30.000 &= 4.000x\\[4pt]
x &= \frac{30.000}{4.000} = 7,5
\end{aligned}
$$

Hitung biaya pada $x=7,5$ kg (gunakan salah satu fungsi):

$$
f_A(7,5) = 47.500 + 6.500(7,5) = 47.500 + 48.750 = 96.250
$$

**Jadi, pada berat $\boxed{7,5\,\text{kg}}$ biaya kedua perusahaan sama yaitu $\boxed{\text{Rp}96.250}$**

### c) Hitung biaya untuk 5 kg dan 16 kg serta tentukan yang lebih hemat

**Untuk $x = 5$ kg:**

$$
\begin{aligned}
f_A(5) &= 47.500 + 6.500(5) = 47.500 + 32.500 = 80.000\\[4pt]
f_B(5) &= 17.500 + 10.500(5) = 17.500 + 52.500 = 70.000
\end{aligned}
$$

Pada berat **5 kg**, biaya **Perusahaan B** lebih hemat ($\text{Rp}70.000 < \text{Rp}80.000$).

**Untuk $x = 16$ kg:**

$$
\begin{aligned}
f_A(16) &= 47.500 + 6.500(16) = 47.500 + 104.000 = 151.500\\[4pt]
f_B(16) &= 17.500 + 10.500(16) = 17.500 + 168.000 = 185.500
\end{aligned}
$$

Pada berat **16 kg**, biaya **Perusahaan A** lebih hemat ($\text{Rp}151.500 < \text{Rp}185.500$).

**Kaitan dengan bagian (b):** Titik impas terjadi pada $x = 7,5$ kg. Karena **Perusahaan B** memiliki biaya tetap lebih rendah namun tarif per kg lebih tinggi, B lebih hemat untuk pengiriman **ringan** ($x < 7,5$). Sebaliknya, **Perusahaan A** memiliki tarif per kg lebih rendah, sehingga lebih hemat untuk pengiriman **berat** ($x > 7,5$).

---

## Soal 3. Fungsi Linear (Biaya Percetakan Modul)

Dua jasa percetakan dengan biaya persiapan dibayar sekali.

| Percetakan | Biaya Persiapan Cetak | Biaya per Modul |
| :--- | :--- | :--- |
| **A** | Rp60.000 | Rp4.000 |
| **B** | Rp24.000 | Rp7.000 |

Misalkan $x$ = banyak modul ($x \in \mathbb{Z}, x \ge 0$).

### a) Susun fungsi biaya total masing-masing

$$
\begin{aligned}
B_A(x) &= 60.000 + 4.000x\\[4pt]
B_B(x) &= 24.000 + 7.000x
\end{aligned}
$$

### b) Tentukan banyak modul saat biaya sama dan hitung biayanya

$$
\begin{aligned}
60.000 + 4.000x &= 24.000 + 7.000x\\[4pt]
60.000 - 24.000 &= 7.000x - 4.000x\\[4pt]
36.000 &= 3.000x\\[4pt]
x &= \frac{36.000}{3.000} = 12
\end{aligned}
$$

Biaya pada $x=12$:

$$
B_A(12) = 60.000 + 4.000(12) = 60.000 + 48.000 = 108.000
$$

**Jadi, biaya sama ketika dicetak $\boxed{12\,\text{modul}}$ dengan total biaya $\boxed{\text{Rp}108.000}$**

### c) Hitung biaya untuk 8 modul dan 20 modul

**Untuk $x = 8$ modul:**

$$
\begin{aligned}
B_A(8) &= 60.000 + 4.000(8) = 60.000 + 32.000 = 92.000\\[4pt]
B_B(8) &= 24.000 + 7.000(8) = 24.000 + 56.000 = 80.000
\end{aligned}
$$

Untuk **8 modul**, **Percetakan B** lebih hemat ($\text{Rp}80.000 < \text{Rp}92.000$).

**Untuk $x = 20$ modul:**

$$
\begin{aligned}
B_A(20) &= 60.000 + 4.000(20) = 60.000 + 80.000 = 140.000\\[4pt]
B_B(20) &= 24.000 + 7.000(20) = 24.000 + 140.000 = 164.000
\end{aligned}
$$

Untuk **20 modul**, **Percetakan A** lebih hemat ($\text{Rp}140.000 < \text{Rp}164.000$).

**Kaitan dengan bagian (b):** Titik impas pada **12 modul**. Karena **Percetakan B** berbiaya persiapan lebih rendah namun biaya per modul lebih tinggi, lebih menguntungkan untuk jumlah modul **kecil** ($x < 12$). **Percetakan A** berbiaya persiapan lebih tinggi tetapi biaya per modul lebih rendah, sehingga lebih hemat untuk jumlah modul **besar** ($x > 12$).

---

## Soal 4. Pertidaksamaan Kuadrat

Diberikan pertidaksamaan:

$$
6x^2 - 17x - 14 \ge 0,\quad x \in \mathbb{R}
$$

Ada dua kesimpulan: **Mahasiswa A:** $x \le -\frac{2}{3}$ atau $x \ge \frac{7}{2}$; **Mahasiswa B:** $-\frac{2}{3} \le x \le \frac{7}{2}$

### a) Faktorkan dan tentukan interval penyelesaian dengan metode uji tanda

**Langkah 1: Faktorisasi**

Cari dua bilangan dengan hasil kali $a\cdot c = 6\cdot(-14) = -84$ dan jumlah $-17$. Bilangan yang memenuhi: $-21$ dan $+4$.

$$
\begin{aligned}
6x^2 - 17x - 14 &= 6x^2 - 21x + 4x - 14\\[4pt]
&= 3x(2x - 7) + 2(2x - 7)\\[4pt]
&= (3x + 2)(2x - 7)
\end{aligned}
$$

**Langkah 2: Cari titik batas**

$$
(3x + 2)(2x - 7) = 0 \implies x = -\frac{2}{3} \lor x = \frac{7}{2} = 3,5
$$

**Langkah 3: Uji tanda pada interval**

| Interval | Nilai uji $x$ | Perhitungan $(3x+2)(2x-7)$ | Tanda |
| :--- | :--- | :--- | :--- |
| $x < -\frac{2}{3}$ (mis. $x = -1$) | $x = -1$ | $(3(-1)+2)(2(-1)-7)=(-1)(-9)=9$ | $+$ |
| $-\frac{2}{3} < x < \frac{7}{2}$ (mis. $x = 0$) | $x = 0$ | $(2)(-7) = -14$ | $-$ |
| $x > \frac{7}{2}$ (mis. $x = 4$) | $x = 4$ | $(14)(1)=14$ | $+$ |

Pertidaksamaan bertanda $\ge 0$, sehingga diambil daerah **positif (+)** termasuk titik batas.

### b) Tentukan mahasiswa yang benar dan jelaskan kesalahannya

**Jawaban:** **Mahasiswa A** yang benar dengan kesimpulan $x \le -\frac{2}{3}$ atau $x \ge \frac{7}{2}$.

**Penjelasan kesalahan Mahasiswa B:** Mahasiswa B justru mengambil daerah **negatif** ($-\frac{2}{3} \le x \le \frac{7}{2}$), padahal pertidaksamaan meminta nilai $\ge 0$ (daerah **positif**) karena grafik parabola $y=6x^2-17x-14$ terbuka ke atas ($a=6>0$).

### c) Penyajian pada garis bilangan

$$
\text{HP} = \left\{x\mid x \le -\frac{2}{3}\ \text{atau}\ x \ge \frac{7}{2},\ x \in \mathbb{R}\right\}
$$

Dalam notasi interval:

$$
\text{HP} = \left(-\infty,\ -\frac{2}{3}\right] \cup \left[\frac{7}{2}, +\infty\right)
$$

**Gambaran garis bilangan:** Lingkaran **penuh** pada $x = -\frac{2}{3}$ dan $x = \frac{7}{2}$ (karena tanda $\ge$), kemudian arsir ke **kiri** dari $-\frac{2}{3}$ dan ke **kanan** dari $\frac{7}{2}$.

---

## Soal 5. Sistem Persamaan Linear Dua Variabel (SPLDV)

Pembelian perangkat: **monitor** dan **printer** dengan harga tetap.

| Transaksi | Jumlah Monitor | Jumlah Printer | Total Biaya |
| :--- | :--- | :--- | :--- |
| **1** | 4 | 3 | Rp8.600.000 |
| **2** | 3 | 5 | Rp9.200.000 |

Anggaran untuk membeli **5 monitor** dan **4 printer** sebesar **Rp12.000.000**.

### a) Susun persamaan linear

Misalkan $x$ = harga 1 monitor (rupiah), $y$ = harga 1 printer (rupiah).

$$
\begin{aligned}
4x + 3y &= 8.600.000 \quad (1)\\[4pt]
3x + 5y &= 9.200.000 \quad (2)
\end{aligned}
$$

### b) Tentukan nilai $x$ dan $y$ dengan metode eliminasi dan substitusi

**Metode Eliminasi (mengeliminasi $x$)**

Samakan koefisien $x$:

$$
\begin{aligned}
(1)\times 3:\quad 12x + 9y &= 25.800.000\\[4pt]
(2)\times 4:\quad 12x + 20y &= 36.800.000
\end{aligned}
$$

Kurangkan $(1)\times 3$ dari $(2)\times 4$:

$$
\begin{aligned}
(12x - 12x) + (20y - 9y) &= 36.800.000 - 25.800.000\\[4pt]
11y &= 11.000.000\\[4pt]
y &= \frac{11.000.000}{11} = 1.000.000
\end{aligned}
$$

**Metode Substitusi (mencari $x$)**

Substitusikan $y = 1.000.000$ ke persamaan $(1)$:

$$
\begin{aligned}
4x + 3(1.000.000) &= 8.600.000\\[4pt]
4x + 3.000.000 &= 8.600.000\\[4pt]
4x &= 8.600.000 - 3.000.000\\[4pt]
4x &= 5.600.000\\[4pt]
x &= \frac{5.600.000}{4} = 1.400.000
\end{aligned}
$$

**Hasil:** $\boxed{x = \text{Rp}1.400.000,\quad y = \text{Rp}1.000.000}$

### c) Hitung total biaya 5 monitor dan 4 printer serta sisa anggaran

$$
\begin{aligned}
\text{Total} &= 5x + 4y = 5(1.400.000) + 4(1.000.000)\\[4pt]
&= 7.000.000 + 4.000.000\\[4pt]
&= 11.000.000
\end{aligned}
$$

$$
\text{Sisa anggaran} = 12.000.000 - 11.000.000 = \text{Rp}1.000.000
$$

**Jadi, total biaya $\boxed{\text{Rp}11.000.000}$ dan sisa anggaran $\boxed{\text{Rp}1.000.000}$**.

---

## Soal 6. Sistem Persamaan Linear Tiga Variabel (SPLTV)

Pengujian aplikasi dengan tiga jenis berkas: **gambar ($x$)**, **audio ($y$)**, dan **animasi ($z$)** dalam satuan MB.

| Pengujian | Gambar | Audio | Animasi | Total Ukuran |
| :--- | :--- | :--- | :--- | :--- |
| **I** | 3 | 2 | 1 | 55 MB |
| **II** | 2 | 3 | 2 | 65 MB |
| **III** | 4 | 1 | 3 | 90 MB |

### a) Susun sistem persamaan linear

$$
\begin{aligned}
3x + 2y + z &= 55 \quad (1)\\[4pt]
2x + 3y + 2z &= 65 \quad (2)\\[4pt]
4x + y + 3z &= 90 \quad (3)
\end{aligned}
$$

### b) Tentukan nilai $x,y,z$

**Langkah 1: Ubah persamaan (1) menjadi bentuk $z$**

$$
z = 55 - 3x - 2y \quad (1a)
$$

**Langkah 2: Substitusikan $z$ ke persamaan (2)**

$$
\begin{aligned}
2x + 3y + 2(55 - 3x - 2y) &= 65\\[4pt]
2x + 3y + 110 - 6x - 4y &= 65\\[4pt]
-4x - y + 110 &= 65\\[4pt]
-4x - y &= 65 - 110\\[4pt]
-4x - y &= -45\\[4pt]
4x + y &= 45 \quad (4)
\end{aligned}
$$

**Langkah 3: Substitusikan $z$ ke persamaan (3)**

$$
\begin{aligned}
4x + y + 3(55 - 3x - 2y) &= 90\\[4pt]
4x + y + 165 - 9x - 6y &= 90\\[4pt]
-5x - 5y + 165 &= 90\\[4pt]
-5x - 5y &= 90 - 165\\[4pt]
-5x - 5y &= -75
\end{aligned}
$$

Bagi kedua ruas dengan $-5$:

$$
x + y &= 15 \quad (5)
$$

**Langkah 4: Eliminasi $y$ dari (4) dan (5)**

$$
\begin{aligned}
(4):\quad 4x + y &= 45\\[4pt]
(5):\quad x + y &= 15
\end{aligned}
$$

Kurangkan $(5)$ dari $(4)$:

$$
\begin{aligned}
3x &= 30\\[4pt]
x &= 10
\end{aligned}
$$

**Langkah 5: Cari $y$ dari (5)**

$$
x + y = 15 \implies 10 + y = 15 \implies y = 5
$$

**Langkah 6: Cari $z$ dari (1a)**

$$
z = 55 - 3(10) - 2(5) = 55 - 30 - 10 = 15
$$

**Uji kebenaran:**

- (1) $3(10)+2(5)+15 = 30+10+15 = 55$ ✓
- (2) $2(10)+3(5)+2(15) = 20+15+30 = 65$ ✓
- (3) $4(10)+5+3(15) = 40+5+45 = 90$ ✓

**Hasil:** $\boxed{x = 10\,\text{MB},\quad y = 5\,\text{MB},\quad z = 15\,\text{MB}}$

---

## Soal 7. Sistem Persamaan Linear Tiga Variabel (SPLTV)

Tiga paket layanan TI dengan tarif tetap: **instalasi perangkat lunak ($x$)**, **konfigurasi jaringan ($y$)**, dan **pemeliharaan komputer ($z$)** dalam **puluhan ribu rupiah**.

| Paket | Instalasi Perangkat Lunak | Konfigurasi Jaringan | Pemeliharaan Komputer | Total Biaya |
| :--- | :--- | :--- | :--- | :--- |
| **I** | 2 | 3 | 1 | Rp390.000 |
| **II** | 3 | 2 | 2 | Rp450.000 |
| **III** | 4 | 1 | 2 | Rp430.000 |

### a) Susun sistem persamaan linear

Karena $x,y,z$ dalam **puluhan ribu rupiah**, kita tulis nilai dalam satuan puluhan ribu:

$$
\begin{aligned}
2x + 3y + z &= 39 \quad (1)\\[4pt]
3x + 2y + 2z &= 45 \quad (2)\\[4pt]
4x + y + 2z &= 43 \quad (3)
\end{aligned}
$$

### b) Tentukan nilai $x,y,z$

**Langkah 1: Eliminasi $z$ dari persamaan (2) dan (3)**

Perhatikan koefisien $z$ pada (2) dan (3) sama ($2$).

$$
\begin{aligned}
(2):\quad 3x + 2y + 2z &= 45\\[4pt]
(3):\quad 4x + y + 2z &= 43
\end{aligned}
$$

Kurangkan $(3)$ dari $(2)$:

$$
\begin{aligned}
(3x - 4x) + (2y - y) + (2z - 2z) &= 45 - 43\\[4pt]
-x + y &= 2\\[4pt]
y &= x + 2 \quad (4)
\end{aligned}
$$

**Langkah 2: Eliminasi $z$ dari persamaan (1) dan (2)**

Kalikan $(1)$ dengan $2$ agar koefisien $z$ sama dengan (2):

$$
\begin{aligned}
(1)\times 2:\quad 4x + 6y + 2z &= 78\\[4pt]
(2):\quad 3x + 2y + 2z &= 45
\end{aligned}
$$

Kurangkan $(2)$ dari $(1)\times 2$:

$$
\begin{aligned}
(4x - 3x) + (6y - 2y) + (2z - 2z) &= 78 - 45\\[4pt]
x + 4y &= 33 \quad (5)
\end{aligned}
$$

**Langkah 3: Substitusikan $y = x + 2$ ke (5)**

$$
\begin{aligned}
x + 4(x + 2) &= 33\\[4pt]
x + 4x + 8 &= 33\\[4pt]
5x + 8 &= 33\\[4pt]
5x &= 33 - 8\\[4pt]
5x &= 25\\[4pt]
x &= 5
\end{aligned}
$$

**Langkah 4: Cari $y$ dan $z$**

$$
y = x + 2 = 5 + 2 = 7
$$

Substitusikan $x=5, y=7$ ke persamaan $(1)$:

$$
\begin{aligned}
2(5) + 3(7) + z &= 39\\[4pt]
10 + 21 + z &= 39\\[4pt]
31 + z &= 39\\[4pt]
z &= 39 - 31 = 8
\end{aligned}
$$

**Uji kebenaran:**

- (1) $2(5)+3(7)+8 = 10+21+8 = 39$ ✓
- (2) $3(5)+2(7)+2(8) = 15+14+16 = 45$ ✓
- (3) $4(5)+7+2(8) = 20+7+16 = 43$ ✓

**Konversi ke rupiah:**

| Layanan | Nilai ($x/y/z$) | Tarif |
| :--- | :--- | :--- |
| **Instalasi perangkat lunak ($x$)** | $5$ (puluhan ribu) | $\text{Rp}50.000$ |
| **Konfigurasi jaringan ($y$)** | $7$ (puluhan ribu) | $\text{Rp}70.000$ |
| **Pemeliharaan komputer ($z$)** | $8$ (puluhan ribu) | $\text{Rp}80.000$ |

**Hasil:** $\boxed{x=5,\ y=7,\ z=8\quad \text{(dalam puluhan ribu rupiah)}}$

---

## Soal 8. Eksponen dan Bentuk Akar

Diberikan:

$$
P = \frac{\left[(a^{-4}b^{3})^{3}(a^{5}b^{-2})^{2}(a^{-2}b^{4})\right]}{\left[(a^{-3}b^{2})^{2}\right]},\quad (a\neq 0,\ b\neq 0)
$$

$$
Q = 6\sqrt{147} - 5\sqrt{108} + 4\sqrt{75} - 3\sqrt{192} + 2\sqrt{48}
$$

### a) Sederhanakan $P$ menggunakan sifat eksponen dan nyatakan dengan pangkat positif

**Langkah 1: Sederhanakan tiap faktor di pembilang**

$$
\begin{aligned}
(a^{-4}b^{3})^{3} &= a^{-12}b^{9}\\[4pt]
(a^{5}b^{-2})^{2} &= a^{10}b^{-4}\\[4pt]
(a^{-2}b^{4}) &= a^{-2}b^{4}
\end{aligned}
$$

**Langkah 2: Kalikan faktor-faktor pembilang**

$$
\begin{aligned}
a\text{-term:}\quad & (-12) + 10 + (-2) = -4 \implies a^{-4}\\[4pt]
b\text{-term:}\quad & 9 + (-4) + 4 = 9 \implies b^{9}
\end{aligned}
$$

Sehingga pembilang = $a^{-4}b^{9}$

**Langkah 3: Sederhanakan penyebut**

$$
(a^{-3}b^{2})^{2} = a^{-6}b^{4}
$$

**Langkah 4: Bagi pembilang dengan penyebut ($a^p/a^q = a^{p-q}$)**

$$
\begin{aligned}
a\text{-term:}\quad & a^{-4 - (-6)} = a^{-4 + 6} = a^{2}\\[4pt]
b\text{-term:}\quad & b^{9 - 4} = b^{5}
\end{aligned}
$$

**Hasil:** $\boxed{P = a^{2}b^{5}}$

### b) Tentukan mahasiswa yang benar dan jelaskan kesalahannya

Dari hasil di atas, diperoleh $P = a^{2}b^{5}$.

- **Mahasiswa A:** $P = a^{2}b^{5}$ → **BENAR**
- **Mahasiswa B:** $P = \frac{b^{5}}{a^{2}} = a^{-2}b^{5}$ → **SALAH**

**Penjelasan kesalahan Mahasiswa B:** Kesalahan terletak pada operasi pembagian pangkat basis $a$. Seharusnya $a^{-4} \div a^{-6} = a^{-4 - (-6)} = a^{-4 + 6} = a^{2}$, bukan $a^{-2}$. Jika menuliskan $1/a^2$, itu artinya $a^{-2}$, padahal hasil yang benar adalah $a^{2}$.

### c) Sederhanakan $Q = 6\sqrt{147} - 5\sqrt{108} + 4\sqrt{75} - 3\sqrt{192} + 2\sqrt{48}$

**Langkah 1: Sederhanakan tiap bentuk akar**

| Bentuk Akar | Faktorisasi | Penyederhanaan | Hasil Perkalian |
| :--- | :--- | :--- | :--- |
| $\sqrt{147}$ | $\sqrt{49\cdot 3}$ | $7\sqrt{3}$ | $6\sqrt{147} = 6\cdot 7\sqrt{3} = 42\sqrt{3}$ |
| $\sqrt{108}$ | $\sqrt{36\cdot 3}$ | $6\sqrt{3}$ | $-5\sqrt{108} = -5\cdot 6\sqrt{3} = -30\sqrt{3}$ |
| $\sqrt{75}$ | $\sqrt{25\cdot 3}$ | $5\sqrt{3}$ | $4\sqrt{75} = 4\cdot 5\sqrt{3} = 20\sqrt{3}$ |
| $\sqrt{192}$ | $\sqrt{64\cdot 3}$ | $8\sqrt{3}$ | $-3\sqrt{192} = -3\cdot 8\sqrt{3} = -24\sqrt{3}$ |
| $\sqrt{48}$ | $\sqrt{16\cdot 3}$ | $4\sqrt{3}$ | $2\sqrt{48} = 2\cdot 4\sqrt{3} = 8\sqrt{3}$ |

**Langkah 2: Jumlahkan semua suku sejenis ($\sqrt{3}$)**

$$
\begin{aligned}
Q &= 42\sqrt{3} - 30\sqrt{3} + 20\sqrt{3} - 24\sqrt{3} + 8\sqrt{3}\\[4pt]
&= (42 - 30 + 20 - 24 + 8)\sqrt{3}\\[4pt]
&= (16)\sqrt{3}\\[4pt]
&= 16\sqrt{3}
\end{aligned}
$$

**Hasil:** $\boxed{Q = 16\sqrt{3}}$

---

## Rangkuman Kunci Bab 9

| Topik | Kunci yang Perlu Diingat |
| :--- | :--- |
| **Operasi Aljabar** | Terapkan distributif dengan cermat, perhatikan tanda minus, kelompokkan suku sejenis. Koefisien nol berarti variabel tidak berpengaruh. |
| **Fungsi Linear (Terapan)** | Bentuk $f(x)=a+bx$. Titik impas saat $f_1(x)=f_2(x)$ menentukan pilihan yang lebih hemat tergantung $x < x_0$ atau $x > x_0$. |
| **Pertidaksamaan Kuadrat** | Faktorkan → cari akar → uji tanda → ambil daerah sesuai tanda pertidaksamaan. Parabola terbuka ke atas ($a>0$): $>0$ di luar akar, $<0$ di antara akar. |
| **SPLDV** | Cocok diselesaikan dengan **eliminasi + substitusi**. Pastikan satuan harga/kebutuhan konsisten sebelum menghitung total & sisa. |
| **SPLTV** | Strategi efisien: eliminasi variabel yang sama dari dua pasang persamaan → jadi SPLDV → substitusi mundur. Selalu **uji hasil** ke ketiga persamaan awal. |
| **Eksponen** | $(a^p)^q=a^{p q},\ a^p a^q=a^{p+q},\ a^p/a^q=a^{p-q}$. Hati-hati tanda minus saat mengurangkan pangkat. |
| **Bentuk Akar** | $\sqrt{ab}=\sqrt{a}\sqrt{b}$, $c\sqrt{a}\pm d\sqrt{a}=(c\pm d)\sqrt{a}$. Sederhanakan ke bentuk $\sqrt{n\cdot k}$ dengan $n$ bilangan kuadrat sempurna. |
`
  }
];

module.exports = matdasExplanations;
