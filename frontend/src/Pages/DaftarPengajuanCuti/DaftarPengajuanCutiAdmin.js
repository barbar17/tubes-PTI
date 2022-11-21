import React, { useContext, useEffect, useState } from "react";
import KonfirmasiAdmin from "./KonfirmasiAdmin";
import axios from "axios";
import { Link, useSearchParams } from 'react-router-dom'
import { AuthContext } from "../../Function/AuthContext";
import { BiSearchAlt } from "react-icons/bi"

function DaftarPengajuanCutiAdmin() {
    const [buttonKonfirmAdm, setButtonKonfirmAdm] = useState(false);

    const [suratCuti, setSuratCuti] = useState();
    const [detailCuti, setDetailCuti] = useState('');

    const props = useContext(AuthContext)

    let [searchParams, setSearchParams] = useSearchParams();

    const getSuraCutiByDivisi = async () => {
        const response = await axios.get(`http://localhost:5000/suratCuti/divisi/${props.divisi}`, {
            headers: {
                status: props?.adminlvl
            }
        }
        );
        setSuratCuti(response.data.rows)

    }

    const handlePopUp = async (item) => {
        setButtonKonfirmAdm(true);
        setDetailCuti(item);
    }

    useEffect(() => {
        getSuraCutiByDivisi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.divisi])

    return (
        <div className="flex flex-col w-full">
            <div className="absolute w-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <KonfirmasiAdmin
                    trigger={buttonKonfirmAdm}
                    setTrigger={setButtonKonfirmAdm}
                    getSuraCutiByDivisi={getSuraCutiByDivisi}
                    detailCuti={detailCuti}
                    adminlvl={props.adminlvl}
                />
            </div>

            <div className="w-full p-10 h-full">
                <div className="w-full">
                    <div className="bg-main w-full text-white py-2 px-5 text-2xl rounded-tl-lg rounded-tr-lg">Daftar Pengajuan Cuti</div>
                    <div className="flex flex-col px-5 bg-white pb-3">
                        <div className='flex p-5 bg-white justify-between'>
                            <div className='relative w-80' >
                                <input
                                    type={'text'}
                                    className="w-full h-10 bg-slate-100 outline outline-2 outline-slate-400 rounded-md pl-14 pr-10 text-sm focus:shadow-slate-400 focus:shadow-md transition-all"
                                    placeholder='Ketik untuk mencari... '
                                    onChange={(event) => {
                                        let filter = event.target.value;
                                        if (filter) {
                                            setSearchParams({ filter });
                                        } else {
                                            setSearchParams({});
                                        }
                                    }}
                                    value={searchParams.get("filter") || ""}
                                />
                                <div className="absolute top-1/2 -translate-y-1/2 left-2 pr-1 border-r-2 h-full border-r-slate-400 flex items-center">
                                    <BiSearchAlt className='text-2xl' color='black' />
                                </div>
                            </div>
                        </div>

                        <table className="table-auto w-full text-center text-xl ">
                            <thead>
                                <tr className="border-y-2">
                                    <th className="py-2">#</th>
                                    <th>ID</th>
                                    <th>Nama</th>
                                    <th>Tgl Pengajuan</th>
                                    <th>Tgl Mulai</th>
                                    <th>Selesai</th>
                                    <th>Alasan</th>
                                    <th>Opsi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    suratCuti?.filter((item) => {
                                        let filter = searchParams.get("filter");
                                        if (!filter) return true;
                                        let id = item.userid.toLowerCase();
                                        let name = item.name.toLowerCase();
                                        let alasan = item.alasan.toLowerCase();
                                        return (
                                            id.includes(filter.toLowerCase()) ||
                                            name.includes(filter.toLowerCase()) ||
                                            alasan.includes(filter.toLowerCase())
                                        )
                                    }).map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td className="py-2">{index + 1}</td>
                                                <td>{item.userid}</td>
                                                <td>{item.name}</td>
                                                <td>{item.tglpengajuan.split('-').reverse().join("-")}</td>
                                                <td>{item.tglmulai.split('-').reverse().join("-")}</td>
                                                <td>{item.tglselesai.split('-').reverse().join("-")}</td>
                                                <td>{item.alasan}</td>
                                                <td>
                                                    <div className="w-full h-full flex justify-evenly">
                                                        <Link to={`/profil/user/${item.userid}`} className="my-auto text-white bg-card-green h-8 w-24 items-center justify-center text-lg rounded-lg">
                                                            Profil
                                                        </Link>
                                                        <button onClick={() => handlePopUp(item)} className="my-auto text-white bg-btn-purple h-8 w-24 items-center justify-center text-lg rounded-lg">
                                                            Detail
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DaftarPengajuanCutiAdmin;