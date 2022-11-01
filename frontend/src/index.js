import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import BerandaUser from './Pages/Beranda/BerandaUser';
import BerandaAdmin from './Pages/Beranda/BerandaAdmin';
import Pengajuan from './Pages/Pengajuan/Pengajuan';
import InformasiMasaCuti from './Pages/ImformasiMasaCuti/InformasiMasaCuti';
import Profil from './Pages/Profil/Profil';
import EditProfil from './Pages/Profil/EditProfil';
import Login from './Pages/Login';
import DataPegawaiAdmin from './Pages/DataPegawai/DataPegawaiAdmin';
import DaftarPengajuanCutiAdmin from './Pages/DaftarPengajuanCuti/DaftarPengajuanCutiAdmin';
import ProfilAdmin from './Pages/Profil/ProfilAdmin';
import EditProfilAdmin from './Pages/Profil/EditProfilAdmin';
import LaporanCutiAdmin from './Pages/LaporanCuti/LaporanCutiAdmin';
import EditAkunPegawai from './Pages/DataPegawai/EditAkunPegawai';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />

        <Route path='user' element={<App />}>
          <Route path='beranda' element={<BerandaUser />} />
          <Route path='pengajuan_e-cuti' element={<Pengajuan />} />
          <Route path='informasi_masa_cuti' element={<InformasiMasaCuti />} />

        </Route>

        <Route path='admin' element={<App />}>
          <Route path='beranda' element={<BerandaAdmin />} />
          <Route path='data_pegawai' element={<DataPegawaiAdmin />} />
          <Route path='daftar_pengajuan_cuti' element={<DaftarPengajuanCutiAdmin />} />
          <Route path='laporan_cuti' element={<LaporanCutiAdmin />} />
          <Route path='data_pegawai/edit' element={<EditAkunPegawai />} />
        </Route>

        <Route path='profil/user/:id' element={<Profil />} />
        <Route path='profil/user/edit/:id' element={<EditProfil />} />

        <Route path='profil/admin/:id' element={<ProfilAdmin />} />
        <Route path='profil/admin/edit/:id' element={<EditProfilAdmin />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
