import React from 'react'
import { FiUser, FiUserX } from 'react-icons/fi'

function BerandaUser() {
    return (
        <div className='flex flex-col w-full items-center justify-center py-10 px-20 gap-20'>
            <div className='flex justify-around w-full'>
                <div className='flex w-[500px] bg-card-green rounded-lg justify-end'>
                    <div className='flex items-center justify-between bg-white w-[490px] rounded-tr-lg rounded-br-lg p-10'>
                        <div className='flex flex-col '>
                            <span className='text-card-green text-2xl'>Total Cuti Pegawai</span>
                            <span className='text-4xl'>5 Hari</span>
                        </div>
                        <FiUser className='text-8xl' />
                    </div>
                </div>

                <div className='flex w-[500px] bg-card-red rounded-lg justify-end'>
                    <div className='flex items-center justify-between bg-white w-[490px] rounded-tr-lg rounded-br-lg p-10'>
                        <div className='flex flex-col '>
                            <span className='text-card-red text-2xl'>Total Cuti Pegawai</span>
                            <span className='text-4xl'>5 Hari</span>
                        </div>
                        <FiUserX className='text-8xl' />
                    </div>
                </div>
            </div>

            <div className='w-full'>
                <div className='bg-main w-full text-white py-2 px-5 text-2xl rounded-tl-lg rounded-tr-lg'>Pengajuan Cuti</div>
                <table className='table-auto w-full text-center bg-white text-xl '>
                    <thead>
                        <tr className='border-b-2'>
                            <th className='py-2'>#</th>
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
                        <tr>
                            <td className='py-2'>1</td>
                            <td>12345</td>
                            <td>01-01-2022</td>
                            <td>10-01-2022</td>
                            <td>20-01-2022</td>
                            <td>Sakit</td>
                            <td>Sedang diproses</td>
                            <td>
                                <button>Detail</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default BerandaUser