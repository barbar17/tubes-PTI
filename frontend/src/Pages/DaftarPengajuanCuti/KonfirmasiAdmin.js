import React, { useState, useContext, useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import axios from "axios";
import { AuthContext } from "../../Function/AuthContext";

function KonfirmasiAdmin(props) {

    const [komentar, setKomentar] = useState('');
    const [ttdAdmin, setTtdAdmin] = useState('');
    const [nama, setNama] = useState('');
    const context = useContext(AuthContext)

    const startDate = new Date(props.detailCuti.tglmulai);
    const finishDate = new Date(props.detailCuti.tglselesai);
    const totalTime = finishDate.getTime() - startDate.getTime()
    const totalDay = -Math.ceil(totalTime / (1000 * 3600 * 24)) - 1;

    const getAdmin = async () => {
        const response = await axios.get(`http://localhost:5000/admin/${context.userId}`);
        setTtdAdmin(response.data.ttdurl)
        setNama(response.data.name)
    }

    const handleSetuju = async () => {
        let data = JSON.stringify();
        if (props.adminlvl === "Admin 1") {
            data = { status: "Admin 2", ttdAdmin1: ttdAdmin, admin1: nama }
        } else if (props.adminlvl === "Admin 2") {
            data = { status: "Super", ttdAdmin2: ttdAdmin, admin2: nama }
        }

        try {
            await axios.patch(`http://localhost:5000/suratCuti/accepted/${props.detailCuti.id}`, data, {
                headers: {
                    "Content-type": "application/json"
                }
            });
        } catch (error) {
            console.log(error);
        }
        props.setTrigger(false)
        props.getSuraCutiByDivisi()
    }


    const handleTolak = async () => {
        let status = context.adminlvl === "Admin 1" ? "Ditolak oleh Officer" : "Ditolak oleh Manajer"

        try {
            await axios.patch(`http://localhost:5000/suratCuti/declined/${props.detailCuti.id}`, { status: status, komentar: komentar }, {
                headers: {
                    "Content-type": "application/json"
                }
            });

            if (props.detailCuti.jeniscuti !== "Cuti Dispensasi") {
                await axios.patch(`http://localhost:5000/pegawai/totalCuti/${props.detailCuti.userid}`, { "totalCuti": totalDay }, {
                    headers: {
                        "Content-type": "application/json"
                    }
                })
            }
        } catch (error) {
            console.log(error);
        }
        props.setTrigger(false)
        props.getSuraCutiByDivisi()
    }

    useEffect(() => {
        getAdmin()
    }, [context])


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
                            <td>
                                <span>Total Hari</span>
                            </td>
                            <td> : {totalDay ? -totalDay + " Hari" : 0}
                            </td>
                        </tr>
                        <tr>
                            <td>Alasan Cuti</td>
                            <td>: {props.detailCuti.alasan}</td>
                        </tr>
                        <tr>
                            <td>file tambahan</td>
                            <td>
                                {
                                    props.detailCuti.fileurl ? (
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
                            <td>Komentar</td>
                            <td className="w-[500px]">
                                <textarea
                                    onChange={(event) => setKomentar(event.target.value)}
                                    className="w-full h-24 text-xl bg-slate-300 px-1 py-2"
                                />
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td className="space-x-3">
                                <button onClick={() => handleSetuju()} className="my-auto text-white bg-indigo-500 h-8 w-24 items-center justify-center text-lg rounded-lg">
                                    Setuju
                                </button>
                                <button onClick={() => handleTolak()} className="my-auto text-white bg-red-500 h-8 w-24 items-center justify-center text-lg rounded-lg">
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