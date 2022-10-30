import React, { useState } from "react";

function InformasiMasaCuti() {
  const [showOptions, setShadowOptions] = useState(false);
  const handleClick = () => {
    setShadowOptions(!showOptions);
  };
  return (
    <div className="flex flex-col w-full items-center justify-center py-10 px-20">
      <div className="flex flex-col justify-around w-full">
        <div className="w-full bg-main h-20 flex text-white text-2xl font-bold items-center p-10 rounded-md">
          Detail Informasi Masa Cuti
        </div>
        <div className="flex justify-around w-full">
          <div className=" w-full h-20 flex text-2xl font-bold items-center p-10 text-black">
            Cuti Hari Minggu
          </div>
          <div class="flex items-center justify-center bg-gray-200">
            <div class="relative inline-block text-left">
              <div>
                <button
                  onClick={handleClick}
                  type="button"
                  class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  Info Cuti
                  <svg
                    class="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              {showOptions && (
                <div
                  class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1"
                >
                  <div class="py-1" role="none">
                    <a
                      href="/"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-600 hover:text-white"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-1"
                    >
                      Jumlah Cuti = 3 Hari
                    </a>
                    <a
                      href="/"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-600 hover:text-white"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-2"
                    >
                      Banyaknya Cuti = 6 Hari
                    </a>
                    <a
                      href="/"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-600 hover:text-white"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-2"
                    >
                      Sisa Masa Cuti = 3 Hari
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-around w-full">
          <div className=" w-full h-20 flex text-2xl font-bold items-center p-10 text-black">
            Cuti Tahunan
          </div>
          <div class="flex items-center justify-center bg-gray-200">
            <div class="relative inline-block text-left">
              <div>
                <button
                  onClick={handleClick}
                  type="button"
                  class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  Info Cuti
                  <svg
                    class="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              {showOptions && (
                <div
                  class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1"
                >
                  <div class="py-1" role="none">
                    <a
                      href="/"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-600 hover:text-white"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-1"
                    >
                      Jumlah Cuti = 1 Hari
                    </a>
                    <a
                      href="/"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-600 hover:text-white"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-2"
                    >
                      Banyaknya Cuti = 3 Hari
                    </a>
                    <a
                      href="/"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-600 hover:text-white"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-2"
                    >
                      Sisa Masa Cuti = 2 Hari
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-around w-full">
          <div className=" w-full h-20 flex text-2xl font-bold items-center p-10 text-black">
            Cuti Izin
          </div>
          <div class="flex items-center justify-center bg-gray-200">
            <div class="relative inline-block text-left">
              <div>
                <button
                  onClick={handleClick}
                  type="button"
                  class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  Info Cuti
                  <svg
                    class="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              {showOptions && (
                <div
                  class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1"
                >
                  <div class="py-1" role="none">
                    <a
                      href="/"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-600 hover:text-white"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-1"
                    >
                      Jumlah Cuti = 2 Hari
                    </a>
                    <a
                      href="/"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-600 hover:text-white"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-2"
                    >
                      Banyaknya Cuti = 5 Hari
                    </a>
                    <a
                      href="/"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-600 hover:text-white"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-2"
                    >
                      Sisa Masa Cuti = 3 Hari
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-around w-full">
          <div className=" w-full h-20 flex text-2xl font-bold items-center p-10 text-black">
            Cuti Libur Nasional
          </div>
          <div class="flex items-center justify-center bg-gray-200">
            <div class="relative inline-block text-left">
              <div>
                <button
                  onClick={handleClick}
                  type="button"
                  class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  Info Cuti
                  <svg
                    class="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              {showOptions && (
                <div
                  class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1"
                >
                  <div class="py-1" role="none">
                    <a
                      href="/"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-600 hover:text-white"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-1"
                    >
                      Jumlah Cuti = 3 Hari
                    </a>
                    <a
                      href="/"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-600 hover:text-white"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-2"
                    >
                      Banyaknya Cuti = 6 Hari
                    </a>
                    <a
                      href="/"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-600 hover:text-white"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-2"
                    >
                      Sisa Masa Cuti = 3 Hari
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-around w-full">
          <div className=" w-full h-20 flex text-2xl font-bold items-center p-10 text-black">
            Cuti Dispensasi
          </div>
          <div class="flex items-center justify-center bg-gray-200">
            <div class="relative inline-block text-left">
              <div>
                <button
                  onClick={handleClick}
                  type="button"
                  class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  Info Cuti
                  <svg
                    class="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              {showOptions && (
                <div
                  class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1"
                >
                  <div class="py-1" role="none">
                    <a
                      href="/"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-600 hover:text-white"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-1"
                    >
                      Jumlah Cuti = 1 Hari
                    </a>
                    <a
                      href="/"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-600 hover:text-white"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-2"
                    >
                      Banyaknya Cuti = 6 Hari
                    </a>
                    <a
                      href="/"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-600 hover:text-white"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-2"
                    >
                      Sisa Masa Cuti = 5 Hari
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformasiMasaCuti;
