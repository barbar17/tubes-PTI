import React, { useState } from 'react'
import axios from "axios"
import Footer from './Footer/Footer'
import { FiLogIn } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate()

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const login = async (account) => {
        await axios.post("http://localhost:5000/login", account, {
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(account)
        }).then((response) => {
            if (response.data.error) alert(response.data.error);
            else {
                setSessionToken(response.data.accessToken);
                navigate(`/${response.data.tipeakun}/beranda`);
                setUsername('');
                setPassword('');
            }
        })
    }

    const setSessionToken = (userToken) => {
        sessionStorage.setItem('token', userToken);
    }

    const handleSubmit = async event => {
        event.preventDefault();
        await login({
            username,
            password
        })
    }

    console.log(showPassword)

    return (
        <div className='min-h-screen flex flex-col bg-login bg-no-repeat bg-cover justify-between'>
            <div className='flex justify-center items-center grow gap-20'>
                <img src='gambar/logo.svg' alt='logo' />
                <div className='text-6xl bg-gray-400 bg-opacity-40 w-[650px] text-center rounded-md flex flex-col p-5'>
                    <span>E-CUTI</span>
                    <span>PT SUGAR LABINTA</span>
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col bg-main bg-opacity-20 h-[550px] w-[400px] rounded-lg p-10 justify-center'>
                    <span className='text-white text-xl'>ID</span>
                    <input
                        type={'text'}
                        className='bg-white border-none my-2 p-3 text-lg rounded-md focus:outline-none '
                        placeholder='ex: 123456'
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        required
                    />
                    <span className='text-white text-xl'>Password</span>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        className='bg-white border-none my-2 p-3 text-lg rounded-md focus:outline-none '
                        placeholder='Password'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                    />
                    <button type='button' onClick={() => setShowPassword(!showPassword)} className='bg-card-green rounded-md flex w-fit px-2 py-1 text-white mb-8'>
                        <span>Lihat Password</span>
                    </button>
                    <button className='bg-slate-200 w-1/3 px-2 py-2 rounded-md self-center flex items-center justify-center gap-2 '>
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