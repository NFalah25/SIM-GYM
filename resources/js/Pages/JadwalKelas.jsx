
function JadwalKelas ({jadwal}){

    //consol log jadwal kelas
    console.log(jadwal);

    return (
    <div className="container">
    <h1 className="bg-yellow-600 p-5 text-center">Jadwal Kelas</h1>

    <button className="bg-lime-700 p-5 my-10">Tambah Jadwal Kelas</button>

    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Hari</th>
                <th>Waktu</th>
                <th>Nama Ruangan</th>
            </tr>
        </thead>
        <tbody>
                {jadwal.map((jadwal) => (
                    <tr key={jadwal.id}>
                        <td>{jadwal.id}</td>
                        <td>{jadwal.hari}</td>
                        <td>{jadwal.waktu}</td>
                        <td>{jadwal.nama_ruangan}</td>
                        <td>
                            <a href="" className="btn btn-info">Detail</a>
                            <a href="" className="btn btn-warning">Edit</a>
                        </td>
                    </tr>
                ))}
        </tbody>
    </table>

</div>
    )
}

export default JadwalKelas;
