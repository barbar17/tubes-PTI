import React, { useState, useContext, useEffect } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Function/AuthContext'
import { FiUser, FiUsers, FiFileText, FiUserX } from "react-icons/fi";

function BerandaSuper() {

  const props = useContext(AuthContext)

  const [jumlahPegawai, setJumlahPegawai] = useState('');
  const [jumlahSuratCuti, setJumlahSuratCuti] = useState('');
  const [pegawaiCuti, setPegawaiCuti] = useState('');

  const now = new Date();
  const currentDate = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`

  const getPegawai = async () => {
    const response = await axios.get('http://localhost:5000/pegawai');
    setJumlahPegawai(response.data.count)
  }

  const getSuraCuti = async () => {
    const response = await axios.get('http://localhost:5000/suratCuti/super');
    setJumlahSuratCuti(response.data.count)

  }

  const getLaporanCuti = async () => {
    const response = await axios.get('http://localhost:5000/suratCuti/laporan');

    let pegawaiCuti = 0;
    for (let index = 0; index < response.data.length; index++) {
      const element = response.data[index].tglselesai;
      if (element >= currentDate) {
        pegawaiCuti += 1
      }
    }
    setPegawaiCuti(pegawaiCuti)
  }

  useEffect(() => {
    getPegawai()
    getSuraCuti()
    getLaporanCuti()
  }, [props])

  return (
    <div className="flex flex-col w-full items-center justify-center py-10 px-20 gap-20">
      <div className="w-full grid grid-cols-2 place-items-center gap-y-10">
        <div className="flex w-[500px] bg-card-blue rounded-lg justify-end">
          <Link to={'/super/data_pegawai'} className="flex items-center justify-between bg-white w-[490px] rounded-tr-lg rounded-br-lg p-10">
            <div className="flex flex-col ">
              <span className="text-card-blue text-2xl">Jumlah</span>
              <span className="text-4xl">{jumlahPegawai} Pegawai</span>
            </div>
            <FiUsers className="text-8xl" />
          </Link>
        </div>

        <div className="flex w-[500px] bg-card-green rounded-lg justify-end">
          <div className="flex items-center justify-between bg-white w-[490px] rounded-tr-lg rounded-br-lg p-10">
            <div className="flex flex-col ">
              <span className="text-card-green text-2xl">Pegawai Bekerja</span>
              <span className="text-4xl">{jumlahPegawai - pegawaiCuti} Pegawai</span>
            </div>
            <FiUser className="text-8xl" />
          </div>
        </div>

        <div className="flex w-[500px] bg-card-yellow rounded-lg justify-end">
          <Link to={'/super/daftar_pengajuan_cuti'} className="flex items-center justify-between bg-white w-[490px] rounded-tr-lg rounded-br-lg p-10">
            <div className="flex flex-col ">
              <span className="text-card-yellow text-2xl">Pengajuan Cuti</span>
              <span className="text-4xl">{jumlahSuratCuti} Pegawai</span>
            </div>
            <FiFileText className="text-8xl" />
          </Link>
        </div>

        <div className="flex w-[500px] bg-card-red rounded-lg justify-end">
          <div className="flex items-center justify-between bg-white w-[490px] rounded-tr-lg rounded-br-lg p-10">
            <div className="flex flex-col ">
              <span className="text-card-red text-2xl">
                Pegawai Sedang Cuti
              </span>
              <span className="text-4xl">{pegawaiCuti} Pegawai</span>
            </div>
            <FiUserX className="text-8xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BerandaSuper;
