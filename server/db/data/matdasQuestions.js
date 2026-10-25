const matdasQuestions = [
  // ==========================================
  // BAB 1: Sistem Bilangan Real & Operasi
  // ==========================================
  {
    id: 'q_matdas_01',
    subject_slug: 'matdas',
    subtopic: 'Klasifikasi Bilangan Real',
    question_text: 'Manakah dari bilangan berikut yang tergolong ke dalam himpunan Bilangan Irasional?',
    code_snippet: null,
    options_json: JSON.stringify([
      '√2 dan π (pi)',
      '0,75 dan -5',
      '3/7 dan 0,333...',
      '√16 dan 0'
    ]),
    correct_index: 0,
    explanation: 'Bilangan irasional adalah bilangan real yang tidak dapat dinyatakan dalam bentuk pecahan p/q dengan p, q bilangan bulat dan q ≠ 0. Desimalnya tak berhingga dan tak berulang teratur (contoh: √2 ≈ 1,4142... dan π ≈ 3,14159...). Sedangkan √16 = 4 adalah bilangan bulat rasional.',
    points: 10
  },
  {
    id: 'q_matdas_02',
    subject_slug: 'matdas',
    subtopic: 'Desimal Berulang ke Pecahan',
    question_text: 'Ubah bilangan desimal berulang 0,7777... menjadi pecahan biasa yang paling sederhana p/q!',
    code_snippet: null,
    options_json: JSON.stringify([
      '7/9',
      '7/10',
      '77/100',
      '7/8'
    ]),
    correct_index: 0,
    explanation: 'Misalkan x = 0,777... Maka 10x = 7,777... Kurangkan kedua persamaan: 10x - x = 7,777... - 0,777... ➔ 9x = 7 ➔ x = 7/9.',
    points: 10
  },
  {
    id: 'q_matdas_03',
    subject_slug: 'matdas',
    subtopic: 'Sifat Operasi Bilangan',
    question_text: 'Persamaan a × (b + c) = (a × b) + (a × c) mencerminkan sifat dasar operasi bilangan real yang disebut...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Sifat Distributif',
      'Sifat Asosiatif',
      'Sifat Komutatif',
      'Sifat Invers Perkalian'
    ]),
    correct_index: 0,
    explanation: 'Sifat distributif (penyebaran) menyatakan perkalian suatu bilangan terhadap penjumlahan dua bilangan sama dengan jumlah hasil kali bilangan tersebut terhadap masing-masing suku: a(b + c) = ab + ac.',
    points: 10
  },
  {
    id: 'q_matdas_04',
    subject_slug: 'matdas',
    subtopic: 'Urutan Operasi (PEMDAS)',
    question_text: 'Berapakah hasil dari evaluasi perhitungan: 8 + 2 × (3² - 1) ÷ 4 ?',
    code_snippet: null,
    options_json: JSON.stringify([
      '12',
      '20',
      '16',
      '10'
    ]),
    correct_index: 0,
    explanation: 'Hierarki PEMDAS: 1. Tanda kurung: (3² - 1) = (9 - 1) = 8. 2. Perkalian dan pembagian dari kiri ke kanan: 2 × 8 ÷ 4 = 16 ÷ 4 = 4. 3. Penjumlahan: 8 + 4 = 12.',
    points: 10
  },
  {
    id: 'q_matdas_05',
    subject_slug: 'matdas',
    subtopic: 'Nilai Mutlak',
    question_text: 'Berapakah himpunan penyelesaian dari pertidaksamaan nilai mutlak: |2x - 3| ≤ 5 ?',
    code_snippet: null,
    options_json: JSON.stringify([
      '-1 ≤ x ≤ 4',
      'x ≤ -1 atau x ≥ 4',
      '-4 ≤ x ≤ 1',
      '1 ≤ x ≤ 5'
    ]),
    correct_index: 0,
    explanation: 'Berdasarkan sifat |u| ≤ a ⟺ -a ≤ u ≤ a: -5 ≤ 2x - 3 ≤ 5. Tambahkan 3 pada seluruh ruas: -2 ≤ 2x ≤ 8. Bagi dengan 2: -1 ≤ x ≤ 4.',
    points: 10
  },

  // ==========================================
  // BAB 2: Eksponen & Bentuk Akar
  // ==========================================
  {
    id: 'q_matdas_06',
    subject_slug: 'matdas',
    subtopic: 'Eksponen & Tanda Kurung',
    question_text: 'Perhatikan dua ekspresi pemangkatan: (-3)² dan -3². Berapakah hasil berturut-turut dari kedua ekspresi tersebut?',
    code_snippet: null,
    options_json: JSON.stringify([
      '9 dan -9',
      '-9 dan 9',
      '9 dan 9',
      '-9 dan -9'
    ]),
    correct_index: 0,
    explanation: '(-3)² = (-3) × (-3) = +9 (karena tanda minus berada di dalam kurung dan ikut dipangkatkan). Sedangkan -3² = -(3 × 3) = -9 (karena minus berada di luar pangkat).',
    points: 10
  },
  {
    id: 'q_matdas_07',
    subject_slug: 'matdas',
    subtopic: 'Sifat Pangkat',
    question_text: 'Sederhanakan ekspresi eksponen: (2⁵ × 2⁻³) / 2⁻² !',
    code_snippet: null,
    options_json: JSON.stringify([
      '16',
      '8',
      '4',
      '32'
    ]),
    correct_index: 0,
    explanation: 'Pembilang: 2⁵ × 2⁻³ = 2⁵⁺⁽⁻³⁾ = 2². Pembagian: 2² / 2⁻² = 2²⁻⁽⁻²⁾ = 2⁴ = 16.',
    points: 10
  },
  {
    id: 'q_matdas_08',
    subject_slug: 'matdas',
    subtopic: 'Pangkat Pecahan (Rasional)',
    question_text: 'Berapakah nilai numerik dari bilangan berpangkat rasional 8^(2/3) ?',
    code_snippet: null,
    options_json: JSON.stringify([
      '4',
      '2',
      '16',
      '64'
    ]),
    correct_index: 0,
    explanation: '8^(2/3) = (∛8)² = 2² = 4. Atau diubah ke basis 2: (2³)^(2/3) = 2^(3 × 2/3) = 2² = 4.',
    points: 10
  },
  {
    id: 'q_matdas_09',
    subject_slug: 'matdas',
    subtopic: 'Operasi Bentuk Akar',
    question_text: 'Sederhanakan bentuk penjumlahan dan pengurangan akar: √75 - √12 + √27 !',
    code_snippet: null,
    options_json: JSON.stringify([
      '6√3',
      '5√3',
      '8√3',
      '4√3'
    ]),
    correct_index: 0,
    explanation: '√75 = √(25 × 3) = 5√3. √12 = √(4 × 3) = 2√3. √27 = √(9 × 3) = 3√3. Maka 5√3 - 2√3 + 3√3 = (5 - 2 + 3)√3 = 6√3.',
    points: 10
  },
  {
    id: 'q_matdas_10',
    subject_slug: 'matdas',
    subtopic: 'Merasionalkan Penyebut',
    question_text: 'Rasionalkan bentuk pecahan akar berikut: 4 / (3 - √5) !',
    code_snippet: null,
    options_json: JSON.stringify([
      '3 + √5',
      '3 - √5',
      '2(3 + √5)',
      '(3 + √5) / 2'
    ]),
    correct_index: 0,
    explanation: 'Kalikan dengan bentuk sekawan (3 + √5): [4 / (3 - √5)] × [(3 + √5) / (3 + √5)] = 4(3 + √5) / (3² - (√5)²) = 4(3 + √5) / (9 - 5) = 4(3 + √5) / 4 = 3 + √5.',
    points: 10
  },

  // ==========================================
  // BAB 3: Ekspresi Aljabar & Polinomial
  // ==========================================
  {
    id: 'q_matdas_11',
    subject_slug: 'matdas',
    subtopic: 'Suku Sejenis Aljabar',
    question_text: 'Manakah pasangan suku aljabar berikut yang tergolong suku sejenis?',
    code_snippet: null,
    options_json: JSON.stringify([
      '4xy dan -xy',
      '3x dan 3x²',
      '5a dan 5b',
      '2xy dan 2x'
    ]),
    correct_index: 0,
    explanation: 'Suku sejenis wajib memiliki variabel yang sama DAN pangkat yang sama. Pasangan 4xy dan -xy sama-sama memiliki variabel xy berpangkat satu.',
    points: 10
  },
  {
    id: 'q_matdas_12',
    subject_slug: 'matdas',
    subtopic: 'Perkalian Binomial (FOIL)',
    question_text: 'Berapakah hasil perkalian dua ekspresi aljabar: (2x - 3)(x + 5) ?',
    code_snippet: null,
    options_json: JSON.stringify([
      '2x² + 7x - 15',
      '2x² - 7x - 15',
      '2x² + 10x - 15',
      '2x² - 15'
    ]),
    correct_index: 0,
    explanation: 'Metode FOIL: First = 2x × x = 2x²; Outer = 2x × 5 = 10x; Inner = -3 × x = -3x; Last = -3 × 5 = -15. Gabungkan suku tengah: 2x² + (10x - 3x) - 15 = 2x² + 7x - 15.',
    points: 10
  },
  {
    id: 'q_matdas_13',
    subject_slug: 'matdas',
    subtopic: 'Selisih Dua Kuadrat',
    question_text: 'Faktorkan bentuk aljabar selisih kuadrat: 4x² - 25 !',
    code_snippet: null,
    options_json: JSON.stringify([
      '(2x - 5)(2x + 5)',
      '(2x - 5)²',
      '(4x - 5)(x + 5)',
      '(2x + 5)²'
    ]),
    correct_index: 0,
    explanation: 'Rumus selisih dua kuadrat: a² - b² = (a - b)(a + b). Di sini a² = (2x)² dan b² = 5², sehingga 4x² - 25 = (2x - 5)(2x + 5).',
    points: 10
  },

  // ==========================================
  // BAB 4: PLSV & SPLDV
  // ==========================================
  {
    id: 'q_matdas_14',
    subject_slug: 'matdas',
    subtopic: 'Penyelesaian PLSV',
    question_text: 'Tentukan nilai x yang memenuhi persamaan linear: 4(2x - 3) - 3(x + 5) = 2x + 9 !',
    code_snippet: null,
    options_json: JSON.stringify([
      'x = 12',
      'x = 8',
      'x = 10',
      'x = 6'
    ]),
    correct_index: 0,
    explanation: '8x - 12 - 3x - 15 = 2x + 9 ➔ 5x - 27 = 2x + 9 ➔ 5x - 2x = 9 + 27 ➔ 3x = 36 ➔ x = 12.',
    points: 10
  },
  {
    id: 'q_matdas_15',
    subject_slug: 'matdas',
    subtopic: 'PLSV Koefisien Pecahan',
    question_text: 'Selesaikan persamaan dengan pecahan: (2x - 1)/3 - (x + 2)/4 = 5/6 !',
    code_snippet: null,
    options_json: JSON.stringify([
      'x = 4',
      'x = 2',
      'x = 6',
      'x = 8'
    ]),
    correct_index: 0,
    explanation: 'KPK dari 3, 4, 6 adalah 12. Kalikan kedua ruas dengan 12: 4(2x - 1) - 3(x + 2) = 10 ➔ 8x - 4 - 3x - 6 = 10 ➔ 5x - 10 = 10 ➔ 5x = 20 ➔ x = 4.',
    points: 10
  },
  {
    id: 'q_matdas_16',
    subject_slug: 'matdas',
    subtopic: 'Penyelesaian SPLDV',
    question_text: 'Tentukan himpunan penyelesaian (x, y) dari sistem persamaan linear dua variabel:\n2x + 3y = 8\n3x - 2y = -1',
    code_snippet: '2x + 3y = 8\n3x - 2y = -1',
    options_json: JSON.stringify([
      'x = 1, y = 2',
      'x = 2, y = 1',
      'x = -1, y = 3',
      'x = 3, y = 1'
    ]),
    correct_index: 0,
    explanation: 'Eliminasi y: Kalikan pers (1) × 2 ➔ 4x + 6y = 16. Kalikan pers (2) × 3 ➔ 9x - 6y = -3. Jumlahkan: 13x = 13 ➔ x = 1. Substitusi x = 1 ke pers (1): 2(1) + 3y = 8 ➔ 3y = 6 ➔ y = 2.',
    points: 10
  },
  {
    id: 'q_matdas_17',
    subject_slug: 'matdas',
    subtopic: 'Geometri Sistem Linear',
    question_text: 'Jika grafik dari dua persamaan dalam SPLDV merupakan dua garis lurus yang saling sejajar dan tidak pernah berpotongan, maka sistem tersebut memiliki...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Tidak ada penyelesaian (Himpunan kosong / Inconsistent)',
      'Tepat satu penyelesaian tunggal',
      'Tak hingga banyak penyelesaian',
      'Tepat dua penyelesaian'
    ]),
    correct_index: 0,
    explanation: 'Dua garis lurus yang sejajar tidak memiliki titik temu sama sekali, yang berarti tidak ada pasangan (x, y) yang dapat memenuhi kedua persamaan secara bersamaan (sistem tidak memiliki solusi / inconsistent).',
    points: 10
  },

  // ==========================================
  // BAB 5: SPLTV & Pemodelan
  // ==========================================
  {
    id: 'q_matdas_18',
    subject_slug: 'matdas',
    subtopic: 'Metode Reduksi SPLTV',
    question_text: 'Apakah langkah awal yang paling standar dalam menyelesaikan SPLTV dengan metode gabungan eliminasi-substitusi?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Memilih dua pasang persamaan dan mengeliminasi variabel yang SAMA dari kedua pasangan tersebut untuk menghasilkan SPLDV',
      'Langsung menebak nilai x = 0',
      'Mengalikan ketiga persamaan menjadi satu persamaan berderajat tiga',
      'Menjumlahkan seluruh konstanta tanpa mengubah koefisien variabel'
    ]),
    correct_index: 0,
    explanation: 'Strategi baku SPLTV adalah mereduksi sistem 3 persamaan dengan 3 variabel menjadi sistem 2 persamaan dengan 2 variabel (SPLDV) dengan cara mengeliminasi variabel yang sama dari dua pasang persamaan pilihan.',
    points: 10
  },
  {
    id: 'q_matdas_19',
    subject_slug: 'matdas',
    subtopic: 'Model Soal Cerita SPLTV',
    question_text: 'Dalam koperasi pertanian terdapat beras (x), jagung (y), dan kedelai (z). Penimbangan I: 2x + y + z = 54 kg; Penimbangan II: x + 2y + z = 48 kg; Penimbangan III: x + y + 2z = 42 kg. Berapakah berat satu karung beras (x)?',
    code_snippet: '2x + y + z = 54\nx + 2y + z = 48\nx + y + 2z = 42',
    options_json: JSON.stringify([
      '18 kg',
      '12 kg',
      '6 kg',
      '24 kg'
    ]),
    correct_index: 0,
    explanation: 'Kurangkan (1) dan (2) ➔ x - y = 6. Kurangkan 2×(2) dengan (3) ➔ x + 3y = 54. Eliminasi x: 4y = 48 ➔ y = 12 kg (jagung). Maka x = 6 + y = 18 kg (beras), dan z = 42 - 18 - 12 = 12/2 = 6 kg (kedelai). Jadi berat karung beras x = 18 kg.',
    points: 10
  },
  {
    id: 'q_matdas_20',
    subject_slug: 'matdas',
    subtopic: 'Penyelesaian SPLTV',
    question_text: 'Berdasarkan model soal panen di atas (2x+y+z=54, x+2y+z=48, x+y+2z=42), berapakah berat satu karung kedelai (z)?',
    code_snippet: null,
    options_json: JSON.stringify([
      '6 kg',
      '12 kg',
      '18 kg',
      '8 kg'
    ]),
    correct_index: 0,
    explanation: 'Dari penyelesaian SPLTV lengkap: x = 18 kg, y = 12 kg. Substitusikan ke persamaan (1): 2(18) + 12 + z = 54 ➔ 36 + 12 + z = 54 ➔ 48 + z = 54 ➔ z = 6 kg.',
    points: 10
  },

  // ==========================================
  // BAB 6: Faktorisasi & Persamaan Kuadrat
  // ==========================================
  {
    id: 'q_matdas_21',
    subject_slug: 'matdas',
    subtopic: 'Faktorisasi Persamaan Kuadrat a = 1',
    question_text: 'Faktorkan persamaan kuadrat: x² + 5x + 6 = 0 !',
    code_snippet: null,
    options_json: JSON.stringify([
      '(x + 2)(x + 3) = 0',
      '(x - 2)(x - 3) = 0',
      '(x + 1)(x + 6) = 0',
      '(x - 1)(x - 6) = 0'
    ]),
    correct_index: 0,
    explanation: 'Cari dua bilangan dengan jumlah = 5 dan hasil kali = 6. Bilangan tersebut adalah 2 dan 3. Bentuk pemfaktorannya adalah (x + 2)(x + 3) = 0 dengan akar x₁ = -2 dan x₂ = -3.',
    points: 10
  },
  {
    id: 'q_matdas_22',
    subject_slug: 'matdas',
    subtopic: 'Faktorisasi Persamaan Kuadrat a = 1',
    question_text: 'Faktorkan persamaan kuadrat dengan dua faktor negatif: x² - 9x + 20 = 0 !',
    code_snippet: null,
    options_json: JSON.stringify([
      '(x - 4)(x - 5) = 0',
      '(x + 4)(x + 5) = 0',
      '(x - 2)(x - 10) = 0',
      '(x + 2)(x - 10) = 0'
    ]),
    correct_index: 0,
    explanation: 'Cari dua bilangan dengan jumlah = -9 dan hasil kali = +20. Bilangannya adalah -4 dan -5. Faktornya (x - 4)(x - 5) = 0.',
    points: 10
  },
  {
    id: 'q_matdas_23',
    subject_slug: 'matdas',
    subtopic: 'Faktorisasi Tanda Berlawanan',
    question_text: 'Faktorkan persamaan kuadrat: x² + 3x - 10 = 0 !',
    code_snippet: null,
    options_json: JSON.stringify([
      '(x + 5)(x - 2) = 0',
      '(x - 5)(x + 2) = 0',
      '(x + 10)(x - 1) = 0',
      '(x - 10)(x + 1) = 0'
    ]),
    correct_index: 0,
    explanation: 'Hasil kali = -10 (tanda berlawanan), jumlah = +3. Bilangannya adalah +5 dan -2. Bentuk faktor: (x + 5)(x - 2) = 0.',
    points: 10
  },
  {
    id: 'q_matdas_24',
    subject_slug: 'matdas',
    subtopic: 'Faktorisasi a ≠ 1 (Metode AC)',
    question_text: 'Faktorkan persamaan kuadrat dengan koefisien a ≠ 1: 2x² + 7x + 3 = 0 !',
    code_snippet: null,
    options_json: JSON.stringify([
      '(2x + 1)(x + 3) = 0',
      '(2x + 3)(x + 1) = 0',
      '(2x - 1)(x - 3) = 0',
      '(x + 1)(2x + 3) = 0'
    ]),
    correct_index: 0,
    explanation: 'Metode AC: a × c = 2 × 3 = 6. Cari bilangan dengan jumlah = 7 dan hasil kali = 6, yaitu 6 dan 1. Uraikan: 2x² + 6x + x + 3 = 2x(x + 3) + 1(x + 3) = (2x + 1)(x + 3) = 0.',
    points: 10
  },
  {
    id: 'q_matdas_25',
    subject_slug: 'matdas',
    subtopic: 'Diskriminan Persamaan Kuadrat',
    question_text: 'Jika nilai diskriminan suatu persamaan kuadrat adalah D = b² - 4ac bernilai NEGATIF (D < 0), maka persamaan kuadrat tersebut...',
    code_snippet: null,
    options_json: JSON.stringify([
      'Tidak memiliki akar real (akarnya imajiner / kompleks)',
      'Memiliki dua akar real yang berbeda',
      'Memiliki tepat satu akar real kembar',
      'Memiliki akar yang selalu bernilai nol'
    ]),
    correct_index: 0,
    explanation: 'D > 0: dua akar real berbeda; D = 0: dua akar real kembar (satu solusi); D < 0: tidak memiliki akar real karena penarikan akar bilangan negatif menghasilkan bilangan kompleks.',
    points: 10
  },
  {
    id: 'q_matdas_26',
    subject_slug: 'matdas',
    subtopic: 'Rumus Kuadratik ABC',
    question_text: 'Berapakah nilai diskriminan (D) dari persamaan kuadrat: 2x² - 4x + 2 = 0 ?',
    code_snippet: null,
    options_json: JSON.stringify([
      'D = 0 (memiliki akar kembar)',
      'D = 16',
      'D = -8',
      'D = 32'
    ]),
    correct_index: 0,
    explanation: 'a = 2, b = -4, c = 2. D = b² - 4ac = (-4)² - 4(2)(2) = 16 - 16 = 0. Karena D = 0, persamaan memiliki dua akar real kembar (x = -b/2a = 4/4 = 1).',
    points: 10
  },

  // ==========================================
  // BAB 7: Pertidaksamaan Kuadrat
  // ==========================================
  {
    id: 'q_matdas_27',
    subject_slug: 'matdas',
    subtopic: 'Pertidaksamaan Kuadrat (≥ 0)',
    question_text: 'Tentukan himpunan penyelesaian dari pertidaksamaan kuadrat: x² - 2x - 8 ≥ 0 !',
    code_snippet: null,
    options_json: JSON.stringify([
      '{x | x ≤ -2 atau x ≥ 4, x ∈ ℝ}',
      '{x | -2 ≤ x ≤ 4, x ∈ ℝ}',
      '{x | x < -2 atau x > 4, x ∈ ℝ}',
      '{x | -4 ≤ x ≤ 2, x ∈ ℝ}'
    ]),
    correct_index: 0,
    explanation: 'Pembuat nol: (x - 4)(x + 2) = 0 ➔ x = 4 atau x = -2. Uji titik tanda pada garis bilangan: daerah x < -2 bertanda (+), -2 < x < 4 bertanda (-), dan x > 4 bertanda (+). Karena pertidaksamaan meminta ≥ 0, ambil daerah positif bertanda sama dengan: x ≤ -2 atau x ≥ 4.',
    points: 10
  },
  {
    id: 'q_matdas_28',
    subject_slug: 'matdas',
    subtopic: 'Pertidaksamaan Kuadrat (< 0)',
    question_text: 'Tentukan himpunan penyelesaian dari pertidaksamaan kuadrat: x² - 5x + 6 < 0 !',
    code_snippet: null,
    options_json: JSON.stringify([
      '{x | 2 < x < 3, x ∈ ℝ}',
      '{x | x < 2 atau x > 3, x ∈ ℝ}',
      '{x | 2 ≤ x ≤ 3, x ∈ ℝ}',
      '{x | -3 < x < -2, x ∈ ℝ}'
    ]),
    correct_index: 0,
    explanation: 'Pembuat nol: (x - 2)(x - 3) = 0 ➔ x = 2 atau x = 3. Garis bilangan terbagi: x < 2 (+), 2 < x < 3 (-), x > 3 (+). Pertidaksamaan meminta < 0 (daerah negatif), maka HP = {x | 2 < x < 3, x ∈ ℝ}.',
    points: 10
  },
  {
    id: 'q_matdas_29',
    subject_slug: 'matdas',
    subtopic: 'Uji Garis Bilangan',
    question_text: 'Pada penyelesaian pertidaksamaan kuadrat, kapankah bulatan pada titik pembuat nol di garis bilangan digambarkan dengan BULATAN PENUH (terisi)?',
    code_snippet: null,
    options_json: JSON.stringify([
      'Ketika tanda pertidaksamaan memuat simbol sama dengan (≥ atau ≤)',
      'Ketika tanda pertidaksamaan merupakan ketaksamaan ketat (> atau <)',
      'Hanya jika nilai akarnya positif',
      'Hanya jika nilai diskriminannya sama dengan nol'
    ]),
    correct_index: 0,
    explanation: 'Bulatan penuh menandakan nilai pembuat nol tersebut termasuk ke dalam anggota himpunan penyelesaian (terjadi pada tanda pertidaksamaan non-ketat: ≥ atau ≤). Sedangkan bulatan kosong menandakan titik batas tidak termasuk (> atau <).',
    points: 10
  },
  {
    id: 'q_matdas_30',
    subject_slug: 'matdas',
    subtopic: 'Pertidaksamaan Kuadrat',
    question_text: 'Selesaikan pertidaksamaan kuadrat: x² - 16 ≤ 0 !',
    code_snippet: null,
    options_json: JSON.stringify([
      '-4 ≤ x ≤ 4',
      'x ≤ -4 atau x ≥ 4',
      'x ≤ 4',
      '-16 ≤ x ≤ 16'
    ]),
    correct_index: 0,
    explanation: 'Faktorkan selisih kuadrat: (x - 4)(x + 4) ≤ 0. Pembuat nol adalah x = -4 dan x = 4. Uji titik x = 0 (antara -4 dan 4): 0² - 16 = -16 (negatif). Karena diminta ≤ 0, interval yang memenuhi adalah daerah tertutup antara kedua akar: -4 ≤ x ≤ 4.',
    points: 10
  }
];

module.exports = matdasQuestions;
