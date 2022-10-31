import Footer from "./Pages/Footer/Footer";
import { Outlet } from 'react-router-dom'
import Header from "./Pages/Header/Header";
import { useEffect, useState } from "react"
import { AuthContext } from "./Function/AuthContext";
import axios from "axios";

function App() {

  const [user, setUser] = useState();
  const userId = user?.id
  const [authState, setAuthState] = useState(false);

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
    <div className="min-h-screen w-full bg-login font-display">
      <div className="min-h-screen flex flex-col justify-between">
        <AuthContext.Provider value={{ authState, setAuthState }}>
          <div className="container flex flex-col grow mx-auto my-10 border bg-slate-200 border-gray-400 shadow-2xl">
            <Header user={user?.name} id={user?.id} />
            <Outlet context={{ userId }} />
          </div>
          <Footer />
        </AuthContext.Provider>
      </div>
    </div>
  );
}

export default App;
