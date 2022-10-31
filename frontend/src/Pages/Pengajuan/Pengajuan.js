import React, { useState } from "react";
import axios from 'axios';

function Pengajuan() {
  const [nama, setNama] = useState('')
  const [id, setId] = useState('')
  const [divisi, setDivisi] = useState('')
  const [jatahcuti, setJatahcuti] = useState('')
  const [tglmulai, setTglmulai] = useState('')
  const [tglselesai, setTglselesai] = useState('')
  const [jeniscuti, setJeniscuti] = useState('')
  const [alasancuti, setAlasancuti] = useState('')
  const now = new Date();
  const currentDate = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`

  const savePengajuanCuti = async (event) => {
    event.preventDefault();
    const formData = JSON.stringify({
      "name": nama,
      "userid": id,
      "divisi": divisi,
      "jatahcuti": jatahcuti,
      "tglpengajuan": currentDate,
      "tglmulai": tglmulai,
      "tglselesai": tglselesai,
      "jeniscuti": jeniscuti,
      "alasan": alasancuti,
      "status": "Sedang Diproses",
    });
    try {
      await axios.post("http://localhost:5000/suratCuti", formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

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
                    onChange={(event) => setNama(event.target.value)}
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
                    onChange={(event) => setId(event.target.value)}
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
                    onChange={(event) => setDivisi(event.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <span>Jatah Cuti</span>
                </td>
                <td> :
                  <input
                    type="text"
                    className="rounded-md ml-2 border-slate-400 border py-1 px-2"
                    onChange={(event) => setJatahcuti(event.target.value)}
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
                    <option>Libur Nasional</option>
                    <option>Hari Minggu</option>
                    <option>Cuti Tahunan</option>
                    <option>Cuti Izin</option>
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
                  <input
                    type="file"
                    className="rounded-lg ml-2 border-slate-400 border"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <button
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
