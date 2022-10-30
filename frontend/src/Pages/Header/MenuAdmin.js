export function MenusAdmin() {
  const link = [
    {
      title: "Beranda",
      path: "/admin/beranda",
      active:
        "h-full w-[250px] px-5 text-white bg-active-btn flex items-center justify-center",
      notActive:
        "h-full w-[250px] px-5 text-white flex items-center justify-center hover:bg-active-btn transition-colors",
    },
    {
      title: "Data Pegawai",
      path: "/admin/data_pegawai",
      active:
        "h-full w-[250px] px-5 text-white bg-active-btn flex items-center justify-center",
      notActive:
        "h-full w-[250px] px-5 text-white flex items-center justify-center hover:bg-active-btn transition-colors",
    },
    {
      title: "Pengajuan Cuti",
      path: "/admin/pengajuan_cuti",
      active:
        "h-full w-[250px] px-5 text-white bg-active-btn flex items-center justify-center",
      notActive:
        "h-full w-[250px] px-5 text-white flex items-center justify-center hover:bg-active-btn transition-colors",
    },
    {
      title: "Laporan Cuti",
      path: "/admin/laporan_cuti",
      active:
        "h-full w-[250px] px-5 text-white bg-active-btn flex items-center justify-center",
      notActive:
        "h-full w-[250px] px-5 text-white flex items-center justify-center hover:bg-active-btn transition-colors",
    },
  ];

  return link;
}
