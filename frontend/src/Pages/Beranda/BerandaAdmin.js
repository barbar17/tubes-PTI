import React, { useContext, useEffect, useState } from 'react'
import { FiUser, FiUsers, FiFileText, FiUserX } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../../Function/AuthContext'

function BerandaAdmin() {

    const props = useContext(AuthContext)

    const [jumlahPegawaiDivisi, setJumlahPegawaiDivisi] = useState('');
    const [jumlahSuratCutiDivisi, setJumlahSuratCutiDivisi] = useState('');
    const [pegawaiCuti, setPegawaiCuti] = useState('');

    const now = new Date();
    const currentDate = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`

    const getPegawaiByDivisi = async () => {
        const response = await axios.get(`http://localhost:5000/pegawai-per-divisi/${props.divisi}`);
        setJumlahPegawaiDivisi(response.data.count)
    }

    const getSuraCutiByDivisi = async () => {
        const response = await axios.get(`http://localhost:5000/suratCuti/divisi/${props.divisi}`, {
            headers: {
                status: props?.adminlvl
            }
        }
        );
        setJumlahSuratCutiDivisi(response.data.count)

    }

    const getLaporanCutiByDivisi = async () => {
        const response = await axios.get(`http://localhost:5000/suratCuti/laporan/${props.divisi}`);

        let pegawaiCuti = 0;
        for (let index = 0; index < response.data.length; index++) {
            const start = new Date(response.data[index].tglmulai);
            start.setHours(0, 0, 0, 0)
            const end = new Date(response.data[index].tglselesai);
            end.setHours(0, 0, 0, 0)
            console.log(start, now)
            if (start <= now && now <= end) {
                pegawaiCuti += 1
            }
        }
        setPegawaiCuti(pegawaiCuti)
    }

    useEffect(() => {
        getPegawaiByDivisi()
        getSuraCutiByDivisi()
        getLaporanCutiByDivisi()
    }, [props])


    return (
        <div className='flex flex-col w-full items-center justify-center py-10 px-20 gap-20'>
            <div className='w-full grid grid-cols-2 place-items-center gap-y-10'>
                <div className='flex w-[500px] bg-card-blue rounded-lg justify-end'>
                    <Link to={'/admin/data_pegawai'} className='flex items-center justify-between bg-white w-[490px] rounded-tr-lg rounded-br-lg p-10'>
                        <div className='flex flex-col '>
                            <span className='text-card-blue text-2xl'>Pegawai {props?.divisi}</span>
                            <span className='text-4xl'>{jumlahPegawaiDivisi} Pegawai</span>
                        </div>
                        <FiUsers className='text-8xl' />
                    </Link>
                </div>

                <div className='flex w-[500px] bg-card-green rounded-lg justify-end'>
                    <div className='flex items-center justify-between bg-white w-[490px] rounded-tr-lg rounded-br-lg p-10'>
                        <div className='flex flex-col '>
                            <span className='text-card-green text-2xl'>Pegawai Bekerja</span>
                            <span className='text-4xl'>{jumlahPegawaiDivisi - pegawaiCuti} Pegawai</span>
                        </div>
                        <FiUser className='text-8xl' />
                    </div>
                </div>

                <div className='flex w-[500px] bg-card-yellow rounded-lg justify-end'>
                    <Link to={'/admin/daftar_pengajuan_cuti'} className='flex items-center justify-between bg-white w-[490px] rounded-tr-lg rounded-br-lg p-10'>
                        <div className='flex flex-col '>
                            <span className='text-card-yellow text-2xl'>Pengajuan Cuti</span>
                            <span className='text-4xl'>{jumlahSuratCutiDivisi} Pegawai</span>
                        </div>
                        <FiFileText className='text-8xl' />
                    </Link>
                </div>

                <div className='flex w-[500px] bg-card-red rounded-lg justify-end'>
                    <div className='flex items-center justify-between bg-white w-[490px] rounded-tr-lg rounded-br-lg p-10'>
                        <div className='flex flex-col '>
                            <span className='text-card-red text-2xl'>Pegawai Sedang Cuti</span>
                            <span className='text-4xl'>{pegawaiCuti} Pegawai</span>
                        </div>
                        <FiUserX className='text-8xl' />
                    </div>
                </div>
            </div>


        </div >
    )
}

export default BerandaAdmin