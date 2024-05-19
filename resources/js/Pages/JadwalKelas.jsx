function JadwalKelas ({jadwal}){

    //consol log jadwal kelas
    console.log(jadwal);

    return (
        <div className="w-full min-h-[100vh] bg-slate-700 flex">
        {/* Sidebar */}
        <div className="min-h-[100vh] bg-slate-950 p-10 flex flex-col items-center">
            <img src="/assets/img/zeus 2.png" alt="Sidebar Logo" className="mt-10 w-40"/>
            <ul className="text-white mt-20 flex flex-col items-center">
                    <li className="mb-8"><a href="#" className="text-xl">Dashboard</a></li>
                    <li className="mb-8"><a href="#" className="text-xl">User</a></li>
                    <li className="mb-8"><a href="#" className="text-xl">Program</a></li>
                    <li className="mb-8"><a href="#" className="text-xl">Transaksi</a></li>
                    <li className="mb-8"><a href="#" className="text-xl rounded-lg border-dashed border-2 border-[#84CC16] p-3">Jadwal</a></li>
                    <li className="mb-8"><a href="#" className="text-xl">Presensi</a></li>
                </ul>
        </div> 
        {/* Sidebar selesai */}
        

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
                

        {/* Navbar */}
            <div className="bg-slate-900 p-5 flex items-center">
                <img src="/assets/img/Ellipse 5.png" alt="Navbar Logo" className="h-10 w-10 object-cover ml-auto" />
            </div>
        {/* Navbar selesai */}


        <div className="h-20 w-5/6 bg-slate-900 p-5 mt-20 rounded-lg flex items-center ml-28 border-collapse border border-slate-500">
            <div className="h-12 w-5/6 bg-slate-700 p-3 rounded-lg ml-0 mr-2 shadow-md border-collapse border border-slate-500">
                <span className="text-slate-200">Search here...</span>
            </div>
            <div className="h-12 w-56 bg-lime-700 p-3 rounded-lg ml-auto shadow-md">
                <span className="dark:text-gray-50 ml-10 text-lg">Tambah Data</span>
            </div>
        </div>


        <div className="w-5/6 bg-slate-900 p-5 mt-10 rounded-lg ml-28 border-collapse border border-slate-500">
            <table className="text-slate-200 w-full text-center">
            <thead className="text-xl">
            <tr className="border-b border-slate-500">
                <th className="px-4 py-4">ID</th>
                <th className="px-4 py-4">Hari</th>
                <th className="px-4 py-4">Waktu</th>
                <th className="px-4 py-4">Nama Ruangan</th>
                <th className="px-4 py-4">Aksi</th>
            </tr>
            </thead>
            
            <tbody>
            <tr className="border-b border-slate-500">
                <td className="px-4 py-2">1</td>
                <td className="px-4 py-2">Senin</td>
                <td className="px-4 py-2">08:00</td>
                <td className="px-4 py-2">Ruang A</td>
                <td className="px-4 py-2">Edit</td>
            </tr>
            <tr> 
                <td className="px-4 py-2">2</td>
                <td className="px-4 py-2">Selasa</td>
                <td className="px-4 py-2">08:00</td>
                <td className="px-4 py-2">Ruang B</td>
                <td className="px-4 py-2">Edit</td>
            </tr>
            </tbody>
            </table>
        </div>
    </div>
</div>
 
    )
}

export default JadwalKelas;