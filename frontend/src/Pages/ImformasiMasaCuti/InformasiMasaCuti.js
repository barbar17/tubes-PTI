import React, { useState } from "react";

function InformasiMasaCuti() {
  const [showOptions, setShadowOptions] = useState(false);
  const handleClick = () => {
    setShadowOptions(!showOptions);
  };
  return (
    <div className="flex flex-col w-full items-center justify-center py-10 px-20">
      <div className="flex flex-col justify-around w-full">
        <div className="w-full bg-main h-20 flex text-white text-2xl  items-center p-10 rounded-md">Detail Informasi Masa Cuti</div>
        <div className="flex justify-around w-full">
          <div className=" w-full h-20 flex text-2xl  items-center p-10 text-black">Cuti Hari Minggu</div>
          <div class="flex items-center justify-center bg-gray-200 w-1/5">
            <div class="relative inline-block text-left">
              <div>Sisa Cuti: 5 Hari</div>
            </div>
          </div>
        </div>
        <div className="flex justify-around w-full">
          <div className=" w-full h-20 flex text-2xl  items-center p-10 text-black">Cuti Tahunan</div>
          <div class="flex items-center justify-center bg-gray-200 w-1/5">
            <div class="relative inline-block text-left">
              <div>Sisa Cuti: 6 Hari</div>
            </div>
          </div>
        </div>
        <div className="flex justify-around w-full">
          <div className=" w-full h-20 flex text-2xl  items-center p-10 text-black">Cuti Izin</div>
          <div class="flex items-center justify-center bg-gray-200 w-1/5">
            <div class="relative inline-block text-left">
              <div>Sisa Cuti: 9 Hari</div>
            </div>
          </div>
        </div>
        <div className="flex justify-around w-full">
          <div className=" w-full h-20 flex text-2xl  items-center p-10 text-black">Cuti Libur Nasional</div>
          <div class="flex items-center justify-center bg-gray-200 w-1/5">
            <div class="relative inline-block text-left">
              <div>Sisa Cuti: 4 Hari</div>
            </div>
          </div>
        </div>
        <div className="flex justify-around w-full">
          <div className=" w-full h-20 flex text-2xl  items-center p-10 text-black">Cuti Dispensasi</div>
          <div class="flex items-center justify-center bg-gray-200 w-1/5">
            <div class="relative inline-block text-left">
              <div>Sisa Cuti: 21 Hari</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformasiMasaCuti;
