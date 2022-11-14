import React from "react";

function DaftarPengajuanCutiSuper() {
  return (
    <div className="w-full p-10 h-full">
      <div className="w-full">
        <div className="bg-main w-full text-white py-2 px-5 text-2xl rounded-tl-lg rounded-tr-lg">
          Daftar Pengajuan Cuti
        </div>
        <div className="flex flex-col px-5 bg-white pb-3">
          <div className="flex p-5 bg-white justify-between">
            <div className="relative w-80">
              <input
                type={"text"}
                className="w-full h-10 bg-slate-100 outline outline-2 outline-slate-400 rounded-md pl-14 pr-10 text-sm focus:shadow-slate-400 focus:shadow-md transition-all"
                placeholder="Ketik untuk mencari... "
                onChange={(event) => {}}
              />
            </div>
          </div>

          <table className="table-auto w-full text-center text-xl ">
            <thead>
              <tr className="border-y-2">
                <th className="py-2">#</th>
                <th>ID</th>
                <th>Nama</th>
                <th>Tgl Pengajuan</th>
                <th>Tgl Mulai</th>
                <th>Selesai</th>
                <th>Alasan</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">1</td>
                <td>12345</td>
                <td>widodo</td>
                <td>10/01/2022</td>
                <td>11/01/2022</td>
                <td>15/01/2022</td>
                <td>sakit</td>
                <div className="w-full h-full flex justify-evenly">
                  <button className="my-auto text-white bg-card-green h-8 w-24 items-center justify-center text-lg rounded-lg">
                    Profil
                  </button>
                  <button className="my-auto text-white bg-card-blue h-8 w-24 items-center justify-center text-lg rounded-lg">
                    Detail
                  </button>
                </div>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DaftarPengajuanCutiSuper;
