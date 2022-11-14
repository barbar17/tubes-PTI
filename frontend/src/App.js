import Footer from "./Pages/Footer/Footer";
import { Outlet } from 'react-router-dom'
import Header from "./Pages/Header/Header";
import { useEffect, useState } from "react"
import { AuthContext } from "./Function/AuthContext";
import axios from "axios";

function App() {

  const [user, setUser] = useState();
  const userId = user?.id
  const divisi = user?.divisi
  const adminlvl = user?.adminlvl
  console.log(user)
  const [authState, setAuthState] = useState(false);

  const now = new Date()
  const newYear = now.getDate() + " " + (now.getMonth() + 1)

  const resetTotalCuti = async () => {
    try {
      await axios.patch(`http://localhost:5000/pegawai/reset/totalCuti/${userId}`, {
        headers: {
          "Content-type": "application/json"
        }
      });
    } catch (error) {
      console.log(error)
    }
  }

  if (newYear == "1 1") {
    resetTotalCuti()
  }

  const userToken = sessionStorage.getItem('token');

  const checkToken = async (token) => {
    await axios.get('http://localhost:5000/validate-token', {
      headers: {
        token: token
      },
    }).then((response) => {
      if (response.data.error) {
        setAuthState(false);
      } else {
        setUser(response.data);
        setAuthState(true);
      }
    })
  }

  useEffect(() => {
    checkToken(userToken);
    // eslint-disable-next-line
  }, [])

  return (
    <div className="min-h-screen w-full bg-login bg-no-repeat bg-cover font-display">
      <div className="min-h-screen flex flex-col justify-between">
        <AuthContext.Provider value={{ authState, setAuthState, divisi, userId, adminlvl }}>
          <div className="container flex flex-col grow mx-auto my-10 border bg-slate-200 border-gray-400 shadow-2xl">
            <Header user={user?.name} id={user?.id} tipeakun={user?.tipeakun} />
            <Outlet context={{ userId, divisi }} />
          </div>
          <Footer />
        </AuthContext.Provider>
      </div>
    </div>
  );
}

export default App;
