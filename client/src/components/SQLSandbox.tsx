import React, { useState, useEffect } from 'react';
import { Database, Play, RotateCcw, Table, Check, AlertCircle, Sparkles } from 'lucide-react';
import { executeSqlQuery, fetchSqlSchema, resetSqlSandbox } from '../lib/api';

const SAMPLE_QUERIES = [
  {
    title: '1. Lihat Semua Menu',
    sql: 'SELECT * FROM menu;'
  },
  {
    title: '2. Filter Menu Tersedia & Harga < 25k',
    sql: "SELECT nama_menu, harga, status FROM menu WHERE status = 'Ada' AND harga <= 25000;"
  },
  {
    title: '3. Data Pelanggan Asal Cilacap',
    sql: "SELECT id_pelanggan, nama, no_telepon, alamat FROM pelanggan WHERE alamat LIKE '%Cilacap%';"
  },
  {
    title: '4. Relasi Pesanan & Pelanggan (JOIN)',
    sql: `SELECT 
  p.id_pesanan,
  c.nama AS nama_pelanggan,
  p.tgl_pesanan,
  p.total,
  p.status_pesanan
FROM pesanan p
JOIN pelanggan c ON p.id_pelanggan = c.id_pelanggan;`
  },
  {
    title: '5. Agregasi Jumlah Menu per Kategori',
    sql: `SELECT 
  k.nama_kategori,
  COUNT(m.id_menu) AS total_menu,
  AVG(m.harga) AS rata_rata_harga
FROM kategori_menu k
JOIN menu m ON k.id_kategori = m.id_kategori
GROUP BY k.id_kategori;`
  }
];

export const SQLSandbox: React.FC = () => {
  const [query, setQuery] = useState(SAMPLE_QUERIES[0].sql);
  const [result, setResult] = useState<any>(null);
  const [schema, setSchema] = useState<any>(null);
  const [selectedTable, setSelectedTable] = useState<string>('menu');
  const [executing, setExecuting] = useState(false);
  const [resetting, setResetting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  useEffect(() => {
    loadSchema();
    handleRunQuery(SAMPLE_QUERIES[0].sql);
  }, []);

  const loadSchema = async () => {
    try {
      const data = await fetchSqlSchema();
      setSchema(data);
    } catch (err) {
      console.error('Failed to load SQL schema:', err);
    }
  };

  const handleRunQuery = async (queryToRun = query) => {
    if (!queryToRun.trim()) return;
    setExecuting(true);
    setStatusMessage(null);

    try {
      const res = await executeSqlQuery(queryToRun);
      setResult(res);
      if (res.success && !res.isSelect) {
        setStatusMessage(`Query DML berhasil dieksekusi: ${res.changes} baris terpengaruh.`);
        loadSchema();
      }
    } catch (err: any) {
      setResult({ success: false, error: err.message });
    } finally {
      setExecuting(false);
    }
  };

  const handleReset = async () => {
    setResetting(true);
    try {
      await resetSqlSandbox();
      setStatusMessage('Database Restoran berhasil direset ke status awal.');
      await loadSchema();
      await handleRunQuery(SAMPLE_QUERIES[0].sql);
    } catch (err: any) {
      setStatusMessage(`Gagal mereset: ${err.message}`);
    } finally {
      setResetting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-[#0e1422] border border-cyan-500/20 rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-2">
              <Database size={13} />
              <span>Praktikum Basis Data Interaktif</span>
            </div>
            <h2 className="text-xl font-bold text-slate-100">Sandbox SQL & Panduan Skema Restoran</h2>
            <p className="text-xs text-slate-400 mt-1 max-w-2xl">
              Model basis data relasional tunggal terstandarisasi untuk persiapan UTS Basis Data.
              Mendukung eksekusi perintah DDL, DML, DQL (SELECT, JOIN, GROUP BY, HAVING) secara langsung.
            </p>
          </div>

          <button
            onClick={handleReset}
            disabled={resetting}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-xs font-medium text-slate-300 transition-colors shrink-0 disabled:opacity-50"
          >
            <RotateCcw size={14} className={resetting ? 'animate-spin' : ''} />
            <span>Reset Database Restoran</span>
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        <span className="text-xs font-mono text-slate-400 shrink-0">Preset Kueri UTS:</span>
        {SAMPLE_QUERIES.map((sq, idx) => (
          <button
            key={idx}
            onClick={() => {
              setQuery(sq.sql);
              handleRunQuery(sq.sql);
            }}
            className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/[0.03] border border-white/10 hover:border-cyan-500/40 hover:text-cyan-300 text-slate-300 transition-colors whitespace-nowrap shrink-0"
          >
            {sq.title}
          </button>
        ))}
      </div>

      <div className="bg-[#0e1422] border border-white/10 rounded-2xl overflow-hidden shadow-xl">
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Sparkles size={14} className="text-cyan-400" />
            <span>Editor SQL MariaDB / SQLite</span>
          </div>
          <button
            onClick={() => handleRunQuery()}
            disabled={executing}
            className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-medium text-xs transition-all shadow-lg shadow-cyan-900/30 disabled:opacity-50"
          >
            <Play size={12} fill="currentColor" />
            <span>{executing ? 'Mengeksekusi...' : 'Jalankan Query (F5)'}</span>
          </button>
        </div>

        <div className="p-4 bg-[#070a10]">
          <textarea
            value={query}
            onChange={e => setQuery(e.target.value)}
            rows={5}
            className="w-full bg-transparent font-mono text-xs sm:text-sm text-cyan-200 focus:outline-none resize-none leading-relaxed"
            placeholder="Tuliskan query SQL di sini (misal: SELECT * FROM menu WHERE status = 'Ada';)"
          />
        </div>

        {statusMessage && (
          <div className="px-4 py-2 bg-cyan-500/10 border-t border-cyan-500/20 text-xs text-cyan-300 flex items-center gap-2">
            <Check size={14} />
            <span>{statusMessage}</span>
          </div>
        )}
      </div>

      {result && (
        <div className="bg-[#0e1422] border border-white/10 rounded-2xl p-4 sm:p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <h3 className="text-sm font-semibold text-slate-200 flex items-center gap-2">
              <Table size={16} className="text-cyan-400" />
              <span>Hasil Eksekusi Kueri</span>
            </h3>
            {result.success && result.isSelect && (
              <span className="text-xs font-mono text-slate-400">
                {result.count} baris data ditemukan
              </span>
            )}
          </div>

          {result.error && (
            <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs flex items-start gap-3">
              <AlertCircle size={16} className="shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold">Kesalahan Sintaks SQL: </span>
                <span>{result.error}</span>
              </div>
            </div>
          )}

          {result.success && result.isSelect && (
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left text-xs text-slate-300 font-mono">
                <thead className="bg-[#12192b] text-slate-200 border-b border-white/10">
                  <tr>
                    {result.columns.map((col: string) => (
                      <th key={col} className="px-4 py-2.5 font-semibold text-cyan-400">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {result.rows.length === 0 ? (
                    <tr>
                      <td colSpan={result.columns.length} className="px-4 py-6 text-center text-slate-500">
                        Kueri valid, namun tidak ada baris data yang memenuhi kriteria WHERE.
                      </td>
                    </tr>
                  ) : (
                    result.rows.map((row: any, rIdx: number) => (
                      <tr key={rIdx} className="hover:bg-white/[0.02] transition-colors">
                        {result.columns.map((col: string) => (
                          <td key={col} className="px-4 py-2">
                            {row[col] !== null ? String(row[col]) : <span className="text-slate-600 italic">NULL</span>}
                          </td>
                        ))}
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {schema && (
        <div className="bg-[#0e1422] border border-white/10 rounded-2xl p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <h3 className="text-sm font-semibold text-slate-200">Inspektor Skema Tabel Restoran</h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Struktur kolom, primary key (PK), dan tipe data pada skema basis data restoran.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {Object.keys(schema).map(tableName => (
              <button
                key={tableName}
                onClick={() => setSelectedTable(tableName)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                  selectedTable === tableName
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold'
                    : 'bg-white/[0.03] text-slate-400 hover:text-slate-200 border border-white/10'
                }`}
              >
                {tableName} ({schema[tableName].count} baris)
              </button>
            ))}
          </div>

          {selectedTable && schema[selectedTable] && (
            <div className="overflow-x-auto rounded-xl border border-white/10 mt-3">
              <table className="w-full text-left text-xs text-slate-300 font-mono">
                <thead className="bg-[#12192b] text-slate-200 border-b border-white/10">
                  <tr>
                    <th className="px-4 py-2 font-semibold">Kolom</th>
                    <th className="px-4 py-2 font-semibold">Tipe Data</th>
                    <th className="px-4 py-2 font-semibold">Kunci (Key)</th>
                    <th className="px-4 py-2 font-semibold">Boleh Kosong (Null)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {schema[selectedTable].columns.map((col: any) => (
                    <tr key={col.name} className="hover:bg-white/[0.02]">
                      <td className="px-4 py-2 font-semibold text-slate-100">{col.name}</td>
                      <td className="px-4 py-2 text-cyan-400">{col.type}</td>
                      <td className="px-4 py-2">
                        {col.pk === 1 ? (
                          <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                            PRIMARY KEY
                          </span>
                        ) : col.name.startsWith('id_') ? (
                          <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 text-[10px]">
                            FOREIGN KEY
                          </span>
                        ) : (
                          <span className="text-slate-500">-</span>
                        )}
                      </td>
                      <td className="px-4 py-2 text-slate-400">{col.notnull === 1 ? 'NOT NULL' : 'YES'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
