import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditAkunPegawaiSuper() {
  const go = useNavigate()

  const [nama, setNama] = useState("");
  const [userId, setUserId] = useState("");
  const [divisi, setDivisi] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { id } = useParams();

  const getAdminById = async () => {
    const response = await axios.get(`http://localhost:5000/admin/${id}`);
    setNama(response.data.name)
    setUserId(response.data.id)
    setDivisi(response.data.divisi)
    setUsername(response.data.username)
  }

  const updateAdmin = async (event) => {
    event.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/admin/${id}`, {
        name: nama,
        id: userId,
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
      console.log(error);
    }
  }

  useEffect(() => {
    getAdminById()
  }, [id])

  return (
    <div className="flex flex-col w-full items-center justify-center py-10 px-20 gap-20">
      <div className="w-full">
        <div className="bg-main w-full text-white py-2 px-5 text-2xl rounded-tl-lg rounded-tr-lg text-center">
          Edit Akun Pegawai
        </div>
        <form onSubmit={updateAdmin} className=" w-full flex items-center justify-center bg-white text-xl p-10">
          <table className="border-separate border-spacing-y-2 border-spacing-x-5">
            <tbody>
              <tr>
                <td>
                  <span>Nama</span>
                </td>
                <td>
                  :{" "}
                  <input
                    type={"text"}
                    className="rounded-lg border-slate-400 border "
                    placeholder="Nama"
                    value={nama}
                    onChange={(event) => setNama(event.target.value)}
                    required
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
                    className="rounded-lg border-slate-400 border"
                    placeholder="12345 "
                    value={userId}
                    onChange={(event) => setUserId(event.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <span>Divisi</span>
                </td>
                <td>
                  :{" "}
                  <select className="rounded-lg border-slate-400 border px-2 py-1"
                    placeholder="Produksi "
                    value={divisi}
                    onChange={(event) => setDivisi(event.target.value)}
                    required>
                    <option>Produksi</option>
                    <option>Sistem Administrasi</option>
                    <option>QA</option>
                  </select>
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
                    placeholder="Widodo2000 "
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    required
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
                    placeholder="passwordku123 "
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}

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

export default EditAkunPegawaiSuper;
