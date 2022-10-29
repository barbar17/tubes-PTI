import Footer from "./Pages/Footer/Footer";
import { Outlet } from 'react-router-dom'
import Header from "./Pages/Header/Header";


function App() {
  return (
    <div className="min-h-screen w-full bg-login font-display">
      <div className="min-h-screen flex flex-col justify-between">
        <div className="container flex flex-col grow mx-auto my-10 border bg-slate-200 border-gray-400 shadow-2xl">
          <Header />
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
