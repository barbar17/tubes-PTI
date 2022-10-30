export function MenusUser() {
  const link = [
    {
      title: "Beranda",
      path: "/user/beranda",
      active:
        "h-full w-[250px] px-5 text-white bg-active-btn flex items-center justify-center",
      notActive:
        "h-full w-[250px] px-5 text-white flex items-center justify-center hover:bg-active-btn transition-colors",
    },
    {
      title: "Pengajuan E-Cuti",
      path: "/user/pengajuan_e-cuti",
      active:
        "h-full w-[250px] px-5 text-white bg-active-btn flex items-center justify-center",
      notActive:
        "h-full w-[250px] px-5 text-white flex items-center justify-center hover:bg-active-btn transition-colors",
    },
    {
      title: "Informasi Masa Cuti",
      path: "/user/informasi_masa_cuti",
      active:
        "h-full w-[250px] px-5 text-white bg-active-btn flex items-center justify-center",
      notActive:
        "h-full w-[250px] px-5 text-white flex items-center justify-center hover:bg-active-btn transition-colors",
    },
  ];

  return link;
}
