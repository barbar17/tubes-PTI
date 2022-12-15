import React, { useState, useEffect, useContext } from "react";
import { GoCalendar } from "react-icons/go";
import PopUpBatalkan from "./PopUpBatalkan";
import { useSearchParams } from 'react-router-dom'
import { AuthContext } from "../../Function/AuthContext";
import axios from "axios";
import ReactHTMLTableToExcel from 'react-html-table-to-excel'
import { BiSearchAlt } from 'react-icons/bi'

function LaporanCutiAdmin() {
  const [buttonPopUpBatalkan, setButtonPopUpBatalkan] = useState(false);
  const props = useContext(AuthContext)

  const [suratCuti, setSuratCuti] = useState();

  const getSuraCutiByDivisi = async () => {
    const response = await axios.get(`http://localhost:5000/suratCuti/laporan/${props.divisi}`);
    setSuratCuti(response.data)
  }

  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getSuraCutiByDivisi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.divisi])

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-around w-full">
        <div className="absolute w-4/5 -mt-64 ml-[900px]">
          <PopUpBatalkan trigger={buttonPopUpBatalkan} setTrigger={setButtonPopUpBatalkan} />
        </div>
      </div>

      <div className="w-full p-10 h-full">
        <div className="w-full">
          <div className="bg-main w-full text-white py-2 px-5 text-2xl rounded-tl-lg rounded-tr-lg">Daftar Pengajuan Cuti</div>
          <div className="flex flex-col px-5 bg-white pb-3">
            <div className="flex flex-col p-5 bg-white">
              <h1 className="font-bold text-2xl mb-5">Filter Berdasarkan Tanggal Mulai Cuti</h1>
              <div className="flex space-x-10 mb-5">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="enddate">Bulan Mulai</label>
                  <div className="relative w-80">
                    <input
                      id="enddate"
                      type={"month"}
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

                <div className="flex flex-col space-y-2 mt-8">
                  <div className="relative w-80">
                    <div className="absolute top-1/2 -translate-y-1/2 left-2 pr-1 border-r-2 h-full border-r-slate-400 flex items-center">
                      <BiSearchAlt className='text-2xl' color='black' />
                    </div>
                    <input
                      type={'text'}
                      className="w-full h-10 bg-slate-100 outline outline-2 outline-slate-400 rounded-md pl-14 pr-10 text-sm focus:shadow-slate-400 focus:shadow-md transition-all"
                      placeholder='Ketik untuk mencari... '
                      onChange={(event) => {
                        let find = event.target.value;
                        if (find) {
                          setSearchParams({ find });
                        } else {
                          setSearchParams({});
                        }
                      }}
                      value={searchParams.get("find") || ""}
                    />
                  </div>
                </div>

                <ReactHTMLTableToExcel
                  className="bg-card-green rounded-md h-10 px-2 text-white self-end"
                  id="table-to-excel"
                  table='tabel'
                  filename="Laporan_Cuti"
                  sheet="Laporan"
                  buttonText="Download Laporan Cuti"
                />
              </div>

              <table className="table-auto w-full text-center text-xl " id="tabel">
                <thead>
                  <tr className="border-y-2">
                    <th className="py-2">#</th>
                    <th>ID</th>
                    <th>Nama</th>
                    <th>Tgl Pengajuan</th>
                    <th>Tgl Mulai</th>
                    <th>Selesai</th>
                    <th>Alasan</th>
                    {/* <th>Aksi</th> */}
                  </tr>
                </thead>
                <tbody>
                  {
                    suratCuti?.filter((item) => {
                      let filter = searchParams.get("filter");
                      let find = searchParams.get("find");
                      if (!filter && !find) return true;
                      let tglmulai = item.tglmulai;
                      let name = item?.name?.toLowerCase();
                      return (
                        tglmulai.includes(filter) ||
                        name.includes(find?.toLowerCase())
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
                          {/* <td>
                            <div className="w-full h-full flex justify-evenly">
                              <button onClick={() => setButtonPopUpBatalkan(true)} className="my-auto text-white bg-indigo-500 h-8 w-24 items-center justify-center text-lg rounded-lg">
                                Batalkan
                              </button>
                            </div>
                          </td> */}
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

export default LaporanCutiAdmin;
