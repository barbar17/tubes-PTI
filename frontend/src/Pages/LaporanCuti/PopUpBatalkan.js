import React from "react";

function PopUpBatalkan(props) {
  return props.trigger ? (
    <div className="flex justify-between rounded-xl mt-80">
      <table className="text-xl rounded-b-xl">
        <tbody>
          <div className="text bg-slate-400 bg-center p-5 rounded-t-xl"> Apakah anda yakin ingin menghapus pengajuan ini?</div>
          <div className="flex justify-around bg-slate-400 pb-5 rounded-b-xl">
            <button className="my-auto text-white bg-indigo-500 h-8 w-24 items-center justify-center text-lg rounded-lg">Setuju</button>
            <button onClick={() => props.setTrigger(false)} className="my-auto text-white bg-red-500 h-8 w-24 items-center justify-center text-lg rounded-lg">
              Tolak
            </button>
          </div>
        </tbody>
      </table>
    </div>
  ) : (
    <></>
  );
}

export default PopUpBatalkan;
