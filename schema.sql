CREATE TABLE IF NOT EXISTS perangkat_desa (
    id SERIAL PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    jabatan VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS pengaduan (
    id SERIAL PRIMARY KEY,
    nama_pelapor VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    isi_pesan TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO perangkat_desa (nama, jabatan) VALUES 
('Kasiyanto', 'Kepala Desa'),
('Suhartono', 'Sekretaris Desa'),
('Budi Santoso', 'Kaur Keuangan');