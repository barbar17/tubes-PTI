import React from "react";

function PopUpDeleteSuper() {
  return (
    <div className="absolute flex flex-col justify-between rounded-xl">
      <table className="table-auto w-full bg-white text-xl rounded-b-xl">
        <tbody>
          <div className="text bg-slate-400 bg-center ">
            {" "}
            Apakah anda yakin ingin menghapus akun ini?
          </div>
          <div className="flex justify-around w-full">
            <button className="my-auto text-white bg-yellow-500 h-8 w-24 items-center justify-center text-lg rounded-lg">
              Batal
            </button>
            <button className="my-auto text-white bg-red-500 h-8 w-24 items-center justify-center text-lg rounded-lg">
              Hapus
            </button>
          </div>
        </tbody>
      </table>
    </div>
  );
}

export default PopUpDeleteSuper;
