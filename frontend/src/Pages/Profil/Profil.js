import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { IoArrowBackSharp } from "react-icons/io5";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from '../Footer/Footer';

function Profil() {

    const navigation = useNavigate()
    const { id } = useParams();

    const [profil, setProfil] = useState();

    const getProfilPegawai = async () => {
        const response = await axios.get(`http://localhost:5000/pegawai/${id}`);
        setProfil(response.data)
        console.log(response.data)
    }

    useEffect(() => {
        getProfilPegawai();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="min-h-screen w-full bg-slate-200 font-display">
            <div className="min-h-screen flex flex-col justify-between">
                <div className="container flex flex-col grow mx-auto my-10 border border-gray-400 shadow-2xl">
                    <div className="w-full flex bg-main h-20 items-center text-white text-5xl px-8">
                        <IoArrowBackSharp onClick={() => navigation(-1)} className="hover:cursor-pointer" />
                        <span className="px-8">Biodata Pegawai</span>
                    </div>
                    <div className="flex w-full px-10 grow items-stretch justify-between">
                        <div className='flex'>
                            <div className="flex flex-col item-center justify-center mx-10 space-y-10">
                                <img src="/gambar/robi.jpeg" alt='fotoprofil' className="w-[250px] h-[333px] object-cover object-center" />
                                <img src="/gambar/ttd.jpeg" alt='ttd' className="w-[250px] h-fit object-cover object-center" />
                            </div>

                            <div className="flex flex-col h-full items-center justify-center">
                                <table className='border-separate border-spacing-2 text-2xl'>
                                    <body>
                                        <tr>
                                            <td>nama</td>
                                            <td className='p-2'>: {profil?.name}</td>
                                        </tr>
                                        <tr>
                                            <td>ID</td>
                                            <td className='p-2'>: {profil?.id}</td>
                                        </tr>
                                        <tr>
                                            <td>Tempat/Tgl Lahir</td>
                                            <td className='p-2'>: {profil?.ttl}</td>
                                        </tr>
                                        <tr>
                                            <td>Jenis Kelamin</td>
                                            <td className='p-2'>: {profil?.jeniskelamin}</td>
                                        </tr>
                                        <tr>
                                            <td>Divisi</td>
                                            <td className='p-2'>: {profil?.divisi}</td>
                                        </tr>
                                        <tr>
                                            <td>Agama</td>
                                            <td className='p-2'>: {profil?.agama}</td>
                                        </tr>
                                        <tr>
                                            <td>alamat</td>
                                            <td className='p-2'>: {profil?.alamat}</td>
                                        </tr>
                                        <tr>
                                            <td>telepon</td>
                                            <td className='p-2'>: {profil?.telepon}</td>
                                        </tr>
                                        <tr>
                                            <td>Email</td>
                                            <td className='p-2'>: {profil?.email}</td>
                                        </tr>
                                    </body>
                                </table>
                            </div>
                        </div>

                        <div className='flex items-start justify-start p-5'>
                            <Link
                                to={`/profil/user/edit/${id}`}
                                className="text-white bg-emerald-400 h-12 w-24 px-5 items-center justify-center text-3xl rounded-lg">
                                Edit
                            </Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Profil