import React from "react";
import KonfirmasiAdmin from "./KonfirmasiAdmin";
import { useState } from "react";

function DaftarPengajuanCutiAdmin() {
    const [buttonKonfirmAdm, setButtonKonfirmAdm] = useState(false);
    return (
        <div className="flex flex-col w-full">
            <div className="flex justify-around w-full">
                <div className="absolute w-4/5 -mt-64 ml-[900px]">
                    <KonfirmasiAdmin
                        trigger={buttonKonfirmAdm}
                        setTrigger={setButtonKonfirmAdm}
                    />
                </div>
            </div>

            <div className="w-full p-10 h-full">
                <div className="w-full">
                    <div className="bg-main w-full text-white py-2 px-5 text-2xl rounded-tl-lg rounded-tr-lg">Data Pegawai</div>
                    <table className="table-auto w-full text-center bg-white text-xl ">
                        <thead>
                            <tr className="border-b-2">
                                <th className="py-2">#</th>
                                <th>ID</th>
                                <th>Nama</th>
                                <th>Tgl Pengajuan</th>
                                <th>Tgl Mulai</th>
                                <th>Selesai</th>
                                <th>Alasan</th>
                                <th>Opsi</th>
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
                                    <div className="w-full h-full flex justify-evenly">
                                        <button className="my-auto text-white bg-card-green h-8 w-24 items-center justify-center text-lg rounded-lg">
                                            Profil
                                        </button>
                                        <button onClick={() => setButtonKonfirmAdm(true)} className="my-auto text-white bg-btn-purple h-8 w-24 items-center justify-center text-lg rounded-lg">
                                            Detail
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default DaftarPengajuanCutiAdmin;