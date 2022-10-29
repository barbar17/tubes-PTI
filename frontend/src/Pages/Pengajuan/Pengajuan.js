import React from 'react'

function Pengajuan() {
    return (
        <div className="flex flex-col w-full items-center justify-center py-10 px-20 gap-20">
            <div className="w-full">
                <div className="bg-main w-full text-white py-2 px-5 text-2xl rounded-tl-lg rounded-tr-lg text-center">Formulir Pengajuan Cuti</div>
                <div className='w-full bg-white text-xl p-10'>
                    <table className='border-separate border-spacing-y-2 border-spacing-x-5'>
                        <tbody>
                            <tr>
                                <td>
                                    <span>Nama</span>
                                </td>
                                <td>
                                    : <input type="text" className="rounded-lg border-slate-400 border" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>NIP/ID</span>
                                </td>
                                <td>
                                    : <input type="text" className="rounded-lg border-slate-400 border" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>Divisi</span>
                                </td>
                                <td>
                                    : <input type="text" className="rounded-lg border-slate-400 border" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>Jatah Cuti</span>
                                </td>
                                <td>
                                    : <input type="text" className="rounded-lg border-slate-400 border" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>Nama</span>
                                </td>
                                <td>
                                    : <input type="text" className="rounded-lg border-slate-400 border" />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <hr className='border-gray-400 border-2 my-5' />

                    <table className='border-separate border-spacing-y-2 border-spacing-x-5'    >
                        <tbody>
                            <tr>
                                <td>
                                    <div>
                                        <b>Data Cuti</b>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>Tanggal Mulai</span>
                                </td>
                                <td>
                                    : <input type="date" className="form-control" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>Tanggal Selesai</span>
                                </td>
                                <td>
                                    : <input type="date" className="form-control" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>Jenis Cuti</span>
                                </td>
                                <td>
                                    : <select className="border border-slate-400 rounded-lg">
                                        <option>Libur Nasional</option>
                                        <option>Hari Minggu</option>
                                        <option>Cuti Tahunan</option>
                                        <option>Cuti Izin</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>Alasan Cuti</span>
                                </td>
                                <td>
                                    : <input type="text" className="rounded-lg border-slate-400 border" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>File Tambahan</span>
                                </td>
                                <td>
                                    : <input type="file" className="rounded-lg border-slate-400 border" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="submit" className="text-white bg-main h-12 w-32 rounded-lg" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Pengajuan