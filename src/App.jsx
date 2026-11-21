import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, FileText, Store, Users, 
  ChevronRight, Menu, X, CheckCircle2, Building2, 
  Newspaper, ShieldCheck, ArrowUpRight 
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('semua');

  const layananList = [
    {
      title: 'Surat Pengantar KTP & KK',
      desc: 'Pengajuan surat pengantar pembuatan atau pembaruan identitas kependudukan secara cepat.',
      estimasi: '1 Hari Kerja',
    },
    {
      title: 'Surat Keterangan Usaha (SKU)',
      desc: 'Legalisasi administrasi untuk pelaku UMKM Desa Sidokerto guna pengajuan modal atau izin.',
      estimasi: '1 Hari Kerja',
    },
    {
      title: 'Surat Keterangan Tidak Mampu',
      desc: 'Layanan surat keterangan untuk keperluan beasiswa pendidikan maupun bantuan kesehatan.',
      estimasi: 'Langsung Jadi',
    },
    {
      title: 'Surat Domisili & Pindah',
      desc: 'Pencatatan warga pendatang maupun pengurusan surat keterangan pindah keluar desa.',
      estimasi: '1–2 Hari Kerja',
    },
  ];

  const umkmList = [
    {
      nama: 'Keripik Tempe Bu Wati',
      kategori: 'Kuliner',
      harga: 'Rp 15.000',
      penjual: 'Dusun Krajan RT 02',
      img: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=600&q=80',
    },
    {
      nama: 'Anyaman Bambu Sidokerto',
      kategori: 'Kerajinan',
      harga: 'Rp 45.000',
      penjual: 'Dusun Sawahan RT 04',
      img: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=600&q=80',
    },
    {
      nama: 'Madu Hutan Asli',
      kategori: 'Pertanian',
      harga: 'Rp 85.000',
      penjual: 'Dusun Tengah RT 01',
      img: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80',
    },
  ];

  const beritaList = [
    {
      tanggal: '18 Nov 2026',
      kategori: 'Pembangunan',
      judul: 'Perbaikan Drainase dan Pengaspalan Jalan Dusun Krajan Rampung 100%',
      ringkasan: 'Pembangunan infrastruktur jalan desa menggunakan Dana Desa tahap II telah selesai dan siap dilalui warga.',
    },
    {
      tanggal: '12 Nov 2026',
      kategori: 'Kesehatan',
      judul: 'Jadwal Posyandu Balita dan Lansia Bulan November di Balai Desa',
      ringkasan: 'Pemeriksaan kesehatan gratis serta pemberian makanan tambahan akan dilaksanakan mulai pukul 08.00 WIB.',
    },
    {
      tanggal: '05 Nov 2026',
      kategori: 'Ekonomi',
      judul: 'Pelatihan Digital Marketing untuk 50 Pelaku UMKM Desa Sidokerto',
      ringkasan: 'Pemerintah desa bekerja sama dengan mahasiswa KKN mengadakan pelatihan foto produk dan pemasaran online.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-700 flex items-center justify-center text-white font-bold text-lg shadow-sm">
                DS
              </div>
              <div>
                <h1 className="font-bold text-slate-900 leading-tight">Desa Sidokerto</h1>
                <p className="text-xs text-slate-500">Sistem Informasi & Pelayanan Publik</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <a href="#beranda" className="hover:text-emerald-700 transition">Beranda</a>
              <a href="#profil" className="hover:text-emerald-700 transition">Profil Desa</a>
              <a href="#layanan" className="hover:text-emerald-700 transition">Layanan Surat</a>
              <a href="#umkm" className="hover:text-emerald-700 transition">UMKM</a>
              <a href="#berita" className="hover:text-emerald-700 transition">Berita</a>
              <a href="#lokasi" className="hover:text-emerald-700 transition">Lokasi</a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a 
                href="#layanan" 
                className="px-4 py-2 rounded-lg bg-emerald-700 text-white text-sm font-semibold hover:bg-emerald-800 transition shadow-sm"
              >
                Ajukan Surat
              </a>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-2 text-sm font-medium">
            <a href="#beranda" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700">Beranda</a>
            <a href="#profil" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700">Profil Desa</a>
            <a href="#layanan" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700">Layanan Surat</a>
            <a href="#umkm" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700">UMKM</a>
            <a href="#berita" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700">Berita</a>
            <a href="#lokasi" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700">Lokasi Kantor</a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="beranda" className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-700/60 border border-emerald-500/40 text-emerald-100 text-xs font-medium mb-6">
              <ShieldCheck className="w-4 h-4" /> Portal Resmi Pemerintah Desa Sidokerto
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-6">
              Mewujudkan Desa Sidokerto yang Mandiri, Transparan, dan Digital
            </h2>
            <p className="text-emerald-100 text-base sm:text-lg mb-8 leading-relaxed">
              Akses informasi pemerintahan desa, pengajuan surat administrasi kependudukan, serta katalog produk UMKM unggulan warga dalam satu pintu.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#layanan" 
                className="px-6 py-3.5 rounded-xl bg-white text-emerald-900 font-bold text-sm hover:bg-emerald-50 transition flex items-center gap-2 shadow-lg"
              >
                Layanan Administrasi <ChevronRight className="w-4 h-4" />
              </a>
              <a 
                href="#profil" 
                className="px-6 py-3.5 rounded-xl bg-emerald-800/70 border border-emerald-400/30 text-white font-semibold text-sm hover:bg-emerald-700/70 transition"
              >
                Kenali Desa Kami
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATISTIK SINGKAT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Total Penduduk', value: '4.850 Jiwa', icon: Users },
            { label: 'Kepala Keluarga', value: '1.420 KK', icon: Building2 },
            { label: 'Pelaku UMKM', value: '86 Usaha', icon: Store },
            { label: 'Layanan Online', value: '24 Jam', icon: FileText },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500">{stat.label}</p>
                <p className="text-xl font-bold text-slate-900">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROFIL DESA */}
      <section id="profil" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-emerald-700 font-bold text-sm uppercase tracking-wider">Tentang Desa</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2 mb-4">
              Harmoni Tradisi dan Inovasi Pelayanan Publik
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Desa Sidokerto merupakan desa agraris yang terus bertransformasi menuju tata kelola pemerintahan berbasis digital. Dengan dukungan masyarakat yang gotong royong, kami berkomitmen memberikan pelayanan cepat tanpa birokrasi berbelit.
            </p>
            <ul className="space-y-3 mt-6">
              {[
                'Transparansi pengelolaan anggaran dan pembangunan desa.',
                'Digitalisasi surat-menyurat warga agar lebih hemat waktu.',
                'Pemberdayaan ekonomi kreatif dan pemasaran produk lokal.',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-emerald-100 rounded-2xl overflow-hidden shadow-md border border-slate-200">
            <img 
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80" 
              alt="Pemandangan Desa Sidokerto" 
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* LAYANAN ADMINISTRASI */}
      <section id="layanan" className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-emerald-700 font-bold text-sm uppercase tracking-wider">Pelayanan Mandiri</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">Layanan Administrasi Surat</h3>
            <p className="text-slate-600 mt-3 text-sm">
              Pilih jenis surat yang ingin diajukan. Siapkan foto KTP dan Kartu Keluarga sebelum mengisi formulir.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {layananList.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500 hover:shadow-md transition flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-emerald-700 text-white flex items-center justify-center mb-4">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{item.desc}</p>
                </div>
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                    {item.estimasi}
                  </span>
                  <button 
                    onClick={() => alert(`Membuka formulir pengajuan: ${item.title}`)}
                    className="text-sm font-semibold text-slate-900 hover:text-emerald-700 flex items-center gap-1"
                  >
                    Ajukan <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KATALOG UMKM */}
      <section id="umkm" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-emerald-700 font-bold text-sm uppercase tracking-wider">Ekonomi Lokal</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">Produk Unggulan UMKM Desa</h3>
          </div>
          <div className="flex gap-2">
            {['semua', 'Kuliner', 'Kerajinan', 'Pertanian'].map((kat) => (
              <button
                key={kat}
                onClick={() => setActiveTab(kat)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold capitalize transition ${
                  activeTab === kat 
                    ? 'bg-emerald-700 text-white' 
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {kat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {umkmList
            .filter((u) => activeTab === 'semua' || u.kategori === activeTab)
            .map((produk, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition">
                <img src={produk.img} alt={produk.nama} className="w-full h-52 object-cover" />
                <div className="p-6">
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                    {produk.kategori}
                  </span>
                  <h4 className="font-bold text-lg text-slate-900 mt-3">{produk.nama}</h4>
                  <p className="text-xs text-slate-500 mt-1">{produk.penjual}</p>
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="font-bold text-emerald-700">{produk.harga}</span>
                    <button 
                      onClick={() => alert(`Menghubungi penjual ${produk.nama} via WhatsApp...`)}
                      className="px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-emerald-700 transition"
                    >
                      Pesan Produk
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* BERITA DESA */}
      <section id="berita" className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-emerald-700 font-bold text-sm uppercase tracking-wider">Kabar Terkini</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">Berita & Pengumuman Desa</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {beritaList.map((berita, idx) => (
              <article key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                    <span className="font-semibold text-emerald-700">{berita.kategori}</span>
                    <span>•</span>
                    <span>{berita.tanggal}</span>
                  </div>
                  <h4 className="font-bold text-lg text-slate-900 mb-3 leading-snug">{berita.judul}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{berita.ringkasan}</p>
                </div>
                <button className="mt-6 text-sm font-semibold text-emerald-700 hover:underline inline-flex items-center gap-1">
                  Baca Selengkapnya <Newspaper className="w-4 h-4" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PETA & KONTAK KANTOR DESA */}
      <section id="lokasi" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm grid lg:grid-cols-2">
          <div className="p-8 sm:p-12 flex flex-col justify-center">
            <span className="text-emerald-700 font-bold text-sm uppercase tracking-wider">Hubungi Kami</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2 mb-6">Kantor Balai Desa Sidokerto</h3>
            <div className="space-y-4 text-sm text-slate-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <span>Jl. Raya Sidokerto No. 01, Kecamatan Buduran, Kabupaten Sidoarjo, Jawa Timur</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-700 shrink-0" />
                <span>(031) 894-XXXX / 0812-3456-7890 (Layanan Warga)</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-700 shrink-0" />
                <span>pemdes@sidokerto-desa.id</span>
              </div>
            </div>
            <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
              <strong>Jam Pelayanan Kantor:</strong> Senin – Jumat, Pukul 08.00 – 15.00 WIB
            </div>
          </div>

          {/* Embed Google Maps Gratis Tanpa API Key */}
          <div className="min-h-[320px] bg-slate-200">
            <iframe
              title="Peta Kantor Desa Sidokerto"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15824.96202883329!2d112.7126!3d-7.4385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e6b0b0b0b0b1%3A0x0!2sSidokerto%2C%20Buduran%2C%20Sidoarjo!5e0!3m2!1sid!2sid!4v1700000000000"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-10 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-semibold text-white">Pemerintah Desa Sidokerto © 2026</p>
          <p className="text-xs">Dikembangkan oleh Tim Frontend Development — Asynchronous 15</p>
        </div>
      </footer>
    </div>
  );
}
