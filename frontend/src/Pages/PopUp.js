import React from "react";
import { IoIosClose } from "react-icons/io";

function PopUp(props) {
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
        <table className="table-auto w-full bg-white text-xl rounded-b-xl">
          <tbody>
            <tr className="border-b-2">
              <div className="flex flex-col text-1xl space-y-4 my-3 ml-32">
                <div>Nama&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;: Widodo</div>
                <div>NIP/ID&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp; : 12345</div>
                <div>Divisi&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;: Produksi</div>
                <div>Jatah Cuti&emsp;&emsp;&emsp;&emsp;&nbsp;: 25 Hari</div>
              </div>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <div className="flex flex-col text-1xl space-y-4 my-4 ml-32">
                <div>
                  <b>Data Cuti</b>
                </div>
                <div>Tanggal Diajukan&emsp;&nbsp; : 10/10/2022</div>
                <div>Tanggal Mulai&emsp;&emsp;&emsp;: 11/10/2022</div>
                <div>Tanggal Selesai&emsp;&emsp; : 14/10/2022</div>
                <div>Alasan Cuti&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;: Sakit</div>
                <div>Komentar</div>
                <div className="w-4/5 h-24 text-xl bg-slate-300">
                  <span className="ml-4">Lorem Ipsum</span>
                </div>
              </div>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    ""
  );
}

export default PopUp;
