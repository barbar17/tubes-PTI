import React from "react";
import { useState } from "react";
import { GoCalendar } from "react-icons/go";
import PopUpBatalkan from "./PopUpBatalkan";

function LaporanCutiAdmin() {
    const [buttonPopUpBatalkan, setButtonPopUpBatalkan] = useState(false);
    return (
        <div className="flex flex-col w-full">
            <div className="flex justify-around w-full">
                <div className="absolute w-4/5 -mt-64 ml-[900px]">
                    <PopUpBatalkan
                        trigger={buttonPopUpBatalkan}
                        setTrigger={setButtonPopUpBatalkan}
                    />
                </div>
            </div>

            <div className="w-full p-10 h-full">
                <div className="w-full">
                    <div className="bg-main w-full text-white py-2 px-5 text-2xl rounded-tl-lg rounded-tr-lg">Daftar Pengajuan Cuti</div>
                    <div className="flex flex-col px-5 bg-white pb-3">
                        <div className='flex flex-col p-5 bg-white'>
                            <div className="flex col-auto">
                                <div className='relative w-80' >
                                    <input
                                        type={'date'}
                                        className="w-full h-10 bg-slate-100 outline outline-2 outline-slate-400 rounded-md pl-14 pr-8 text-sm focus:shadow-slate-400 focus:shadow-md transition-all"
                                    />
                                    <div className="absolute top-1/2 -translate-y-1/2 left-2 pr-1 border-r-2 h-full border-r-slate-400 flex items-center">
                                        <GoCalendar className='text-2xl' color='black' />
                                        <div className="text bg-white"> - </div>
                                        <input
                                            type={'date'}
                                            className="w-full h-10 bg-slate-100 outline outline-2 outline-slate-400 rounded-md pl-14 pr-8 text-sm focus:shadow-slate-400 focus:shadow-md transition-all"
                                        />
                                        <div className="absolute top-1/2 -translate-y-1/2 left-2 pr-1 border-r-2 h-full border-r-slate-400 flex items-center">
                                            <GoCalendar className='text-2xl' color='black' />
                                        </div>
                                    </div>
                                </div>
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
                                    <tr>
                                        <td className="py-2">1</td>
                                        <td>12345</td>
                                        <td>widodo</td>
                                        <td>10/01/2022</td>
                                        <td>11/01/2022</td>
                                        <td>15/01/2022</td>
                                        <td>sakit</td>
                                        <td>
                                            <button onClick={() => setButtonPopUpBatalkan(true)} className="my-auto text-white bg-indigo-500 h-8 w-24 items-center justify-center text-lg rounded-lg">
                                                Batalkan
                                            </button>
                                        </td>
                                    </tr>
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