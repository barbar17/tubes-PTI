import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoArrowBackSharp } from "react-icons/io5";
import { BsUpload } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";

function EditProfil() {

  const navigation = useNavigate()

  const { id } = useParams();

  const [name, setName] = useState('')
  const [userId, setUserId] = useState('')
  const [ttl, setTtl] = useState('')
  const [jeniskelamin, setJeniskelamin] = useState('')
  const [divisi, setDivisi] = useState('')
  const [agama, setAgama] = useState('')
  const [alamat, setAlamat] = useState('')
  const [telepon, setTelepon] = useState('')
  const [email, setEmail] = useState('')

  const getProfilPegawai = async () => {
    const response = await axios.get(`http://localhost:5000/pegawai/${id}`);
    setName(response.data.name);
    setUserId(response.data.id);
    setTtl(response.data.ttl);
    setJeniskelamin(response.data.jeniskelamin);
    setDivisi(response.data.divisi);
    setAgama(response.data.agama);
    setAlamat(response.data.alamat);
    setTelepon(response.data.telepon);
    setEmail(response.data.email);
  }

  useEffect(() => {
    getProfilPegawai();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="min-h-screen w-full bg-slate-200 font-display">
      <div className="min-h-screen flex flex-col justify-between">
        <div className="container flex flex-col grow mx-auto my-10 border border-gray-400 shadow-2xl">
          <div className="w-full flex bg-main h-20 items-center text-white text-5xl px-8">
            <IoArrowBackSharp onClick={() => navigation(-1)} className="hover:cursor-pointer" />
            <span className="px-8">Biodata Pegawai</span>
          </div>

          <form className="flex w-full px-10 grow items-stretch justify-between">
            <div className='flex'>
              <div className="flex flex-col item-center justify-center mx-10 space-y-10">
                <div className="flex border border-gray-400 shadow-2xl w-[250px] h-[333px] object-cover object-center items-center justify-center ">
                  <button className="text-white bg-main h-12 w-36 items-center justify-center text-2xl rounded-lg">
                    <BsUpload className="mt-2 ml-6" />
                    <span className="flex ml-14 -mt-6">Foto</span>
                  </button>
                </div>

                <div className="flex border border-gray-400 shadow-2xl w-[250px] h-[150px] object-cover object-center items-center justify-center ">
                  <button className="text-white bg-main h-12 w-36 items-center justify-center text-2xl rounded-lg">
                    <BsUpload className="mt-2 ml-6" />
                    <span className="flex ml-14 -mt-6">TTD</span>
                  </button>
                </div>
              </div>

              <div className="flex flex-col h-full items-center justify-center">
                <table className='border-separate border-spacing-2 text-2xl'>
                  <body>
                    <tr>
                      <td>nama</td>
                      <td>: <input type="text" className="rounded-md p-2 w-96 border-gray-600" onChange={(event) => setName(event.target.value)} value={name} /></td>
                    </tr>
                    <tr>
                      <td>ID</td>
                      <td>: <input type="text" className="rounded-md p-2 w-96 border-gray-600" onChange={(event) => setUserId(event.target.value)} value={userId} /></td>
                    </tr>
                    <tr>
                      <td>Tempat/Tgl Lahir</td>
                      <td>: <input type="text" className="rounded-md p-2 w-96 border-gray-600" onChange={(event) => setTtl(event.target.value)} value={ttl} /></td>
                    </tr>
                    <tr>
                      <td>Jenis Kelamin</td>
                      <td>: <input type="text" className="rounded-md p-2 w-96 border-gray-600" onChange={(event) => setJeniskelamin(event.target.value)} value={jeniskelamin} /></td>
                    </tr>
                    <tr>
                      <td>Divisi</td>
                      <td>: <input type="text" className="rounded-md p-2 w-96 border-gray-600" onChange={(event) => setDivisi(event.target.value)} value={divisi} /></td>
                    </tr>
                    <tr>
                      <td>Agama</td>
                      <td>: <input type="text" className="rounded-md p-2 w-96 border-gray-600" onChange={(event) => setAgama(event.target.value)} value={agama} /></td>
                    </tr>
                    <tr>
                      <td>alamat</td>
                      <td>: <input type="text" className="rounded-md p-2 w-96 border-gray-600" onChange={(event) => setAlamat(event.target.value)} value={alamat} /></td>
                    </tr>
                    <tr>
                      <td>telepon</td>
                      <td>: <input type="text" className="rounded-md p-2 w-96 border-gray-600" onChange={(event) => setTelepon(event.target.value)} value={telepon} /></td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>: <input type="text" className="rounded-md p-2 w-96 border-gray-600" onChange={(event) => setEmail(event.target.value)} value={email} /></td>
                    </tr>
                  </body>
                </table>
              </div>
            </div>

            <div className='flex items-start justify-start p-5'>
              <button
                className="text-white bg-main h-12 w-36 items-center justify-center text-3xl rounded-lg">
                Simpan
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default EditProfil;
