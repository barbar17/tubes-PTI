import React from "react";

function BioPegawaiSuper() {
  return (
    <div className="min-h-screen w-full bg-slate-200 font-display">
      <div className="min-h-screen flex flex-col justify-between">
        <div className="container flex flex-col grow mx-auto my-10 border border-gray-400 shadow-2xl">
          <div className="w-full flex bg-main h-20 items-center text-white text-5xl px-8">
            <span className="px-8">Biodata Pegawai</span>
          </div>
          <div className="flex w-full px-10 grow items-stretch justify-between">
            <div className="flex">
              <div className="flex flex-col item-center justify-center mx-10 space-y-10">
                <span className="px-8">FOTO</span>
              </div>

              <div className="flex flex-col h-full items-center justify-center">
                <table className="border-separate border-spacing-2 text-2xl">
                  <tbody>
                    <tr>
                      <td>nama</td>
                    </tr>
                    <tr>
                      <td>ID</td>
                    </tr>
                    <tr>
                      <td>Tempat/Tgl Lahir</td>
                    </tr>
                    <tr>
                      <td>Jenis Kelamin</td>
                    </tr>
                    <tr>
                      <td>Divisi</td>
                    </tr>
                    <tr>
                      <td>Agama</td>
                    </tr>
                    <tr>
                      <td>alamat</td>
                    </tr>
                    <tr>
                      <td>telepon</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BioPegawaiSuper;
