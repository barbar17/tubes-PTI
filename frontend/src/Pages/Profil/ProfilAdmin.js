import React from 'react'
import { IoArrowBackSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Footer from '../Footer/Footer';

function ProfilAdmin() {

    const navigation = useNavigate()

    return (
        <div className="min-h-screen w-full bg-slate-200 font-display">
            <div className="min-h-screen flex flex-col justify-between">
                <div className="container flex flex-col grow mx-auto my-10 border border-gray-400 shadow-2xl">
                    <div className="w-full flex bg-main h-20 items-center text-white text-5xl px-8">
                        <IoArrowBackSharp onClick={() => navigation(-1)} className="hover:cursor-pointer" />
                        <span className="px-8">Biodata Admin</span>
                    </div>
                    <div className="flex relative">
                        <div className="absolute right-16 mt-16">
                            <Link
                                to={'/profil/admin/edit/13245'}
                                className="my-auto text-white bg-emerald-400 h-12 w-24 px-5 items-center justify-center text-3xl rounded-lg">
                                Edit
                            </Link>
                        </div>
                        <div className="container flex flex-col w-[200px]">
                            <img src="/gambar/robi.jpeg" alt='fotoprofil' className="w-[200px] h-[200px] object-cover object-center mt-20 ml-32" />
                            <img src="/gambar/ttd.jpeg" alt='ttd' className="w-[200px] h-[125px] object-cover object-center mt-32 ml-32" />
                        </div>
                        <div className="flex flex-col ml-64 my-auto mt-40 text-3xl space-y-4">
                            <div>Nama&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;: Widodo</div>
                            <div>NIP/ID&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp; : 12345</div>
                            <div>Tempat/Tgl Lahir&emsp;: Sukarame, 05-04-1000 SM</div>
                            <div>Divisi&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;: Produksi</div>
                            <div>Agama&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp; &nbsp;: Islam</div>
                            <div>Alamat&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp; : Jln. In Dulu Aja No.1, Sukarame, Bandar Lampung</div>
                            <div>Telepon&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;: 081234567890</div>
                            <div>E-mail&emsp;&emsp;&emsp; &emsp;&emsp;&emsp;: widodotitikdua@gmail.com</div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default ProfilAdmin