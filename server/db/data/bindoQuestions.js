const bindoQuestions = [
  {
    id: 'q_bindo_01',
    subject_slug: 'bindo',
    subtopic: 'Kedudukan Bahasa Indonesia: Landasan Historis',
    question_text: 'Kedudukan Bahasa Indonesia sebagai bahasa persatuan memiliki landasan yang bersifat politis. Landasan tersebut adalah...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Undang-Undang Dasar 1945 Pasal 36',
      'Sumpah Pemuda 28 Oktober 1928, khususnya butir ketiga',
      'Peraturan Menteri Pendidikan tentang penggunaan bahasa',
      'Kongres Bahasa Indonesia setelah tahun 1945'
    ]),
    correct_index: 1,
    explanation: 'Sumpah Pemuda 1928, terutama butir ketiga, menjadikan Bahasa Indonesia sebagai bahasa persatuan. Landasan ini bersifat politis karena lahir dari kesepakatan para pemuda lintas daerah, bukan dari pasal konstitusi. Landasan yuridis baru muncul melalui UUD 1945 Pasal 36.',
    points: 10
  },
  {
    id: 'q_bindo_02',
    subject_slug: 'bindo',
    subtopic: 'Kedudukan Bahasa Indonesia: Landasan Yuridis',
    question_text: 'Pasal 36 UUD 1945 menyatakan bahwa Bahasa Indonesia berkedudukan sebagai...',
    code_snippet: null,
    options_json: JSON.stringify([
      'bahasa pengantar pendidikan',
      'bahasa resmi kenegaraan atau bahasa negara',
      'bahasa persatuan yang bersifat politis',
      'bahasa daerah yang dikembangkan'
    ]),
    correct_index: 1,
    explanation: 'Pasal 36 UUD 1945 berbunyi “Bahasa Negara ialah Bahasa Indonesia.” Karena itu, kedudukannya sebagai bahasa negara bersifat yuridis-konstitusional. Bahasa pengantar pendidikan merupakan salah satu fungsi dari kedudukan tersebut, bukan bunyi Pasal 36.',
    points: 10
  },
  {
    id: 'q_bindo_03',
    subject_slug: 'bindo',
    subtopic: 'Pengelompokan Bahasa',
    question_text: 'Bahasa Jawa, Sunda, Bugis, dan Minangkabau dalam pengelompokan bahasa di Indonesia termasuk...',
    code_snippet: null,
    options_json: JSON.stringify([
      'bahasa asing',
      'bahasa nasional',
      'bahasa daerah',
      'bahasa negara'
    ]),
    correct_index: 2,
    explanation: 'Bahasa daerah adalah bahasa yang digunakan oleh suku-suku bangsa di Indonesia. Bahasa nasional dan bahasa negara merujuk pada Bahasa Indonesia, sedangkan bahasa asing berasal dari negara lain.',
    points: 10
  },
  {
    id: 'q_bindo_04',
    subject_slug: 'bindo',
    subtopic: 'Fungsi Bahasa Indonesia sebagai Bahasa Nasional',
    question_text: 'Mahasiswa dari Papua, Sumatera, Jawa, dan Nusa Tenggara berdiskusi dalam pertemuan organisasi lintas daerah menggunakan Bahasa Indonesia. Peristiwa ini paling tepat mencerminkan fungsi Bahasa Indonesia sebagai...',
    code_snippet: null,
    options_json: JSON.stringify([
      'alat pemersatu berbagai suku bangsa',
      'bahasa resmi kenegaraan',
      'alat pengembangan teknologi',
      'bahasa pengantar pendidikan'
    ]),
    correct_index: 0,
    explanation: 'Penggunaan Bahasa Indonesia sebagai bahasa bersama oleh suku-suku yang berbeda bahasa menunjukkan fungsi pemersatu. Pilihan “bahasa pengantar pendidikan” juga mungkin secara konteks, tetapi inti peristiwa yang ditonjolkan adalah persatuan lintas suku. Soal menanyakan fungsi yang paling tepat, yaitu alat pemersatu.',
    points: 10
  },
  {
    id: 'q_bindo_05',
    subject_slug: 'bindo',
    subtopic: 'Ruang Lingkup Akademik',
    question_text: 'Empat keterampilan dasar berbahasa yang termasuk ruang lingkup Bahasa Indonesia dalam bidang akademik adalah...',
    code_snippet: null,
    options_json: JSON.stringify([
      'menyimak, berbicara, membaca, dan menulis',
      'membaca, menghafal, berhitung, dan menulis',
      'menyimak, menerjemahkan, menghafal, dan berbicara',
      'berbicara, mendengarkan musik, membaca, dan menulis'
    ]),
    correct_index: 0,
    explanation: 'Materi menyebut empat keterampilan berbahasa, yaitu menyimak, berbicara, membaca, dan menulis. Keempatnya menjadi dasar kompetensi akademik dan berhubungan dengan kemampuan memahami serta menghasilkan teks lisan dan tulis.',
    points: 10
  },
  {
    id: 'q_bindo_06',
    subject_slug: 'bindo',
    subtopic: 'Fungsi Bahasa Indonesia sebagai Bahasa Negara',
    question_text: 'Bahasa Indonesia dipakai untuk menulis buku ajar, jurnal nasional, dan dokumentasi kebudayaan agar ilmu dapat dipahami masyarakat. Hal ini mencerminkan fungsi Bahasa Indonesia sebagai...',
    code_snippet: null,
    options_json: JSON.stringify([
      'lambang kebanggaan nasional',
      'alat pengembangan kebudayaan, ilmu pengetahuan, dan teknologi',
      'alat pemersatu berbagai suku bangsa',
      'bahasa resmi kenegaraan'
    ]),
    correct_index: 1,
    explanation: 'Fungsi pengembangan kebudayaan, ilmu pengetahuan, dan teknologi tampak ketika Bahasa Indonesia menjadi wadah agar hasil kebudayaan dan IPTEK dapat dikomunikasikan dan dipahami masyarakat luas.',
    points: 10
  },
  {
    id: 'q_bindo_07',
    subject_slug: 'bindo',
    subtopic: 'Urgensi Bahasa Indonesia dalam Pendidikan',
    question_text: 'Mengapa penggunaan banyak bahasa dalam dunia pendidikan dapat mengganggu keefektifan pembelajaran?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Karena bahasa daerah tidak memiliki tata bahasa',
      'Karena peserta didik harus menerjemahkan terlebih dahulu sehingga pemahaman materi menjadi terhambat',
      'Karena Bahasa Indonesia tidak mampu menjelaskan istilah ilmu pengetahuan',
      'Karena semua bahasa asing dilarang dalam pendidikan'
    ]),
    correct_index: 1,
    explanation: 'Materi kuliah menegaskan bahwa pemakaian lebih dari satu bahasa dalam pendidikan dapat mengganggu keefektifan. Peserta didik yang belum menguasai bahasa pengantar harus menerjemahkan sebelum memahami konsep. Bahasa Indonesia sebagai bahasa pengantar yang seragam membantu mengurangi hambatan tersebut.',
    points: 10
  },
  {
    id: 'q_bindo_08',
    subject_slug: 'bindo',
    subtopic: 'Fungsi Bahasa Indonesia sebagai Bahasa Negara',
    question_text: 'Pemakaian Bahasa Indonesia dalam upacara kenegaraan, dokumen resmi negara, dan pidato kenegaraan merupakan penerapan fungsi...',
    code_snippet: null,
    options_json: JSON.stringify([
      'bahasa resmi kenegaraan',
      'alat penghubung antarbudaya',
      'lambang identitas nasional',
      'bahasa pengantar pendidikan'
    ]),
    correct_index: 0,
    explanation: 'Kegiatan kenegaraan resmi, baik lisan maupun tulisan, termasuk penerapan fungsi Bahasa Indonesia sebagai bahasa resmi kenegaraan. Materi menegaskan bahwa pemakaian dalam acara kenegaraan bersifat mutlak sesuai UUD 1945.',
    points: 10
  },
  {
    id: 'q_bindo_09',
    subject_slug: 'bindo',
    subtopic: 'Fungsi Bahasa Indonesia sebagai Bahasa Negara',
    question_text: 'Rapat koordinasi antar kementerian dan penyuluhan program pembangunan kepada masyarakat lintas daerah paling tepat menggambarkan fungsi Bahasa Indonesia sebagai...',
    code_snippet: null,
    options_json: JSON.stringify([
      'lambang kebanggaan nasional',
      'bahasa pengantar pendidikan',
      'alat perhubungan tingkat nasional untuk pembangunan dan pemerintahan',
      'bahasa daerah yang dibakukan'
    ]),
    correct_index: 2,
    explanation: 'Fungsi alat perhubungan tingkat nasional untuk pembangunan dan pemerintahan terlihat ketika komunikasi lintas daerah dalam urusan pembangunan dan pemerintahan berjalan tanpa hambatan bahasa.',
    points: 10
  },
  {
    id: 'q_bindo_10',
    subject_slug: 'bindo',
    subtopic: 'Urgensi Bahasa Indonesia dalam Pendidikan',
    question_text: 'Manakah pernyataan tesis yang paling tepat untuk artikel tentang urgensi Bahasa Indonesia dalam pendidikan?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Bahasa Indonesia bukan sekadar alat komunikasi, tetapi infrastruktur untuk memeratakan akses ilmu dan membangun literasi akademik.',
      'Bahasa Indonesia adalah mata kuliah yang paling mudah dibandingkan mata kuliah lain.',
      'Semua mahasiswa seharusnya hanya menggunakan Bahasa Indonesia dan tidak perlu belajar bahasa asing.',
      'Bahasa daerah perlu dihapus agar pembelajaran lebih efisien.'
    ]),
    correct_index: 0,
    explanation: 'Tesis yang baik harus spesifik, dapat dipertahankan, dan tidak berlebihan. Pilihan pertama merumuskan peran strategis Bahasa Indonesia dalam pendidikan. Pilihan ketiga dan keempat bersifat ekstrem dan tidak sesuai materi, sedangkan pilihan kedua tidak berkaitan dengan urgensi.',
    points: 10
  },
  {
    id: 'q_bindo_11',
    subject_slug: 'bindo',
    subtopic: 'Konsep Ragam Bahasa',
    question_text: 'Ragam bahasa adalah variasi bahasa menurut pemakaian yang dipengaruhi oleh tiga faktor utama, yaitu...',
    code_snippet: null,
    options_json: JSON.stringify([
      'jumlah penutur, luas wilayah, dan jumlah kosakata',
      'topik pembicaraan, hubungan antarpembicara, dan medium lisan atau tulisan',
      'tingkat pendidikan, usia, dan jenis kelamin semata',
      'ejaan, tanda baca, dan panjang kalimat semata'
    ]),
    correct_index: 1,
    explanation: 'Definisi ragam bahasa dalam materi menekankan topik pembicaraan, hubungan antarpembicara, dan medium pembicaraan. Faktor lain dapat berpengaruh, tetapi tiga faktor itulah yang disebut secara eksplisit.',
    points: 10
  },
  {
    id: 'q_bindo_12',
    subject_slug: 'bindo',
    subtopic: 'Ragam Lisan dan Tulis',
    question_text: 'Ciri yang paling tepat menggambarkan ragam tulis dibandingkan ragam lisan adalah...',
    code_snippet: null,
    options_json: JSON.stringify([
      'terikat pada situasi dan waktu serta selalu membutuhkan lawan bicara',
      'mengandalkan intonasi dan gerak tubuh untuk memperjelas makna',
      'tidak terikat ruang dan waktu, menuntut struktur gramatikal, serta dibantu ejaan dan tanda baca',
      'selalu menggunakan kalimat tidak lengkap agar lebih efisien'
    ]),
    correct_index: 2,
    explanation: 'Ragam tulis tidak terikat pada situasi langsung, tidak selalu membutuhkan lawan bicara, dan mengandalkan ejaan serta tanda baca. Strukturnya cenderung lengkap dan gramatikal. Intonasi dan gerak tubuh adalah ciri ragam lisan.',
    points: 10
  },
  {
    id: 'q_bindo_13',
    subject_slug: 'bindo',
    subtopic: 'Ragam Lisan dan Tulis',
    question_text: 'Dalam ragam lisan, unsur yang membantu menyampaikan makna selain kata adalah...',
    code_snippet: null,
    options_json: JSON.stringify([
      'intonasi, jeda, ekspresi wajah, dan gerak tubuh',
      'hanya ejaan dan tanda baca',
      'hanya nomor halaman dan daftar pustaka',
      'hanya panjang kalimat dan jumlah paragraf'
    ]),
    correct_index: 0,
    explanation: 'Ragam lisan dibantu oleh unsur paralanguage seperti intonasi, jeda, tekanan, ekspresi wajah, dan gerak tubuh. Unsur tersebut dapat mengubah makna kalimat yang sama.',
    points: 10
  },
  {
    id: 'q_bindo_14',
    subject_slug: 'bindo',
    subtopic: 'Ragam Baku dan Nonbaku',
    question_text: 'Pidato resmi kenegaraan yang disampaikan secara lisan termasuk contoh...',
    code_snippet: null,
    options_json: JSON.stringify([
      'ragam lisan nonbaku',
      'ragam tulis nonbaku',
      'ragam lisan baku atau formal',
      'ragam ilmiah tertulis'
    ]),
    correct_index: 2,
    explanation: 'Media lisan tidak otomatis berarti nonbaku. Pidato resmi kenegaraan adalah ragam lisan yang baku dan formal karena menggunakan struktur, diksi, dan ejaan yang sesuai konteks resmi.',
    points: 10
  },
  {
    id: 'q_bindo_15',
    subject_slug: 'bindo',
    subtopic: 'Ragam Baku dan Nonbaku',
    question_text: 'Kalimat “Aku nggak bisa datang ke rapat itu” paling tepat dikelompokkan sebagai...',
    code_snippet: null,
    options_json: JSON.stringify([
      'ragam baku formal',
      'ragam nonbaku informal',
      'ragam ilmiah',
      'ragam tulis akademik'
    ]),
    correct_index: 1,
    explanation: 'Kata “aku”, “nggak”, dan “itu” menandai ragam nonbaku informal. Kalimat ini sah dalam percakapan santai, tetapi tidak tepat untuk karya ilmiah atau acara resmi.',
    points: 10
  },
  {
    id: 'q_bindo_16',
    subject_slug: 'bindo',
    subtopic: 'Ciri Ragam Ilmiah',
    question_text: 'Manakah yang BUKAN ciri ragam bahasa ilmiah?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Objektif dan faktual',
      'Logis dan sistematis',
      'Subjektif, imajinatif, dan mengutamakan kiasan',
      'Lugas, jelas, dan padat informasi'
    ]),
    correct_index: 2,
    explanation: 'Ragam ilmiah bersifat objektif, faktual, logis, sistematis, lugas, dan padat. Subjektivitas, imajinasi, serta kiasan berlebihan adalah ciri ragam non-ilmiah atau sastra.',
    points: 10
  },
  {
    id: 'q_bindo_17',
    subject_slug: 'bindo',
    subtopic: 'Objektivitas Ragam Ilmiah',
    question_text: 'Kalimat “Saya sangat yakin aplikasi ini pasti sukses” paling tepat diperbaiki menjadi...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Aplikasi ini berpotensi diterima pengguna berdasarkan hasil uji coba awal.',
      'Aplikasi ini bagaikan bintang yang bersinar di langit.',
      'Saya rasa semua orang akan sangat menyukai aplikasi ini.',
      'Aplikasi ini pasti menjadi yang terbaik di dunia.'
    ]),
    correct_index: 0,
    explanation: 'Ragam ilmiah menghindari klaim mutlak dan emosional. Pilihan pertama memakai hedging (“berpotensi”) serta dasar bukti (“hasil uji coba awal”), sehingga lebih objektif dan dapat dipertanggungjawabkan.',
    points: 10
  },
  {
    id: 'q_bindo_18',
    subject_slug: 'bindo',
    subtopic: 'Penanda Kebahasaan Ilmiah',
    question_text: 'Ungkapan “berpotensi”, “cenderung”, dan “berdasarkan data yang tersedia” dalam ragam ilmiah berfungsi sebagai...',
    code_snippet: null,
    options_json: JSON.stringify([
      'kata gaul untuk menarik pembaca',
      'hedging atau sikap hati-hati dalam menyampaikan klaim',
      'pengulangan yang harus dihapus',
      'bukti bahwa penulis tidak menguasai materi'
    ]),
    correct_index: 1,
    explanation: 'Hedging menunjukkan bahwa klaim disampaikan sesuai kekuatan bukti. Ini penting agar penulis tidak membuat generalisasi atau klaim mutlak yang tidak didukung data.',
    points: 10
  },
  {
    id: 'q_bindo_19',
    subject_slug: 'bindo',
    subtopic: 'Tujuan Ragam Ilmiah',
    question_text: 'Tujuan utama ragam bahasa ilmiah adalah...',
    code_snippet: null,
    options_json: JSON.stringify([
      'menghibur pembaca dengan cerita imajinatif',
      'menyampaikan ilmu, fakta, dan analisis secara objektif',
      'mengekspresikan perasaan penulis secara bebas',
      'membuat pembaca terkesan dengan kata-kata sulit'
    ]),
    correct_index: 1,
    explanation: 'Ragam ilmiah bertujuan menyampaikan ilmu, fakta, dan analisis. Menghibur dan mengekspresikan perasaan adalah tujuan ragam non-ilmiah. Kata sulit bukan tanda tulisan ilmiah yang baik.',
    points: 10
  },
  {
    id: 'q_bindo_20',
    subject_slug: 'bindo',
    subtopic: 'Ragam Ilmiah dan Non-ilmiah',
    question_text: 'Manakah kalimat yang paling sesuai dengan ragam ilmiah?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Data itu bagaikan harta karun yang tersembunyi di dasar laut.',
      'Hasil analisis menunjukkan bahwa minat baca responden cenderung menurun.',
      'Wah, hasilnya keren banget dan bikin semua orang tercengang!',
      'Saya yakin sekali penelitian ini akan mengubah dunia.'
    ]),
    correct_index: 1,
    explanation: 'Kalimat kedua menggunakan istilah yang tepat, sikap hati-hati (“cenderung”), dan pernyataan yang dapat diverifikasi. Pilihan lain memakai kiasan, bahasa gaul, atau klaim emosional tanpa bukti.',
    points: 10
  },
  {
    id: 'q_bindo_21',
    subject_slug: 'bindo',
    subtopic: 'Definisi Kalimat Efektif',
    question_text: 'Kalimat efektif adalah kalimat yang...',
    code_snippet: null,
    options_json: JSON.stringify([
      'paling panjang dan memakai sebanyak mungkin istilah asing',
      'dapat mengungkapkan gagasan secara tepat sehingga pembaca memahami maksud dengan tepat pula',
      'selalu berbentuk pasif dan tidak memiliki subjek',
      'menggunakan kata kias agar terkesan indah'
    ]),
    correct_index: 1,
    explanation: 'Efektivitas kalimat diukur dari ketepatan penyampaian gagasan. Kalimat efektif membuat pembaca atau pendengar menangkap maksud yang sama dengan yang dimaksud penulis, bukan dari panjangnya atau banyaknya istilah asing.',
    points: 10
  },
  {
    id: 'q_bindo_22',
    subject_slug: 'bindo',
    subtopic: 'Syarat Kesatuan Kalimat',
    question_text: 'Kalimat “Pembangunan gedung sekolah baru pihak yayasan dibantu oleh bank yang memberikan kredit” tidak efektif karena...',
    code_snippet: null,
    options_json: JSON.stringify([
      'terdapat subjek ganda sehingga kesatuan gagasannya kacau',
      'tidak memiliki kata kerja sama sekali',
      'terlalu pendek untuk menyampaikan gagasan',
      'menggunakan tanda baca yang berlebihan'
    ]),
    correct_index: 0,
    explanation: 'Kalimat tersebut menggabungkan dua subjek, yaitu “pembangunan gedung sekolah baru” dan “pihak yayasan”, sehingga kesatuan gagasannya rusak. Perbaikan yang tepat: “Pihak yayasan dibantu oleh bank yang memberikan kredit untuk membangun gedung sekolah baru.”',
    points: 10
  },
  {
    id: 'q_bindo_23',
    subject_slug: 'bindo',
    subtopic: 'Syarat Kepaduan Kalimat',
    question_text: 'Mengapa kalimat “Kepada setiap pengemudi mobil harus memiliki surat izin mengemudi” tidak padu?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Karena kata “kepada” di awal membuat kalimat tidak memiliki subjek yang jelas',
      'Karena kalimat itu tidak memiliki objek',
      'Karena kata “mobil” seharusnya ditulis dengan huruf kapital',
      'Karena kalimat itu terlalu banyak memakai konjungsi'
    ]),
    correct_index: 0,
    explanation: 'Kata depan “kepada” di awal kalimat menghalangi “setiap pengemudi mobil” menjadi subjek. Perbaikan: “Setiap pengemudi mobil harus memiliki surat izin mengemudi.”',
    points: 10
  },
  {
    id: 'q_bindo_24',
    subject_slug: 'bindo',
    subtopic: 'Syarat Keparalelan Kalimat',
    question_text: 'Manakah kalimat yang memenuhi syarat keparalelan atau kesejajaran?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Kegiatan di perpustakaan meliputi pembelian buku, membuat katalog, dan buku-buku diberi label.',
      'Kegiatan di perpustakaan meliputi pembelian buku, pembuatan katalog, dan pelabelan buku.',
      'Kegiatan di perpustakaan meliputi membeli buku, pembuatan katalog, dan buku diberi label.',
      'Kegiatan di perpustakaan meliputi pembelian buku, katalog dibuat, dan memberi label.'
    ]),
    correct_index: 1,
    explanation: 'Keparalelan menuntut bentuk unsur yang sederajat sama. Pilihan kedua memakai tiga nomina sejajar: pembelian, pembuatan, dan pelabelan. Pilihan lain mencampur nomina, verba, dan klausa.',
    points: 10
  },
  {
    id: 'q_bindo_25',
    subject_slug: 'bindo',
    subtopic: 'Syarat Ketepatan Kalimat',
    question_text: 'Pasangan kata yang tepat untuk memperbaiki kalimat “Bukan saya yang tidak mau, namun dia yang tidak suka” adalah...',
    code_snippet: null,
    options_json: JSON.stringify([
      'bukan ... tetapi juga',
      'bukan ... melainkan',
      'tidak ... namun',
      'bukan ... sehingga'
    ]),
    correct_index: 1,
    explanation: 'Kata “bukan” berpasangan dengan “melainkan”, bukan dengan “namun”. Kalimat yang tepat: “Bukan saya yang tidak mau, melainkan dia yang tidak suka.”',
    points: 10
  },
  {
    id: 'q_bindo_26',
    subject_slug: 'bindo',
    subtopic: 'Syarat Kehematan Kalimat',
    question_text: 'Kalimat “Agar supaya Anda memperoleh nilai yang baik, Anda harus belajar dengan sungguh-sungguh” paling tepat diperbaiki menjadi...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Agar supaya nilai Anda baik, Anda harus belajar dengan sungguh-sungguh.',
      'Agar memperoleh nilai yang baik, belajarlah sungguh-sungguh.',
      'Supaya agar Anda mendapat nilai baik, belajarlah dengan sungguh-sungguh.',
      'Anda harus belajar dengan sungguh-sungguh agar supaya nilai Anda baik.'
    ]),
    correct_index: 1,
    explanation: 'Kalimat asli mengandung pemborosan “agar supaya” dan pengulangan subjek “Anda”. Perbaikan yang hemat dan tetap jelas adalah “Agar memperoleh nilai yang baik, belajarlah sungguh-sungguh.”',
    points: 10
  },
  {
    id: 'q_bindo_27',
    subject_slug: 'bindo',
    subtopic: 'Syarat Kelogisan Kalimat',
    question_text: 'Kalimat “Kepada Bapak Dekan, waktu dan tempat kami persilakan” tidak logis karena...',
    code_snippet: null,
    options_json: JSON.stringify([
      'waktu dan tempat bukan hal yang dapat dipersilakan kepada orang',
      'Bapak Dekan tidak boleh diundang dalam rapat',
      'kata “kami” tidak boleh dipakai dalam kalimat resmi',
      'kalimat tersebut tidak memiliki tanda seru'
    ]),
    correct_index: 0,
    explanation: 'Kelogisan menuntut hubungan makna yang masuk akal. Waktu dan tempat tidak dapat “dipersilakan” kepada seseorang. Yang tepat adalah mempersilakan orang, misalnya “Bapak Dekan kami persilakan memberikan sambutan.”',
    points: 10
  },
  {
    id: 'q_bindo_28',
    subject_slug: 'bindo',
    subtopic: 'Ejaan dan Bentuk Kata',
    question_text: 'Penulisan kata yang tepat terdapat pada kalimat...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Sungai itu akan diperlebarkan tahun depan.',
      'Sungai itu akan di perlebarkan tahun depan.',
      'Sungai itu akan dilebarkan tahun depan.',
      'Sungai itu akan di-lebarkan tahun depan.'
    ]),
    correct_index: 2,
    explanation: 'Bentuk yang tepat adalah “dilebarkan”, bukan “diperlebarkan” atau “di perlebarkan”. Awalan “di-” ditulis serangkai dengan kata kerja. Penggunaan “diper-” pada contoh tersebut tidak tepat karena subjeknya dikenai tindakan, bukan melakukan proses “memper-”.',
    points: 10
  },
  {
    id: 'q_bindo_29',
    subject_slug: 'bindo',
    subtopic: 'Bagian-Bagian Karya Tulis Akademik',
    question_text: 'Secara umum, karya tulis akademik dikelompokkan menjadi tiga bagian besar, yaitu...',
    code_snippet: null,
    options_json: JSON.stringify([
      'bagian depan, bagian tengah, dan bagian belakang',
      'abstrak, daftar isi, dan lampiran',
      'pendahuluan, isi, dan kesimpulan',
      'judul, tabel, dan grafik'
    ]),
    correct_index: 0,
    explanation: 'Materi membagi KTA menjadi bagian depan, bagian tengah, dan bagian belakang. Pendahuluan, isi, dan kesimpulan adalah bagian dari isi (bagian tengah), bukan pembagian besar yang dimaksud.',
    points: 10
  },
  {
    id: 'q_bindo_30',
    subject_slug: 'bindo',
    subtopic: 'Bagian Depan Karya Tulis',
    question_text: 'Manakah yang BUKAN unsur lembar sampul karya tulis akademik?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Judul tulisan dan jenis karya tulis',
      'Logo atau lambang perguruan tinggi',
      'Nama penulis dan NIM',
      'Daftar pustaka dan lampiran'
    ]),
    correct_index: 3,
    explanation: 'Lembar sampul memuat judul, jenis karya, maksud, logo, identitas penulis, nama lembaga, kota, dan tahun. Daftar pustaka dan lampiran berada di bagian belakang, bukan di lembar sampul.',
    points: 10
  },
  {
    id: 'q_bindo_31',
    subject_slug: 'bindo',
    subtopic: 'Abstrak',
    question_text: 'Ketentuan penulisan abstrak dalam buku materi adalah...',
    code_snippet: null,
    options_json: JSON.stringify([
      'ditulis pada halaman utuh, tidak melebihi dua halaman, dan diberi nomor Romawi kecil di bawah tengah',
      'ditulis pada halaman utuh, minimal lima halaman, dan diberi nomor Arab di kanan atas',
      'ditulis menyambung dari kata pengantar dan tanpa nomor halaman',
      'ditulis setelah daftar pustaka dengan nomor Arab'
    ]),
    correct_index: 0,
    explanation: 'Abstrak ditulis pada halaman utuh, tidak melebihi dua halaman, dan halamannya memakai angka Romawi kecil di bagian bawah tengah. Abstrak berada di bagian depan, bukan setelah daftar pustaka.',
    points: 10
  },
  {
    id: 'q_bindo_32',
    subject_slug: 'bindo',
    subtopic: 'Kutipan Langsung',
    question_text: 'Kutipan langsung panjang, yaitu lebih dari empat baris, ditulis dengan cara...',
    code_snippet: null,
    options_json: JSON.stringify([
      'diintegrasikan dengan teks, diberi jarak sama, dan diapit tanda kutip',
      'dipisahkan dari teks, jarak antarbaris rapat, dan menjorok ke kanan lima karakter',
      'ditulis tanpa sumber karena sudah panjang',
      'diringkas dengan kata-kata sendiri dan tidak perlu sitasi'
    ]),
    correct_index: 1,
    explanation: 'Kutipan langsung panjang dipisahkan dari teks dengan jarak lebih besar, jarak antarbarisnya rapat, dan ditulis menjorok ke kanan lima karakter. Sumber tetap wajib dicantumkan. Ringkasan dengan kata sendiri adalah kutipan tidak langsung, bukan kutipan langsung panjang.',
    points: 10
  },
  {
    id: 'q_bindo_33',
    subject_slug: 'bindo',
    subtopic: 'Daftar Pustaka',
    question_text: 'Teknik penulisan daftar pustaka yang sesuai dengan materi adalah...',
    code_snippet: null,
    options_json: JSON.stringify([
      'diurutkan berdasarkan judul buku dan ditulis tanpa tahun terbit',
      'baris pertama dari margin kiri, baris berikutnya masuk tiga ketukan, jarak 1,5 spasi, dan diurutkan berdasarkan nama keluarga penulis',
      'semua baris dimulai dari tengah halaman dan diurutkan berdasarkan penerbit',
      'hanya mencantumkan nama penulis dan judul, tanpa kota dan penerbit'
    ]),
    correct_index: 1,
    explanation: 'Daftar pustaka memakai pola menggantung: baris pertama dari margin kiri, baris berikutnya masuk tiga ketukan, jarak 1,5 spasi, dan diurutkan berdasarkan abjad nama keluarga penulis. Unsur wajib meliputi nama, tahun, judul, serta kota dan penerbit.',
    points: 10
  },
  {
    id: 'q_bindo_34',
    subject_slug: 'bindo',
    subtopic: 'Menyusun Outline Karya Ilmiah',
    question_text: 'Dalam langkah mengembangkan argumen untuk outline, langkah pertama yang disarankan adalah...',
    code_snippet: null,
    options_json: JSON.stringify([
      'langsung menulis draf lengkap tanpa kerangka',
      'menetapkan tema atau tesis yang akan menjadi inti argumen',
      'mengumpulkan sebanyak mungkin kutipan tanpa membaca',
      'menentukan daftar pustaka sebelum menentukan topik'
    ]),
    correct_index: 1,
    explanation: 'Langkah pertama adalah menetapkan tema atau tesis. Setelah itu, penulis menginventarisasi topik bawahan, mengevaluasi relevansi dan koherensi, menyusun sistematis, memperjelas kaitan, lalu mengembangkan outline menjadi draf.',
    points: 10
  },
  {
    id: 'q_bindo_35',
    subject_slug: 'bindo',
    subtopic: 'Kalimat Utama dan Penjelas',
    question_text: 'Fungsi kalimat utama dalam paragraf akademik adalah...',
    code_snippet: null,
    options_json: JSON.stringify([
      'menyajikan seluruh data penelitian secara rinci',
      'menjadi inti gagasan atau ide pokok yang dijelaskan oleh kalimat-kalimat penjelas',
      'mengulang judul paragraf sebanyak mungkin',
      'memberi contoh yang paling panjang'
    ]),
    correct_index: 1,
    explanation: 'Kalimat utama memuat ide pokok yang bersifat umum dan menjadi dasar bagi kalimat penjelas. Kalimat penjelas yang memberi data, contoh, atau penalaran harus mendukung ide pokok tersebut.',
    points: 10
  },
  {
    id: 'q_bindo_36',
    subject_slug: 'bindo',
    subtopic: 'Kohesi dan Koherensi',
    question_text: 'Perbedaan paling tepat antara kohesi dan koherensi adalah...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Kohesi menyangkut keterpautan bentuk bahasa, sedangkan koherensi menyangkut keterpaduan makna dan alur logika.',
      'Kohesi hanya berlaku dalam puisi, sedangkan koherensi hanya berlaku dalam karya ilmiah.',
      'Kohesi adalah pengulangan kata, sedangkan koherensi adalah panjang paragraf.',
      'Kohesi dan koherensi tidak memiliki perbedaan.'
    ]),
    correct_index: 0,
    explanation: 'Kohesi adalah keterpautan gramatikal dan leksikal, misalnya melalui konjungsi, kata ganti, dan repetisi. Koherensi adalah keterpaduan makna serta alur logika. Paragraf dapat kohesif secara bentuk tetapi tetap tidak koheren jika gagasannya melompat.',
    points: 10
  },
  {
    id: 'q_bindo_37',
    subject_slug: 'bindo',
    subtopic: 'Alat Kohesi',
    question_text: 'Manakah yang termasuk alat kohesi dalam paragraf?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Konjungsi, kata ganti, repetisi, dan substitusi',
      'Judul bab, nomor halaman, dan daftar pustaka',
      'Panjang kalimat, jumlah paragraf, dan margin halaman',
      'Nama penulis, tahun terbit, dan nama penerbit'
    ]),
    correct_index: 0,
    explanation: 'Alat kohesi menghubungkan kalimat secara bentuk, antara lain konjungsi (selain itu, namun), kata ganti (mereka, hal tersebut), repetisi kata kunci, dan substitusi. Unsur lain yang disebut adalah bagian dari format karya tulis, bukan kohesi.',
    points: 10
  },
  {
    id: 'q_bindo_38',
    subject_slug: 'bindo',
    subtopic: 'Pola Pengembangan Paragraf',
    question_text: 'Paragraf yang dimulai dengan pernyataan umum lalu diikuti rincian-rincian khusus disebut paragraf...',
    code_snippet: null,
    options_json: JSON.stringify([
      'induktif',
      'deduktif',
      'campuran',
      'naratif'
    ]),
    correct_index: 1,
    explanation: 'Pola deduktif bergerak dari umum ke khusus: kalimat utama berada di awal, lalu diikuti kalimat penjelas. Pola induktif bergerak dari khusus ke umum, dengan simpulan di akhir.',
    points: 10
  },
  {
    id: 'q_bindo_39',
    subject_slug: 'bindo',
    subtopic: 'Koherensi Paragraf',
    question_text: 'Perhatikan paragraf berikut: “Literasi digital penting bagi mahasiswa. Kampus memiliki kantin yang luas. Banyak mahasiswa membeli kopi sebelum kuliah. Kopi mengandung kafein.” Kalimat yang paling tepat dihapus agar paragraf menjadi koheren adalah...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Kalimat pertama',
      'Kalimat kedua, ketiga, dan keempat karena tidak mendukung ide pokok tentang literasi digital',
      'Hanya kalimat keempat',
      'Tidak ada yang perlu dihapus karena semua kalimat masih berhubungan'
    ]),
    correct_index: 1,
    explanation: 'Ide pokok paragraf adalah literasi digital. Kalimat tentang kantin, kopi, dan kafein tidak mendukung ide tersebut. Menghapus ketiga kalimat itu memulihkan kesatuan dan koherensi paragraf.',
    points: 10
  },
  {
    id: 'q_bindo_40',
    subject_slug: 'bindo',
    subtopic: 'Paragraf Pendahuluan Akademik',
    question_text: 'Menurut materi, panjang ideal bagian pendahuluan karya tulis akademik adalah...',
    code_snippet: null,
    options_json: JSON.stringify([
      'tidak lebih dari empat paragraf atau sekitar 10–15 persen dari total naskah',
      'minimal setengah dari total naskah',
      'tepat sepuluh halaman tanpa memandang jenis karya',
      'tidak dibatasi karena pendahuluan adalah bagian terpenting'
    ]),
    correct_index: 0,
    explanation: 'Slide menyarankan pendahuluan tidak lebih dari empat paragraf atau sekitar 10–15 persen dari total naskah, tidak termasuk abstrak dan daftar pustaka. Pendahuluan harus jelas, relevan, dan tidak bertele-tele.',
    points: 10
  }
];

module.exports = bindoQuestions;
