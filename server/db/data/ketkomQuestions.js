const ketkomQuestions = [
  {
    id: 'q_ketkom_01',
    subject_slug: 'ketkom',
    subtopic: 'Prosesor: Socket PGA dan LGA',
    question_text: 'Seorang teknisi menemukan prosesor dengan banyak pin halus di bagian bawah package. Prosesor tersebut akan dipasang ke socket yang sesuai. Arsitektur socket yang dimaksud adalah...',
    code_snippet: null,
    options_json: JSON.stringify([
      'PGA (Pin Grid Array)',
      'LGA (Land Grid Array)',
      'PCIe (Peripheral Component Interconnect Express)',
      'DIMM (Dual Inline Memory Module)'
    ]),
    correct_index: 0,
    explanation: 'Pada PGA, pin berada di bagian bawah package prosesor dan masuk ke lubang socket motherboard. Pada LGA, pin justru berada di socket motherboard dan prosesor memiliki land/pad datar.',
    points: 10
  },
  {
    id: 'q_ketkom_02',
    subject_slug: 'ketkom',
    subtopic: 'Prosesor: Socket PGA dan LGA',
    question_text: 'Pada arsitektur LGA, letak pin prosesor dan socket yang benar adalah...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Pin berada pada prosesor, socket memiliki lubang',
      'Pin berada pada socket motherboard, prosesor memiliki land/pad datar',
      'Pin berada pada heatsink, prosesor memiliki konektor RJ-45',
      'Pin berada pada RAM, socket berada di power supply'
    ]),
    correct_index: 1,
    explanation: 'LGA berarti Land Grid Array. Prosesor memiliki area land/pad datar, sedangkan pin kontak berada di socket motherboard. Karena itu, pin socket LGA sangat rentan bengkok saat pemasangan.',
    points: 10
  },
  {
    id: 'q_ketkom_03',
    subject_slug: 'ketkom',
    subtopic: 'Analisis Spesifikasi untuk Multitasking',
    question_text: 'Dua prosesor dari generasi yang sama dibandingkan. Prosesor A memiliki 4 core/4 thread dan clock 4,2 GHz. Prosesor B memiliki 8 core/16 thread dan clock 3,6 GHz. Keduanya memakai RAM dan storage yang sama. Untuk beban banyak virtual machine dan aplikasi berat secara bersamaan, pilihan yang paling tepat adalah...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Prosesor A karena clock-nya lebih tinggi',
      'Prosesor B karena jumlah core/thread lebih banyak',
      'Prosesor A karena tidak membutuhkan cache',
      'Keduanya pasti identik karena generasi sama'
    ]),
    correct_index: 1,
    explanation: 'Beban multitasking berat dan banyak virtual machine lebih diuntungkan oleh jumlah core/thread yang lebih banyak. Clock tinggi membantu, tetapi tidak menggantikan kapasitas paralel 8 core/16 thread pada beban yang dapat dibagi ke banyak thread.',
    points: 10
  },
  {
    id: 'q_ketkom_04',
    subject_slug: 'ketkom',
    subtopic: 'Cache CPU',
    question_text: 'Level cache yang berada paling dekat dengan core CPU, berukuran paling kecil, tetapi memiliki akses paling cepat adalah...',
    code_snippet: null,
    options_json: JSON.stringify([
      'L1 cache',
      'L2 cache',
      'L3 cache',
      'RAM DDR4'
    ]),
    correct_index: 0,
    explanation: 'L1 cache terintegrasi di dalam core CPU, ukurannya paling kecil, dan paling cepat. L2 lebih besar dan sedikit lebih lambat; L3 lebih besar lagi dan sering dipakai bersama antar-core.',
    points: 10
  },
  {
    id: 'q_ketkom_05',
    subject_slug: 'ketkom',
    subtopic: 'Hyper-Threading dan Multithreading',
    question_text: 'Teknologi Intel yang memungkinkan satu core tampak seperti dua logical processor sehingga beberapa thread dapat dieksekusi secara bersamaan disebut...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Hyper-Threading',
      'HyperTransport',
      'Overclocking',
      'CPU throttling'
    ]),
    correct_index: 0,
    explanation: 'Hyper-Threading membuat satu core fisik dapat menangani dua alur thread (logical processor). HyperTransport adalah teknologi interkoneksi AMD, overclocking menaikkan clock di atas spesifikasi, dan throttling menurunkan kecepatan untuk menghemat daya.',
    points: 10
  },
  {
    id: 'q_ketkom_06',
    subject_slug: 'ketkom',
    subtopic: 'K3 dan ESD',
    question_text: 'Menurut materi keselamatan kerja, listrik statis biasanya baru dapat dirasakan oleh manusia setelah muatannya mencapai sekitar...',
    code_snippet: null,
    options_json: JSON.stringify([
      '3 volt',
      '30 volt',
      '300 volt',
      '3.000 volt'
    ]),
    correct_index: 3,
    explanation: 'Manusia biasanya baru merasakan sengatan listrik statis pada sekitar 3.000 volt. Namun komponen elektronik dapat mengalami kerusakan pada tegangan yang jauh lebih rendah, sehingga ESD tetap berbahaya meskipun teknisi tidak merasakan apa pun.',
    points: 10
  },
  {
    id: 'q_ketkom_07',
    subject_slug: 'ketkom',
    subtopic: 'Prosedur Pencegahan ESD',
    question_text: 'Seorang teknisi akan memasang modul RAM ke motherboard. Tindakan yang paling tepat untuk mencegah kerusakan akibat ESD adalah...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Memegang chip RAM langsung dengan jari agar tidak jatuh',
      'Memakai antistatic wrist strap yang terhubung ke grounding dan menyimpan RAM di antistatic bag sebelum dipasang',
      'Bekerja di atas karpet tebal agar kaki tidak dingin',
      'Menyalakan komputer agar listrik statis mengalir ke motherboard'
    ]),
    correct_index: 1,
    explanation: 'Antistatic wrist strap yang terhubung ke grounding menyeimbangkan muatan listrik antara teknisi dan perangkat. RAM juga harus tetap berada di antistatic bag sampai siap dipasang. Bekerja di karpet dan menyentuh chip justru meningkatkan risiko ESD.',
    points: 10
  },
  {
    id: 'q_ketkom_08',
    subject_slug: 'ketkom',
    subtopic: 'K3: Skenario Perakitan',
    question_text: 'Seorang teknisi berjalan di atas karpet sintetis lalu langsung akan memegang motherboard. Tindakan pencegahan yang seharusnya dilakukan sebelum menyentuh motherboard adalah...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Meniup motherboard dengan udara panas',
      'Menggunakan antistatic wrist strap dan menyentuh bagian logam casing yang terhubung grounding',
      'Mencuci tangan dengan air panas lalu langsung memegang komponen',
      'Meletakkan motherboard di atas kain wol'
    ]),
    correct_index: 1,
    explanation: 'Berjalan di atas karpet dapat menumpuk muatan statis pada tubuh. Wrist strap yang terhubung grounding menetralkan muatan tersebut. Kain wol dan udara panas justru dapat menambah risiko kerusakan.',
    points: 10
  },
  {
    id: 'q_ketkom_09',
    subject_slug: 'ketkom',
    subtopic: 'POST',
    question_text: 'Pemeriksaan awal perangkat keras yang dilakukan BIOS/UEFI saat komputer dinyalakan untuk memastikan komponen dasar berfungsi disebut...',
    code_snippet: null,
    options_json: JSON.stringify([
      'POST (Power-On Self-Test)',
      'DHCP (Dynamic Host Configuration Protocol)',
      'PXE (Preboot Execution Environment)',
      'NAT (Network Address Translation)'
    ]),
    correct_index: 0,
    explanation: 'POST adalah Power-On Self-Test, yaitu pemeriksaan hardware dasar saat boot. Jika ada komponen bermasalah, POST dapat menampilkan error atau mengeluarkan beep code.',
    points: 10
  },
  {
    id: 'q_ketkom_10',
    subject_slug: 'ketkom',
    subtopic: 'BIOS dan UEFI',
    question_text: 'Fitur firmware yang memastikan komputer hanya menjalankan sistem operasi atau bootloader yang tepercaya, sehingga membantu mencegah rootkit, adalah...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Secure Boot pada UEFI',
      'DHCP lease',
      'NAT overload',
      'Quality of Service'
    ]),
    correct_index: 0,
    explanation: 'Secure Boot adalah standar keamanan UEFI yang memeriksa tanda tangan digital bootloader/OS. Fitur ini membantu mencegah bootkit dan rootkit mengambil alih proses boot.',
    points: 10
  },
  {
    id: 'q_ketkom_11',
    subject_slug: 'ketkom',
    subtopic: 'BIOS dan CMOS',
    question_text: 'Komputer sering kehilangan pengaturan waktu, tanggal, dan boot priority setiap kali daya dicabut. Komponen yang paling mungkin bermasalah adalah...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Baterai CMOS',
      'Kabel UTP',
      'Modul WLAN',
      'Power supply 12 volt'
    ]),
    correct_index: 0,
    explanation: 'Pengaturan BIOS disimpan di CMOS dan dijaga oleh baterai kecil. Jika baterai lemah atau habis, pengaturan seperti waktu, tanggal, dan boot order dapat kembali ke default saat daya hilang.',
    points: 10
  },
  {
    id: 'q_ketkom_12',
    subject_slug: 'ketkom',
    subtopic: 'Boot Priority',
    question_text: 'Seorang mahasiswa ingin menginstal sistem operasi dari flash drive USB. Agar komputer boot dari media instalasi, pengaturan yang harus dilakukan adalah...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Menempatkan USB drive di urutan atas boot priority',
      'Menghapus semua partisi SSD sebelum memasang USB',
      'Mematikan Secure Boot dan mencabut RAM',
      'Menempatkan network boot di urutan pertama'
    ]),
    correct_index: 0,
    explanation: 'Boot priority menentukan perangkat yang dicari firmware untuk boot. Agar instalasi dari USB berjalan, USB harus berada di urutan pertama atau dipilih melalui boot menu. Setelah instalasi, urutan biasanya dikembalikan ke SSD/HDD.',
    points: 10
  },
  {
    id: 'q_ketkom_13',
    subject_slug: 'ketkom',
    subtopic: 'Beep Code POST',
    question_text: 'Komputer mengeluarkan pola beep saat dinyalakan. Mengapa teknisi tidak boleh langsung menyimpulkan bahwa pola beep tertentu selalu berarti kerusakan RAM?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Karena beep code berbeda antarprodusen dan harus dicocokkan dengan dokumentasi motherboard',
      'Karena beep code hanya dihasilkan oleh sistem operasi',
      'Karena semua motherboard menggunakan pola beep yang sama',
      'Karena beep code selalu berarti baterai CMOS habis'
    ]),
    correct_index: 0,
    explanation: 'Pola beep code berbeda antarprodusen BIOS/UEFI dan antarversi motherboard. Karena itu, pola beep harus dicocokkan dengan dokumentasi resmi perangkat, bukan diasumsikan sama untuk semua komputer.',
    points: 10
  },
  {
    id: 'q_ketkom_14',
    subject_slug: 'ketkom',
    subtopic: 'Perbandingan BIOS dan UEFI',
    question_text: 'Manakah pernyataan yang paling tepat mengenai keunggulan UEFI dibandingkan BIOS legacy?',
    code_snippet: null,
    options_json: JSON.stringify([
      'UEFI tidak memerlukan POST sama sekali',
      'UEFI mendukung drive boot yang lebih besar dan menyediakan Secure Boot',
      'UEFI hanya dapat berjalan pada sistem 32-bit',
      'UEFI tidak dapat menyimpan pengaturan firmware'
    ]),
    correct_index: 1,
    explanation: 'UEFI mendukung sistem 32-bit dan 64-bit, drive boot yang lebih besar, antarmuka lebih lengkap, serta fitur keamanan seperti Secure Boot. UEFI tetap melakukan inisialisasi hardware, meskipun mekanismenya berbeda dari BIOS legacy.',
    points: 10
  },
  {
    id: 'q_ketkom_15',
    subject_slug: 'ketkom',
    subtopic: 'Update Firmware',
    question_text: 'Prosedur yang paling aman saat memperbarui firmware BIOS/UEFI adalah...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Mengunduh firmware dari situs resmi produsen, memastikan model sesuai, dan menjaga daya tetap stabil selama proses',
      'Menggunakan file firmware dari forum mana saja asalkan namanya mirip',
      'Mematikan komputer saat proses flashing mencapai 50 persen',
      'Mencabut baterai CMOS saat proses pembaruan berlangsung'
    ]),
    correct_index: 0,
    explanation: 'Firmware harus berasal dari sumber resmi produsen dan sesuai model motherboard. Daya harus stabil karena mematikan komputer saat flashing dapat membuat motherboard tidak dapat boot.',
    points: 10
  },
  {
    id: 'q_ketkom_16',
    subject_slug: 'ketkom',
    subtopic: 'Diagnosis POST',
    question_text: 'Seorang teknisi melepas seluruh modul RAM lalu menyalakan komputer. Komputer mengeluarkan beep code khusus. Apa tujuan dari pengujian ini?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Menguji apakah mekanisme POST dan peringatan hardware bekerja',
      'Menguji kecepatan internet',
      'Menguji apakah hard disk dapat menyimpan data',
      'Menguji apakah sistem operasi sudah terinstal'
    ]),
    correct_index: 0,
    explanation: 'Menghidupkan komputer tanpa RAM seharusnya memicu beep code khusus. Jika beep muncul, itu menandakan POST dan mekanisme peringatan bekerja. Prosedur ini membantu isolasi masalah dan tidak merusak komputer.',
    points: 10
  },
  {
    id: 'q_ketkom_17',
    subject_slug: 'ketkom',
    subtopic: 'Pinout T568A',
    question_text: 'Pada standar pengkabelan T568A, warna kawat yang berada pada pin 1 adalah...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Putih-hijau',
      'Putih-oranye',
      'Hijau',
      'Oranye'
    ]),
    correct_index: 0,
    explanation: 'Urutan T568A dimulai dengan putih-hijau pada pin 1, hijau pada pin 2, putih-oranye pada pin 3, dan seterusnya. Putih-oranye di pin 1 adalah ciri T568B.',
    points: 10
  },
  {
    id: 'q_ketkom_18',
    subject_slug: 'ketkom',
    subtopic: 'Pinout T568B',
    question_text: 'Pada standar T568B, pin 6 menggunakan kawat berwarna...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Hijau',
      'Putih-hijau',
      'Oranye',
      'Biru'
    ]),
    correct_index: 0,
    explanation: 'Urutan T568B: pin 1 putih-oranye, 2 oranye, 3 putih-hijau, 4 biru, 5 putih-biru, 6 hijau, 7 putih-cokelat, 8 cokelat. Jadi pin 6 adalah hijau.',
    points: 10
  },
  {
    id: 'q_ketkom_19',
    subject_slug: 'ketkom',
    subtopic: 'Straight-Through',
    question_text: 'Kabel UTP straight-through paling tepat digunakan untuk menghubungkan...',
    code_snippet: null,
    options_json: JSON.stringify([
      'PC ke switch',
      'PC ke PC secara langsung tanpa Auto-MDIX',
      'Switch ke switch lama',
      'Router ke router'
    ]),
    correct_index: 0,
    explanation: 'Straight-through memakai standar yang sama di kedua ujung dan umum dipakai untuk PC ke switch, PC ke wall jack, serta switch ke patch panel. Koneksi PC-PC, switch-switch, dan router-router secara standar lama membutuhkan crossover.',
    points: 10
  },
  {
    id: 'q_ketkom_20',
    subject_slug: 'ketkom',
    subtopic: 'Crossover',
    question_text: 'Pada kabel crossover, pasangan pin yang ditukar untuk jalur transmit dan receive adalah...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Pin 1 dengan 3 dan pin 2 dengan 6',
      'Pin 1 dengan 2 dan pin 3 dengan 4',
      'Pin 4 dengan 5 dan pin 7 dengan 8',
      'Semua pin ditukar secara acak'
    ]),
    correct_index: 0,
    explanation: 'Crossover menukar pin 1 dengan 3 dan pin 2 dengan 6, sehingga pasangan transmit di satu ujung terhubung ke receive di ujung lain. Pin 4, 5, 7, dan 8 tetap.',
    points: 10
  },
  {
    id: 'q_ketkom_21',
    subject_slug: 'ketkom',
    subtopic: 'Cable Tester: Open',
    question_text: 'Hasil pengujian kabel dengan cable tester menunjukkan LED pin 4 tidak menyala, sedangkan pin lain menyala normal. Jenis kerusakan yang paling mungkin adalah...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Open pada kawat pin 4',
      'Short antara pin 1 dan 2',
      'Split pair pada pasangan cokelat',
      'Kabel crossover yang normal'
    ]),
    correct_index: 0,
    explanation: 'Open berarti jalur kawat terputus sehingga tidak ada kontinuitas. Jika hanya LED pin 4 yang tidak menyala, kawat pin 4 kemungkinan putus, tidak masuk ke RJ-45, atau tidak terjepit dengan baik.',
    points: 10
  },
  {
    id: 'q_ketkom_22',
    subject_slug: 'ketkom',
    subtopic: 'Cable Tester: Short',
    question_text: 'Cable tester menunjukkan dua LED menyala bersamaan pada pin yang seharusnya berbeda. Interpretasi yang paling tepat adalah...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Terjadi short, yaitu dua kawat saling bersentuhan',
      'Kabel pasti straight-through yang benar',
      'Konektor RJ-45 tidak terpasang',
      'Kabel mengalami open pada semua pin'
    ]),
    correct_index: 0,
    explanation: 'Short terjadi ketika dua atau lebih kawat saling bersentuhan sehingga sinyal mengalir ke jalur yang tidak seharusnya. Tester dapat menampilkan beberapa LED menyala bersamaan atau tidak sesuai urutan.',
    points: 10
  },
  {
    id: 'q_ketkom_23',
    subject_slug: 'ketkom',
    subtopic: 'UTP dan STP',
    question_text: 'Pernyataan yang benar tentang perbedaan UTP dan STP adalah...',
    code_snippet: null,
    options_json: JSON.stringify([
      'UTP lebih murah dan umum, sedangkan STP memiliki shielding untuk perlindungan EMI/RFI yang lebih baik',
      'UTP memiliki shielding, sedangkan STP tidak memiliki pelindung',
      'STP tidak dapat digunakan untuk Ethernet',
      'UTP hanya memiliki dua kawat, sedangkan STP memiliki delapan kawat'
    ]),
    correct_index: 0,
    explanation: 'UTP tidak memiliki shielding tambahan sehingga lebih murah dan fleksibel, tetapi lebih rentan EMI/RFI. STP memiliki shielding yang memberikan perlindungan lebih baik, tetapi lebih mahal dan lebih sulit dipasang.',
    points: 10
  },
  {
    id: 'q_ketkom_24',
    subject_slug: 'ketkom',
    subtopic: 'Cable Tester: Miswire',
    question_text: 'Sebuah kabel straight-through baru diuji. LED menyala pada semua pin, tetapi urutannya menjadi 1, 2, 6, 3, 4, 5, 7, 8. Diagnostik yang paling tepat adalah...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Miswire, karena urutan kawat tidak sesuai standar',
      'Open, karena ada pin yang tidak menyala',
      'Short, karena semua pin menyala',
      'Kabel normal karena semua LED menyala'
    ]),
    correct_index: 0,
    explanation: 'Semua LED menyala berarti kontinuitas ada, tetapi urutan yang salah menunjukkan miswire. Pada straight-through, urutan pin di kedua ujung harus konsisten sesuai T568A atau T568B.',
    points: 10
  },
  {
    id: 'q_ketkom_25',
    subject_slug: 'ketkom',
    subtopic: 'Konfigurasi IP Statis',
    question_text: 'Untuk mengonfigurasi IP statis pada PC agar dapat berkomunikasi dengan jaringan lain, informasi minimal yang perlu diisi adalah...',
    code_snippet: null,
    options_json: JSON.stringify([
      'IP address, subnet mask, dan default gateway',
      'SSID, password, dan channel',
      'MAC address, nomor port, dan VLAN',
      'Nama komputer, wallpaper, dan bahasa sistem'
    ]),
    correct_index: 0,
    explanation: 'Konfigurasi IP statis memerlukan IP address, subnet mask, dan default gateway. DNS server diperlukan jika ingin mengakses nama domain, tetapi tiga informasi pertama adalah dasar komunikasi IP.',
    points: 10
  },
  {
    id: 'q_ketkom_26',
    subject_slug: 'ketkom',
    subtopic: 'Subnet Mask',
    question_text: 'Fungsi utama subnet mask pada konfigurasi IPv4 adalah...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Menentukan bagian network dan host dari sebuah IP address',
      'Mengenkripsi password Wi-Fi',
      'Menentukan merek switch yang digunakan',
      'Mengubah MAC address menjadi IP address'
    ]),
    correct_index: 0,
    explanation: 'Subnet mask menentukan bit mana yang menjadi bagian network dan bit mana yang menjadi bagian host. Dengan subnet mask 255.255.255.0, tiga oktet pertama adalah network dan oktet terakhir adalah host.',
    points: 10
  },
  {
    id: 'q_ketkom_27',
    subject_slug: 'ketkom',
    subtopic: 'Default Gateway',
    question_text: 'Sebuah PC memiliki IP 192.168.1.10/24 dan ingin mengirim data ke jaringan 192.168.2.0/24. Perangkat yang berperan sebagai pintu keluar dari jaringan lokal adalah...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Default gateway',
      'SSID',
      'Cable tester',
      'CMOS'
    ]),
    correct_index: 0,
    explanation: 'Default gateway adalah alamat router yang menjadi pintu keluar dari jaringan lokal. Jika tujuan berada di subnet berbeda, host mengirim paket ke gateway untuk dirutekan.',
    points: 10
  },
  {
    id: 'q_ketkom_28',
    subject_slug: 'ketkom',
    subtopic: 'Analisis Subnet',
    question_text: 'PC1 memakai 192.168.1.10/24 dan PC2 memakai 192.168.2.11/24. Keduanya terhubung ke switch yang sama. Mengapa ping dari PC1 ke PC2 gagal?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Karena kedua PC berada di subnet berbeda dan switch tidak merutekan antar-subnet',
      'Karena kabel straight-through tidak boleh dipakai di LAN',
      'Karena switch tidak memiliki alamat MAC',
      'Karena IP 192.168.2.11 adalah alamat broadcast'
    ]),
    correct_index: 0,
    explanation: 'PC1 berada di jaringan 192.168.1.0/24, sedangkan PC2 berada di 192.168.2.0/24. Switch hanya meneruskan frame dalam LAN dan tidak merutekan antar-subnet. Diperlukan router atau penyesuaian IP agar berada di subnet yang sama.',
    points: 10
  },
  {
    id: 'q_ketkom_29',
    subject_slug: 'ketkom',
    subtopic: 'Simple PDU',
    question_text: 'Dalam Cisco Packet Tracer, status "Successful" pada Simple PDU menunjukkan bahwa...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Paket uji berhasil mencapai perangkat tujuan',
      'Kabel UTP pasti menggunakan T568A',
      'Semua password WLAN sudah benar',
      'Komputer telah terhubung ke internet'
    ]),
    correct_index: 0,
    explanation: 'Simple PDU menguji pengiriman paket dari source ke destination. Status Successful berarti paket uji berhasil mencapai tujuan, bukan jaminan bahwa seluruh layanan atau koneksi internet bekerja.',
    points: 10
  },
  {
    id: 'q_ketkom_30',
    subject_slug: 'ketkom',
    subtopic: 'Verifikasi Konfigurasi IP',
    question_text: 'Perintah yang digunakan pada Command Prompt Windows untuk menampilkan alamat IP, subnet mask, dan default gateway adalah...',
    code_snippet: 'C:\\> ipconfig',
    options_json: JSON.stringify([
      'ipconfig',
      'ping',
      'crimping',
      'netstat -ssid'
    ]),
    correct_index: 0,
    explanation: 'Perintah ipconfig menampilkan konfigurasi IP pada adaptor jaringan Windows, termasuk IPv4 address, subnet mask, dan default gateway. Ping digunakan untuk menguji konektivitas.',
    points: 10
  },
  {
    id: 'q_ketkom_31',
    subject_slug: 'ketkom',
    subtopic: 'Pemilihan Kabel LAN',
    question_text: 'Untuk menghubungkan PC ke port switch pada topologi LAN Packet Tracer, jenis kabel yang paling tepat adalah...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Straight-through',
      'Crossover',
      'Coaxial',
      'Fiber single-mode'
    ]),
    correct_index: 0,
    explanation: 'PC ke switch menggunakan kabel straight-through karena kedua perangkat memakai pin transmit/receive yang berlawanan secara internal. Crossover digunakan untuk menyambungkan perangkat sejenis pada standar lama.',
    points: 10
  },
  {
    id: 'q_ketkom_32',
    subject_slug: 'ketkom',
    subtopic: 'Troubleshooting Gateway',
    question_text: 'PC1 dapat ping PC2 dalam subnet yang sama, tetapi ping ke default gateway gagal. Analisis yang paling tepat adalah...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Konfigurasi lokal dan kabel ke switch baik, tetapi gateway atau jalur ke router bermasalah',
      'Kabel PC1 ke switch pasti putus total',
      'IP PC2 pasti berada di subnet yang berbeda',
      'Subnet mask PC1 pasti 255.255.255.255'
    ]),
    correct_index: 0,
    explanation: 'Ping antar-PC berhasil menunjukkan konektivitas lokal, kabel, dan subnet dasar bekerja. Jika ping gateway gagal, masalah kemungkinan ada pada alamat gateway, interface router, kabel menuju router, atau konfigurasi router.',
    points: 10
  },
  {
    id: 'q_ketkom_33',
    subject_slug: 'ketkom',
    subtopic: 'SSID',
    question_text: 'Nama jaringan wireless yang muncul saat pengguna memindai daftar Wi-Fi disebut...',
    code_snippet: null,
    options_json: JSON.stringify([
      'SSID',
      'MAC address',
      'Subnet mask',
      'Default gateway'
    ]),
    correct_index: 0,
    explanation: 'SSID (Service Set Identifier) adalah nama jaringan wireless. Client memilih jaringan berdasarkan SSID, lalu melakukan autentikasi menggunakan password atau metode keamanan lain.',
    points: 10
  },
  {
    id: 'q_ketkom_34',
    subject_slug: 'ketkom',
    subtopic: 'WPA2-PSK',
    question_text: 'Mode keamanan wireless yang menggunakan satu password bersama dan enkripsi AES disebut...',
    code_snippet: null,
    options_json: JSON.stringify([
      'WPA2-Personal/PSK',
      'WEP',
      'Open Authentication',
      'SSID Broadcast'
    ]),
    correct_index: 0,
    explanation: 'WPA2-Personal atau WPA2-PSK menggunakan Pre-Shared Key berupa password bersama dan enkripsi AES. WEP sudah usang dan mudah dibobol, sedangkan open authentication tidak memakai password.',
    points: 10
  },
  {
    id: 'q_ketkom_35',
    subject_slug: 'ketkom',
    subtopic: 'Autentikasi WLAN',
    question_text: 'Laptop memilih SSID yang benar, tetapi password yang dimasukkan salah. Hasil yang paling mungkin adalah...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Autentikasi gagal dan laptop tidak dapat terhubung ke WLAN',
      'Laptop tetap terhubung dengan IP otomatis tanpa masalah',
      'SSID berubah menjadi nama lain',
      'Kabel UTP otomatis menggantikan koneksi wireless'
    ]),
    correct_index: 0,
    explanation: 'Pada WPA2-PSK, client harus mengetahui passphrase yang sama dengan AP. Password salah menyebabkan proses autentikasi gagal sehingga client tidak memperoleh akses ke jaringan.',
    points: 10
  },
  {
    id: 'q_ketkom_36',
    subject_slug: 'ketkom',
    subtopic: 'Konfigurasi Client Wireless',
    question_text: 'Pada Cisco Packet Tracer, aplikasi yang digunakan untuk memindai SSID dan menghubungkan laptop ke jaringan wireless biasanya dibuka melalui...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Desktop → PC Wireless',
      'Desktop → Command Prompt → format',
      'Physical → Power Supply',
      'Config → Serial Port'
    ]),
    correct_index: 0,
    explanation: 'Pada laptop di Packet Tracer, aplikasi PC Wireless tersedia melalui tab Desktop. Di sana client dapat memindai SSID, memilih jaringan, dan memasukkan password.',
    points: 10
  },
  {
    id: 'q_ketkom_37',
    subject_slug: 'ketkom',
    subtopic: 'Pengalamatan WLAN',
    question_text: 'Pada jobsheet WLAN, Laptop0 memakai 192.168.30.10/24 dan gateway 192.168.30.1. Alamat IP yang tepat untuk Laptop1 agar berada di subnet yang sama dan tidak bertabrakan adalah...',
    code_snippet: null,
    options_json: JSON.stringify([
      '192.168.30.11',
      '192.168.31.11',
      '192.168.30.1',
      '192.168.30.255'
    ]),
    correct_index: 0,
    explanation: 'Laptop1 harus berada di subnet 192.168.30.0/24 dan memakai alamat host yang unik. 192.168.30.11 valid. 192.168.31.11 berbeda subnet, 192.168.30.1 dipakai gateway, dan 192.168.30.255 adalah alamat broadcast.',
    points: 10
  },
  {
    id: 'q_ketkom_38',
    subject_slug: 'ketkom',
    subtopic: 'SSID Case-Sensitive',
    question_text: 'Home router memancarkan SSID KETKOM-07, tetapi teknisi mencari ketkom-07. Mengapa laptop tidak menemukan jaringan yang dimaksud?',
    code_snippet: null,
    options_json: JSON.stringify([
      'SSID dapat bersifat case-sensitive sehingga huruf besar dan kecil harus sama',
      'SSID hanya dapat terdiri atas angka',
      'Password WPA2 mengubah SSID secara otomatis',
      'Subnet mask menghapus nama SSID'
    ]),
    correct_index: 0,
    explanation: 'Pada beberapa konfigurasi, SSID bersifat case-sensitive. Nama KETKOM-07 dan ketkom-07 dianggap berbeda, sehingga client harus memilih SSID yang persis sama.',
    points: 10
  },
  {
    id: 'q_ketkom_39',
    subject_slug: 'ketkom',
    subtopic: 'Fungsi WPA2-PSK',
    question_text: 'Fungsi utama WPA2-PSK pada jaringan WLAN adalah...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Mengautentikasi client dengan password bersama dan mengenkripsi lalu lintas wireless',
      'Menentukan warna kabel UTP',
      'Menggantikan kebutuhan IP address',
      'Mempercepat POST pada BIOS'
    ]),
    correct_index: 0,
    explanation: 'WPA2-PSK mengautentikasi client menggunakan Pre-Shared Key dan mengenkripsi komunikasi wireless dengan AES. WPA2 tidak menggantikan IP address atau berhubungan dengan kabel UTP dan POST.',
    points: 10
  },
  {
    id: 'q_ketkom_40',
    subject_slug: 'ketkom',
    subtopic: 'Troubleshooting WLAN',
    question_text: 'Laptop tidak melihat SSID KETKOM-07 sama sekali, padahal laptop lain dapat terhubung. Faktor yang paling mungkin menjadi penyebab adalah...',
    code_snippet: null,
    options_json: JSON.stringify([
      'NIC wireless laptop mati, SSID disembunyikan, atau laptop berada di luar jangkauan',
      'Password WPA2 salah',
      'IP address laptop berada di subnet yang berbeda',
      'Default gateway salah'
    ]),
    correct_index: 0,
    explanation: 'Jika SSID tidak muncul sama sekali, masalah berada sebelum tahap autentikasi dan IP, misalnya NIC wireless nonaktif, SSID disembunyikan, AP tidak menjangkau laptop, atau channel bermasalah. Password/IP/gateway baru relevan setelah SSID ditemukan.',
    points: 10
  }
];

module.exports = ketkomQuestions;
