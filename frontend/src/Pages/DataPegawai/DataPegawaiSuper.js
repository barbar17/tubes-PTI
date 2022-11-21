import React, { useState, useEffect, useContext } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../Function/AuthContext";
import { BiSearchAlt } from "react-icons/bi";

function DataPegawaiSuper() {

  const [pegawai, setPegawai] = useState();

  const props = useContext(AuthContext)

  let [searchParams, setSearchParams] = useSearchParams()

  const getPegawai = async () => {
    const response = await axios.get('http://localhost:5000/pegawai');
    setPegawai(response.data.rows)
  }

  const deletePegawai = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/pegawai/${id}`)

      getPegawai();
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPegawai();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props])

  return (
    <div className="w-full p-10 h-full">
      <div className="w-full bg-white pb-2">
        <div className="bg-main w-full text-white py-2 px-5 text-2xl rounded-tl-lg rounded-tr-lg">Data Pegawai</div>
        <div className="flex w-full justify-between px-10 py-5">
          <div className="relative w-80">
            <input
              type={"text"}
              className="w-full h-10 bg-slate-100 outline outline-2 outline-slate-400 rounded-md pl-14 pr-10 text-sm focus:shadow-slate-400 focus:shadow-md transition-all"
              placeholder="Ketik untuk mencari... "
              onChange={(event) => {
                let filter = event.target.value;
                if (filter) {
                  setSearchParams({ filter });
                } else {
                  setSearchParams({});
                }
              }}
              value={searchParams.get("filter") || ""}
            />
            <div className="absolute top-1/2 -translate-y-1/2 left-2 pr-1 border-r-2 h-full border-r-slate-400 flex items-center">
              <BiSearchAlt className="text-2xl" color="black" />
            </div>
          </div>
          <Link to={"/super/tambah_pegawai"} className="my-auto flex text-white bg-btn-purple h-8 w-24 items-center justify-center text-lg rounded-lg">
            Tambah
          </Link>
        </div>
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
              pegawai?.filter((item) => {
                let filter = searchParams.get("filter");
                if (!filter) return true;
                let id = item.id.toLowerCase();
                let name = item.name.toLowerCase();
                let username = item.username.toLowerCase();
                return (
                  id.includes(filter.toLowerCase()) ||
                  name.includes(filter.toLowerCase()) ||
                  username.includes(filter.toLowerCase())
                )
              }).map((item, index) => {
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
                        <Link to={`/super/data_pegawai/edit/${item.id}`} className="my-auto text-white bg-card-green h-8 w-24 items-center justify-center text-lg rounded-lg">
                          Edit
                        </Link>
                        <button onClick={() => deletePegawai(item.id)} className="my-auto text-white bg-card-red h-8 w-24 items-center justify-center text-lg rounded-lg">
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
  );
}

export default DataPegawaiSuper;
