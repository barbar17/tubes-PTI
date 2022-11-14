import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../../Function/AuthContext";

function Pengajuan() {
  const props = useContext(AuthContext)
  console.log(props)
  const [nama, setNama] = useState('')
  const [id, setId] = useState('')
  const [divisi, setDivisi] = useState('')
  const [jatahcuti, setJatahcuti] = useState(20)
  const [tglmulai, setTglmulai] = useState('')
  const [tglselesai, setTglselesai] = useState('')
  const [jeniscuti, setJeniscuti] = useState('')
  const [alasancuti, setAlasancuti] = useState('')
  const [file, setFile] = useState('')
  const [previewfile, setPreviewFile] = useState('')
  const [cutiDiambil, setCutiDiambil] = useState('')

  const now = new Date();
  const currentDate = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`

  const startDate = new Date(tglmulai);
  const finishDate = new Date(tglselesai);
  const totalTime = finishDate.getTime() - startDate.getTime()
  const totalDay = Math.ceil(totalTime / (1000 * 3600 * 24));

  const go = useNavigate()

  const loadFoto = (event) => {
    const foto = event.target.files[0];
    setFile(foto);
    setPreviewFile(URL.createObjectURL(foto));
  }

  const getPegawaiById = async () => {
    const response = await axios.get(`http://localhost:5000/pegawai/${props.userId}`);
    setCutiDiambil(response.data.cutidiambil)
    setNama(response.data.name)
    setId(response.data.id)
    setDivisi(response.data.divisi)
  }

  const savePengajuanCuti = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("file", file);
    formData.append("name", nama)
    formData.append("userid", id)
    formData.append("divisi", divisi)
    formData.append("jatahcuti", jatahcuti)
    formData.append("tglpengajuan", currentDate)
    formData.append("tglmulai", tglmulai)
    formData.append("tglselesai", tglselesai)
    formData.append("jeniscuti", jeniscuti)
    formData.append("alasan", alasancuti)
    formData.append("status", "Sedang Diproses")

    try {
      await axios.post("http://localhost:5000/suratCuti", formData, {
        headers: {
          "Content-type": "multipart/form-data"
        }
      });

      await axios.patch(`http://localhost:5000/pegawai/totalCuti/${props.userId}`, { "totalCuti": totalDay }, {
        headers: {
          "Content-type": "application/json"
        }
      });

      go('/user/beranda')
    } catch (error) {
      console.log(error.response.data);
    }
  }

  useEffect(() => {
    getPegawaiById()
  }, [props])

  return (
    <div className="flex flex-col w-full items-center justify-center py-10 px-20 gap-20">
      <div className="w-full">
        <div className="bg-main w-full text-white py-2 px-5 text-2xl rounded-tl-lg rounded-tr-lg text-center">
          Formulir Pengajuan Cuti
        </div>
        <form className="w-full bg-white text-xl p-10" onSubmit={savePengajuanCuti}>
          <table className="border-separate border-spacing-y-2 border-spacing-x-5">
            <tbody>
              <tr>
                <td>
                  <span>Nama</span>
                </td>
                <td> :
                  <input
                    type="text"
                    className="rounded-md ml-2 border-slate-400 border py-1 px-2 "
                    value={nama}
                    disabled
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <span>ID</span>
                </td>
                <td> :
                  <input
                    type="text"
                    className="rounded-md ml-2 border-slate-400 border py-1 px-2"
                    value={id}
                    disabled
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <span>Divisi</span>
                </td>
                <td> :
                  <input
                    type="text"
                    className="rounded-md ml-2 border-slate-400 border py-1 px-2"
                    value={divisi}
                    disabled
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <span>Jatah Cuti Tahunan</span>
                </td>
                <td> :
                  <input
                    type="text"
                    className="rounded-md ml-2 border-slate-400 border py-1 px-2"
                    value={(jatahcuti - cutiDiambil) + " Hari"}
                    disabled
                    readOnly
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <hr className="border-gray-400 border-2 my-5" />

          <table className="border-separate border-spacing-y-2 border-spacing-x-5">
            <tbody>
              <tr>
                <td>
                  <div>
                    <b>Data Cuti</b>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <span>Tanggal Mulai</span>
                </td>
                <td> : <input type="date" className="form-control" onChange={(event) => setTglmulai(event.target.value)} />
                </td>
              </tr>
              <tr>
                <td>
                  <span>Tanggal Selesai</span>
                </td>
                <td> : <input type="date" className="form-control" onChange={(event) => setTglselesai(event.target.value)} />
                </td>
              </tr>
              <tr>
                <td>
                  <span>Jenis Cuti</span>
                </td>
                <td> :
                  <select className="border ml-2 border-slate-400 rounded-lg" onChange={(event) => setJeniscuti(event.target.value)} >
                    <option>Hari Minggu</option>
                    <option>Cuti Tahunan</option>
                    <option>Cuti Izin</option>
                    <option>Libur Nasional</option>
                    <option>Cuti Dispensasi</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <span>Alasan Cuti</span>
                </td>
                <td> :
                  <input
                    type="text"
                    className="rounded-lg ml-2 border-slate-400 border py-1 px-2"
                    onChange={(event) => setAlasancuti(event.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <span>File Tambahan</span>
                </td>
                <td> :
                  <input type={'file'} id="files" accept={'image/*'} onChange={loadFoto} className="rounded-lg ml-2 border-slate-400 border" />
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    type="submit"
                    className="text-white bg-main h-12 w-32 rounded-lg"
                  >
                    Submit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}

export default Pengajuan;
