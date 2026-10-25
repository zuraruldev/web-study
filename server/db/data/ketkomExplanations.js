const ketkomExplanations = [
  {
    id: 'exp_ketkom_01',
    subject_slug: 'ketkom',
    chapter_order: 1,
    topic_title: 'Bab 1: Prosesor, Multitasking, dan K3/ESD',
    content_markdown: `# Bab 1: Prosesor, Multitasking, dan K3/ESD

> **Sumber materi:** Pertemuan 2 — IT Essentials 8.0 Chapter 1 (Personal Computer Hardware) dan Pertemuan 3 — Advanced Computer Hardware.
>
> **Cakupan kisi-kisi UTS:** Kisi 1 — menganalisis spesifikasi prosesor untuk multitasking serta prosedur K3 dan pencegahan Electrostatic Discharge.

## 1. Kedudukan CPU dalam Sistem Komputer

**Central Processing Unit (CPU)** adalah unit yang bertanggung jawab menafsirkan dan mengeksekusi instruksi program. CPU menerima instruksi dari memori, melakukan operasi aritmetika dan logika, lalu mengirim hasilnya kembali ke memori atau perangkat lain.

CPU bukan sekadar "otak" komputer. Kinerjanya ditentukan oleh kombinasi:

- jumlah inti dan thread;
- kecepatan clock;
- ukuran dan level cache;
- lebar bus data;
- dukungan instruksi khusus;
- jumlah dan kecepatan RAM;
- kemampuan pendinginan.

### 1.1 Socket CPU: PGA dan LGA

Socket adalah antarmuka fisik antara prosesor dan motherboard. Dua arsitektur yang sering diuji adalah **PGA** dan **LGA**.

| Aspek | PGA (Pin Grid Array) | LGA (Land Grid Array) |
| :--- | :--- | :--- |
| Letak pin | Pin berada di bagian bawah prosesor | Pin berada di socket motherboard |
| Bentuk prosesor | Memiliki banyak pin | Memiliki land/pad datar |
| Risiko kerusakan | Pin prosesor mudah bengkok | Pin socket mudah bengkok |
| Perawatan | Prosesor harus dipasang hati-hati | Socket harus ditutup saat tidak dipakai |
| Contoh | Prosesor AMD generasi lama | Banyak prosesor Intel modern |

**Kalimat kunci untuk ujian:** pada PGA pin ada di prosesor; pada LGA pin ada di socket.

![Perbandingan arsitektur socket PGA dan LGA](/images/ketkom/cpu-architecture-pga-lga.png)

### 1.2 Core, Thread, dan Multitasking

**Core** adalah inti pemrosesan fisik di dalam CPU. Satu CPU dapat memiliki dua atau lebih core (*multicore*). Setiap core mampu menjalankan instruksi secara mandiri.

**Thread** adalah alur instruksi yang lebih kecil di dalam sebuah proses. Sistem operasi membagi program menjadi thread agar beberapa pekerjaan dapat berjalan secara bergantian atau bersamaan.

| Istilah | Makna | Analogi |
| :--- | :--- | :--- |
| Core | Inti fisik pemroses | Jumlah kasir |
| Thread | Alur instruksi yang dijadwalkan | Jumlah antrean yang dilayani |
| Multitasking | Sistem operasi menjalankan banyak tugas dengan pembagian waktu | Satu kasir melayani beberapa antrean bergantian |
| Multithreading | Satu program dipecah menjadi beberapa thread | Satu pekerjaan dibagi ke beberapa antrean |
| Hyper-Threading | Teknologi Intel yang membuat satu core tampak seperti dua logical processor | Satu kasir dengan dua meja layanan |

**Multitasking** adalah kemampuan sistem operasi untuk menangani banyak proses dalam waktu yang tampak bersamaan. CPU dengan banyak core dan thread lebih baik menangani banyak proses berat, tetapi **RAM juga harus cukup**. Jika RAM habis, sistem akan melakukan paging ke disk sehingga terasa lambat walaupun CPU kuat.

**Multithreading** berbeda dari multitasking. Multitasking berfokus pada banyak proses dari sistem operasi; multithreading berfokus pada banyak alur eksekusi, baik di dalam satu proses maupun melalui beberapa core.

### 1.3 Clock Speed, Overclocking, dan Throttling

**Clock speed** adalah jumlah siklus per detik, diukur dalam **MHz** atau **GHz**. Clock yang lebih tinggi dapat meningkatkan kecepatan, tetapi tidak otomatis membuat CPU lebih cepat untuk semua beban kerja. Arsitektur, cache, jumlah core, dan efisiensi instruksi juga menentukan.

- **Overclocking:** menjalankan CPU di atas spesifikasi resmi. Risikonya panas berlebih, ketidakstabilan, dan kerusakan.
- **CPU throttling:** menurunkan kecepatan CPU untuk menghemat daya atau mengurangi panas.
- **Virtualization:** dukungan hardware agar satu CPU dapat menjalankan beberapa sistem operasi virtual secara paralel.

### 1.4 Cache: Memori Tercepat di Dekat CPU

Cache adalah memori SRAM berkecepatan tinggi yang menyimpan data dan instruksi yang baru atau sering dipakai CPU. Cache mengurangi waktu tunggu CPU saat mengambil data dari RAM.

| Level | Posisi | Ukuran relatif | Kecepatan | Fungsi |
| :--- | :--- | :--- | :--- | :--- |
| L1 | Di dalam core CPU | Paling kecil | Paling cepat | Data dan instruksi yang paling sering dipakai |
| L2 | Di dalam CPU/package | Lebih besar dari L1 | Lebih lambat dari L1 | Cache per core atau per package |
| L3 | Di dalam CPU, sering dipakai bersama | Paling besar | Lebih lambat dari L2 | Cache bersama antar-core pada CPU kelas atas |

**Urutan kecepatan memori dari cepat ke lambat:** register CPU, L1, L2, L3, RAM, SSD, HDD.

**Kesalahan umum:** menganggap cache adalah RAM. Cache adalah memori internal CPU yang sangat cepat dan kecil; RAM adalah memori kerja utama yang lebih besar tetapi lebih lambat.

![Hierarki cache CPU](/images/ketkom/cpu-cache-hierarchy.png)

### 1.5 RISC, CISC, dan GPU Terintegrasi

- **RISC (Reduced Instruction Set Computer):** set instruksi lebih kecil dan sederhana, dirancang dieksekusi cepat.
- **CISC (Complex Instruction Set Computer):** set instruksi lebih banyak dan kompleks, sering membutuhkan langkah lebih sedikit per operasi.
- **Integrated GPU:** GPU yang menyatu dengan CPU dan memakai RAM sistem; hemat biaya dan panas, tetapi kurang cocok untuk beban grafis berat.
- **Dedicated GPU:** chip grafis terpisah dengan VRAM sendiri; lebih kuat untuk rendering, gaming, dan komputasi grafis berat.

### 1.6 Memilih Prosesor untuk Multitasking

Untuk beban multitasking seperti membuka banyak tab browser, virtual machine, editing, dan aplikasi Office secara bersamaan, prioritas spesifikasi adalah:

1. **Jumlah core dan thread** yang memadai.
2. **RAM** yang cukup, misalnya 16 GB atau lebih untuk beban berat.
3. **Cache L3** yang lebih besar.
4. **Clock speed** yang seimbang dengan jumlah core.
5. **Pendinginan** yang memadai agar tidak throttling.
6. **Dukungan virtualisasi** jika memakai VM.

CPU dengan 8 core/16 thread umumnya lebih baik untuk multitasking berat daripada CPU 4 core/4 thread pada kelas yang sama. Namun CPU 4 core dengan arsitektur baru dan cache besar bisa mengalahkan CPU lama 8 core pada beban tertentu. Karena itu, analisis harus melihat kombinasi spesifikasi, bukan hanya angka core.

---

## 2. K3 dan Pencegahan ESD

### 2.1 Mengapa K3 Penting?

K3 (Keselamatan dan Kesehatan Kerja) dalam perakitan komputer mencakup keselamatan diri, perangkat, dan lingkungan kerja. Risiko utama:

- sengatan listrik dari power supply atau perangkat bervoltase tinggi;
- kerusakan komponen akibat **Electrostatic Discharge (ESD)**;
- luka akibat ujung logam, obeng, atau kabel;
- kebakaran akibat korsleting atau power supply berkualitas buruk;
- kerusakan data akibat prosedur mematikan daya yang salah.

### 2.2 Electrostatic Discharge (ESD)

**ESD** terjadi ketika muatan listrik statis berpindah antara dua permukaan yang berbeda muatan. Pada manusia, ESD baru terasa di kulit sekitar **3.000 volt**. Namun komponen elektronik dapat rusak pada tegangan yang jauh lebih rendah daripada ambang sensasi manusia.

ESD dapat menyebabkan:

- kerusakan langsung sehingga komponen mati total;
- kerusakan laten yang baru muncul setelah beberapa waktu;
- error intermiten yang sulit didiagnosis;
- kerusakan pada chip, RAM, GPU, atau motherboard.

**Sumber ESD di ruang praktik:** karpet sintetis, pakaian wol, sepatu karet, kursi plastik, kemasan styrofoam, dan gesekan saat membuka kemasan.

![Prosedur keselamatan listrik dan ESD](/images/ketkom/k3-esd-safety-procedures.png)

### 2.3 Prosedur Pencegahan ESD

Gunakan prosedur berikut sebelum dan saat menyentuh komponen:

1. **Matikan komputer dan cabut kabel daya** sebelum membuka casing.
2. Simpan komponen di **antistatic bag** sampai siap dipasang.
3. Pakai **antistatic wrist strap** yang terhubung ke grounding yang benar.
4. Gunakan **grounded mat** di meja kerja dan **grounded floor mat** jika tersedia.
5. Sentuh bagian logam casing yang tidak dicat untuk menyeimbangkan muatan sebelum menyentuh komponen.
6. Pegang kartu atau RAM pada tepi, jangan menyentuh chip, pin, atau sirkuit.
7. Hindari bekerja di atas karpet, sofa, atau permukaan yang menghasilkan listrik statis.
8. Jangan memasang atau melepas komponen saat komputer masih tersambung ke listrik.
9. Jangan memakai gelang logam, jam tangan, atau perhiasan yang dapat menghubungkan arus.
10. Pastikan tangan kering dan area kerja berventilasi baik.

**Catatan penting:** antistatic wrist strap harus memiliki resistansi pengaman dan terhubung ke grounding yang benar. Gelang yang hanya diikat tanpa grounding tidak memberi perlindungan maksimal.

### 2.4 Keselamatan Listrik

- Power supply mengubah AC menjadi DC dengan tegangan 3,3 V, 5 V, dan 12 V untuk komponen internal.
- Bagian dalam power supply dan beberapa printer dapat menyimpan tegangan tinggi walaupun perangkat sudah dimatikan.
- Jangan membuka power supply tanpa pelatihan dan alat yang sesuai.
- Gunakan kabel daya yang sesuai spesifikasi; jangan menukar adaptor AC laptop sembarangan.
- Hindari menyalakan perangkat jika ada bau terbakar, kabel terkelupas, atau percikan.
- Gunakan pemutus arus, stabilizer, atau UPS sesuai kebutuhan.
- Jangan menutup ventilasi casing dan pastikan aliran udara baik.

### 2.5 Alur Kerja Aman Saat Merakit

1. Siapkan meja bersih dan area kerja yang cukup.
2. Pakai gelang antistatik dan grounded mat.
3. Cabut daya dan tekan tombol power beberapa detik untuk mengosongkan sisa daya.
4. Buka casing sesuai prosedur.
5. Pasang komponen satu per satu: CPU, heatsink, RAM, storage, kartu ekspansi, lalu kabel.
6. Periksa kembali pemasangan sebelum menyalakan.
7. Nyalakan tanpa casing terlebih dahulu jika aman, lalu cek POST dan suhu.
8. Matikan dan cabut daya sebelum memasang atau melepas komponen lagi.

---

## 3. Ringkasan Cepat Kisi 1

| Pertanyaan Ujian | Jawaban Kunci |
| :--- | :--- |
| Socket dengan pin di prosesor? | PGA |
| Socket dengan pin di motherboard? | LGA |
| Teknologi satu core tampak dua processor? | Hyper-Threading |
| Memori tercepat dekat CPU? | Cache L1 |
| Banyak core untuk multitasking? | Multicore processor |
| Ambang ESD yang terasa di manusia? | Sekitar 3.000 volt |
| Alat pencegah ESD saat memegang komponen? | Antistatic wrist strap dan antistatic bag |
| Perbedaan core dan thread? | Core adalah inti fisik; thread adalah alur instruksi yang dijadwalkan |

> **Kunci analisis:** untuk soal multitasking, jangan hanya memilih angka clock tertinggi. Pilih prosesor dengan core/thread memadai, cache besar, RAM cukup, dan pendinginan yang baik. Untuk soal K3, prioritaskan tindakan yang memutus daya dan menetralkan listrik statis sebelum menyentuh komponen.`
  },
  {
    id: 'exp_ketkom_02',
    subject_slug: 'ketkom',
    chapter_order: 2,
    topic_title: 'Bab 2: Perakitan PC, POST, BIOS/UEFI, dan Boot Priority',
    content_markdown: `# Bab 2: Perakitan PC, POST, BIOS/UEFI, dan Boot Priority

> **Sumber materi:** Pertemuan 3 — IT Essentials 8.0 Chapter 3 (Advanced Computer Hardware), bagian 3.1 Boot the Computer dan BIOS/UEFI Configuration.
>
> **Cakupan kisi-kisi UTS:** Kisi 2 — menganalisis penyebab kegagalan POST serta memahami fungsi BIOS/UEFI dan Boot Priority.

## 1. Urutan Booting Komputer

Booting adalah rangkaian proses menyalakan komputer hingga sistem operasi siap digunakan. Urutan sederhananya:

1. **Daya masuk** dan power supply mengubah AC menjadi DC.
2. **CPU mulai bekerja** dan menjalankan firmware dari motherboard.
3. **POST (Power-On Self-Test)** memeriksa perangkat keras dasar.
4. **BIOS/UEFI membaca konfigurasi** dari CMOS atau penyimpanan firmware.
5. **Boot priority** menentukan perangkat mana yang dicari sistem operasinya.
6. **Bootloader** dari perangkat boot dijalankan.
7. **Sistem operasi** dimuat ke RAM.

Jika salah satu tahap gagal, komputer dapat menampilkan pesan error, mengeluarkan beep code, atau tidak menampilkan apa pun.

---

## 2. POST (Power-On Self-Test)

**POST** adalah pemeriksaan awal yang dilakukan firmware saat komputer dinyalakan. POST memeriksa komponen penting seperti CPU, RAM, keyboard, GPU, dan perangkat penyimpanan.

Tujuan POST:

- memastikan perangkat keras dasar dapat berkomunikasi;
- mendeteksi kerusakan atau komponen yang tidak terpasang;
- memberikan kode error bila ada masalah;
- menentukan apakah komputer siap melanjutkan proses boot.

### 2.1 Gejala Kegagalan POST

| Gejala | Kemungkinan Penyebab | Langkah Analisis |
| :--- | :--- | :--- |
| Tidak ada tampilan, fan berputar | RAM tidak terpasang, GPU bermasalah, kabel display lepas | Cek RAM, reseat GPU, cek kabel monitor |
| Beep code berulang | RAM, GPU, atau motherboard bermasalah | Cocokkan pola beep dengan dokumentasi motherboard |
| Layar mati total tanpa beep | Power supply, CPU, atau motherboard | Cek daya, kabel 24-pin, kabel CPU 4/8-pin |
| POST lama lalu mati | Memori atau pendinginan bermasalah | Cek RAM satu per satu, cek suhu |
| Muncul pesan "No bootable device" | Boot priority salah atau storage tidak terdeteksi | Cek kabel SATA/NVMe dan boot order |
| Waktu dan tanggal terus kembali salah | Baterai CMOS lemah | Ganti baterai CMOS |

### 2.2 Beep Code

Beep code adalah pola bunyi yang dihasilkan motherboard saat POST menemukan masalah. **Pola beep berbeda antarprodusen dan antarversi BIOS.** Karena itu:

- jangan menghafal satu pola untuk semua motherboard;
- baca dokumentasi motherboard atau situs produsen;
- catat jumlah beep panjang dan pendek;
- cek komponen yang sesuai dengan kode tersebut.

Contoh umum yang sering dipakai sebagai ilustrasi:

- satu beep pendek: POST normal pada banyak BIOS;
- beep berulang: masalah RAM atau GPU;
- tidak ada beep dan tidak ada tampilan: masalah daya atau motherboard.

Anggap contoh tersebut sebagai ilustrasi, bukan aturan universal.

### 2.3 Uji POST dengan Melepas RAM

Salah satu tips instalasi: lepaskan semua modul RAM lalu nyalakan komputer. Jika POST bekerja, motherboard biasanya mengeluarkan beep code khusus untuk kondisi tanpa RAM. Prosedur ini tidak merusak komputer dan membantu memastikan bahwa speaker atau mekanisme beep berfungsi.

Setelah pengujian, pasang kembali RAM dengan benar hingga klip pengunci berbunyi.

![Ilustrasi diagnostik POST dan beep code](/images/ketkom/post-diagnostics-beep-codes.png)

---

## 3. BIOS, CMOS, dan UEFI

### 3.1 BIOS

**BIOS (Basic Input/Output System)** adalah firmware pada motherboard yang menjadi jembatan komunikasi antara sistem operasi dan perangkat keras. BIOS membantu:

- menjalankan POST;
- mengidentifikasi drive yang tersedia dan yang bootable;
- mengatur konfigurasi memori;
- mengatur PCIe/PCI dan port SATA/USB;
- mengatur manajemen daya;
- menyediakan pengaturan dasar sebelum OS dimuat.

BIOS modern disimpan pada chip **EEPROM** yang dapat diperbarui tanpa mengganti chip secara fisik. Proses pembaruan disebut **flashing the BIOS**.

### 3.2 CMOS

**CMOS** adalah memori kecil yang menyimpan pengaturan BIOS, seperti waktu, tanggal, urutan boot, dan konfigurasi hardware. CMOS dijaga oleh baterai kecil di motherboard.

Jika baterai CMOS lemah atau habis:

- waktu dan tanggal komputer salah setelah dimatikan;
- pengaturan BIOS kembali ke default;
- boot priority bisa berubah;
- komputer dapat menampilkan pesan kesalahan CMOS.

Mengganti baterai CMOS biasanya menghilangkan pengaturan kustom, sehingga konfigurasi perlu diperiksa ulang.

![Baterai CMOS dan pengaturan BIOS](/images/ketkom/bios-cmos-battery-settings.png)

### 3.3 UEFI

**UEFI (Unified Extensible Firmware Interface)** adalah firmware modern pengganti BIOS legacy. UEFI menawarkan:

- dukungan sistem 32-bit dan 64-bit;
- dukungan drive boot yang lebih besar;
- antarmuka grafis yang lebih lengkap;
- **Secure Boot** untuk memastikan hanya OS tepercaya yang dijalankan;
- fitur keamanan dan diagnostik yang lebih baik.

**Secure Boot** membantu mencegah rootkit dan bootkit mengambil alih proses boot dengan memeriksa tanda tangan digital bootloader.

### 3.4 Perbandingan BIOS Legacy dan UEFI

| Aspek | BIOS Legacy | UEFI |
| :--- | :--- | :--- |
| Dukungan drive besar | Terbatas | Lebih baik |
| Antarmuka | Sederhana | Grafis dan lebih lengkap |
| Secure Boot | Umumnya tidak ada | Tersedia |
| Mode boot | Legacy/CSM | UEFI native |
| Dukungan 64-bit | Terbatas | Penuh |
| Keamanan firmware | Dasar | Lebih lengkap |

![Fitur firmware UEFI](/images/ketkom/uefi-firmware-features.png)

---

## 4. Boot Priority dan Boot Order

**Boot priority** adalah urutan perangkat yang dicari firmware untuk menemukan sistem operasi. Contoh urutan:

1. USB drive
2. SSD/NVMe
3. HDD
4. Network boot (PXE)
5. Optical drive

### 4.1 Mengapa Boot Priority Penting?

- Untuk **instalasi OS dari USB**, USB harus berada di atas drive internal.
- Untuk boot normal, SSD/HDD sistem operasi harus berada di atas USB agar tidak mencoba boot dari flash drive yang tidak bootable.
- Untuk **network boot**, PXE harus diaktifkan dan berada di urutan yang sesuai.
- Jika boot priority salah, komputer dapat menampilkan pesan "No bootable device", "Operating system not found", atau masuk ke jaringan PXE.

### 4.2 Skenario Ujian

**Kasus:** komputer memiliki SSD yang berisi Windows, tetapi setiap kali dinyalakan muncul pesan "No bootable device".

**Analisis:**

1. Cek apakah SSD terdeteksi di BIOS/UEFI.
2. Jika tidak terdeteksi, periksa kabel SATA/NVMe dan slot.
3. Jika terdeteksi, periksa boot priority: pastikan SSD berada di urutan pertama.
4. Pastikan mode boot sesuai (UEFI atau Legacy/CSM).
5. Jika OS dipasang dalam mode UEFI, jangan boot dalam mode Legacy tanpa konversi.
6. Jika perlu, perbaiki bootloader melalui media instalasi.

---

## 5. Keamanan BIOS/UEFI

Fitur keamanan yang sering tersedia:

| Fitur | Fungsi |
| :--- | :--- |
| BIOS/UEFI password | Membatasi akses ke pengaturan firmware |
| Drive encryption | Mengenkripsi isi drive agar data tidak mudah dibaca |
| LoJack | Membantu pemilik melacak, mengunci, atau menghapus perangkat |
| TPM | Chip penyimpan kunci enkripsi, sertifikat, dan data keamanan |
| Secure Boot | Hanya mengizinkan boot OS/bootloader tepercaya |
| MAC address filtering | Membatasi perangkat yang boleh terhubung ke jaringan |

**TPM (Trusted Platform Module)** bukan pengganti password. TPM menyimpan kunci kriptografi untuk fitur seperti BitLocker dan verifikasi integritas sistem.

![Fitur keamanan BIOS/UEFI dan TPM](/images/ketkom/bios-uefi-security-tpm.png)

---

## 6. Memperbarui Firmware

Pembaruan BIOS/UEFI dapat memperbaiki bug, meningkatkan kompatibilitas, dan menambah dukungan hardware. Prosedur aman:

1. Unduh file firmware hanya dari situs resmi produsen motherboard.
2. Baca catatan rilis dan instruksi produsen.
3. Pastikan model motherboard dan versi firmware sesuai.
4. Gunakan sumber daya listrik yang stabil, idealnya UPS.
5. Jangan mematikan komputer saat proses flashing berlangsung.
6. Setelah pembaruan, periksa versi firmware dan pengaturan boot.

**Risiko:** firmware yang salah atau proses yang terputus dapat membuat motherboard tidak dapat boot.

---

## 7. Alur Diagnosis Kegagalan Booting

Gunakan urutan berikut agar analisis sistematis:

1. **Daya:** apakah fan berputar, ada lampu indikator, dan kabel daya terpasang?
2. **Display:** apakah monitor menyala dan kabel display terhubung ke GPU yang benar?
3. **POST:** apakah ada beep code atau lampu diagnostik?
4. **RAM:** reseat atau uji satu modul pada satu waktu.
5. **GPU:** reseat GPU atau gunakan GPU terintegrasi jika tersedia.
6. **Storage:** apakah drive terdeteksi di BIOS/UEFI?
7. **Boot priority:** apakah drive sistem berada di urutan pertama?
8. **Mode boot:** apakah UEFI/Legacy sesuai dengan instalasi OS?
9. **OS:** apakah bootloader rusak atau perlu repair?

---

## 8. Ringkasan Cepat Kisi 2

| Pertanyaan Ujian | Jawaban Kunci |
| :--- | :--- |
| Apa itu POST? | Pemeriksaan hardware awal saat boot oleh BIOS/UEFI |
| Di mana pengaturan BIOS disimpan? | CMOS, dijaga baterai |
| Firmware modern dengan Secure Boot? | UEFI |
| Gejala baterai CMOS lemah? | Waktu/tanggal reset dan pengaturan hilang |
| Fungsi boot priority? | Menentukan perangkat yang dicari untuk boot |
| Mengapa muncul "No bootable device"? | Drive tidak terdeteksi atau urutan boot salah |
| Cara aman update BIOS? | File resmi produsen, daya stabil, jangan dimatikan saat flashing |
| Apa fungsi TPM? | Menyimpan kunci enkripsi dan mendukung keamanan hardware |

> **Kunci analisis:** bedakan masalah **POST** (hardware dasar), masalah **boot priority** (urutan perangkat), dan masalah **bootloader/OS** (sistem operasi). Gejala yang mirip bisa berasal dari lapisan yang berbeda.`
  },
  {
    id: 'exp_ketkom_03',
    subject_slug: 'ketkom',
    chapter_order: 3,
    topic_title: 'Bab 3: Pengkabelan UTP dan Analisis Cable Tester',
    content_markdown: `# Bab 3: Pengkabelan UTP dan Analisis Cable Tester

> **Sumber materi:** Pertemuan 5 — IT Essentials 8.0 Chapter 5 (Networking Concepts), bagian twisted-pair cables, wire schemes, network tools, dan cable tester.
>
> **Cakupan kisi-kisi UTS:** Kisi 3 — memahami perbedaan kabel UTP straight-through dan crossover serta menganalisis kerusakan kabel menggunakan Cable Tester.

## 1. Kabel Twisted-Pair

Kabel twisted-pair terdiri atas pasangan kawat tembaga yang dipilin. Pemilinan membantu mengurangi **Electromagnetic Interference (EMI)** dan **Radio Frequency Interference (RFI)**.

Dua jenis utama:

| Jenis | Singkatan | Ciri | Kelebihan | Kekurangan |
| :--- | :--- | :--- | :--- | :--- |
| Unshielded Twisted-Pair | UTP | Tanpa pelindung tambahan | Murah, fleksibel, paling umum | Lebih rentan EMI/RFI |
| Shielded Twisted-Pair | STP | Memiliki shielding | Perlindungan EMI/RFI lebih baik | Lebih mahal dan sulit dipasang |

UTP Ethernet biasanya memiliki **empat pasang kawat** (8 kawat) dengan konektor **RJ-45**.

![Perbandingan kabel UTP dan STP](/images/ketkom/twisted-pair-utp-stp.png)

### 1.1 Kategori Kabel UTP

| Kategori | Kecepatan Umum | Catatan |
| :--- | :--- | :--- |
| Cat 5 | 100 Mbps | Legacy, masih ditemukan di jaringan lama |
| Cat 5e | 1 Gbps | Umum untuk Ethernet rumah/kantor |
| Cat 6 | 1 Gbps hingga 10 Gbps | 10 Gbps pada jarak terbatas |
| Cat 6a | 10 Gbps | Shielding lebih baik, jarak 10 Gbps lebih jauh |
| Cat 7/8 | 10 Gbps+ | Biasanya untuk data center, butuh grounding khusus |

Untuk ujian, fokus pada perbedaan standar pinout dan penggunaan straight-through vs crossover, bukan hanya angka kategori.

---

## 2. Standar Pinout T568A dan T568B

Konektor RJ-45 memiliki 8 pin. Urutan warna kawat ditentukan oleh standar **TIA/EIA T568A** atau **T568B**.

| Pin | T568A | T568B |
| :---: | :--- | :--- |
| 1 | Putih-hijau | Putih-oranye |
| 2 | Hijau | Oranye |
| 3 | Putih-oranye | Putih-hijau |
| 4 | Biru | Biru |
| 5 | Putih-biru | Putih-biru |
| 6 | Oranye | Hijau |
| 7 | Putih-cokelat | Putih-cokelat |
| 8 | Cokelat | Cokelat |

**Cara menghafal:** T568A menukar posisi pasangan hijau dan oranye dibanding T568B. Pasangan biru dan cokelat tetap di posisi yang sama.

![Skema wiring T568A dan T568B](/images/ketkom/t568a-t568b-wiring-schemes.png)

### 2.1 Kesalahan Umum Pinout

- Membalik urutan pin 1 dan 2.
- Menempatkan putih-oranye di pin 3 padahal memakai T568A.
- Tidak mempertahankan pasangan twisted saat memasang kawat.
- Membiarkan kawat terlalu panjang di dalam RJ-45 sehingga tidak terkunci sempurna.
- Menggunakan kabel yang sama sekali berbeda standar di kedua ujung tanpa memahami fungsinya.

---

## 3. Straight-Through vs Crossover

### 3.1 Straight-Through

Kabel **straight-through** memakai standar yang sama di kedua ujung: T568A-T568A atau T568B-T568B.

Pin 1 di satu ujung terhubung ke pin 1 di ujung lain, pin 2 ke pin 2, dan seterusnya.

**Penggunaan umum:**

- PC ke switch;
- PC ke wall jack;
- switch ke patch panel;
- router ke switch (port LAN);
- server ke switch.

### 3.2 Crossover

Kabel **crossover** memakai standar berbeda di kedua ujung: T568A di satu ujung dan T568B di ujung lain.

Pasangan transmit dan receive ditukar:

- pin 1 bertukar dengan pin 3;
- pin 2 bertukar dengan pin 6;
- pin 4, 5, 7, 8 tetap.

**Penggunaan umum (standar lama):**

- PC ke PC langsung;
- switch ke switch;
- hub ke hub;
- router ke router;
- PC ke router pada port tertentu.

Perangkat modern sering mendukung **Auto-MDIX**, sehingga straight-through dapat bekerja pada koneksi yang dulu membutuhkan crossover. Namun untuk ujian, gunakan aturan standar T568A/T568B.

![Perbandingan wiring straight-through dan crossover](/images/ketkom/straight-vs-crossover-wiring.png)

### 3.3 Tabel Keputusan Cepat

| Koneksi | Kabel Standar |
| :--- | :--- |
| PC ke switch | Straight-through |
| PC ke wall jack | Straight-through |
| Switch ke patch panel | Straight-through |
| PC ke PC | Crossover |
| Switch ke switch | Crossover |
| Router ke router | Crossover |
| Router LAN ke switch | Straight-through |

---

## 4. Alat Jaringan dan Cara Crimping

Alat yang sering digunakan:

- **Crimper:** menjepit RJ-45 agar kawat terkunci.
- **Wire stripper:** mengupas jaket luar kabel.
- **Wire cutter:** memotong kabel.
- **Punch down tool:** menanam kawat ke termination block/patch panel.
- **Cable tester:** menguji kontinuitas dan urutan pin.
- **Tone generator:** melacak kabel dalam bundel.
- **Loopback adapter:** menguji port.
- **Wi-Fi analyzer:** menganalisis sinyal wireless.

### 4.1 Prosedur Membuat Kabel UTP

1. Kupas jaket luar sekitar 2–3 cm tanpa melukai kawat.
2. Buka pilinan dan susun kawat sesuai T568A atau T568B.
3. Rapikan urutan dan potong ujung kawat rata.
4. Masukkan kawat ke RJ-45 sampai ujung terlihat di depan konektor.
5. Pastikan jaket luar masuk ke dalam konektor.
6. Jepit dengan crimper.
7. Lakukan hal yang sama di ujung lain.
8. Uji dengan cable tester.

---

## 5. Cable Tester dan Analisis Kerusakan

Cable tester sederhana terdiri atas **main unit** dan **remote terminator**. Kedua ujung kabel dihubungkan ke tester, lalu tester menampilkan LED untuk pin 1 sampai 8.

### 5.1 Cara Menggunakan

1. Pastikan kabel tidak terhubung ke perangkat aktif.
2. Pasang satu ujung ke main unit dan ujung lain ke remote.
3. Nyalakan tester.
4. Amati urutan LED dari pin 1 hingga 8.
5. Bandingkan dengan standar yang dipakai.
6. Catat pin yang mati, menyala bersamaan, atau urutannya salah.

### 5.2 Interpretasi Hasil

| Hasil Tester | Makna | Kemungkinan Penyebab |
| :--- | :--- | :--- |
| LED 1–8 menyala berurutan di kedua unit | Kabel lulus | Urutan dan kontinuitas benar |
| Satu atau lebih LED tidak menyala | Open | Kawat putus, pin tidak terkoneksi, RJ-45 tidak terjepit |
| Dua LED menyala bersamaan | Short | Dua kawat saling bersentuhan |
| Urutan LED tidak sesuai | Miswire | Kawat tertukar saat crimping |
| Pasangan kawat tertukar tetapi kontinuitas tampak benar | Split pair | Pasangan twisted tidak sesuai; perlu tester kualitas baik |
| Urutan terbalik dari 8 ke 1 | Reversed | Kabel dipasang terbalik |
| Pin transmit/receive tertukar | Crossed | Kemungkinan kabel crossover, bukan straight-through |

**Catatan:** tester murah kadang hanya memeriksa kontinuitas, bukan kualitas pasangan. Untuk **split pair**, kontinuitas pin bisa benar tetapi kinerja kabel buruk karena pasangan tidak twisted dengan benar. Tester kabel berkualitas atau pengujian performa diperlukan.

![Cable tester dan alat jaringan](/images/ketkom/network-tools-cable-tester.png)

### 5.3 Diagnosis Skenario

**Kasus:** kabel straight-through baru tidak dapat menghubungkan PC ke switch. Tester menunjukkan LED pin 1, 2, 3, 4, 6, 7, 8 menyala, tetapi pin 5 mati.

**Analisis:**

1. Pin 5 open, kemungkinan kawat putih-biru putus atau tidak masuk ke RJ-45.
2. Periksa ujung konektor di kedua sisi.
3. Potong ujung yang bermasalah dan pasang ulang RJ-45.
4. Uji kembali dengan tester.

**Kasus:** semua LED menyala, tetapi urutan pin 3 dan 6 tertukar.

**Analisis:** kabel kemungkinan dibuat dengan standar campuran atau kawat tertukar. Untuk straight-through, kedua ujung harus memakai standar yang sama dan urutan pin harus konsisten.

---

## 6. Ringkasan Cepat Kisi 3

| Pertanyaan Ujian | Jawaban Kunci |
| :--- | :--- |
| Standar pin 1 putih-hijau? | T568A |
| Standar pin 1 putih-oranye? | T568B |
| Kabel PC ke switch? | Straight-through |
| Kabel PC ke PC? | Crossover |
| Crossover menukar pin? | 1-3 dan 2-6 |
| LED tester tidak menyala? | Open |
| Dua LED menyala bersamaan? | Short |
| Urutan LED salah? | Miswire |
| Pasangan twisted salah? | Split pair |
| Fungsi crimper? | Menjepit RJ-45 |

> **Kunci analisis:** tentukan dulu standar kabel, lalu bandingkan urutan pin. Jangan menyimpulkan "kabel rusak" hanya dari tidak adanya koneksi; periksa LED tester, pinout, dan jenis kabel yang dibutuhkan.`
  },
  {
    id: 'exp_ketkom_04',
    subject_slug: 'ketkom',
    chapter_order: 4,
    topic_title: 'Bab 4: Simulasi Jaringan LAN di Cisco Packet Tracer',
    content_markdown: `# Bab 4: Simulasi Jaringan LAN di Cisco Packet Tracer

> **Sumber materi:** Pertemuan 6 — IT Essentials 8.0 Chapter 6 (Applied Networking), bagian IPv4 addressing, static addressing, NIC, ICMP, Packet Tracer, dan troubleshooting.
>
> **Cakupan kisi-kisi UTS:** Kisi 4 — membuat topologi LAN di Cisco Packet Tracer, mengonfigurasi IP statis, dan menguji konektivitas menggunakan Simple PDU (praktik).

## 1. Konsep LAN dan Topologi

**LAN (Local Area Network)** adalah jaringan yang mencakup area terbatas, seperti laboratorium, rumah, atau kantor. Pada praktikum, LAN biasanya dibangun dengan:

- **Switch** sebagai penghubung perangkat dalam satu jaringan lokal.
- **PC/laptop** sebagai host.
- **Router** sebagai gateway ke jaringan lain.
- **Kabel UTP straight-through** untuk menghubungkan PC ke switch dan switch ke router.

Topologi **star** paling umum: semua PC terhubung ke switch, dan switch terhubung ke router.

### 1.1 Peran Perangkat

| Perangkat | Fungsi |
| :--- | :--- |
| PC/laptop | Host yang mengirim dan menerima data |
| NIC | Antarmuka jaringan pada host |
| Switch | Meneruskan frame berdasarkan MAC address di LAN |
| Router | Menghubungkan jaringan berbeda dan menjadi default gateway |
| Access point | Menghubungkan client wireless ke jaringan |
| Modem | Menghubungkan jaringan lokal ke penyedia internet |

![Topologi LAN di Cisco Packet Tracer](/images/ketkom/packet-tracer-lan-configuration.png)

---

## 2. MAC Address dan IPv4 Address

### 2.1 MAC Address

**MAC address** adalah alamat fisik unik pada NIC. MAC address biasanya terdiri atas 48 bit dan ditulis dalam format heksadesimal, misalnya **00:1A:2B:3C:4D:5E**.

- MAC address tetap saat perangkat berpindah jaringan.
- MAC address digunakan pada komunikasi dalam LAN.
- Switch mempelajari MAC address untuk meneruskan frame.

### 2.2 IPv4 Address

IPv4 address terdiri atas 32 bit dan ditulis dalam empat oktet desimal, misalnya **192.168.1.10**. IPv4 address dibagi menjadi bagian **network** dan **host**.

**Subnet mask** menentukan batas network dan host. Contoh **255.255.255.0** berarti 24 bit pertama adalah network dan 8 bit terakhir adalah host.

### 2.3 Static vs Dynamic Addressing

| Aspek | Static | Dynamic (DHCP) |
| :--- | :--- | :--- |
| Pemberian IP | Dikonfigurasi manual | Diberikan DHCP server |
| Kelebihan | Stabil, mudah dilacak | Otomatis, mengurangi konflik |
| Kekurangan | Rawan salah ketik/konflik | Bergantung pada DHCP server |
| Penggunaan | Server, perangkat jaringan, praktikum | Klien umum, jaringan besar |

Informasi yang dibutuhkan untuk komunikasi ke jaringan lain:

- **IP address**;
- **subnet mask**;
- **default gateway**;
- **DNS server** (jika mengakses nama domain).

---

## 3. Skenario Praktikum LAN

Gunakan contoh jaringan berikut:

| Perangkat | IP Address | Subnet Mask | Default Gateway |
| :--- | :--- | :--- | :--- |
| Router | 192.168.1.1 | 255.255.255.0 | - |
| PC1 | 192.168.1.10 | 255.255.255.0 | 192.168.1.1 |
| PC2 | 192.168.1.11 | 255.255.255.0 | 192.168.1.1 |
| Switch | - | - | - |

PC1 dan PC2 berada di jaringan **192.168.1.0/24**. Karena berada di subnet yang sama, keduanya dapat berkomunikasi langsung melalui switch tanpa melewati router. Default gateway tetap diisi agar komunikasi ke jaringan lain dapat dilakukan.

### 3.1 Langkah Membangun Topologi

1. Buka Cisco Packet Tracer.
2. Tambahkan **switch** ke workspace.
3. Tambahkan dua atau lebih **PC**.
4. Hubungkan PC ke switch menggunakan kabel **straight-through**.
5. Hubungkan switch ke router jika akan menguji gateway.
6. Nyalakan perangkat dan tunggu lampu link menyala hijau.
7. Klik PC, buka **Desktop** lalu **IP Configuration**.
8. Isi IP address, subnet mask, dan default gateway.
9. Ulangi untuk PC lain dengan IP berbeda dalam subnet yang sama.
10. Uji konektivitas.

### 3.2 Konfigurasi IP Statis di Packet Tracer

Contoh untuk PC1:

- IP Address: **192.168.1.10**
- Subnet Mask: **255.255.255.0**
- Default Gateway: **192.168.1.1**

Contoh untuk PC2:

- IP Address: **192.168.1.11**
- Subnet Mask: **255.255.255.0**
- Default Gateway: **192.168.1.1**

**Aturan penting:** dua perangkat dalam subnet yang sama tidak boleh memakai IP yang sama. IP harus berada dalam rentang host yang valid dan tidak memakai alamat network atau broadcast.

Untuk 192.168.1.0/24:

- network: 192.168.1.0;
- host valid: 192.168.1.1 sampai 192.168.1.254;
- broadcast: 192.168.1.255.

---

## 4. Menguji Konektivitas

### 4.1 Ping dan ICMP

**ICMP (Internet Control Message Protocol)** digunakan untuk mengirim pesan kontrol dan error, serta menguji konektivitas. Perintah **ping** memakai ICMP Echo Request dan Echo Reply.

Langkah uji dari PC1:

1. Buka **Desktop** lalu **Command Prompt**.
2. Jalankan **ipconfig** untuk memeriksa konfigurasi IP.
3. Ping PC2:

    ping 192.168.1.11

4. Ping gateway:

    ping 192.168.1.1

5. Amati balasan. Balasan berhasil menunjukkan konektivitas pada lapisan IP.

### 4.2 Simple PDU

**Simple PDU** di Packet Tracer mengirim paket uji dari source ke destination. Langkahnya:

1. Pastikan mode **Realtime** aktif.
2. Klik ikon **Add Simple PDU** (amplop).
3. Klik perangkat sumber.
4. Klik perangkat tujuan.
5. Lihat hasil di panel PDU List atau jendela simulasi.
6. Status **Successful** berarti paket berhasil mencapai tujuan.
7. Jika gagal, periksa lampu link, IP, subnet, gateway, dan perangkat yang dituju.

**Simple PDU bukan pengganti analisis.** Status gagal hanya memberi tahu bahwa paket tidak sampai; kita tetap harus mencari penyebabnya.

### 4.3 Perbedaan Ping dan PDU

| Aspek | Ping | Simple PDU |
| :--- | :--- | :--- |
| Lokasi | Command Prompt host | Toolbar Packet Tracer |
| Protokol | ICMP | ICMP untuk PDU sederhana |
| Fungsi | Menguji konektivitas dari host | Memvisualisasikan jalur paket di simulasi |
| Hasil | Reply/timeout | Successful/Failed dan detail jalur |

---

## 5. Troubleshooting LAN

| Gejala | Kemungkinan Penyebab | Solusi |
| :--- | :--- | :--- |
| Lampu link tidak menyala | Kabel salah, port mati, perangkat belum menyala | Cek kabel straight-through, ganti port, nyalakan perangkat |
| Ping gagal ke PC lain | IP berbeda subnet, IP konflik, NIC mati | Periksa IP, subnet mask, dan status NIC |
| Ping gateway gagal | Gateway salah atau router mati | Perbaiki default gateway dan cek router |
| PDU gagal padahal ping berhasil | PDU diarahkan ke perangkat yang salah atau mode simulasi | Periksa source/destination dan jalankan ulang |
| IP konflik | Dua host memakai IP sama | Berikan IP unik |
| Tidak bisa ping nama domain | DNS belum dikonfigurasi | Isi DNS server atau gunakan IP |
| Koneksi ke jaringan lain gagal | Gateway/routing salah | Cek gateway, interface router, dan routing |

### 5.1 Analisis Skenario

**Kasus:** PC1 192.168.1.10/24 dan PC2 192.168.2.11/24 dihubungkan ke switch yang sama, tetapi ping gagal.

**Analisis:** keduanya berada di subnet berbeda. Switch tidak merutekan trafik antar-subnet. Diperlukan router dengan dua interface atau konfigurasi gateway yang benar. Jika tetap ingin satu subnet, ubah IP PC2 menjadi 192.168.1.11/24.

**Kasus:** PC1 dan PC2 berada di subnet yang sama dan ping berhasil, tetapi ping ke 8.8.8.8 gagal.

**Analisis:** konektivitas lokal baik, tetapi gateway atau jalur internet bermasalah. Periksa default gateway, interface router, dan koneksi WAN.

---

## 6. Template Jawaban Praktik Kisi 4

Saat diminta membuat topologi LAN dan menuliskan hasil, gunakan sistematika berikut:

1. **Tujuan:** membuat LAN dengan switch dan dua host.
2. **Topologi:** PC1 dan PC2 terhubung ke switch; switch ke router.
3. **Pengalamatan:** tuliskan tabel IP, subnet mask, dan gateway.
4. **Langkah konfigurasi:** jelaskan menu IP Configuration dan nilai yang diisi.
5. **Pengujian:** tampilkan hasil ping dan Simple PDU.
6. **Analisis:** jelaskan mengapa berhasil atau gagal.
7. **Kesimpulan:** LAN berfungsi jika IP dalam subnet yang sama, kabel benar, dan gateway sesuai.

---

## 7. Ringkasan Cepat Kisi 4

| Pertanyaan Ujian | Jawaban Kunci |
| :--- | :--- |
| Fungsi switch di LAN? | Menghubungkan host dan meneruskan frame berdasarkan MAC |
| Fungsi default gateway? | Pintu keluar ke jaringan lain |
| Fungsi subnet mask? | Menentukan network dan host |
| Alat uji konektivitas di Packet Tracer? | Simple PDU |
| Perintah cek IP di Windows? | ipconfig |
| Protokol ping? | ICMP |
| Kabel PC ke switch? | Straight-through |
| Penyebab ping gagal dalam satu switch? | Beda subnet, IP konflik, atau kabel/port bermasalah |

> **Kunci analisis:** periksa dari lapisan bawah ke atas: kabel/link, NIC, IP/subnet, gateway, lalu routing. Jangan langsung menyalahkan Packet Tracer sebelum memeriksa konfigurasi.`
  },
  {
    id: 'exp_ketkom_05',
    subject_slug: 'ketkom',
    chapter_order: 5,
    topic_title: 'Bab 5: Konfigurasi Jaringan WLAN dan WPA2',
    content_markdown: `# Bab 5: Konfigurasi Jaringan WLAN dan WPA2

> **Sumber materi:** Pertemuan 6 — IT Essentials 8.0 Chapter 6 (Applied Networking) dan Jobsheet Pertemuan 7 — Membangun Jaringan WLAN Dasar.
>
> **Cakupan kisi-kisi UTS:** Kisi 5 — mengonfigurasi wireless router dengan SSID dan keamanan WPA2 serta menghubungkan laptop ke jaringan nirkabel (praktik).

## 1. Konsep WLAN

**WLAN (Wireless Local Area Network)** adalah jaringan lokal yang menggunakan media gelombang radio, bukan kabel. Client berkomunikasi dengan **Access Point (AP)** atau **home router** yang memancarkan sinyal wireless.

Komponen dasar WLAN:

- **Wireless client**: laptop, ponsel, atau perangkat dengan NIC wireless.
- **Access Point/Home Router**: memancarkan SSID dan menghubungkan client ke jaringan.
- **SSID**: nama jaringan wireless.
- **Password/PSK**: kunci akses jaringan.
- **Gateway**: alamat router yang menjadi pintu keluar jaringan.

Topologi praktikum:

    Home Router
       /   |   \
  Laptop0 Laptop1 Laptop2

Semua laptop terhubung secara wireless ke home router.

---

## 2. Istilah Penting dalam WLAN

| Istilah | Penjelasan |
| :--- | :--- |
| SSID | Nama jaringan yang terlihat saat client memindai Wi-Fi |
| BSSID | Identitas AP, biasanya berupa MAC address AP |
| WPA2-Personal/PSK | Keamanan wireless dengan satu password bersama |
| WPA2-Enterprise | Keamanan dengan autentikasi server, bukan PSK |
| Passphrase | Password jaringan wireless |
| Channel | Kanal frekuensi yang dipakai AP |
| DHCP | Pemberian IP otomatis kepada client |
| Static IP | IP yang diisi manual pada client |
| Gateway | Alamat router untuk keluar dari jaringan lokal |

### 2.1 SSID

**SSID** adalah nama jaringan wireless. Saat pengguna membuka daftar Wi-Fi, SSID akan muncul sebagai jaringan yang tersedia.

- SSID bersifat **case-sensitive** pada beberapa konfigurasi. **KETKOM-07** berbeda dengan **ketkom-07**.
- Menyembunyikan SSID bukan pengganti keamanan; client yang mengetahui nama jaringan tetap dapat mencoba terhubung.
- SSID yang sama dapat dipakai oleh beberapa AP untuk membentuk jaringan yang lebih luas, tetapi konfigurasi roaming dan keamanan harus tepat.

### 2.2 Access Point/Home Router

Access point/home router berfungsi:

- memancarkan sinyal wireless;
- mengelola client yang terhubung;
- meneruskan trafik antara client wireless dan jaringan kabel;
- memberikan alamat IP melalui DHCP atau menerima IP statis;
- menjadi gateway ke jaringan lain.

Pada perangkat home router, konfigurasi wireless biasanya tersedia melalui GUI web.

---

## 3. WPA2-PSK

**WPA2-Personal** atau **WPA2-PSK (Pre-Shared Key)** adalah metode keamanan wireless yang menggunakan satu password bersama. Client yang mengetahui passphrase dapat terhubung ke jaringan.

WPA2 menggunakan enkripsi **AES** yang jauh lebih kuat daripada WEP. WEP sudah usang dan mudah dibobol.

| Mode Keamanan | Karakter | Catatan |
| :--- | :--- | :--- |
| Open | Tanpa password | Tidak aman |
| WEP | Kunci statis lama | Mudah dibobol, jangan dipakai |
| WPA | TKIP | Legacy, lebih lemah dari WPA2 |
| WPA2-Personal | AES + PSK | Standar praktikum dan rumah |
| WPA2-Enterprise | AES + server autentikasi | Untuk organisasi |
| WPA3 | Enkripsi modern | Lebih baru, belum selalu tersedia |

**Passphrase** sebaiknya panjang, sulit ditebak, dan tidak memakai kata umum. Untuk praktikum, gunakan nilai yang ditentukan jobsheet.

---

## 4. Konfigurasi WLAN di Cisco Packet Tracer

### 4.1 Menambahkan Perangkat

1. Buka Cisco Packet Tracer.
2. Pilih **Network Devices** dan tambahkan **Home Router**.
3. Pilih **End Devices** dan tambahkan **Laptop0**, **Laptop1**, dan **Laptop2**.
4. Susun laptop di sekitar home router.

### 4.2 Mengubah SSID

1. Klik **Home Router**.
2. Buka tab konfigurasi wireless/GUI.
3. Cari parameter **SSID**.
4. Ubah SSID menjadi **KETKOM-07**.
5. Simpan/terapkan konfigurasi.

Pastikan penulisan SSID sama persis, termasuk huruf besar, angka, dan tanda hubung.

### 4.3 Mengaktifkan WPA2-PSK

1. Pada konfigurasi wireless, cari **Security Mode**.
2. Pilih **WPA2-Personal** atau **WPA2-PSK** sesuai tampilan perangkat.
3. Cari **Passphrase/Pre-Shared Key**.
4. Masukkan **Keterampilan2026**.
5. Simpan konfigurasi.

### 4.4 Menghubungkan Laptop ke WLAN

1. Klik **Laptop0**.
2. Buka tab **Desktop**.
3. Jalankan aplikasi **PC Wireless**.
4. Pindai jaringan yang tersedia.
5. Pilih SSID **KETKOM-07**.
6. Klik **Connect**.
7. Masukkan password **Keterampilan2026** jika diminta.
8. Ulangi untuk Laptop1 dan Laptop2.

Status yang diharapkan:

- Laptop0: Connected
- Laptop1: Connected
- Laptop2: Connected

### 4.5 Konfigurasi IP Client

Setelah terhubung, buka **Desktop** lalu **IP Configuration** pada setiap laptop.

| Perangkat | IP Address | Subnet Mask | Default Gateway |
| :--- | :--- | :--- | :--- |
| Laptop0 | 192.168.30.10 | 255.255.255.0 | 192.168.30.1 |
| Laptop1 | 192.168.30.11 | 255.255.255.0 | 192.168.30.1 |
| Laptop2 | 192.168.30.12 | 255.255.255.0 | 192.168.30.1 |

Gateway **192.168.30.1** adalah alamat home router pada skenario praktikum.

### 4.6 Menguji Koneksi

Dari Laptop0:

1. Buka **Desktop** lalu **Command Prompt**.
2. Ping Laptop1:

    ping 192.168.30.11

3. Ping Laptop2:

    ping 192.168.30.12

4. Ping gateway:

    ping 192.168.30.1

5. Gunakan **Simple PDU** dari Laptop0 ke Laptop1 dan dari Laptop0 ke gateway.

Jika ping berhasil, client dapat berkomunikasi melalui WLAN dan mencapai gateway.

![Konfigurasi wireless router dan WLAN](/images/ketkom/wireless-router-wlan-setup.png)

---

## 5. Troubleshooting WLAN

| Gejala | Kemungkinan Penyebab | Solusi |
| :--- | :--- | :--- |
| SSID tidak muncul | AP mati, SSID disembunyikan, di luar jangkauan | Nyalakan AP, tampilkan SSID, dekatkan client |
| Gagal connect | Password salah | Masukkan passphrase yang benar |
| SSID tidak ditemukan | Salah ketik SSID, case-sensitive | Samakan nama persis |
| Connect tetapi tidak ada IP | DHCP gagal atau IP statis salah | Isi IP statis atau periksa DHCP |
| Ping gateway gagal | Gateway salah atau client beda subnet | Perbaiki gateway/subnet |
| Ping antar-client gagal | IP beda subnet atau client terisolasi | Samakan subnet dan cek AP isolation |
| Koneksi lambat | Interferensi channel, jarak jauh | Ganti channel, dekatkan client |
| Tidak bisa internet | Gateway/DNS/WAN bermasalah | Cek gateway, DNS, dan koneksi router |

### 5.1 Percobaan Troubleshooting Jobsheet

**Percobaan 1 — Salah SSID:** ubah SSID Laptop1 menjadi **KETKOM-08** lalu coba hubungkan. Client tidak akan menemukan/menghubungkan ke SSID yang benar karena nama jaringan berbeda.

**Percobaan 2 — Salah password:** gunakan **Keterampilan123** saat SSID benar. Proses autentikasi gagal karena passphrase tidak cocok.

**Percobaan 3 — Kembalikan konfigurasi:** gunakan SSID **KETKOM-07** dan password **Keterampilan2026**, lalu pastikan Laptop1 dapat terhubung kembali.

### 5.2 Penguatan Keamanan

- Ganti username/password admin router dari nilai default.
- Gunakan WPA2-PSK dengan passphrase kuat, atau WPA3 jika tersedia.
- Jangan memakai WEP.
- Matikan WPS jika tidak diperlukan.
- Perbarui firmware router.
- Gunakan MAC filtering sebagai lapisan tambahan, bukan pengganti enkripsi.
- Nonaktifkan remote management jika tidak dipakai.

---

## 6. Template Jawaban Praktik Kisi 5

Saat diminta menuliskan hasil konfigurasi WLAN, gunakan format berikut:

1. **Tujuan:** membangun WLAN dengan SSID dan WPA2-PSK.
2. **Topologi:** home router dan tiga laptop wireless.
3. **Konfigurasi router:** SSID, security mode, passphrase.
4. **Konfigurasi client:** SSID yang dipilih, status connected.
5. **Pengalamatan:** tabel IP, subnet mask, gateway.
6. **Pengujian:** ping gateway dan ping antar-client, hasil Simple PDU.
7. **Analisis:** jelaskan mengapa koneksi berhasil.
8. **Kesimpulan:** WLAN berfungsi karena SSID, password, IP, dan gateway sesuai.

---

## 7. Ringkasan Cepat Kisi 5

| Pertanyaan Ujian | Jawaban Kunci |
| :--- | :--- |
| Apa itu SSID? | Nama jaringan wireless |
| Fungsi home router/AP? | Memancarkan WLAN dan menghubungkan client |
| Keamanan dengan password bersama? | WPA2-PSK/WPA2-Personal |
| Enkripsi WPA2? | AES |
| Akibat password salah? | Autentikasi gagal, client tidak terhubung |
| Akibat SSID salah? | Jaringan tidak ditemukan/tidak cocok |
| Fungsi IP address client? | Identitas host di jaringan |
| Fungsi gateway? | Pintu keluar ke jaringan lain |
| Alat uji konektivitas? | Ping dan Simple PDU |

> **Kunci analisis:** urutan troubleshooting WLAN adalah: sinyal/SSID, autentikasi/password, IP/subnet, gateway, lalu koneksi ke jaringan luar. Perbaiki satu lapisan pada satu waktu.`
  }
];

module.exports = ketkomExplanations;
