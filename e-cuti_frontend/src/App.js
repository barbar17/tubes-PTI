import Footer from "./Pages/Footer/Footer";
import Login from "./Pages/Login";
import { Outlet } from 'react-router-dom'
import Beranda from "./Pages/Beranda/Beranda";
import Header from "./Pages/Header/Header";


function App() {
  return (
    <div className="min-h-screen w-full bg-slate-200 font-display">
      <div className="min-h-screen flex flex-col justify-between">
        <div className="container flex flex-col grow mx-auto my-10 border border-gray-400 shadow-2xl">
          <Header />
          <Outlet />
        </div>
        {/* <Login /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
