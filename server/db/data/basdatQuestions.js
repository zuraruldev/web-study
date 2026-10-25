const basdatQuestions = [
  // ==========================================
  // TOPIK 1: Pengantar Basis Data & DBMS
  // ==========================================
  {
    id: 'q_basdat_01',
    subject_slug: 'basdat',
    subtopic: 'Kelemahan Pemrosesan Berkas',
    question_text: 'Manakah dari pernyataan berikut yang BUKAN merupakan kelemahan dari Sistem Pemrosesan Berkas Tradisional (File-based system)?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Adanya sifat independensi data yang memisahkan struktur berkas dari program aplikasi',
      'Terjadinya kemubaziran data (data redundancy) akibat setiap aplikasi menyimpan berkasnya sendiri',
      'Ketidakkonsistenan data (data inconsistency) saat perubahan data tidak serentak di semua berkas',
      'Kekurangluwesan sistem karena perubahan format berkas mengharuskan perubahan kode program'
    ]),
    correct_index: 0,
    explanation: 'Sistem berkas tradisional menderita KETERGANTUNGAN data-program (data dependence). Sifat "independensi data" (data independence) justru merupakan keunggulan yang dihadirkan oleh sistem basis data modern (DBMS) untuk mengatasi kelemahan sistem berkas.',
    points: 10
  },
  {
    id: 'q_basdat_02',
    subject_slug: 'basdat',
    subtopic: 'Konsep Dasar Basis Data',
    question_text: 'Dalam analogi perkuliahan yang membandingkan basis data dengan lemari arsip kantor, apakah tujuan utama dari pengaturan data dalam basis data?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Menjamin kemudahan dan kecepatan dalam pengambilan kembali (retrieval) data/arsip',
      'Mengurangi jumlah pegawai administrasi di kantor',
      'Menyimpan seluruh data hanya dalam format kertas dokumen cetak',
      'Menghapuskan kebutuhan perangkat keras komputer'
    ]),
    correct_index: 0,
    explanation: 'Slide materi kuliah menegaskan bahwa prinsip kerja basis data dan lemari arsip adalah pengaturan data/arsip secara terstruktur, dengan tujuan utama kemudahan dan kecepatan dalam pengambilan kembali data.',
    points: 10
  },
  {
    id: 'q_basdat_03',
    subject_slug: 'basdat',
    subtopic: 'Komponen Utama DBMS',
    question_text: 'Komponen DBMS yang mencakup aturan operasional, panduan validasi pengisian data, prosedur login keamanan, serta jadwal backup data tergolong ke dalam komponen...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Prosedur (Procedure)',
      'Perangkat Lunak (Software)',
      'Basis Data (Database)',
      'Bahasa Akses Basis Data'
    ]),
    correct_index: 0,
    explanation: 'Komponen Prosedur (Procedure) mencakup instruksi dan aturan tertulis yang memandu perancangan, penggunaan, validasi, dan tata kelola operasional basis data dalam organisasi.',
    points: 10
  },
  {
    id: 'q_basdat_04',
    subject_slug: 'basdat',
    subtopic: 'Independensi Data',
    question_text: 'Kemampuan sistem basis data yang memungkinkan perubahan pada struktur penyimpanan fisik (seperti pergantian hard disk atau reorganisasi indeks) tanpa mengubah skema konseptual atau kode aplikasi pengguna disebut...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Independensi Data Fisik (Physical Data Independence)',
      'Independensi Data Logis (Logical Data Independence)',
      'Integritas Referensial',
      'Redundansi Terkontrol'
    ]),
    correct_index: 0,
    explanation: 'Independensi data fisik adalah kapasitas untuk mengubah skema internal/fisik tanpa harus mengubah skema konseptual atau program aplikasi eksternal.',
    points: 10
  },

  // ==========================================
  // TOPIK 2: ERD Notasi Chen & Jenis Atribut
  // ==========================================
  {
    id: 'q_basdat_05',
    subject_slug: 'basdat',
    subtopic: 'Notasi ERD Chen',
    question_text: 'Dalam diagram ERD notasi Peter Chen, simbol belah ketupat (diamond) digunakan untuk merepresentasikan...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Relasi (Relationship) antar entitas',
      'Tipe Entitas Kuat (Strong Entity)',
      'Atribut Bernilai Banyak (Multivalued)',
      'Atribut Turunan (Derived Attribute)'
    ]),
    correct_index: 0,
    explanation: 'Dalam notasi Chen: Persegi Panjang = Entitas, Elips/Oval = Atribut, dan Belah Ketupat (Diamond) = Relasi yang menghubungkan antarentitas.',
    points: 10
  },
  {
    id: 'q_basdat_06',
    subject_slug: 'basdat',
    subtopic: 'Jenis Atribut ERD',
    question_text: 'Atribut yang dapat memiliki lebih dari satu nilai untuk instan entitas yang sama (seperti seseorang yang memiliki 2 nomor telepon) digambarkan dalam ERD notasi Chen dengan simbol...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Elips Ganda (Double Ellipse)',
      'Elips dengan Garis Putus-Putus (Dashed Ellipse)',
      'Persegi Panjang Ganda',
      'Elips dengan Teks Digarisbawahi'
    ]),
    correct_index: 0,
    explanation: 'Atribut bernilai banyak (multivalued attribute, misal: phone_number atau gelar) digambarkan dengan Elips Ganda (Double Ellipse).',
    points: 10
  },
  {
    id: 'q_basdat_07',
    subject_slug: 'basdat',
    subtopic: 'Jenis Atribut ERD',
    question_text: 'Atribut "umur" (age) yang nilainya tidak disimpan permanen melainkan dihitung secara dinamis dari selisih tanggal sekarang dengan "tanggal_lahir" merupakan contoh dari...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Atribut Turunan (Derived Attribute)',
      'Atribut Komposit (Composite Attribute)',
      'Atribut Sederhana (Simple Attribute)',
      'Atribut Kunci Utama (Primary Key)'
    ]),
    correct_index: 0,
    explanation: 'Atribut turunan (derived attribute) nilainya dihasilkan dari perhitungan atribut lain dan dalam notasi Chen digambarkan dengan elips bergaris putus-putus (dashed ellipse).',
    points: 10
  },
  {
    id: 'q_basdat_08',
    subject_slug: 'basdat',
    subtopic: 'Jenis Atribut ERD',
    question_text: 'Atribut "alamat" yang dapat dipecah menjadi sub-atribut yang lebih mendasar seperti "jalan", "kota", "provinsi", dan "kode_pos" diklasifikasikan sebagai...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Atribut Komposit (Composite Attribute)',
      'Atribut Multivalued',
      'Atribut Bernilai Tunggal',
      'Atribut Kunci Pengganti'
    ]),
    correct_index: 0,
    explanation: 'Atribut komposit adalah atribut yang tersusun dari kumpulan komponen atribut atomik yang lebih kecil.',
    points: 10
  },
  {
    id: 'q_basdat_09',
    subject_slug: 'basdat',
    subtopic: 'Derajat Relasi ERD',
    question_text: 'Sebuah relasi pada entitas KARYAWAN di mana seorang karyawan memimpin atau menjadi supervisor bagi karyawan lainnya dalam tabel yang sama disebut relasi berderajat...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Relasi Unary (Derajat Satu / Rekursif)',
      'Relasi Binary (Derajat Dua)',
      'Relasi Ternary (Derajat Tiga)',
      'Relasi N-ary'
    ]),
    correct_index: 0,
    explanation: 'Relasi Unary (derajat satu / recursive relationship) terjadi ketika suatu entitas memiliki hubungan dengan entitas itu sendiri.',
    points: 10
  },
  {
    id: 'q_basdat_10',
    subject_slug: 'basdat',
    subtopic: 'Kardinalitas Relasi',
    question_text: 'Bagaimanakah aturan pemodelan basis data relasional dalam menangani relasi bertipe Banyak ke Banyak (M : N) seperti antara entitas MAHASISWA dan MATA_KULIAH?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Relasi M:N tidak dapat diimplementasikan langsung, sehingga wajib dipecah menjadi dua relasi 1:N dengan menghadirkan tabel perantara (bridge/junction table)',
      'Menggabungkan kedua entitas tersebut menjadi satu tabel tunggal',
      'Menghapus salah satu entitas dari basis data',
      'Menjadikan seluruh atribut di kedua entitas sebagai Primary Key komposit tanpa relasi'
    ]),
    correct_index: 0,
    explanation: 'Dalam model relasional, relasi M:N wajib didekomposisi dengan tabel perantara (junction table, misal: ambil_mk) yang memuat Foreign Key dari kedua tabel induk.',
    points: 10
  },

  // ==========================================
  // TOPIK 3: Atribut Kunci & Integritas Relasional
  // ==========================================
  {
    id: 'q_basdat_11',
    subject_slug: 'basdat',
    subtopic: 'Konsep Atribut Kunci',
    question_text: 'Apakah perbedaan esensial antara Superkey dan Candidate Key pada tabel relasional?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Superkey adalah sembarang kumpulan atribut pengidentifikasi unik (dapat memuat kolom mubazir), sedangkan Candidate Key adalah Superkey yang minimal tanpa atribut berlebih',
      'Candidate Key boleh bernilai NULL, sedangkan Superkey tidak boleh NULL',
      'Superkey hanya terdiri dari satu kolom, sedangkan Candidate Key wajib gabungan dua kolom',
      'Superkey disimpan di dalam tabel, sedangkan Candidate Key disimpan di luar tabel'
    ]),
    correct_index: 0,
    explanation: 'Candidate key adalah superkey minimal. Artinya, jika sembarang atribut dihilangkan dari candidate key, ia kehilangan sifat uniknya.',
    points: 10
  },
  {
    id: 'q_basdat_12',
    subject_slug: 'basdat',
    subtopic: 'Atribut Kunci',
    question_text: 'Pada tabel MAHASISWA terdapat atribut unik: NIM dan NOMOR_KTP. Jika perancang memilih NIM sebagai Primary Key, maka NOMOR_KTP berkedudukan sebagai...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Alternate Key (Kunci Pengganti / Kunci Cadangan)',
      'Foreign Key (Kunci Tamu)',
      'Composite Key (Kunci Komposit)',
      'Partial Key'
    ]),
    correct_index: 0,
    explanation: 'Alternate Key adalah candidate key yang tidak terpilih menjadi primary key.',
    points: 10
  },
  {
    id: 'q_basdat_13',
    subject_slug: 'basdat',
    subtopic: 'Atribut Kunci',
    question_text: 'Pada tabel DETAIL_PENJUALAN yang mencatat barang-barang yang dibeli dalam suatu transaksi, Primary Key dibentuk dari gabungan (no_transaksi, kode_barang). Kunci seperti ini disebut...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Composite Key (Kunci Gabungan / Komposit)',
      'Single Key',
      'Superkey Tak Berbatas',
      'Alternate Key'
    ]),
    correct_index: 0,
    explanation: 'Composite Key adalah Primary Key yang tersusun dari kombinasi dua atau lebih atribut untuk menjamin keunikan setiap baris.',
    points: 10
  },
  {
    id: 'q_basdat_14',
    subject_slug: 'basdat',
    subtopic: 'Atribut Kunci',
    question_text: 'Suatu atribut pada tabel anak (child table) yang nilainya merujuk langsung kepada Primary Key pada tabel induk (parent table) dinamakan...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Foreign Key (Kunci Tamu)',
      'Primary Key',
      'Candidate Key',
      'Secondary Index'
    ]),
    correct_index: 0,
    explanation: 'Foreign Key adalah atribut penghubung antar tabel yang nilainya mengacu pada Primary Key tabel lain untuk menjaga integritas relasional.',
    points: 10
  },
  {
    id: 'q_basdat_15',
    subject_slug: 'basdat',
    subtopic: 'Integritas Basis Data',
    question_text: 'Aturan integritas entitas (Entity Integrity Rule) menetapkan syarat mutlak bahwa Primary Key suatu tabel...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Tidak boleh bernilai NULL (NOT NULL) dan harus bernilai unik pada setiap baris',
      'Boleh bernilai NULL asalkan berupa angka genap',
      'Wajib bertipe data VARCHAR dengan panjang 100 karakter',
      'Harus selalu dienkripsi dengan algoritma hash satu arah'
    ]),
    correct_index: 0,
    explanation: 'Integritas entitas menjamin bahwa setiap baris dapat diidentifikasi secara unik, sehingga nilai Primary Key tidak boleh NULL dan tidak boleh ada nilai duplikat.',
    points: 10
  },
  {
    id: 'q_basdat_16',
    subject_slug: 'basdat',
    subtopic: 'Integritas Referensial',
    question_text: 'Jika pada definisi Foreign Key diterapkan opsi "ON DELETE CASCADE", apakah yang terjadi ketika suatu baris data pada tabel induk dihapus?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Seluruh baris pada tabel anak yang merujuk pada baris induk tersebut akan otomatis ikut terhapus',
      'Penghapusan pada tabel induk akan otomatis ditolak dan menghasilkan error sistem',
      'Nilai Foreign Key pada tabel anak akan diubah menjadi nilai 0',
      'Tabel anak akan terhapus seluruh strukturnya'
    ]),
    correct_index: 0,
    explanation: 'Opsi CASCADE memastikan bahwa penghapusan pada record induk akan diteruskan secara berantai untuk menghapus seluruh record anak yang bergantung padanya.',
    points: 10
  },

  // ==========================================
  // TOPIK 4: Teori Normalisasi & Anomali Data
  // ==========================================
  {
    id: 'q_basdat_17',
    subject_slug: 'basdat',
    subtopic: 'Anomali Data',
    question_text: 'Peristiwa di mana penghapusan data mahasiswa yang mengundurkan diri menyebabkan data profil mata kuliah langka ikut terhapus dan hilang dari sistem adalah contoh dari...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Anomali Penghapusan (Deletion Anomaly)',
      'Anomali Penyisipan (Insertion Anomaly)',
      'Anomali Pembaruan (Update Anomaly)',
      'Ketergantungan Parsial'
    ]),
    correct_index: 0,
    explanation: 'Deletion anomaly terjadi ketika menghapus baris data tertentu mengakibatkan hilangnya informasi penting lain yang tidak diinginkan karena kedua data tercampur dalam tabel yang tidak normal.',
    points: 10
  },
  {
    id: 'q_basdat_18',
    subject_slug: 'basdat',
    subtopic: 'Bentuk Normal Pertama (1NF)',
    question_text: 'Suatu tabel dikatakan memenuhi Bentuk Normal Pertama (1NF) jika dan hanya jika...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Setiap perpotongan baris dan kolom hanya memuat nilai tunggal (nilai atomik) dan tidak ada grup berulang (repeating group)',
      'Tabel telah memiliki minimal tiga buah Foreign Key',
      'Seluruh nama kolom menggunakan huruf kapital',
      'Tabel tidak memiliki relasi dengan tabel lainnya'
    ]),
    correct_index: 0,
    explanation: 'Syarat 1NF adalah setiap kolom harus memuat nilai atomik (atomic value, tidak dapat dipecah lagi) dan tabel bebas dari repeating groups atau atribut bernilai ganda.',
    points: 10
  },
  {
    id: 'q_basdat_19',
    subject_slug: 'basdat',
    subtopic: 'Bentuk Normal Kedua (2NF)',
    question_text: 'Kondisi di mana suatu atribut non-kunci hanya bergantung secara fungsional pada SEBAGIAN dari komponen Primary Key komposit dinamakan...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Ketergantungan Parsial (Partial Functional Dependency)',
      'Ketergantungan Transitif (Transitive Dependency)',
      'Ketergantungan Fungsional Penuh',
      'Integritas Domain'
    ]),
    correct_index: 0,
    explanation: 'Partial dependency terjadi ketika atribut non-kunci hanya bergantung pada salah satu bagian dari primary key gabungan. Untuk mencapai 2NF, ketergantungan parsial ini wajib dihilangkan.',
    points: 10
  },
  {
    id: 'q_basdat_20',
    subject_slug: 'basdat',
    subtopic: 'Bentuk Normal Ketiga (3NF)',
    question_text: 'Untuk mencapai Bentuk Normal Ketiga (3NF), syarat yang harus dipenuhi setelah tabel berada dalam bentuk 2NF adalah...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Menghilangkan seluruh ketergantungan transitif (transitive dependency), di mana atribut non-kunci tidak boleh bergantung pada atribut non-kunci lainnya',
      'Mengubah seluruh tipe data teks menjadi tipe data angka',
      'Menambahkan kolom tanggal pembuatan pada setiap tabel',
      'Menghapus primary key komposit'
    ]),
    correct_index: 0,
    explanation: 'Bentuk normal ketiga (3NF) mensyaratkan tabel sudah 2NF dan tidak ada ketergantungan transitif (X -> Y dan Y -> Z, di mana Z tidak boleh bergantung pada Y yang bukan kandidat kunci).',
    points: 10
  },
  {
    id: 'q_basdat_21',
    subject_slug: 'basdat',
    subtopic: 'Syarat Dekomposisi Normalisasi',
    question_text: 'Istilah yang menyatakan bahwa pemecahan (dekomposisi) suatu tabel menjadi beberapa tabel normal dijamin tidak akan kehilangan data saat digabungkan kembali dengan operasi JOIN adalah...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Lossless-Join Decomposition',
      'Dependency Preservation',
      'Boyce-Codd Property',
      'Functional Integrity'
    ]),
    correct_index: 0,
    explanation: 'Lossless-join decomposition menjamin rekonstruksi tabel awal melalui relasi join menghasilkan dataset yang persis sama tanpa kehilangan tuple maupun memunculkan tuple fiktif palsu.',
    points: 10
  },

  // ==========================================
  // TOPIK 5: SQL DDL, DML, DQL & Studi Kasus
  // ==========================================
  {
    id: 'q_basdat_22',
    subject_slug: 'basdat',
    subtopic: 'Klasifikasi Perintah SQL',
    question_text: 'Kelompok perintah SQL yang digunakan untuk mendefinisikan dan memodifikasi struktur objek skema basis data (seperti CREATE, ALTER, DROP, TRUNCATE) disebut...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Data Definition Language (DDL)',
      'Data Manipulation Language (DML)',
      'Data Query Language (DQL)',
      'Data Control Language (DCL)'
    ]),
    correct_index: 0,
    explanation: 'DDL bertugas membuat dan memodifikasi skema fisik objek basis data (tabel, view, index). DML memanipulasi isi baris (INSERT, UPDATE, DELETE). DQL mengambil data (SELECT).',
    points: 10
  },
  {
    id: 'q_basdat_23',
    subject_slug: 'basdat',
    subtopic: 'Perintah DDL (ALTER TABLE)',
    question_text: 'Perintah SQL manakah yang benar untuk menambahkan kolom baru "no_telepon VARCHAR(20)" ke dalam tabel "pelanggan" yang sudah ada?',
    code_snippet: null,
    options_json: JSON.stringify([
      'ALTER TABLE pelanggan ADD COLUMN no_telepon VARCHAR(20);',
      'UPDATE TABLE pelanggan ADD no_telepon VARCHAR(20);',
      'INSERT INTO pelanggan COLUMN no_telepon VARCHAR(20);',
      'CREATE COLUMN no_telepon VARCHAR(20) IN pelanggan;'
    ]),
    correct_index: 0,
    explanation: 'Sintaks DDL untuk memodifikasi struktur tabel yang telah dibuat adalah ALTER TABLE nama_tabel ADD COLUMN nama_kolom tipe_data.',
    points: 10
  },
  {
    id: 'q_basdat_24',
    subject_slug: 'basdat',
    subtopic: 'Perintah DDL vs DML (DELETE vs TRUNCATE)',
    question_text: 'Apakah perbedaan teknis antara perintah DELETE FROM menu dan TRUNCATE TABLE menu?',
    code_snippet: null,
    options_json: JSON.stringify([
      'DELETE adalah DML yang menghapus baris satu per satu dan dapat difilter dengan WHERE, sedangkan TRUNCATE adalah DDL yang mengosongkan seluruh tabel secara instan dan mereset counter AUTO_INCREMENT',
      'DELETE menghapus struktur tabel, sedangkan TRUNCATE hanya mengubah nama tabel',
      'DELETE lebih cepat dibanding TRUNCATE untuk tabel berukuran jutaan baris',
      'TRUNCATE dapat dibatalkan dengan perintah ROLLBACK pada semua jenis DBMS'
    ]),
    correct_index: 0,
    explanation: 'DELETE adalah operasi DML berbasis baris dan mencatat log per baris. TRUNCATE adalah DDL yang mengalokasikan ulang halaman data secara langsung, mereset counter auto increment, dan tidak mendukung klausa WHERE.',
    points: 10
  },
  {
    id: 'q_basdat_25',
    subject_slug: 'basdat',
    subtopic: 'Perintah DML (UPDATE)',
    question_text: 'Perhatikan perintah SQL berikut:\nUPDATE menu SET harga = 25000;\nApakah dampak dari eksekusi perintah tersebut terhadap basis data restoran?',
    code_snippet: 'UPDATE menu SET harga = 25000;',
    options_json: JSON.stringify([
      'Seluruh menu di dalam tabel tanpa terkecuali akan berubah harganya menjadi Rp 25.000 karena tidak menyertakan klausa WHERE',
      'Perintah tersebut akan otomatis gagal dan memunculkan pesan error sintaks',
      'Hanya baris menu pertama yang harganya berubah menjadi Rp 25.000',
      'Hanya menu yang memiliki harga di bawah Rp 25.000 yang akan diperbarui'
    ]),
    correct_index: 0,
    explanation: 'Klausa WHERE berfungsi sebagai filter penentu baris yang diubah. Jika perintah UPDATE dijalankan tanpa klausa WHERE, DBMS akan memperbarui seluruh rekaman dalam tabel secara serentak!',
    points: 10
  },
  {
    id: 'q_basdat_26',
    subject_slug: 'basdat',
    subtopic: 'Query DQL (Wildcard LIKE)',
    question_text: 'Perintah SQL untuk menampilkan data pelanggan yang alamat emailnya berakhiran "@gmail.com" adalah...',
    code_snippet: null,
    options_json: JSON.stringify([
      'SELECT * FROM pelanggan WHERE email LIKE \'%@gmail.com\';',
      'SELECT * FROM pelanggan WHERE email = \'@gmail.com%\';',
      'SELECT * FROM pelanggan WHERE email CONTAINS \'@gmail.com\';',
      'SELECT * FROM pelanggan WHERE email IN (\'@gmail.com\');'
    ]),
    correct_index: 0,
    explanation: 'Karakter wildcard % pada operator LIKE mencocokkan nol atau lebih karakter sembarang. Pola \'%@gmail.com\' berarti teks diakhiri dengan @gmail.com.',
    points: 10
  },
  {
    id: 'q_basdat_27',
    subject_slug: 'basdat',
    subtopic: 'Query DQL (INNER JOIN)',
    question_text: 'Perhatikan query penggabungan tabel:\nSELECT m.nama_menu, k.nama_kategori\nFROM menu m\nINNER JOIN kategori k ON m.id_kategori = k.id_kategori;\nApakah fungsi dari klausa INNER JOIN pada query di atas?',
    code_snippet: 'SELECT m.nama_menu, k.nama_kategori\nFROM menu m\nINNER JOIN kategori k ON m.id_kategori = k.id_kategori;',
    options_json: JSON.stringify([
      'Menggabungkan baris dari kedua tabel yang memiliki nilai id_kategori yang cocok (match) di kedua tabel',
      'Menampilkan semua menu meskipun tidak memiliki kategori yang sah',
      'Menghapus kategori yang belum memiliki daftar menu',
      'Mengurutkan nama kategori berdasarkan abjad terbalik'
    ]),
    correct_index: 0,
    explanation: 'INNER JOIN mengembalikan rekaman yang memiliki nilai yang cocok (matching records) pada kolom penghubung (id_kategori) di kedua tabel yang digabungkan.',
    points: 10
  },
  {
    id: 'q_basdat_28',
    subject_slug: 'basdat',
    subtopic: 'Query DQL (WHERE vs HAVING)',
    question_text: 'Apakah perbedaan mendasar antara klausa WHERE dan klausa HAVING dalam query SQL?',
    code_snippet: null,
    options_json: JSON.stringify([
      'WHERE memfilter baris sebelum pengelompokan (GROUP BY), sedangkan HAVING memfilter hasil perhitungan fungsi agregasi setelah pengelompokan',
      'WHERE hanya digunakan untuk angka, sedangkan HAVING hanya digunakan untuk teks',
      'HAVING dijalankan lebih dahulu sebelum tabel dibaca oleh mesin basis data',
      'WHERE wajib didampingi klausa JOIN, sedangkan HAVING tidak boleh menggunakan JOIN'
    ]),
    correct_index: 0,
    explanation: 'Klausa WHERE diterapkan untuk memfilter baris individual sebelum proses agregasi. Klausa HAVING digunakan untuk memfilter baris hasil agregat (seperti AVG, SUM, COUNT) setelah klausa GROUP BY dieksekusi.',
    points: 10
  },
  {
    id: 'q_basdat_29',
    subject_slug: 'basdat',
    subtopic: 'Query DQL (Agregasi COUNT)',
    question_text: 'Query SQL manakah yang benar untuk menghitung jumlah total pesanan yang berstatus "Selesai" pada tabel transaksi?',
    code_snippet: null,
    options_json: JSON.stringify([
      'SELECT COUNT(*) FROM transaksi WHERE status = \'Selesai\';',
      'SELECT TOTAL(*) FROM transaksi WHERE status = \'Selesai\';',
      'SELECT SUM(status) FROM transaksi WHERE status = \'Selesai\';',
      'SELECT ROWS FROM transaksi WHERE status = \'Selesai\';'
    ]),
    correct_index: 0,
    explanation: 'Fungsi agregat COUNT(*) digunakan untuk menghitung jumlah total baris yang memenuhi kriteria filter WHERE.',
    points: 10
  },
  {
    id: 'q_basdat_30',
    subject_slug: 'basdat',
    subtopic: 'Studi Kasus Relasional Klinik',
    question_text: 'Dalam basis data klinik sederhana, tabel RESEP dan tabel OBAT memiliki hubungan relasi M : N (satu resep memuat banyak obat, satu jenis obat diresepkan ke banyak pasien). Apakah fungsi dari tabel DETAIL_RESEP?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Sebagai tabel perantara (bridge table) dengan Composite Key (no_resep, kode_obat) untuk memecah relasi M:N menjadi dua relasi 1:N',
      'Sebagai tabel arsip cadangan jika klinik kehabisan stok obat',
      'Untuk menggantikan fungsi tabel DOKTER dalam mencatat diagnosis',
      'Menghapus resep yang sudah kadaluarsa secara otomatis'
    ]),
    correct_index: 0,
    explanation: 'Dalam studi kasus tugas teori basis data, entitas DETAIL_RESEP berfungsi sebagai penghubung (bridge table) antara RESEP dan OBAT dengan Composite Key (NO_RESEP, KODE_OBAT) yang bertindak sebagai Foreign Key ke masing-masing tabel induk.',
    points: 10
  }
];

module.exports = basdatQuestions;
