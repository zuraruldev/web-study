const explanations = [
  {
    id: 'exp_alpro_modul1',
    subject_slug: 'alpro',
    chapter_order: 1,
    topic_title: 'Modul I: Konsep Dasar Algoritma & Pengenalan Bahasa Pemrograman PHP',
    content_markdown: `# Modul I: Konsep Dasar Algoritma & Pengenalan Bahasa Pemrograman PHP

## 1. Definisi & Hakikat Algoritma Komputasi
Algoritma adalah urutan langkah-langkah logis dan sistematis yang disusun secara terstruktur untuk menyelesaikan suatu permasalahan komputasi. Kata algoritma berasal dari nama ilmuwan Muslim terkemuka, **Muhammad ibn Musa al-Khwarizmi**.

### Karakteristik Pokok Algoritma (Donald E. Knuth)
Agar suatu prosedur dapat dikategorikan sebagai algoritma yang baik, prosedur tersebut wajib memenuhi 5 ciri esensial:

| Ciri Algoritma | Istilah Asing | Penjelasan Teoritis & Syarat Mutlak |
| :--- | :--- | :--- |
| **Keterbatasan** | *Finiteness* | Algoritma harus berhenti (*terminate*) setelah memproses sejumlah langkah terbatas. Algoritma tidak boleh mengalami *infinite loop*. |
| **Kepastian** | *Definiteness* | Setiap langkah instruksi harus didefinisikan secara presisi, jelas, tegas, dan tidak menimbulkan interpretasi ganda (*unambiguous*). |
| **Masukan** | *Input* | Memiliki nol atau lebih besaran nilai masukan yang diberikan dari luar sebelum algoritma mulai dijalankan. |
| **Keluaran** | *Output* | Memiliki satu atau lebih besaran keluaran yang merupakan solusi nyata atas masalah yang dipecahkan. |
| **Efektivitas** | *Effectiveness* | Setiap instruksi harus cukup sederhana sehingga dapat dikerjakan oleh mesin atau manusia dalam waktu yang wajar dan realistis. |

---

## 2. Pengenalan Bahasa Pemrograman PHP
**PHP** (*Hypertext Preprocessor*) adalah bahasa pemrograman *scripting* yang berjalan di sisi server (*server-side*).

### Karakteristik Utama PHP
1. **Server-Side Execution**: Kode PHP diproses dan dieksekusi di server web (Apache/Nginx dengan PHP-FPM). Hasil keluaran yang dikirim ke browser klien hanyalah dokumen murni HTML/CSS/JS.
2. **Syntax Heritage**: Sintaks dasar PHP banyak mengadopsi aturan bahasa pemrograman C, C++, Java, dan Perl.
3. **Loosely / Dynamically Typed**: Variabel tidak perlu dideklarasikan tipe datanya secara eksplisit di awal; PHP secara dinamis mendeteksi tipe data saat nilai diisikan (*type juggling*).
4. **Open Source & Cross-Platform**: Dapat berjalan di atas berbagai sistem operasi (Linux, Windows, macOS).

---

## 3. Sintaks Dasar & Aturan Penulisan PHP

Setiap skrip PHP harus diawali dengan tag pembuka \`<?php\` dan diakhiri dengan tag penutup \`?>\`

\`\`\`php
<?php
// Komentar satu baris menggunakan tanda garis miring ganda
# Komentar satu baris menggunakan tanda pagar (Unix style)
/*
   Komentar multi-baris (blok komentar)
   Sangat berguna untuk dokumentasi fungsi atau penjelasan logika panjang.
*/

echo "<h3>Selamat Datang di Praktikum Algoritma dan Pemrograman!</h3>";
print "<p>Teknik Informatika Politeknik Negeri Cilacap</p>";
?>
\`\`\`

### Aturan Penamaan Variabel & Identifier
- Variabel selalu diawali dengan simbol dollar \`$\` contoh \`$nim\` atau \`$nama_mahasiswa\`
- Karakter pertama setelah tanda \`$\` harus berupa huruf \`a-z\` \`A-Z\` atau garis bawah underscore \`_\`
- **Nama variabel TIDAK BOLEH diawali dengan angka** contoh \`$2semester\` tidak valid dan memicu Parse Error
- Nama variabel bersifat **Case-Sensitive**: variabel \`$nilai\`, \`$Nilai\`, dan \`$NILAI\` dianggap sebagai variabel berbeda
- Setiap baris pernyataan instruksi wajib diakhiri tanda titik koma \`;\`

---

## 4. Perbedaan Output: \`echo\` vs \`print\` vs \`print_r()\`

| Fungsi Output | Nilai Kembalian (*Return*) | Jumlah Argumen | Penggunaan Utama |
| :--- | :--- | :--- | :--- |
| **\`echo\`** | Tidak mengembalikan nilai (\`void\`) | Dapat menerima beberapa parameter string sekaligus | Menampilkan teks atau kode HTML ke peramban dengan performa paling cepat. |
| **\`print\`** | Mengembalikan nilai integer \`1\` | Hanya menerima satu parameter string | Menampilkan teks tunggal; dapat digunakan di dalam ekspresi perbandingan. |
| **\`print_r()\`** | Mengembalikan boolean atau string jika di-return | Menerima variabel koleksi | Menampilkan struktur internal tipe data bentukan (array atau object) untuk debugging. |`
  },
  {
    id: 'exp_alpro_modul2',
    subject_slug: 'alpro',
    chapter_order: 2,
    topic_title: 'Modul II: Mengenal Tipe Data Dasar dan Tipe Data Bentukan (Array & Kalkulator)',
    content_markdown: `# Modul II: Mengenal Tipe Data Dasar dan Tipe Data Bentukan (Array & Kalkulator)

## 1. Klasifikasi Tipe Data dalam PHP
Dalam bahasa PHP, tipe data secara garis besar diklasifikasikan menjadi dua rumpun utama:
1. **Tipe Data Dasar (Skalar / Primitif)**: Hanya dapat menampung satu nilai tunggal dalam satu waktu.
2. **Tipe Data Bentukan (Koleksi / Majemuk)**: Terdiri dari kumpulan tipe data lainnya dalam satu wadah variabel terstruktur.

---

## 2. Rincian Tipe Data Dasar (Skalar)

| Tipe Data | Kata Kunci | Contoh Nilai | Keterangan & Batasan |
| :--- | :--- | :--- | :--- |
| **Integer** | \`int\` / \`integer\` | \`42\`, \`-100\`, \`0\` | Bilangan bulat tanpa koma desimal, mendukung format desimal, heksadesimal (\`0x\`), dan biner (\`0b\`). |
| **Float / Double** | \`float\` / \`real\` | \`3.14159\`, \`-85.75\` | Bilangan pecahan/desimal menggunakan titik (\`.\`) sebagai pemisah fraksional. |
| **String** | \`string\` | \`"Manarul"\`, \`'Cilacap'\` | Rangkaian karakter teks diapit petik ganda (mendukung interpolasi variabel) atau petik tunggal (literal). |
| **Boolean** | \`bool\` | \`TRUE\`, \`FALSE\` | Nilai logika kebenaran, bersifat *case-insensitive* (\`true\` sama dengan \`TRUE\`). |
| **NULL** | \`null\` | \`NULL\` | Tipe data spesial untuk menandai variabel yang belum diisi nilai atau dikosongkan. |

### Script Program 1: \`tipedata-dasar.php\`
\`\`\`php
<?php
// Mendefinisikan berbagai macam tipe data dasar
$nim = "260102025";              // String
$nama = "Arul";                   // String
$umur = 19;                       // Integer
$ipk = 3.85;                      // Float
$is_aktif = true;                 // Boolean
$catatan_khusus = NULL;           // NULL

echo "<h3>Biodata Mahasiswa (Tipe Data Dasar)</h3>";
echo "NIM: " . $nim . "<br>";
echo "Nama: " . $nama . "<br>";
echo "Umur: " . $umur . " tahun<br>";
echo "IPK Semester: " . $ipk . "<br>";
echo "Status Aktif: " . ($is_aktif ? "Ya" : "Tidak") . "<br>";
?>
\`\`\`

---

## 3. Mengenal Tipe Data Bentukan (Array Homogen vs Heterogen)
Tipe data bentukan adalah struktur data yang mampu menyimpan sekumpulan elemen data sekaligus. Di dalam PHP, tipe bentukan yang paling fundamental adalah **Array**.

Berdasarkan keseragaman tipe elemen di dalamnya, array dibedakan menjadi:
1. **Array Homogen**: Seluruh elemen yang tersimpan memiliki tipe data yang **sama/seragam** (misalnya seluruhnya bertipe \`string\`).
2. **Array Heterogen**: Elemen-elemen yang tersimpan memiliki tipe data yang **berbeda-beda / campuran** (misal memuat kombinasi \`integer\`, \`string\`, dan \`float\` dalam satu array).

### Script Program 2: \`tipedata-bentukan.php\` (Sesuai Jobsheet Modul II)
\`\`\`php
<?php
// 1. Ini contoh array dengan tipe homogen (seluruh elemen berupa string)
$larik = array("satu", "dua", "tiga", "empat");

// 2. Ini contoh array dengan tipe heterogen (campuran integer, string, dan float)
$data = array(
    5,
    "enam",
    7.5,
    "delapan"
);

echo "<h3><b>Ini contoh array dengan tipe homogen</b></h3><hr>";
echo "larik[0] = " . $larik[0] . "<br>";
echo "larik[1] = " . $larik[1] . "<br>";
echo "larik[2] = " . $larik[2] . "<br>";
echo "larik[3] = " . $larik[3] . "<br>";

echo "<p><b>Struktur Array larik:</b>";
echo "<pre>";
print_r($larik);
echo "</pre>";
echo "</p>";
echo "<hr>";

echo "<h3><b>Ini contoh array dengan tipe heterogen</b></h3><hr>";
echo "data[0] = " . $data[0] . "<br>";
echo "data[1] = " . $data[1] . "<br>";
echo "data[2] = " . $data[2] . "<br>";
echo "data[3] = " . $data[3] . "<br>";

echo "<p><b>Struktur Array data:</b>";
echo "<pre>";
print_r($data);
echo "</pre>";
echo "</p>";
?>
\`\`\`

### Bedah Kode Baris demi Baris \`tipedata-bentukan.php\`
- **Baris 3**: Deklarasi array homogen \`$larik\`. Indeks secara implisit dimulai dari nol: \`[0] => "satu"\` \`[1] => "dua"\` \`[2] => "tiga"\` \`[3] => "empat"\`
- **Baris 6–8**: Deklarasi array heterogen \`$data\`. Elemen indeks 0 adalah integer \`5\`, indeks 1 adalah string \`"enam"\`, indeks 2 adalah float \`7.5\`, dan indeks 3 adalah string \`"delapan"\`.
- **Baris 11–14 & 24–27**: Mengakses dan mencetak elemen individu array menggunakan notasi kurung siku \`$array[indeks]\`.
- **Baris 16–19 & 29–32**: Tag HTML \`<pre>...</pre>\` (*preformatted text*) berfungsi mempertahankan spasi dan indentasi asli keluaran fungsi \`print_r()\`, sehingga visualisasi struktur pohon array di browser menjadi sangat rapi dan mudah dianalisis.

### Tampilan Output Program di Browser:
\`\`\`
Ini contoh array dengan tipe homogen
------------------------------------------------------------
larik[0] = satu
larik[1] = dua
larik[2] = tiga
larik[3] = empat

Struktur Array larik:
Array
(
    [0] => satu
    [1] => dua
    [2] => tiga
    [3] => empat
)
------------------------------------------------------------
Ini contoh array dengan tipe heterogen
------------------------------------------------------------
data[0] = 5
data[1] = enam
data[2] = 7.5
data[3] = delapan

Struktur Array data:
Array
(
    [0] => 5
    [1] => enam
    [2] => 7.5
    [3] => delapan
)
\`\`\`

---

## 4. Post-Test Modul II: Aplikasi Kalkulator Sederhana (\`kalkulator-sederhana.php\`)
Implementasi notasi algoritma sekuensial perhitungan 4 operasi aritmatika dasar:

\`\`\`php
<?php
// Inisialisasi variabel nilai awal A dan B
$A = 20;
$B = 5;

echo "<h3>Ini adalah aplikasi kalkulator sederhana</h3>";
echo "---------------------------------------<br>";
echo "Nilai awal A dan B:<br>";
echo "Nilai A : " . $A . "<br>";
echo "Nilai B : " . $B . "<br>";
echo "---------------------------------------<br>";

// 1. Operasi Penambahan
$hasil = $A + $B;
echo "1. Penambahan<br>";
echo "Hasil A + B = " . $hasil . "<br>";
echo "---------------------------------------<br>";

// 2. Operasi Pengurangan
$hasil = $A - $B;
echo "2. Pengurangan<br>";
echo "Hasil A - B = " . $hasil . "<br>";
echo "---------------------------------------<br>";

// 3. Operasi Perkalian
$hasil = $A * $B;
echo "3. Perkalian<br>";
echo "Hasil A * B = " . $hasil . "<br>";
echo "---------------------------------------<br>";

// 4. Operasi Pembagian
$hasil = $A / $B;
echo "4. Pembagian<br>";
echo "Hasil A / B = " . $hasil . "<br>";
?>
\`\`\``
  },
  {
    id: 'exp_alpro_modul3',
    subject_slug: 'alpro',
    chapter_order: 3,
    topic_title: 'Modul III: Penyajian Algoritma dengan Flowchart & Pengenalan Struktur Dokumen HTML',
    content_markdown: `# Modul III: Penyajian Algoritma dengan Flowchart & Pengenalan Struktur Dokumen HTML

## 1. Konsep & Pedoman Pembuatan Flowchart
Flowchart (Diagram Alir) adalah penggambaran grafis visual dari langkah-langkah, keputusan logis, dan urutan prosedur instruksi dalam suatu program komputer.

### Pedoman Baku Pembuatan Flowchart
1. **Arah Penggambaran**: Flowchart wajib digambarkan dari halaman **atas ke bawah** (*top-to-bottom*) dan dari **kiri ke kanan** (*left-to-right*).
2. **Kejelasan Aktivitas**: Aktivitas yang digambarkan harus didefinisikan secara presisi dan menggunakan deskripsi kata kerja operasional (contoh: \`MENGHITUNG PAJAK\`, \`BACA DATA\`).
3. **Titik Awal & Akhir Jelas**: Kapan aktivitas dimulai (*Start*) dan berakhir (*End*) harus ditentukan secara eksplisit dengan simbol terminator.
4. **Urutan Logis**: Setiap langkah harus berada pada urutan kronologis yang benar.
5. **Penggunaan Konektor**: Percabangan yang memotong alur atau melompat halaman tidak boleh digambarkan dengan garis silang sembarangan; gunakan simbol **Connector (On-Page)** jika masih satu halaman atau **Off-Page Connector** jika berpindah halaman kerja.
6. **Simbol Standar**: Wajib menggunakan simbol-simbol internasional (ANSI / ISO).

---

## 2. Tabel Simbol Standar Flowchart

| Simbol Visual | Nama Simbol | Fungsi & Aturan Penggunaan |
| :--- | :--- | :--- |
| **Kapsul / Oval** | *Terminator* | Titik awal (*Start/Mulai*) atau akhir (*End/Selesai*) alur program. Tepat satu Start dan minimal satu End. |
| **Persegi Panjang** | *Process* | Operasi komputasi aritmatika, pengolahan data, atau penugasan variabel (misal: \`hasil = A + B\`). |
| **Jajaran Genjang** | *Input / Output (I/O)* | Menerima masukan dari luar (contoh: \`Read(A, B)\`) atau mengeluarkan hasil ke layar/kertas (\`Write(hasil)\`). |
| **Belah Ketupat** | *Decision* | Pengujian kondisi Boolean yang menghasilkan minimal 2 cabang alur alternatif (*Ya/Tidak* atau *True/False*). |
| **Lingkaran Kecil** | *On-Page Connector* | Penghubung alur flowchart yang terputus pada lembar kerja/halaman yang sama. |
| **Segilima Terbalik** | *Off-Page Connector* | Penghubung alur flowchart menuju halaman kerja lain yang terpisah. |
| **Garis Panah** | *Flowline* | Menunjukkan arah aliran jalannya instruksi eksekusi program. |

---

## 3. Pengenalan Bahasa HTML & Struktur Anatomi Dokumen
**HTML** (*HyperText Markup Language*) adalah bahasa markah standar yang menggunakan serangkaian tanda penanda (*tags*) untuk memberitahu web browser bagaimana konten teks, gambar, dan formulir harus ditata dan dirender di layar.

### Struktur Umum Dokumen HTML
\`\`\`html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Judul Halaman Web pada Tab Browser</title>
</head>
<body>
    <h1>Ini Heading Utama Halaman</h1>
    <p>Ini adalah paragraf konten di dalam badan dokumen.</p>
</body>
</html>
\`\`\`

### Bedah Komponen Struktur HTML:
1. **\`<!DOCTYPE html>\`**: Deklarasi penentu standar dokumen, menginformasikan kepada browser bahwa halaman web ini mematuhi standar modern **HTML5**.
2. **\`<html> ... </html>\`**: Elemen akar (*root element*) yang membungkus seluruh elemen halaman web dari awal sampai akhir.
3. **\`<head> ... </head>\`**: Bagian kepala dokumen yang menampung informasi metadata (encoding charset, judul tab browser, tautan file CSS eksternal, skrip JS). Konten di dalam tag head **tidak ditampilkan langsung** di area kanvas halaman web.
4. **\`<title> ... </title>\`**: Menentukan teks judul yang muncul di tab peramban dan judul bookmark.
5. **\`<body> ... </body>\`**: Bagian tubuh dokumen yang memuat seluruh konten visual yang dilihat langsung oleh pengunjung web (teks, gambar, form, tabel, link).`
  },
  {
    id: 'exp_alpro_modul4',
    subject_slug: 'alpro',
    chapter_order: 4,
    topic_title: 'Modul IV: Struktur Kontrol Sekuensial (Sequence) & Studi Kasus Billing Warnet',
    content_markdown: `# Modul IV: Struktur Kontrol Sekuensial (Sequence) & Studi Kasus Billing Warnet

## 1. Konsep Struktur Kontrol Sekuensial
Struktur kontrol sekuensial adalah struktur algoritma paling sederhana dan mendasar di mana sederet instruksi primitif dieksekusi oleh komputer secara berurutan baris demi baris (*sequential step*) sesuai dengan urutan penulisannya dari atas ke bawah.

### Karakteristik Penting Sekuensi:
- Jika terdapat instruksi $1, 2, 3, \dots, n$, maka instruksi akan dieksekusi mulai dari instruksi ke-1, kemudian ke-2, ke-3, hingga ke-$n$.
- Tidak ada lompatan kondisi (*no branching*) maupun pengulangan instruksi (*no looping*).
- **Sensitivitas Urutan**: Terdapat kelompok sekuensi di mana perubahan urutan baris instruksi **akan merusak atau mengubah total hasil akhir program**. Namun ada pula sekuensi independen yang urutannya dapat ditukar tanpa mengubah hasil akhir.

---

## 2. Studi Kasus Praktikum: Perhitungan Biaya Penggunaan Jasa Warnet

### Pseudocode Kasus Billing Warnet
\`\`\`
PROGRAM hitung_billing_warnet
DEKLARASI
    jam_mulai, menit_mulai     : integer
    jam_selesai, menit_selesai : integer
    tarif                      : integer
    lama, biaya                : integer

ALGORITMA
    tarif = 150   // Tarif Rp 150 per menit
    read(jam_mulai, menit_mulai)
    read(jam_selesai, menit_selesai)

    // Konversi jam dan menit ke total menit untuk mencari selisih durasi
    lama = ((jam_selesai * 60) + menit_selesai) - ((jam_mulai * 60) + menit_mulai)
    biaya = lama * tarif

    write("Total biaya: Rp ", biaya)
    write("Lama pemakaian: ", lama, " menit")
\`\`\`

### Implementasi Program PHP: \`billing-warnet.php\`
\`\`\`php
<?php
// 1. Inisialisasi Masukan Waktu Mulai & Selesai
$jam_mulai = 13;
$menit_mulai = 30;

$jam_selesai = 15;
$menit_selesai = 45;

$tarif_per_menit = 150; // Rp 150 / menit

// 2. Pemrosesan Logika Sekuensial
$total_menit_mulai = ($jam_mulai * 60) + $menit_mulai;
$total_menit_selesai = ($jam_selesai * 60) + $menit_selesai;

// Menghitung selisih lama sewa dalam menit
$durasi_menit = $total_menit_selesai - $total_menit_mulai;

// Menghitung total tagihan biaya
$total_biaya = $durasi_menit * $tarif_per_menit;

// Konversi kembali ke format jam dan menit untuk pelaporan ramah pengguna
$durasi_jam = floor($durasi_menit / 60);
$sisa_menit = $durasi_menit % 60;

// 3. Pelaporan Keluaran (Output)
echo "<h3>=== BUKTI TRANSAKSI WARNET CITRA ===</h3>";
echo "Waktu Mulai   : " . sprintf("%02d:%02d", $jam_mulai, $menit_mulai) . "<br>";
echo "Waktu Selesai : " . sprintf("%02d:%02d", $jam_selesai, $menit_selesai) . "<br>";
echo "Lama Pemakaian: " . $durasi_jam . " jam " . $sisa_menit . " menit (" . $durasi_menit . " menit)<br>";
echo "Tarif / Menit : Rp " . number_format($tarif_per_menit, 0, ',', '.') . "<br>";
echo "<hr>";
echo "<b>Total Tagihan : Rp " . number_format($total_biaya, 0, ',', '.') . "</b><br>";
?>
\`\`\`

---

## 3. Analisis Swap Value (Pertukaran Nilai Dua Variabel)
Salah satu implementasi klasik algoritma sekuensial yang kerap diujikan pada UTS adalah penukaran nilai dua variabel tanpa variabel perantara:

\`\`\`php
<?php
$a = 15;
$b = 25;

// Langkah 1: a ditambahkan b
$a = $a + $b; // a = 40, b = 25

// Langkah 2: b diisi a dikurangi b (menghasilkan nilai awal a)
$b = $a - $b; // b = 40 - 25 = 15

// Langkah 3: a diisi a dikurangi b yang baru (menghasilkan nilai awal b)
$a = $a - $b; // a = 40 - 15 = 25

echo "Nilai a sekarang: $a, Nilai b sekarang: $b"; // Output: a=25, b=15
?>
\`\`\``
  },
  {
    id: 'exp_alpro_modul5',
    subject_slug: 'alpro',
    chapter_order: 5,
    topic_title: 'Modul V: Struktur Kontrol Percabangan (Selection IF, IF-ELSE, SWITCH) & Bedah Form nilai-matkul.php',
    content_markdown: `# Modul V: Struktur Kontrol Percabangan (Selection IF, IF-ELSE, SWITCH) & Bedah Form nilai-matkul.php

## 1. Konsep Dasar Struktur Seleksi
Struktur seleksi (percabangan / pengambilan keputusan) adalah struktur kendali program di mana sekumpulan instruksi hanya akan dieksekusi jika kondisi ekspresi logika tertentu terpenuhi (\`TRUE\`).

### Macam-Macam Seleksi dalam PHP:
1. **Statement IF**: Percabangan tunggal, instruksi dieksekusi jika kondisi bernilai benar.
2. **Statement IF-ELSE**: Percabangan ganda, memilih antara blok instruksi jika kondisi benar atau blok alternatif jika salah.
3. **Statement IF-ELSEIF-ELSE**: Percabangan majemuk bertingkat untuk menguji lebih dari dua kondisi secara hierarkis.
4. **Statement SWITCH-CASE**: Percabangan berbasis perbandingan nilai konstan diskrit terhadap suatu ekspresi variabel tunggal.

---

## 2. Bedah Lengkap Kode Praktikum: \`nilai-matkul.php\` (Sesuai Referensi Obsidian)
Program ini mengintegrasikan formulir antarmuka HTML dengan skrip pemrosesan PHP untuk menghitung nilai akhir mahasiswa berdasarkan bobot persentase, menentukan grade huruf, serta memberikan predikat kelulusan dan sapaan yang sesuai.

### A. Struktur Form HTML
\`\`\`html
<form method="POST">
    <label>Nama Mahasiswa:</label><br>
    <input type="text" name="nama" value="Ernawati" required><br><br>

    <label>Jenis Kelamin:</label><br>
    <input type="radio" name="jk" value="L"> Laki-laki (L)
    <input type="radio" name="jk" value="P" checked> Perempuan (P)<br><br>

    <label>Mata Kuliah:</label><br>
    <input type="text" name="matkul" value="Alpro" required><br><br>

    <label>Nilai Lain-lain (40%):</label><br>
    <input type="number" step="any" name="nilai_lain" min="0" max="100" required><br><br>

    <label>Nilai UTS (30%):</label><br>
    <input type="number" step="any" name="uts" min="0" max="100" required><br><br>

    <label>Nilai UAS (30%):</label><br>
    <input type="number" step="any" name="uas" min="0" max="100" required><br><br>

    <input type="submit" name="proses" value="Hitung Nilai">
</form>
\`\`\`

- **\`method="POST"\`**: Mengirimkan data input ke HTTP request body secara aman di balik layar tanpa mengekspos parameter di URL bar.
- **\`name="..."\`**: Kunci asosiatif yang digunakan untuk menangkap data pada superglobal \`$_POST\` di PHP.
- **\`type="radio"\`**: Pilihan eksklusif jenis kelamin (L atau P).
- **\`type="number" step="any"\`**: Memvalidasi input hanya berupa bilangan numerik (termasuk desimal berkoma).

---

### B. Pemrosesan Logika Percabangan PHP
\`\`\`php
<?php
if (isset($_POST['proses'])) {
    // 1. Pengambilan dan Konversi Tipe Data
    $nama = $_POST['nama'];
    $jk = $_POST['jk'];
    $matkul = $_POST['matkul'];
    $nilai_lain = (float)$_POST['nilai_lain'];
    $uts = (float)$_POST['uts'];
    $uas = (float)$_POST['uas'];

    // 2. Logika Seleksi Panggilan Sapaan Berdasarkan Jenis Kelamin
    if (strtoupper($jk) == "L" || strtolower($jk) == "laki-laki") {
        $panggilan = "Mas";
    } elseif (strtoupper($jk) == "P" || strtolower($jk) == "perempuan") {
        $panggilan = "Mba";
    } else {
        $panggilan = "";
    }

    // 3. Perhitungan Nilai Akhir Berdasarkan Bobot Resmi
    // Nilai Lain-lain 40%, UTS 30%, UAS 30%
    $total = (0.40 * $nilai_lain) + (0.30 * $uts) + (0.30 * $uas);

    // 4. Struktur Percabangan Majemuk Penentuan Grade Nilai
    if ($total >= 80 && $total <= 100) {
        $grade = "A";
    } elseif ($total >= 70 && $total < 80) {
        $grade = "B";
    } elseif ($total >= 60 && $total < 70) {
        $grade = "C";
    } elseif ($total >= 50 && $total < 60) {
        $grade = "D";
    } else {
        $grade = "E";
    }

    // 5. Penentuan Status Kelulusan
    if ($grade == "A" || $grade == "B" || $grade == "C") {
        $keterangan = "LULUS";
    } else {
        $keterangan = "TIDAK LULUS";
    }

    // 6. Pencetakan Laporan
    echo "<hr><h3>HASIL PENILAIAN AKADEMIK</h3>";
    echo "Kepada Mahasiswa: <b>$panggilan $nama</b><br>";
    echo "Mata Kuliah: $matkul<br>";
    echo "Total Nilai Angka: <b>" . number_format($total, 2) . "</b><br>";
    echo "Nilai Huruf (Grade): <b>$grade</b><br>";
    echo "Status: <b>$keterangan</b><br>";
}
?>
\`\`\`

---

## 3. Struktur Percabangan \`switch...case\` & Bahaya Fall-Through
Statement \`switch\` mencocokkan variabel terhadap sejumlah konstanta \`case\`. Kata kunci \`break\` wajib dicantumkan pada akhir setiap blok \`case\` untuk mencegah **Fall-Through** (eksekusi meluncur liar ke case berikutnya).

\`\`\`php
<?php
$kodeProdi = "TI";

switch ($kodeProdi) {
    case "TI":
        $namaProdi = "Teknik Informatika";
        break; // Mencegah fall-through
    case "TM":
        $namaProdi = "Teknik Mesin";
        break;
    case "TE":
        $namaProdi = "Teknik Elektro";
        break;
    default:
        $namaProdi = "Program Studi Tidak Terdaftar";
        break;
}

echo "Prodi Anda: " . $namaProdi;
?>
\`\`\``
  },
  {
    id: 'exp_alpro_modul6',
    subject_slug: 'alpro',
    chapter_order: 6,
    topic_title: 'Modul VI: Struktur Kontrol Perulangan (FOR, WHILE, DO-WHILE) & Pola Bersarang Segitiga Bintang',
    content_markdown: `# Modul VI: Struktur Kontrol Perulangan (FOR, WHILE, DO-WHILE) & Pola Bersarang Segitiga Bintang

## 1. Filosofi & Tiga Elemen Kunci Perulangan
Perulangan (*looping / iterasi*) adalah struktur kendali program yang mengontrol berapa kali sekumpulan instruksi harus dieksekusi berulang-ulang tanpa perlu menduplikasi baris kode (*prinsip efisiensi pengkodean*).

Setiap struktur loop wajib memiliki tiga elemen:
1. **Inisialisasi (*variable_inisiasi*)**: Nilai awal variabel pencacah (*counter*).
2. **Kondisi Uji (*kondisi_perulangan*)**: Ekspresi boolean penentu apakah loop berlanjut atau berhenti.
3. **Pembaruan Nilai (*peubah*)**: Operasi *increment* \`$i++\` atau *decrement* \`$i--\`

---

## 2. Perbandingan Tiga Jenis Loop Utama dalam PHP

| Jenis Loop | Tipe Pengujian | Karakteristik Utama | Sintaks Dasar PHP |
| :--- | :--- | :--- | :--- |
| **\`for\`** | *Pre-tested* (di awal) | Digunakan saat **jumlah perulangan sudah diketahui pasti** sebelum loop dijalankan. | \`for ($i = 1; $i <= $n; $i++) { ... }\` |
| **\`while\`** | *Pre-tested* (di awal) | Mengulang selama kondisi bernilai TRUE. Jika dari awal FALSE, **tidak pernah dieksekusi sama sekali (0 kali)**. | \`while ($kondisi) { ...; $i++; }\` |
| **\`do...while\`** | *Post-tested* (di akhir) | Kondisi baru diuji di akhir blok. **Dijamin dieksekusi minimal 1 kali** meski kondisi dari awal bernilai FALSE. | \`do { ...; $i++; } while ($kondisi);\` |

---

## 3. Perulangan Bersarang (Nested Loop) & Analisis Pola

Perulangan bersarang adalah konstruksi di mana sebuah blok perulangan berada di dalam tubuh perulangan lainnya:
- **Loop Luar (*Outer Loop*)**: Mengontrol pergerakan baris (*row*).
- **Loop Dalam (*Inner Loop*)**: Mengontrol pergerakan kolom (*column*) pada baris yang sedang aktif.

### Script 1: Pola Kotak Segiempat (\`perulangan-segiempat.php\`)
\`\`\`php
<?php
$panjang = 5;
$lebar = 4;

for ($baris = 1; $baris <= $lebar; $baris++) {
    for ($kolom = 1; $kolom <= $panjang; $kolom++) {
        echo "* ";
    }
    echo "<br>";
}
?>
\`\`\`
Output:
\`\`\`
* * * * * 
* * * * * 
* * * * * 
* * * * * 
\`\`\`

---

### Script 2: Pola Segitiga Bintang Siku-Siku (\`perulangan-segitiga.php\`)
\`\`\`php
<?php
$tinggi = 5;

for ($i = 1; $i <= $tinggi; $i++) {
    // Loop dalam berjalan sebanyak nilai baris aktif ($i)
    for ($j = 1; $j <= $i; $j++) {
        echo "* ";
    }
    echo "<br>";
}
?>
\`\`\`
Output:
\`\`\`
* 
* * 
* * * 
* * * * 
* * * * * 
\`\`\`

### Tracing Logika Segitiga Bintang:
- Saat \`$i = 1\`: Loop kolom \`$j\` berjalan dari 1 sampai 1 &rarr; mencetak 1 bintang (\`*\`).
- Saat \`$i = 2\`: Loop kolom \`$j\` berjalan dari 1 sampai 2 &rarr; mencetak 2 bintang (\`* *\`).
- Saat \`$i = 3\`: Loop kolom \`$j\` berjalan dari 1 sampai 3 &rarr; mencetak 3 bintang (\`* * *\`).
- Pola berulang hingga baris ke-\`$tinggi\`.

---

## 4. Perintah Lompatan: \`break\` vs \`continue\`

| Perintah | Efek pada Eksekusi Loop | Contoh Kasus |
| :--- | :--- | :--- |
| **\`break\`** | Menghentikan paksa dan **keluar dari seluruh siklus loop** saat itu juga. | Menemukan data yang dicari dalam pencarian array (*early exit*). |
| **\`continue\`** | **Melompati sisa instruksi pada iterasi berjalan** dan langsung meloncat ke iterasi berikutnya. | Melewati bilangan ganjil saat hanya ingin memproses angka genap. |`
  },
  {
    id: 'exp_alpro_modul7',
    subject_slug: 'alpro',
    chapter_order: 7,
    topic_title: 'Modul VII: Pemrograman Modular: Prosedur vs Fungsi, Scope Variabel, & Penanganan Transaksi',
    content_markdown: `# Modul VII: Pemrograman Modular: Prosedur vs Fungsi, Scope Variabel, & Penanganan Transaksi

## 1. Filosofi Pemrograman Modular & Prinsip DRY
Pemrograman modular menerapkan prinsip **Divide and Conquer**: memecah persoalan perangkat lunak yang besar menjadi subprogram-subprogram kecil yang mandiri (*dekomposisi*).

Manfaat arsitektur modular:
- **Reusability**: Subprogram dapat dipanggil berulang kali dari bagian manapun (*Don't Repeat Yourself*).
- **Maintainability**: Pelacakan dan perbaikan bug terlokalisasi di satu subprogram.
- **Abstraksi**: Pengguna modul hanya perlu mengetahui parameter input dan hasil keluaran tanpa harus memahami algoritma internalnya.

---

## 2. Perbedaan Fundamental: Fungsi (*Function*) vs Prosedur (*Procedure*)
Di dalam bahasa PHP, baik fungsi maupun prosedur sama-sama dideklarasikan menggunakan satu kata kunci yang seragam, yaitu \`function\`. Namun secara konseptual ilmu komputer:

| Dimensi Perbandingan | Fungsi (*Function*) | Prosedur (*Procedure*) |
| :--- | :--- | :--- |
| **Nilai Kembalian (*Return Value*)** | **Wajib mengembalikan nilai** ke pemanggilnya melalui pernyataan \`return\`. | **Tidak mengembalikan nilai** (\`void\`). Bekerja melalui *side-effect* (misal langsung mencetak output atau memodifikasi state). |
| **Cara Pemanggilan** | Dapat ditempatkan di dalam ekspresi matematika atau ditampung ke variabel: \`$x = hitung(5) + 10;\` | Dipanggil sebagai pernyataan instruksi yang berdiri sendiri: \`tampilkanNota();\` |
| **Tujuan Utama** | Transformasi data dan menghasilkan nilai kalkulasi matematis. | Menjalankan serangkaian aksi terstruktur (mencetak nota, menyimpan log). |

---

## 3. Bedah Script Program Berdasarkan Referensi Proyek

### A. Prosedur Tanpa Argumen (\`prosedur-nonparameter.php\`)
\`\`\`php
<?php
// Deklarasi prosedur tanpa parameter
function hitung_luas_segitiga() {
    $alas = 10;
    $tinggi = 12;
    $luas = 0.5 * $alas * $tinggi;

    echo "<h3><b>Prosedur Tanpa Argumen</b></h3>";
    echo "<b>Prosedur untuk menghitung Luas Segitiga</b><hr>";
    echo "<i>Hasil Perhitungan :</i><br>";
    echo "Luas Segitiga dengan alas $alas cm dan tinggi $tinggi cm adalah $luas cm";
}

// Pemanggilan prosedur
hitung_luas_segitiga();
?>
\`\`\`

---

### B. Prosedur Dengan Argumen Dinamis (\`prosedur-withparameter.php\`)
\`\`\`php
<?php
// Deklarasi prosedur dengan argumen
function hitung_luas_segitiga_dinamis($alas, $tinggi) {
    $luas = 0.5 * $alas * $tinggi;

    echo "<h3><b>Prosedur Dengan Argumen</b></h3>";
    echo "<b>Prosedur untuk menghitung Luas Segitiga</b><hr>";
    echo "<i>Hasil Perhitungan :</i><br>";
    echo "Luas Segitiga dengan alas $alas cm dan tinggi $tinggi cm adalah $luas cm";
}

// Pemanggilan prosedur dengan passing parameter
hitung_luas_segitiga_dinamis(15, 10);
?>
\`\`\`

---

### C. Pemrosesan Transaksi Belanja & Diskon Bertingkat (\`tugas-output.php\`)
\`\`\`php
<?php
// Mengambil data transaksi dari form input
$customer = $_POST['customer'];
$nama_barang = $_POST['nama_barang'];
$harga = (float)$_POST['harga'];
$jumlah = (int)$_POST['jumlah'];

// Variabel global untuk menampung hasil
$total_belanja = 0;
$diskon = 0;
$total_bayar = 0;

// Prosedur 1: Menghitung total belanja awal
function hitungTotalBelanja($harga, $jumlah) {
    global $total_belanja;
    $total_belanja = $harga * $jumlah;
}

// Prosedur 2: Menghitung diskon bertingkat (Nested IF-ELSE)
function hitungDiskon($total) {
    global $diskon;
    if ($total >= 100000) {
        $diskon = 0.10 * $total; // Diskon 10% jika belanja >= 100 ribu
    } elseif ($total >= 50000) {
        $diskon = 0.05 * $total; // Diskon 5% jika belanja >= 50 ribu
    } else {
        $diskon = 0;
    }
}

// Prosedur 3: Menghitung total bayar akhir
function hitungTotalBayar() {
    global $total_belanja, $diskon, $total_bayar;
    $total_bayar = $total_belanja - $diskon;
}

// Eksekusi prosedur secara sekuensial
hitungTotalBelanja($harga, $jumlah);
hitungDiskon($total_belanja);
hitungTotalBayar();

echo "<h3>NOTA TRANSAKSI PEMBELIAN</h3><hr>";
echo "Pelanggan     : " . $customer . "<br>";
echo "Nama Barang   : " . $nama_barang . "<br>";
echo "Total Belanja : Rp " . number_format($total_belanja, 0, ',', '.') . "<br>";
echo "Potongan Diskon : Rp " . number_format($diskon, 0, ',', '.') . "<br>";
echo "<b>Total Bayar : Rp " . number_format($total_bayar, 0, ',', '.') . "</b><br>";
?>
\`\`\`

---

## 4. Mekanisme Parameter: Passing by Value vs Passing by Reference

| Mekanisme | Sintaks Parameter | Cara Kerja di Memori | Dampak pada Variabel Asli di Luar |
| :--- | :--- | :--- | :--- |
| **Passing by Value** (Bawaan) | \`function ubah($x)\` | Menyalin salinan nilai variabel ke memori lokal fungsi. | **TIDAK ADA PERUBAHAN** pada variabel asli di luar fungsi. |
| **Passing by Reference** | \`function ubah(&$x)\` | Mengirimkan alamat memori (*memory pointer*) dari variabel asli menggunakan tanda \`&\`. | **LANGSUNG MENGUBAH NILAI** variabel asli di luar fungsi. |`
  }
];

module.exports = explanations;
