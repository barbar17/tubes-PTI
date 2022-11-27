import React, { useState, useEffect } from "react";
import { GoCalendar } from "react-icons/go";
import { BiSearchAlt2 } from "react-icons/bi";
import { useSearchParams } from 'react-router-dom'
import PopUpBatalkan from "./PopUpBatalkan";
import axios from "axios";

function LaporanCutiSuperAdmin() {
  const [buttonPopUpBatalkan, setButtonPopUpBatalkan] = useState(false);

  const [suratCuti, setSuratCuti] = useState();
  const [detailCuti, setDetailCuti] = useState();

  const getSuratCuti = async () => {
    const response = await axios.get('http://localhost:5000/suratCuti/laporan');
    setSuratCuti(response.data)
  }

  let [searchParams, setSearchParams] = useSearchParams();

  const now = new Date();
  const currentDate = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`

  const handlePopUp = (item) => {
    setButtonPopUpBatalkan(true)
    setDetailCuti(item)
  }

  useEffect(() => {
    getSuratCuti();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="flex flex-col w-full relative">
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10">
        <PopUpBatalkan trigger={buttonPopUpBatalkan} detailCuti={detailCuti} setTrigger={setButtonPopUpBatalkan} getSuraCuti={getSuratCuti} />
      </div>

      <div className="w-full p-10 h-full">
        <div className="w-full">
          <div className="bg-main w-full text-white py-2 px-5 text-2xl rounded-tl-lg rounded-tr-lg">Daftar Pengajuan Cuti</div>
          <div className="flex flex-col px-5 bg-white pb-3">
            <div className="flex flex-col p-5 bg-white">
              <h1 className="font-bold text-2xl mb-5">Filter Berdasarkan Tanggal Mulai Cuti</h1>
              <div className="flex space-x-10 mb-5">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="enddate">Tanggal Mulai</label>
                  <div className="relative w-80">
                    <input
                      id="enddate"
                      type={"date"}
                      className="w-full h-10 bg-slate-100 outline outline-2 outline-slate-400 rounded-md pl-14 pr-8 text-sm focus:shadow-slate-400 focus:shadow-md transition-all"
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
                      <GoCalendar className="text-2xl" color="black" />
                    </div>
                  </div>
                </div>

                {/* <div className="flex flex-col space-y-2 mt-8">
                  <div className="relative w-10">
                    <button className="w-full h-10 bg-slate-100 outline outline-2 outline-slate-400 rounded-md pl-14 pr-8 text-sm focus:shadow-slate-400 focus:shadow-md transition-all">
                      <div className="absolute top-1/2 -translate-y-1/2 left-2 pr-1 h-full flex items-center">
                        <BiSearchAlt2 className="text-2xl mr-2" /> Cari
                      </div>
                    </button>
                  </div>
                </div> */}
              </div>

              <table className="table-auto w-full text-center text-xl ">
                <thead>
                  <tr className="border-y-2">
                    <th className="py-2">#</th>
                    <th>ID</th>
                    <th>Nama</th>
                    <th>Tgl Pengajuan</th>
                    <th>Tgl Mulai</th>
                    <th>Selesai</th>
                    <th>Alasan</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    suratCuti?.filter((item) => {
                      let filter = searchParams.get("filter");
                      if (!filter) return true;
                      let tglmulai = item.tglmulai.toLowerCase();
                      return (
                        tglmulai.includes(filter.toLowerCase())
                      )
                    }).map((item, index) => {
                      return (
                        <tr key={index}>
                          <td className="py-2">{index + 1}</td>
                          <td>{item.userid}</td>
                          <td>{item.name}</td>
                          <td>{item.tglpengajuan.split('-').reverse().join("-")}</td>
                          <td>{item.tglmulai.split('-').reverse().join("-")}</td>
                          <td>{item.tglselesai.split('-').reverse().join("-")}</td>
                          <td>{item.alasan}</td>
                          <td>
                            <div className="w-full h-full flex justify-evenly">
                              <button onClick={() => handlePopUp(item)} disabled={item.tglmulai < currentDate ? true : false} className="disabled:hover:cursor-not-allowed disabled:opacity-80 my-auto text-white bg-indigo-500 h-8 w-24 items-center justify-center text-lg rounded-lg">
                                Batalkan
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
        </div>
      </div>
    </div>
  );
}

export default LaporanCutiSuperAdmin;
