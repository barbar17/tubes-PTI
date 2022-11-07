import React, { useState, useEffect, useContext } from "react";
import { Link, useOutletContext } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../Function/AuthContext";

function DataPegawaiAdmin() {

  const [pegawai, setPegawai] = useState();

  const props = useContext(AuthContext)

  const getPegawaiByDivisi = async () => {
    const response = await axios.get(`http://localhost:5000/pegawai-per-divisi/${props.divisi}`);
    setPegawai(response.data)
  }

  useEffect(() => {
    getPegawaiByDivisi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.divisi])

  return (
    <div className="w-full p-10 h-full">
      <div className="w-full bg-white pb-2">
        <div className="bg-main w-full text-white py-2 px-5 text-2xl rounded-tl-lg rounded-tr-lg">Data Pegawai</div>
        <table className="table-auto w-full text-center text-xl">
          <thead>
            <tr className="border-b-2">
              <th className="py-2">#</th>
              <th>ID</th>
              <th>Nama</th>
              <th>Jenis Kelamin</th>
              <th>Divisi</th>
              <th>Username</th>
              <th>Telepon</th>
              <th>Opsi</th>
            </tr>
          </thead>
          <tbody>
            {
              pegawai?.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="py-2">{index + 1}</td>
                    <td>{item?.id}</td>
                    <td>{item?.name}</td>
                    <td>{item?.jeniskelamin}</td>
                    <td>{item?.divisi}</td>
                    <td>{item?.username}</td>
                    <td>{item?.telepon}</td>
                    <td>
                      <div className="w-full h-full flex justify-evenly">
                        <Link to={'/admin/data_pegawai/edit'} className="my-auto text-white bg-card-green h-8 w-24 items-center justify-center text-lg rounded-lg">
                          Edit
                        </Link>
                        <button className="my-auto text-white bg-card-red h-8 w-24 items-center justify-center text-lg rounded-lg">
                          Hapus
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DataPegawaiAdmin;
