import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function TambahAkunPegawai() {

    const go = useNavigate()

    const [showPassword, setShowPassword] = useState(false);
    const [nama, setNama] = useState('');
    const [id, setId] = useState('');
    const [divisi, setDivisi] = useState('Produksi');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const createPegawai = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:5000/pegawai", {
                name: nama,
                id: id,
                divisi: divisi,
                username: username,
                password: password,
            }, {
                headers: {
                    "Content-type": "application/json"
                }
            });

            go('/admin/data_pegawai')
        } catch (error) {
            console.log(error.response.data);
        }

    }

    return (
        <div className="flex flex-col w-full items-center justify-center py-10 px-20 gap-20">
            <div className="w-full">
                <div className="bg-main w-full text-white py-2 px-5 text-2xl rounded-tl-lg rounded-tr-lg text-center">
                    Tambah Akun Pegawai
                </div>
                <form className=" w-full flex items-center justify-center bg-white text-xl p-10" onSubmit={createPegawai}>
                    <table className="border-separate border-spacing-y-2 border-spacing-x-5">
                        <tbody>
                            <tr>
                                <td>
                                    <span>Nama</span>
                                </td>
                                <td>
                                    :{" "}
                                    <input
                                        type="text"
                                        value={nama}
                                        onChange={(event) => setNama(event.target.value)}
                                        className="rounded-lg border-slate-400 border p-1 px-2"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>ID</span>
                                </td>
                                <td>
                                    :{" "}
                                    <input
                                        type="text"
                                        value={id}
                                        onChange={(event) => setId(event.target.value)}
                                        className="rounded-lg border-slate-400 border py-1 px-2"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>Divisi</span>
                                </td>
                                <td>
                                    :{" "}
                                    <select className="rounded-lg border-slate-400 border p-1 px-2" onChange={(event) => setDivisi(event.target.value)} >
                                        <option>Produksi</option>
                                        <option>Sistem Administrasi</option>
                                        <option>QA</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>Username</span>
                                </td>
                                <td>
                                    :{" "}
                                    <input
                                        type="text"
                                        value={username}
                                        onChange={(event) => setUsername(event.target.value)}
                                        className="rounded-lg border-slate-400 border py-1 px-2"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>Password</span>
                                </td>
                                <td className="flex items-center">
                                    :
                                    <div className='flex items-center justify-between ml-1'>
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            value={password}
                                            onChange={(event) => setPassword(event.target.value)}
                                            className="rounded-tl-lg h-10 rounded-bl-lg border-slate-400 border py-1 px-2"
                                        />
                                        {
                                            showPassword ? <div className='h-10 flex'> <AiFillEyeInvisible className='text-gray-700 pr-2 text-4xl bg-gray-300 h-full rounded-tr-lg rounded-br-lg' /></div>
                                                : <div className='h-10 flex'><AiFillEye className='text-gray-700 pr-2 text-4xl bg-gray-300 h-full rounded-tr-lg rounded-br-lg' /></div>
                                        }
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {" "}
                                </td>
                                <td>
                                    <button type='button' onClick={() => setShowPassword(!showPassword)} className='bg-card-green rounded-md flex w-fit px-2 py-1 text-white mb-8'>
                                        <span>Lihat Password</span>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>{""}</td>
                                <td>
                                    <div className="flex justify-end w-full pr-1">
                                        <button className="my-auto text-white bg-indigo-500 h-8 w-24 items-center justify-center text-lg rounded-lg">
                                            Submit
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    );
}

export default TambahAkunPegawai;