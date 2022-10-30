import React, { useState } from "react";

function EditAkunAdmin() {
  const [nama, setNama] = useState("");
  const [nip, setNip] = useState("");
  const [divisi, setDivisi] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex flex-col w-full items-center justify-center py-10 px-20 gap-20">
      <div className="w-full">
        <div className="bg-main w-full text-white py-2 px-5 text-2xl rounded-tl-lg rounded-tr-lg text-center">
          Edit Akun Pegawai
        </div>
        <div className=" w-full flex items-center justify-center bg-white text-xl p-10">
          <table className="border-separate border-spacing-y-2 border-spacing-x-5">
            <tbody>
              <tr>
                <td>
                  <span>Nama</span>
                </td>
                <td>
                  :{" "}
                  <input
                    type={"text"}
                    className="rounded-lg border-slate-400 border "
                    placeholder="Rangga Tangguh "
                    value={nama}
                    onChange={(event) => setNama(event.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <span>NIP/ID</span>
                </td>
                <td>
                  :{" "}
                  <input
                    type="text"
                    className="rounded-lg border-slate-400 border"
                    placeholder="12345 "
                    value={nip}
                    onChange={(event) => setNip(event.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <span>Divisi</span>
                </td>
                <td>
                  :{" "}
                  <input
                    type="text"
                    className="rounded-lg border-slate-400 border"
                    placeholder="Produksi "
                    value={divisi}
                    onChange={(event) => setDivisi(event.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <span>Username</span>
                </td>
                <td>
                  :{" "}
                  <input
                    type="text"
                    className="rounded-lg border-slate-400 border"
                    placeholder="Widodo2000 "
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <span>Password</span>
                </td>
                <td>
                  :{" "}
                  <input
                    type="text"
                    className="rounded-lg border-slate-400 border"
                    placeholder="passwordku123 "
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>{""}</td>
                <div className="flex justify-end w-full pr-1">
                  <button className="my-auto text-white bg-indigo-500 h-8 w-24 items-center justify-center text-lg rounded-lg">
                    Submit
                  </button>
                </div>
              </tr>
            </tbody>
          </table>

          <hr className="border-gray-400 border-2 my-5" />
        </div>
      </div>
    </div>
  );
}

export default EditAkunAdmin;
