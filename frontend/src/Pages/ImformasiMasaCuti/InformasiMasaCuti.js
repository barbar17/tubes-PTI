import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Function/AuthContext";
import axios from "axios";

function InformasiMasaCuti() {
  const props = useContext(AuthContext)

  const cutiTahunan = 20;
  const [cutiDiambil, setCutiDiambil] = useState('')

  const getPegawaiById = async () => {
    const response = await axios.get(`http://localhost:5000/pegawai/${props.userId}`);
    setCutiDiambil(response.data.cutidiambil)
  }

  useEffect(() => {
    getPegawaiById()
  }, [props])


  return (
    <div className="flex flex-col w-full items-center justify-center py-10 px-20">
      <div className="flex flex-col justify-around w-full">
        <div className="w-full bg-main h-20 flex text-white text-2xl  items-center p-10 rounded-md">Detail Informasi Masa Cuti</div>
        <div className="flex justify-around w-full">
          <div className=" w-full h-20 flex text-2xl  items-center p-10 text-black">Cuti Tahunan</div>
          <div className="flex items-center justify-center bg-gray-200 w-1/5">
            <div className="relative inline-block text-left">
              <div>Sisa Cuti: {cutiTahunan - cutiDiambil} Hari</div>
            </div>
          </div >
        </div >
        <div className="flex flex-col justify-around w-full">
          <div className=" w-full flex text-2xl  items-center px-10 text-black">LIST DISPENSASI:</div>
          <table className="mx-16 text-lg">
            <tbody>
              <tr >
                <td>1. Pekerja/Buruh menikah</td>
                <td>3 Hari</td>
              </tr>
              <tr >
                <td>2. Menikahkan anaknya</td>
                <td>2 Hari</td>
              </tr>
              <tr >
                <td>3. Mengkhitankan/Membaptis anaknya</td>
                <td>2 Hari</td>
              </tr>
              <tr >
                <td>4. Istri melahirkan/keguguran kandungan</td>
                <td>2 Hari</td>
              </tr>
              <tr >
                <td>5. Suami/Istri, Orang tua/Mertua, Anak, atau Menantu meninggal dunia</td>
                <td>2 Hari</td>
              </tr>
              <tr >
                <td>6. Kakak/Adik kandung meninggal dunia</td>
                <td>1 Hari</td>
              </tr>
              <tr >
                <td>7. Suami/Istri/Anak sakit keras dan dirawat di rumah sakit</td>
                <td>2 Hari</td>
              </tr>
              <tr >
                <td>8. Anggota keluarga dalam satu rumah meninggal dunia</td>
                <td>1  Hari</td>
              </tr>
            </tbody>
          </table>
        </div >
      </div >
    </div >
  );
}

export default InformasiMasaCuti;
