const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: 'postgres',         
  host: 'localhost',
  database: 'desa_sidokerto', 
  password: '121005', 
  port: 5432,
});

app.get('/api/perangkat', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM perangkat_desa ORDER BY id ASC');
    res.json({ success: true, data: result.rows });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.get('/api/perangkat/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM perangkat_desa WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Data tidak ditemukan' });
    }
    res.json({ success: true, data: result.rows[0] });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.post('/api/pengaduan', async (req, res) => {
  const { nama_pelapor, email, isi_pesan } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO pengaduan (nama_pelapor, email, isi_pesan) VALUES ($1, $2, $3) RETURNING *',
      [nama_pelapor, email, isi_pesan]
    );
    res.json({ success: true, message: 'Pengaduan berhasil dikirim!', data: result.rows[0] });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.put('/api/perangkat/:id', async (req, res) => {
  const { id } = req.params;
  const { nama, jabatan } = req.body;
  try {
    const result = await pool.query(
      'UPDATE perangkat_desa SET nama = $1, jabatan = $2 WHERE id = $3 RETURNING *',
      [nama, jabatan, id]
    );
    res.json({ success: true, message: 'Data berhasil diperbarui', data: result.rows[0] });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.delete('/api/pengaduan/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM pengaduan WHERE id = $1', [id]);
    res.json({ success: true, message: 'Pengaduan berhasil dihapus' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
