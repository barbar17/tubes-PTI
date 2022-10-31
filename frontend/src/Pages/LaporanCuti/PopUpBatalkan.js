import React from "react";
import { IoIosClose } from "react-icons/io";

function PopUpBatalkan(props) {
    return props.trigger ? (
        <div className="absolute flex flex-col justify-between rounded-xl">
            <div className="container flex flex-col grow mx-auto my-10 border border-gray-400 shadow-2xl rounded-xl">
                <div className="w-full flex bg-main h-20 items-center text-white text-5xl px-8 rounded-t-xl">
                    <span className="px-8">Detail Pengajuan Cuti</span>
                    <button onClick={() => props.setTrigger(false)}>
                        <IoIosClose />
                    </button>
                    {props.children}

                </div>
            </div>
            <table className="table-auto w-full bg-white text-xl rounded-b-xl">
                <tbody>
                    <div className="text bg-slate-400 bg-center "> Apakah anda yakin ingin menghapus pengajuan ini?</div>
                    <div className="flex justify-around w-full">
                        <button className="my-auto text-white bg-indigo-500 h-8 w-24 items-center justify-center text-lg rounded-lg">
                            Setuju
                        </button>
                        <button className="my-auto text-white bg-red-500 h-8 w-24 items-center justify-center text-lg rounded-lg">
                            Tolak
                        </button>
                    </div>
                </tbody>
            </table>
        </div>
    ) : (
        <></>
    )
}

export default PopUpBatalkan;