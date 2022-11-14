import React from "react";
import { IoIosClose } from "react-icons/io";

function KonfirmasiAdmin(props) {

    console.log(props)

    return props.trigger ? (
        <div className="flex flex-col my-10 border border-gray-400 shadow-2xl rounded-xl">
            <div className="w-full flex bg-main h-20 items-center text-white text-3xl justify-between px-8 rounded-t-xl">
                <span className="px-8">Detail Pengajuan Cuti</span>
                <button onClick={() => props.setTrigger(false)}>
                    <IoIosClose className="text-5xl" />
                </button>
                {props.children}
            </div>
            <div className="bg-white text-xl rounded-b-xl p-5">
                <table className="w-full flex  flex-col space-y-2">
                    <tbody className="border-b-2">
                        <tr >
                            <td className="w-52">Nama</td>
                            <td>: {props.detailCuti.name}</td>
                        </tr>
                        <tr>
                            <td className="w-52">Id</td>
                            <td>: {props.detailCuti.userid}</td>
                        </tr>
                        <tr>
                            <td className="w-52">Divisi</td>
                            <td>: {props.detailCuti.divisi}</td>
                        </tr>
                        <tr>
                            <td className="w-52">Jatah Cuti</td>
                            <td>: {props.detailCuti.jatahcuti} Hari</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr >
                            <td className="w-52"><b>Data Cuti</b></td>
                        </tr>
                        <tr>
                            <td>Tanggal Diajukan</td>
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
                            <td>Komentar</td>
                            <td className="w-[500px]">
                                <textarea
                                    type="text"
                                    className="w-full h-24 text-xl bg-slate-300 px-1 py-2"
                                />
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td className="space-x-3">
                                <button className="my-auto text-white bg-indigo-500 h-8 w-24 items-center justify-center text-lg rounded-lg">
                                    Setuju
                                </button>
                                <button className="my-auto text-white bg-red-500 h-8 w-24 items-center justify-center text-lg rounded-lg">
                                    Tolak
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    ) : (
        ""
    );
}

export default KonfirmasiAdmin;