const basdatExplanations = [
  {
    id: 'exp_basdat_bab1',
    subject_slug: 'basdat',
    chapter_order: 1,
    topic_title: 'Bab 1: Pengantar Sistem Basis Data, Kelemahan Pemrosesan Berkas, & Komponen DBMS',
    content_markdown: `# Bab 1: Pengantar Sistem Basis Data & Arsitektur DBMS

## 1. Evolusi Pemrosesan Data: Manual, Berkas, ke Basis Data

Sebelum era sistem manajemen basis data modern, pengelolaan data organisasi melewati fase **Sistem Pemrosesan Manual** (berbasis lemari arsip fisik/kertas) dan **Sistem Pemrosesan Berkas Tradisional** (*File-Based Processing System* menggunakan file terpisah seperti text/spreadsheet).

### Tiga Kelemahan Fatal Sistem Pemrosesan Berkas Tradisional:
1. **Kemubaziran Data (*Data Redundancy*)**:
   - Data yang sama dicatat berulang-ulang di berbagai departemen/aplikasi yang berbeda karena tidak ada mekanisme berbagi data terpusat (*lack of data sharing*). Akibatnya, pemborosan ruang penyimpanan (*storage overhead*).
2. **Ketidakkonsistenan Data (*Data Inconsistency*)**:
   - Terjadi ketika data yang sama diubah di satu berkas aplikasi, namun tidak diperbarui di berkas aplikasi lain (misal: mahasiswa pindah alamat diperbarui di bagian akademik, tapi di bagian keuangan masih alamat lama). Hal ini merusak **integritas data**.
3. **Kekurangluwesan & Ketergantungan Format (*Lack of Data Independence*)**:
   - Struktur data terikat erat dengan kode program (*program-data dependence*). Jika format berkas diubah (misalnya menambah kolom kode pos), seluruh program aplikasi yang membaca berkas tersebut wajib ditulis ulang dan dikompilasi kembali.

> **Definisi Independensi Data (*Data Independence*):**
> Sifat ketahanan sistem di mana perubahan pada struktur penyimpanan internal berkas/tabel **tidak mempengaruhi** program aplikasi pengguna, dan sebaliknya perubahan program aplikasi tidak mengubah representasi data fisik di penyimpanan.

---

## 2. Analogi Lemari Arsip & Definisi Basis Data

Basis data dapat dianalogikan secara konseptual seperti sebuah **Lemari Arsip Kantor**:
- Lemari arsip memiliki berbagai map folder yang tersusun rapi menurut kategori tertentu (abjad, tanggal, nomor induk).
- Keduanya memiliki prinsip kerja yang sama: **pengaturan data terstruktur**.
- **Tujuan Utama Basis Data**: Menjamin **kemudahan (*ease*)** dan **kecepatan (*speed/performance*)** saat penyimpanan, pengorganisasian, dan pengambilan kembali (*retrieval*) data.

> **Definisi Formal Basis Data (*Database*):**
> Kumpulan data yang saling berelasi secara logis, disimpan secara terstruktur dan terpadu (*integrated*) di media penyimpanan komputer, serta dikelola untuk memenuhi kebutuhan informasi berbagai pemakai dalam suatu organisasi tanpa redundansi yang merugikan.

---

## 3. Tujuh (7) Komponen Utama DBMS (Database Management System)

DBMS adalah perangkat lunak perantara (*middleware*) yang memfasilitasi pembuatan, pemeliharaan, manipulasi, dan pengamanan basis data.

| No | Komponen Utama DBMS | Peran & Deskripsi Operasional | Contoh Wujud Nyata |
| :---: | :--- | :--- | :--- |
| **1** | **Perangkat Keras (*Hardware*)** | Infrastruktur fisik komputer tempat DBMS dan data beroperasi. | Komputer server, hard disk enterprise (SSD/NVMe RAID), memori RAM, switch jaringan. |
| **2** | **Perangkat Lunak (*Software*)** | Program DBMS itu sendiri, sistem operasi, serta aplikasi klien perantara. | Mesin DBMS (MySQL, PostgreSQL, Oracle 10g/19c, SQL Server, MariaDB), OS Linux/Windows Server. |
| **3** | **Basis Data (*Database*)** | Kumpulan berkas tabel, indeks relasi, dan kamus data (*data dictionary*) yang tersimpan. | File fisik tabel \`.ibd\` (InnoDB MySQL) atau \`.mdf\` (SQL Server). |
| **4** | **Data** | Entitas nilai fakta aktual yang disimpan beserta metadata (definisi skema struktur data). | Rekaman transaksi pembelian, biodata mahasiswa, stok barang, katalog harga. |
| **5** | **Bahasa Akses Basis Data** | Bahasa standar antarmuka untuk mendefinisikan skema dan memanipulasi baris data. | **SQL (Structured Query Language)**: DDL, DML, DQL, DCL, TCL. |
| **6** | **Prosedur (*Procedure*)** | Instruksi tertulis dan pedoman tata kelola operasional (SOP). | Prosedur login hak akses, panduan validasi formulir input, aturan backup berkala, disaster recovery. |
| **7** | **Pengguna (*People/Users*)** | Manusia yang berinteraksi dengan sistem basis data. | Database Administrator (DBA), System Analyst, Application Programmer, End-User (kasir/staf). |`
  },
  {
    id: 'exp_basdat_bab2',
    subject_slug: 'basdat',
    chapter_order: 2,
    topic_title: 'Bab 2: Entity Relationship Diagram (ERD): Notasi Chen, Klasifikasi Atribut, & Derajat Relasi',
    content_markdown: `# Bab 2: Pemodelan Konseptual Entity Relationship Diagram (ERD)

## 1. Komponen Pokok ERD (Notasi Peter Chen)

ERD (*Entity Relationship Diagram*) adalah model konseptual semantik data yang digunakan untuk menggambarkan struktur logis basis data sebelum ditransformasikan menjadi tabel-tabel fisik.

![Klasifikasi Atribut Lengkap ERD Chen](/materials/basdat/jenis-atribut-erd-chen.png)

Tiga komponen utama dalam notasi Chen:
1. **Entitas (*Entity*)**:
   - Objek di dunia nyata yang dapat dibedakan dari objek lain dan bermakna bagi organisasi. Digambarkan dengan simbol **Persegi Panjang**.
   - *Entitas Kuat*: Entitas mandiri yang keberadaannya tidak bergantung pada entitas lain (contoh: \`MAHASISWA\`, \`DOKTER\`, \`BARANG\`).
   - *Entitas Lemah (*Weak Entity*)*: Entitas yang keberadaannya mutlak bergantung pada entitas kuat; tidak memiliki primary key sendiri melainkan hanya *partial key/discriminator*. Digambarkan dengan **Persegi Panjang Ganda** (contoh: \`TANGGUNGAN_ANAK\` bergantung pada entitas \`KARYAWAN\`).
2. **Atribut (*Attribute*)**:
   - Karakteristik atau sifat yang mendeskripsikan suatu entitas. Digambarkan dengan simbol **Elips (Oval)**.
3. **Relasi (*Relationship*)**:
   - Hubungan logis yang mengaitkan dua atau lebih entitas. Digambarkan dengan simbol **Belah Ketupat (Diamond)**.

---

## 2. Taksonomi Enam (6) Jenis Atribut dalam ERD

Berdasarkan struktur dan perilakunya, atribut diklasifikasikan menjadi:

![Atribut Multivalued dan Composite](/materials/basdat/multivalued-composite-erd.png)

| Jenis Atribut | Simbol Notasi Chen | Definisi & Karakteristik | Contoh Konkret |
| :--- | :---: | :--- | :--- |
| **1. Atribut Kunci (*Key Attribute*)** | Elips dengan **teks digarisbawahi** (\`<u>kode_barang</u>\`) | Atribut yang nilainya unik dan membedakan setiap instan baris entitas secara mutlak. | \`NIM\`, \`kode_barang\`, \`no_transaksi\`, \`id_dokter\`. |
| **2. Atribut Sederhana (*Simple/Atomic*)** | Elips tunggal standar | Atribut yang tidak dapat dipecah lagi menjadi bagian-bagian yang lebih kecil yang bermakna. | \`jenis_kelamin\`, \`golongan_darah\`, \`harga_satuan\`. |
| **3. Atribut Komposit (*Composite Attribute*)** | Elips bercabang menjadi sub-elips | Atribut yang dapat dipecah menjadi beberapa sub-atribut komponen yang lebih mendasar. | Atribut \`name\` dipecah menjadi \`first-name\`, \`middle-initial\`, \`last-name\`. Atribut \`address\` dipecah menjadi \`street\`, \`city\`, \`state\`, \`zip-code\`. |
| **4. Atribut Bernilai Tunggal (*Single-Valued*)** | Elips tunggal standar | Atribut yang hanya memiliki tepat satu nilai untuk setiap baris data entitas. | \`tanggal_lahir\`, \`NIM\`. Seseorang hanya memiliki 1 tanggal lahir. |
| **5. Atribut Bernilai Banyak (*Multivalued Attribute*)** | **Elips Ganda (*Double Ellipse*)** | Atribut yang dapat memiliki lebih dari satu nilai untuk instan entitas yang sama. | \`phone_number\` (seseorang bisa memiliki 2–3 nomor HP), \`gelar_akademik\`, \`hobi\`. |
| **6. Atribut Turunan (*Derived Attribute*)** | **Elips Garis Putus-Putus (*Dashed Ellipse*)** | Atribut yang nilainya tidak disimpan permanen, melainkan dihitung (*computed*) dari nilai atribut lain. | \`age\` (dihitung dari selisih tanggal sekarang dengan \`date_of_birth\`), \`total_bayar\` (dihitung dari \`jumlah × harga\`). |

---

## 3. Derajat Relasi (*Relationship Degree*)

Derajat relasi menunjukkan jumlah entitas yang berpartisipasi dalam satu relasi:
1. **Derajat Satu (Relasi Unary / Rekursif)**:
   - Relasi yang menghubungkan satu entitas dengan dirinya sendiri.
   - *Contoh*: Entitas \`KARYAWAN\` memiliki relasi *memimpin/supervisi* terhadap sesama \`KARYAWAN\` (karyawan manajer memimpin karyawan staf).
2. **Derajat Dua (Relasi Binary)**:
   - Relasi yang menghubungkan dua tipe entitas berbeda (merupakan bentuk relasi paling umum).
   - *Contoh*: \`DOKTER\` *membuat* \`RESEP\`, \`PELANGGAN\` *melakukan* \`TRANSAKSI\`.
3. **Derajat Tiga (Relasi Ternary)**:
   - Relasi yang menghubungkan tiga tipe entitas sekaligus dalam satu peristiwa transaksi.
   - *Contoh*: Relasi *pemberian tugas* melibatkan entitas \`PEGAWAI\`, \`PROYEK\`, dan \`LOKASI\`.

---

## 4. Rasio Kardinalitas Hubungan (*Cardinality Ratio*)

Kardinalitas memetakan jumlah maksimum keterlibatan entitas satu terhadap entitas lain:
- **Satu ke Satu (1 : 1)**:
  - Setiap baris pada entitas A berpasangan dengan maksimal 1 baris pada entitas B, dan sebaliknya.
  - *Contoh*: Satu \`DOSEN\` hanya dapat menjabat sebagai Ketua Jurusan di satu \`JURUSAN\`.
- **Satu ke Banyak (1 : N atau 1 : ∞)**:
  - Satu baris pada entitas A dapat berpasangan dengan banyak baris pada entitas B, tetapi satu baris entitas B hanya terikat pada satu baris entitas A.
  - *Contoh*: Satu \`DOKTER\` membuat banyak \`RESEP\`, namun satu lembar resep hanya dibuat oleh tepat satu dokter.
- **Banyak ke Banyak (M : N atau ∞ : ∞)**:
  - Satu baris entitas A berpasangan dengan banyak baris entitas B, dan satu baris entitas B dapat berpasangan dengan banyak baris entitas A.
  - *Contoh*: \`MAHASISWA\` *mengambil* \`MATA_KULIAH\` (satu mahasiswa mengambil banyak matkul, satu matkul diikuti banyak mahasiswa).
  - **Kaidah Relasional**: Relasi M:N **tidak dapat diimplementasikan langsung** dalam basis data relasional. Relasi M:N wajib diurai dengan menghadirkan **Tabel Penghubung (*Bridge Table / Junction Table*)** (misal: tabel \`detail_penjualan\` atau \`ambil_mk\`).`
  },
  {
    id: 'exp_basdat_bab3',
    subject_slug: 'basdat',
    chapter_order: 3,
    topic_title: 'Bab 3: Atribut Kunci (Superkey, Candidate, Primary, Foreign, Composite) & Integritas Relasional',
    content_markdown: `# Bab 3: Atribut Kunci & Integritas Basis Data Relasional

## 1. Konsep Dasar & Hirarki Kunci (*Key Attributes*)

Kunci (*Key*) adalah satu atau gabungan dari beberapa atribut yang menjamin keunikan identifikasi setiap baris rekaman (*tuple*) dalam sebuah tabel relasional.

![Skema Relasi Kunci Tabel Karyawan dan Penggajian](/materials/basdat/skema-relasi-tabel-karyawan.png)

### Hirarki Kunci: Dari Superkey Menuju Primary Key
\`\`\`text
   ┌────────────────────────────────────────────────────────┐
   │                       SUPERKEY                         │
   │  (Satu atau himpunan atribut pengidentifikasi unik)    │
   │  Contoh: (nim), (nim, nama), (nim, alamat, tgl_lahir)  │
   │                                                        │
   │       ┌────────────────────────────────────────┐       │
   │       │             CANDIDATE KEY              │       │
   │       │  (Superkey MINIMAL tanpa atribut liar) │       │
   │       │  Contoh: (nim), (email_kampus)         │       │
   │       │                                        │       │
   │       │       ┌────────────────────────┐       │       │
   │       │       │      PRIMARY KEY       │       │       │
   │       │       │  (Dipilih paling ideal)│       │       │
   │       │       │  Contoh: (nim)         │       │       │
   │       │       └────────────────────────┘       │       │
   │       │                                        │       │
   │       │             ALTERNATE KEY              │       │
   │       │  (Candidate key cadangan)              │       │
   │       │  Contoh: (email_kampus)                │       │
   │       └────────────────────────────────────────┘       │
   └────────────────────────────────────────────────────────┘
\`\`\`

| Jenis Kunci | Definisi Matematis & Karakteristik | Contoh Kasus Tabel Mahasiswa |
| :--- | :--- | :--- |
| **Superkey** | Kumpulan satu atau lebih atribut yang mengidentifikasi baris secara unik. Memiliki kelemahan memuat kolom mubazir. | \`{nim}\`, \`{nim, nama}\`, \`{nim, nama, alamat}\`. |
| **Candidate Key** | Superkey yang **minimal** (tidak memuat subset atribut unik lain). Setiap candidate key pasti superkey, tetapi tidak semua superkey adalah candidate key. | \`{nim}\` dan \`{nomor_ktp}\`. Keduanya sama-sama unik dan ringkas. |
| **Primary Key (PK)** | Candidate key terpilih yang dijadikan penentu identitas utama baris data. Syarat: **tidak boleh bernilai NULL (*NOT NULL*) dan harus UNIK**. | Dipilih \`{nim}\` karena lebih ringkas dan stabil dibanding nomor KTP. |
| **Alternate Key** | Candidate key yang tidak terpilih menjadi Primary Key (kunci alternatif/cadangan). | \`{nomor_ktp}\` atau \`{email}\`. |
| **Composite Key** | Primary key yang dibentuk dari **kombinasi dua atau lebih atribut** secara bersama-sama. | Tabel \`detail_transaksi\` menggunakan \`(no_transaksi, kode_barang)\` sebagai PK gabungan. |
| **Foreign Key (FK)** | Atribut di suatu tabel yang menjadi **Primary Key di tabel lain**. Berfungsi sebagai tali penghubung integritas relasi antar tabel. | Kolom \`id_pelanggan\` di tabel \`transaksi\` merujuk pada PK \`id_pelanggan\` di tabel \`pelanggan\`. |

---

## 2. Aturan Integritas Basis Data Relasional (*Data Integrity*)

DBMS menerapkan aturan integritas otomatis untuk mencegah data rusak (*corrupted data*):

### A. Integritas Entitas (*Entity Integrity Rule*)
- **Aturan**: Setiap tabel wajib memiliki Primary Key, dan nilai atribut Primary Key **TIDAK BOLEH BERNILAI NULL** (*must not be null*) serta tidak boleh duplikat.
- **Rasional**: Jika primary key bernilai NULL, maka baris data tersebut kehilangan identitasnya dan mustahil dibedakan dari rekaman lain.

### B. Integritas Referensial (*Referential Integrity Rule*)
- **Aturan**: Nilai kolom Foreign Key (FK) pada tabel anak (*child table*) **wajib cocok dengan salah satu nilai Primary Key yang sah** pada tabel induk (*parent table*), atau bernilai NULL (jika diperbolehkan).
- **Mekanisme Opsi Perubahan Relasional**:
  1. \`ON DELETE CASCADE\`: Jika baris induk dihapus, seluruh baris anak yang merujuk padanya otomatis ikut dihapus.
  2. \`ON DELETE RESTRICT / NO ACTION\`: Menolak penghapusan baris induk jika masih ada baris anak yang merujuknya.
  3. \`ON DELETE SET NULL\`: Jika baris induk dihapus, nilai kolom FK pada baris anak diubah menjadi NULL.

### C. Integritas Wilayah / Domain (*Domain Integrity*)
- Membatasi jenis, format, rentang nilai, dan tipe data yang sah bagi suatu atribut (misal: kolom \`status\` hanya boleh diisi \`'Tersedia'\`, \`'Disewa'\`, atau \`'Servis'\`).`
  },
  {
    id: 'exp_basdat_bab4',
    subject_slug: 'basdat',
    chapter_order: 4,
    topic_title: 'Bab 4: Teori Normalisasi Basis Data: Anomali Data, 1NF, 2NF, 3NF, & Boyce-Codd (BCNF)',
    content_markdown: `# Bab 4: Teori Normalisasi Basis Data Relasional

## 1. Definisi & Tujuan Normalisasi

**Normalisasi** adalah teknik pendekatan bertahap dalam perancangan basis data relasional dengan menerapkan serangkaian aturan (*normal forms*) untuk menguraikan tabel-tabel kompleks menjadi struktur tabel yang ramping, efisien, dan bebas redundansi.

### Tujuan Pokok Normalisasi:
1. Meminimalkan kemubaziran data (*redundancy minimization*).
2. Memudahkan proses pemeliharaan dan pembaruan data (*efficient updates*).
3. Mencegah terjadinya kehilangan data secara tidak sengaja (*data loss prevention*).
4. Menghilangkan anomali operasi data.

---

## 2. Tiga Jenis Anomali Data pada Tabel Tidak Normal

Jika skema basis data dirancang buruk tanpa normalisasi, sistem akan mengalami tiga anomali fatal:

| Jenis Anomali | Istilah Teknis | Manifestasi Permasalahan Nyata |
| :--- | :--- | :--- |
| **Anomali Penyisipan** | *Insertion Anomaly* | Kondisi di mana data baru **tidak dapat dimasukkan** ke dalam tabel tanpa harus memasukkan data entitas lain yang belum ada. *(Contoh: Tidak bisa memasukkan mata kuliah baru jika belum ada mahasiswa yang mendaftar matkul tersebut).* |
| **Anomali Penghapusan** | *Deletion Anomaly* | Terjadinya **kehilangan informasi penting lain yang tidak diinginkan** saat menghapus suatu baris data. *(Contoh: Ketika menghapus mahasiswa terakhir yang mengambil matkul X, data profil matkul X ikut terhapus dari sistem).* |
| **Anomali Pembaruan** | *Update Anomaly* | Perubahan data pada satu rekaman menyebabkan ketidakkonsistenan karena data yang sama tersimpan di banyak baris dan tidak semuanya ter-update secara serentak. |

---

## 3. Tahapan Tingkatan Bentuk Normal (*Normal Forms*)

\`\`\`text
Tabel Tidak Normal (UNF)
         │
         ▼  Hilangkan repeating group / jadikan setiap kolom bernilai atomik
Bentuk Normal Pertama (1NF)
         │
         ▼  Hilangkan ketergantungan parsial (partial dependency) terhadap primary key komposit
Bentuk Normal Kedua (2NF)
         │
         ▼  Hilangkan ketergantungan transitif (transitive dependency: A -> B -> C)
Bentuk Normal Ketiga (3NF)
         │
         ▼  Setiap penentu (determinant) wajib berupa superkey
Boyce-Codd Normal Form (BCNF)
\`\`\`

### A. Bentuk Normal Pertama (1NF)
- **Syarat Mutlak**: Setiap perpotongan baris dan kolom hanya memuat **satu nilai tunggal (nilai atomik)**.
- **Tindakan**:
  - Tidak boleh ada atribut bernilai ganda (*multivalued*) atau grup berulang (*repeating groups*).
  - Contoh tabel belum 1NF: Kolom \`nomor_telepon\` berisi \`"081234; 085678"\`. Untuk memenuhi 1NF, nilai nomor telepon harus dipisah menjadi baris data atomik tersendiri.

### B. Bentuk Normal Kedua (2NF)
- **Syarat Mutlak**:
  1. Tabel telah memenuhi kriteria **1NF**.
  2. Seluruh atribut bukan kunci (*non-key attributes*) harus bergantung secara fungsional penuh (**Full Functional Dependency**) pada Primary Key.
- **Tindakan**:
  - Menghilangkan **Ketergantungan Parsial (*Partial Dependency*)**, yaitu kondisi di mana atribut non-kunci hanya bergantung pada **sebagian** komponen primary key komposit.
  - *Contoh*: Pada tabel \`detail_transaksi\` dengan PK gabungan \`(no_transaksi, kode_barang)\`, atribut \`nama_barang\` dan \`harga_barang\` hanya bergantung pada \`kode_barang\` saja (bukan gabungan). Maka atribut barang harus dipisahkan ke tabel master \`barang\`.

### C. Bentuk Normal Ketiga (3NF)
- **Syarat Mutlak**:
  1. Tabel telah memenuhi kriteria **2NF**.
  2. Tidak boleh ada **Ketergantungan Transitif (*Transitive Dependency*)**.
- **Definisi Transitif**: Kondisi di mana atribut non-kunci bergantung pada atribut non-kunci lainnya (\`A → B\` dan \`B → C\`, sehingga secara tidak langsung \`A → C\`).
- *Contoh*: Tabel \`karyawan\` memuat kolom \`kode_jabatan\` dan \`nama_jabatan\`. Karena \`nama_jabatan\` bergantung pada \`kode_jabatan\` (bukan langsung pada \`nomor_induk\`), maka \`kode_jabatan\` dan \`nama_jabatan\` harus dipecah ke tabel tersendiri \`jabatan\`.

---

## 4. Dua Syarat Mutlak Dekomposisi Tabel yang Baik
Ketika menguraikan tabel menjadi beberapa tabel normal, perancang wajib menjamin:
1. **Dekomposisi Tanpa Kehilangan Informasi (*Lossless-Join Decomposition*)**: Saat tabel-tabel hasil pecahan dihubungkan kembali menggunakan operasi natural join, hasilnya harus menghasilkan baris rekaman yang persis sama dengan tabel semula (tidak muncul baris fiktif/spurious tuples).
2. **Preservasi Ketergantungan (*Dependency Preservation*)**: Seluruh batasan ketergantungan fungsional awal tetap dapat ditegakkan tanpa harus melakukan join tabel.`
  },
  {
    id: 'exp_basdat_bab5',
    subject_slug: 'basdat',
    chapter_order: 5,
    topic_title: 'Bab 5: Implementasi SQL Komprehensif: Sintaks DDL, DML, DQL (Join & Agregasi) & Studi Kasus Restoran',
    content_markdown: `# Bab 5: Implementasi SQL: DDL, DML, DQL, & Studi Kasus Database Restoran

## 1. Tiga Sub-Bahasa Utama SQL

SQL (*Structured Query Language*) terbagi menjadi sub-bahasa fungsional:
1. **DDL (*Data Definition Language*)**: Perintah untuk mendefinisikan, mengubah, dan menghapus skema struktur objek basis data: \`CREATE\`, \`ALTER\`, \`DROP\`, \`TRUNCATE\`
2. **DML (*Data Manipulation Language*)**: Perintah untuk memanipulasi baris data di dalam tabel: \`INSERT\`, \`UPDATE\`, \`DELETE\`
3. **DQL (*Data Query Language*)**: Perintah untuk mengekstrak, memfilter, dan menyajikan data dari satu atau banyak tabel: \`SELECT\`

---

## 2. Sintaks Lengkap DDL (Data Definition Language)

### Membuat Database & Tabel Relasional
\`\`\`sql
-- 1. Membuat dan memilih database
CREATE DATABASE db_restoran;
USE db_restoran;

-- 2. Membuat tabel master Kategori
CREATE TABLE kategori (
    id_kategori INT AUTO_INCREMENT PRIMARY KEY,
    nama_kategori VARCHAR(50) NOT NULL UNIQUE
);

-- 3. Membuat tabel master Menu
CREATE TABLE menu (
    id_menu INT AUTO_INCREMENT PRIMARY KEY,
    id_kategori INT NOT NULL,
    nama_menu VARCHAR(100) NOT NULL,
    harga DECIMAL(10,2) NOT NULL CHECK (harga >= 0),
    status ENUM('Tersedia', 'Habis') DEFAULT 'Tersedia',
    CONSTRAINT fk_menu_kategori FOREIGN KEY (id_kategori)
        REFERENCES kategori (id_kategori)
        ON UPDATE CASCADE ON DELETE RESTRICT
);
\`\`\`

### Mengubah Struktur Tabel (ALTER TABLE)
\`\`\`sql
-- Menambah kolom baru
ALTER TABLE menu ADD COLUMN kalori INT DEFAULT 0;

-- Mengubah tipe data kolom
ALTER TABLE menu MODIFY COLUMN nama_menu VARCHAR(150) NOT NULL;

-- Menghapus kolom
ALTER TABLE menu DROP COLUMN kalori;
\`\`\`

---

## 3. Sintaks Lengkap DML (Data Manipulation Language)

### A. Memasukkan Baris Data (INSERT)
\`\`\`sql
-- Memasukkan data ke tabel kategori
INSERT INTO kategori (id_kategori, nama_kategori) VALUES
(1, 'Makanan Utama'),
(2, 'Minuman Dingin'),
(3, 'Camilan / Dessert');

-- Memasukkan data ke tabel menu
INSERT INTO menu (id_menu, id_kategori, nama_menu, harga, status) VALUES
(101, 1, 'Nasi Goreng Spesial', 25000.00, 'Tersedia'),
(102, 1, 'Ayam Bakar Madu', 30000.00, 'Tersedia'),
(103, 2, 'Es Teh Manis', 5000.00, 'Tersedia'),
(104, 3, 'Pisang Bakar Keju', 15000.00, 'Tersedia');
\`\`\`

### B. Memperbarui Data (UPDATE)
> **PENTING:** Selalu sertakan klausa \`WHERE\`. Menjalankan \`UPDATE\` tanpa \`WHERE\` akan mengubah seluruh baris dalam tabel!
\`\`\`sql
-- Menaikkan harga Nasi Goreng Spesial menjadi 28000
UPDATE menu 
SET harga = 28000.00 
WHERE id_menu = 101;
\`\`\`

### C. Menghapus Data (DELETE vs TRUNCATE)
\`\`\`sql
-- Menghapus satu menu spesifik
DELETE FROM menu WHERE id_menu = 104;

-- TRUNCATE: Mengosongkan seluruh baris tabel secara cepat dan mereset AUTO_INCREMENT ke 1
TRUNCATE TABLE detail_penjualan;
\`\`\`

---

## 4. Query DQL Lanjutan: Join, Filter, dan Fungsi Agregasi

### A. Penggabungan Dua Tabel (INNER JOIN)
Menggabungkan data dari tabel \`menu\` dan tabel \`kategori\` berdasarkan foreign key:
\`\`\`sql
SELECT 
    m.id_menu,
    m.nama_menu,
    k.nama_kategori,
    m.harga,
    m.status
FROM menu m
INNER JOIN kategori k ON m.id_kategori = k.id_kategori
WHERE m.status = 'Tersedia'
ORDER BY m.harga DESC;
\`\`\`

### B. Pengelompokan & Filter Agregasi (GROUP BY & HAVING)
Menghitung rata-rata harga menu per kategori dan hanya menampilkan kategori yang memiliki rata-rata harga di atas Rp 10.000:
\`\`\`sql
SELECT 
    k.nama_kategori,
    COUNT(m.id_menu) AS total_variasi_menu,
    AVG(m.harga) AS rata_rata_harga
FROM kategori k
LEFT JOIN menu m ON k.id_kategori = m.id_kategori
GROUP BY k.id_kategori, k.nama_kategori
HAVING AVG(m.harga) > 10000;
\`\`\`

> **Perbedaan Klausa WHERE vs HAVING:**
> - \`WHERE\`: Memfilter baris data mentah **sebelum** proses agregasi/pengelompokan dijalankan.
> - \`HAVING\`: Memfilter hasil kalkulasi fungsi agregat (\`COUNT\`, \`SUM\`, \`AVG\`, \`MAX\`, \`MIN\`) **setelah** klausa \`GROUP BY\` dievaluasi.`
  }
];

module.exports = basdatExplanations;
