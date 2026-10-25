import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  RotateCcw,
  Terminal,
  Globe,
  Code2,
  AlertCircle,
  Clock,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  CheckCircle2
} from 'lucide-react';
import { executePhpCode } from '../lib/api';

type PhpTopic = {
  id: string;
  group: string;
  title: string;
  filename: string;
  summary: string;
  intro: string[];
  points: string[];
  note?: string;
  code: string;
};

const PHP_TOPICS: PhpTopic[] = [
  {
    id: 'intro',
    group: 'Dasar PHP',
    title: 'Pengenalan PHP',
    filename: 'intro.php',
    summary: 'Apa itu PHP dan bagaimana kode dijalankan di sisi server.',
    intro: [
      'PHP (PHP: Hypertext Preprocessor) adalah bahasa pemrograman sisi server yang paling banyak dipakai untuk membangun halaman web dinamis.',
      'Kode PHP dieksekusi di server. Peramban hanya menerima hasil akhirnya berupa HTML, sehingga kode sumber PHP tidak pernah terlihat oleh pengunjung.'
    ],
    points: [
      'PHP berjalan di server, bukan di peramban.',
      'Berkas PHP disimpan dengan ekstensi .php.',
      'Hasil eksekusi dikirim ke peramban dalam bentuk HTML biasa.',
      'PHP dapat disisipkan langsung di antara tag HTML.'
    ],
    note: 'Semua contoh di halaman ini benar-benar dijalankan pada PHP 8.5 di server latihan.',
    code: `<?php
echo "Halo, Dunia!";
echo "<br>";
echo "Selamat datang di PHP Training.";
echo "<br>";
echo "Jurusan Teknik Informatika - Politeknik Negeri Cilacap";
?>`
  },
  {
    id: 'syntax',
    group: 'Dasar PHP',
    title: 'Sintaks Dasar',
    filename: 'sintaks.php',
    summary: 'Tag pembuka, tag penutup, dan aturan penulisan pernyataan.',
    intro: [
      'Skrip PHP diawali dengan tag pembuka <?php dan diakhiri dengan tag penutup ?>. Di antara kedua tag tersebut, kode PHP akan dieksekusi oleh server.',
      'Setiap pernyataan instruksi diakhiri dengan tanda titik koma. Nama variabel bersifat case-sensitive, artinya $nilai dan $Nilai adalah dua variabel berbeda.'
    ],
    points: [
      'Tag pembuka: <?php, tag penutup: ?>.',
      'Setiap pernyataan diakhiri titik koma (;).',
      'PHP dapat ditulis di antara HTML.',
      'Short echo <?= ?> adalah singkatan dari echo.'
    ],
    code: `<!DOCTYPE html>
<html lang="id">
<body>
  <h2>Halaman PHP Pertama</h2>

  <?php
  $nama = "Mahasiswa TI";
  $matkul = "Algoritma dan Pemrograman";

  echo "Halo, $nama!<br>";
  echo "Selamat belajar $matkul.";
  ?>

  <p>Nama dari short echo: <?= $nama ?></p>
</body>
</html>`
  },
  {
    id: 'comments',
    group: 'Dasar PHP',
    title: 'Komentar',
    filename: 'komentar.php',
    summary: 'Menulis catatan kode yang tidak ikut dieksekusi.',
    intro: [
      'Komentar dipakai untuk menjelaskan maksud kode. Semua teks di dalam komentar diabaikan oleh mesin PHP.',
      'Gunakan komentar secukupnya untuk menjelaskan alasan sebuah logika, bukan sekadar mengulang isi kode.'
    ],
    points: [
      '// untuk komentar satu baris.',
      '# juga komentar satu baris (gaya Unix).',
      '/* ... */ untuk komentar banyak baris.',
      'Komentar berguna untuk dokumentasi fungsi dan penanda perbaikan.'
    ],
    code: `<?php
// Komentar satu baris dengan garis miring ganda
# Komentar satu baris gaya Unix

/*
   Komentar multi-baris.
   Cocok untuk dokumentasi fungsi atau penjelasan logika panjang.
*/

echo "Komentar tidak akan tampil di halaman.<br>";
echo "Hanya baris ini yang dieksekusi.";
?>`
  },
  {
    id: 'variables',
    group: 'Dasar PHP',
    title: 'Variabel',
    filename: 'variabel.php',
    summary: 'Menyimpan nilai dengan tanda dollar dan aturan penamaannya.',
    intro: [
      'Variabel adalah wadah untuk menyimpan nilai seperti teks, angka, atau hasil perhitungan. Di PHP, variabel diawali dengan simbol $ dan tidak perlu dideklarasikan tipenya.',
      'Nama variabel harus diawali huruf atau garis bawah, tidak boleh diawali angka, dan bersifat case-sensitive.'
    ],
    points: [
      'Selalu diawali simbol $, contoh: $nim, $nama_mahasiswa.',
      'Karakter pertama setelah $ berupa huruf atau underscore.',
      'Tidak boleh diawali angka ($2semester salah).',
      '$nilai, $Nilai, dan $NILAI adalah variabel berbeda.',
      'Tipe data ditentukan otomatis saat nilai diisikan.'
    ],
    code: `<?php
$nama     = "Ernawati";
$nim      = "260102025";
$semester = 2;
$aktif    = true;

echo "Nama     : $nama<br>";
echo "NIM      : $nim<br>";
echo "Semester : $semester<br>";
echo "Status   : " . ($aktif ? "Aktif" : "Cuti") . "<br>";
echo "Tipe data \$semester: " . gettype($semester);
?>`
  },
  {
    id: 'output',
    group: 'Dasar PHP',
    title: 'Output: echo dan print',
    filename: 'output.php',
    summary: 'Menampilkan teks dan HTML ke peramban.',
    intro: [
      'echo dan print sama-sama dipakai untuk menampilkan keluaran. echo dapat menerima beberapa argumen sekaligus dan tidak mengembalikan nilai, sedangkan print hanya menerima satu argumen dan mengembalikan angka 1.',
      'Untuk kebutuhan sehari-hari, echo lebih sering dipakai karena lebih ringkas dan sedikit lebih cepat.'
    ],
    points: [
      'echo dapat menampilkan beberapa nilai dipisah koma.',
      'print hanya menerima satu nilai.',
      'print_r() dipakai untuk memeriksa isi array atau objek.',
      'Gunakan . (titik) untuk menggabungkan teks dengan hasil perhitungan.'
    ],
    code: `<?php
echo "Halo dengan echo<br>";
echo "Belajar", " ", "PHP", " itu menyenangkan.<br>";

print "Halo dengan print<br>";

$angka = 5;
echo "Nilai \$angka = " . $angka . "<br>";
echo "Hasil 5 + 3 = " . (5 + 3) . "<br>";

$matkul = array("Alpro", "Basis Data");
echo "<pre>";
print_r($matkul);
echo "</pre>";
?>`
  },
  {
    id: 'datatypes',
    group: 'Tipe Data & Operator',
    title: 'Tipe Data',
    filename: 'tipe-data.php',
    summary: 'String, integer, float, boolean, array, dan null.',
    intro: [
      'PHP mengenal beberapa tipe data dasar. Tipe data menentukan bagaimana sebuah nilai disimpan dan diolah.',
      'Fungsi gettype() berguna untuk melihat tipe data sebuah variabel, sedangkan var_dump() menampilkan tipe sekaligus nilainya.'
    ],
    points: [
      'String: teks di antara tanda kutip.',
      'Integer: bilangan bulat.',
      'Float: bilangan desimal.',
      'Boolean: true atau false.',
      'Array: kumpulan nilai dengan indeks.',
      'Null: variabel tanpa nilai.'
    ],
    code: `<?php
$teks    = "Belajar PHP";
$angka   = 2026;
$desimal = 85.5;
$lulus   = true;
$matkul  = array("Alpro", "Basis Data", "Sistem Operasi");
$kosong  = null;

echo gettype($teks)    . " : $teks<br>";
echo gettype($angka)   . " : $angka<br>";
echo gettype($desimal) . " : $desimal<br>";
echo gettype($lulus)   . " : " . ($lulus ? "true" : "false") . "<br>";
echo gettype($kosong)  . " : kosong<br>";
echo gettype($matkul)  . " : ";
print_r($matkul);
?>`
  },
  {
    id: 'strings',
    group: 'Tipe Data & Operator',
    title: 'String',
    filename: 'string.php',
    summary: 'Kutip tunggal, kutip ganda, penggabungan, dan fungsi string.',
    intro: [
      'String adalah kumpulan karakter. Kutip ganda memungkinkan variabel di dalamnya langsung ditampilkan, sedangkan kutip tunggal menampilkan teks apa adanya.',
      'PHP menyediakan banyak fungsi bawaan untuk mengolah string, seperti strlen(), strtoupper(), dan substr().'
    ],
    points: [
      'Kutip ganda: "Halo $nama" menampilkan isi variabel.',
      'Kutip tunggal: \'Halo $nama\' menampilkan teks apa adanya.',
      'Titik (.) menggabungkan dua string.',
      'strlen() menghitung panjang string.',
      'strtoupper() mengubah menjadi huruf besar.'
    ],
    code: `<?php
$nama   = "Manarul Hidayat";
$matkul = 'Algoritma dan Pemrograman';

echo "Nama: $nama<br>";
echo 'Mata kuliah: ' . $matkul . '<br>';
echo "Panjang nama: " . strlen($nama) . " karakter<br>";
echo "Huruf besar: " . strtoupper($nama) . "<br>";
echo "Jumlah kata: " . str_word_count($nama) . "<br>";
echo "7 huruf pertama: " . substr($nama, 0, 7);
?>`
  },
  {
    id: 'numbers',
    group: 'Tipe Data & Operator',
    title: 'Angka & Matematika',
    filename: 'angka.php',
    summary: 'Operasi aritmatika, pembulatan, dan format angka.',
    intro: [
      'PHP menyediakan operator aritmatika umum seperti penjumlahan, pengurangan, perkalian, pembagian, dan sisa bagi.',
      'Fungsi round() dipakai untuk membulatkan desimal, sedangkan number_format() memudahkan penulisan nominal rupiah.'
    ],
    points: [
      '+ - * / untuk operasi dasar.',
      '% menghasilkan sisa pembagian.',
      '** menghasilkan pangkat.',
      'round() membulatkan bilangan desimal.',
      'number_format() memberi pemisah ribuan.'
    ],
    code: `<?php
$a = 17;
$b = 5;

echo "Penjumlahan : " . ($a + $b) . "<br>";
echo "Pembagian   : " . round($a / $b, 2) . "<br>";
echo "Sisa bagi   : " . ($a % $b) . "<br>";
echo "Pangkat     : " . ($b ** 2) . "<br>";
echo "Maksimum    : " . max($a, $b) . "<br>";
echo "Nominal     : Rp " . number_format(1250000, 0, ',', '.');
?>`
  },
  {
    id: 'operators',
    group: 'Tipe Data & Operator',
    title: 'Operator',
    filename: 'operator.php',
    summary: 'Perbandingan, logika, dan penugasan.',
    intro: [
      'Operator perbandingan menghasilkan nilai boolean, sedangkan operator logika menggabungkan beberapa kondisi.',
      'Perhatikan perbedaan == (sama nilai) dan === (sama nilai sekaligus sama tipe data).'
    ],
    points: [
      '== membandingkan nilai, === membandingkan nilai dan tipe.',
      '&& (AND), || (OR), ! (NOT) untuk logika.',
      '+=, -=, *= memperbarui nilai variabel.',
      'Hasil boolean dapat ditampilkan dengan var_export().'
    ],
    code: `<?php
$umur = 20;
$ipk  = 3.45;

echo "Umur >= 18       : " . var_export($umur >= 18, true) . "<br>";
echo "IPK == 3.45      : " . var_export($ipk == 3.45, true) . "<br>";
echo "IPK === '3.45'   : " . var_export($ipk === "3.45", true) . "<br>";

$lulus = ($umur >= 18 && $ipk >= 3.0);
echo "Memenuhi syarat  : " . ($lulus ? "Ya" : "Tidak") . "<br>";

$total = 10;
$total += 5;
$total *= 2;
echo "Hasil penugasan  : $total";
?>`
  },
  {
    id: 'if',
    group: 'Logika & Perulangan',
    title: 'If...Else...Elseif',
    filename: 'kondisi-if.php',
    summary: 'Mengambil keputusan berdasarkan kondisi.',
    intro: [
      'Struktur if menjalankan blok kode tertentu hanya jika kondisinya bernilai true. Gunakan elseif untuk memeriksa kondisi tambahan dan else untuk kondisi terakhir.',
      'Operator ternary (kondisi ? nilai_true : nilai_false) adalah bentuk ringkas dari if...else sederhana.'
    ],
    points: [
      'if memeriksa satu kondisi.',
      'elseif memeriksa kondisi alternatif.',
      'else dijalankan jika semua kondisi salah.',
      'Ternary cocok untuk pilihan dua nilai.'
    ],
    code: `<?php
$nilai = 78;

if ($nilai >= 80) {
    $grade = "A";
} elseif ($nilai >= 70) {
    $grade = "B";
} elseif ($nilai >= 60) {
    $grade = "C";
} elseif ($nilai >= 50) {
    $grade = "D";
} else {
    $grade = "E";
}

$status = ($nilai >= 60) ? "LULUS" : "TIDAK LULUS";

echo "Nilai  : $nilai<br>";
echo "Grade  : $grade<br>";
echo "Status : $status";
?>`
  },
  {
    id: 'switch',
    group: 'Logika & Perulangan',
    title: 'Switch',
    filename: 'switch.php',
    summary: 'Memilih satu blok dari banyak kemungkinan nilai.',
    intro: [
      'switch cocok dipakai ketika sebuah variabel dibandingkan dengan sejumlah nilai tetap. Struktur ini lebih rapi daripada rangkaian elseif yang panjang.',
      'Jangan lupa menulis break di akhir setiap case agar eksekusi tidak berlanjut ke case berikutnya.'
    ],
    points: [
      'case memeriksa satu nilai tertentu.',
      'break menghentikan pemeriksaan case.',
      'default dijalankan jika tidak ada case yang cocok.',
      'Tanpa break terjadi fall-through.'
    ],
    code: `<?php
$kode = "B";

switch ($kode) {
    case "A":
        $prodi = "Teknik Informatika";
        break;
    case "B":
        $prodi = "Teknik Mesin";
        break;
    case "C":
        $prodi = "Teknik Elektronika";
        break;
    default:
        $prodi = "Program Studi Tidak Dikenal";
}

echo "Kode  : $kode<br>";
echo "Prodi : $prodi";
?>`
  },
  {
    id: 'loops',
    group: 'Logika & Perulangan',
    title: 'Perulangan',
    filename: 'perulangan.php',
    summary: 'for, while, dan do...while.',
    intro: [
      'Perulangan menjalankan blok kode berulang kali. Pilih jenis perulangan sesuai kebutuhan: for bila jumlah putaran sudah diketahui, while bila bergantung pada kondisi, dan do...while bila blok minimal dijalankan satu kali.',
      'Pastikan variabel pencacah selalu diperbarui agar perulangan tidak berjalan tanpa henti.'
    ],
    points: [
      'for: inisialisasi, kondisi, dan pembaruan dalam satu baris.',
      'while: memeriksa kondisi sebelum blok dijalankan.',
      'do...while: memeriksa kondisi setelah blok dijalankan.',
      'Jangan lupa increment atau decrement pencacah.'
    ],
    code: `<?php
echo "<h3>for</h3>";
for ($i = 1; $i <= 5; $i++) {
    echo "Baris ke-$i<br>";
}

echo "<h3>while</h3>";
$i = 5;
while ($i >= 1) {
    echo "Hitung mundur: $i<br>";
    $i--;
}

echo "<h3>do...while</h3>";
$i = 1;
do {
    echo "Dieksekusi minimal sekali: $i<br>";
    $i++;
} while ($i <= 1);
?>`
  },
  {
    id: 'nested',
    group: 'Logika & Perulangan',
    title: 'Perulangan Bersarang',
    filename: 'perulangan-segitiga.php',
    summary: 'Loop di dalam loop untuk membentuk pola baris dan kolom.',
    intro: [
      'Perulangan bersarang adalah perulangan yang berada di dalam perulangan lain. Loop luar mengatur baris, sedangkan loop dalam mengatur isi setiap baris.',
      'Contoh klasiknya adalah pola segitiga bintang, di mana jumlah bintang pada setiap baris mengikuti nomor barisnya.'
    ],
    points: [
      'Loop luar menentukan jumlah baris.',
      'Loop dalam menentukan jumlah kolom per baris.',
      'Batas loop dalam dapat bergantung pada pencacah loop luar.',
      'Gunakan <br> untuk berpindah baris.'
    ],
    code: `<?php
$tinggi = 5;

echo "<div style='font-family: monospace; line-height: 1.6;'>";
for ($baris = 1; $baris <= $tinggi; $baris++) {
    for ($kolom = 1; $kolom <= $baris; $kolom++) {
        echo "* ";
    }
    echo "<br>";
}
echo "</div>";
?>`
  },
  {
    id: 'functions',
    group: 'Fungsi & Form',
    title: 'Fungsi & Prosedur',
    filename: 'fungsi.php',
    summary: 'Subprogram modular dengan parameter dan nilai kembali.',
    intro: [
      'Fungsi dan prosedur adalah subprogram yang dibuat sekali lalu dapat dipanggil berkali-kali. Tujuannya agar kode lebih rapi, mudah diuji, dan tidak berulang.',
      'Fungsi mengembalikan nilai dengan return, sedangkan prosedur cukup menjalankan aksi seperti menampilkan keluaran.'
    ],
    points: [
      'function nama_fungsi(parameter) { ... }',
      'Parameter membuat subprogram fleksibel.',
      'return mengirim nilai kembali ke pemanggil.',
      'Prosedur adalah fungsi tanpa nilai kembali.'
    ],
    code: `<?php
function hitungLuasSegitiga($alas, $tinggi) {
    return 0.5 * $alas * $tinggi;
}

function tampilLuas($alas, $tinggi) {
    $luas = hitungLuasSegitiga($alas, $tinggi);
    echo "Alas $alas cm, tinggi $tinggi cm &rarr; luas $luas cm&sup2;<br>";
}

echo "<h3>Pengujian Subprogram</h3>";
tampilLuas(10, 12);
tampilLuas(15, 20);
tampilLuas(7, 9);
?>`
  },
  {
    id: 'scope',
    group: 'Fungsi & Form',
    title: 'Scope Variabel',
    filename: 'scope-variabel.php',
    summary: 'Perbedaan variabel lokal dan global di dalam fungsi.',
    intro: [
      'Variabel yang dibuat di dalam fungsi bersifat lokal dan hanya hidup selama fungsi dijalankan. Variabel di luar fungsi bersifat global dan tidak otomatis dapat diakses dari dalam fungsi.',
      'Gunakan kata kunci global atau array $GLOBALS jika sebuah fungsi memang perlu mengubah variabel global.'
    ],
    points: [
      'Variabel lokal hanya dikenal di dalam fungsi.',
      'Variabel global dideklarasikan di luar fungsi.',
      'Kata kunci global menghubungkan fungsi dengan variabel global.',
      'Hindari terlalu banyak variabel global agar kode mudah dilacak.'
    ],
    code: `<?php
$total = 100;

function tanpaGlobal() {
    $total = 10;
    return $total;
}

function denganGlobal() {
    global $total;
    $total += 50;
    return $total;
}

echo "Nilai lokal        : " . tanpaGlobal() . "<br>";
echo "Global sebelum     : $total<br>";
echo "Hasil denganGlobal : " . denganGlobal() . "<br>";
echo "Global sesudah     : $total";
?>`
  },
  {
    id: 'forms',
    group: 'Fungsi & Form',
    title: 'Form HTML & $_POST',
    filename: 'form-post.php',
    summary: 'Mengirim data form ke PHP dan membacanya dengan $_POST.',
    intro: [
      'Form HTML mengirim data ke server melalui atribut action dan method. Dengan method="post", data dikirim di dalam body permintaan dan dibaca PHP melalui variabel superglobal $_POST.',
      'Setiap input harus memiliki atribut name. Nilai name itulah yang menjadi kunci saat membaca $_POST. Gunakan htmlspecialchars() saat menampilkan kembali data dari pengguna.'
    ],
    points: [
      '<form method="post" action="handler.php">',
      'Atribut name menjadi kunci data.',
      '$_POST["nama"] mengambil nilai input.',
      'Operator ?? memberi nilai cadangan jika data kosong.',
      'htmlspecialchars() mencegah HTML injection.'
    ],
    note: 'Contoh ini memakai data simulasi agar tetap dapat dijalankan di sandbox. Pada server PHP sungguhan, nilai $_POST berasal dari form yang dikirim pengguna.',
    code: `<?php
$_POST['nama'] = $_POST['nama'] ?? 'Manarul Hidayat';
$_POST['nim']  = $_POST['nim'] ?? '260102025';

$nama = htmlspecialchars($_POST['nama']);
$nim  = htmlspecialchars($_POST['nim']);
?>
<!DOCTYPE html>
<html lang="id">
<body style="font-family: system-ui, sans-serif; font-size: 13px;">
  <h3>Form Data Mahasiswa</h3>
  <form method="post" action="">
    <label>Nama: <input type="text" name="nama" value="<?= $nama ?>"></label><br><br>
    <label>NIM: <input type="text" name="nim" value="<?= $nim ?>"></label><br><br>
    <button type="submit">Kirim</button>
  </form>
  <hr>
  <p>Nama: <b><?= $nama ?></b><br>NIM: <b><?= $nim ?></b></p>
</body>
</html>`
  },
  {
    id: 'tugas-input',
    group: 'Studi Kasus Penjualan',
    title: 'Form Penjualan (tugas-input.php)',
    filename: 'tugas-input.php',
    summary: 'Form input data customer dan transaksi penjualan.',
    intro: [
      'Studi kasus ini menggabungkan HTML form dengan pemrosesan PHP. Halaman tugas-input.php bertugas menampilkan formulir penjualan, kemudian mengirim datanya ke tugas-output.php dengan method POST.',
      'Perhatikan atribut name pada setiap input: no_transaksi, tanggal, nama_customer, alamat, member, nama_barang, jumlah, dan harga. Semua nama tersebut akan dibaca kembali oleh halaman output.'
    ],
    points: [
      'Form dikirim ke tugas-output.php dengan method POST.',
      'Checkbox member hanya terkirim jika dicentang.',
      'Input number dipakai untuk jumlah dan harga.',
      'Atribut required memastikan data wajib diisi.',
      'Setiap name akan menjadi kunci pada $_POST.'
    ],
    note: 'Pratinjau di sandbox menampilkan form secara utuh. Tombol Proses akan mengarah ke tugas-output.php pada server PHP sungguhan; di sandbox, hasil pengolahan dapat dilihat pada topik berikutnya.',
    code: `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Form Penjualan</title>
    <style>
        body { font-family: system-ui, sans-serif; font-size: 13px; color: #0f172a; padding: 16px; }
        h3 { margin-top: 0; }
        label { font-size: 12px; font-weight: 600; }
        input[type="text"], input[type="date"], input[type="number"], textarea {
            width: 100%; max-width: 320px; padding: 6px 8px; margin: 2px 0 8px;
            border: 1px solid #cbd5e1; border-radius: 4px; font: inherit;
        }
        fieldset { border: 1px solid #e2e8f0; border-radius: 6px; margin-bottom: 10px; }
        legend { font-weight: 700; font-size: 12px; }
        button { background: #059669; color: #fff; border: 0; padding: 7px 16px; border-radius: 4px; cursor: pointer; }
        button:hover { background: #047857; }
    </style>
</head>
<body>
    <h3>Form Penjualan</h3>
    <form method="POST" action="tugas-output.php">
        <fieldset>
            <legend>Data Customer</legend>
            <div>
                <label for="no_transaksi">No. Transaksi</label><br>
                <input type="text" id="no_transaksi" name="no_transaksi" required>
            </div>
            <div>
                <label for="tanggal">Tanggal</label><br>
                <input type="date" id="tanggal" name="tanggal" required>
            </div>
            <div>
                <label for="nama_customer">Nama Customer</label><br>
                <input type="text" id="nama_customer" name="nama_customer" required>
            </div>
            <div>
                <label for="alamat">Alamat</label><br>
                <textarea id="alamat" name="alamat" rows="3" required></textarea>
            </div>
            <label>
                <input type="checkbox" name="member" value="Member"> Member
            </label>
        </fieldset>
        <fieldset>
            <legend>Data Transaksi</legend>
            <div>
                <label for="nama_barang">Nama Barang</label><br>
                <input type="text" id="nama_barang" name="nama_barang" required>
            </div>
            <div>
                <label for="jumlah">Jumlah</label><br>
                <input type="number" id="jumlah" name="jumlah" min="1" required>
            </div>
            <div>
                <label for="harga">Harga</label><br>
                <input type="number" id="harga" name="harga" min="0" required>
            </div>
        </fieldset>
        <button type="submit" name="proses">Proses</button>
    </form>
</body>
</html>`
  },
  {
    id: 'tugas-output',
    group: 'Studi Kasus Penjualan',
    title: 'Output Penjualan (tugas-output.php)',
    filename: 'tugas-output.php',
    summary: 'Mengolah data form: total belanja, diskon bertingkat, dan total bayar.',
    intro: [
      'Halaman tugas-output.php menerima data dari form penjualan, lalu menghitung total belanja, diskon, dan total bayar. Perhitungan dipecah menjadi beberapa prosedur agar mudah dibaca dan diuji.',
      'Status Member ditentukan dari checkbox: jika dicentang, $_POST["member"] berisi "Member"; jika tidak, status menjadi "Non Member". Diskon member lebih besar dan memakai tingkatan nominal, sedangkan non-member hanya mendapat diskon pada transaksi besar.'
    ],
    points: [
      'Data form dibaca dari $_POST dengan operator ??.',
      'global menghubungkan prosedur dengan variabel di luar fungsi.',
      'Total belanja = jumlah x harga.',
      'Diskon member: 10% di atas 1 juta, 5% di atas 500 ribu, 3% di atas 100 ribu.',
      'Diskon non-member: 2% di atas 1 juta.',
      'Total bayar = total belanja - diskon.'
    ],
    note: 'Di sandbox, data $_POST disimulasikan di bagian awal kode karena form tidak benar-benar dikirim ke server latihan. Logika perhitungan tetap sama dengan tugas-output.php.',
    code: `<?php
// Simulasi data kiriman form tugas-input.php
$_POST = [
    'no_transaksi'  => 'TRX-2026-001',
    'tanggal'       => '2026-10-25',
    'nama_customer' => 'Manarul Hidayat',
    'alamat'        => 'Jl. Dr. Soetomo No. 1, Cilacap',
    'member'        => 'Member',
    'nama_barang'   => 'Laptop ASUS TUF Gaming',
    'jumlah'        => 2,
    'harga'         => 12500000
];

$no_transaksi  = $_POST['no_transaksi'] ?? '';
$tanggal       = $_POST['tanggal'] ?? '';
$nama_customer = $_POST['nama_customer'] ?? '';
$alamat        = $_POST['alamat'] ?? '';
$status        = isset($_POST['member']) ? 'Member' : 'Non Member';

$nama_barang = $_POST['nama_barang'] ?? '';
$jumlah      = isset($_POST['jumlah']) ? (int) $_POST['jumlah'] : 0;
$harga       = isset($_POST['harga']) ? (float) $_POST['harga'] : 0;

$total_belanja = 0;
$diskon        = 0;
$total_bayar   = 0;

function hitungTotalBelanja() {
    global $jumlah, $harga, $total_belanja;
    $total_belanja = $jumlah * $harga;
}

function hitungDiskon() {
    global $status, $total_belanja, $diskon;

    if ($status === 'Member') {
        if ($total_belanja >= 1000000) {
            $diskon = 0.10 * $total_belanja;
        } elseif ($total_belanja >= 500000) {
            $diskon = 0.05 * $total_belanja;
        } elseif ($total_belanja > 100000) {
            $diskon = 0.03 * $total_belanja;
        }
    } elseif ($total_belanja >= 1000000) {
        $diskon = 0.02 * $total_belanja;
    }
}

function hitungTotalBayar() {
    global $total_belanja, $diskon, $total_bayar;
    $total_bayar = $total_belanja - $diskon;
}

function tampilData() {
    global $no_transaksi, $tanggal, $nama_customer, $alamat, $status;
    global $nama_barang, $jumlah, $harga, $total_belanja, $diskon, $total_bayar;

    echo "<h3>INFORMASI DATA PENJUALAN</h3><hr>";
    echo "<b>DATA CUSTOMER</b><br>";
    echo "No. Transaksi : $no_transaksi<br>";
    echo "Tanggal       : $tanggal<br>";
    echo "Nama Customer : $nama_customer<br>";
    echo "Alamat        : $alamat<br>";
    echo "Status        : $status<br><br>";

    echo "<b>DATA TRANSAKSI</b><br>";
    echo "Nama Barang   : $nama_barang<br>";
    echo "Jumlah        : $jumlah<br>";
    echo "Harga         : Rp " . number_format($harga, 0, ',', '.') . "<br>";
    echo "Total Belanja : Rp " . number_format($total_belanja, 0, ',', '.') . "<br>";
    echo "Diskon        : Rp " . number_format($diskon, 0, ',', '.') . "<br>";
    echo "<b>Total Bayar : Rp " . number_format($total_bayar, 0, ',', '.') . "</b>";
}

hitungTotalBelanja();
hitungDiskon();
hitungTotalBayar();
tampilData();
?>`
  }
];

const GROUP_NAMES = Array.from(new Set(PHP_TOPICS.map(topic => topic.group)));

export const PHPSandbox: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(PHP_TOPICS[0].id);
  const [code, setCode] = useState<string>(PHP_TOPICS[0].code);
  const [output, setOutput] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [executing, setExecuting] = useState<boolean>(false);
  const [executionTime, setExecutionTime] = useState<number | null>(null);
  const [outputView, setOutputView] = useState<'html' | 'raw'>('html');
  const requestRef = useRef(0);

  const topicIndex = PHP_TOPICS.findIndex(topic => topic.id === selectedId);
  const topic = PHP_TOPICS[topicIndex];
  const prevTopic = topicIndex > 0 ? PHP_TOPICS[topicIndex - 1] : null;
  const nextTopic = topicIndex < PHP_TOPICS.length - 1 ? PHP_TOPICS[topicIndex + 1] : null;

  useEffect(() => {
    handleRunCode(PHP_TOPICS[0].code);
  }, []);

  const handleSelectTopic = (topicId: string) => {
    const found = PHP_TOPICS.find(item => item.id === topicId);
    if (!found) return;
    setSelectedId(found.id);
    setCode(found.code);
    setOutputView('html');
    handleRunCode(found.code);
  };

  const handleRunCode = async (codeToRun = code) => {
    if (!codeToRun.trim()) return;

    const requestId = ++requestRef.current;
    setExecuting(true);
    setError(null);

    try {
      const res = await executePhpCode(codeToRun);
      if (requestId !== requestRef.current) return;
      setOutput(res.output || '');
      setExecutionTime(res.executionTimeMs);
      if (res.error) {
        setError(res.error);
      }
    } catch (err: any) {
      if (requestId !== requestRef.current) return;
      setError(err.message || 'Gagal mengeksekusi kode PHP.');
    } finally {
      if (requestId === requestRef.current) {
        setExecuting(false);
      }
    }
  };

  const handleResetCode = () => {
    if (!topic) return;
    setCode(topic.code);
    handleRunCode(topic.code);
  };

  const getIframeDoc = (rawHtml: string) => {
    if (!rawHtml) {
      return `<!DOCTYPE html><html><body style="font-family:system-ui,sans-serif;color:#64748b;padding:24px;font-size:13px;margin:0;background:#ffffff;"><i>Tekan "Jalankan Kode" untuk melihat hasil eksekusi...</i></body></html>`;
    }
    if (rawHtml.toLowerCase().includes('<!doctype') || rawHtml.toLowerCase().includes('<html')) {
      return rawHtml;
    }
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 13px;
      line-height: 1.6;
      color: #0f172a;
      background: #ffffff;
      padding: 20px;
      margin: 0;
    }
    hr { border: 0; border-top: 1px solid #e2e8f0; margin: 12px 0; }
    h1, h2, h3, h4 { color: #090d16; margin-top: 0; margin-bottom: 8px; }
    b, strong { color: #0f172a; }
    pre { background: #f8fafc; border: 1px solid #e2e8f0; padding: 12px; border-radius: 8px; font-family: monospace; font-size: 12px; overflow-x: auto; }
    table { border-collapse: collapse; }
    td, th { padding: 6px 10px; }
  </style>
</head>
<body>
  ${rawHtml}
</body>
</html>`;
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 via-[#0e1422] to-[#0e1422] p-6 shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2">
              <Code2 size={13} />
              <span>PHP Training</span>
            </div>
            <h2 className="text-xl font-bold text-slate-100">Belajar PHP dari Dasar hingga Studi Kasus Form Penjualan</h2>
            <p className="text-xs text-slate-400 mt-1 max-w-2xl leading-relaxed">
              Ikuti topik secara berurutan, baca penjelasan, lalu jalankan dan ubah contoh kode langsung di server latihan.
              Materi disusun mengikuti praktikum Algoritma dan Pemrograman sampai tugas form penjualan.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono text-slate-400 shrink-0">
            <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10">
              {PHP_TOPICS.length} topik
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10">
              PHP 8.5
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
              Langsung dieksekusi
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)] gap-6 items-start">
        <aside className="lg:sticky lg:top-24 space-y-3">
          <div className="lg:hidden">
            <label htmlFor="php-topic" className="text-[11px] font-mono text-slate-500 px-1">
              Pilih topik
            </label>
            <select
              id="php-topic"
              value={selectedId}
              onChange={event => handleSelectTopic(event.target.value)}
              className="mt-1 w-full bg-[#0e1422] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-emerald-500/40"
            >
              {PHP_TOPICS.map((item, index) => (
                <option key={item.id} value={item.id}>
                  {index + 1}. {item.title}
                </option>
              ))}
            </select>
          </div>

          <div className="hidden lg:block bg-[#0e1422] border border-white/10 rounded-2xl p-3 max-h-[calc(100vh-8rem)] overflow-y-auto">
            <div className="flex items-center gap-2 px-2 pb-2 mb-2 border-b border-white/5">
              <BookOpen size={14} className="text-emerald-400" />
              <span className="text-[11px] font-semibold tracking-wide text-slate-300 uppercase">
                Materi PHP Training
              </span>
            </div>

            {GROUP_NAMES.map(groupName => (
              <div key={groupName} className="mb-3 last:mb-0">
                <div className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-slate-500">
                  {groupName}
                </div>
                <div className="space-y-0.5">
                  {PHP_TOPICS.map((item, index) => {
                    if (item.group !== groupName) return null;
                    const isActive = item.id === selectedId;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleSelectTopic(item.id)}
                        className={`w-full flex items-start gap-2 px-2 py-1.5 rounded-lg text-left text-[11px] leading-snug transition-colors ${
                          isActive
                            ? 'bg-emerald-500/10 text-emerald-300 font-semibold'
                            : 'text-slate-400 hover:bg-white/[0.04] hover:text-slate-200'
                        }`}
                      >
                        <span className={`font-mono text-[10px] mt-0.5 ${isActive ? 'text-emerald-400' : 'text-slate-600'}`}>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span>{item.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="hidden lg:block px-1">
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span>Progres materi</span>
              <span>{topicIndex + 1} / {PHP_TOPICS.length}</span>
            </div>
            <div className="mt-1.5 h-1.5 rounded-full bg-white/5 overflow-hidden">
              <div
                className="h-full rounded-full bg-emerald-500 transition-all"
                style={{ width: `${((topicIndex + 1) / PHP_TOPICS.length) * 100}%` }}
              />
            </div>
          </div>
        </aside>

        <div className="space-y-5 min-w-0">
          <div className="bg-[#0e1422] border border-white/10 rounded-2xl p-5 sm:p-6">
            <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono mb-3">
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                {topic.group}
              </span>
              <span className="text-slate-500">
                Topik {topicIndex + 1} dari {PHP_TOPICS.length}
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-slate-100">{topic.title}</h3>
            <p className="text-xs text-slate-400 mt-1">{topic.summary}</p>

            <div className="mt-4 space-y-2.5">
              {topic.intro.map((paragraph, index) => (
                <p key={index} className="text-xs sm:text-[13px] text-slate-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 size={14} className="text-emerald-400" />
                <span className="text-[11px] font-semibold text-slate-200 uppercase tracking-wide">
                  Yang akan dipelajari
                </span>
              </div>
              <ul className="space-y-1.5">
                {topic.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-2 text-[11.5px] text-slate-400 leading-relaxed">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-emerald-500 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {topic.note && (
              <div className="mt-3 flex items-start gap-2.5 rounded-xl border border-amber-500/20 bg-amber-500/[0.06] p-3.5">
                <Lightbulb size={14} className="text-amber-400 shrink-0 mt-0.5" />
                <p className="text-[11.5px] text-amber-200/80 leading-relaxed">{topic.note}</p>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 items-start">
            <div className="bg-[#0e1422] border border-white/10 rounded-2xl overflow-hidden shadow-xl flex flex-col">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.02] gap-2">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 min-w-0">
                  <Terminal size={14} className="text-emerald-400 shrink-0" />
                  <span className="truncate">{topic.filename}</span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={handleResetCode}
                    title="Kembalikan contoh kode"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-white/[0.06] transition-colors"
                  >
                    <RotateCcw size={14} />
                  </button>
                  <button
                    onClick={() => handleRunCode()}
                    disabled={executing}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs transition-all shadow-lg shadow-emerald-900/30 disabled:opacity-50"
                  >
                    <Play size={12} fill="currentColor" />
                    <span>{executing ? 'Menjalankan...' : 'Jalankan'}</span>
                  </button>
                </div>
              </div>

              <div className="p-3 bg-[#070a10]">
                <textarea
                  value={code}
                  onChange={event => setCode(event.target.value)}
                  onKeyDown={event => {
                    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
                      event.preventDefault();
                      handleRunCode();
                    }
                  }}
                  rows={Math.min(Math.max(code.split('\n').length + 1, 14), 30)}
                  className="w-full bg-transparent font-mono text-[11.5px] sm:text-xs text-slate-100 focus:outline-none resize-none leading-relaxed p-1"
                  placeholder="<?php echo 'Hello World'; ?>"
                  spellCheck={false}
                />
              </div>

              <div className="px-4 py-2 bg-white/[0.02] border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>Ctrl + Enter untuk menjalankan</span>
                {executionTime !== null && (
                  <span className="flex items-center gap-1 text-emerald-400">
                    <Clock size={11} />
                    <span>{executionTime} ms</span>
                  </span>
                )}
              </div>
            </div>

            <div className="bg-[#0e1422] border border-white/10 rounded-2xl overflow-hidden shadow-xl flex flex-col">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.02] gap-2">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 min-w-0">
                  <Globe size={14} className="text-cyan-400 shrink-0" />
                  <span className="truncate">Hasil</span>
                </div>

                <div className="flex items-center gap-1 bg-white/[0.04] p-0.5 rounded-lg border border-white/10 text-xs shrink-0">
                  <button
                    onClick={() => setOutputView('html')}
                    className={`px-2 py-1 rounded-md text-[10px] font-medium transition-colors ${
                      outputView === 'html'
                        ? 'bg-emerald-500/20 text-emerald-300 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Tampilan
                  </button>
                  <button
                    onClick={() => setOutputView('raw')}
                    className={`px-2 py-1 rounded-md text-[10px] font-medium transition-colors ${
                      outputView === 'raw'
                        ? 'bg-emerald-500/20 text-emerald-300 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Stdout
                  </button>
                </div>
              </div>

              <div className="p-4 min-h-[320px]">
                {error && (
                  <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs flex items-start gap-2.5 mb-3">
                    <AlertCircle size={15} className="shrink-0 mt-0.5" />
                    <div className="font-mono whitespace-pre-wrap break-words">{error}</div>
                  </div>
                )}

                {outputView === 'html' ? (
                  <iframe
                    title={`Pratinjau ${topic.filename}`}
                    srcDoc={getIframeDoc(output)}
                    className="w-full h-[340px] bg-white rounded-xl border border-white/10 shadow-inner"
                    sandbox="allow-same-origin allow-forms allow-scripts"
                  />
                ) : (
                  <pre className="p-4 rounded-xl bg-[#070a10] border border-white/10 font-mono text-xs text-slate-200 min-h-[300px] max-h-[340px] overflow-auto whitespace-pre-wrap leading-relaxed">
                    {output || '// Tidak ada keluaran'}
                  </pre>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3">
            <button
              onClick={() => prevTopic && handleSelectTopic(prevTopic.id)}
              disabled={!prevTopic}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-medium text-slate-300 transition-colors disabled:opacity-30 disabled:cursor-not-allowed min-w-0"
            >
              <ChevronLeft size={14} className="shrink-0" />
              <span className="truncate">{prevTopic ? prevTopic.title : 'Topik sebelumnya'}</span>
            </button>

            <button
              onClick={() => nextTopic && handleSelectTopic(nextTopic.id)}
              disabled={!nextTopic}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium transition-colors disabled:opacity-30 disabled:cursor-not-allowed min-w-0"
            >
              <span className="truncate">{nextTopic ? nextTopic.title : 'Selesai'}</span>
              <ChevronRight size={14} className="shrink-0" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
