import React from 'react'
import { FiUser, FiUserX } from 'react-icons/fi'

function Beranda() {
    return (
        <div className='flex flex-col w-full items-center justify-center py-10 px-20'>
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
        </div >
    )
}

export default Beranda