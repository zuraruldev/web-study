const questions = [
  {
    id: 'alp_q01',
    subject_slug: 'alpro',
    subtopic: 'Modul I: Karakteristik Algoritma',
    question_text: 'Suatu algoritma wajib memiliki kepastian bahwa setiap instruksi didefinisikan secara jelas, presisi, dan tidak menimbulkan interpretasi ganda (ambigu). Karakteristik algoritma manakah yang dimaksud?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Finiteness (Keterbatasan)',
      'Definiteness (Kepastian)',
      'Effectiveness (Efektivitas)',
      'Generality (Keumuman)'
    ]),
    correct_index: 1,
    explanation: 'Definiteness berarti setiap langkah instruksi dalam algoritma harus jelas dan tidak ambigu, sehingga selalu dapat dipahami dan dijalankan dengan kepastian yang sama oleh pemroses.',
    points: 10
  },
  {
    id: 'alp_q02',
    subject_slug: 'alpro',
    subtopic: 'Modul I: Sintaks Variabel PHP',
    question_text: 'Di antara deklarasi penamaan variabel PHP berikut, manakah penulisan yang TIDAK valid dan akan memicu kesalahan sintaks (*Syntax Error*)?',
    code_snippet: 'A) $nilai_mahasiswa\nB) $_totalBayar\nC) $2ndSemester\nD) $nama_lengkap_1',
    options_json: JSON.stringify([
      '$nilai_mahasiswa',
      '$_totalBayar',
      '$2ndSemester',
      '$nama_lengkap_1'
    ]),
    correct_index: 2,
    explanation: 'Dalam PHP, karakter pertama setelah tanda dollar ($) harus berupa huruf (A-Z, a-z) atau garis bawah (underscore _). Nama variabel tidak boleh diawali dengan angka numerik ($2ndSemester tidak valid).',
    points: 10
  },
  {
    id: 'alp_q03',
    subject_slug: 'alpro',
    subtopic: 'Modul II: Perbandingan Nilai vs Identitas',
    question_text: 'Perhatikan potongan kode PHP berikut. Apakah keluaran yang dihasilkan pada layar?',
    code_snippet: '<?php\n$a = "25";\n$b = 25;\nif ($a === $b) {\n  echo "SAMA IDENTIK";\n} elseif ($a == $b) {\n  echo "SAMA NILAI";\n} else {\n  echo "TIDAK SAMA";\n}\n?>',
    options_json: JSON.stringify([
      'SAMA IDENTIK',
      'SAMA NILAI',
      'TIDAK SAMA',
      'Terjadi Fatal Error tipe data tidak cocok'
    ]),
    correct_index: 1,
    explanation: 'Operator == melakukan type coercion sehingga string "25" bernilai sama dengan integer 25. Namun operator === (strict identity) memeriksa nilai dan tipe data; karena satu bertipe string dan satu bertipe integer, evaluasi === bernilai false.',
    points: 10
  },
  {
    id: 'alp_q04',
    subject_slug: 'alpro',
    subtopic: 'Modul II: Operator Modulus',
    question_text: 'Berapakah nilai variabel $hasil dari operasi aritmatika PHP di bawah ini?',
    code_snippet: '<?php\n$x = 23;\n$y = 5;\n$hasil = $x % $y;\necho $hasil;\n?>',
    options_json: JSON.stringify([
      '4.6',
      '4',
      '3',
      '1'
    ]),
    correct_index: 2,
    explanation: 'Operator persen (%) adalah operator modulus (sisa bagi bilangan bulat). 23 dibagi 5 adalah 4 dengan sisa 3 (karena 5 * 4 = 20, dan 23 - 20 = 3).',
    points: 10
  },
  {
    id: 'alp_q05',
    subject_slug: 'alpro',
    subtopic: 'Modul III: Simbol Flowchart',
    question_text: 'Pada diagram alir (flowchart) standar internasional, simbol manakah yang wajib digunakan untuk merepresentasikan instruksi membaca input dari pengguna atau mencetak nota transaksi?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Persegi Panjang (Process)',
      'Belah Ketupat (Decision)',
      'Jajaran Genjang (Input/Output)',
      'Kapsul / Oval (Terminator)'
    ]),
    correct_index: 2,
    explanation: 'Simbol Jajaran Genjang (Parallelogram) digunakan khusus untuk operasi Input/Output (I/O), seperti membaca data masukan dari keyboard atau mencetak keluaran ke layar/kertas.',
    points: 10
  },
  {
    id: 'alp_q06',
    subject_slug: 'alpro',
    subtopic: 'Modul III: Logika Flowchart Decision',
    question_text: 'Simbol belah ketupat (Decision) dalam perancangan diagram alir algoritma berfungsi untuk:',
    code_snippet: null,
    options_json: JSON.stringify([
      'Menandai dimulainya atau berakhirnya suatu alur program',
      'Mengevaluasi kondisi logika yang menghasilkan dua cabang pilihan (Ya/Tidak)',
      'Melakukan operasi penugasan nilai dan rumus aritmatika',
      'Menghubungkan alur flowchart ke lembar halaman lain'
    ]),
    correct_index: 1,
    explanation: 'Simbol belah ketupat (Decision) digunakan untuk menguji suatu kondisi logika (misalnya: apakah nilai >= 70?), yang mengalirkan eksekusi ke minimal dua jalur percabangan (Ya / Tidak).',
    points: 10
  },
  {
    id: 'alp_q07',
    subject_slug: 'alpro',
    subtopic: 'Modul IV: Alur Sekuensial',
    question_text: 'Apakah keluaran dari potongan kode sekuensial berikut?',
    code_snippet: '<?php\n$p = 8;\n$q = 3;\n$p = $p + $q;\n$q = $p - $q;\n$p = $p - $q;\necho "p=" . $p . ", q=" . $q;\n?>',
    options_json: JSON.stringify([
      'p=8, q=3',
      'p=11, q=8',
      'p=3, q=8',
      'p=11, q=3'
    ]),
    correct_index: 2,
    explanation: 'Ini adalah algoritma pertukaran nilai dua variabel tanpa variabel pembantu (swap without temp). Langkah 1: p = 8 + 3 = 11. Langkah 2: q = 11 - 3 = 8. Langkah 3: p = 11 - 8 = 3. Maka p=3 dan q=8.',
    points: 10
  },
  {
    id: 'alp_q08',
    subject_slug: 'alpro',
    subtopic: 'Modul V: Percabangan Switch Fall-Through',
    question_text: 'Perhatikan kode PHP berikut dengan teliti. Apa keluaran yang tercetak pada layar?',
    code_snippet: '<?php\n$grade = "B";\nswitch ($grade) {\n  case "A":\n    echo "Sangat Baik ";\n  case "B":\n    echo "Baik ";\n  case "C":\n    echo "Cukup ";\n    break;\n  default:\n    echo "Kurang ";\n}\n?>',
    options_json: JSON.stringify([
      'Baik',
      'Baik Cukup ',
      'Sangat Baik Baik Cukup ',
      'Baik Cukup Kurang '
    ]),
    correct_index: 1,
    explanation: 'Karena pada blok case "B" tidak ada instruksi break, eksekusi akan merembes (fall-through) ke blok di bawahnya (case "C"). Blok C mencetak "Cukup " lalu menemukan break dan keluar. Hasil akhir adalah "Baik Cukup ".',
    points: 10
  },
  {
    id: 'alp_q09',
    subject_slug: 'alpro',
    subtopic: 'Modul V: Logika Percabangan Majemuk',
    question_text: 'Sebuah sistem menentukan diskon: Jika total belanja >= 100.000 DAN pembeli adalah member, diskon 20%. Jika hanya salah satu syarat terpenuhi, diskon 10%. Selain itu diskon 0%. Jika $total = 120000 dan $isMember = false, berapakah diskonnya?',
    code_snippet: '<?php\n$total = 120000;\n$isMember = false;\n?>',
    options_json: JSON.stringify([
      '20%',
      '10%',
      '0%',
      '15%'
    ]),
    correct_index: 1,
    explanation: 'Syarat pertama (total >= 100000 && isMember) menghasilkan false karena isMember adalah false. Namun kondisi kedua (total >= 100000 || isMember) menghasilkan true karena total belanja mencapai 120000, sehingga memperoleh diskon 10%.',
    points: 10
  },
  {
    id: 'alp_q10',
    subject_slug: 'alpro',
    subtopic: 'Modul VI: Karakteristik Perulangan Do-While',
    question_text: 'Mengapa struktur perulangan do...while dikatakan sebagai post-tested loop?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Karena jumlah perulangannya harus selalu diketahui sebelum perulangan dimulai',
      'Karena evaluasi kondisi dilakukan di akhir blok, sehingga blok kode dijamin dijalankan minimal 1 kali',
      'Karena perulangan do-while hanya bisa digunakan untuk array asosiatif',
      'Karena do-while tidak mengizinkan pemakaian instruksi break'
    ]),
    correct_index: 1,
    explanation: 'Pada do...while, pengujian kondisi dilakukan setelah tubuh perulangan selesai dieksekusi satu putaran. Jika kondisi bernilai false pada percobaan pertama, kode di dalam blok sudah sempat berjalan 1 kali.',
    points: 10
  },
  {
    id: 'alp_q11',
    subject_slug: 'alpro',
    subtopic: 'Modul VI: Output Perulangan For & Break',
    question_text: 'Berapakah nilai akhir dari variabel $total setelah kode berikut selesai dieksekusi?',
    code_snippet: '<?php\n$total = 0;\nfor ($i = 1; $i <= 5; $i++) {\n  if ($i == 3) {\n    continue;\n  }\n  if ($i == 5) {\n    break;\n  }\n  $total += $i;\n}\necho $total;\n?>',
    options_json: JSON.stringify([
      '15',
      '7',
      '3',
      '10'
    ]),
    correct_index: 1,
    explanation: 'Saat i=1: total = 0 + 1 = 1. Saat i=2: total = 1 + 2 = 3. Saat i=3: continue (dilewati, total tetap 3). Saat i=4: total = 3 + 4 = 7. Saat i=5: break (perulangan langsung dihentikan). Nilai akhir total adalah 7.',
    points: 10
  },
  {
    id: 'alp_q12',
    subject_slug: 'alpro',
    subtopic: 'Modul VII: Perbedaan Fungsi vs Prosedur',
    question_text: 'Secara konsep teoritis ilmu komputer, apa perbedaan mendasar antara FUNGSI (Function) dan PROSEDUR (Procedure)?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Fungsi tidak boleh menerima parameter masukan, sedangkan prosedur wajib menerima parameter',
      'Fungsi wajib mengembalikan suatu nilai (return value), sedangkan prosedur tidak mengembalikan nilai (void / side-effect)',
      'Fungsi hanya dapat ditulis dalam bahasa C, sedangkan prosedur khusus untuk PHP',
      'Fungsi dijalankan berulang-ulang, sedangkan prosedur hanya dieksekusi satu kali'
    ]),
    correct_index: 1,
    explanation: 'Fungsi mengkalkulasi dan mengembalikan suatu nilai ke pemanggilnya melalui pernyataan return. Sedangkan prosedur adalah subprogram yang menjalankan serangkaian aksi tugas tanpa mengembalikan nilai (void).',
    points: 10
  },
  {
    id: 'alp_q13',
    subject_slug: 'alpro',
    subtopic: 'Modul VII: Ruang Lingkup Variabel Global',
    question_text: 'Apakah keluaran dari skrip PHP di bawah ini?',
    code_snippet: '<?php\n$angka = 50;\nfunction ubahNilai() {\n  $angka = 100;\n}\nubahNilai();\necho $angka;\n?>',
    options_json: JSON.stringify([
      '100',
      '50',
      '150',
      'NULL (Notice: Undefined variable)'
    ]),
    correct_index: 1,
    explanation: 'Variabel $angka di dalam fungsi ubahNilai bersifat lokal (Local Scope) dan terisolasi dari variabel global $angka di luar fungsi. Karena tidak menggunakan kata kunci global $angka, nilai $angka di luar fungsi tetap 50.',
    points: 10
  },
  {
    id: 'alp_q14',
    subject_slug: 'alpro',
    subtopic: 'Modul VII: Parameter Passing by Reference',
    question_text: 'Perhatikan tanda ampersand (&) pada parameter fungsi berikut. Berapakah keluaran yang ditampilkan?',
    code_snippet: '<?php\nfunction tambahkanSepuluh(&$nilai) {\n  $nilai += 10;\n}\n$skor = 40;\ntambahkanSepuluh($skor);\necho $skor;\n?>',
    options_json: JSON.stringify([
      '40',
      '50',
      '10',
      'Fatal Error: Cannot pass parameter by reference'
    ]),
    correct_index: 1,
    explanation: 'Tanda & pada parameter &$nilai menandakan passing by reference. Fungsi menerima alamat memori variabel asli ($skor). Maka setiap manipulasi pada $nilai di dalam fungsi langsung mengubah nilai variabel asli $skor menjadi 40 + 10 = 50.',
    points: 10
  },
  {
    id: 'alp_q15',
    subject_slug: 'alpro',
    subtopic: 'Modul VII: Penanganan Form Method POST',
    question_text: 'Dalam pengembangan aplikasi web PHP, manakah array superglobal yang digunakan untuk menampung data formulir yang dikirim secara aman tanpa menampilkan parameter nilai di URL peramban?',
    code_snippet: null,
    options_json: JSON.stringify([
      '$_GET',
      '$_POST',
      '$_SESSION',
      '$_COOKIE'
    ]),
    correct_index: 1,
    explanation: 'Array superglobal $_POST digunakan untuk mengambil nilai data form yang dikirimkan menggunakan atribut method="POST" pada HTTP request body, sehingga tidak terekspos di URL bar seperti halnya method="GET".',
    points: 10
  },
  {
    id: 'alp_q16',
    subject_slug: 'alpro',
    subtopic: 'Modul II: Array Homogen vs Heterogen',
    question_text: 'Diberikan deklarasi array PHP: $data = array(5, "enam", 7.5, "delapan"). Berdasarkan karakteristik elemen di dalamnya, array tersebut diklasifikasikan sebagai:',
    code_snippet: '<?php\n$data = array(5, "enam", 7.5, "delapan");\n?>',
    options_json: JSON.stringify([
      'Array Homogen',
      'Array Heterogen',
      'Array Multidimensi Asosiatif',
      'Array Boolean'
    ]),
    correct_index: 1,
    explanation: 'Array Heterogen adalah array yang elemen-elemen penyusunnya memiliki tipe data yang berbeda-beda / campuran (pada contoh: memuat integer 5, string "enam", float 7.5, dan string "delapan").',
    points: 10
  },
  {
    id: 'alp_q17',
    subject_slug: 'alpro',
    subtopic: 'Modul II: Inspeksi Array dengan print_r dan pre',
    question_text: 'Mengapa dalam praktikum Alpro (Modul II), fungsi print_r($larik) kerap dibungkus di dalam tag HTML <pre>...</pre>?',
    code_snippet: 'echo "<pre>";\nprint_r($larik);\necho "</pre>";',
    options_json: JSON.stringify([
      'Agar array dienkripsi dan tidak bisa dibaca pengguna',
      'Agar format spasi, tabulasi, dan indentasi struktur array dipertahankan saat dirender di peramban',
      'Agar tipe data array otomatis dikonversi menjadi JSON',
      'Agar elemen array dicetak secara terbalik dari belakang'
    ]),
    correct_index: 1,
    explanation: 'Tag HTML <pre> (preformatted text) memberitahu browser untuk mempertahankan spasi ganda, enter, dan indentasi karakter asli sehingga struktur hirarki pohon array dari print_r() tampil rapi.',
    points: 10
  },
  {
    id: 'alp_q18',
    subject_slug: 'alpro',
    subtopic: 'Modul II: Indeks Array Bawaan',
    question_text: 'Pada deklarasi $larik = array("satu", "dua", "tiga", "empat"); berapakah nilai dari elemen $larik[2]?',
    code_snippet: '<?php\n$larik = array("satu", "dua", "tiga", "empat");\necho $larik[2];\n?>',
    options_json: JSON.stringify([
      'satu',
      'dua',
      'tiga',
      'empat'
    ]),
    correct_index: 2,
    explanation: 'Indeks array numerik dalam PHP dimulai dari angka 0. Indeks 0 = "satu", indeks 1 = "dua", indeks 2 = "tiga", dan indeks 3 = "empat".',
    points: 10
  },
  {
    id: 'alp_q19',
    subject_slug: 'alpro',
    subtopic: 'Modul II: Konstanta PHP',
    question_text: 'Manakah cara pendefinisian konstanta (*constant*) yang benar dalam PHP agar nilainya tidak dapat diubah sepanjang eksekusi skrip?',
    code_snippet: null,
    options_json: JSON.stringify([
      'define("PI", 3.14);',
      '$PI = const(3.14);',
      'var constant PI = 3.14;',
      'const $PI = 3.14;'
    ]),
    correct_index: 0,
    explanation: 'Konstanta didefinisikan menggunakan fungsi bawaan define("NAMA_KONSTANTA", nilai) atau kata kunci const NAMA = nilai tanpa tanda dollar ($).',
    points: 10
  },
  {
    id: 'alp_q20',
    subject_slug: 'alpro',
    subtopic: 'Modul III: Pedoman Arah Flowchart',
    question_text: 'Berdasarkan pedoman pembuatan flowchart standar (Modul III), penggambaran alur diagram alir yang benar dilakukan dari arah mana?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Bawah ke atas dan kanan ke kiri',
      'Atas ke bawah dan kiri ke kanan',
      'Pojok kanan bawah melingkar searah jarum jam',
      'Bebas dari segala arah tanpa aturan khusus'
    ]),
    correct_index: 1,
    explanation: 'Pedoman baku pembuatan flowchart menetapkan bahwa alur proses digambarkan mengalir dari halaman atas ke bawah (top-to-bottom) dan dari kiri ke kanan (left-to-right).',
    points: 10
  },
  {
    id: 'alp_q21',
    subject_slug: 'alpro',
    subtopic: 'Modul III: Simbol Konektor On-Page vs Off-Page',
    question_text: 'Apabila sebuah alur flowchart terputus dan perlu dilanjutkan ke halaman kertas kerja berikutnya yang berbeda, simbol apakah yang wajib digunakan?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Lingkaran Kecil (On-Page Connector)',
      'Segilima Terbalik (Off-Page Connector)',
      'Persegi Panjang (Process)',
      'Jajaran Genjang (I/O)'
    ]),
    correct_index: 1,
    explanation: 'Simbol segilima terbalik (Off-Page Connector) digunakan khusus untuk menyambungkan alur diagram alir yang berpindah ke halaman lembar kerja lain yang terpisah.',
    points: 10
  },
  {
    id: 'alp_q22',
    subject_slug: 'alpro',
    subtopic: 'Modul III: Deklarasi Dokumen HTML5',
    question_text: 'Tanda tag awal pada baris pertama dokumen HTML yang berfungsi menginformasikan pada browser bahwa dokumen mematuhi standar HTML5 adalah:',
    code_snippet: null,
    options_json: JSON.stringify([
      '<!DOCTYPE html>',
      '<?xml version="1.0"?>',
      '<head html5="true">',
      '<html version="5">'
    ]),
    correct_index: 0,
    explanation: '<!DOCTYPE html> adalah Document Type Declaration yang menginformasikan kepada browser bahwa dokumen tersebut mematuhi standar HTML5.',
    points: 10
  },
  {
    id: 'alp_q23',
    subject_slug: 'alpro',
    subtopic: 'Modul III: Anatomi Bagian Head vs Body',
    question_text: 'Di dalam struktur anatomi dokumen HTML, di manakah tag <title> harus diletakkan?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Di dalam tag <body>',
      'Di dalam tag <head>',
      'Di luar tag <html> paling bawah',
      'Di dalam tag <footer>'
    ]),
    correct_index: 1,
    explanation: 'Tag <title> yang menentukan judul tab browser adalah elemen metadata dan wajib diletakkan di dalam kontainer <head> ... </head>.',
    points: 10
  },
  {
    id: 'alp_q24',
    subject_slug: 'alpro',
    subtopic: 'Modul IV: Sekuensi Billing Warnet',
    question_text: 'Seseorang menyewa komputer warnet mulai pukul 10:15 dan selesai pukul 11:45. Jika tarif sewa Rp 150 per menit, berapakah total biaya yang harus dibayar?',
    code_snippet: 'Tarif = 150 / menit\nMulai: 10:15\nSelesai: 11:45',
    options_json: JSON.stringify([
      'Rp 9.000',
      'Rp 13.500',
      'Rp 15.000',
      'Rp 11.250'
    ]),
    correct_index: 1,
    explanation: 'Durasi = (11:45 - 10:15) = 1 jam 30 menit = 90 menit. Total biaya = 90 menit * Rp 150 = Rp 13.500.',
    points: 10
  },
  {
    id: 'alp_q25',
    subject_slug: 'alpro',
    subtopic: 'Modul IV: Sensitivitas Urutan Sekuensi',
    question_text: 'Perhatikan kode sekuensial berikut. Apa yang terjadi jika baris ke-2 dan baris ke-3 ditukar posisinya?',
    code_snippet: '1: $panjang = 10;\n2: $lebar = 5;\n3: $luas = $panjang * $lebar;\n4: echo $luas;',
    options_json: JSON.stringify([
      'Program tetap berjalan normal dan hasilnya sama persis',
      'Terjadi Warning/Error Undefined variable $lebar dan nilai $luas menjadi 0',
      'Nilai luas menjadi 50',
      'Kompiler PHP otomatis membetulkan urutan eksekusi'
    ]),
    correct_index: 1,
    explanation: 'Struktur sekuensial dieksekusi dari atas ke bawah. Jika baris 3 dijalankan sebelum $lebar diinisialisasi pada baris 2, variabel $lebar belum memiliki nilai (undefined), sehingga hasil perhitungan luas keliru.',
    points: 10
  },
  {
    id: 'alp_q26',
    subject_slug: 'alpro',
    subtopic: 'Modul V: Sapaan Seleksi nilai-matkul.php',
    question_text: 'Pada proyek praktikum nilai-matkul.php, jika pengguna memilih radio button jenis kelamin dengan value="L", sapaan apakah yang otomatis disematkan di depan nama mahasiswa?',
    code_snippet: 'if (strtoupper($jk) == "L" || strtolower($jk) == "laki-laki") {\n    $panggilan = "Mas";\n} elseif (strtoupper($jk) == "P" || strtolower($jk) == "perempuan") {\n    $panggilan = "Mba";\n}',
    options_json: JSON.stringify([
      'Bapak',
      'Mas',
      'Mba',
      'Saudara'
    ]),
    correct_index: 1,
    explanation: 'Sesuai spesifikasi logika seleksi modul V nilai-matkul.php, jika jenis kelamin bernilai "L" (Laki-laki), variabel $panggilan diisi teks "Mas". Jika "P", diisi "Mba".',
    points: 10
  },
  {
    id: 'alp_q27',
    subject_slug: 'alpro',
    subtopic: 'Modul V: Perhitungan Bobot nilai-matkul.php',
    question_text: 'Seorang mahasiswa memiliki nilai: Lain-lain = 80, UTS = 70, dan UAS = 90. Mengacu pada bobot resmi praktikum nilai-matkul.php (40% Lain, 30% UTS, 30% UAS), berapakah total nilai akhirnya?',
    code_snippet: '$total = (0.40 * 80) + (0.30 * 70) + (0.30 * 90);',
    options_json: JSON.stringify([
      '80.00',
      '79.00',
      '83.00',
      '77.50'
    ]),
    correct_index: 0,
    explanation: 'Kalkulasi bobot: (0.40 * 80) = 32. (0.30 * 70) = 21. (0.30 * 90) = 27. Total = 32 + 21 + 27 = 80.00 (Mendapat Grade A).',
    points: 10
  },
  {
    id: 'alp_q28',
    subject_slug: 'alpro',
    subtopic: 'Modul V: Type Casting Form Input',
    question_text: 'Mengapa dalam pemrosesan form PHP nilai-matkul.php digunakan sintaks (float)$_POST["uts"]?',
    code_snippet: '$uts = (float)$_POST["uts"];',
    options_json: JSON.stringify([
      'Untuk mengubah bilangan desimal menjadi teks string',
      'Untuk mengonversi data string dari input form HTML menjadi tipe data pecahan agar dapat dihitung secara matematis',
      'Untuk membatasi nilai maksimal agar tidak lebih dari 100',
      'Untuk menyimpan nilai langsung ke database MySQL'
    ]),
    correct_index: 1,
    explanation: 'Secara bawaan, semua data yang dikirim melalui formulir HTML ditangkap oleh $_POST sebagai string. Penulisan (float) melakukan type casting eksplisit ke tipe bilangan pecahan agar operasi perkalian bobot akurat.',
    points: 10
  },
  {
    id: 'alp_q29',
    subject_slug: 'alpro',
    subtopic: 'Modul V: Operator Ternary PHP',
    question_text: 'Berapakah nilai variabel $hasil dari evaluasi operator ternary berikut?',
    code_snippet: '<?php\n$skor = 65;\n$hasil = ($skor >= 70) ? "Lulus" : (($skor >= 60) ? "Remidi" : "Gagal");\necho $hasil;\n?>',
    options_json: JSON.stringify([
      'Lulus',
      'Remidi',
      'Gagal',
      'Error sintaks'
    ]),
    correct_index: 1,
    explanation: 'Kondisi pertama ($skor >= 70) bernilai false (karena 65 < 70). Maka kontrol berpindah ke cabang alternatif kedua: ($skor >= 60) bernilai true (65 >= 60), sehingga menghasilkan string "Remidi".',
    points: 10
  },
  {
    id: 'alp_q30',
    subject_slug: 'alpro',
    subtopic: 'Modul VI: Jumlah Iterasi For Loop',
    question_text: 'Berapa kali kalimat "Belajar PHP" dicetak ke layar oleh perulangan for di bawah ini?',
    code_snippet: '<?php\nfor ($i = 0; $i < 10; $i += 3) {\n    echo "Belajar PHP<br>";\n}\n?>',
    options_json: JSON.stringify([
      '3 kali',
      '4 kali',
      '10 kali',
      'Infinite loop'
    ]),
    correct_index: 1,
    explanation: 'Nilai variabel $i pada tiap iterasi: i=0 (ke-1), i=3 (ke-2), i=6 (ke-3), i=9 (ke-4). Saat i=12, kondisi i < 10 bernilai false dan perulangan berhenti. Total eksekusi adalah 4 kali.',
    points: 10
  },
  {
    id: 'alp_q31',
    subject_slug: 'alpro',
    subtopic: 'Modul VI: Karakteristik While Loop',
    question_text: 'Perhatikan kode perulangan while berikut. Berapa kali kata "Loop" akan dicetak?',
    code_snippet: '<?php\n$x = 10;\nwhile ($x < 5) {\n    echo "Loop ";\n    $x++;\n}\n?>',
    options_json: JSON.stringify([
      '0 kali (tidak sama sekali)',
      '1 kali',
      '5 kali',
      '10 kali'
    ]),
    correct_index: 0,
    explanation: 'Perulangan while adalah pre-tested loop (kondisi diuji di awal). Karena kondisi awal (10 < 5) bernilai false, blok perulangan di dalamnya sama sekali tidak pernah dijalankan (0 kali).',
    points: 10
  },
  {
    id: 'alp_q32',
    subject_slug: 'alpro',
    subtopic: 'Modul VI: Tracing Perulangan Do-While',
    question_text: 'Apakah keluaran dari skrip perulangan do...while berikut?',
    code_snippet: '<?php\n$k = 50;\ndo {\n    echo $k . " ";\n    $k += 10;\n} while ($k < 20);\n?>',
    options_json: JSON.stringify([
      'Tidak ada keluaran sama sekali',
      '50 ',
      '50 60 ',
      'Infinite loop'
    ]),
    correct_index: 1,
    explanation: 'Pada do...while, tubuh loop dijalankan terlebih dahulu sebelum memeriksa kondisi while. Maka $k mencetak 50, lalu $k menjadi 60. Pengujian (60 < 20) bernilai false, sehingga perulangan berhenti. Hasil keluaran: "50 ".',
    points: 10
  },
  {
    id: 'alp_q33',
    subject_slug: 'alpro',
    subtopic: 'Modul VI: Perulangan Bersarang Segitiga',
    question_text: 'Dalam perulangan bersarang pembuat segitiga bintang (Modul VI), apakah peran dari perulangan luar (outer loop) dan perulangan dalam (inner loop)?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Outer loop mengatur jumlah kolom, inner loop mengatur jumlah baris',
      'Outer loop mengatur pergerakan baris, inner loop mengatur pencetakan bintang pada kolom baris aktif',
      'Keduanya mencetak bintang secara acak',
      'Outer loop menghitung luas segitiga, inner loop menghitung keliling'
    ]),
    correct_index: 1,
    explanation: 'Dalam pola bersarang 2D, perulangan luar (outer loop) menentukan baris ($i dari 1 sampai tinggi), sedangkan perulangan dalam (inner loop) mencetak karakter kolom ($j dari 1 sampai $i).',
    points: 10
  },
  {
    id: 'alp_q34',
    subject_slug: 'alpro',
    subtopic: 'Modul VI: Tracing Angka Segitiga Bersarang',
    question_text: 'Apakah keluaran dari kode perulangan bersarang berikut?',
    code_snippet: '<?php\nfor ($i = 1; $i <= 3; $i++) {\n    for ($j = 1; $j <= $i; $j++) {\n        echo $j;\n    }\n    echo " ";\n}\n?>',
    options_json: JSON.stringify([
      '1 12 123 ',
      '1 22 333 ',
      '123 123 123 ',
      '3 2 1 '
    ]),
    correct_index: 0,
    explanation: 'Saat i=1: j=1 -> cetak 1. Saat i=2: j=1,2 -> cetak 12. Saat i=3: j=1,2,3 -> cetak 123. Dipisahkan spasi pada tiap baris luar menjadi "1 12 123 ".',
    points: 10
  },
  {
    id: 'alp_q35',
    subject_slug: 'alpro',
    subtopic: 'Modul VI: Perulangan Foreach Array Asosiatif',
    question_text: 'Manakah konstruksi perulangan yang paling tepat dan efisien di PHP untuk membaca pasangan kunci dan nilai (*key-value pair*) pada sebuah array?',
    code_snippet: null,
    options_json: JSON.stringify([
      'foreach ($array as $key => $val)',
      'for ($i = 0; $i < count($array); $i++)',
      'while ($key == $val)',
      'do { echo $array; } while(true);'
    ]),
    correct_index: 0,
    explanation: 'Konstruksi foreach ($array as $key => $val) dirancang khusus di PHP untuk melakukan traversal seluruh elemen array asosiatif secara aman tanpa butuh kalkulasi indeks manual.',
    points: 10
  },
  {
    id: 'alp_q36',
    subject_slug: 'alpro',
    subtopic: 'Modul VII: Kata Kunci Global Variabel',
    question_text: 'Agar sebuah prosedur dapat membaca dan memodifikasi nilai variabel yang dideklarasikan di luar tubuh fungsinya, kata kunci apakah yang wajib disertakan?',
    code_snippet: 'function hitungTotal() {\n    // kata kunci apa?\n    $total_belanja = 50000;\n}',
    options_json: JSON.stringify([
      'static $total_belanja;',
      'global $total_belanja;',
      'public $total_belanja;',
      'extern $total_belanja;'
    ]),
    correct_index: 1,
    explanation: 'Kata kunci global $variabel; di dalam fungsi memberitahu PHP untuk menghubungkan variabel lokal ke variabel global yang berada di luar fungsi, sehingga perubahannya memengaruhi variabel global tersebut.',
    points: 10
  },
  {
    id: 'alp_q37',
    subject_slug: 'alpro',
    subtopic: 'Modul VII: Superglobal GLOBALS',
    question_text: 'Selain kata kunci global, array superglobal bawaan PHP manakah yang dapat digunakan langsung untuk mengakses variabel global di mana saja di dalam skrip?',
    code_snippet: null,
    options_json: JSON.stringify([
      '$_SERVER',
      '$_ENV',
      '$GLOBALS',
      '$_REQUEST'
    ]),
    correct_index: 2,
    explanation: '$GLOBALS adalah associative array superglobal bawaan PHP yang menyimpan referensi ke seluruh variabel global yang sedang aktif dalam ruang lingkup skrip.',
    points: 10
  },
  {
    id: 'alp_q38',
    subject_slug: 'alpro',
    subtopic: 'Modul VII: Diskon Bertingkat tugas-output.php',
    question_text: 'Pada skrip tugas-output.php, jika total belanja pelanggan adalah Rp 120.000 dengan aturan: total >= 100.000 diskon 10%, total >= 50.000 diskon 5%. Berapakah total yang harus dibayar?',
    code_snippet: 'Total Belanja = 120.000\nDiskon >= 100.000 adalah 10%',
    options_json: JSON.stringify([
      'Rp 120.000',
      'Rp 108.000',
      'Rp 114.000',
      'Rp 96.000'
    ]),
    correct_index: 1,
    explanation: 'Total belanja 120.000 memenuhi syarat >= 100.000, sehingga memperoleh diskon 10% = 0.10 * 120.000 = Rp 12.000. Total bayar = 120.000 - 12.000 = Rp 108.000.',
    points: 10
  },
  {
    id: 'alp_q39',
    subject_slug: 'alpro',
    subtopic: 'Modul VII: Karakteristik Parameter Bawaan PHP',
    question_text: 'Secara bawaan (*default*), bagaimana mekanisme pengiriman argumen parameter ke dalam suatu fungsi pada bahasa PHP jika tidak menggunakan tanda ampersand (&)?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Passing by Reference (mengirim alamat memori)',
      'Passing by Value (menyalin salinan nilai)',
      'Passing by Pointer',
      'Passing by Array'
    ]),
    correct_index: 1,
    explanation: 'Secara default, parameter PHP bekerja secara Passing by Value: nilai argumen disalin ke variabel lokal fungsi, sehingga manipulasi di dalam fungsi tidak mengubah variabel asli pemanggilnya.',
    points: 10
  },
  {
    id: 'alp_q40',
    subject_slug: 'alpro',
    subtopic: 'Modul VII: Perbedaan Method GET vs POST',
    question_text: 'Manakah pernyataan yang BENAR mengenai perbedaan pengiriman formulir HTML menggunakan method="GET" vs method="POST"?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Method GET mengirim data di HTTP body, sedangkan POST menampilkannya di URL peramban',
      'Method POST mengirim data di HTTP request body dan tidak terlihat di URL bar, cocok untuk kata sandi dan data rahasia',
      'Method POST memiliki batas panjang maksimal 2048 karakter, sedangkan GET tidak terbatas',
      'Method GET hanya bisa digunakan jika server menggunakan sistem operasi Linux'
    ]),
    correct_index: 1,
    explanation: 'Method POST menyematkan data dalam HTTP message body sehingga tidak terekspos di URL bar browser dan tidak memiliki batas panjang seketat method GET, menjadikannya pilihan standar untuk keamanan form.',
    points: 10
  }
];

module.exports = questions;
