const pancasilaQuestions = [
  // ==========================================
  // KISI-KISI 1 & 2: Urgensi PP & Dasar Hukum Regulasi
  // ==========================================
  {
    id: 'q_pancasila_01',
    subject_slug: 'pancasila',
    subtopic: 'Urgensi Pendidikan Pancasila',
    question_text: 'Manakah dari opsi berikut yang merupakan salah satu dari 8 masalah krusial bangsa yang melatarbelakangi mutlak pentingnya mata kuliah Pendidikan Pancasila di perguruan tinggi?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Rendahnya kesadaran perpajakan masyarakat padahal pajak merupakan tulang punggung utama pembiayaan APBN',
      'Kurangnya jumlah partai politik dalam sistem multipartai di Indonesia',
      'Terlalu tingginya cadangan devisa negara di bank sentral',
      'Meningkatnya impor barang elektronik dari negara-negara Eropa'
    ]),
    correct_index: 0,
    explanation: 'Dalam modul ajar resmi, 8 masalah yang melatarbelakangi pentingnya Pendidikan Pancasila adalah: masalah kesadaran perpajakan, korupsi, kerusakan lingkungan, disintegrasi bangsa, dekadensi moral, penyalahgunaan narkoba, penegakan hukum yang berkeadilan, dan terorisme.',
    points: 10
  },
  {
    id: 'q_pancasila_02',
    subject_slug: 'pancasila',
    subtopic: 'Urgensi Pendidikan Pancasila',
    question_text: 'Misi Pendidikan Pancasila yang berfokus pada penyiapan peserta didik agar mampu hidup, beradaptasi, dan berinteraksi secara harmonis di dalam masyarakat, bangsa, dan negara disebut misi...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Misi Psikososial',
      'Misi Psikopedagogis',
      'Misi Sosiokultural',
      'Misi Akademik'
    ]),
    correct_index: 0,
    explanation: 'Misi Psikososial bertugas menyiapkan peserta didik untuk hidup dan berkehidupan dalam masyarakat, bangsa, dan negara. Misi Psikopedagogis mengembangkan potensi akademik, Misi Sosiokultural membangun budaya ber-Pancasila, dan Misi Akademik mengkaji Pancasila sebagai sistem ilmu sintetik.',
    points: 10
  },
  {
    id: 'q_pancasila_03',
    subject_slug: 'pancasila',
    subtopic: 'Dasar Hukum Pendidikan Pancasila',
    question_text: 'Landasan hukum yang secara tegas mewajibkan kurikulum pendidikan tinggi memuat mata kuliah Pendidikan Pancasila sebagai mata kuliah yang berdiri sendiri adalah...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Undang-Undang No. 12 Tahun 2012 tentang Pendidikan Tinggi Pasal 35 ayat (5)',
      'Undang-Undang No. 20 Tahun 2003 tentang Sisdiknas Pasal 1 ayat (1)',
      'Peraturan Presiden No. 87 Tahun 2017 tentang Penguatan Pendidikan Karakter',
      'TAP MPRS No. XXV/MPRS/1966 tentang Pembubaran Partai Komunis Indonesia'
    ]),
    correct_index: 0,
    explanation: 'UU No. 12/2012 Pasal 35 ayat (5) secara eksplisit mewajibkan kurikulum pendidikan tinggi memuat 4 mata kuliah wajib: Agama, Pancasila, Kewarganegaraan, dan Bahasa Indonesia.',
    points: 10
  },
  {
    id: 'q_pancasila_04',
    subject_slug: 'pancasila',
    subtopic: 'Dasar Hukum Pendidikan Pancasila',
    question_text: 'Mengapa Peraturan Pemerintah (PP) No. 57 Tahun 2021 sempat menuai polemik tajam di masyarakat hingga akhirnya pemerintah menerbitkan PP No. 4 Tahun 2022?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Karena dalam PP 57/2021 mata kuliah Pendidikan Pancasila dan Bahasa Indonesia tidak dicantumkan sebagai matkul wajib mandiri (dititipkan ke Kewarganegaraan)',
      'Karena PP 57/2021 mewajibkan penataran P-4 dengan sanksi pidana',
      'Karena PP 57/2021 membubarkan Badan Pembina Pendidikan Pelaksanaan P-4 (BP-7)',
      'Karena materi Pancasila diganti seluruhnya dengan pendidikan militer wajib bela negara'
    ]),
    correct_index: 0,
    explanation: 'PP No. 57 Tahun 2021 tidak mencantumkan Pendidikan Pancasila sebagai mata kuliah wajib mandiri, melainkan "dititipkan" ke Kewarganegaraan. Pemerintah segera mengoreksinya dengan menerbitkan PP No. 4 Tahun 2022 yang mengukuhkan kembali Pendidikan Pancasila sebagai mata pelajaran dan mata kuliah wajib mandiri.',
    points: 10
  },

  // ==========================================
  // KISI-KISI 3 & 4: Sidang BPUPKI & Perumusan 3 Tokoh
  // ==========================================
  {
    id: 'q_pancasila_05',
    subject_slug: 'pancasila',
    subtopic: 'Sidang BPUPKI & Sejarah',
    question_text: 'Kapankah Sidang Pertama BPUPKI dilaksanakan dan apakah agenda tunggal yang menjadi fokus pembahasannya?',
    code_snippet: null,
    options_json: JSON.stringify([
      '29 Mei – 1 Juni 1945, dengan agenda merumuskan dasar falsafah negara (philosofische grondslag) Indonesia merdeka',
      '10 Juli – 17 Juli 1945, dengan agenda memilih Presiden dan Wakil Presiden Republik Indonesia',
      '18 Agustus 1945, dengan agenda menetapkan pembagian 8 provinsi di Indonesia',
      '22 Juni 1945, dengan agenda meresmikan berdirinya Tentara Keamanan Rakyat (TKR)'
    ]),
    correct_index: 0,
    explanation: 'Sidang Pertama BPUPKI berlangsung dari 29 Mei sampai 1 Juni 1945 yang dibuka oleh Dr. KRT Radjiman Wedyodiningrat dengan agenda pokok membahas dasar falsafah negara bagi Indonesia merdeka.',
    points: 10
  },
  {
    id: 'q_pancasila_06',
    subject_slug: 'pancasila',
    subtopic: 'Perumusan 3 Tokoh Bangsa',
    question_text: 'Pada tanggal 29 Mei 1945, Prof. Mohammad Yamin, S.H. menyampaikan lima asas dasar negara. Manakah urutan gagasan yang benar menurut beliau?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Peri Kebangsaan, Peri Kemanusiaan, Peri Ketuhanan, Peri Kerakyatan, Kesejahteraan Rakyat',
      'Persatuan, Kekeluargaan, Keseimbangan Lahir dan Batin, Musyawarah, Keadilan Rakyat',
      'Nasionalisme, Internasionalisme, Mufakat/Demokrasi, Kesejahteraan Sosial, Ketuhanan yang Berkebudayaan',
      'Ketuhanan Yang Maha Esa, Kemanusiaan yang adil dan beradab, Persatuan Indonesia, Kerakyatan, Keadilan Sosial'
    ]),
    correct_index: 0,
    explanation: 'Mohammad Yamin (29 Mei 1945) mengusulkan: 1. Peri Kebangsaan, 2. Peri Kemanusiaan, 3. Peri Ketuhanan, 4. Peri Kerakyatan, dan 5. Kesejahteraan Rakyat.',
    points: 10
  },
  {
    id: 'q_pancasila_07',
    subject_slug: 'pancasila',
    subtopic: 'Perumusan 3 Tokoh Bangsa',
    question_text: 'Gagasan dasar negara yang disampaikan oleh Mr. Soepomo pada tanggal 31 Mei 1945 berakar pada paham ketatanegaraan...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Paham Negara Integralistik (Persatuan & Kekeluargaan)',
      'Paham Individualisme Liberal',
      'Paham Pertentangan Kelas Sosial Marxisme',
      'Paham Teokrasi Absolut'
    ]),
    correct_index: 0,
    explanation: 'Mr. Soepomo (31 Mei 1945) menggagas konsep Paham Negara Integralistik di mana negara dipandang sebagai kesatuan organik masyarakat yang dilandasi rasa persatuan, kekeluargaan, keseimbangan lahir dan batin, musyawarah, dan keadilan rakyat.',
    points: 10
  },
  {
    id: 'q_pancasila_08',
    subject_slug: 'pancasila',
    subtopic: 'Perumusan 3 Tokoh Bangsa',
    question_text: 'Ir. Soekarno dalam pidatonya pada 1 Juni 1945 menjelaskan bahwa lima sila Pancasila dapat diperas menjadi Trisila dan akhirnya menjadi Ekasila. Apakah intisari dari Ekasila tersebut?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Gotong Royong',
      'Sosio-Nasionalisme',
      'Sosio-Demokrasi',
      'Ketuhanan yang Berkebudayaan'
    ]),
    correct_index: 0,
    explanation: 'Pancasila diperas menjadi Trisila (Sosio-Nasionalisme, Sosio-Demokrasi, Ketuhanan). Jika diperas lagi menjadi satu sila (Ekasila), intisarinya adalah asas GOTONG ROYONG.',
    points: 10
  },
  {
    id: 'q_pancasila_09',
    subject_slug: 'pancasila',
    subtopic: 'Piagam Jakarta & PPKI',
    question_text: 'Mengapa rumusan sila pertama Piagam Jakarta "Ketuhanan, dengan kewajiban menjalankan syari\'at Islam bagi pemeluk-pemeluknya" diubah menjadi "Ketuhanan Yang Maha Esa" pada 18 Agustus 1945?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Demi menjaga persatuan dan integrasi bangsa, merespons keberatan dari perwakilan Indonesia Timur yang disampaikan opsir Kaigun kepada Drs. Moh. Hatta',
      'Karena diperintahkan langsung oleh penguasa militer sekutu yang baru mendarat di Jakarta',
      'Karena Panitia Sembilan gagal menandatangani naskah Piagam Jakarta',
      'Karena isi Piagam Jakarta belum pernah dibahas dalam sidang pleno BPUPKI'
    ]),
    correct_index: 0,
    explanation: 'Pada 17 Agustus 1945 sore, Bung Hatta menerima pesan dari opsir Kaigun bahwa masyarakat penganut Kristen/Katolik di Indonesia Timur keberatan dengan 7 kata tersebut. Demi keutuhan NKRI, para tokoh Islam berjiwa besar menyepakati penggantian menjadi "Ketuhanan Yang Maha Esa" pada sidang PPKI 18 Agustus 1945.',
    points: 10
  },

  // ==========================================
  // KISI-KISI 5 & 7: Orde Baru & Dinamika Lintas Rezim
  // ==========================================
  {
    id: 'q_pancasila_10',
    subject_slug: 'pancasila',
    subtopic: 'Definisi Orde Baru',
    question_text: 'Apakah definisi konseptual dari "Orde Baru" sebagaimana diajarkan dalam materi sejarah ketatanegaraan Indonesia?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Tatanan pemerintahan dan kehidupan berbangsa yang bertekad menjalankan Pancasila dan UUD 1945 secara murni dan konsekuen',
      'Sistem pemerintahan parlementer liberal yang menjamin kebebasan mutlak partai politik tanpa batas',
      'Rezim militer yang menghapuskan keberadaan Undang-Undang Dasar 1945 dan menggantinya dengan hukum darurat',
      'Bentuk pemerintahan monarki konstitusional yang dipimpin oleh seorang presiden seumur hidup'
    ]),
    correct_index: 0,
    explanation: 'Secara resmi Orde Baru didefinisikan sebagai tatanan seluruh sendi kehidupan rakyat, bangsa, dan negara yang bertekad melaksanakan Pancasila dan UUD 1945 secara murni dan konsekuen sebagai koreksi atas penyelewengan Orde Lama.',
    points: 10
  },
  {
    id: 'q_pancasila_11',
    subject_slug: 'pancasila',
    subtopic: 'Dinamika Pasang Surut Pancasila',
    question_text: 'Manakah salah satu bentuk penyelewengan konstitusional terhadap Pancasila dan UUD 1945 yang terjadi pada masa akhir pemerintahan Orde Lama (Presiden Soekarno)?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Pengangkatan Ir. Soekarno sebagai Presiden Seumur Hidup melalui Ketetapan MPRS No. III/MPRS/1963 dan dominasi ajaran NASAKOM',
      'Pemberlakuan penataran P-4 (Ekaprasetya Pancakarsa) kepada seluruh aparatur sipil negara',
      'Kewajiban asas tunggal Pancasila bagi organisasi politik berdasarkan UU No. 3 Tahun 1985',
      'Pelaksanaan amandemen UUD 1945 sebanyak empat kali berturut-turut'
    ]),
    correct_index: 0,
    explanation: 'Pada era Demokrasi Terpimpin Orde Lama, terjadi penyimpangan di antaranya pengangkatan presiden seumur hidup lewat TAP No. III/MPRS/1963, pergeseran makna Pancasila menjadi konsep NASAKOM (Nasionalis, Agama, Komunis), serta subordinasi lembaga yudikatif/legislatif di bawah presiden.',
    points: 10
  },
  {
    id: 'q_pancasila_12',
    subject_slug: 'pancasila',
    subtopic: 'Dinamika Pasang Surut Pancasila',
    question_text: 'Pada masa pemerintahan Orde Baru, Presiden Soeharto menerbitkan Inpres No. 12 Tahun 1968. Apakah tujuan dikeluarkannya instruksi presiden tersebut?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Menstandarkan tata cara penulisan dan pembacaan Pancasila sesuai rumusan otentik dalam Pembukaan UUD 1945',
      'Membentuk Badan Pembina Pendidikan Pelaksanaan P-4 (BP-7)',
      'Menetapkan Pancasila sebagai asas tunggal bagi seluruh partai politik dan ormas',
      'Mencabut Ketetapan MPRS tentang pengangkatan presiden seumur hidup'
    ]),
    correct_index: 0,
    explanation: 'Pasca Dekrit 5 Juli 1959, penulisan dan pengucapan sila-sila Pancasila di masyarakat menjadi beragam. Inpres No. 12/1968 diterbitkan untuk menyatukan dan menstandarkan tata cara penulisan dan pembacaan Pancasila sesuai naskah sah Pembukaan UUD 1945.',
    points: 10
  },
  {
    id: 'q_pancasila_13',
    subject_slug: 'pancasila',
    subtopic: 'Dinamika Pasang Surut Pancasila',
    question_text: 'Mengapa pada masa awal Era Reformasi (pemerintahan Presiden B.J. Habibie tahun 1998) wacana mengenai Pancasila sempat meredup dan jarang diucapkan di ruang publik?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Akibat trauma masyarakat terhadap rezim Orde Baru yang menjadikan Pancasila sebagai alat legitimasi politik kekuasaan dan indoktrinasi tertutup',
      'Karena MPR telah secara resmi membubarkan Pancasila dan menggantinya dengan Piagam PBB',
      'Karena krisis moneter 1998 mengharuskan Indonesia mengadopsi sistem komunis',
      'Karena seluruh naskah UUD 1945 dihapus dan dinyatakan tidak berlaku lagi'
    ]),
    correct_index: 0,
    explanation: 'Euforia reformasi diwarnai trauma masyarakat atas penyalahgunaan Pancasila oleh Orde Baru sebagai instrumen hegemoni politik kekuasaan (lewat penataran P-4 dan asas tunggal), sehingga masyarakat sempat mengidentikkan Pancasila sebagai produk rezim otoriter masa lalu (gejala amnesia nasional).',
    points: 10
  },

  // ==========================================
  // KISI-KISI 6, 8, & 9: Sumber Pancasila, Staatsfundamentalnorm, & Hierarki Hukum
  // ==========================================
  {
    id: 'q_pancasila_14',
    subject_slug: 'pancasila',
    subtopic: 'Sumber Kajian Pancasila',
    question_text: 'Sikap tenggang rasa, saling menghormati hak sesama, tolong-menolong, dan semangat gotong royong dalam adat istiadat nusantara merupakan bukti bahwa Pancasila digali dari...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Sumber Sosiologis',
      'Sumber Yuridis',
      'Sumber Politis Internasional',
      'Sumber Doktrinal Tertutup'
    ]),
    correct_index: 0,
    explanation: 'Sumber sosiologis Pancasila bersumber dari nilai-nilai kearifan lokal, adat istiadat, kepercayaan agama, dan kebiasaan sosial yang telah hidup dan dipraktikkan masyarakat nusantara jauh sebelum negara Indonesia didirikan.',
    points: 10
  },
  {
    id: 'q_pancasila_15',
    subject_slug: 'pancasila',
    subtopic: 'Staatsfundamentalnorm',
    question_text: 'Menurut Prof. Notonegoro, Pembukaan UUD 1945 memenuhi syarat mutlak sebagai Staatsfundamentalnorm ditinjau dari segi terjadinya karena...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Ditentukan oleh para pembentuk negara (the founding fathers / PPKI) dan terjelma dalam pernyataan lahir kemerdekaan kehendak bangsa',
      'Disahkan melalui referendum rakyat secara elektronik',
      'Dibuat oleh badan peradilan Mahkamah Agung',
      'Memuat pasal-pasal teknis mengenai pemilihan menteri'
    ]),
    correct_index: 0,
    explanation: 'Ditinjau dari segi terjadinya, Staatsfundamentalnorm ditentukan oleh para pembentuk negara (PPKI) dan merupakan penjelmaan pernyataan lahir kemerdekaan kehendak pembentuk negara (tercermin pada Alinea III Pembukaan UUD 1945).',
    points: 10
  },
  {
    id: 'q_pancasila_16',
    subject_slug: 'pancasila',
    subtopic: 'Sumber Segala Sumber Hukum',
    question_text: 'Pasal berapakah dalam Undang-Undang No. 12 Tahun 2011 yang secara tegas menetapkan Pancasila sebagai sumber dari segala sumber hukum negara?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Pasal 2',
      'Pasal 7',
      'Pasal 10',
      'Pasal 15'
    ]),
    correct_index: 0,
    explanation: 'Pasal 2 UU No. 12 Tahun 2011 menyatakan: "Pancasila merupakan sumber dari segala sumber hukum negara." Hal ini bermakna setiap materi muatan peraturan perundang-undangan tidak boleh bertentangan dengan nilai-nilai Pancasila.',
    points: 10
  },
  {
    id: 'q_pancasila_17',
    subject_slug: 'pancasila',
    subtopic: 'Hierarki Peraturan Perundang-undangan',
    question_text: 'Berdasarkan Pasal 7 ayat (1) UU No. 12 Tahun 2011, manakah urutan tata jenjang hierarki peraturan perundang-undangan di Indonesia yang benar dari yang tertinggi ke terendah?',
    code_snippet: null,
    options_json: JSON.stringify([
      'UUD 1945 -> Ketetapan MPR -> UU/Perppu -> PP -> Perpres -> Perda Provinsi -> Perda Kabupaten/Kota',
      'UUD 1945 -> UU/Perppu -> Ketetapan MPR -> Perpres -> PP -> Perda Provinsi -> Perda Kab/Kota',
      'Pancasila -> UUD 1945 -> Perpres -> PP -> UU -> Perda',
      'Ketetapan MPR -> UUD 1945 -> PP -> UU -> Perpres -> Perda'
    ]),
    correct_index: 0,
    explanation: 'Hierarki resmi UU No. 12/2011 Pasal 7 (1): 1. UUD 1945, 2. TAP MPR, 3. Undang-Undang / Perppu, 4. Peraturan Pemerintah, 5. Peraturan Presiden, 6. Perda Provinsi, 7. Perda Kabupaten/Kota.',
    points: 10
  },

  // ==========================================
  // KISI-KISI 10, 11, & 12: Periodesasi, 4 Pokok Pikiran, 4 Alinea
  // ==========================================
  {
    id: 'q_pancasila_18',
    subject_slug: 'pancasila',
    subtopic: 'Periodesasi Konstitusi UUD',
    question_text: 'Konstitusi Republik Indonesia Serikat (RIS) yang berlaku antara 27 Desember 1949 sampai 17 Agustus 1950 lahir sebagai konsekuensi dari perundingan diplomatik...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Konferensi Meja Bundar (KMB) di Den Haag',
      'Perjanjian Linggarjati',
      'Perjanjian Renville',
      'Perundingan Roem-Royen'
    ]),
    correct_index: 0,
    explanation: 'Konstitusi RIS 1949 diberlakukan sebagai hasil kesepakatan Konferensi Meja Bundar (KMB) di Den Haag, di mana Belanda mengakui kedaulatan Indonesia dalam bentuk negara federasi/serikat.',
    points: 10
  },
  {
    id: 'q_pancasila_19',
    subject_slug: 'pancasila',
    subtopic: 'Periodesasi Konstitusi UUD',
    question_text: 'Berapa kalikah MPR RI melakukan amandemen terhadap Undang-Undang Dasar Negara Republik Indonesia Tahun 1945 pada era reformasi?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Empat kali secara berturut-turut pada kurun waktu tahun 1999, 2000, 2001, dan 2002',
      'Dua kali pada tahun 1998 dan 2004',
      'Tiga kali pada tahun 1999, 2001, dan 2003',
      'Lima kali pada kurun waktu 1999 sampai 2005'
    ]),
    correct_index: 0,
    explanation: 'Amandemen UUD 1945 berlangsung dalam empat tahapan Sidang Tahunan/Umum MPR: Sidang Umum 1999 (I), Sidang Tahunan 2000 (II), Sidang Tahunan 2001 (III), dan Sidang Tahunan 2002 (IV).',
    points: 10
  },
  {
    id: 'q_pancasila_20',
    subject_slug: 'pancasila',
    subtopic: 'Pokok Pikiran UUD 1945',
    question_text: 'Pokok Pikiran Pertama dalam Pembukaan UUD 1945 menegaskan bahwa "Negara melindungi segenap bangsa Indonesia dan seluruh tumpah darah Indonesia dengan berdasar atas persatuan". Pokok pikiran ini merupakan penjabaran dari...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Sila Ketiga Pancasila (Persatuan Indonesia)',
      'Sila Pertama Pancasila (Ketuhanan Yang Maha Esa)',
      'Sila Keempat Pancasila (Kerakyatan)',
      'Sila Kelima Pancasila (Keadilan Sosial)'
    ]),
    correct_index: 0,
    explanation: 'Pokok Pikiran I Pembukaan UUD 1945 adalah Pokok Pikiran Persatuan yang merupakan kristalisasi langsung dari Sila Ketiga Pancasila (Persatuan Indonesia), mengatasi segala paham golongan dan perseorangan.',
    points: 10
  },
  {
    id: 'q_pancasila_21',
    subject_slug: 'pancasila',
    subtopic: 'Pokok Pikiran UUD 1945',
    question_text: 'Pokok Pikiran Keempat Pembukaan UUD 1945 berbunyi: "Negara berdasar atas Ketuhanan Yang Maha Esa menurut dasar kemanusiaan yang adil dan beradab". Pokok pikiran ini mengandung konsekuensi konstitusional...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Mewajibkan pemerintah dan penyelenggara negara memelihara budi pekerti kemanusiaan yang luhur dan memegang teguh cita-cita moral rakyat yang mulia',
      'Mewajibkan pendirian negara berbasis satu agama resmi tertentu',
      'Menghapuskan fungsi lembaga yudikatif di Indonesia',
      'Menyerahkan urusan pertahanan keamanan kepada negara sekutu'
    ]),
    correct_index: 0,
    explanation: 'Pokok Pikiran IV mengharuskan UUD mengandung isi yang mewajibkan pemerintah dan lain-lain penyelenggara negara untuk memelihara budi pekerti kemanusiaan yang luhur dan memegang teguh cita-cita moral rakyat yang luhur.',
    points: 10
  },
  {
    id: 'q_pancasila_22',
    subject_slug: 'pancasila',
    subtopic: 'Makna Alinea Pembukaan UUD 1945',
    question_text: 'Berdasarkan struktur teks Pembukaan UUD 1945, alinea manakah yang menjelaskan peristiwa-peristiwa yang terjadi SEBELUM terbentuknya Negara Kesatuan Republik Indonesia?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Alinea Pertama, Kedua, dan Ketiga',
      'Hanya Alinea Keempat saja',
      'Hanya Alinea Pertama saja',
      'Alinea Kedua dan Keempat saja'
    ]),
    correct_index: 0,
    explanation: 'Alinea I, II, dan III menjelaskan latar belakang perjuangan dan motivasi bangsa Indonesia sebelum terbentuknya negara merdeka. Sedangkan Alinea IV menjelaskan prinsip-prinsip fundamental negara setelah terbentuknya NKRI.',
    points: 10
  },
  {
    id: 'q_pancasila_23',
    subject_slug: 'pancasila',
    subtopic: 'Makna Alinea Pembukaan UUD 1945',
    question_text: 'Apakah makna filosofis yang terkandung di dalam Alinea Pertama Pembukaan UUD 1945 ("Bahwa sesungguhnya kemerdekaan itu ialah hak segala bangsa...")?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Keteguhan sikap bangsa Indonesia menolak kolonialisme karena penjajahan bertentangan dengan perikemanusiaan dan perikeadilan, sebagai dalil moral luhur kemerdekaan universal',
      'Deklarasi pembentukan sistem kabinet parlementer di Indonesia',
      'Pengakuan bahwa kemerdekaan Indonesia diraih atas bantuan diplomasi kerajaan Belanda',
      'Penetapan struktur 8 kementerian dan lembaga negara'
    ]),
    correct_index: 0,
    explanation: 'Alinea I memuat dalil objektif dan subjektif keteguhan bangsa Indonesia memperjuangkan kemerdekaan serta menentang penjajahan di atas dunia karena bertentangan dengan hak asasi kodrati manusia (perikemanusiaan dan perikeadilan).',
    points: 10
  },
  {
    id: 'q_pancasila_24',
    subject_slug: 'pancasila',
    subtopic: 'Makna Alinea Pembukaan UUD 1945',
    question_text: 'Pengakuan bahwa kemerdekaan Indonesia merupakan anugerah dan takdir berkah dari Tuhan Yang Maha Esa (motivasi spiritual religius) secara eksplisit tertuang dalam...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Alinea Ketiga Pembukaan UUD 1945 ("Atas berkat rahmat Allah Yang Maha Kuasa...")',
      'Alinea Pertama Pembukaan UUD 1945',
      'Alinea Kedua Pembukaan UUD 1945',
      'Batang Tubuh Pasal 33 UUD 1945'
    ]),
    correct_index: 0,
    explanation: 'Alinea III Pembukaan UUD 1945 menegaskan dimensi spiritual bahwa kemerdekaan bangsa Indonesia dicapai bukan semata-mata perjuangan fisik manusia, melainkan atas berkat rahmat Allah Yang Maha Kuasa didorong oleh keinginan luhur berkehidupan bebas.',
    points: 10
  },
  {
    id: 'q_pancasila_25',
    subject_slug: 'pancasila',
    subtopic: 'Makna Alinea Pembukaan UUD 1945',
    question_text: 'Manakah dari opsi berikut yang BUKAN merupakan unsur fundamental berdirinya negara Indonesia yang termuat dalam Alinea Keempat Pembukaan UUD 1945?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Penetapan nama mata uang resmi Rupiah',
      'Tujuan nasional negara Indonesia (melindungi segenap bangsa, memajukan kesejahteraan umum, mencerdaskan kehidupan bangsa, ketertiban dunia)',
      'Ketentuan diadakannya Undang-Undang Dasar Negara',
      'Bentuk negara republik yang berkedaulatan rakyat dan dasar filsafat negara Pancasila'
    ]),
    correct_index: 0,
    explanation: 'Alinea IV memuat 4 unsur pokok negara: 1. Tujuan negara, 2. Ketentuan diadakannya UUD, 3. Bentuk negara republik berkedaulatan rakyat, dan 4. Dasar filsafat Pancasila. Penetapan mata uang diatur dalam pasal batang tubuh dan undang-undang khusus.',
    points: 10
  }
];

module.exports = pancasilaQuestions;
