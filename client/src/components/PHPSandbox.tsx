import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, Terminal, Globe, Code2, AlertCircle, Clock } from 'lucide-react';
import { executePhpCode } from '../lib/api';

const PHP_PRESETS = [
  {
    id: 'calculator',
    title: '1. Kalkulator Sederhana & Array Loop (mathCalculator.php)',
    desc: 'Operasi variabel A & B serta perulangan array operasi (+, -, *, /)',
    code: `<?php
$A = 4;
$B = 6;

echo "<h3>Aplikasi Kalkulator Sederhana (Variabel & Array)</h3><hr>";
echo "<b>Nilai awal A = $A, Nilai B = $B</b><br><br>";

$operasi = array("Penambahan", "Pengurangan", "Perkalian", "Pembagian");
$simbol  = array("+", "-", "*", "/");
$hasil   = array(
    $A + $B,
    $A - $B,
    $A * $B,
    round($A / $B, 2)
);

for ($i = 0; $i < count($operasi); $i++) {
    $no = $i + 1;
    echo "<b>$no. {$operasi[$i]}</b><br>";
    echo "Hasil $A {$simbol[$i]} $B = <b>{$hasil[$i]}</b><br>";
    echo "<hr>";
}
?>`
  },
  {
    id: 'tipedata_bentukan',
    title: '2. Array Homogen vs Heterogen (tipedata-bentukan.php)',
    desc: 'Mengenal array homogen string, array heterogen campuran, dan print_r() dalam pre',
    code: `<?php
// Contoh array dengan tipe homogen (seluruh elemen string)
$larik = array("satu", "dua", "tiga", "empat");

// Contoh array dengan tipe heterogen (campuran integer, string, float)
$data = array(
    5,
    "enam",
    7.5,
    "delapan"
);

echo "<h3><b>Ini contoh array dengan tipe homogen</b></h3><hr>";
for ($i = 0; $i < count($larik); $i++) {
    echo "larik[$i] = " . $larik[$i] . "<br>";
}

echo "<p><b>Struktur Array larik:</b>";
echo "<pre>";
print_r($larik);
echo "</pre>";
echo "</p><hr>";

echo "<h3><b>Ini contoh array dengan tipe heterogen</b></h3><hr>";
for ($j = 0; $j < count($data); $j++) {
    echo "data[$j] = " . $data[$j] . "<br>";
}

echo "<p><b>Struktur Array data:</b>";
echo "<pre>";
print_r($data);
echo "</pre>";
echo "</p>";
?>`
  },
  {
    id: 'nilai_matkul',
    title: '3. Seleksi Nilai & Sapaan Mahasiswa (nilai-matkul.php)',
    desc: 'Simulasi logika seleksi jenis kelamin (Mas/Mba), bobot nilai (40%, 30%, 30%), dan grade',
    code: `<?php
// Data input simulasi formulir
$nama = "Ernawati";
$jk = "P";
$matkul = "Algoritma dan Pemrograman";
$nilai_lain = 85.0; // Bobot 40%
$uts = 75.0;        // Bobot 30%
$uas = 80.0;        // Bobot 30%

// 1. Logika Sapaan
if (strtoupper($jk) == "L") {
    $panggilan = "Mas";
} elseif (strtoupper($jk) == "P") {
    $panggilan = "Mba";
} else {
    $panggilan = "";
}

// 2. Perhitungan Nilai Akhir
$total = (0.40 * $nilai_lain) + (0.30 * $uts) + (0.30 * $uas);

// 3. Penentuan Grade
if ($total >= 80 && $total <= 100) {
    $grade = "A";
} elseif ($total >= 70 && $total < 80) {
    $grade = "B";
} elseif ($total >= 60 && $total < 70) {
    $grade = "C";
} elseif ($total >= 50 && $total < 60) {
    $grade = "D";
} else {
    $grade = "E";
}

$status = ($grade == "A" || $grade == "B" || $grade == "C") ? "LULUS" : "TIDAK LULUS";

echo "<h3>HASIL EVALUASI PENILAIAN AKADEMIK</h3><hr>";
echo "Nama Mahasiswa : <b>$panggilan $nama</b><br>";
echo "Mata Kuliah    : $matkul<br>";
echo "Nilai Akhir    : <b>" . number_format($total, 2) . "</b><br>";
echo "Grade Huruf    : <b>$grade</b><br>";
echo "Keterangan     : <b>$status</b><br>";
?>`
  },
  {
    id: 'segitiga_bintang',
    title: '4. Perulangan Bersarang Segitiga Bintang (perulangan-segitiga.php)',
    desc: 'Konstruksi nested loop for: pergerakan baris dan pencetakan kolom bintang',
    code: `<?php
$tinggi = 6;

echo "<h3>Pola Segitiga Bintang Siku-Siku (Nested Loop)</h3><hr>";
echo "<div style='font-family: monospace; line-height: 1.5;'>";

for ($baris = 1; $baris <= $tinggi; $baris++) {
    // Loop kolom berjalan sebanyak nomor baris aktif
    for ($kolom = 1; $kolom <= $baris; $kolom++) {
        echo "* ";
    }
    echo "<br>";
}

echo "</div>";
?>`
  },
  {
    id: 'prosedur_parameter',
    title: '5. Prosedur Parameter Dinamis (prosedur-withparameter.php)',
    desc: 'Pembuatan subprogram modular berargumen untuk menghitung luas segitiga',
    code: `<?php
// Deklarasi prosedur berparameter
function hitung_luas_segitiga($alas, $tinggi) {
    $luas = 0.5 * $alas * $tinggi;

    echo "<div style='border: 1px solid #10b981; padding: 12px; border-radius: 8px; margin-bottom: 10px;'>";
    echo "<b>Prosedur Luas Segitiga</b><br>";
    echo "Alas = $alas cm, Tinggi = $tinggi cm<br>";
    echo "Hasil Perhitungan Luas = <b>$luas cm²</b>";
    echo "</div>";
}

echo "<h3>Pengujian Modularitas Subprogram</h3><hr>";

// Pemanggilan berulang dengan argumen berbeda (Prinsip Reusable)
hitung_luas_segitiga(10, 12);
hitung_luas_segitiga(15, 20);
hitung_luas_segitiga(7, 9);
?>`
  },
  {
    id: 'html_form_preview',
    title: '6. Template Form HTML Mahasiswa (form-input.php)',
    desc: 'Antarmuka formulir input HTML5 dengan styling tabel dan tombol submit',
    code: `<!DOCTYPE html>
<html>
<head>
    <title>Form Input Mahasiswa</title>
    <style>
        body { font-family: sans-serif; font-size: 13px; }
        table { border-collapse: collapse; }
        td { padding: 6px 10px; }
        input[type=text], select { padding: 4px 8px; border-radius: 4px; border: 1px solid #ccc; }
        button { background: #10b981; color: white; border: none; padding: 6px 14px; border-radius: 4px; cursor: pointer; }
    </style>
</head>
<body>
    <h3>Formulir Data Mahasiswa Baru</h3>
    <hr>
    <form>
        <table>
            <tr>
                <td>NIM / NPM</td>
                <td>: <input type="text" value="260102025"></td>
            </tr>
            <tr>
                <td>Nama Lengkap</td>
                <td>: <input type="text" value="Manarul Hidayat"></td>
            </tr>
            <tr>
                <td>Program Studi</td>
                <td>: 
                    <select>
                        <option>D3 Teknik Informatika</option>
                        <option>D3 Teknik Mesin</option>
                        <option>D3 Teknik Elektronika</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Status Kuliah</td>
                <td>: 
                    <input type="radio" name="st" checked> Aktif
                    <input type="radio" name="st"> Cuti
                </td>
            </tr>
            <tr>
                <td></td>
                <td><button type="button">Kirim Data Form</button></td>
            </tr>
        </table>
    </form>
</body>
</html>`
  }
];

export const PHPSandbox: React.FC = () => {
  const [selectedPreset, setSelectedPreset] = useState<string>(PHP_PRESETS[0].id);
  const [code, setCode] = useState<string>(PHP_PRESETS[0].code);
  const [output, setOutput] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [executing, setExecuting] = useState<boolean>(false);
  const [executionTime, setExecutionTime] = useState<number | null>(null);
  const [outputView, setOutputView] = useState<'html' | 'raw'>('html');

  useEffect(() => {
    handleRunCode(PHP_PRESETS[0].code);
  }, []);

  const handleSelectPreset = (presetId: string) => {
    const found = PHP_PRESETS.find(p => p.id === presetId);
    if (found) {
      setSelectedPreset(presetId);
      setCode(found.code);
      handleRunCode(found.code);
    }
  };

  const handleRunCode = async (codeToRun = code) => {
    if (!codeToRun.trim()) return;
    setExecuting(true);
    setError(null);

    try {
      const res = await executePhpCode(codeToRun);
      setOutput(res.output || '');
      setExecutionTime(res.executionTimeMs);
      if (res.error) {
        setError(res.error);
      }
    } catch (err: any) {
      setError(err.message || 'Gagal mengeksekusi kode PHP.');
    } finally {
      setExecuting(false);
    }
  };

  const handleResetCurrent = () => {
    const current = PHP_PRESETS.find(p => p.id === selectedPreset);
    if (current) {
      setCode(current.code);
      handleRunCode(current.code);
    }
  };

  const getIframeDoc = (rawHtml: string) => {
    if (!rawHtml) {
      return `<!DOCTYPE html><html><body style="font-family:system-ui,sans-serif;color:#64748b;padding:24px;font-size:13px;margin:0;background:#ffffff;"><i>Tekan "Jalankan Kode" untuk melihat pratinjau halaman web...</i></body></html>`;
    }
    if (rawHtml.toLowerCase().includes('<!doctype') || rawHtml.toLowerCase().includes('<html')) {
      return rawHtml;
    }
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 13px;
      line-height: 1.6;
      color: #0f172a;
      background: #ffffff;
      padding: 20px;
      margin: 0;
    }
    hr { border: 0; border-top: 1px solid #e2e8f0; margin: 12px 0; }
    h1, h2, h3, h4 { color: #090d16; margin-top: 0; margin-bottom: 8px; }
    b, strong { color: #0f172a; }
    pre { background: #f8fafc; border: 1px solid #e2e8f0; padding: 12px; border-radius: 8px; font-family: monospace; font-size: 12px; overflow-x: auto; }
    table { border-collapse: collapse; }
    td, th { padding: 6px 10px; }
  </style>
</head>
<body>
  ${rawHtml}
</body>
</html>`;
  };

  return (
    <div className="space-y-6">
      {/* Banner Header */}
      <div className="bg-[#0e1422] border border-emerald-500/20 rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2">
              <Code2 size={13} />
              <span>PHP & HTML Training Playground (W3Schools Style)</span>
            </div>
            <h2 className="text-xl font-bold text-slate-100">Lab Eksekusi Interaktif Pemrograman PHP & HTML</h2>
            <p className="text-xs text-slate-400 mt-1 max-w-2xl">
              Uji coba langsung kode praktikum Alpro dari berkas perkuliahan Anda. Edit kode, jalankan secara langsung
              di server, dan amati hasilnya dalam tampilan HTML web maupun konsol terminal mentah.
            </p>
          </div>

          <button
            onClick={handleResetCurrent}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-xs font-medium text-slate-300 transition-colors shrink-0"
          >
            <RotateCcw size={14} />
            <span>Reset Kode Lab</span>
          </button>
        </div>
      </div>

      {/* Preset Modules Selector */}
      <div className="space-y-2">
        <span className="text-xs font-mono text-slate-400 px-1">Pilih Kasus Praktikum / Latihan UTS:</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {PHP_PRESETS.map(preset => {
            const isSelected = selectedPreset === preset.id;
            return (
              <button
                key={preset.id}
                onClick={() => handleSelectPreset(preset.id)}
                className={`p-3 rounded-xl text-left border transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-emerald-500/15 border-emerald-500/50 ring-1 ring-emerald-500/30'
                    : 'bg-[#0e1422] border-white/10 hover:border-white/20'
                }`}
              >
                <div className="text-xs font-semibold text-slate-200 line-clamp-1">{preset.title}</div>
                <div className="text-[11px] text-slate-400 mt-1 line-clamp-1">{preset.desc}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Editor & Runner Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Code Editor Panel */}
        <div className="lg:col-span-6 bg-[#0e1422] border border-white/10 rounded-2xl overflow-hidden shadow-xl flex flex-col">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <Terminal size={14} className="text-emerald-400" />
              <span>Editor Kode PHP & HTML</span>
            </div>
            <button
              onClick={() => handleRunCode()}
              disabled={executing}
              className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs transition-all shadow-lg shadow-emerald-900/30 disabled:opacity-50"
            >
              <Play size={12} fill="currentColor" />
              <span>{executing ? 'Menjalankan...' : 'Jalankan Kode (Run)'}</span>
            </button>
          </div>

          <div className="p-3 bg-[#070a10]">
            <textarea
              value={code}
              onChange={e => setCode(e.target.value)}
              rows={18}
              className="w-full bg-transparent font-mono text-xs sm:text-sm text-slate-100 focus:outline-none resize-none leading-relaxed p-1"
              placeholder="<?php echo 'Hello World'; ?>"
              spellCheck={false}
            />
          </div>

          <div className="px-4 py-2 bg-white/[0.02] border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-500">
            <span>PHP 8.5 Sandbox Engine</span>
            {executionTime !== null && (
              <span className="flex items-center gap-1 text-emerald-400">
                <Clock size={11} />
                <span>{executionTime} ms</span>
              </span>
            )}
          </div>
        </div>

        {/* Output Panel */}
        <div className="lg:col-span-6 bg-[#0e1422] border border-white/10 rounded-2xl overflow-hidden shadow-xl flex flex-col">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <Globe size={14} className="text-cyan-400" />
              <span>Hasil Tampilan Eksekusi</span>
            </div>

            <div className="flex items-center gap-1 bg-white/[0.04] p-0.5 rounded-lg border border-white/10 text-xs">
              <button
                onClick={() => setOutputView('html')}
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                  outputView === 'html'
                    ? 'bg-emerald-500/20 text-emerald-300 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Render Web HTML
              </button>
              <button
                onClick={() => setOutputView('raw')}
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                  outputView === 'raw'
                    ? 'bg-emerald-500/20 text-emerald-300 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Konsol Mentah (Stdout)
              </button>
            </div>
          </div>

          <div className="p-4 min-h-[380px] max-h-[500px] overflow-y-auto">
            {error && (
              <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs flex items-start gap-2.5 mb-3">
                <AlertCircle size={15} className="shrink-0 mt-0.5" />
                <div className="font-mono">{error}</div>
              </div>
            )}

            {outputView === 'html' ? (
              <iframe
                title="Pratinjau HTML & PHP"
                srcDoc={getIframeDoc(output)}
                className="w-full h-[400px] bg-white rounded-xl border border-white/10 shadow-inner"
                sandbox="allow-same-origin allow-forms allow-scripts"
              />
            ) : (
              <pre className="p-4 rounded-xl bg-[#070a10] border border-white/10 font-mono text-xs text-slate-200 min-h-[340px] overflow-x-auto whitespace-pre-wrap leading-relaxed">
                {output || '// Tidak ada keluaran konsol'}
              </pre>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
