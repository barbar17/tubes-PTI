import React, { useEffect } from "react";
import axios from 'axios';
import { FiUser, FiUserX } from "react-icons/fi";
import { BsWallet, BsWallet2 } from "react-icons/bs";
import PopUp from "../PopUp";
import { useState } from "react";
import { useOutletContext } from 'react-router-dom'

function BerandaUser() {
    const id = useOutletContext().userId

    const [buttonPopUp, setButtonPopUp] = useState(false);

    const [pengajuanCuti, setPengajuanCuti] = useState();

    const [detailCuti, setDetailCuti] = useState('');
    const [cutiDiambil, setCutiDiambil] = useState('')

    const handlePopUp = (item) => {
        setButtonPopUp(true)
        setDetailCuti(item)
    }

    const getPegawaiById = async () => {
        const response = await axios.get(`http://localhost:5000/pegawai/${id}`);
        setCutiDiambil(response.data.cutidiambil)
    }

    const getPengajuanCuti = async () => {
        const response = await axios.get(`http://localhost:5000/suratCuti/pegawai/${id}`);
        setPengajuanCuti(response.data)
    }

    useEffect(() => {
        getPengajuanCuti()
        getPegawaiById()
        // eslint-disable-next-line
    }, [id])

    return (
        <div className="flex flex-col w-full items-center justify-center py-10 px-20 gap-20">
            <div className="flex justify-around w-full">
                <div className="absolute w-[800px] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                    <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp} detailCuti={detailCuti} getPengajuanCuti={getPengajuanCuti} />
                </div>
                <div className="flex w-[500px] bg-card-green rounded-lg justify-end">
                    <div className="flex items-center justify-between bg-white w-[490px] rounded-tr-lg rounded-br-lg p-10">
                        <div className="flex flex-col ">
                            <span className="text-card-green text-2xl">Total Cuti Tersedia</span>
                            <span className="text-4xl">20 Hari</span>
                        </div>
                        <BsWallet className="text-8xl" />
                    </div>
                </div>

                <div className="flex w-[500px] bg-card-red rounded-lg justify-end">
                    <div className="flex items-center justify-between bg-white w-[490px] rounded-tr-lg rounded-br-lg p-10">
                        <div className="flex flex-col ">
                            <span className="text-card-red text-2xl">Sisa Cuti Tersedia</span>
                            <span className="text-4xl">{20 - cutiDiambil} Hari</span>
                        </div>
                        <BsWallet2 className="text-8xl" />
                    </div>
                </div>
            </div>

            <div className="w-full">
                <div className="bg-main w-full text-white py-2 px-5 text-2xl rounded-tl-lg rounded-tr-lg">Pengajuan Cuti</div>
                <table className="table-auto w-full text-center bg-white text-xl ">
                    <thead>
                        <tr className="border-b-2">
                            <th className="py-2">#</th>
                            <th>ID</th>
                            <th>Tgl Pengajuan</th>
                            <th>Tgl Mulai</th>
                            <th>Tgl Selesai</th>
                            <th>Alasan</th>
                            <th>Status</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pengajuanCuti?.map((item, index) => {
                                return (
                                    <tr key={index} className="border-b-2">
                                        <td className="py-2">{index + 1}</td>
                                        <td>{item.id}</td>
                                        <td>{item.tglpengajuan.split('-').reverse().join("-")}</td>
                                        <td>{item.tglmulai.split('-').reverse().join("-")}</td>
                                        <td>{item.tglselesai.split('-').reverse().join("-")}</td>
                                        <td>{item.alasan}</td>
                                        <td>{item.status}</td>
                                        <td>
                                            <button onClick={() => handlePopUp(item)} className="my-auto text-white bg-indigo-500 h-8 w-24 items-center justify-center text-lg rounded-lg">
                                                Detail
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default BerandaUser;
