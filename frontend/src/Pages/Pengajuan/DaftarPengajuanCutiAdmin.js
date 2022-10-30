import React from "react";
import { FiUser, FiUserX } from "react-icons/fi";
import KonfirmAdm from "./KonfirmAdm";
import { useState } from "react";

function DaftarPengajuanCutiAdmin() {
  const [buttonKonfirmAdm, setButtonKonfirmAdm] = useState(false);
  return (
    <div className="flex flex-col w-full items-center justify-center py-10 px-20 gap-20">
      <div className="flex justify-around w-full">
        <div className="absolute w-4/5 -mt-64 ml-[900px]">
          <KonfirmAdm
            trigger={buttonKonfirmAdm}
            setTrigger={setButtonKonfirmAdm}
          />
        </div>
      </div>

      <div className="w-full">
        <div className="bg-main w-full text-white py-2 px-5 text-2xl rounded-tl-lg rounded-tr-lg">
          Daftar Pengajuan Cuti
        </div>
        <table className="table-auto w-full text-center bg-white text-xl ">
          <thead>
            <tr className="border-b-2">
              <th className="py-2">#</th>
              <th>ID</th>
              <th>Tgl Pengajuan</th>
              <th>Tgl Mulai</th>
              <th>Tgl Selesai</th>
              <th>Alasan</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">1</td>
              <td>12345</td>
              <td>01-01-2022</td>
              <td>10-01-2022</td>
              <td>20-01-2022</td>
              <td>Sakit</td>
              <td>Sedang diproses</td>
              <td>
                <button
                  onClick={() => setButtonKonfirmAdm(true)}
                  className="my-auto text-white bg-indigo-500 h-8 w-24 items-center justify-center text-lg rounded-lg"
                >
                  Detail
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DaftarPengajuanCutiAdmin;
