import React from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { BsUpload } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";

function EditProfilAdmin() {

  const navigation = useNavigate()

  return (
    <div className="min-h-screen w-full bg-slate-200 font-display">
      <div className="min-h-screen flex flex-col justify-between">
        <div className="container flex flex-col grow mx-auto my-10 border border-gray-400 shadow-2xl">
          <div className="w-full flex bg-main h-20 items-center text-white text-5xl px-8">
            <IoArrowBackSharp onClick={() => navigation(-1)} className="hover:cursor-pointer" />
            <span className="px-8">Biodata Admin</span>
          </div>
          <div className="flex relative">
            <div className="absolute right-16 mt-16">
              <button className="my-auto text-white bg-btn-purple h-12 w-36 items-center justify-center text-3xl rounded-lg">Simpan</button>
            </div>
            <div className="container flex flex-col w-[200px] place-items-center">
              <div className="flex border border-gray-400 shadow-2xl w-[200px] h-[200px] object-cover object-center mt-20 ml-32 ">
                <button className="my-auto text-white bg-main h-12 w-36 items-center justify-center text-2xl rounded-lg ml-7">
                  <BsUpload className="mt-2 ml-6" />
                  <span className="flex ml-14 -mt-6">Foto</span>
                </button>
              </div>
              <div className="flex border border-gray-400 shadow-2xl w-[200px] h-[200px] object-cover object-center mt-20 ml-32 ">
                <button className="my-auto text-white bg-main h-12 w-36 items-center justify-center text-2xl rounded-lg ml-7">
                  <BsUpload className="mt-2 ml-6" />
                  <span className="flex ml-14 -mt-6">TTD</span>
                </button>
              </div>
            </div>
            <div className="flex flex-col ml-64 my-auto mt-40 text-3xl space-y-4">
              <div>
                Nama&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;: <input type="text" className="rounded-lg border-gray-600" />
              </div>
              <div>
                NIP/ID&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp; : <input type="text" className="rounded-lg border-gray-600" />
              </div>
              <div>
                Tempat/Tgl Lahir&emsp;: <input type="text" className="rounded-lg border-gray-600" />
              </div>
              <div>
                Divisi&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;: <input type="text" className="rounded-lg border-gray-600" />
              </div>
              <div>
                Agama&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp; &nbsp;: <input type="text" className="rounded-lg border-gray-600" />
              </div>
              <div>
                Alamat&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp; : <input type="text" className="rounded-lg border-gray-600" />
              </div>
              <div>
                Telepon&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;: <input type="text" className="rounded-lg border-gray-600" />
              </div>
              <div>
                E-mail&emsp;&emsp;&emsp; &emsp;&emsp;&emsp;: <input type="text" className="rounded-lg border-gray-600" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default EditProfilAdmin;
