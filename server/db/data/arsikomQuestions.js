const arsikomQuestions = [
  // ==========================================
  // KISI-KISI 1: Organisasi vs Arsitektur Komputer
  // ==========================================
  {
    id: 'q_arsikom_01',
    subject_slug: 'arsikom',
    subtopic: 'Organisasi vs Arsitektur',
    question_text: 'Manakah pernyataan yang paling tepat membedakan antara Arsitektur Komputer dan Organisasi Komputer menurut referensi akademis perkuliahan?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Arsitektur berurusan dengan implementasi fisik perangkat keras, sedangkan organisasi berkaitan dengan rancangan abstrak antarmuka.',
      'Arsitektur menjawab "apa yang bisa dilakukan sistem" (atribut yang terlihat oleh programmer), sedangkan organisasi menjawab "bagaimana sistem melakukannya" (implementasi teknis unit operasional).',
      'Arsitektur selalu berubah dengan cepat mengikuti perkembangan fabrikasi transistor, sedangkan organisasi bersifat statis dan bertahan puluhan tahun.',
      'Arsitektur mencakup clock speed dan sinyal kontrol, sedangkan organisasi mencakup set instruksi dan teknik pengalamatan memori.'
    ]),
    correct_index: 1,
    explanation: 'Arsitektur komputer berkaitan erat dengan rancangan konseptual/fungsional yang terlihat langsung oleh pemrogram (seperti ISA, mode pengalamatan, dan set register). Sementara Organisasi komputer berfokus pada bagaimana fungsi-fungsi arsitektur tersebut direalisasikan dalam rangkaian fisik, clocking, lebar bus, dan teknologi semikonduktor internal CPU.',
    points: 10
  },
  {
    id: 'q_arsikom_02',
    subject_slug: 'arsikom',
    subtopic: 'Organisasi vs Arsitektur',
    question_text: 'Dalam analogi perancangan sebuah mobil yang dijelaskan pada slide materi kuliah, manakah komponen yang tergolong ke dalam aspek ORGANISASI KOMPUTER?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Keberadaan pedal gas, pedal rem, dan tuas persneling yang digunakan pengemudi',
      'Bentuk fisik kemudi dan fungsi dasar mobil untuk bisa maju dan mundur',
      'Apakah mobil menggunakan mesin bensin 4-silinder hemat bahan bakar atau mesin V8 twin-turbo serta bagaimana kabel pedal gas menarik injektor',
      'Jumlah total tempat duduk dan kapasitas tangki bahan bakar yang ditentukan'
    ]),
    correct_index: 2,
    explanation: 'Pedal gas dan setir adalah antarmuka (Arsitektur). Sedangkan pilihan fisik mesin (apakah mesin 4-silinder hemat atau V8 bertenaga, transmisi matik vs manual, dan interkoneksi mekanikalnya) merupakan Organisasi, karena menentukan efisiensi dan performa implementasi fisik tanpa mengubah esensi cara mengemudi.',
    points: 10
  },
  {
    id: 'q_arsikom_03',
    subject_slug: 'arsikom',
    subtopic: 'Organisasi vs Arsitektur',
    question_text: 'Sebuah tim teknisi merancang sistem komputer kasir minimarket (POS). Manakah dari opsi berikut yang merupakan pertimbangan dari sudut pandang ARSITEKTUR KOMPUTER?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Mengatur pipeline 5-tahap dan clock speed pada frekuensi 1.8 GHz',
      'Memilih prosesor dengan Instruction Set Architecture (ISA) berbasis RISC ARM Cortex-A yang mendukung multitasking',
      'Menyediakan buffer I/O khusus pada port serial agar barcode scanner tidak mengalami latensi',
      'Menempatkan cache L1 sebesar 32 KB dan cache L2 sebesar 256 KB'
    ]),
    correct_index: 1,
    explanation: 'Pemilihan ISA (RISC), model prosesor logis, dan dukungan multitasking adalah rancangan arsitektur tingkat sistem konseptual. Sementara pengaturan clock, ukuran cache, lebar pipeline, dan buffer port fisik adalah implementasi organisasi.',
    points: 10
  },
  {
    id: 'q_arsikom_04',
    subject_slug: 'arsikom',
    subtopic: 'Organisasi vs Arsitektur',
    question_text: 'Mengapa arsitektur Instruction Set Architecture (ISA) seperti x86 dipertahankan sangat stabil dan jarang dirombak total selama bertahun-tahun?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Agar perangkat lunak yang telah dikompilasi tetap kompatibel mundur (backward compatibility) tanpa perlu menulis ulang seluruh sistem operasi dan aplikasi',
      'Karena pabrik semikonduktor tidak mampu memproduksi variasi transistor baru',
      'Karena kecepatan clock prosesor modern telah mencapai batas mutlak hukum fisika',
      'Agar CPU tidak menghasilkan panas berlebih saat menjalankan instruksi floating-point'
    ]),
    correct_index: 0,
    explanation: 'Kestabilan arsitektur (ISA) menjamin kompatibilitas biner perangkat lunak yang ada (backward compatibility). Produsen CPU cukup memperbarui organisasi internalnya (menambah cache, memperkecil litografi, menambah unit pipeline) agar software berjalan lebih kencang tanpa perlu di-compile ulang.',
    points: 10
  },

  // ==========================================
  // KISI-KISI 2: Konversi Bilangan
  // ==========================================
  {
    id: 'q_arsikom_05',
    subject_slug: 'arsikom',
    subtopic: 'Konversi Bilangan',
    question_text: 'Berapakah nilai representasi biner dari bilangan desimal 87(10)?',
    code_snippet: null,
    options_json: JSON.stringify([
      '1010111(2)',
      '1100101(2)',
      '1011001(2)',
      '1110101(2)'
    ]),
    correct_index: 0,
    explanation: '87 / 2 = 43 sisa 1; 43 / 2 = 21 sisa 1; 21 / 2 = 10 sisa 1; 10 / 2 = 5 sisa 0; 5 / 2 = 2 sisa 1; 2 / 2 = 1 sisa 0; 1 / 2 = 0 sisa 1. Dibaca dari bawah ke atas menghasilkan 1010111(2). (64 + 16 + 4 + 2 + 1 = 87).',
    points: 10
  },
  {
    id: 'q_arsikom_06',
    subject_slug: 'arsikom',
    subtopic: 'Konversi Bilangan',
    question_text: 'Konversikan bilangan biner 10110011(2) ke dalam bentuk heksadesimal!',
    code_snippet: null,
    options_json: JSON.stringify([
      'A3(16)',
      'B3(16)',
      'C2(16)',
      'D3(16)'
    ]),
    correct_index: 1,
    explanation: 'Bagi setiap 4 bit dari kanan: 1011 | 0011. Nilai 1011(2) = 8 + 0 + 2 + 1 = 11 yang dalam heksadesimal adalah simbol B. Nilai 0011(2) = 2 + 1 = 3. Maka hasilnya adalah B3(16).',
    points: 10
  },
  {
    id: 'q_arsikom_07',
    subject_slug: 'arsikom',
    subtopic: 'Konversi Bilangan',
    question_text: 'Berapakah nilai desimal dari bilangan heksadesimal 4F(16)?',
    code_snippet: null,
    options_json: JSON.stringify([
      '79(10)',
      '75(10)',
      '64(10)',
      '84(10)'
    ]),
    correct_index: 0,
    explanation: '4F(16) = (4 × 16¹) + (F × 16⁰) = (4 × 16) + (15 × 1) = 64 + 15 = 79(10).',
    points: 10
  },
  {
    id: 'q_arsikom_08',
    subject_slug: 'arsikom',
    subtopic: 'Konversi Bilangan',
    question_text: 'Ubah bilangan oktal 127(8) ke dalam bentuk heksadesimal menggunakan jembatan biner!',
    code_snippet: null,
    options_json: JSON.stringify([
      '57(16)',
      '67(16)',
      '4F(16)',
      '7A(16)'
    ]),
    correct_index: 0,
    explanation: 'Digit oktal ke biner 3-bit: 1 = 001, 2 = 010, 7 = 111. Gabungan biner: 001010111(2). Kelompokkan kembali setiap 4 bit dari kanan: 0 | 0101 | 0111. Digit 0101(2) = 5, dan 0111(2) = 7. Maka nilai heksadesimalnya adalah 57(16).',
    points: 10
  },
  {
    id: 'q_arsikom_09',
    subject_slug: 'arsikom',
    subtopic: 'Konversi Bilangan',
    question_text: 'Konversikan bilangan heksadesimal B90(16) ke dalam representasi biner yang sesuai!',
    code_snippet: null,
    options_json: JSON.stringify([
      '101110010000(2)',
      '110110010000(2)',
      '101110100000(2)',
      '101010010000(2)'
    ]),
    correct_index: 0,
    explanation: 'B = 11 = 1011(2); 9 = 1001(2); 0 = 0000(2). Menggabungkan ketiganya menghasilkan 101110010000(2).',
    points: 10
  },

  // ==========================================
  // KISI-KISI 3: Operasi Aritmatika Antar Bilangan
  // ==========================================
  {
    id: 'q_arsikom_10',
    subject_slug: 'arsikom',
    subtopic: 'Operasi Bilangan',
    question_text: 'Hitunglah hasil penjumlahan dua bilangan biner berikut: 111(2) + 101(2)!',
    code_snippet: null,
    options_json: JSON.stringify([
      '1100(2)',
      '1010(2)',
      '1110(2)',
      '1001(2)'
    ]),
    correct_index: 0,
    explanation: 'Kolom 0: 1 + 1 = 0 (carry 1). Kolom 1: 1 (carry) + 1 + 0 = 0 (carry 1). Kolom 2: 1 (carry) + 1 + 1 = 1 (carry 1). Kolom 3: 1. Hasilnya 1100(2) yang setara dengan 7 + 5 = 12 desimal.',
    points: 10
  },
  {
    id: 'q_arsikom_11',
    subject_slug: 'arsikom',
    subtopic: 'Operasi Bilangan',
    question_text: 'Berapakah hasil operasi pengurangan biner: 100(2) - 010(2)?',
    code_snippet: null,
    options_json: JSON.stringify([
      '010(2) atau 10(2)',
      '001(2)',
      '110(2)',
      '000(2)'
    ]),
    correct_index: 0,
    explanation: 'Kolom 0: 0 - 0 = 0. Kolom 1: 0 - 1 meminjam 1 dari kolom 2 (bernilai 2). 2 - 1 = 1. Kolom 2: tersisa 0. Hasilnya 010(2) = 10(2) atau 2 desimal (4 - 2 = 2).',
    points: 10
  },
  {
    id: 'q_arsikom_12',
    subject_slug: 'arsikom',
    subtopic: 'Operasi Bilangan',
    question_text: 'Hitunglah operasi penjumlahan oktal berikut: 54(8) + 35(8)!',
    code_snippet: null,
    options_json: JSON.stringify([
      '111(8)',
      '89(8)',
      '101(8)',
      '121(8)'
    ]),
    correct_index: 0,
    explanation: 'Kolom kanan: 4 + 5 = 9. Karena 9 >= 8, maka 9 / 8 = 1 sisa 1 (tulis 1, simpan carry 1). Kolom kiri: 1 (carry) + 5 + 3 = 9. 9 / 8 = 1 sisa 1 (tulis 1, simpan carry 1). Tulis sisa carry 1 paling kiri. Hasil akhir: 111(8). Perhatikan bahwa angka 8 atau 9 adalah ILEGAL dalam sistem oktal!',
    points: 10
  },
  {
    id: 'q_arsikom_13',
    subject_slug: 'arsikom',
    subtopic: 'Operasi Bilangan',
    question_text: 'Hitunglah operasi pengurangan oktal: 54(8) - 35(8)!',
    code_snippet: null,
    options_json: JSON.stringify([
      '17(8)',
      '19(8)',
      '21(8)',
      '11(8)'
    ]),
    correct_index: 0,
    explanation: 'Kolom kanan: 4 - 5 tidak bisa, pinjam 1 dari digit kiri (1 pinjaman bernilai 8). Maka (4 + 8) - 5 = 12 - 5 = 7. Kolom kiri: 5 sudah dipinjam 1 bersisa 4. Maka 4 - 3 = 1. Hasil akhir: 17(8).',
    points: 10
  },
  {
    id: 'q_arsikom_14',
    subject_slug: 'arsikom',
    subtopic: 'Operasi Bilangan',
    question_text: 'Berapakah hasil penjumlahan bilangan heksadesimal: 2A(16) + 1F(16)?',
    code_snippet: null,
    options_json: JSON.stringify([
      '49(16)',
      '39(16)',
      '4A(16)',
      '3F(16)'
    ]),
    correct_index: 0,
    explanation: 'Kolom kanan: A + F = 10 + 15 = 25. Karena 25 >= 16, maka 25 / 16 = 1 sisa 9 (tulis 9, simpan carry 1). Kolom kiri: 1 (carry) + 2 + 1 = 4. Hasil akhir: 49(16).',
    points: 10
  },
  {
    id: 'q_arsikom_15',
    subject_slug: 'arsikom',
    subtopic: 'Operasi Bilangan',
    question_text: 'Berapakah hasil pengurangan heksadesimal: 2A(16) - 1F(16)?',
    code_snippet: null,
    options_json: JSON.stringify([
      'B(16)',
      'A(16)',
      '11(16)',
      'F(16)'
    ]),
    correct_index: 0,
    explanation: 'Kolom kanan: A - F = 10 - 15 tidak bisa. Pinjam 1 dari kiri yang bernilai 16. Maka (10 + 16) - 15 = 26 - 15 = 11. Angka 11 dalam heksadesimal adalah simbol B. Kolom kiri: 2 sudah dipinjam 1 bersisa 1, 1 - 1 = 0. Maka hasilnya B(16).',
    points: 10
  },

  // ==========================================
  // KISI-KISI 4: Logika dan Aritmatika Biner
  // ==========================================
  {
    id: 'q_arsikom_16',
    subject_slug: 'arsikom',
    subtopic: 'Logika dan Aritmatika Biner',
    question_text: 'Berapakah hasil operasi logika biner dari: 1011 AND 1101?',
    code_snippet: null,
    options_json: JSON.stringify([
      '1001',
      '1111',
      '1011',
      '0101'
    ]),
    correct_index: 0,
    explanation: 'AND bernilai 1 hanya jika kedua bit masukan bernilai 1. Bit 3: 1 AND 1 = 1; Bit 2: 0 AND 1 = 0; Bit 1: 1 AND 0 = 0; Bit 0: 1 AND 1 = 1. Hasil: 1001.',
    points: 10
  },
  {
    id: 'q_arsikom_17',
    subject_slug: 'arsikom',
    subtopic: 'Logika dan Aritmatika Biner',
    question_text: 'Berapakah hasil evaluasi operasi logika biner: NOT (1010 OR 0101)?',
    code_snippet: null,
    options_json: JSON.stringify([
      '0000',
      '1111',
      '1010',
      '0101'
    ]),
    correct_index: 0,
    explanation: '1010 OR 0101 menghasilkan 1111 (karena setiap kolom memiliki setidaknya satu bit 1). Kemudian diinversikan dengan operator NOT: NOT(1111) = 0000.',
    points: 10
  },
  {
    id: 'q_arsikom_18',
    subject_slug: 'arsikom',
    subtopic: 'Logika dan Aritmatika Biner',
    question_text: 'Selesaikan evaluasi logika majemuk berikut: (NOT 1001) AND 0110!',
    code_snippet: null,
    options_json: JSON.stringify([
      '0110',
      '0000',
      '1001',
      '1111'
    ]),
    correct_index: 0,
    explanation: 'NOT(1001) menghasilkan 0110. Lalu operasikan 0110 AND 0110 yang menghasilkan bit yang sama persis: 0110.',
    points: 10
  },
  {
    id: 'q_arsikom_19',
    subject_slug: 'arsikom',
    subtopic: 'Logika dan Aritmatika Biner',
    question_text: 'Perhatikan ekspresi bitwise: (1100 OR 1010) AND 1111. Berapakah hasil akhirnya?',
    code_snippet: null,
    options_json: JSON.stringify([
      '1110',
      '1100',
      '1010',
      '1111'
    ]),
    correct_index: 0,
    explanation: '1100 OR 1010: bit 3 = 1 OR 1 = 1, bit 2 = 1 OR 0 = 1, bit 1 = 0 OR 1 = 1, bit 0 = 0 OR 0 = 0. Didapatkan 1110. Ketika di-AND kan dengan mask 1111, hasilnya tetap 1110.',
    points: 10
  },

  // ==========================================
  // KISI-KISI 5: Simulasi Cara Kerja Register dalam CPU
  // ==========================================
  {
    id: 'q_arsikom_20',
    subject_slug: 'arsikom',
    subtopic: 'Simulasi Register & Siklus Instruksi',
    question_text: 'Register CPU manakah yang secara khusus bertugas menyimpan alamat memori dari instruksi selanjutnya yang akan diambil (fetch)?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Program Counter (PC)',
      'Memory Address Register (MAR)',
      'Memory Data Register (MDR)',
      'Instruction Register (IR)'
    ]),
    correct_index: 0,
    explanation: 'Program Counter (PC) berfungsi memegang alamat memori dari instruksi berikutnya yang akan dieksekusi, dan nilainya akan otomatis bertambah (+1 atau seukuran instruksi) setelah instruksi diambil.',
    points: 10
  },
  {
    id: 'q_arsikom_21',
    subject_slug: 'arsikom',
    subtopic: 'Simulasi Register & Siklus Instruksi',
    question_text: 'Dalam siklus Fetch (Pengambilan instruksi), bagaimanakah urutan perpindahan data antar register CPU yang benar?',
    code_snippet: null,
    options_json: JSON.stringify([
      'PC -> MAR -> Memori (RAM) -> MDR -> IR, kemudian PC di-update (PC = PC + 1)',
      'IR -> MDR -> ALU -> MAR -> PC',
      'MDR -> MAR -> PC -> IR -> ALU',
      'ALU -> IR -> PC -> MAR -> MDR'
    ]),
    correct_index: 0,
    explanation: 'Alamat dari PC disalin ke MAR (Memory Address Register). CPU membaca RAM pada alamat tersebut, data instruksi masuk ke MDR (Memory Data Register), lalu dipindahkan ke IR (Instruction Register) untuk di-decode oleh Control Unit sembari PC dinaikkan ke instruksi berikutnya.',
    points: 10
  },
  {
    id: 'q_arsikom_22',
    subject_slug: 'arsikom',
    subtopic: 'Simulasi Register & Siklus Instruksi',
    question_text: 'Pada program assembly CPU Simulator berikut:\n0100 : MOV #5, R01\n0106 : MOV #8, R02\n0112 : ADD R01, R02\n0117 : HLT\nBerapakah nilai akhir pada register R02 setelah instruksi HLT tercapai?',
    code_snippet: '0100 : MOV #5, R01\n0106 : MOV #8, R02\n0112 : ADD R01, R02\n0117 : HLT',
    options_json: JSON.stringify([
      '13 (Desimal) atau D (Heksadesimal)',
      '5',
      '8',
      '40'
    ]),
    correct_index: 0,
    explanation: 'Instruksi ADD R01, R02 menjumlahkan operan sumber R01 (berisi 5) ke operan tujuan R02 (berisi 8). Hasilnya 5 + 8 = 13 disimpan ke R02. Di register list CPU Simulator nilai desimalnya adalah 13.',
    points: 10
  },
  {
    id: 'q_arsikom_23',
    subject_slug: 'arsikom',
    subtopic: 'Simulasi Register & Siklus Instruksi',
    question_text: 'Register penunjuk (Pointer Register) yang bertugas menyimpan alamat byte paling atas (Top of Stack) dalam operasi PUSH dan POP adalah...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Stack Pointer (SP)',
      'Base Pointer (BP)',
      'Instruction Pointer (IP)',
      'Destination Index (DI)'
    ]),
    correct_index: 0,
    explanation: 'SP (Stack Pointer) selalu menunjuk ke posisi byte terakhir yang dimasukkan ke dalam stack. Sedangkan BP (Base Pointer) digunakan untuk mengakses parameter lokal dalam stack frame fungsi.',
    points: 10
  },
  {
    id: 'q_arsikom_24',
    subject_slug: 'arsikom',
    subtopic: 'Simulasi Register & Siklus Instruksi',
    question_text: 'Bit tanda pada Flag Register yang akan aktif bernilai 1 jika sebuah operasi aritmatika atau perbandingan menghasilkan nilai PERSIS NOL adalah...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Z (Zero Flag)',
      'C (Carry Flag)',
      'S (Sign Flag)',
      'O (Overflow Flag)'
    ]),
    correct_index: 0,
    explanation: 'Zero Flag (Z) akan diset ke 1 jika hasil operasi menghasilkan nol. Flag ini menjadi dasar penentu bagi instruksi lompatan bersyarat seperti JZ (Jump if Zero) atau JNZ (Jump if Not Zero).',
    points: 10
  },
  {
    id: 'q_arsikom_25',
    subject_slug: 'arsikom',
    subtopic: 'Simulasi Register & Siklus Instruksi',
    question_text: 'Kapan suatu siklus instruksi (Instruction Cycle) di CPU akan berhenti bekerja?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Komputer dimatikan, terjadi freeze/hang, terjadi blue screen of death (BSOD), atau ditemukannya instruksi penghenti seperti HLT',
      'Setiap kali sebuah instruksi selesai dieksekusi oleh ALU',
      'Ketika kapasitas memori RAM terisi penuh 100%',
      'Hanya saat user menekan tombol spasi pada keyboard'
    ]),
    correct_index: 0,
    explanation: 'Slide materi perkuliahan secara eksplisit menegaskan bahwa siklus instruksi CPU akan berhenti apabila komputer dimatikan, terjadi hang, crash bluescreen, atau adanya instruksi halt (HLT) yang memutus aliran pemrosesan.',
    points: 10
  },

  // ==========================================
  // SOAL ANALISIS FUNDAMENTAL & JEBAKAN UTS PAK BAGAS
  // ==========================================
  {
    id: 'q_arsikom_26',
    subject_slug: 'arsikom',
    subtopic: 'Analisis Fundamental & Jebakan UTS',
    question_text: 'Dosen memberikan soal: "Sebuah sistem komputer memiliki angka oktal 89(8)". Analisislah validitas dari bilangan tersebut!',
    code_snippet: null,
    options_json: JSON.stringify([
      'Bilangan tersebut TIDAK VALID karena sistem bilangan oktal hanya mengenal digit 0 sampai 7; angka 8 dan 9 adalah simbol terlarang',
      'Bilangan tersebut valid dan bernilai 73 desimal',
      'Bilangan tersebut setara dengan 10001001 biner',
      'Bilangan tersebut valid jika menggunakan sistem penomoran signed-magnitude'
    ]),
    correct_index: 0,
    explanation: 'Soal jebakan fundamental: Sistem oktal berbasis 8 sehingga digit legal hanyalah 0, 1, 2, 3, 4, 5, 6, 7. Munculnya digit 8 atau 9 merupakan kesalahan sintaks bilangan!',
    points: 10
  },
  {
    id: 'q_arsikom_27',
    subject_slug: 'arsikom',
    subtopic: 'Analisis Fundamental & Jebakan UTS',
    question_text: 'Jika sebuah CPU memiliki clock speed sebesar 2 GHz, berapakah durasi waktu satu siklus clock (Tcycle)?',
    code_snippet: null,
    options_json: JSON.stringify([
      '0,5 nanodetik (0,5 ns)',
      '2 nanodetik (2 ns)',
      '0,5 mikrodetik (0,5 µs)',
      '500 milidetik (500 ms)'
    ]),
    correct_index: 0,
    explanation: 'Rumus Tcycle = 1 / f. Clock 2 GHz = 2.000.000.000 Hz. Tcycle = 1 / 2.000.000.000 detik = 0,5 × 10⁻⁹ detik = 0,5 ns.',
    points: 10
  },
  {
    id: 'q_arsikom_28',
    subject_slug: 'arsikom',
    subtopic: 'Analisis Fundamental & Jebakan UTS',
    question_text: 'Sebuah program terdiri dari 1.000 instruksi dengan rata-rata CPI (Cycles Per Instruction) = 1,5 dijalankan pada CPU 2 GHz. Berapakah total waktu eksekusi program tersebut?',
    code_snippet: null,
    options_json: JSON.stringify([
      '0,75 mikrodetik (0,75 µs)',
      '1,5 milidetik (1,5 ms)',
      '3 nanodetik (3 ns)',
      '0,075 detik'
    ]),
    correct_index: 0,
    explanation: 'Total clock cycle = Instruction Count × CPI = 1.000 × 1,5 = 1.500 cycle. Waktu eksekusi T = Total Cycle / Clock Rate = 1.500 / 2.000.000.000 = 0,00000075 detik = 0,75 µs.',
    points: 10
  },
  {
    id: 'q_arsikom_29',
    subject_slug: 'arsikom',
    subtopic: 'Simulasi Register & Siklus Instruksi',
    question_text: 'Di dalam arsitektur von Neumann, mengapa data dan instruksi program ditempatkan di dalam memori utama yang sama (konsep stored-program)?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Memungkinkan komputer diprogram ulang secara fleksibel melalui perangkat lunak tanpa perlu membongkar rangkaian kabel fisik (rewiring hardware)',
      'Agar CPU tidak membutuhkan unit ALU dalam melakukan komputasi',
      'Untuk menggantikan peran register internal CPU secara keseluruhan',
      'Karena memori RAM lebih cepat dibandingkan cache internal prosesor'
    ]),
    correct_index: 0,
    explanation: 'Sebelum konsep Stored-Program Von Neumann lahir (seperti pada era ENIAC), komputer harus dibongkar dan dirangkai ulang kabel-kabel fisiknya (rewiring patch panels) setiap kali ingin menjalankan program baru. Dengan stored-program, program disimpan sebagai data di memori sehingga komputer menjadi general-purpose.',
    points: 10
  },
  {
    id: 'q_arsikom_30',
    subject_slug: 'arsikom',
    subtopic: 'Simulasi Register & Siklus Instruksi',
    question_text: 'Manakah bus sistem internal yang digunakan secara eksklusif oleh CPU untuk menentukan lokasi alamat memori yang ingin dibaca atau ditulis?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Address Bus',
      'Data Bus',
      'Control Bus',
      'Power Bus'
    ]),
    correct_index: 0,
    explanation: 'Address Bus membawa informasi alamat fisik memori (bersifat satu arah dari CPU ke RAM/perangkat). Data Bus membawa data/instruksi bolak-balik (dua arah). Control Bus membawa sinyal kendali seperti read/write.',
    points: 10
  }
];

module.exports = arsikomQuestions;
