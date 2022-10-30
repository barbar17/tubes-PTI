import React from "react";
import { NavLink } from "react-router-dom";
// import { MenusUser } from "./MenuUser";
import { MenusAdmin } from "./MenuAdmin";
import { Link } from "react-router-dom";

function Header() {
  const navigation = MenusAdmin();

  return (
    <>
      <div className="flex w-full justify-between items-center px-10 py-5">
        <div className="flex items-center gap-10">
          <img
            src="/gambar/logo.svg"
            alt="logo"
            className="w-[150px] h-[150px] object-cover object-center"
          />
          <div className="flex flex-col text-4xl font-semibold">
            <h1>E-CUTI</h1>
            <h1>PT SUGAR LABINTA</h1>
          </div>
        </div>
        <div className="flex flex-col min-w-[100px] justify-center items-end">
          <Link to={"/profil"} className="text-3xl">
            Widodo
          </Link>
          <Link
            to={"/"}
            className=" text-white bg-card-red text-center py-1 px-2 items-center justify-center text-lg rounded-md"
          >
            Log Out
          </Link>
        </div>
      </div>

      <div className="w-full flex bg-main h-14 items-center justify-center">
        <ul className="flex h-full text-xl items-center ">
          {navigation.map((item, index) => {
            return (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  isActive ? item.active : item.notActive
                }
              >
                <span>{item.title}</span>
              </NavLink>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Header;
