import { useNavigate } from 'react-router-dom'
import React, { useState } from "react";
import axios from 'axios';

function TambahAkunPegawaiSuper() {

  const go = useNavigate()

  const [nama, setNama] = useState();
  const [id, setId] = useState();
  const [divisi, setDivisi] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const createPegawai = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:5000/pegawai", {
        name: nama,
        id: id,
        divisi: divisi,
        username: username,
        password: password,
      }, {
        headers: {
          "Content-type": "application/json"
        }
      });

      go('/super/data_pegawai')
    } catch (error) {
      console.log(error.response.data);
    }

  }

  return (
    <div className="flex flex-col w-full items-center justify-center py-10 px-20 gap-20">
      <div className="w-full">
        <div className="bg-main w-full text-white py-2 px-5 text-2xl rounded-tl-lg rounded-tr-lg text-center">
          Tambah Akun Pegawai
        </div>
        <form onSubmit={createPegawai} className=" w-full flex items-center justify-center bg-white text-xl p-10">
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
                    value={nama}
                    onChange={(event) => setNama(event.target.value)}
                    className="rounded-lg border-slate-400 border"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <span>ID</span>
                </td>
                <td>
                  :{" "}
                  <input
                    type="text"
                    value={id}
                    onChange={(event) => setId(event.target.value)}
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
                    value={divisi}
                    onChange={(event) => setDivisi(event.target.value)}
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
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
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
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
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
        </form>
      </div>
    </div>
  );
}

export default TambahAkunPegawaiSuper;
