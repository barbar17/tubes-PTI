import React from "react";
import { FiUser, FiUsers, FiFileText, FiUserX } from "react-icons/fi";

function BerandaSuper() {
  return (
    <div className="flex flex-col w-full items-center justify-center py-10 px-20 gap-20">
      <div className="w-full grid grid-cols-2 place-items-center gap-y-10">
        <div className="flex w-[500px] bg-card-blue rounded-lg justify-end">
          <div className="flex items-center justify-between bg-white w-[490px] rounded-tr-lg rounded-br-lg p-10">
            <div className="flex flex-col ">
              <span className="text-card-blue text-2xl">Jumlah</span>
              <span className="text-4xl">660 Pegawai</span>
            </div>
            <FiUsers className="text-8xl" />
          </div>
        </div>

        <div className="flex w-[500px] bg-card-green rounded-lg justify-end">
          <div className="flex items-center justify-between bg-white w-[490px] rounded-tr-lg rounded-br-lg p-10">
            <div className="flex flex-col ">
              <span className="text-card-green text-2xl">Pegawai Bekerja</span>
              <span className="text-4xl">643 Pegawai</span>
            </div>
            <FiUser className="text-8xl" />
          </div>
        </div>

        <div className="flex w-[500px] bg-card-yellow rounded-lg justify-end">
          <div className="flex items-center justify-between bg-white w-[490px] rounded-tr-lg rounded-br-lg p-10">
            <div className="flex flex-col ">
              <span className="text-card-yellow text-2xl">Pengajuan Cuti</span>
              <span className="text-4xl">12 Pegawai</span>
            </div>
            <FiFileText className="text-8xl" />
          </div>
        </div>

        <div className="flex w-[500px] bg-card-red rounded-lg justify-end">
          <div className="flex items-center justify-between bg-white w-[490px] rounded-tr-lg rounded-br-lg p-10">
            <div className="flex flex-col ">
              <span className="text-card-red text-2xl">
                Pegawai Sedang Cuti
              </span>
              <span className="text-4xl">5 Pegawai</span>
            </div>
            <FiUserX className="text-8xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BerandaSuper;