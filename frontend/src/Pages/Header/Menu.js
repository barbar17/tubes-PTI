
export function Menus() {
    const link = [
        {
            title: 'Beranda',
            path: '/beranda',
            active: "h-full w-[250px] px-5 text-white bg-active-btn flex items-center justify-center",
            notActive: "h-full w-[250px] px-5 text-white flex items-center justify-center hover:bg-active-btn transition-colors"
        },
        {
            title: 'Pengajuan E-Cuti',
            path: '/pengajuan_e-cuti',
            active: "h-full w-[250px] px-5 text-white bg-active-btn flex items-center justify-center",
            notActive: "h-full w-[250px] px-5 text-white flex items-center justify-center hover:bg-active-btn transition-colors"
        },
        {
            title: 'Informasi Masa Cuti',
            path: '/informasi_masa_cuti',
            active: "h-full w-[250px] px-5 text-white bg-active-btn flex items-center justify-center",
            notActive: "h-full w-[250px] px-5 text-white flex items-center justify-center hover:bg-active-btn transition-colors"
        }
    ]

    return link
}
