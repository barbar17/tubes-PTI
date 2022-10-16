import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menus } from './Menu'
import { Link } from 'react-router-dom'

function Header() {

    const navigation = Menus()

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
                <Link to={'/profil'} >Nama Pegawai</Link>
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