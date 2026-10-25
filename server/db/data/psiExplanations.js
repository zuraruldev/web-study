const psiExplanations = [
  {
    id: 'exp_psi_bab1',
    subject_slug: 'psi',
    chapter_order: 1,
    topic_title: 'Bab 1: Konsep Dasar Sistem: Karakteristik, Elemen Hirarki, Subsistem, & 10 Klasifikasi Sistem',
    content_markdown: `# Bab 1: Konsep Dasar Sistem

## 1. Definisi & Hakikat Sistem

Dalam konteks keilmuan Pengantar Sistem Informasi (Dosen Pengampu: Riyadi Purwanto, S.T., M.Eng. - Politeknik Negeri Cilacap), **Sistem** didefinisikan sebagai:
> *"Sekumpulan unsur (elemen/kegiatan/prosedur) yang saling terpadu dan bekerjasama satu sama lain, di mana keberadaannya membentuk sebuah fungsi terpadu untuk mencapai suatu tujuan bersama."*

### Contoh Nyata Sistem di Sekitar Kita:
1. **Sistem Komputer**:
   - *Unsur*: Keyboard, CPU, Monitor, Mouse, Printer, Modem, Storage.
   - *Tujuan*: Mengolah data masukan menjadi keluaran informasi yang bermanfaat.
2. **Sistem Tubuh Manusia**:
   - *Unsur*: Organ tubuh (jantung, paru-paru, lambung), syaraf, panca indra.
   - *Tujuan*: Menjaga kelangsungan hidup dan fungsi biologis manusia.
3. **Sistem Pabrik / Manufaktur**:
   - *Unsur*: Tenaga kerja (orang), mesin produksi, bahan baku, order pesanan.
   - *Tujuan*: Menghasilkan barang produksi yang memenuhi standar kualitas dan kuantitas.

---

## 2. Karakteristik Sistem

Suatu entitas dapat dikatakan sebagai sistem jika memenuhi 8 karakteristik pokok:

| Karakteristik | Istilah Teknis | Penjelasan Teoritis |
| :--- | :--- | :--- |
| **Komponen** | *Component* | Sesuatu yang menjadi bagian penyusun sistem; dapat berwujud benda konkret, aturan operasional, maupun manusia. |
| **Batas Sistem** | *Boundary* | Daerah pemisah yang membatasi suatu sistem dengan sistem lainnya atau dengan lingkungan luarnya. |
| **Lingkungan Luar** | *Environment* | Apapun yang berada di luar batas sistem yang dapat mempengaruhi kinerja sistem (baik menguntungkan maupun merugikan). |
| **Penghubung** | *Interface* | Media penghubung atau jembatan antarkomponen yang memungkinkan aliran data, sinyal, atau sumber daya mengalir. |
| **Masukan** | *Input* | Bahan atau energi yang dimasukkan ke dalam sistem untuk diproses lebih lanjut. |
| **Pengolahan** | *Processing* | Aktivitas atau transformasi yang mengolah bahan masukan menjadi hasil keluaran. |
| **Keluaran** | *Output* | Hasil akhir dari proses pengolahan, baik berupa informasi yang berguna maupun sisa pembuangan. |
| **Sasaran & Tujuan** | *Objective / Goal* | Target atau hasil akhir spesifik yang ingin dicapai oleh sistem dalam kurun waktu tertentu. |

---

## 3. Elemen Sistem & Diagram Hirarki Sistem

![Hirarki Elemen Sistem: Input, Proses, Output, Control, Feedback, Goal](/materials/psi/hirarki-elemen-sistem.png)

Sebuah sistem yang dinamis tidak hanya bergerak lurus dari masukan ke keluaran, melainkan memiliki mekanisme kontrol dan evaluasi:

1. **Input (Masukan)**: Semua sumber atau data yang dimasukkan ke dalam sistem sebagai bahan baku pemrosesan.
2. **Proses (Transformasi)**: Operasi atau algoritma yang mentransformasikan input menjadi output. Melibatkan analisis, manipulasi, dan kalkulasi.
3. **Output (Keluaran)**: Luaran informasi atau produk yang dihasilkan sistem, digunakan untuk pengambilan keputusan manajemen.
4. **Tujuan (*Goal & Objective*)**: Pencapaian akhir yang hendak diraih dalam jangka panjang (*goal*) maupun target operasional terukur (*objective*).
5. **Kendali (*Control*)**: Mekanisme yang menjaga agar sistem tetap berjalan sesuai dengan standar operasional dan rencana yang telah ditetapkan.
6. **Umpan Balik (*Feedback*)**: Informasi hasil pengukuran operasional proses yang dikembalikan ke unit kendali untuk mengoreksi kondisi menyimpang agar kembali ke standar normal.

---

## 4. Subsistem & Antarmuka Subsistem (*Subsystem Interface*)

![Sub Sistem dan Antarmuka Sub Sistem](/materials/psi/subsistem-antarmuka.png)

Suatu sistem yang besar terdiri dari sekumpulan **subsistem** yang saling berinteraksi:
- Setiap subsistem memiliki fungsi, tugas, dan batasannya sendiri dalam konteks sistem yang lebih besar.
- **Contoh**: Dalam *Sistem Komputer*, terdapat subsistem CPU, subsistem Masukan (Input), subsistem Keluaran (Output), dan subsistem Penyimpanan (Storage).

> **Pentingnya Antarmuka Subsistem (*Subsystem Interface*):**
> Antarmuka subsistem adalah area titik temu tempat pertukaran informasi, data, atau sumber daya terjadi antarsubsistem. **Tanpa adanya antarmuka subsistem, suatu sistem hanyalah kumpulan subsistem yang berdiri sendiri-sendiri, terisolasi, dan tidak saling berkaitan.**

---

## 5. Sepuluh (10) Klasifikasi Sistem dalam Ilmu PSI

Sistem dapat dikelompokkan ke dalam 10 klasifikasi berdasarkan sudut pandang operasionalnya:

1. **Sistem Tertutup (*Closed System*)**:
   - Sistem yang bekerja secara independen tanpa terpengaruh oleh lingkungan luarnya dan tidak menerima input eksternal secara bebas.
2. **Sistem Terbuka (*Open System*)**:
   - Sistem yang selalu berhubungan dan berinteraksi dengan lingkungan luarnya untuk menerima masukan dan menghasilkan keluaran. Sistem ini adaptif dan fleksibel terhadap perubahan lingkungan.
3. **Sistem Alamiah (*Natural System*)**:
   - Sistem yang terbentuk secara alami tanpa campur tangan manusia berdasarkan hukum alam (contoh: sistem tata surya, sistem peredaran darah, siklus air).
4. **Sistem Buatan Manusia (*Human Made System*)**:
   - Sistem yang dirancang, dibangun, dan dioperasikan oleh manusia menggunakan teknologi untuk mencapai tujuan tertentu (contoh: sistem komputer, sistem mobil, sistem pabrik).
5. **Sistem Konseptual / Abstrak (*Abstract System*)**:
   - Sistem yang tersusun atas konsep, teori, atau ide-ide yang tidak tampak wujud fisiknya secara kasat mata (contoh: sistem operasi, algoritma program, teologi filsafat).
6. **Sistem Fisik (*Physical System*)**:
   - Sistem yang memiliki keberadaan nyata secara fisik dan dapat dijamah oleh panca indra (contoh: perangkat keras server, mesin cetak, gedung kampus).
7. **Sistem Deterministik (*Deterministic System*)**:
   - Sistem yang perilakunya dapat diprediksi dan dideteksi secara pasti karena operasinya berjalan mengikuti aturan tetap (contoh: program komputer penghitung faktorial, mesin kasir).
8. **Sistem Probabilistik (*Probabilistic System*)**:
   - Sistem yang perilakunya mengandung unsur ketidakpastian atau kemungkinan; keluarannya diprediksi menggunakan distribusi statistik probabilitas (contoh: sistem prakiraan cuaca, sistem fluktuasi pasar saham).
9. **Sistem Artifisial (*Artificial System*)**:
   - Sistem buatan manusia yang melibatkan teknologi kecerdasan buatan (*Artificial Intelligence*) atau robotika untuk mengambil keputusan secara otomatis.
10. **Sistem Penjelasan Tingkah Laku (*Manned System*)**:
    - Sistem yang operasionalnya sangat bergantung pada intervensi, kehadiran, dan kontrol langsung dari manusia (*human-in-the-loop*).`
  },
  {
    id: 'exp_psi_bab2',
    subject_slug: 'psi',
    chapter_order: 2,
    topic_title: 'Bab 2: Konsep Dasar Informasi: Siklus Informasi, Faktor Nilai, Dimensi Kualitas, & Tiga Pilar Informasi',
    content_markdown: `# Bab 2: Konsep Dasar Informasi

## 1. Definisi Informasi & Perbedaannya dengan Data

Dalam mata kuliah Pengantar Sistem Informasi:
- **Data**: Kumpulan fakta mentah (*raw facts*), rekaman peristiwa, angka, atau simbol yang belum diolah dan belum memiliki arti bagi penerimanya.
- **Informasi**: **Hasil pengolahan data** yang telah disusun menjadi sebuah bentuk yang memiliki arti (*meaningful*) dan memberikan kegunaan nyata bagi penggunanya dalam pengambilan keputusan.

### Contoh Perbedaan Nyata Data vs Informasi:

| Domain Kasus | Data Mentah (Belum Diolah) | Informasi yang Dihasilkan (Bernilai) |
| :--- | :--- | :--- |
| **Kependudukan** | Biodata penduduk perorangan (nama, NIK, tanggal lahir, alamat, pekerjaan, gaji). | Jumlah total penduduk kota, rasio penduduk miskin penerima bansos, Daftar Pemilih Tetap (DPT) Pemilu. |
| **Akademik Kampus** | Nilai angka kuis mahasiswa (80, 65, 90), presensi kehadiran per pertemuan. | Nilai Indeks Prestasi (IP), IPK kumulatif semester, daftar mahasiswa terancam Drop Out (DO), transkrip ijazah kelulusan. |

---

## 2. Siklus Informasi (*The Information Cycle*)

Data yang diolah menjadi informasi tidak berhenti begitu saja, melainkan berputar dalam sebuah siklus berkesinambungan:

\`\`\`text
                ┌──────────────────────────────────────────────┐
                │                                              ▼
          [ DATA BARU ]                                    [ DATA ]
                ▲                                              │
                │                                              ▼
        [ HASIL TINDAKAN ]                                [ PROSES / MODEL ]
                ▲                                              │
                │                                              ▼
       [ TINDAKAN / KEPUTUSAN ] ◄──────── [ PENERIMA ] ◄─── [ INFORMASI ]
\`\`\`

1. **Tahap Input Data**: Fakta mentah ditangkap dari transaksi atau observasi lapangan.
2. **Tahap Proses**: Model pengolahan data (perhitungan, filter, agregasi) dijalankan.
3. **Tahap Output Informasi**: Informasi tersaji kepada pemakai (*user/decision maker*).
4. **Tahap Keputusan & Tindakan**: Penerima menafsirkan informasi dan membuat tindakan nyata.
5. **Tahap Hasil Tindakan**: Tindakan tersebut memicu event atau transaksi baru di dunia nyata, yang kembali ditangkap sebagai **Data Baru**.

---

## 3. Faktor-Faktor Informasi: Fungsi, Nilai, Mutu, dan Biaya

### A. Fungsi Informasi
1. **Menambah Pengetahuan**: Memperkaya wawasan pemakai atas suatu fenomena.
2. **Mengurangi Ketidakpastian**: Menghilangkan keraguan saat manajer harus memilih alternatif solusi.
3. **Mengurangi Risiko Kegagalan**: Membantu memprediksi potensi kendala sebelum terjadi.
4. **Mengurangi Keanekaragaman (*Varian*)**: Menyederhanakan kompleksitas masalah menjadi poin-poin terukur.
5. **Memberikan Standar**: Menetapkan batas, ukuran, dan aturan dalam operasional organisasi.

### B. Nilai Informasi (*Value of Information*)
Nilai suatu informasi ditentukan oleh:
- Kemudahan dalam memperolehnya.
- Kelengkapan dan cakupan isi.
- Ketelitian (*accuracy*).
- Kecocokan dengan kebutuhan pemakai (*relevance*).
- Ketepatan waktu penyampaian (*timeliness*).
- Kejelasan (*clarity*) dan keluwesan (*flexibility*).
- Dapat dibuktikan kebenarannya (faktual, bukan prasangka atau takhayul).

### C. Komponen Biaya Informasi (*Information Cost*)
Mendapatkan informasi memerlukan investasi sumber daya:
1. **Biaya Perangkat Keras (*Hardware Cost*)**: Pembelian server, komputer, router, dan media storage.
2. **Biaya Analisis & Desain Sistem**: Honor analis sistem, programmer, dan biaya lisensi perangkat lunak.
3. **Biaya Tempat & Lingkungan**: Ruang server berpendingin khusus (AC), UPS, dan genset darurat.
4. **Biaya Perubahan (*Change Cost*)**: Pelatihan ulang staf dan adaptasi metode kerja baru.
5. **Biaya Operasional (*Operational Cost*)**: Listrik, langganan internet, kertas struk, dan pemeliharaan berkala.

---

## 4. Tiga Dimensi Kualitas Informasi

Informasi yang berkualitas harus memenuhi tiga dimensi standar:

### 1. Dimensi Waktu (*Time Dimension*)
- **Ketepatan Waktu (*Timeliness*)**: Informasi harus tersedia persis saat pengambil keputusan membutuhkannya.
- **Kekinian (*Currency*)**: Informasi harus selalu diperbarui dan merefleksikan kondisi paling mutakhir.
- **Frekuensi (*Frequency*)**: Informasi disediakan sesering yang dibutuhkan oleh unit bisnis.
- **Periode Waktu (*Time Period*)**: Informasi dapat menyajikan data historis masa lalu, kondisi riil saat ini, maupun proyeksi masa depan.

### 2. Dimensi Isi (*Content Dimension*)
- **Keakuratan (*Accuracy*)**: Informasi harus bebas dari kesalahan pengetikan, kesalahan hitung, dan bebas dari bias.
- **Relevansi (*Relevance*)**: Informasi harus memiliki kaitan langsung dengan masalah atau tugas yang dihadapi pemakai.
- **Kelengkapan (*Completeness*)**: Seluruh variabel data yang dibutuhkan disajikan secara utuh tanpa ada yang disembunyikan.
- **Cakupan (*Scope*)**: Informasi dapat disesuaikan untuk kebutuhan sempit (fokus internal departemen) atau kebutuhan luas (lingkungan eksternal industri).

### 3. Dimensi Bentuk (*Form Dimension*)
- **Kejelasan (*Clarity*)**: Informasi disajikan dalam tata letak yang mudah dipahami dan tidak membingungkan.
- **Kerincian (*Detail*)**: Informasi dapat ditampilkan dalam bentuk rekap ringkasan (*summary*) untuk direktur eksekutif, atau rincian mendalam (*detail*) untuk staf operasional.
- **Penyajian (*Presentation*)**: Disajikan dalam bentuk narasi teks, visual grafik, tabel numerik, atau audio/video.

---

## 5. Tiga Pilar Utama Informasi (Pilar Informasi)

> **Tiga Pilar Kualitas Informasi yang Wajib Ada:**
> 1. **Akurat**: Informasi harus mencerminkan keadaan yang sebenarnya tanpa bias atau kekeliruan.
> 2. **Tepat Waktu**: Informasi yang datang ke tangan penerima tidak boleh terlambat (informasi yang kadaluarsa tidak memiliki nilai keputusan).
> 3. **Relevan**: Informasi yang disajikan memiliki kegunaan dan manfaat langsung bagi pihak yang menerimanya.`
  },
  {
    id: 'exp_psi_bab3',
    subject_slug: 'psi',
    chapter_order: 3,
    topic_title: 'Bab 3: Data, Informasi, Pengetahuan: Rantai Nilai DIKW, Tacit vs Explicit, & IM vs KM',
    content_markdown: `# Bab 3: Data, Informasi, Pengetahuan, dan Manajemen Informasi

## 1. Rantai Nilai DIKW (Data - Information - Knowledge - Wisdom)

![Piramida Data, Informasi, dan Pengetahuan](/materials/psi/piramida-data-informasi-pengetahuan.png)

Dalam literatur manajemen sistem informasi (*Davenport & Prusak 1997, McFadden 1999, Davis 1999*), terdapat hierarki pemahaman bertingkat:

| Entitas | Definisi Konseptual | Ciri Karakteristik | Contoh Kasus Lampu Lalu Lintas | Contoh Kasus Suhu Ruangan |
| :--- | :--- | :--- | :--- | :--- |
| **DATA** | Fakta mentah, rekaman angka, atau kode hasil tangkapan sensor yang belum diorganisasikan. | Belum memiliki arti spesifik, terisolasi. | *"Lampu kuning menyala"* | *"Sensor membaca suhu 20 °C"* |
| **INFORMASI** | Data terstruktur yang dihubungkan sehingga memperlihatkan makna bagi manusia. | Menjawab pertanyaan *Who, What, Where, When*. | *"Lampu kuning berarti tanda harus bersiap mengerem mobil"* | *"Suhu 20 °C menunjukkan kondisi ruangan sedang dingin"* |
| **PENGETAHUAN** | Informasi yang digabungkan dengan pemahaman, pengalaman, dan pembelajaran terakumulasi. | Menjawab pertanyaan *How*, tersimpan dalam pikiran dan praktik kerja. | *"Saya harus menginjak rem agar tidak ditilang, namun di persimpangan ini saya harus waspada ditabrak dari belakang jika berhenti mendadak."* | *"Mahasiswa yang sedang flu disarankan memakai jaket tebal agar tidak masuk angin."* |

---

## 2. Komponen Pembentuk Pengetahuan (*Knowledge Components*)

Pengetahuan di dalam organisasi tidak hanya berupa arsip dokumen, melainkan melekat pada manusia:
1. **Intuisi**: Firasat atau kepekaan mendalam yang terlatih dari jam terbang kerja.
2. **Kebenaran Dasar (*Ground Truth*)**: Fakta riil di lapangan yang terbukti benar lewat pembuktian nyata.
3. **Kemampuan Membuat Penilaian (*Judgment*)**: Keahlian menimbang berbagai alternatif solusi saat menghadapi situasi ambigu.
4. **Pengalaman**: Pelajaran berharga dari keberhasilan maupun kegagalan masa lampau.
5. **Asumsi**: Kerangka keyakinan awal saat menganalisis pasar (contoh: apakah saat krisis harga harus diturunkan atau dipertahankan).
6. **Kepercayaan (*Belief*)**: Prinsip etika dan keyakinan profesional yang dianut.
7. **Inteligensi**: Kapasitas kognitif untuk menghubungkan konsep-konsep baru secara cepat.

---

## 3. Klasifikasi Pengetahuan: Tacit Knowledge vs Explicit Knowledge

Para pakar manajemen pengetahuan membagi pengetahuan manusia menjadi dua kutub:

| Aspek Komparasi | Pengetahuan Tasit (*Tacit Knowledge*) | Pengetahuan Eksplisit (*Explicit Knowledge*) |
| :--- | :--- | :--- |
| **Definisi** | Pengetahuan yang tersimpan di dalam benak kepala manusia (pengalaman pribadi, keahlian khusus, intuisi praktis). | Pengetahuan yang telah didokumentasikan, diformalkan, dan dikodifikasikan secara sistematis. |
| **Karakteristik** | Sangat sulit diartikulasikan dengan kata-kata, sulit distandarkan, dan personal. | Mudah ditransmisikan, mudah digandakan, dan menggunakan bahasa formal. |
| **Media Penyimpanan** | Pengalaman hidup, ingatan ahli (*expert*), kebiasaan kerja sehari-hari (*work habits*). | Buku manual, dokumen PDF SOP, basis data relasional, diagram alur, repositori kode. |
| **Cara Pengembangan** | Melalui proses uji coba langsung (*trial and error*), magang (*apprenticeship*), dan praktik bertahun-tahun. | Melalui membaca modul, mempelajari spesifikasi teknis, atau mengikuti pelatihan tertulis. |

---

## 4. Manajemen Informasi (IM) vs Manajemen Pengetahuan (KM)

Seringkali kedua istilah ini dianggap sama, padahal keduanya memiliki lokus fokus yang berbeda:

> **Rumusan Ringkas Dosen:**
> - **Information Management (IM)** mengurusi **DATA & INFORMASI** agar terkumpul, terorganisasi rapi, dan mudah dicari serta digunakan kembali.
> - **Knowledge Management (KM)** mengurusi **MANUSIA** di dalamnya agar terus termotivasi untuk belajar, produktif, dan mau berbagi pengetahuan (*knowledge sharing*).

### Matriks Komparasi IM vs KM:

| Pembeda | Manajemen Informasi (*Information Management / IM*) | Manajemen Pengetahuan (*Knowledge Management / KM*) |
| :--- | :--- | :--- |
| **Fokus Utama** | Mengelola aset dokumen, data, dan sistem teknologi informasi. | Mengelola manusia, budaya kolaborasi, dan lingkungan pembelajaran (*learning environment*). |
| **Aktivitas Kunci** | Pengumpulan informasi, pengolahan, pengindeksan basis data, pengemasan ulang (*repackaging*), dan temu kembali informasi (*information retrieval*). | Pembelajaran individu/kelompok, sesi mentoring, *community of practice*, lokakarya transfer keahlian, dan *knowledge sharing*. |
| **Peran bagi Orang Lain** | Informasi yang tersimpan menjadi masukan (*input*) bagi karyawan lain. | Mengubah pengalaman individual menjadi aset intelektual kolektif organisasi agar tidak hilang saat karyawan pensiun. |`
  },
  {
    id: 'exp_psi_bab4',
    subject_slug: 'psi',
    chapter_order: 4,
    topic_title: 'Bab 4: Konsep Dasar Sistem Informasi: 6 Komponen Burch-Grudnitski, 10 Kategori SI, & Personel SI',
    content_markdown: `# Bab 4: Konsep Dasar Sistem Informasi Organisasi

## 1. Definisi Sosioteknologi Sistem Informasi

![Apakah Sistem Informasi Itu?](/materials/psi/definisi-sistem-informasi.png)

Sistem Informasi bukan sekadar perangkat komputer, melainkan suatu **sistem sosioteknologi** terpadu:
> *"Sistem Informasi adalah suatu sistem yang mengombinasikan **Orang**, **Teknologi Informasi**, **Prosedur Kerja**, dan **Informasi** untuk mencapai suatu tujuan bisnis atau operasional organisasi."*

![Lingkungan Sosioteknologi Menurut O'Brien](/materials/psi/lingkungan-sosioteknologi-obrien.png)

### Lingkungan Sosioteknologi (O'Brien, 1996):
Keberhasilan Sistem Informasi di dalam perusahaan dipengaruhi oleh 5 elemen yang saling bertaut:
1. **Struktur Organisasi**: Pembagian divisi, wewenang, dan tanggung jawab kerja.
2. **Strategi Manajemen**: Visi bisnis jangka panjang dan keunggulan kompetitif.
3. **Proses Bisnis**: Alur kerja transaksi operasional dari awal hingga akhir.
4. **Sistem & Teknologi Informasi**: Perangkat lunak, perangkat keras, dan infrastruktur jaringan.
5. **Orang dan Budaya**: Kebiasaan kerja, nilai-nilai moral, dan penerimaan pengguna (*user acceptance*).

---

## 2. Enam (6) Komponen Sistem Informasi (John Burch & Gary Grudnitski)

Pakar sistem informasi John Burch dan Gary Grudnitski merumuskan bahwa Sistem Informasi dibentuk oleh 6 blok komponen pembangun:

1. **Perangkat Keras (*Hardware*)**:
   - Seluruh perangkat fisik yang digunakan dalam pemrosesan data (komputer klien, server basis data, media penyimpanan SAN/NAS, scanner barcode, router jaringan).
2. **Perangkat Lunak (*Software*)**:
   - Program aplikasi dan instruksi kode yang dijalankan pada perangkat keras (Sistem Operasi Windows/Linux, web browser, aplikasi ERP, DBMS MySQL/Oracle/PostgreSQL).
3. **Basis Data (*Database*)**:
   - Kumpulan data terstruktur yang disimpan secara terintegrasi dan aman, memungkinkan pengambilan (*query*), pembaruan, dan manipulasi data secara efisien tanpa redundansi.
4. **Jaringan (*Network & Telecommunication*)**:
   - Infrastruktur media komunikasi (kabel LAN, fiber optik, Wi-Fi, internet) yang menghubungkan komputer dan perangkat dalam sistem sehingga terjadi pertukaran data secara cepat.
5. **Prosedur (*Procedure*)**:
   - Serangkaian instruksi baku (SOP), aturan, dan tahapan langkah yang memandu manusia dalam memasukkan data, validasi, otorisasi transaksi, pencadangan (*backup*), dan penanganan error.
6. **Manusia (*People*)**:
   - Pengguna akhir (*end-user*), administrator jaringan, analis sistem, programmer, dan manajer IT yang berinteraksi langsung dalam siklus hidup sistem informasi.

---

## 3. Sepuluh (10) Kategori Sistem Informasi dalam Organisasi

Di dalam dunia industri nyata, Sistem Informasi dikelompokkan berdasarkan tujuan fungsionalnya:

| No | Kategori Sistem Informasi | Tujuan & Sasaran Operasional | Contoh Nyata Aplikasi |
| :---: | :--- | :--- | :--- |
| **1** | **Sistem Informasi Manajemen (MIS)** | Membantu manajemen madya (*middle management*) dalam perencanaan, pengendalian, dan evaluasi laporan rutin. | *Decision Support System (DSS), Customer Relationship Management (CRM), SCM*. |
| **2** | **Sistem Informasi Transaksional (TPS)** | Mencatat dan mengolah volume transaksi bisnis harian di tingkat operasional secara cepat dan akurat. | *Point of Sale (POS) kasir minimarket, Mesin ATM Bank, Sistem E-commerce Tokopedia/Shopee*. |
| **3** | **Sistem Informasi Eksekutif (EIS)** | Menyediakan ringkasan performa strategis jangka panjang bagi dewan direksi / pimpinan puncak. | *Executive Dashboard, Business Intelligence (BI), Geographic Information System (GIS)*. |
| **4** | **Sistem Informasi Pengetahuan (KWS / KMS)** | Mengelola aset intelektual, riset, dan keahlian di internal organisasi. | *Knowledge Management System (KMS), Content Management System (CMS), Expert System (Sistem Pakar)*. |
| **5** | **Sistem Informasi Keamanan (Security)** | Memantau, mendeteksi, dan melindungi infrastruktur data organisasi dari serangan siber. | *Firewall, SIEM (Security Information & Event Management), Sistem Audit Keamanan IT*. |
| **6** | **Sistem Informasi Kesehatan (Health IS)** | Mengelola rekam medis pasien, farmasi, dan administrasi rumah sakit secara terpadu. | *Electronic Health Record (EHR), Sistem Informasi Manajemen Rumah Sakit (SIMRS)*. |
| **7** | **Sistem Informasi Pendidikan (Edu IS)** | Mengelola pendaftaran siswa baru, nilai akademik, dan pembelajaran digital kampus. | *Learning Management System (LMS Moodle), SIAKAD Politeknik Negeri Cilacap, PPDB Online*. |
| **8** | **Sistem Informasi Perusahaan (Enterprise IS)** | Mengintegrasikan seluruh proses lintas departemen (akuntansi, manufaktur, SDM, logistik). | *Enterprise Resource Planning (ERP SAP, Odoo), Financial Management System*. |
| **9** | **Sistem Informasi Pemasaran (Marketing IS)** | Menganalisis perilaku konsumen, survei pasar digital, dan kampanye promosi penjualan. | *Market Research Platform, Google Analytics, CRM Salesforce*. |
| **10** | **Sistem Informasi SDM (HRIS)** | Mengelola presensi karyawan, penggajian (*payroll*), rekrutmen, dan penilaian KPI kerja. | *Human Resource Information System (HRIS Talenta), Payroll Management System*. |

---

## 4. Klasifikasi Personel Sistem Informasi dalam Organisasi

![Personel Sistem Informasi](/materials/psi/definisi-sistem-informasi.png)

Tenaga ahli yang menggerakkan sistem informasi terbagi ke dalam 3 spektrum keahlian:

### A. Bidang Teknis (*Technical Domain*)
- **Fokus Pengetahuan**: Penguasaan mendalam atas teknologi informasi (bahasa pemrograman, algoritma, database, routing jaringan, keamanan informasi).
- **Keterampilan**: Mengimplementasikan arsitektur sistem, memecahkan *bug/troubleshoot* teknis, dan mengonfigurasi infrastruktur server.
- **Contoh Profesi**: *Software Developer, Database Administrator (DBA), Network Administrator, System Analyst, IT Security Specialist*.

### B. Bidang Bisnis (*Business Domain*)
- **Fokus Pengetahuan**: Pemahaman komprehensif atas proses bisnis, model pendapatan, rantai pasok, dan strategi kompetitif perusahaan.
- **Keterampilan**: Mampu menerjemahkan kebutuhan bisnis (*business requirements*) ke dalam spesifikasi solusi IT serta berkomunikasi dengan direksi dan klien.
- **Contoh Profesi**: *Business Analyst, IT Business Consultant, Business Development Manager, Business Process Analyst*.

### C. Bidang Sistem (*System Operations Domain*)
- **Fokus Pengetahuan**: Pemahaman tentang bagaimana perangkat sistem informasi berinteraksi dengan struktur operasional sehari-hari.
- **Keterampilan**: Mengelola instalasi, pemeliharaan (*maintenance*), efisiensi sistem, dan memberikan dukungan teknis langsung kepada pengguna.
- **Contoh Profesi**: *System Administrator (SysAdmin), Network Engineer, System Architecture Designer, IT Support Technician*.`
  }
];

module.exports = psiExplanations;
