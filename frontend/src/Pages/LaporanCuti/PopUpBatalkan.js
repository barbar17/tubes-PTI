import React from "react";
import axios from "axios";

function PopUpBatalkan(props) {

  const handleTolak = async () => {
    let status = 'Ditolak';

    try {
      await axios.patch(`http://localhost:5000/suratCuti/declined/${props.detailCuti.id}`, { status: status }, {
        headers: {
          "Content-type": "application/json"
        }
      });
    } catch (error) {
      console.log(error);
    }
    props.setTrigger(false)
    props.getSuraCuti()
  }

  return props.trigger ? (
    <div className="flex justify-between rounded-md text-xl flex-col">
      <div className="text bg-slate-400 bg-center p-5 rounded-t-xl"> Apakah anda yakin ingin menghapus pengajuan ini?</div>
      <div className="flex justify-around bg-slate-400 pb-5 rounded-b-xl">
        <button onClick={() => handleTolak()} className="my-auto text-white bg-indigo-500 h-8 w-24 items-center justify-center text-lg rounded-lg">Iya</button>
        <button onClick={() => props.setTrigger(false)} className="my-auto text-white bg-red-500 h-8 w-24 items-center justify-center text-lg rounded-lg">
          Tidak
        </button>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default PopUpBatalkan;
