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
import Login from './Pages/Login';

const user = 'pegawai';
const admin = 'manajer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='*' element={<App />}>
          <Route path='beranda' element={<BerandaUser />} />
          <Route path='berandaadmin' element={<BerandaAdmin />} />
          <Route path='pengajuan_e-cuti' element={<Pengajuan />} />
          <Route path='informasi_masa_cuti' element={<InformasiMasaCuti />} />

        </Route>

        <Route path='profil' element={<Profil />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
