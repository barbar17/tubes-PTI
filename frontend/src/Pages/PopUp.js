import axios from "axios";
import React from "react";
import { IoIosClose } from "react-icons/io";

function PopUp(props) {

  const isFileUrl = props.detailCuti.fileurl

  const startDate = new Date(props.detailCuti.tglmulai);
  const finishDate = new Date(props.detailCuti.tglselesai);
  const totalTime = finishDate.getTime() - startDate.getTime()
  const totalDay = Math.ceil(totalTime / (1000 * 3600 * 24)) * -1;

  const deletePengajuanCuti = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/suratCuti/${id}`)

      await axios.patch(`http://localhost:5000/pegawai/totalCuti/${props.detailCuti.userid}`, { "totalCuti": totalDay }, {
        headers: {
          "Content-type": "application/json"
        }
      });

      props.getPengajuanCuti();
      props.setTrigger(false);
    } catch (error) {
      console.log(error)
    }
  }

  return props.trigger ? (
    <div className="flex flex-col my-10 border border-gray-400 shadow-2xl rounded-xl">
      <div className="w-full flex bg-main h-20 items-center text-white text-3xl px-8 rounded-t-xl justify-between">
        <span className="px-8">Detail Pengajuan Cuti</span>
        <button onClick={() => props.setTrigger(false)}>
          <IoIosClose className="text-5xl" />
        </button>
        {props.children}
      </div>
      <div className=" bg-white text-xl rounded-b-xl p-5">
        <table className="w-full flex  flex-col space-y-2">
          <thead className="border-b-2">
            <tr>
              <td className="w-52">Nama</td>
              <td>: {props.detailCuti.name}</td>
            </tr>
            <tr>
              <td>ID</td>
              <td>: {props.detailCuti.userid}</td>
            </tr>
            <tr>
              <td>Divisi</td>
              <td>: {props.detailCuti.divisi}</td>
            </tr>
            <tr>
              <td>Jatah Cuti</td>
              <td>: {props.detailCuti.jatahcuti}</td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <b>Data Cuti</b>
              </td>
            </tr>
            <tr>
              <td className="w-52">Tanggal Diajukan</td>
              <td>: {props.detailCuti.tglpengajuan.split('-').reverse().join("-")}</td>
            </tr>
            <tr>
              <td>Tanggal Mulai</td>
              <td>: {props.detailCuti.tglmulai.split('-').reverse().join("-")}</td>
            </tr>
            <tr>
              <td>Tanggal Selesai</td>
              <td>: {props.detailCuti.tglselesai.split('-').reverse().join("-")}</td>
            </tr>
            <tr>
              <td>Alasan Cuti</td>
              <td>: {props.detailCuti.alasan}</td>
            </tr>
            <tr>
              <td>file tambahan</td>
              <td>
                {
                  isFileUrl ? (
                    <button className="h-fit w-fit px-2 rounded-sm bg-gray-300 hover:bg-gray-700 hover:text-white" onClick={() => window.open(props.detailCuti?.fileurl, "_blank")}>
                      Lihat
                    </button>
                  ) : (
                    <div>
                      <span>: Tidak ada</span>
                    </div>
                  )
                }
              </td>
            </tr>
            <tr>
              <td>komentar</td>
            </tr>
          </tbody>
        </table>
        <div className="w-full h-24 text-xl bg-slate-300">
          <p className="ml-4">{props.detailCuti.komentar}</p>
        </div>
        <button onClick={() => deletePengajuanCuti(props.detailCuti.id)} className="text-white bg-card-red mt-5 h-8 w-24 items-center justify-center text-lg rounded-lg">
          Hapus
        </button>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default PopUp;
