import React from "react";

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
}

export default DataPegawaiAdmin;
