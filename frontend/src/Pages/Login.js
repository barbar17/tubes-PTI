import React from 'react'
import Footer from './Footer/Footer'
import { FiLogIn } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate()

    return (
        <div className='min-h-screen flex flex-col bg-login bg-no-repeat bg-cover justify-between'>
            <div className='flex justify-center items-center grow gap-20'>
                <img src='gambar/logo.svg' />
                <div className='text-6xl bg-gray-400 bg-opacity-40 w-[650px] text-center rounded-md flex flex-col p-5'>
                    <span>E-CUTI</span>
                    <span>PT SUGAR LABINTA</span>
                </div>
                <form className='flex flex-col bg-main bg-opacity-20 h-[550px] w-[400px] rounded-lg p-10 justify-center'>
                    <span className='text-white text-xl'>ID</span>
                    <input type={'text'} className='bg-white border-none my-2 p-3 text-lg rounded-md focus:outline-none ' placeholder='ex: 123456' />
                    <span className='text-white text-xl'>Password</span>
                    <input type={'password'} className='bg-white border-none my-2 p-3 text-lg rounded-md focus:outline-none ' placeholder='Password' />
                    <button onClick={() => navigate('/user/beranda')} className='bg-slate-200 w-1/3 px-2 py-2 rounded-md self-center flex items-center justify-center gap-2 '>
                        <span>Login</span>
                        <FiLogIn />
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Login