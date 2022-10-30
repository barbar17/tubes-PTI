import React from "react";

<<<<<<< Updated upstream
function DaftarPengajuanCutiAdmin() {
  return (
    <div className="flex flex-col w-full items-center justify-center py-10 px-20 gap-20">
      <div className="w-full">
        <div className="bg-main w-full text-white py-2 px-5 text-2xl rounded-tl-lg rounded-tr-lg text-center">
          Tambah Akun Pegawai
        </div>
        <div className=" w-full flex items-center justify-center bg-white text-xl p-10">
          <table className="border-separate border-spacing-y-2 border-spacing-x-5">
            <tbody>
              <tr>
                <td>
                  <span>Nama</span>
                </td>
                <td>
                  :{" "}
                  <input
                    type="text"
                    className="rounded-lg border-slate-400 border"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <span>NIP/ID</span>
                </td>
                <td>
                  :{" "}
                  <input
                    type="text"
                    className="rounded-lg border-slate-400 border"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <span>Divisi</span>
                </td>
                <td>
                  :{" "}
                  <input
                    type="text"
                    className="rounded-lg border-slate-400 border"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <span>Username</span>
                </td>
                <td>
                  :{" "}
                  <input
                    type="text"
                    className="rounded-lg border-slate-400 border"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <span>Password</span>
                </td>
                <td>
                  :{" "}
                  <input
                    type="text"
                    className="rounded-lg border-slate-400 border"
                  />
                </td>
              </tr>
              <tr>
                <td>{""}</td>
                <div className="flex justify-end w-full pr-1">
                  <button className="my-auto text-white bg-indigo-500 h-8 w-24 items-center justify-center text-lg rounded-lg">
                    Submit
                  </button>
                </div>
              </tr>
            </tbody>
          </table>

          <hr className="border-gray-400 border-2 my-5" />
        </div>
      </div>
    </div>
  );
=======
function DataPegawaiAdmin() {
  return (
    <div className="w-full p-10 h-full">
      <div className="w-full">
        <div className="bg-main w-full text-white py-2 px-5 text-2xl rounded-tl-lg rounded-tr-lg">Data Pegawai</div>
        <table className="table-auto w-full text-center bg-white text-xl ">
          <thead>
            <tr className="border-b-2">
              <th className="py-2">#</th>
              <th>ID</th>
              <th>Nama</th>
              <th>Divisi</th>
              <th>Username</th>
              <th>Password</th>
              <th>Opsi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">1</td>
              <td>12345</td>
              <td>widodo</td>
              <td>produksi</td>
              <td>widodo2000</td>
              <td>*****</td>
              <td>
                <div className="w-full h-full flex justify-evenly">
                  <button className="my-auto text-white bg-card-green h-8 w-24 items-center justify-center text-lg rounded-lg">
                    Edit
                  </button>
                  <button className="my-auto text-white bg-card-red h-8 w-24 items-center justify-center text-lg rounded-lg">
                    Hapus
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
>>>>>>> Stashed changes
}

export default DaftarPengajuanCutiAdmin;
