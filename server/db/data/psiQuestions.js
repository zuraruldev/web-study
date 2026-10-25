const psiQuestions = [
  // ==========================================
  // TOPIK 1: Konsep Dasar Sistem & Karakteristik
  // ==========================================
  {
    id: 'q_psi_01',
    subject_slug: 'psi',
    subtopic: 'Konsep Dasar Sistem',
    question_text: 'Manakah definisi yang paling tepat mengenai "Sistem" dalam konteks Pengantar Sistem Informasi?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Sekumpulan unsur (elemen/kegiatan/prosedur) yang saling terpadu dan bekerjasama untuk mencapai tujuan tertentu',
      'Hanya sekumpulan perangkat keras komputer yang dirangkai di dalam ruangan laboratorium',
      'Sebuah program aplikasi pengolah kata yang dijalankan pada komputer tunggal',
      'Kumpulan aturan hukum pidana yang mengatur hak cipta perangkat lunak'
    ]),
    correct_index: 0,
    explanation: 'Sistem didefinisikan sebagai sekumpulan unsur (elemen/prosedur/komponen) yang saling terpadu, berinteraksi, dan bekerjasama satu sama lain untuk mencapai sasaran atau tujuan bersama.',
    points: 10
  },
  {
    id: 'q_psi_02',
    subject_slug: 'psi',
    subtopic: 'Karakteristik Sistem',
    question_text: 'Komponen sistem yang berfungsi sebagai jembatan atau media penghubung yang memungkinkan pertukaran data atau sumber daya antar komponen disebut...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Penghubung (Interface)',
      'Batas Sistem (Boundary)',
      'Lingkungan Luar (Environment)',
      'Kendali (Control)'
    ]),
    correct_index: 0,
    explanation: 'Penghubung (Interface) bertindak sebagai jembatan yang menghubungkan fungsi antarkomponen atau antarsubsistem dalam suatu sistem.',
    points: 10
  },
  {
    id: 'q_psi_03',
    subject_slug: 'psi',
    subtopic: 'Elemen Hirarki Sistem',
    question_text: 'Elemen sistem yang bertugas mengukur operasional proses dan mengembalikan kondisi menyimpang agar kembali ke standar rencana disebut...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Umpan Balik (Feedback)',
      'Masukan (Input)',
      'Keluaran (Output)',
      'Sasaran (Objective)'
    ]),
    correct_index: 0,
    explanation: 'Feedback (Umpan Balik) berfungsi mengukur kinerja operasional sistem dan memberikan informasi korektif kepada unit kontrol untuk mengembalikan kondisi sistem yang menyimpang ke standar yang ditetapkan.',
    points: 10
  },
  {
    id: 'q_psi_04',
    subject_slug: 'psi',
    subtopic: 'Klasifikasi Sistem',
    question_text: 'Sistem yang perilakunya sepenuhnya dapat diprediksi dan dideteksi dengan pasti karena bekerja berdasarkan aturan konstan tanpa unsur ketidakpastian adalah...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Sistem Deterministik (Deterministic System)',
      'Sistem Probabilistik (Probabilistic System)',
      'Sistem Alamiah (Natural System)',
      'Sistem Terbuka (Open System)'
    ]),
    correct_index: 0,
    explanation: 'Sistem deterministik beroperasi dengan tingkah laku yang dapat diprediksi secara pasti (contoh: program komputer penghitung matematika). Sebaliknya, sistem probabilistik mengandung unsur probabilitas dan ketidakpastian (contoh: ramalan cuaca).',
    points: 10
  },
  {
    id: 'q_psi_05',
    subject_slug: 'psi',
    subtopic: 'Klasifikasi Sistem',
    question_text: 'Sistem operasi komputer dan rancangan algoritma perangkat lunak tergolong ke dalam klasifikasi sistem...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Sistem Abstrak / Konseptual (Abstract System)',
      'Sistem Fisik (Physical System)',
      'Sistem Alamiah (Natural System)',
      'Sistem Tertutup Sempurna (Closed System)'
    ]),
    correct_index: 0,
    explanation: 'Sistem abstrak/konseptual adalah sistem yang tersusun dari ide, konsep, atau susunan logis tanpa memiliki wujud fisik yang dapat disentuh (contoh: sistem operasi, algoritma, pemikiran filsafat).',
    points: 10
  },
  {
    id: 'q_psi_06',
    subject_slug: 'psi',
    subtopic: 'Klasifikasi Sistem',
    question_text: 'Apa yang membedakan Sistem Terbuka (Open System) dengan Sistem Tertutup (Closed System)?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Sistem terbuka selalu berinteraksi dan beradaptasi dengan lingkungan luar, sedangkan sistem tertutup beroperasi secara independen tanpa pengaruh eksternal',
      'Sistem terbuka tidak memiliki batasan (boundary), sedangkan sistem tertutup memiliki batasan',
      'Sistem terbuka tidak menghasilkan keluaran (output)',
      'Sistem terbuka hanya dibuat oleh fenomena alamiah saja'
    ]),
    correct_index: 0,
    explanation: 'Sistem terbuka menerima masukan dari subsistem/lingkungan lain dan memberikan keluaran keluar, sehingga rentan dan adaptif terhadap perubahan lingkungan. Sistem tertutup beroperasi independen tanpa pengaruh lingkungan luar.',
    points: 10
  },
  {
    id: 'q_psi_07',
    subject_slug: 'psi',
    subtopic: 'Subsistem & Antarmuka',
    question_text: 'Mengapa keberadaan antarmuka subsistem (subsystem interface) sangat penting dalam sebuah sistem yang kompleks?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Karena tanpa antarmuka, subsistem-subsistem tersebut hanya menjadi kumpulan bagian yang terisolasi dan tidak dapat bertukar data untuk mencapai tujuan bersama',
      'Untuk membatasi jumlah data yang dapat disimpan dalam basis data',
      'Agar sistem tidak memerlukan perangkat keras server',
      'Untuk menggantikan peran pengguna manusia secara penuh'
    ]),
    correct_index: 0,
    explanation: 'Slide materi kuliah menegaskan bahwa tanpa antarmuka subsistem, suatu sistem hanya berisi sekumpulan subsistem yang berdiri sendiri, terisolasi, dan tidak saling berkaitan.',
    points: 10
  },

  // ==========================================
  // TOPIK 2: Konsep Dasar Informasi & Siklus
  // ==========================================
  {
    id: 'q_psi_08',
    subject_slug: 'psi',
    subtopic: 'Konsep Dasar Informasi',
    question_text: 'Apakah perbedaan mendasar antara data dan informasi?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Data adalah fakta mentah yang belum diorganisasikan, sedangkan informasi adalah hasil pengolahan data yang memiliki makna dan nilai guna bagi penerimanya',
      'Data selalu berupa teks, sedangkan informasi selalu berupa angka numerik',
      'Data hanya dihasilkan oleh komputer, sedangkan informasi hanya dihasilkan oleh manusia',
      'Data dan informasi adalah dua istilah yang sama persis tanpa perbedaan konseptual'
    ]),
    correct_index: 0,
    explanation: 'Data merupakan fakta mentah atau deskripsi dasar dari suatu event atau transaksi yang belum memiliki tujuan spesifik. Setelah diolah dan disusun dalam konteks yang berarti, data tersebut menjadi informasi.',
    points: 10
  },
  {
    id: 'q_psi_09',
    subject_slug: 'psi',
    subtopic: 'Siklus Informasi',
    question_text: 'Dalam siklus informasi (information cycle), apakah yang dihasilkan setelah penerima (user) melakukan tindakan nyata berdasarkan informasi yang diterimanya?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Hasil tindakan tersebut akan melahirkan transaksi atau kejadian baru yang ditangkap kembali sebagai Data Baru',
      'Sistem komputer akan langsung dimatikan secara otomatis',
      'Seluruh basis data sistem akan dihapus untuk memulai siklus baru',
      'Tidak ada dampak apapun karena siklus berhenti pada saat informasi dibaca'
    ]),
    correct_index: 0,
    explanation: 'Dalam siklus informasi berkesinambungan: Data diolah menjadi Informasi -> Diterima Pemakai -> Keputusan/Tindakan -> Hasil Tindakan -> Membentuk Data Baru untuk diolah kembali.',
    points: 10
  },
  {
    id: 'q_psi_10',
    subject_slug: 'psi',
    subtopic: 'Tiga Pilar Informasi',
    question_text: 'Tiga pilar utama kualitas informasi yang wajib dipenuhi agar informasi bermanfaat bagi pengambilan keputusan adalah...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Akurat, Tepat Waktu, dan Relevan',
      'Murah, Cepat, dan Berwarna',
      'Banyak, Rinci, dan Rahasia',
      'Kompleks, Teoritis, dan Otomatis'
    ]),
    correct_index: 0,
    explanation: 'Tiga pilar informasi adalah: Akurat (mencerminkan kebenaran tanpa kesalahan), Tepat Waktu (tidak kadaluarsa), dan Relevan (memiliki manfaat nyata bagi pemakai).',
    points: 10
  },
  {
    id: 'q_psi_11',
    subject_slug: 'psi',
    subtopic: 'Dimensi Kualitas Informasi',
    question_text: 'Karakteristik bahwa informasi harus tersedia persis pada saat pembuat keputusan membutuhkannya tergolong ke dalam dimensi kualitas...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Dimensi Waktu (Time Dimension) - Ketepatan Waktu',
      'Dimensi Isi (Content Dimension) - Keakuratan',
      'Dimensi Bentuk (Form Dimension) - Penyajian',
      'Dimensi Biaya (Cost Dimension)'
    ]),
    correct_index: 0,
    explanation: 'Ketersediaan informasi saat dibutuhkan (ketepatan waktu/timeliness) serta kekinian data (currency) tergolong ke dalam Dimensi Waktu (Time Dimension).',
    points: 10
  },
  {
    id: 'q_psi_12',
    subject_slug: 'psi',
    subtopic: 'Kandungan Informasi',
    question_text: 'Informasi yang berfungsi untuk memperbaiki atau merevisi kekeliruan data sebelumnya yang kurang tepat disebut memiliki kandungan...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Korektif',
      'Penegas',
      'Tambahan',
      'Baru'
    ]),
    correct_index: 0,
    explanation: 'Kandungan korektif berarti informasi dapat digunakan untuk melakukan koreksi terhadap informasi sebelumnya yang salah atau kurang benar.',
    points: 10
  },

  // ==========================================
  // TOPIK 3: Data, Informasi, Pengetahuan (DIKW)
  // ==========================================
  {
    id: 'q_psi_13',
    subject_slug: 'psi',
    subtopic: 'Data, Informasi, Pengetahuan',
    question_text: 'Perhatikan analogi: (1) "Lampu kuning menyala", (2) "Tanda bersiap mengerem mobil", (3) "Pengemudi waspada menginjak rem perlahan agar tidak ditilang dan tidak ditabrak dari belakang". Manakah urutan yang tepat menurut rantai DIKW?',
    code_snippet: null,
    options_json: JSON.stringify([
      '(1) Data, (2) Informasi, (3) Pengetahuan',
      '(1) Informasi, (2) Pengetahuan, (3) Data',
      '(1) Pengetahuan, (2) Data, (3) Informasi',
      '(1) Data, (2) Pengetahuan, (3) Informasi'
    ]),
    correct_index: 0,
    explanation: 'Lampu kuning menyala adalah fakta mentah (Data). Maknanya sebagai tanda harus mengerem adalah Informasi. Pemahaman kontekstual dan pengalaman cara mengerem yang aman di jalan raya adalah Pengetahuan (Knowledge).',
    points: 10
  },
  {
    id: 'q_psi_14',
    subject_slug: 'psi',
    subtopic: 'Klasifikasi Pengetahuan',
    question_text: 'Pengetahuan yang tersimpan di dalam kepala atau pikiran seseorang, didapat melalui pengalaman praktik uji coba bertahun-tahun, dan sangat sulit diformalkan atau diartikulasikan disebut...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Pengetahuan Tasit (Tacit Knowledge)',
      'Pengetahuan Eksplisit (Explicit Knowledge)',
      'Pengetahuan Deklaratif',
      'Pengetahuan Terformat'
    ]),
    correct_index: 0,
    explanation: 'Tacit Knowledge adalah pengetahuan personal yang berada di dalam kepala manusia, berakar pada tindakan dan komitmen personal, serta sulit diartikulasikan dengan kata-kata formal. Sebaliknya, Explicit Knowledge mudah didokumentasikan dalam dokumen/basis data.',
    points: 10
  },
  {
    id: 'q_psi_15',
    subject_slug: 'psi',
    subtopic: 'Klasifikasi Pengetahuan',
    question_text: 'Buku panduan Standard Operating Procedure (SOP), dokumentasi diagram alur, dan repositori basis data perusahaan merupakan bentuk nyata dari...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Pengetahuan Eksplisit (Explicit Knowledge)',
      'Pengetahuan Tasit (Tacit Knowledge)',
      'Pengetahuan Intuitif',
      'Data Tidak Terstruktur'
    ]),
    correct_index: 0,
    explanation: 'Explicit knowledge telah dikodifikasikan dan ditransmisikan secara sistematis menggunakan bahasa formal ke dalam media dokumen, basis data, diagram, dan web.',
    points: 10
  },
  {
    id: 'q_psi_16',
    subject_slug: 'psi',
    subtopic: 'IM vs KM',
    question_text: 'Apakah perbedaan fokus utama antara Manajemen Informasi (Information Management / IM) dengan Manajemen Pengetahuan (Knowledge Management / KM)?',
    code_snippet: null,
    options_json: JSON.stringify([
      'IM mengurusi data dan informasi agar terorganisir dan mudah dicari kembali, sedangkan KM mengurusi manusia agar termotivasi belajar dan berbagi pengetahuan (knowledge sharing)',
      'IM hanya digunakan di bidang militer, sedangkan KM hanya digunakan di universitas',
      'IM tidak memerlukan komputer, sedangkan KM selalu berbasis hardware server',
      'IM fokus pada interaksi manusia, sedangkan KM fokus pada pengkabelan jaringan LAN'
    ]),
    correct_index: 0,
    explanation: 'Slide materi kuliah merumuskan: IM mengurusi informasi agar terkumpul, terorganisasi, dan mudah dicari serta digunakan. KM mengurusi manusia di dalamnya agar terus produktif belajar dan berbagi pengetahuan (knowledge sharing).',
    points: 10
  },

  // ==========================================
  // TOPIK 4: Sistem Informasi & Komponen
  // ==========================================
  {
    id: 'q_psi_17',
    subject_slug: 'psi',
    subtopic: 'Definisi Sistem Informasi',
    question_text: 'Sistem Informasi memadukan empat elemen dasar untuk mencapai sasarannya, yaitu...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Orang, Teknologi Informasi, Prosedur Kerja, dan Informasi',
      'Listrik, Ruangan AC, Keyboard, dan Monitor',
      'Undang-Undang, Polisi, Pengadilan, dan Penjara',
      'Modal Finansial, Pabrik, Kendaraan, dan Tanah'
    ]),
    correct_index: 0,
    explanation: 'Bagan utama Sistem Informasi memadukan: 1. Orang (yang memasukkan & memakai data), 2. Teknologi Informasi (hardware & software), 3. Prosedur Kerja (cara kerja), dan 4. Informasi yang dihasilkan untuk mencapai Tujuan.',
    points: 10
  },
  {
    id: 'q_psi_18',
    subject_slug: 'psi',
    subtopic: 'Komponen Sistem Informasi',
    question_text: 'Menurut John Burch dan Gary Grudnitski, Sistem Informasi dibentuk oleh 6 komponen pembangun, yaitu...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Perangkat Keras, Perangkat Lunak, Basis Data, Jaringan, Prosedur, dan Manusia',
      'CPU, RAM, Harddisk, Motherboard, VGA, dan Power Supply',
      'Input, Proses, Output, Feedback, Control, dan Goal',
      'Direktur, Manajer, Supervisor, Staf, Klien, dan Pemasok'
    ]),
    correct_index: 0,
    explanation: 'Enam komponen pembangun Sistem Informasi versi John Burch & Gary Grudnitski adalah: Hardware, Software, Database, Network, Procedure, dan People.',
    points: 10
  },
  {
    id: 'q_psi_19',
    subject_slug: 'psi',
    subtopic: 'Komponen Prosedur',
    question_text: 'Dalam komponen sistem informasi, aturan baku langkah-langkah pengumpulan data, validasi input, otorisasi transaksi, dan jadwal backup basis data disebut komponen...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Prosedur (Procedure)',
      'Perangkat Lunak (Software)',
      'Jaringan (Network)',
      'Perangkat Keras (Hardware)'
    ]),
    correct_index: 0,
    explanation: 'Prosedur adalah serangkaian langkah atau instruksi tertulis yang mengatur tata kelola pengumpulan data, proses pengolahan, dan aturan operasional sistem.',
    points: 10
  },
  {
    id: 'q_psi_20',
    subject_slug: 'psi',
    subtopic: 'Lingkungan Sosioteknologi',
    question_text: 'Menurut kerangka lingkungan sosioteknologi James O\'Brien (1996), keberhasilan sistem informasi di dalam organisasi dipengaruhi oleh 5 aspek yang saling terkait, yaitu...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Struktur Organisasi, Strategi Manajemen, Proses Bisnis, Sistem & Teknologi Informasi, serta Orang dan Budaya',
      'Hardware, Software, Brainware, Firmware, dan Malware',
      'Input, Proses, Output, Storage, dan Telecommunication',
      'Ekonomi, Politik, Sosial, Budaya, dan Pertahanan'
    ]),
    correct_index: 0,
    explanation: 'Lingkungan Sosioteknologi O\'Brien (1996) terdiri dari: Struktur Organisasi, Strategi Manajemen, Proses Bisnis, Sistem dan Teknologi Informasi, serta Orang dan Budaya.',
    points: 10
  },
  {
    id: 'q_psi_21',
    subject_slug: 'psi',
    subtopic: 'Peran Sistem Informasi',
    question_text: 'Menurut Steven Alter (1992), salah satu peran utama sistem informasi dalam organisasi adalah mengaitkan tiga aktivitas manajerial, yaitu...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Perencanaan (Planning), Pengerjaan (Execution), dan Pengendalian (Controlling)',
      'Pembelian, Produksi, dan Penjualan',
      'Input, Proses, dan Output',
      'Analisis, Desain, dan Implementasi'
    ]),
    correct_index: 0,
    explanation: 'Alter (1992) merumuskan bahwa SI mengaitkan perencanaan (rencana kerja & standar), pengerjaan (informasi pengerjaan), dan pengendalian (umpan balik hasil vs rencana).',
    points: 10
  },

  // ==========================================
  // TOPIK 5: Kategori Sistem Informasi & Personel
  // ==========================================
  {
    id: 'q_psi_22',
    subject_slug: 'psi',
    subtopic: 'Kategori Sistem Informasi',
    question_text: 'Sistem informasi yang bertugas mencatat dan memproses transaksi bisnis harian bervolume tinggi di tingkat operasional (seperti sistem kasir POS dan mesin ATM) disebut...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Sistem Informasi Transaksional / Transaction Processing System (TPS)',
      'Sistem Informasi Eksekutif (EIS)',
      'Sistem Informasi Pengetahuan (KMS)',
      'Executive Support System (ESS)'
    ]),
    correct_index: 0,
    explanation: 'TPS (Transaction Processing System) bertujuan mencatat dan mengolah transaksi bisnis harian secara cepat dan akurat di level operasional.',
    points: 10
  },
  {
    id: 'q_psi_23',
    subject_slug: 'psi',
    subtopic: 'Kategori Sistem Informasi',
    question_text: 'Sistem yang dirancang untuk menyediakan ringkasan visual performa strategis jangka panjang bagi jajaran dewan direksi atau pimpinan puncak perusahaan adalah...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Sistem Informasi Eksekutif / Executive Information System (EIS)',
      'Sistem Informasi Transaksional (TPS)',
      'Sistem Penggajian Karyawan (Payroll)',
      'Sistem Pemrosesan Batch'
    ]),
    correct_index: 0,
    explanation: 'EIS (Executive Information System) atau Executive Dashboard menyajikan informasi konsolidasian tingkat tinggi (Business Intelligence & KPI) untuk keputusan strategis jangka panjang dewan direksi.',
    points: 10
  },
  {
    id: 'q_psi_24',
    subject_slug: 'psi',
    subtopic: 'Kategori Sistem Informasi',
    question_text: 'Aplikasi Enterprise Resource Planning (ERP seperti SAP atau Odoo) tergolong ke dalam kategori...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Sistem Informasi Perusahaan (Enterprise Information System)',
      'Sistem Informasi Transaksi Kasir Tunggal',
      'Sistem Operasi Desktop',
      'Sistem Informasi Geografis'
    ]),
    correct_index: 0,
    explanation: 'ERP adalah Sistem Informasi Perusahaan (Enterprise IS) yang mengintegrasikan seluruh fungsi bisnis lintas departemen (keuangan, manufaktur, supply chain, SDM) ke dalam satu sistem terpadu.',
    points: 10
  },
  {
    id: 'q_psi_25',
    subject_slug: 'psi',
    subtopic: 'Kategori Sistem Informasi',
    question_text: 'Sistem Informasi Akademik (SIAKAD) dan Learning Management System (LMS Moodle) di Politeknik Negeri Cilacap tergolong ke dalam kategori...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Sistem Informasi Pendidikan (Educational Information System)',
      'Sistem Informasi Keuangan Perbankan',
      'Sistem Informasi Rantai Pasok (SCM)',
      'Sistem Informasi Kesehatan'
    ]),
    correct_index: 0,
    explanation: 'SIAKAD dan LMS secara spesifik mendukung manajemen pembelajaran, data mahasiswa, nilai, dan kurikulum dalam domain Sistem Informasi Pendidikan.',
    points: 10
  },
  {
    id: 'q_psi_26',
    subject_slug: 'psi',
    subtopic: 'Personel Sistem Informasi',
    question_text: 'Profesi tenaga ahli yang memiliki keterampilan menerjemahkan kebutuhan operasional bisnis ke dalam spesifikasi solusi teknologi informasi dan menjembatani komunikasi dengan manajemen disebut...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Business Analyst / Business System Analyst',
      'Network Cable Installer',
      'Hardware Technician',
      'Data Entry Operator'
    ]),
    correct_index: 0,
    explanation: 'Business (System) Analyst berada di ranah Bisnis Sistem Informasi yang memiliki keahlian menerjemahkan kebutuhan bisnis menjadi spesifikasi sistem IT.',
    points: 10
  },
  {
    id: 'q_psi_27',
    subject_slug: 'psi',
    subtopic: 'Personel Sistem Informasi',
    question_text: 'Profesi IT seperti Database Administrator (DBA), Software Developer, dan Network Security Specialist tergolong ke dalam personel bidang...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Bidang Teknis (Technical Domain)',
      'Bidang Pemasaran Konsumen',
      'Bidang Sumber Daya Manusia',
      'Bidang Akuntansi Finansial'
    ]),
    correct_index: 0,
    explanation: 'DBA, programmer/developer, dan security specialist membutuhkan penguasaan mendalam atas teknologi informasi teknis (coding, struktur data, arsitektur jaringan), sehingga berada dalam Bidang Teknis.',
    points: 10
  },
  {
    id: 'q_psi_28',
    subject_slug: 'psi',
    subtopic: 'Kemampuan Sistem Informasi',
    question_text: 'Menurut Turban, McLean, dan Wetherbe (1999), manakah yang BUKAN merupakan kemampuan utama dari sistem informasi modern?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Menggantikan tanggung jawab moral dan etika pengambilan keputusan manusia sepenuhnya',
      'Melaksanakan komputasi numerik bervolume besar dengan kecepatan tinggi',
      'Menyediakan komunikasi dalam atau antarorganisasi yang murah, akurat, dan cepat',
      'Menyimpan informasi dalam volume masif pada ruang fisik yang sangat kecil namun mudah diakses'
    ]),
    correct_index: 0,
    explanation: 'Sistem informasi mendukung pengambilan keputusan, namun tidak menggantikan tanggung jawab moral dan kebijaksanaan manusia. Komputasi cepat, komunikasi murah, dan penyimpanan masif adalah kemampuan teknis SI menurut Turban.',
    points: 10
  },
  {
    id: 'q_psi_29',
    subject_slug: 'psi',
    subtopic: 'Model Sistem Informasi',
    question_text: 'Pada model sistem informasi dalam organisasi, data non-transaksi umumnya digunakan oleh pihak manakah?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Manajer dan staf untuk pemrosesan informasi perencanaan dan evaluasi',
      'Pelanggan saat membayar barang di meja kasir',
      'Pemasok bahan baku saat mengirim surat jalan',
      'Mesin cetak struk kasir'
    ]),
    correct_index: 0,
    explanation: 'Data transaksi berasal dari pelanggan/pemasok dan diolah lewat TPS. Sedangkan data non-transaksi (kebijakan, riset pasar, regulasi) diproses untuk kebutuhan manajer dan staf dalam perencanaan strategis.',
    points: 10
  },
  {
    id: 'q_psi_30',
    subject_slug: 'psi',
    subtopic: 'Konsep Dasar Sistem Informasi',
    question_text: 'Penerapan teknologi informasi pada sektor pemerintahan untuk melayani masyarakat umum secara online (seperti pembuatan KTP digital atau perizinan) dikenal dengan istilah...',
    code_snippet: null,
    options_json: JSON.stringify([
      'e-Government kategori Government to Citizen (G2C)',
      'e-Commerce kategori Business to Consumer (B2C)',
      'Government to Business (G2B)',
      'Enterprise Resource Planning (ERP)'
    ]),
    correct_index: 0,
    explanation: 'Pemanfaatan TIK pada sektor pemerintahan disebut e-Government. Layanan pemerintah kepada masyarakat/warga negara diklasifikasikan sebagai Government to Citizen (G2C).',
    points: 10
  }
];

module.exports = psiQuestions;
