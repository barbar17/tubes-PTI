import React from 'react'
import { FiUser } from 'react-icons/fi'

function Beranda() {
    return (
        <div className='flex flex-col w-full items-center justify-center'>
            <div className='flex w-11/12'>
                <div className='flex w-[300px] bg-card-green rounded-sm justify-end'>
                    <div className='flex items-center justify-center bg-white w-[290px] rounded-sm'>
                        <div className='flex flex-col '>
                            <span>Total Cuti Pegawai</span>
                            <span>5 Hari</span>
                        </div>
                        <FiUser />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Beranda