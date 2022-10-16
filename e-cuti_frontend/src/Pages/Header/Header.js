import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from './Menu'

function Header() {

    const navigation = Link()

    return (
        <>
            <div className='flex w-full justify-between items-center px-10 py-5'>
                <div className='flex items-center'>
                    <img src='gambar/logo.svg' alt='logo' className='w-[150px] h-[150px] object-cover object-center' />
                    <div className=''>
                        <h1>E-CUTI</h1>
                        <h1>PT SUGAR LABINTA</h1>
                    </div>
                </div>
                <h1>Nama Pegawai</h1>
            </div>

            <div className='w-full flex bg-main h-14 items-center justify-center'>
                <ul className='flex h-full text-xl items-center '>
                    {
                        navigation.map((item, index) => {
                            return (
                                <NavLink key={index} to={item.path} className={({ isActive }) => isActive ? item.active : item.notActive}>
                                    <span>{item.title}</span>
                                </NavLink>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default Header