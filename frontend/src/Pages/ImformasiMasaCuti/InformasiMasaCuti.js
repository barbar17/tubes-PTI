import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Function/AuthContext";
import axios from "axios";

function InformasiMasaCuti() {
  const props = useContext(AuthContext)

  const [totalMinggu, setTotalMinggu] = useState(0);
  const [cutiTahunan, setCutiTahunan] = useState(20);
  const [cutiDiambil, setCutiDiambil] = useState('')

  const daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  }

  const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  const date = new Date()
  const month = months[date.getMonth()]
  const year = date.getFullYear()

  const minggu = () => {
    const date = new Date();
    const totalDay = daysInMonth(date.getMonth(), date.getFullYear())
    for (var i = 1; i <= totalDay; i++) {
      var newDate = new Date(date.getFullYear(), date.getMonth(), i)
      if (newDate.getDay() === 0) {
        setTotalMinggu((oldTotal) => oldTotal + 1);
      }
    }

  }

  const getPegawaiById = async () => {
    const response = await axios.get(`http://localhost:5000/pegawai/${props.userId}`);
    setCutiDiambil(response.data.cutidiambil)
    minggu()
  }

  useEffect(() => {
    getPegawaiById()
  }, [props])


  return (
    <div className="flex flex-col w-full items-center justify-center py-10 px-20">
      <div className="flex flex-col justify-around w-full">
        <div className="w-full bg-main h-20 flex text-white text-2xl  items-center p-10 rounded-md">Detail Informasi Masa Cuti</div>
        <div className="flex justify-around w-full">
          <div className=" w-full h-20 flex text-2xl  items-center p-10 text-black">Cuti Hari Minggu ({month})</div>
          <div className="flex items-center justify-center bg-gray-200 w-1/5">
            <div className="relative inline-block text-left">
              <div>Sisa Cuti: {totalMinggu} Hari</div>
            </div>
          </div>
        </div>
        <div className="flex justify-around w-full">
          <div className=" w-full h-20 flex text-2xl  items-center p-10 text-black">Cuti Tahunan</div>
          <div className="flex items-center justify-center bg-gray-200 w-1/5">
            <div className="relative inline-block text-left">
              <div>Sisa Cuti: {cutiTahunan - cutiDiambil} Hari</div>
            </div>
          </div >
        </div >
        {/* <div className="flex justify-around w-full">
          <div className=" w-full h-20 flex text-2xl  items-center p-10 text-black">Cuti Izin</div>
          <div className="flex items-center justify-center bg-gray-200 w-1/5">
            <div className="relative inline-block text-left">
              <div>Sisa Cuti: 9 Hari</div>
            </div>
          </div >
        </div > */}
        <div className="flex justify-around w-full">
          <div className=" w-full h-20 flex text-2xl  items-center p-10 text-black">Cuti Libur Nasional ({year})</div>
          <div className="flex items-center justify-center bg-gray-200 w-1/5">
            <div className="relative inline-block text-left">
              <div>Sisa Cuti: 4 Hari</div>
            </div>
          </div >
        </div >
        {/* <div className="flex justify-around w-full">
          <div className=" w-full h-20 flex text-2xl  items-center p-10 text-black">Cuti Dispensasi</div>
          <div className="flex items-center justify-center bg-gray-200 w-1/5">
            <div className="relative inline-block text-left">
              <div>Sisa Cuti: 21 Hari</div>
            </div>
          </div >
        </div > */}
      </div >
    </div >
  );
}

export default InformasiMasaCuti;
