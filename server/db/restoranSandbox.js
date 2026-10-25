const Database = require('better-sqlite3');

let sandboxDb = null;

function initRestoranSandbox() {
  sandboxDb = new Database(':memory:');
  sandboxDb.pragma('foreign_keys = ON');

  sandboxDb.exec(`
    CREATE TABLE kategori_menu (
      id_kategori TEXT PRIMARY KEY,
      nama_kategori TEXT,
      keterangan TEXT
    );

    CREATE TABLE menu (
      id_menu TEXT PRIMARY KEY,
      id_kategori TEXT,
      nama_menu TEXT,
      harga INTEGER,
      status TEXT,
      FOREIGN KEY (id_kategori) REFERENCES kategori_menu (id_kategori)
    );

    CREATE TABLE pelanggan (
      id_pelanggan TEXT PRIMARY KEY,
      nama TEXT,
      no_telepon TEXT,
      email TEXT,
      alamat TEXT,
      tgl_daftar DATE
    );

    CREATE TABLE pesanan (
      id_pesanan TEXT PRIMARY KEY,
      id_pelanggan TEXT,
      tgl_pesanan DATE,
      total INTEGER,
      status_pesanan TEXT,
      FOREIGN KEY (id_pelanggan) REFERENCES pelanggan (id_pelanggan)
    );

    CREATE TABLE detail_pesanan (
      id_detail TEXT PRIMARY KEY,
      id_pesanan TEXT,
      id_menu TEXT,
      jumlah INTEGER,
      harga INTEGER,
      subtotal INTEGER,
      FOREIGN KEY (id_pesanan) REFERENCES pesanan (id_pesanan),
      FOREIGN KEY (id_menu) REFERENCES menu (id_menu)
    );

    CREATE TABLE pembayaran (
      id_pembayaran TEXT PRIMARY KEY,
      id_pesanan TEXT,
      tgl_bayar DATE,
      metode_bayar TEXT,
      jumlah_bayar INTEGER,
      FOREIGN KEY (id_pesanan) REFERENCES pesanan (id_pesanan)
    );

    INSERT INTO kategori_menu VALUES 
      ('K01', 'Makanan Berat', 'Hidangan utama nasi dan olahan lauk nusantara'),
      ('K02', 'Minuman Segar', 'Aneka minuman dingin, jus buah dan teh'),
      ('K03', 'Camilan', 'Kudapan pendamping dan gorengan tradisional'),
      ('K04', 'Kopi Nusantara', 'Seduhan biji kopi lokal arabika dan robusta');

    INSERT INTO menu VALUES
      ('M01', 'K01', 'Ayam Goreng Lengkuas', 24000, 'Ada'),
      ('M02', 'K01', 'Nasi Goreng Spesial', 22000, 'Ada'),
      ('M03', 'K01', 'Sop Buntut Sapi', 45000, 'Ada'),
      ('M04', 'K01', 'Bebek Bakar Madu', 35000, 'Habis'),
      ('M05', 'K02', 'Es Teh Manis Jumbo', 5000, 'Ada'),
      ('M06', 'K02', 'Jus Alpukat Kocok', 16000, 'Ada'),
      ('M07', 'K03', 'Tahu Tempe Goreng Crispy', 12000, 'Ada'),
      ('M08', 'K03', 'Pisang Bakar Keju Cokelat', 15000, 'Ada'),
      ('M09', 'K04', 'Kopi Tubruk Gayo', 14000, 'Ada'),
      ('M10', 'K04', 'Kopi Susu Aren', 18000, 'Ada');

    INSERT INTO pelanggan VALUES
      ('P01', 'Andi Pratama', '081234567890', 'andi@gmail.com', 'Jl. Merdeka No. 12, Cilacap', '2026-01-10'),
      ('P02', 'Budi Santoso', '085678901234', 'budi@yahoo.com', 'Jl. Gatot Subroto No. 45, Purwokerto', '2026-01-15'),
      ('P03', 'Citra Lestari', '087890123456', 'citra@gmail.com', 'Jl. Sudirman No. 8, Cilacap', '2026-02-01'),
      ('P04', 'Dewi Rahmawati', '082198765432', 'dewi@outlook.com', 'Jl. Rinjani No. 3, Cilacap', '2026-02-20'),
      ('P05', 'Eko Prasetyo', '089912345678', 'eko@gmail.com', 'Jl. Dr. Soetomo No. 19, Purwokerto', '2026-03-05');

    INSERT INTO pesanan VALUES
      ('PS01', 'P01', '2026-03-10', 48000, 'Selesai'),
      ('PS02', 'P02', '2026-03-11', 29000, 'Selesai'),
      ('PS03', 'P03', '2026-03-12', 67000, 'Selesai'),
      ('PS04', 'P01', '2026-03-15', 53000, 'Selesai'),
      ('PS05', 'P04', '2026-03-18', 36000, 'Proses'),
      ('PS06', 'P05', '2026-03-20', 18000, 'Batal');

    INSERT INTO detail_pesanan VALUES
      ('D01', 'PS01', 'M01', 2, 24000, 48000),
      ('D02', 'PS02', 'M02', 1, 22000, 22000),
      ('D03', 'PS02', 'M05', 1, 5000, 5000),
      ('D04', 'PS03', 'M03', 1, 45000, 45000),
      ('D05', 'PS03', 'M02', 1, 22000, 22000),
      ('D06', 'PS04', 'M04', 1, 35000, 35000),
      ('D07', 'PS04', 'M10', 1, 18000, 18000),
      ('D08', 'PS05', 'M10', 2, 18000, 36000),
      ('D09', 'PS06', 'M10', 1, 18000, 18000);

    INSERT INTO pembayaran VALUES
      ('BY01', 'PS01', '2026-03-10', 'Tunai', 50000),
      ('BY02', 'PS02', '2026-03-11', 'QRIS', 29000),
      ('BY03', 'PS03', '2026-03-12', 'Transfer Bank', 67000),
      ('BY04', 'PS04', '2026-03-15', 'QRIS', 53000);
  `);

  return sandboxDb;
}

function getSandboxDb() {
  if (!sandboxDb) {
    initRestoranSandbox();
  }
  return sandboxDb;
}

function resetSandbox() {
  return initRestoranSandbox();
}

function executeQuery(rawQuery) {
  const dbInstance = getSandboxDb();
  if (typeof rawQuery !== 'string') {
    return { error: 'Format query tidak valid.' };
  }

  const trimmed = rawQuery.trim();

  if (!trimmed) {
    return { error: 'Query tidak boleh kosong.' };
  }

  if (trimmed.length > 3000) {
    return { error: 'Panjang query melebihi batas maksimal 3000 karakter.' };
  }

  // Reject multi-statement chaining
  const semiIndex = trimmed.indexOf(';');
  if (semiIndex !== -1 && semiIndex < trimmed.length - 1) {
    return { error: 'Eksekusi multi-query dibatasi demi keamanan sandbox.' };
  }

  // Strictly block dangerous SQLite keywords and file system operations anywhere in the query
  const disallowed = /\b(ATTACH|DETACH|PRAGMA|VACUUM|LOAD_EXTENSION|WRITEFILE|READFILE)\b/i;
  if (disallowed.test(trimmed)) {
    return { error: 'Perintah atau fungsi tersebut dibatasi dalam sandbox keamanan.' };
  }

  try {
    const isSelect = /^(SELECT|WITH|SHOW|DESC|EXPLAIN)/i.test(trimmed);

    if (isSelect) {
      const stmt = dbInstance.prepare(trimmed);
      const rows = stmt.all();
      const columns = stmt.columns().map(c => c.name);
      return { success: true, isSelect: true, columns, rows, count: rows.length };
    } else {
      const info = dbInstance.prepare(trimmed).run();
      return {
        success: true,
        isSelect: false,
        changes: info.changes,
        lastInsertRowid: info.lastInsertRowid
      };
    }
  } catch (err) {
    return { success: false, error: err.message };
  }
}

function getSchemaMetadata() {
  const dbInstance = getSandboxDb();
  const tables = ['kategori_menu', 'menu', 'pelanggan', 'pesanan', 'detail_pesanan', 'pembayaran'];
  const result = {};

  for (const table of tables) {
    const columns = dbInstance.prepare(`PRAGMA table_info(${table})`).all();
    const count = dbInstance.prepare(`SELECT COUNT(*) as total FROM ${table}`).get().total;
    const sample = dbInstance.prepare(`SELECT * FROM ${table} LIMIT 3`).all();
    result[table] = { columns, count, sample };
  }

  return result;
}

module.exports = {
  getSandboxDb,
  resetSandbox,
  executeQuery,
  getSchemaMetadata
};
