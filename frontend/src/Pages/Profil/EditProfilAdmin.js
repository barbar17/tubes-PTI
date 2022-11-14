import React, { useState, useEffect } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { BsUpload } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import axios from "axios";

function EditProfilAdmin() {

  const navigation = useNavigate()

  const { id } = useParams();

  const [name, setName] = useState('')
  const [userId, setUserId] = useState('')
  const [ttl, setTtl] = useState('')
  const [jeniskelamin, setJeniskelamin] = useState('')
  const [divisi, setDivisi] = useState('')
  const [agama, setAgama] = useState('')
  const [alamat, setAlamat] = useState('')
  const [telepon, setTelepon] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [fotoadmin, setFotoadmin] = useState('')
  const [previewfoto, setPreviewfoto] = useState('')
  const [ttdadmin, setTtdadmin] = useState('')
  const [previewttd, setPreviewttd] = useState('')
  const [isFotoChange, setIsFotoChange] = useState(false);
  const [isTtdChange, setIsTtdChange] = useState(false);

  const loadFoto = (event) => {
    setIsFotoChange(true)
    const foto = event.target.files[0];
    setFotoadmin(foto);
    setPreviewfoto(URL.createObjectURL(foto));
  }
  const loadTtd = (event) => {
    setIsTtdChange(true)
    const ttd = event.target.files[0];
    setTtdadmin(ttd);
    setPreviewttd(URL.createObjectURL(ttd));
  }


  const getProfilAdmin = async () => {
    const response = await axios.get(`http://localhost:5000/admin/${id}`);
    setName(response.data.name);
    setUserId(response.data.id);
    setTtl(response.data.ttl);
    setJeniskelamin(response.data.jeniskelamin);
    setDivisi(response.data.divisi);
    setAgama(response.data.agama);
    setAlamat(response.data.alamat);
    setTelepon(response.data.telepon);
    setEmail(response.data.email);
    setUsername(response.data.username);
    setPreviewttd(response.data.ttdurl)
    setPreviewfoto(response.data.fotourl)
  }

  const updateProfil = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("file", fotoadmin);
    formData.append("file", ttdadmin);
    formData.append("isFotoChange", isFotoChange);
    formData.append("isTtdChange", isTtdChange);
    formData.append("name", name);
    formData.append("id", id);
    formData.append("ttl", ttl);
    formData.append("jeniskelamin", jeniskelamin);
    formData.append("divisi", divisi);
    formData.append("agama", agama);
    formData.append("alamat", alamat);
    formData.append("telepon", telepon);
    formData.append("email", email);

    try {
      await axios.patch(`http://localhost:5000/admin/${id}`, formData, {
        headers: {
          "Content-type": "multipart/form-data"
        }
      });
      resetToken(username)
      setIsFotoChange(false)
      setIsTtdChange(false)
    } catch (error) {
      console.log(error);
    }
  }

  const resetToken = async (username) => {
    try {
      axios.post('http://localhost:5000/resetToken', { username: username }, {
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(username)
      }).then((response) => {
        if (response.data.error) alert(response.data.error);
        else {
          sessionStorage.removeItem("token");
          sessionStorage.setItem('token', response.data);
          navigation(-1)
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProfilAdmin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="min-h-screen w-full bg-slate-200 font-display">
      <div className="min-h-screen flex flex-col justify-between">
        <div className="container flex flex-col grow mx-auto my-10 border border-gray-400 shadow-2xl">
          <div className="w-full flex bg-main h-20 items-center text-white text-5xl px-8">
            <IoArrowBackSharp onClick={() => navigation(-1)} className="hover:cursor-pointer" />
            <span className="px-8">Biodata Admin</span>
          </div>

          <form className="flex w-full px-10 grow items-stretch justify-between" onSubmit={updateProfil}>
            <div className='flex'>
              <div className="flex flex-col item-center justify-center mx-10 space-y-10">
                <div className="relative flex border border-gray-400 shadow-2xl w-[250px] h-[333px] object-cover object-center items-center justify-center ">
                  {
                    previewfoto ? (
                      <img src={previewfoto} alt='fotoprofil' className="w-[250px] h-[333px] object-cover object-center" />
                    ) : (<></>)
                  }
                  <input type={'file'} id="files" style={{ display: "none" }} accept={'image/*'} onChange={loadFoto} />
                  <label htmlFor="files" className="text-white bg-main pb-1 flex space-x-2 py-2 px-5 absolute bottom-5 left-1/2 -translate-x-1/2 z-10 text-xl rounded-lg hover:cursor-pointer">
                    <BsUpload />
                    <span>Foto</span>
                  </label>
                </div>

                <div className="relative flex border border-gray-400 shadow-2xl w-[250px] h-[150px] object-cover object-center items-center justify-center ">
                  {
                    previewttd ? (
                      <img src={previewttd} alt='fotoprofil' className="w-[250px] h-[150px] object-cover object-center" />
                    ) : (<></>)
                  }
                  <input type={'file'} id="ttd" style={{ display: "none" }} accept={'image/*'} onChange={loadTtd} />
                  <label htmlFor="ttd" className="text-white bg-main pb-1 flex space-x-2 py-2 px-5 absolute bottom-1 left-1/2 -translate-x-1/2 items-center justify-center text-xl rounded-lg">
                    <BsUpload />
                    <span>TTD</span>
                  </label>
                </div>
              </div>

              <div className="flex flex-col h-full items-center justify-center">
                <table className='border-separate border-spacing-2 text-2xl'>
                  <tbody>
                    <tr>
                      <td>nama</td>
                      <td>: <input type="text" className="rounded-md p-2 w-96 border-gray-600" onChange={(event) => setName(event.target.value)} value={name} /></td>
                    </tr>
                    {/* <tr>
                      <td>ID</td>
                      <td>: <input type="text" className="rounded-md p-2 w-96 border-gray-600" onChange={(event) => setUserId(event.target.value)} value={userId} /></td>
                    </tr> */}
                    <tr>
                      <td>Tempat/Tgl Lahir</td>
                      <td>: <input type="text" className="rounded-md p-2 w-96 border-gray-600" onChange={(event) => setTtl(event.target.value)} value={ttl} /></td>
                    </tr>
                    <tr>
                      <td>Jenis Kelamin</td>
                      <td>: <input type="text" className="rounded-md p-2 w-96 border-gray-600" onChange={(event) => setJeniskelamin(event.target.value)} value={jeniskelamin} /></td>
                    </tr>
                    <tr>
                      <td>Divisi</td>
                      <td>: <input type="text" className="rounded-md p-2 w-96 border-gray-600" onChange={(event) => setDivisi(event.target.value)} value={divisi} /></td>
                    </tr>
                    <tr>
                      <td>Agama</td>
                      <td>: <input type="text" className="rounded-md p-2 w-96 border-gray-600" onChange={(event) => setAgama(event.target.value)} value={agama} /></td>
                    </tr>
                    <tr>
                      <td>alamat</td>
                      <td>: <input type="text" className="rounded-md p-2 w-96 border-gray-600" onChange={(event) => setAlamat(event.target.value)} value={alamat} /></td>
                    </tr>
                    <tr>
                      <td>telepon</td>
                      <td>: <input type="text" className="rounded-md p-2 w-96 border-gray-600" onChange={(event) => setTelepon(event.target.value)} value={telepon} /></td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>: <input type="text" className="rounded-md p-2 w-96 border-gray-600" onChange={(event) => setEmail(event.target.value)} value={email} /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className='flex items-start justify-start p-5'>
              <button
                type="submit"
                className="text-white bg-main h-12 w-36 items-center justify-center text-3xl rounded-lg">
                Simpan
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </div >
  );
}

export default EditProfilAdmin;
