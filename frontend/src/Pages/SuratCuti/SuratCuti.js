import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import Footer from '../Footer/Footer';
import axios from 'axios';

function SuratCuti() {
    const { id } = useParams();

    const navigation = useNavigate()

    const now = new Date();
    const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    const month = months[now.getMonth()]
    const currentDate = `${now.getDate()} ${month} ${now.getFullYear()}`

    const [nama, setNama] = useState('');
    const [ttdPegawai, setTtdPegawai] = useState('');
    const [admin1, setAdmin1] = useState('');
    const [ttdAdmin1, setTtdAdmin1] = useState('');
    const [admin2, setAdmin2] = useState('');
    const [ttdAdmin2, setTtdAdmin2] = useState('');
    const [superAdmin, setSuperAdmin] = useState('');
    const [ttdSuperAdmin, setTtdSuperAdmin] = useState('');
    const [alasan, setAlasan] = useState('');
    const [jeniscuti, setJenisCuti] = useState('');
    const [tglmulai, setTglMulai] = useState('');
    const [tglselesai, setTglSelesai] = useState('');
    const [noSurat, setNoSurat] = useState('')

    const getPengajuanCutiDetail = async () => {
        const response = await axios.get(`http://localhost:5000/suratCuti/${id}`);
        setNama(response.data.name)
        setTtdPegawai(response.data.ttdpegawai)
        setAdmin1(response.data.admin1)
        setTtdAdmin1(response.data.ttdadmin1)
        setAdmin2(response.data.admin2)
        setTtdAdmin2(response.data.ttdadmin2)
        setSuperAdmin(response.data.super)
        setTtdSuperAdmin(response.data.ttdsuper)
        setAlasan(response.data.alasan)
        setJenisCuti(response.data.jeniscuti)
        setTglMulai(response.data.tglmulai)
        setTglSelesai(response.data.tglselesai)
        setNoSurat(response.data.nosurat)
    }

    const handleSetuju = async () => {
        try {
            await axios.patch(`http://localhost:5000/suratCuti/accepted/${id}`, { status: 'Diterima', noSurat: noSurat }, {
                headers: {
                    "Content-type": "application/json"
                }
            });
        } catch (error) {
            console.log(error);
        }
        navigation('/super/daftar_pengajuan_cuti')
    }

    const handleTolak = async () => {
        try {
            await axios.patch(`http://localhost:5000/suratCuti/declined/${id}`, { status: "Ditolak" }, {
                headers: {
                    "Content-type": "application/json"
                }
            });
        } catch (error) {
            console.log(error);
        }
        navigation('/super/daftar_pengajuan_cuti')
    }

    useEffect(() => {
        getPengajuanCutiDetail()
    }, [id])


    return (
        <div className="min-h-screen w-full bg-login font-display">
            <div className="min-h-screen flex flex-col justify-between">
                <div className="container flex flex-col grow mx-auto my-10 border bg-slate-200 border-gray-400 shadow-2xl items-center">
                    <div className="w-full flex bg-main h-20 items-center text-white text-5xl px-8">
                        <IoArrowBackSharp onClick={() => navigation(-1)} className="hover:cursor-pointer" />
                        <span className="px-8">Surat Cuti</span>
                    </div>
                    <div className='w-11/12 flex flex-col bg-white grow mt-10 my-5 px-12 text-xl py-12'>
                        <div className='text-2xl'>
                            <table>
                                <tr>
                                    <td>Nomor</td>
                                    <td className='pl-2'>: {" "}
                                        <input
                                            className="rounded-lg border-slate-400 border px-2"
                                            type={'text'}
                                            value={noSurat}
                                            onChange={(event) => setNoSurat(event.target.value)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Tanggal</td>
                                    <td className='pl-2'>: {currentDate}</td>
                                </tr>
                            </table>
                        </div>
                        <hr className='border-[1px] border-black mt-2' />
                        <p className='mt-12 mb-3 text-2xl'>KEPERLUAN</p>
                        <div>
                            <table>
                                <tr>
                                    <td>Jenis Cuti</td>
                                    <td className='pl-2'>: {jeniscuti}</td>
                                </tr>
                                <tr>
                                    <td>Alasan Cuti</td>
                                    <td className='pl-2'>: {alasan}</td>
                                </tr>
                                <tr>
                                    <td>Tanggal Mulai</td>
                                    <td className='pl-2'>: {tglmulai}</td>
                                </tr>
                                <tr>
                                    <td>Tanggal Selesai</td>
                                    <td className='pl-2'>: {tglselesai}</td>
                                </tr>
                            </table>
                        </div>
                        <div className='flex space-x-12 mt-12 justify-center'>
                            <div className='w-1/3 h-52 border-[1px] border-black flex flex-col justify-between'>
                                <div className='text-base flex w-full h-1/5 border-b-[1px] border-black p-1 justify-center items-center'>Diajukan Tanggal: 21 November 2022</div>
                                <div className='w-full h-2/4 flex flex-col items-center justify-center'>
                                    <img src={ttdPegawai} className="h-full object-cover" />
                                </div>
                                <div className='text-base flex flex-col w-full h-1/4 border-t-[1px] border-black justify-center items-center'>
                                    <span>Karyawan yang bersangkutan</span>
                                    <u className='text-lg font-bold'>{nama}</u>
                                </div>
                            </div>
                            <div className='w-1/3 h-52 border-[1px] border-black flex flex-col justify-between'>
                                <div className='text-base flex w-full h-1/5 border-b-[1px] border-black p-1 justify-center items-center'>Diajukan Tanggal: 21 November 2022</div>
                                <div className='w-full h-2/4 flex flex-col items-center justify-center'>
                                    <img src={ttdAdmin1} className="h-full object-cover" />
                                </div>
                                <div className='text-base flex flex-col w-full h-1/4 border-t-[1px] border-black justify-center items-center'>
                                    <span>Karyawan yang bersangkutan</span>
                                    <u className='text-lg font-bold'>{admin1}</u>
                                </div>
                            </div>
                        </div>
                        <div className='flex space-x-12 mt-12 justify-center '>
                            <div className='w-1/3 h-52 border-[1px] border-black flex flex-col justify-between'>
                                <div className='text-base flex w-full h-1/5 border-b-[1px] border-black p-1 justify-center items-center'>Diajukan Tanggal: 21 November 2022</div>
                                <div className='w-full h-2/4 flex flex-col items-center justify-center'>
                                    <img src={ttdAdmin2} className="h-full object-cover" />
                                </div>
                                <div className='text-base flex flex-col w-full h-1/4 border-t-[1px] border-black justify-center items-center'>
                                    <span>Karyawan yang bersangkutan</span>
                                    <u className='text-lg font-bold'>{admin2}</u>
                                </div>
                            </div>
                            <div className='w-1/3 h-52 border-[1px] border-black flex flex-col justify-between'>
                                <div className='text-base flex w-full h-1/5 border-b-[1px] border-black p-1 justify-center items-center'>Diajukan Tanggal: 21 November 2022</div>
                                <div className='w-full h-2/4 flex flex-col items-center justify-center'>
                                    <img src={ttdSuperAdmin} className="h-full object-cover" />
                                </div>
                                <div className='text-base flex flex-col w-full h-1/4 border-t-[1px] border-black justify-center items-center'>
                                    <span>Karyawan yang bersangkutan</span>
                                    <u className='text-lg font-bold'>{superAdmin}</u>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-11/12 flex justify-end space-x-4 mb-5'>
                        <button onClick={() => handleTolak()} className="my-auto text-white bg-card-red h-10 w-24 items-center justify-center text-lg rounded-lg">
                            Tolak
                        </button>
                        <button onClick={() => handleSetuju()} className="my-auto text-white bg-card-blue h-10 w-24 items-center justify-center text-lg rounded-lg">
                            Simpan
                        </button>
                    </div>
                </div>
                <Footer />
            </div>
        </div >
    )
}

export default SuratCuti