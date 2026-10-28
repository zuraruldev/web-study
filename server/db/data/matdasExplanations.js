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

![Latihan Soal UTS Matematika Dasar TI 2026 - Pembahasan Lengkap & Solusi Sistematis](/images/matdas/latihan-soal-uts.png)

> **Materi:** Latihan Soal Resmi Ujian Tengah Semester (UTS) Matematika Dasar Semester Ganjil TA 2026/2027 Program Studi Teknik Informatika.  
> Dilengkapi gambar dokumen soal resmi, petunjuk pengerjaan, penurunan rumus terperinci langkah demi langkah, dan evaluasi konsep kritis.

---

## Soal 1. Operasi Bentuk Aljabar (Model Evaluasi Pengolahan Video)

![Teks Resmi Soal 1: Operasi Bentuk Aljabar](/images/matdas/soal-1-aljabar.png)

Sebuah perusahaan multimedia menggunakan model matematika untuk menentukan skor evaluasi kualitas hasil pengolahan video:
- \`x\` = jumlah efek visual (\`x ≥ 0, x ∈ ℤ\`)
- \`y\` = jumlah efek suara (\`y ≥ 0, y ∈ ℤ\`)
- \`S\` = skor evaluasi (dapat bernilai positif, nol, atau negatif)

Persamaan model matematika:
\`\`\`text
S = 2[3x - 2(2y - x + 1)] - 3[x - (y - 4)] + 5(y - x)
\`\`\`

### a. Penyederhanaan Menggunakan Sifat Distributif & Suku Sejenis

Untuk menyederhanakan ekspresi majemuk ini, buka tanda kurung terdalam terlebih dahulu, lakukan perkalian distributif, lalu kelompokkan seluruh suku sejenis:

\`\`\`text
Langkah 1: Sederhanakan bagian dalam kurung pertama
  3x - 2(2y - x + 1) = 3x - 4y + 2x - 2
                     = (3x + 2x) - 4y - 2
                     = 5x - 4y - 2

  Kalikan hasil tersebut dengan pengali luar (2):
  2[5x - 4y - 2] = 10x - 8y - 4

Langkah 2: Sederhanakan bagian dalam kurung kedua
  x - (y - 4) = x - y + 4

  Kalikan hasil tersebut dengan pengali luar (-3):
  -3[x - y + 4] = -3x + 3y - 12

Langkah 3: Buka tanda kurung ketiga
  5(y - x) = 5y - 5x

Langkah 4: Gabungkan dan kelompokkan suku sejenis
  S = (10x - 8y - 4) + (-3x + 3y - 12) + (5y - 5x)
  S = (10x - 3x - 5x) + (-8y + 3y + 5y) + (-4 - 12)
  S = 2x + 0y - 16
  S = 2x - 16
\`\`\`

**Bentuk Paling Sederhana:**
> **\`S = 2x - 16\`**

---

### b. Menghitung Nilai S untuk x = 4 dan y = 3

Substitusikan nilai \`x = 4\` dan \`y = 3\` ke dalam bentuk sederhana yang telah diperoleh pada bagian (a):

\`\`\`text
S = 2x - 16
S = 2(4) - 16
S = 8 - 16
S = -8
\`\`\`

> **Hasil:** Nilai skor evaluasi adalah **\`-8\`** (skor negatif).

---

### c. Evaluasi Kebenaran Pernyataan Koefisien y Adalah Nol

**Pernyataan:** Anggota tim multimedia menyatakan bahwa koefisien \`y\` pada bentuk sederhana \`S\` adalah nol sehingga perubahan jumlah efek suara tidak memengaruhi skor evaluasi.

**Evaluasi Matematis:**
1. Pada hasil penyederhanaan aljabar: \`S = 2x + 0y - 16 = 2x - 16\`.
2. Suku yang memuat variabel \`y\` memiliki koefisien \`0\` (\`0 × y = 0\`).
3. Nilai turunan parsial terhadap \`y\` adalah \`∂S/∂y = 0\`, yang membuktikan bahwa nilai \`S\` independen (tidak bergantung) terhadap besaran variabel \`y\`.
4. Berapapun nilai \`y\` yang dimasukkan (misalnya \`y = 0\`, \`y = 10\`, atau \`y = 100\`), nilai \`S\` hanya akan ditentukan secara eksklusif oleh nilai \`x\`.

> **Kesimpulan:** Pernyataan anggota tim multimedia tersebut **BENAR**, karena koefisien variabel \`y\` terbukti bernilai \`0\` sehingga efek suara tidak memberikan kontribusi sama sekali terhadap skor akhir evaluasi.

---

## Soal 2. Fungsi Linear (Analisis Biaya Ekspedisi Logistik)

![Teks Resmi Soal 2: Fungsi Linear Biaya Pengiriman Ekspedisi](/images/matdas/soal-2-fungsi-linear.png)

Sebuah perusahaan teknologi akan memilih jasa pengiriman perangkat elektronik dari dua perusahaan ekspedisi berdasarkan berat barang \`x\` (dalam kg, dengan \`x ≥ 0\`).

| Parameter Biaya | Perusahaan Ekspedisi A | Perusahaan Ekspedisi B |
| :--- | :--- | :--- |
| **Biaya Administrasi Tetap** | Rp47.500 | Rp17.500 |
| **Tarif Variabel per Kilogram** | Rp6.500 / kg | Rp10.500 / kg |
| **Bentuk Karakteristik** | Biaya awal tinggi, tarif per kg rendah | Biaya awal rendah, tarif per kg tinggi |

---

### a. Menyusun Fungsi Biaya Pengiriman Kedua Perusahaan

Berdasarkan struktur tarif linear \`f(x) = Biaya Tetap + (Tarif per kg × Berat)\`:

\`\`\`text
1. Fungsi Biaya Perusahaan A:
   f_A(x) = 47.500 + 6.500x

2. Fungsi Biaya Perusahaan B:
   f_B(x) = 17.500 + 10.500x
\`\`\`

---

### b. Menentukan Berat Barang Ketika Biaya Kedua Perusahaan Sama

Biaya kedua perusahaan bernilai sama saat \`f_A(x) = f_B(x)\` (titik ekuilibrium / break-even point):

\`\`\`text
  f_A(x) = f_B(x)
  47.500 + 6.500x = 17.500 + 10.500x
  47.500 - 17.500 = 10.500x - 6.500x
           30.000 = 4.000x
                x = 30.000 / 4.000
                x = 7,5 kg
\`\`\`

Menghitung biaya pengiriman pada berat impas (\`x = 7,5 kg\`):
\`\`\`text
f_A(7,5) = 47.500 + 6.500(7,5)
         = 47.500 + 48.750
         = Rp96.250

Uji pada Perusahaan B:
f_B(7,5) = 17.500 + 10.500(7,5)
         = 17.500 + 78.750
         = Rp96.250  (Sama / Konsisten)
\`\`\`

> **Jawaban:** Biaya kedua perusahaan tepat sama ketika berat barang mencapai **\`7,5 kg\`**, dengan total biaya pengiriman sebesar **\`Rp96.250\`**.

---

### c. Perhitungan Biaya untuk 5 kg dan 16 kg Serta Analisis Kehematan

#### 1. Untuk Berat Barang x = 5 kg:
\`\`\`text
Perusahaan A: f_A(5) = 47.500 + 6.500(5)  = 47.500 + 32.500 = Rp80.000
Perusahaan B: f_B(5) = 17.500 + 10.500(5) = 17.500 + 52.500 = Rp70.000
\`\`\`
- **Selisih Biaya:** \`Rp80.000 - Rp70.000 = Rp10.000\`
- **Pilihan Paling Hemat:** **Perusahaan B** (lebih hemat Rp10.000).

#### 2. Untuk Berat Barang x = 16 kg:
\`\`\`text
Perusahaan A: f_A(16) = 47.500 + 6.500(16)  = 47.500 + 104.000 = Rp151.500
Perusahaan B: f_B(16) = 17.500 + 10.500(16) = 17.500 + 168.000 = Rp185.500
\`\`\`
- **Selisih Biaya:** \`Rp185.500 - Rp151.500 = Rp34.000\`
- **Pilihan Paling Hemat:** **Perusahaan A** (lebih hemat Rp34.000).

#### Kaitan dengan Hasil Titik Impas (b):
Titik potong grafik kedua fungsi biaya terletak pada \`x = 7,5 kg\`.
1. **Daerah Kiri Titik Impas (\`0 ≤ x < 7,5 kg\`):**
   Fungsi \`f_B(x) < f_A(x)\`. Untuk paket-paket ringan (seperti 5 kg), beban biaya administrasi tetap Perusahaan B yang sangat kecil (Rp17.500) mendominasi, sehingga **Perusahaan B jauh lebih menguntungkan**.
2. **Daerah Kanan Titik Impas (\`x > 7,5 kg\`):**
   Fungsi \`f_A(x) < f_B(x)\`. Untuk paket-paket berat (seperti 16 kg), tarif variabel Perusahaan A yang jauh lebih murah (Rp6.500/kg vs Rp10.500/kg) mampu mengompensasi biaya awalnya, sehingga **Perusahaan A jauh lebih hemat**.

---

## Soal 3. Fungsi Linear (Pemodelan Biaya Percetakan Modul Seminar)

![Teks Resmi Soal 3: Fungsi Linear Percetakan Modul](/images/matdas/soal-3-fungsi-linear.png)

Panitia seminar mahasiswa Teknik Informatika akan mencetak modul pelatihan bagi peserta dengan \`x\` menyatakan banyaknya modul (\`x ∈ ℤ, x ≥ 0\`).

| Ketentuan Biaya | Percetakan A | Percetakan B |
| :--- | :--- | :--- |
| **Biaya Persiapan Cetak (1 kali)** | Rp60.000 | Rp24.000 |
| **Biaya Cetak per Modul** | Rp4.000 / modul | Rp7.000 / modul |

---

### a. Menyusun Fungsi Biaya Total Pencetakan (4 poin)

\`\`\`text
1. Fungsi Biaya Percetakan A:
   B_A(x) = 60.000 + 4.000x

2. Fungsi Biaya Percetakan B:
   B_B(x) = 24.000 + 7.000x
\`\`\`

---

### b. Menentukan Banyaknya Modul Saat Biaya Sama (6 poin)

Samakan kedua persamaan biaya \`B_A(x) = B_B(x)\`:

\`\`\`text
  B_A(x) = B_B(x)
  60.000 + 4.000x = 24.000 + 7.000x
  60.000 - 24.000 = 7.000x - 4.000x
           36.000 = 3.000x
                x = 36.000 / 3.000
                x = 12 modul
\`\`\`

Menghitung total biaya pada saat jumlah pesanan 12 modul:
\`\`\`text
B_A(12) = 60.000 + 4.000(12)
        = 60.000 + 48.000
        = Rp108.000

Uji pada Percetakan B:
B_B(12) = 24.000 + 7.000(12)
        = 24.000 + 84.000
        = Rp108.000  (Sesuai)
\`\`\`

> **Jawaban:** Biaya kedua percetakan tepat bernilai sama saat mencetak **\`12 modul\`**, dengan total biaya sebesar **\`Rp108.000\`**.

---

### c. Menghitung Biaya untuk 8 Modul dan 20 Modul Serta Analisisnya (7 poin)

#### 1. Untuk Pesanan Sebanyak 8 Modul:
\`\`\`text
Percetakan A: B_A(8) = 60.000 + 4.000(8)  = 60.000 + 32.000 = Rp92.000
Percetakan B: B_B(8) = 24.000 + 7.000(8)  = 24.000 + 56.000 = Rp80.000
\`\`\`
- **Pilihan Paling Hemat:** **Percetakan B** (lebih hemat Rp12.000).

#### 2. Untuk Pesanan Sebanyak 20 Modul:
\`\`\`text
Percetakan A: B_A(20) = 60.000 + 4.000(20) = 60.000 + 80.000  = Rp140.000
Percetakan B: B_B(20) = 24.000 + 7.000(20) = 24.000 + 140.000 = Rp164.000
\`\`\`
- **Pilihan Paling Hemat:** **Percetakan A** (lebih hemat Rp24.000).

#### Kaitan dengan Titik Impas (b):
- Jumlah pesanan **8 modul** berada pada domain \`x < 12\`. Pada domain ini, Percetakan B unggul karena panitia belum mencetak cukup banyak modul untuk menutupi biaya setup Percetakan A yang mahal (Rp60.000).
- Jumlah pesanan **20 modul** berada pada domain \`x > 12\`. Pada skala pesanan yang lebih banyak, selisih tarif per modul yang lebih hemat Rp3.000 pada Percetakan A mampu melampaui biaya persiapan awal, sehingga **Percetakan A lebih ekonomis**.

---

## Soal 4. Pertidaksamaan Kuadrat (Uji Tanda Parameter Algoritma)

![Teks Resmi Soal 4: Pertidaksamaan Kuadrat](/images/matdas/soal-4-pertidaksamaan-kuadrat.png)

Dalam pengujian kinerja suatu algoritma komputasi, parameter \`x\` harus memenuhi pertidaksamaan kuadrat:
\`\`\`text
6x² - 17x - 14 ≥ 0    (dengan x ∈ ℝ)
\`\`\`

Dua mahasiswa memberikan kesimpulan berbeda:
- **Mahasiswa A:** \`x ≤ -2/3  atau  x ≥ 7/2\`
- **Mahasiswa B:** \`-2/3 ≤ x ≤ 7/2\`

---

### a. Faktorisasi & Penentuan Interval dengan Uji Tanda

#### Langkah 1: Faktorisasi Bentuk Kuadrat (Metode a × c)
Bentuk persamaan: \`a = 6\`, \`b = -17\`, \`c = -14\`.
Nilai \`a × c = 6 × (-14) = -84\`.
Cari dua bilangan yang hasil kalinya \`-84\` dan jumlahnya \`-17\`:
- Bilangan tersebut adalah **\`-21\`** dan **\`+4\`** (\`-21 × 4 = -84\`, \`-21 + 4 = -17\`).

Pecah suku tengah:
\`\`\`text
6x² - 17x - 14 = 6x² - 21x + 4x - 14
               = 3x(2x - 7) + 2(2x - 7)
               = (3x + 2)(2x - 7)
\`\`\`

#### Langkah 2: Menentukan Titik Pembuat Nol (Akar Batas)
\`\`\`text
(3x + 2)(2x - 7) = 0
• 3x + 2 = 0  ➔  x₁ = -2/3
• 2x - 7 = 0  ➔  x₂ = 7/2 = 3,5
\`\`\`

#### Langkah 3: Uji Tanda Interval pada Garis Bilangan
Titik batas \`-2/3\` dan \`7/2\` membagi garis bilangan real menjadi 3 interval pengujian:

| Interval | Titik Uji (x) | Perhitungan Nilai (3x + 2)(2x - 7) | Tanda | Keterangan |
| :--- | :--- | :--- | :---: | :--- |
| **Kiri (\`x < -2/3\`)** | \`x = -1\` | \`(3(-1) + 2)(2(-1) - 7) = (-1)(-9) = +9\` | **\`+\`** (Positif) | Memenuhi \`≥ 0\` |
| **Tengah (\`-2/3 < x < 7/2\`)** | \`x = 0\` | \`(3(0) + 2)(2(0) - 7) = (2)(-7) = -14\` | **\`-\`** (Negatif) | Tidak memenuhi |
| **Kanan (\`x > 7/2\`)** | \`x = 4\` | \`(3(4) + 2)(2(4) - 7) = (14)(1) = +14\` | **\`+\`** (Positif) | Memenuhi \`≥ 0\` |

Karena pertidaksamaan bertanda **\`≥ 0\` (lebih dari atau sama dengan nol)**, maka interval yang dipilih adalah daerah bertanda **POSITIF (+)** beserta kedua titik batasnya.

---

### b. Evaluasi Kesimpulan Mahasiswa & Analisis Kesalahan

- **Mahasiswa yang Memberikan Kesimpulan Benar:** **Mahasiswa A**
  Kesimpulan Mahasiswa A adalah \`x ≤ -2/3  atau  x ≥ 7/2\`. Ini tepat sesuai dengan daerah uji bertanda positif pada pertidaksamaan \`≥ 0\`.
  
- **Penjelasan Kesalahan Matematis Mahasiswa B:**
  Mahasiswa B menyimpulkan \`-2/3 ≤ x ≤ 7/2\`. Kesalahan mendasarnya adalah Mahasiswa B mengambil **interval daerah bernilai negatif (\`≤ 0\`)**, yaitu daerah di antara dua akar. 
  Secara grafis, kurva fungsi kuadrat \`f(x) = 6x² - 17x - 14\` memiliki koefisien \`a = 6 > 0\`, yang artinya parabola **terbuka ke atas**. Oleh karena itu:
  - Nilai fungsi bernilai negatif di antara akar-akarnya (\`-2/3 < x < 7/2\`).
  - Nilai fungsi bernilai positif di luar akar-akarnya (\`x ≤ -2/3\` atau \`x ≥ 7/2\`).
  Kesimpulan Mahasiswa B hanya valid apabila tanda pertidaksamaannya adalah \`6x² - 17x - 14 ≤ 0\`.

---

### c. Sajian Himpunan Penyelesaian pada Garis Bilangan

![Garis Bilangan dan Interval Uji Tanda Soal 4](/images/matdas/soal-4-garis-bilangan.png)

\`\`\`text
Himpunan Penyelesaian (HP):
HP = { x | x ≤ -2/3  atau  x ≥ 7/2,  x ∈ ℝ }

Notasi Interval:
HP = (-∞, -2/3] ∪ [7/2, +∞)
\`\`\`

**Karakteristik Garis Bilangan:**
1. Titik batas \`x = -2/3\` dan \`x = 7/2\` ditandai dengan **bulatan penuh (solid circle)** karena tanda pertidaksamaan memuat relasi sama dengan (\`≥\`).
2. Arsiran himpunan solusi mengarah ke **sebelah kiri** dari \`-2/3\` dan ke **sebelah kanan** dari \`7/2\`.

---

## Soal 5. Sistem Persamaan Linear Dua Variabel (SPLDV)

![Teks Resmi Soal 5: SPLDV Pengadaan Perangkat Komputer](/images/matdas/soal-5-spldv.png)

Sebuah perusahaan teknologi informasi melakukan pengadaan dua jenis perangkat:
- \`x\` = harga satu unit monitor (dalam rupiah)
- \`y\` = harga satu unit printer (dalam rupiah)

---

### a. Menyusun Model Matematika Persamaan Linear

Berdasarkan riwayat transaksi pembelian:
1. Transaksi 1: Pembelian 4 monitor dan 3 printer seharga Rp8.600.000
   \`\`\`text
   4x + 3y = 8.600.000   ... Persamaan (1)
   \`\`\`
2. Transaksi 2: Pembelian 3 monitor dan 5 printer seharga Rp9.200.000
   \`\`\`text
   3x + 5y = 9.200.000   ... Persamaan (2)
   \`\`\`

---

### b. Menentukan Nilai x dan y Menggunakan Metode Eliminasi & Substitusi

#### Langkah 1: Eliminasi Variabel x
Samakan koefisien \`x\` dengan mengalikan Persamaan (1) dengan 3 dan Persamaan (2) dengan 4:

\`\`\`text
(1) × 3 ➔ 12x +  9y = 25.800.000
(2) × 4 ➔ 12x + 20y = 36.800.000
--------------------------------- - (Kurangkan)
             -11y = -11.000.000
                y = -11.000.000 / -11
                y = 1.000.000
\`\`\`
> Diperoleh harga 1 unit printer: **\`y = Rp1.000.000\`**

#### Langkah 2: Substitusi Nilai y ke Persamaan (1)
\`\`\`text
  4x + 3y = 8.600.000
  4x + 3(1.000.000) = 8.600.000
  4x + 3.000.000    = 8.600.000
  4x                = 8.600.000 - 3.000.000
  4x                = 5.600.000
   x                = 5.600.000 / 4
   x                = 1.400.000
\`\`\`
> Diperoleh harga 1 unit monitor: **\`x = Rp1.400.000\`**

#### Verifikasi pada Persamaan (2):
\`3(1.400.000) + 5(1.000.000) = 4.200.000 + 5.000.000 = Rp9.200.000\` *(Tepat)*

---

### c. Menghitung Total Biaya Pembelian Baru & Sisa Anggaran

Perusahaan berencana membeli **5 monitor** dan **4 printer** dengan pagu anggaran **Rp12.000.000**.

\`\`\`text
1. Total Biaya Pembelian:
   Biaya = 5x + 4y
   Biaya = 5(1.400.000) + 4(1.000.000)
   Biaya = 7.000.000 + 4.000.000
   Biaya = Rp11.000.000

2. Sisa Anggaran:
   Sisa = Anggaran Tersedia - Total Biaya
   Sisa = 12.000.000 - 11.000.000
   Sisa = Rp1.000.000
\`\`\`

> **Hasil:** Total pengeluaran adalah **\`Rp11.000.000\`** dan sisa anggaran operasional perusahaan adalah **\`Rp1.000.000\`**.

---

## Soal 6. Sistem Persamaan Linear Tiga Variabel (SPLTV)

![Teks Resmi Soal 6: SPLTV Ukuran Berkas Konten Multimedia](/images/matdas/soal-6-spltv.png)

Aplikasi pengolah konten digital memadukan tiga komponen:
- \`x\` = ukuran 1 berkas gambar (MB)
- \`y\` = ukuran 1 berkas audio (MB)
- \`z\` = ukuran 1 berkas animasi (MB)

---

### a. Menyusun Tiga Persamaan Linear

Berdasarkan hasil tiga kali pengujian integrasi berkas:
\`\`\`text
Pengujian I   ➔  3x + 2y +  z = 55   ... (Persamaan 1)
Pengujian II  ➔  2x + 3y + 2z = 65   ... (Persamaan 2)
Pengujian III ➔  4x +  y + 3z = 90   ... (Persamaan 3)
\`\`\`

---

### b. Menyelesaikan Nilai x, y, dan z

Gunakan kombinasi metode substitusi dan eliminasi:

#### Langkah 1: Nyatakan z dalam x dan y dari Persamaan (1)
\`\`\`text
z = 55 - 3x - 2y   ... (Persamaan 1a)
\`\`\`

#### Langkah 2: Substitusikan z ke Persamaan (2)
\`\`\`text
2x + 3y + 2(55 - 3x - 2y) = 65
2x + 3y + 110 - 6x - 4y   = 65
-4x - y + 110             = 65
-4x - y                   = 65 - 110
-4x - y                   = -45
 4x + y                   = 45        ... (Persamaan 4)
\`\`\`

#### Langkah 3: Substitusikan z ke Persamaan (3)
\`\`\`text
4x + y + 3(55 - 3x - 2y) = 90
4x + y + 165 - 9x - 6y   = 90
-5x - 5y + 165           = 90
-5x - 5y                 = 90 - 165
-5x - 5y                 = -75
\`\`\`
Bagi kedua ruas dengan \`-5\`:
\`\`\`text
x + y = 15   ... (Persamaan 5)
\`\`\`

#### Langkah 4: Eliminasi y dari Persamaan (4) dan Persamaan (5)
\`\`\`text
  4x + y = 45   (Persamaan 4)
   x + y = 15   (Persamaan 5)
  ----------- - (Kurangkan)
      3x = 30
       x = 10 MB
\`\`\`

#### Langkah 5: Cari Nilai y dan z
Substitusi \`x = 10\` ke Persamaan (5):
\`\`\`text
x + y = 15  ➔  10 + y = 15  ➔  y = 5 MB
\`\`\`

Substitusi \`x = 10\` dan \`y = 5\` ke Persamaan (1a):
\`\`\`text
z = 55 - 3(10) - 2(5)
z = 55 - 30 - 10
z = 15 MB
\`\`\`

#### Uji Validasi ke Ketiga Persamaan:
- Persamaan 1: \`3(10) + 2(5) + 15 = 30 + 10 + 15 = 55\` *(Valid)*
- Persamaan 2: \`2(10) + 3(5) + 2(15) = 20 + 15 + 30 = 65\` *(Valid)*
- Persamaan 3: \`4(10) + 1(5) + 3(15) = 40 + 5 + 45 = 90\` *(Valid)*

> **Hasil:**
> - Ukuran 1 berkas gambar (\`x\`) = **\`10 MB\`**
> - Ukuran 1 berkas audio (\`y\`) = **\`5 MB\`**
> - Ukuran 1 berkas animasi (\`z\`) = **\`15 MB\`**

---

## Soal 7. Sistem Persamaan Linear Tiga Variabel (SPLTV)

![Teks Resmi Soal 7: SPLTV Paket Layanan Jasa TI](/images/matdas/soal-7-spltv.png)

Sebuah penyedia jasa teknologi informasi menawarkan tiga layanan:
- \`x\` = biaya 1 kali instalasi perangkat lunak (dalam **puluhan ribu rupiah**)
- \`y\` = biaya 1 kali konfigurasi jaringan (dalam **puluhan ribu rupiah**)
- \`z\` = biaya 1 kali pemeliharaan komputer (dalam **puluhan ribu rupiah**)

---

### a. Menyusun Model Matematika SPLTV

Berdasarkan tarif ketiga paket (satuan diubah ke puluhan ribu rupiah):
- Rp390.000 = \`39\` puluhan ribu
- Rp450.000 = \`45\` puluhan ribu
- Rp430.000 = \`43\` puluhan ribu

\`\`\`text
Paket I   ➔  2x + 3y +  z = 39   ... (Persamaan 1)
Paket II  ➔  3x + 2y + 2z = 45   ... (Persamaan 2)
Paket III ➔  4x +  y + 2z = 43   ... (Persamaan 3)
\`\`\`

---

### b. Menentukan Nilai x, y, dan z

Perhatikan bahwa koefisien \`z\` pada Persamaan (2) dan Persamaan (3) sudah bernilai sama, yaitu \`2\`.

#### Langkah 1: Eliminasi Variabel z dari Persamaan (2) dan Persamaan (3)
\`\`\`text
  3x + 2y + 2z = 45   (Persamaan 2)
  4x +  y + 2z = 43   (Persamaan 3)
  ----------------- - (Kurangkan)
    -x + y     = 2
             y = x + 2   ... (Persamaan 4)
\`\`\`

#### Langkah 2: Eliminasi Variabel z dari Persamaan (1) dan Persamaan (2)
Kalikan Persamaan (1) dengan 2, lalu kurangkan dengan Persamaan (2):
\`\`\`text
  (1) × 2 ➔ 4x + 6y + 2z = 78
  (2)     ➔ 3x + 2y + 2z = 45
  ---------------------------- - (Kurangkan)
             x + 4y      = 33   ... (Persamaan 5)
\`\`\`

#### Langkah 3: Substitusi Persamaan (4) ke Persamaan (5)
\`\`\`text
  x + 4(x + 2) = 33
  x + 4x + 8   = 33
  5x + 8       = 33
  5x           = 33 - 8
  5x           = 25
   x           = 5
\`\`\`

#### Langkah 4: Tentukan Nilai y dan z
Substitusikan \`x = 5\` ke Persamaan (4):
\`\`\`text
y = x + 2  ➔  y = 5 + 2 = 7
\`\`\`

Substitusikan \`x = 5\` dan \`y = 7\` ke Persamaan (1):
\`\`\`text
2x + 3y + z = 39
2(5) + 3(7) + z = 39
10 + 21 + z     = 39
31 + z          = 39
z               = 39 - 31
z               = 8
\`\`\`

#### Konversi ke Nilai Nominal Rupiah:
| Layanan Teknologi Informasi | Variabel | Nilai (Puluhan Ribu) | Tarif Nominal |
| :--- | :---: | :---: | :--- |
| **Instalasi Perangkat Lunak** | \`x\` | 5 | **Rp50.000** |
| **Konfigurasi Jaringan** | \`y\` | 7 | **Rp70.000** |
| **Pemeliharaan Komputer** | \`z\` | 8 | **Rp80.000** |

---

## Soal 8. Eksponen dan Bentuk Akar (Aplikasi Grafika Komputer)

![Teks Resmi Soal 8: Eksponen dan Operasi Bentuk Akar](/images/matdas/soal-8-eksponen-akar.png)

Dalam perancangan grafika komputer dan pengolahan citra digital (\`a ≠ 0, b ≠ 0\`):

\`\`\`text
Ekspresi P:
     [(a⁻⁴ b³)³ (a⁵ b⁻²)² (a⁻² b⁴)]
P = --------------------------------
             [(a⁻³ b²)²]

Ekspresi Q:
Q = 6√147 - 5√108 + 4√75 - 3√192 + 2√48
\`\`\`

---

### a. Menyederhanakan Ekspresi P dengan Pangkat Positif

Gunakan sifat-sifat dasar eksponen:
1. \`(x^m)^n = x^(m × n)\`
2. \`x^m × x^n = x^(m + n)\`
3. \`x^m / x^n = x^(m - n)\`

\`\`\`text
Langkah 1: Sederhanakan pangkat di dalam pembilang
• (a⁻⁴ b³)³ = a^(-4×3) b^(3×3) = a⁻¹² b⁹
• (a⁵ b⁻²)² = a^(5×2) b^(-2×2) = a¹⁰ b⁻⁴
• (a⁻² b⁴)¹ = a⁻² b⁴

Langkah 2: Kalikan seluruh suku pada pembilang
Pembilang = (a⁻¹² b⁹) × (a¹⁰ b⁻⁴) × (a⁻² b⁴)
• Basis a: a^(-12 + 10 - 2) = a⁻⁴
• Basis b: b^(9 - 4 + 4)    = b⁹
➔ Pembilang = a⁻⁴ b⁹

Langkah 3: Sederhanakan pangkat pada penyebut
Penyebut = (a⁻³ b²)² = a^(-3×2) b^(2×2) = a⁻⁶ b⁴

Langkah 4: Bagi pembilang dengan penyebut
P = (a⁻⁴ b⁹) / (a⁻⁶ b⁴)
• Basis a: a^(-4 - (-6)) = a^(-4 + 6) = a²
• Basis b: b^(9 - 4)                 = b⁵
\`\`\`

> **Bentuk Sederhana:**
> **\`P = a²b⁵\`**

---

### b. Evaluasi Hasil Mahasiswa & Analisis Kesalahan

Diberikan hasil kedua mahasiswa:
- **Mahasiswa A:** \`P = a²b⁵\`
- **Mahasiswa B:** \`P = b⁵ / a²\`

**Evaluasi Kebenaran:**
- **Mahasiswa A adalah BENAR**, karena perhitungannya sesuai dengan hukum operasi pembagian eksponen.
- **Mahasiswa B adalah SALAH.**

**Penjelasan Kesalahan Mahasiswa B:**
Mahasiswa B menuliskan \`P = b⁵ / a² = a⁻²b⁵\`. Kesalahannya terletak pada operasi pembagian pangkat basis \`a\`:
- Perhitungan yang benar: \`a⁻⁴ / a⁻⁶ = a^(-4 - (-6)) = a^(-4 + 6) = a²\`.
- Mahasiswa B kemungkinan mengabaikan tanda negatif di penyebut sehingga menghitung \`-4 - 6 = -10\` atau keliru mengurangkan pangkat menjadi \`a⁻²\`. Jika pangkat \`a\` berada di penyebut sebagai \`1/a²\`, nilainya setara dengan \`a⁻²\`, yang jelas tidak sama dengan \`a²\`.

---

### c. Menyederhanakan Ekspresi Bentuk Akar Q

Gunakan sifat penyederhanaan bentuk akar: \`√(m × n) = √m × √n\`, cari faktor kuadrat terbesar (\`3\`):

\`\`\`text
Langkah 1: Faktorkan masing-masing bilangan di bawah tanda akar
• 6√147 = 6√(49 × 3) = 6 × 7√3  =  42√3
• 5√108 = 5√(36 × 3) = 5 × 6√3  =  30√3
• 4√75  = 4√(25 × 3) = 4 × 5√3  =  20√3
• 3√192 = 3√(64 × 3) = 3 × 8√3  =  24√3
• 2√48  = 2√(16 × 3) = 2 × 4√3  =   8√3

Langkah 2: Gabungkan seluruh suku sejenis (akar 3)
Q = 42√3 - 30√3 + 20√3 - 24√3 + 8√3
Q = (42 - 30 + 20 - 24 + 8)√3
Q = (12 + 20 - 24 + 8)√3
Q = (32 - 24 + 8)√3
Q = (8 + 8)√3
Q = 16√3
\`\`\`

> **Bentuk Paling Sederhana:**
> **\`Q = 16√3\`**

---

## Ringkasan Konsep Kunci Sukses Ujian

| Materi Ujian | Kaidah & Rumus Kritis | Tips Pengerjaan Terbukti |
| :--- | :--- | :--- |
| **Operasi Aljabar** | \`k(ax + by) = kax + kby\` (Distributif) | Buka kurung terdalam terlebih dahulu, hati-hati tanda minus di depan kurung, kelompokkan suku sejenis \`x\`, \`y\`, dan konstanta. |
| **Fungsi Linear** | \`f(x) = Biaya Tetap + (Tarif × x)\` | Cari titik impas \`f_A(x) = f_B(x)\` untuk mengetahui ambang batas efisiensi kuantitas pemesanan. |
| **Pertidaksamaan Kuadrat** | \`ax² + bx + c ≥ 0\` | Cari pembuat nol via faktorisasi, buat 3 interval pada garis bilangan, uji satu titik uji per interval. Jika \`≥ 0\`, pilih daerah bertanda **positif (+)**. |
| **SPLDV & SPLTV** | Eliminasi & Substitusi Sistematis | Pada SPLTV, pilih satu variabel termudah untuk dieliminasi dari dua pasangan persamaan sehingga tereduksi menjadi SPLDV 2 variabel. |
| **Eksponen & Pangkat** | \`a^m / a^n = a^(m - n)\` | Hati-hati dengan pengurangan bilangan negatif: \`a^(-4) / a^(-6) = a^(-4 - (-6)) = a^2\`. |
| **Bentuk Akar** | \`√(k² × p) = k√p\` | Keluarkan bilangan kuadrat sempurna (4, 9, 16, 25, 36, 49, 64, dst.) dari bawah tanda akar, lalu jumlahkan koefisien akar sejenis. |
`
  }
];

module.exports = matdasExplanations;
