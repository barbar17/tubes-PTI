import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function EditAkunPegawai() {

  const go = useNavigate()

  const [showPassword, setShowPassword] = useState(false);
  const [nama, setNama] = useState("");
  const [userId, setUserId] = useState("");
  const [divisi, setDivisi] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { id } = useParams();

  const getPegawaiById = async () => {
    const response = await axios.get(`http://localhost:5000/pegawai/${id}`);
    console.log(response.data)
    setNama(response.data.name)
    setUserId(response.data.id)
    setDivisi(response.data.divisi)
    setUsername(response.data.username)
  }

  const updatePegawai = async (event) => {
    event.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/pegawai/${id}`, {
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
      go('/admin/data_pegawai')
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPegawaiById()
  }, [id])


  return (
    <div className="flex flex-col w-full items-center justify-center py-10 px-20 gap-20">
      <div className="w-full">
        <div className="bg-main w-full text-white py-2 px-5 text-2xl rounded-tl-lg rounded-tr-lg text-center">
          Edit Akun Pegawai
        </div>
        <form className=" w-full flex items-center justify-center bg-white text-xl p-10" onSubmit={updatePegawai}>
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
                    className="rounded-lg border-slate-400 border px-2 py-1 "
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
                    className="rounded-lg border-slate-400 border px-2 py-1"
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
                    className="rounded-lg border-slate-400 border px-2 py-1"
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
                <td className="flex items-center">
                  :
                  <div className='flex items-center justify-between ml-1'>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password Baru"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      className="rounded-tl-lg h-10 rounded-bl-lg border-slate-400 border py-1 px-2"
                    />
                    {
                      showPassword ? <div className='h-10 flex'> <AiFillEyeInvisible className='text-gray-700 pr-2 text-4xl bg-gray-300 h-full rounded-tr-lg rounded-br-lg' /></div>
                        : <div className='h-10 flex'><AiFillEye className='text-gray-700 pr-2 text-4xl bg-gray-300 h-full rounded-tr-lg rounded-br-lg' /></div>
                    }
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                </td>
                <td>
                  <button type='button' onClick={() => setShowPassword(!showPassword)} className='bg-card-green rounded-md flex w-fit px-2 py-1 text-white mb-8'>
                    <span>Lihat Password</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td>{""}</td>
                <td>
                  <div className="flex justify-end w-full pr-1">
                    <button className="my-auto text-white bg-indigo-500 h-8 w-24 items-center justify-center text-lg rounded-lg">
                      Submit
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

        </form>
      </div>
    </div>
  );
}

export default EditAkunPegawai;
